# Discord Bot Execution Audit
**Timestamp:** 2025-12-21T20:24:27.447Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-21T20:23:37.808Z] ========================================
[2025-12-21T20:23:37.809Z] Discord Bot Execution Log
[2025-12-21T20:23:37.809Z] Environment: GitHub Actions
[2025-12-21T20:23:37.810Z] Node Version: v20.19.6
[2025-12-21T20:23:37.810Z] ========================================
[2025-12-21T20:23:37.810Z] Environment Variables Check:
[2025-12-21T20:23:37.810Z] DISCORD_TOKEN: ✅ Set
[2025-12-21T20:23:37.810Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-21T20:23:37.810Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-21T20:23:37.810Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-21T20:23:37.810Z] 
Multi-Channel Configuration:
[2025-12-21T20:23:37.810Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-21T20:23:37.810Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-21T20:23:37.810Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-21T20:23:37.811Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-21T20:23:37.811Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-21T20:23:37.811Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-21T20:23:37.811Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-21T20:23:37.811Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-21T20:23:37.811Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-21T20:23:37.811Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-21T20:23:37.811Z] 
Data Files Check:
[2025-12-21T20:23:37.811Z] .github/data/new_jobs.json: ✅ Exists (10 items, 36680 bytes)
[2025-12-21T20:23:37.815Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 519789 bytes)
[2025-12-21T20:23:37.815Z] 
========================================
[2025-12-21T20:23:37.815Z] Starting Enhanced Discord Bot...
[2025-12-21T20:23:37.815Z] ========================================
[2025-12-21T20:23:38.346Z] [BOT] ✅ Loaded V2 database: 888 jobs
[2025-12-21T20:23:39.089Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-21T20:23:39.089Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-21T20:23:39.090Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-21T20:23:39.090Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-21T20:23:39.204Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 165
[2025-12-21T20:23:39.206Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-21T20:23:39.207Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-21T20:23:39.207Z] [BOT] 📋 After blacklist filter: 9 jobs (1 blacklisted)
[2025-12-21T20:23:39.207Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2025-12-21T20:23:39.208Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-21T20:23:39.208Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-21T20:23:39.213Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-21T20:23:39.213Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
[2025-12-21T20:23:39.213Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:23:39.218Z] [BOT ERROR] (node:2758) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-21T20:23:39.446Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
[2025-12-21T20:23:39.447Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-21T20:23:41.176Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🗽・new-york
[2025-12-21T20:23:41.176Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-21T20:23:42.677Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-21T20:23:42.677Z] [BOT] 💾 BEFORE ARCHIVING: 889 jobs in database
[2025-12-21T20:23:42.678Z] [BOT] ✅ No jobs to archive (all 889 jobs within 7-day window)
[2025-12-21T20:23:42.696Z] [BOT] 💾 Saved posted_jobs.json: 889 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:23:42.696Z] [BOT] 📍 [ROUTING] "Research Assistant - Electrical and Computer Engineering" @ ORG_15a5b314 Mellon University
[2025-12-21T20:23:42.696Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:23:42.904Z] [BOT] ✅ Created forum post: 🏢 Research Assistant - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University in #💻・tech-jobs
[2025-12-21T20:23:42.904Z] [BOT] ✅ Industry: Research Assistant - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University
[2025-12-21T20:23:44.622Z] [BOT] ✅ Created forum post: 🏢 Research Assistant - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T20:23:46.123Z] [BOT] 💾 Marked as posted: Research Assistant - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University (instance #1)
[2025-12-21T20:23:46.123Z] [BOT] 💾 BEFORE ARCHIVING: 890 jobs in database
[2025-12-21T20:23:46.124Z] [BOT] ✅ No jobs to archive (all 890 jobs within 7-day window)
[2025-12-21T20:23:46.130Z] [BOT] 💾 Saved posted_jobs.json: 890 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:23:46.130Z] [BOT] 📍 [ROUTING] "Applied Scientist 1 - Amazon" @ ORG_49d2dc07
[2025-12-21T20:23:46.130Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:23:46.312Z] [BOT] ✅ Created forum post: 📦 Applied Scientist 1 - Amazon @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Applied Scientist 1 - Amazon @ ORG_49d2dc07
[2025-12-21T20:23:48.028Z] [BOT] ✅ Created forum post: 📦 Applied Scientist 1 - Amazon @ ORG_49d2dc07 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-21T20:23:49.528Z] [BOT] 💾 Marked as posted: Applied Scientist 1 - Amazon @ ORG_49d2dc07 (instance #1)
[2025-12-21T20:23:49.529Z] [BOT] 💾 BEFORE ARCHIVING: 891 jobs in database
[2025-12-21T20:23:49.529Z] [BOT] ✅ No jobs to archive (all 891 jobs within 7-day window)
[2025-12-21T20:23:49.538Z] [BOT] 💾 Saved posted_jobs.json: 891 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:23:49.538Z] [BOT] 📍 [ROUTING] "Support Engineer - Entry-Level" @ ORG_ed077f3d Asset
[2025-12-21T20:23:49.539Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T20:23:49.793Z] [BOT] ✅ Created forum post: 🏢 Support Engineer - Entry-Level @ ORG_ed077f3d Asset in #💻・tech-jobs
  ✅ Industry: Support Engineer - Entry-Level @ ORG_ed077f3d Asset
