# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T07:53:32.721Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T07:52:40.157Z] ========================================
[2026-01-13T07:52:40.159Z] Discord Bot Execution Log
[2026-01-13T07:52:40.159Z] Environment: GitHub Actions
[2026-01-13T07:52:40.159Z] Node Version: v20.19.6
[2026-01-13T07:52:40.159Z] ========================================
[2026-01-13T07:52:40.159Z] Environment Variables Check:
[2026-01-13T07:52:40.159Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T07:52:40.159Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T07:52:40.159Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T07:52:40.159Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T07:52:40.160Z] 
Multi-Channel Configuration:
[2026-01-13T07:52:40.160Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T07:52:40.160Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T07:52:40.160Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T07:52:40.160Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T07:52:40.160Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T07:52:40.160Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T07:52:40.160Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T07:52:40.160Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T07:52:40.160Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T07:52:40.160Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T07:52:40.161Z] 
Data Files Check:
[2026-01-13T07:52:40.161Z] .github/data/new_jobs.json: ✅ Exists (10 items, 65992 bytes)
[2026-01-13T07:52:40.165Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 452629 bytes)
[2026-01-13T07:52:40.165Z] 
========================================
[2026-01-13T07:52:40.165Z] Starting Enhanced Discord Bot...
[2026-01-13T07:52:40.165Z] ========================================
[2026-01-13T07:52:40.702Z] [BOT] ✅ Loaded V2 database: 858 jobs
[2026-01-13T07:52:41.139Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T07:52:41.140Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T07:52:41.140Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T07:52:41.277Z] [BOT] ✅ Loaded pending queue: 2698 total (2678 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Assistant - Electrical and Computer Engineering at Carnegie Mellon University
[2026-01-13T07:52:41.279Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T07:52:41.280Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T07:52:41.280Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T07:52:41.281Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T07:52:41.281Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T07:52:41.286Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-13T07:52:41.287Z] [BOT] 📍 [ROUTING] "Research Assistant - Electrical and Computer Engineering" @ ORG_15a5b314 Mellon University
[2026-01-13T07:52:41.287Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:52:41.292Z] [BOT ERROR] (node:2458) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T07:52:41.872Z] [BOT] ✅ Created forum post: 🏢 Research Assistant - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University in #💻・tech-jobs
  ✅ Industry: Research Assistant - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University
