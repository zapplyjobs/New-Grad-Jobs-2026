# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T05:18:10.995Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T05:17:24.850Z] ========================================
[2026-01-15T05:17:24.852Z] Discord Bot Execution Log
[2026-01-15T05:17:24.852Z] Environment: GitHub Actions
[2026-01-15T05:17:24.852Z] Node Version: v20.19.6
[2026-01-15T05:17:24.852Z] ========================================
[2026-01-15T05:17:24.852Z] Environment Variables Check:
[2026-01-15T05:17:24.852Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T05:17:24.852Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T05:17:24.852Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T05:17:24.852Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T05:17:24.852Z] 
Multi-Channel Configuration:
[2026-01-15T05:17:24.853Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T05:17:24.853Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T05:17:24.853Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T05:17:24.853Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T05:17:24.853Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T05:17:24.853Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T05:17:24.853Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T05:17:24.853Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T05:17:24.853Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T05:17:24.853Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T05:17:24.853Z] 
Data Files Check:
[2026-01-15T05:17:24.854Z] .github/data/new_jobs.json: ✅ Exists (10 items, 54956 bytes)
[2026-01-15T05:17:24.860Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 847209 bytes)
[2026-01-15T05:17:24.860Z] 
========================================
[2026-01-15T05:17:24.860Z] Starting Enhanced Discord Bot...
[2026-01-15T05:17:24.861Z] ========================================
[2026-01-15T05:17:25.384Z] [BOT] ✅ Loaded V2 database: 1596 jobs
[2026-01-15T05:17:25.814Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T05:17:25.814Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T05:17:25.814Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T05:17:25.926Z] [BOT] ✅ Loaded pending queue: 2720 total (2700 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Analyst at Gotion
[2026-01-15T05:17:25.930Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T05:17:25.930Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T05:17:25.930Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T05:17:25.931Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T05:17:25.931Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T05:17:25.933Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T05:17:25.934Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_002a9a91
[2026-01-15T05:17:25.935Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T05:17:25.952Z] [BOT ERROR] (node:2692) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T05:17:26.263Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_002a9a91 in #🤖・ai-jobs
  ✅ Industry: Data Analyst @ ORG_002a9a91
[2026-01-15T05:17:27.942Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_002a9a91 in #🌉・san-francisco
[2026-01-15T05:17:27.943Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T05:17:29.443Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_002a9a91 (instance #1)
[2026-01-15T05:17:29.444Z] [BOT] 💾 BEFORE ARCHIVING: 1597 jobs in database
[2026-01-15T05:17:29.445Z] [BOT] ✅ No jobs to archive (all 1597 jobs within 7-day window)
[2026-01-15T05:17:29.460Z] [BOT] 💾 Saved posted_jobs.json: 1597 active jobs
[2026-01-15T05:17:29.460Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:17:29.462Z] [BOT] 📍 [ROUTING] "Salesforce Engineer" @ spotify
[2026-01-15T05:17:29.462Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T05:17:29.765Z] [BOT] ✅ Created forum post: 🏢 Salesforce Engineer @ spotify in #🤖・ai-jobs
[2026-01-15T05:17:29.766Z] [BOT] ✅ Industry: Salesforce Engineer @ spotify
[2026-01-15T05:17:31.479Z] [BOT] ✅ Created forum post: 🏢 Salesforce Engineer @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T05:17:32.980Z] [BOT] 💾 Marked as posted: Salesforce Engineer @ spotify (instance #1)
[2026-01-15T05:17:32.981Z] [BOT] 💾 BEFORE ARCHIVING: 1598 jobs in database
[2026-01-15T05:17:32.982Z] [BOT] ✅ No jobs to archive (all 1598 jobs within 7-day window)
[2026-01-15T05:17:32.992Z] [BOT] 💾 Saved posted_jobs.json: 1598 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:17:32.992Z] [BOT] 📍 [ROUTING] "Software Engineer, ML Infra (Junior & New Grad)" @ ORG_56aba366
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T05:17:33.201Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, ML Infra (Junior & New Grad) @ ORG_56aba366 in #🤖・ai-jobs
  ✅ Industry: Software Engineer, ML Infra (Junior & New Grad) @ ORG_56aba366
[2026-01-15T05:17:34.897Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, ML Infra (Junior & New Grad) @ ORG_56aba366 in #🌄・mountain-view
[2026-01-15T05:17:34.897Z] [BOT] ✅ Location: 🌄・mountain-view
[2026-01-15T05:17:36.399Z] [BOT] 💾 Marked as posted: Software Engineer, ML Infra (Junior & New Grad) @ ORG_56aba366 (instance #1)
[2026-01-15T05:17:36.399Z] [BOT] 💾 BEFORE ARCHIVING: 1599 jobs in database
[2026-01-15T05:17:36.400Z] [BOT] ✅ No jobs to archive (all 1599 jobs within 7-day window)
[2026-01-15T05:17:36.414Z] [BOT] 💾 Saved posted_jobs.json: 1599 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:17:39.415Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-15T05:17:39.417Z] [BOT] 📍 [ROUTING] "Product Software Engineer" @ ORG_36b77757
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:17:39.766Z] [BOT] ✅ Created forum post: 📱 Product Software Engineer @ ORG_36b77757 in #💻・tech-jobs
  ✅ Industry: Product Software Engineer @ ORG_36b77757
[2026-01-15T05:17:41.440Z] [BOT] ✅ Created forum post: 📱 Product Software Engineer @ ORG_36b77757 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-15T05:17:42.942Z] [BOT] 💾 Marked as posted: Product Software Engineer @ ORG_36b77757 (instance #1)
[2026-01-15T05:17:42.942Z] [BOT] 💾 BEFORE ARCHIVING: 1600 jobs in database
[2026-01-15T05:17:42.943Z] [BOT] ✅ No jobs to archive (all 1600 jobs within 7-day window)
[2026-01-15T05:17:42.955Z] [BOT] 💾 Saved posted_jobs.json: 1600 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:17:42.956Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Data Arch - Data Ecosystem)" @ ORG_1bb6fcfb
[2026-01-15T05:17:42.956Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:17:43.260Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Data Arch - Data Ecosystem) @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-15T05:17:43.261Z] [BOT] ✅ Industry: Software Engineer Graduate (Data Arch - Data Ecosystem) @ ORG_1bb6fcfb
[2026-01-15T05:17:45.299Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Data Arch - Data Ecosystem) @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-15T05:17:45.300Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T05:17:46.801Z] [BOT] 💾 Marked as posted: Software Engineer Graduate (Data Arch - Data Ecosystem) @ ORG_1bb6fcfb (instance #1)
[2026-01-15T05:17:46.801Z] [BOT] 💾 BEFORE ARCHIVING: 1601 jobs in database
[2026-01-15T05:17:46.802Z] [BOT] ✅ No jobs to archive (all 1601 jobs within 7-day window)
[2026-01-15T05:17:46.814Z] [BOT] 💾 Saved posted_jobs.json: 1601 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:17:46.814Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Data Platfrom TikTok BP)" @ ORG_1bb6fcfb
[2026-01-15T05:17:46.815Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:17:47.006Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Data Platfrom TikTok BP) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate (Data Platfrom TikTok BP) @ ORG_1bb6fcfb
[2026-01-15T05:17:48.717Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Data Platfrom TikTok BP) @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T05:17:50.218Z] [BOT] 💾 Marked as posted: Software Engineer Graduate (Data Platfrom TikTok BP) @ ORG_1bb6fcfb (instance #1)
[2026-01-15T05:17:50.219Z] [BOT] 💾 BEFORE ARCHIVING: 1602 jobs in database
[2026-01-15T05:17:50.220Z] [BOT] ✅ No jobs to archive (all 1602 jobs within 7-day window)
[2026-01-15T05:17:50.231Z] [BOT] 💾 Saved posted_jobs.json: 1602 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:17:50.231Z] [BOT] 📍 [ROUTING] "Full Stack Engineer 1" @ McDonald's
[2026-01-15T05:17:50.232Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:17:50.483Z] [BOT] ✅ Created forum post: 🏢 Full Stack Engineer 1 @ McDonald's in #💻・tech-jobs
[2026-01-15T05:17:50.483Z] [BOT] ✅ Industry: Full Stack Engineer 1 @ McDonald's
[2026-01-15T05:17:52.282Z] [BOT] ✅ Created forum post: 🏢 Full Stack Engineer 1 @ McDonald's in #🌆・chicago
[2026-01-15T05:17:52.282Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-15T05:17:53.783Z] [BOT] 💾 Marked as posted: Full Stack Engineer 1 @ McDonald's (instance #1)
[2026-01-15T05:17:53.784Z] [BOT] 💾 BEFORE ARCHIVING: 1603 jobs in database
[2026-01-15T05:17:53.785Z] [BOT] ✅ No jobs to archive (all 1603 jobs within 7-day window)
[2026-01-15T05:17:53.796Z] [BOT] 💾 Saved posted_jobs.json: 1603 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:17:53.796Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_c910d474 Dynamics Information Technology
   Category: TECH (matched: "software")