[2025-12-21T20:23:51.508Z] [BOT] ✅ Created forum post: 🏢 Support Engineer - Entry-Level @ ORG_ed077f3d Asset in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-21T20:23:53.009Z] [BOT] 💾 Marked as posted: Support Engineer - Entry-Level @ ORG_ed077f3d Asset (instance #1)
[2025-12-21T20:23:53.009Z] [BOT] 💾 BEFORE ARCHIVING: 892 jobs in database
[2025-12-21T20:23:53.010Z] [BOT] ✅ No jobs to archive (all 892 jobs within 7-day window)
[2025-12-21T20:23:53.016Z] [BOT] 💾 Saved posted_jobs.json: 892 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:23:56.016Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-21T20:23:56.017Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_180876eb
[2025-12-21T20:23:56.017Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-21T20:23:57.790Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_180876eb in #🤖・ai-jobs
[2025-12-21T20:23:57.790Z] [BOT] ✅ Industry: Software Engineer @ ORG_180876eb
[2025-12-21T20:23:59.503Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_180876eb in #💻・remote-usa
[2025-12-21T20:23:59.503Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-21T20:24:01.004Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_180876eb (instance #1)
[2025-12-21T20:24:01.004Z] [BOT] 💾 BEFORE ARCHIVING: 893 jobs in database
[2025-12-21T20:24:01.005Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2025-12-21T20:24:01.013Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
[2025-12-21T20:24:01.014Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T20:24:01.014Z] [BOT] 📍 [ROUTING] "Data Scientist - Analytics" @ ORG_9f566c74in
[2025-12-21T20:24:01.014Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-21T20:24:01.293Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Analytics @ ORG_9f566c74in in #🤖・ai-jobs
  ✅ Industry: Data Scientist - Analytics @ ORG_9f566c74in
[2025-12-21T20:24:03.003Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Analytics @ ORG_9f566c74in in #🌉・san-francisco
[2025-12-21T20:24:03.003Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-21T20:24:04.504Z] [BOT] 💾 Marked as posted: Data Scientist - Analytics @ ORG_9f566c74in (instance #1)
[2025-12-21T20:24:04.504Z] [BOT] 💾 BEFORE ARCHIVING: 894 jobs in database
[2025-12-21T20:24:04.505Z] [BOT] ✅ No jobs to archive (all 894 jobs within 7-day window)
[2025-12-21T20:24:04.513Z] [BOT] 💾 Saved posted_jobs.json: 894 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:24:07.513Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-21T20:24:07.513Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee" @ ORG_a867f63f National Laboratory
   Category: HR (matched: "hr")
[2025-12-21T20:24:07.513Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-21T20:24:07.772Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #📁・JID_e938df7b
  ✅ Industry: Postdoctoral Appointee @ ORG_a867f63f National Laboratory
[2025-12-21T20:24:09.636Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-21T20:24:11.137Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee @ ORG_a867f63f National Laboratory (instance #1)
💾 BEFORE ARCHIVING: 895 jobs in database
[2025-12-21T20:24:11.138Z] [BOT] ✅ No jobs to archive (all 895 jobs within 7-day window)
[2025-12-21T20:24:11.145Z] [BOT] 💾 Saved posted_jobs.json: 895 active jobs
[2025-12-21T20:24:11.145Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T20:24:14.146Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-21T20:24:14.146Z] [BOT] 📍 [ROUTING] "Business Intelligence Developer - IT Analytics Health" @ ORG_0f4848d3ing Health
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-21T20:24:14.146Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T20:24:14.460Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer - IT Analytics Health @ ORG_0f4848d3ing Health in #📈・JID_fb739488
[2025-12-21T20:24:14.460Z] [BOT] ✅ Industry: Business Intelligence Developer - IT Analytics Health @ ORG_0f4848d3ing Health
[2025-12-21T20:24:16.210Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer - IT Analytics Health @ ORG_0f4848d3ing Health in #💻・remote-usa
[2025-12-21T20:24:16.210Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-21T20:24:17.711Z] [BOT] 💾 Marked as posted: Business Intelligence Developer - IT Analytics Health @ ORG_0f4848d3ing Health (instance #1)
[2025-12-21T20:24:17.711Z] [BOT] 💾 BEFORE ARCHIVING: 896 jobs in database
[2025-12-21T20:24:17.712Z] [BOT] ✅ No jobs to archive (all 896 jobs within 7-day window)
[2025-12-21T20:24:17.720Z] [BOT] 💾 Saved posted_jobs.json: 896 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:24:17.721Z] [BOT] 📍 [ROUTING] "Technology Analyst Program - Application Development" @ ORG_a5457c49
[2025-12-21T20:24:17.721Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-21T20:24:17.901Z] [BOT] ✅ Created forum post: 🏢 Technology Analyst Program - Application Development @ ORG_a5457c49 in #📈・JID_fb739488
  ✅ Industry: Technology Analyst Program - Application Development @ ORG_a5457c49
[2025-12-21T20:24:19.608Z] [BOT] ✅ Created forum post: 🏢 Technology Analyst Program - Application Development @ ORG_a5457c49 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-21T20:24:21.109Z] [BOT] 💾 Marked as posted: Technology Analyst Program - Application Development @ ORG_a5457c49 (instance #1)
[2025-12-21T20:24:21.109Z] [BOT] 💾 BEFORE ARCHIVING: 897 jobs in database
[2025-12-21T20:24:21.110Z] [BOT] ✅ No jobs to archive (all 897 jobs within 7-day window)
[2025-12-21T20:24:21.119Z] [BOT] 💾 Saved posted_jobs.json: 897 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T20:24:24.120Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-21T20:24:24.120Z] [BOT] ⏭️  Skipping duplicate: JID_69bec257 (posted within 7 days)
[2025-12-21T20:24:24.120Z] [BOT] ⏭️  Skipping duplicate: JID_9d3fd4cc (posted within 7 days)
[2025-12-21T20:24:24.121Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_4c7a51f7-hardware_421528-1 (posted within 7 days)
[2025-12-21T20:24:24.121Z] [BOT] ⏭️  Skipping duplicate: JID_fa74dc63-engineering_2023955 (posted within 7 days)
⏭️  Skipping duplicate: JID_0ad0b953 (posted within 7 days)
⏭️  Skipping duplicate: JID_eae91a50 (posted within 7 days)
⏭️  Skipping duplicate: JID_ada9e137 (posted within 7 days)
⏭️  Skipping duplicate: JID_8aff247a-_r-10383557 (posted within 7 days)
⏭️  Skipping duplicate: JID_39e50ca8 (posted within 7 days)
[2025-12-21T20:24:24.122Z] [BOT] ✅ Loaded pending queue: 26 total (6 pending, 20 enriched, 0 posted)
[2025-12-21T20:24:24.124Z] [BOT] ✅ Saved pending queue: 26 total (6 pending, 11 enriched, 9 posted)
[2025-12-21T20:24:24.124Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-21T20:24:24.167Z] [BOT] 📂 Loaded 972 existing routing entries
[2025-12-21T20:24:24.219Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 981
   Timestamp: 2025-12-21T20:24:24.210Z
📝 Discord posting log saved: .github/logs/JID_e38d000c.jsonl
   Total attempts: 19
   Successful: 18
   Failed: 0
   Skipped: 1
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #💻・remote-usa: 3 posts
     3. #🌉・san-francisco: 3 posts
     4. #🗽・new-york: 2 posts
     5. #🤖・ai-jobs: 2 posts
[STATS] Channel stats saved
[2025-12-21T20:24:26.228Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2758) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*