[2026-01-13T07:52:43.527Z] [BOT] ✅ Created forum post: 🏢 Research Assistant - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T07:52:45.027Z] [BOT] 💾 Marked as posted: Research Assistant - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University (instance #1)
[2026-01-13T07:52:45.027Z] [BOT] 💾 BEFORE ARCHIVING: 859 jobs in database
[2026-01-13T07:52:45.028Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-13T07:52:45.034Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:52:45.034Z] [BOT] 📍 [ROUTING] "Applied Scientist 1 - Amazon" @ ORG_49d2dc07
[2026-01-13T07:52:45.035Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:52:45.187Z] [BOT] ✅ Created forum post: 📦 Applied Scientist 1 - Amazon @ ORG_49d2dc07 in #💻・tech-jobs
[2026-01-13T07:52:45.188Z] [BOT] ✅ Industry: Applied Scientist 1 - Amazon @ ORG_49d2dc07
[2026-01-13T07:52:46.862Z] [BOT] ✅ Created forum post: 📦 Applied Scientist 1 - Amazon @ ORG_49d2dc07 in #🌉・san-francisco
[2026-01-13T07:52:46.862Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T07:52:48.363Z] [BOT] 💾 Marked as posted: Applied Scientist 1 - Amazon @ ORG_49d2dc07 (instance #1)
[2026-01-13T07:52:48.363Z] [BOT] 💾 BEFORE ARCHIVING: 860 jobs in database
[2026-01-13T07:52:48.364Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-13T07:52:48.373Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-13T07:52:48.373Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:52:48.373Z] [BOT] 📍 [ROUTING] "Support Engineer - Entry-Level" @ ORG_ed077f3d Asset
   Category: TECH (matched: "engineer/engineering")
[2026-01-13T07:52:48.373Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:52:48.572Z] [BOT] ✅ Created forum post: 🏢 Support Engineer - Entry-Level @ ORG_ed077f3d Asset in #💻・tech-jobs
[2026-01-13T07:52:48.573Z] [BOT] ✅ Industry: Support Engineer - Entry-Level @ ORG_ed077f3d Asset
[2026-01-13T07:52:50.253Z] [BOT] ✅ Created forum post: 🏢 Support Engineer - Entry-Level @ ORG_ed077f3d Asset in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T07:52:51.754Z] [BOT] 💾 Marked as posted: Support Engineer - Entry-Level @ ORG_ed077f3d Asset (instance #1)
[2026-01-13T07:52:51.754Z] [BOT] 💾 BEFORE ARCHIVING: 861 jobs in database
[2026-01-13T07:52:51.755Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-13T07:52:51.763Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:52:51.764Z] [BOT] 📍 [ROUTING] "Sales and Product Development Engineer" @ ORG_7611a65f
[2026-01-13T07:52:51.764Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:52:51.928Z] [BOT] ✅ Created forum post: 🏢 Sales and Product Development Engineer @ ORG_7611a65f in #💻・tech-jobs
  ✅ Industry: Sales and Product Development Engineer @ ORG_7611a65f
[2026-01-13T07:52:53.616Z] [BOT] ✅ Created forum post: 🏢 Sales and Product Development Engineer @ ORG_7611a65f in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T07:52:55.117Z] [BOT] 💾 Marked as posted: Sales and Product Development Engineer @ ORG_7611a65f (instance #1)
[2026-01-13T07:52:55.118Z] [BOT] 💾 BEFORE ARCHIVING: 862 jobs in database
[2026-01-13T07:52:55.118Z] [BOT] ✅ No jobs to archive (all 862 jobs within 7-day window)
[2026-01-13T07:52:55.125Z] [BOT] 💾 Saved posted_jobs.json: 862 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:52:58.125Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-13T07:52:58.125Z] [BOT] 📍 [ROUTING] "Data Scientist - Analytics" @ ORG_9f566c74in
   Category: AI (matched: "artificial intelligence")
[2026-01-13T07:52:58.126Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T07:52:58.399Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Analytics @ ORG_9f566c74in in #🤖・ai-jobs
  ✅ Industry: Data Scientist - Analytics @ ORG_9f566c74in
[2026-01-13T07:53:00.067Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Analytics @ ORG_9f566c74in in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T07:53:01.569Z] [BOT] 💾 Marked as posted: Data Scientist - Analytics @ ORG_9f566c74in (instance #1)
[2026-01-13T07:53:01.569Z] [BOT] 💾 BEFORE ARCHIVING: 863 jobs in database
[2026-01-13T07:53:01.570Z] [BOT] ✅ No jobs to archive (all 863 jobs within 7-day window)
[2026-01-13T07:53:01.578Z] [BOT] 💾 Saved posted_jobs.json: 863 active jobs
[2026-01-13T07:53:01.578Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:53:01.578Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Research Scientist/Engineer" @ ORG_72fd3ae0
[2026-01-13T07:53:01.578Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T07:53:01.765Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-13T07:53:01.765Z] [BOT] ✅ Industry: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0
[2026-01-13T07:53:03.610Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🌧️・seattle
[2026-01-13T07:53:03.610Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-13T07:53:05.112Z] [BOT] 💾 Marked as posted: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-13T07:53:05.112Z] [BOT] 💾 BEFORE ARCHIVING: 864 jobs in database
[2026-01-13T07:53:05.113Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-13T07:53:05.120Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-13T07:53:05.120Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:53:05.120Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence" @ ORG_2380d607 View A&M University
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T07:53:05.120Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T07:53:05.275Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence @ ORG_2380d607 View A&M Universit in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence @ ORG_2380d607 View A&M University
[2026-01-13T07:53:07.018Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence @ ORG_2380d607 View A&M Universit in #🤠・austin
[2026-01-13T07:53:07.019Z] [BOT] ✅ Location: 🤠・austin
[2026-01-13T07:53:08.520Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher - Pier - Trustworthy Artificial Intelligence @ ORG_2380d607 View A&M University (instance #1)
[2026-01-13T07:53:08.520Z] [BOT] 💾 BEFORE ARCHIVING: 865 jobs in database
[2026-01-13T07:53:08.521Z] [BOT] ✅ No jobs to archive (all 865 jobs within 7-day window)
[2026-01-13T07:53:08.528Z] [BOT] 💾 Saved posted_jobs.json: 865 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:53:11.528Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T07:53:11.528Z] [BOT] 📍 [ROUTING] "Business Intelligence Developer - IT Analytics Health" @ ORG_0f4848d3ing Health
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T07:53:11.817Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer - IT Analytics Health @ ORG_0f4848d3ing Health in #📈・JID_fb739488
[2026-01-13T07:53:11.817Z] [BOT] ✅ Industry: Business Intelligence Developer - IT Analytics Health @ ORG_0f4848d3ing Health
[2026-01-13T07:53:15.023Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer - IT Analytics Health @ ORG_0f4848d3ing Health in #💻・remote-usa
[2026-01-13T07:53:15.023Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T07:53:16.523Z] [BOT] 💾 Marked as posted: Business Intelligence Developer - IT Analytics Health @ ORG_0f4848d3ing Health (instance #1)
[2026-01-13T07:53:16.524Z] [BOT] 💾 BEFORE ARCHIVING: 866 jobs in database
[2026-01-13T07:53:16.524Z] [BOT] ✅ No jobs to archive (all 866 jobs within 7-day window)
[2026-01-13T07:53:16.532Z] [BOT] 💾 Saved posted_jobs.json: 866 active jobs
[2026-01-13T07:53:16.532Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:53:19.533Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-13T07:53:19.534Z] [BOT] 📍 [ROUTING] "GSI & Consultancies, Partner Lead" @ vercel
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T07:53:19.808Z] [BOT] ✅ Created forum post: 🏢 GSI & Consultancies, Partner Lead @ vercel in #💲・sales-jobs
[2026-01-13T07:53:19.808Z] [BOT] ✅ Industry: GSI & Consultancies, Partner Lead @ vercel
[2026-01-13T07:53:21.622Z] [BOT] ✅ Created forum post: 🏢 GSI & Consultancies, Partner Lead @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T07:53:23.123Z] [BOT] 💾 Marked as posted: GSI & Consultancies, Partner Lead @ vercel (instance #1)
[2026-01-13T07:53:23.124Z] [BOT] 💾 BEFORE ARCHIVING: 867 jobs in database
[2026-01-13T07:53:23.124Z] [BOT] ✅ No jobs to archive (all 867 jobs within 7-day window)
[2026-01-13T07:53:23.132Z] [BOT] 💾 Saved posted_jobs.json: 867 active jobs
[2026-01-13T07:53:23.132Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:53:23.133Z] [BOT] 📍 [ROUTING] "Strategic Partner Development, Product Partnerships " @ anthropic
[2026-01-13T07:53:23.133Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T07:53:23.346Z] [BOT] ✅ Created forum post: 🏢 Strategic Partner Development, Product Partnerships  @ anthropic in #💲・sales-jobs
[2026-01-13T07:53:23.347Z] [BOT] ✅ Industry: Strategic Partner Development, Product Partnerships  @ anthropic
[2026-01-13T07:53:25.024Z] [BOT] ✅ Created forum post: 🏢 Strategic Partner Development, Product Partnerships  @ anthropic in #🌉・san-francisco
[2026-01-13T07:53:25.025Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T07:53:26.525Z] [BOT] 💾 Marked as posted: Strategic Partner Development, Product Partnerships  @ anthropic (instance #1)
[2026-01-13T07:53:26.525Z] [BOT] 💾 BEFORE ARCHIVING: 868 jobs in database
[2026-01-13T07:53:26.526Z] [BOT] ✅ No jobs to archive (all 868 jobs within 7-day window)
[2026-01-13T07:53:26.533Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:53:29.534Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T07:53:29.534Z] [BOT] ⏭️  Skipping duplicate: JID_fa74dc63-engineering_2023955 (posted within 7 days)
[2026-01-13T07:53:29.535Z] [BOT] ⏭️  Skipping duplicate: JID_0ad0b953 (posted within 7 days)
[2026-01-13T07:53:29.535Z] [BOT] ⏭️  Skipping duplicate: JID_eae91a50 (posted within 7 days)
[2026-01-13T07:53:29.535Z] [BOT] ⏭️  Skipping duplicate: JID_ada9e137 (posted within 7 days)
[2026-01-13T07:53:29.535Z] [BOT] ⏭️  Skipping duplicate: JID_39e50ca8 (posted within 7 days)
[2026-01-13T07:53:29.535Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r158869 (posted within 7 days)
⏭️  Skipping duplicate: JID_914a3e4e-cx_1001-job-2021718 (posted within 7 days)
[2026-01-13T07:53:29.535Z] [BOT] ⏭️  Skipping duplicate: JID_84f0bad6-pvamu_external-JID_08c2ea1a-2_r-089885-1 (posted within 7 days)
[2026-01-13T07:53:29.535Z] [BOT] ⏭️  Skipping duplicate: JID_6accfd5f (posted within 7 days)
⏭️  Skipping duplicate: JID_35252852 (posted within 7 days)
[2026-01-13T07:53:29.650Z] [BOT] ✅ Loaded pending queue: 2698 total (2678 pending, 20 enriched, 0 posted)
[2026-01-13T07:53:29.820Z] [BOT] ✅ Saved pending queue: 2698 total (2678 pending, 10 enriched, 10 posted)
[2026-01-13T07:53:29.821Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T07:53:29.872Z] [BOT] 📂 Loaded 2995 existing routing entries
[2026-01-13T07:53:29.929Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3005
   Timestamp: 2026-01-13T07:53:29.917Z
[2026-01-13T07:53:29.930Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 20
[2026-01-13T07:53:29.930Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-13T07:53:29.930Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-13T07:53:29.930Z] [BOT] Total posts: 20
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #🌉・san-francisco: 4 posts
     3. #💻・remote-usa: 3 posts
     4. #🤖・ai-jobs: 3 posts
[2026-01-13T07:53:29.930Z] [BOT] 5. #💲・sales-jobs: 2 posts
[2026-01-13T07:53:29.930Z] [BOT] [STATS] Channel stats saved
[2026-01-13T07:53:31.955Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2458) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*