[2026-01-15T05:17:53.796Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:17:54.092Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_c910d474 Dynamics Information Technology
[2026-01-15T05:17:55.932Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_c910d474 Dynamics Information Technology in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T05:17:57.432Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_c910d474 Dynamics Information Technology (instance #1)
[2026-01-15T05:17:57.433Z] [BOT] 💾 BEFORE ARCHIVING: 1604 jobs in database
[2026-01-15T05:17:57.434Z] [BOT] ✅ No jobs to archive (all 1604 jobs within 7-day window)
[2026-01-15T05:17:57.445Z] [BOT] 💾 Saved posted_jobs.json: 1604 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:17:57.445Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer - Security - Starlink" @ ORG_afd623b1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:17:57.746Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Security - Starlink @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Full Stack Software Engineer - Security - Starlink @ ORG_afd623b1
[2026-01-15T05:17:59.482Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Security - Starlink @ ORG_afd623b1 in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2026-01-15T05:18:00.982Z] [BOT] 💾 Marked as posted: Full Stack Software Engineer - Security - Starlink @ ORG_afd623b1 (instance #1)
[2026-01-15T05:18:00.983Z] [BOT] 💾 BEFORE ARCHIVING: 1605 jobs in database
[2026-01-15T05:18:00.984Z] [BOT] ✅ No jobs to archive (all 1605 jobs within 7-day window)
[2026-01-15T05:18:00.994Z] [BOT] 💾 Saved posted_jobs.json: 1605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:18:00.995Z] [BOT] 📍 [ROUTING] "Junior Exercise Software IT Specialist" @ ORG_bd9def69
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:18:01.341Z] [BOT] ✅ Created forum post: 🏢 Junior Exercise Software IT Specialist @ ORG_bd9def69 in #💻・tech-jobs
  ✅ Industry: Junior Exercise Software IT Specialist @ ORG_bd9def69
[2026-01-15T05:18:03.194Z] [BOT] ✅ Created forum post: 🏢 Junior Exercise Software IT Specialist @ ORG_bd9def69 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T05:18:04.694Z] [BOT] 💾 Marked as posted: Junior Exercise Software IT Specialist @ ORG_bd9def69 (instance #1)
[2026-01-15T05:18:04.695Z] [BOT] 💾 BEFORE ARCHIVING: 1606 jobs in database
[2026-01-15T05:18:04.696Z] [BOT] ✅ No jobs to archive (all 1606 jobs within 7-day window)
[2026-01-15T05:18:04.705Z] [BOT] 💾 Saved posted_jobs.json: 1606 active jobs
[2026-01-15T05:18:04.705Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:18:07.706Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T05:18:07.707Z] [BOT] ⏭️  Skipping duplicate: JID_3d9d80cb (posted within 7 days)
[2026-01-15T05:18:07.707Z] [BOT] ⏭️  Skipping duplicate: JID_8a2871be (posted within 7 days)
[2026-01-15T05:18:07.707Z] [BOT] ⏭️  Skipping duplicate: JID_db087c04 (posted within 7 days)
[2026-01-15T05:18:07.707Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_0b3935b8 (posted within 7 days)
[2026-01-15T05:18:07.708Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_7e21dfbd (posted within 7 days)
[2026-01-15T05:18:07.708Z] [BOT] ⏭️  Skipping duplicate: JID_952c25d5 (posted within 7 days)
[2026-01-15T05:18:07.708Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_6edab8dc-i_rq210148-1 (posted within 7 days)
[2026-01-15T05:18:07.708Z] [BOT] ⏭️  Skipping duplicate: JID_0f19144d (posted within 7 days)
[2026-01-15T05:18:07.708Z] [BOT] ⏭️  Skipping duplicate: JID_57ea5813 (posted within 7 days)
[2026-01-15T05:18:07.708Z] [BOT] ⏭️  Skipping duplicate: JID_02449eab (posted within 7 days)
[2026-01-15T05:18:07.822Z] [BOT] ✅ Loaded pending queue: 2720 total (2700 pending, 20 enriched, 0 posted)
[2026-01-15T05:18:07.997Z] [BOT] ✅ Saved pending queue: 2720 total (2700 pending, 10 enriched, 10 posted)
[2026-01-15T05:18:07.997Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T05:18:08.055Z] [BOT] 📂 Loaded 3775 existing routing entries
[2026-01-15T05:18:08.119Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3785
[2026-01-15T05:18:08.119Z] [BOT] Timestamp: 2026-01-15T05:18:08.102Z
[2026-01-15T05:18:08.119Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T05:18:08.120Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-15T05:18:08.120Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T05:18:08.120Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
[2026-01-15T05:18:08.120Z] [BOT] 1. #💻・tech-jobs: 7 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🌉・san-francisco: 3 posts
     4. #💻・remote-usa: 2 posts
     5. #🗽・new-york: 1 posts
[2026-01-15T05:18:08.120Z] [BOT] [STATS] Channel stats saved
[2026-01-15T05:18:10.145Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2692) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*