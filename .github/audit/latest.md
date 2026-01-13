# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T05:43:43.662Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T05:42:52.409Z] ========================================
[2026-01-13T05:42:52.411Z] Discord Bot Execution Log
[2026-01-13T05:42:52.411Z] Environment: GitHub Actions
[2026-01-13T05:42:52.411Z] Node Version: v20.19.6
[2026-01-13T05:42:52.411Z] ========================================
[2026-01-13T05:42:52.411Z] Environment Variables Check:
[2026-01-13T05:42:52.411Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T05:42:52.411Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T05:42:52.411Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T05:42:52.412Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T05:42:52.412Z] 
Multi-Channel Configuration:
[2026-01-13T05:42:52.412Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T05:42:52.412Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T05:42:52.412Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T05:42:52.412Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T05:42:52.412Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T05:42:52.412Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T05:42:52.412Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T05:42:52.412Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T05:42:52.412Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T05:42:52.412Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T05:42:52.413Z] 
Data Files Check:
[2026-01-13T05:42:52.414Z] .github/data/new_jobs.json: ✅ Exists (10 items, 112045 bytes)
[2026-01-13T05:42:52.417Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 398742 bytes)
[2026-01-13T05:42:52.417Z] 
========================================
[2026-01-13T05:42:52.417Z] Starting Enhanced Discord Bot...
[2026-01-13T05:42:52.417Z] ========================================
[2026-01-13T05:42:52.942Z] [BOT] ✅ Loaded V2 database: 758 jobs
[2026-01-13T05:42:53.907Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T05:42:53.907Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T05:42:53.908Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T05:42:54.012Z] [BOT] ✅ Loaded pending queue: 2701 total (2681 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Backend Engineer  - Data Infrastructure at spotify
[2026-01-13T05:42:54.014Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T05:42:54.015Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T05:42:54.015Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T05:42:54.016Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-13T05:42:54.016Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - National Channel Sales Manager, Convergint (East) @ verkada: atlanta, ga united states, jacksonville, fl united states, philadelphia, pa united states
   - Account Executive, Territory (Mid-Market) @ verkada: austin, tx united states, tempe, az united states, salt lake city, ut united states, new york city, ny united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-13T05:42:54.016Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T05:42:54.021Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-13T05:42:54.022Z] [BOT] 📍 [ROUTING] "Backend Engineer  - Data Infrastructure" @ spotify
[2026-01-13T05:42:54.022Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T05:42:54.026Z] [BOT ERROR] (node:2455) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T05:42:54.192Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer  - Data Infrastructure @ spotify in #🤖・ai-jobs
[2026-01-13T05:42:54.192Z] [BOT] ✅ Industry: Backend Engineer  - Data Infrastructure @ spotify
[2026-01-13T05:42:55.958Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer  - Data Infrastructure @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T05:42:57.459Z] [BOT] 💾 Marked as posted: Backend Engineer  - Data Infrastructure @ spotify (instance #1)
[2026-01-13T05:42:57.459Z] [BOT] 💾 BEFORE ARCHIVING: 759 jobs in database
[2026-01-13T05:42:57.460Z] [BOT] ✅ No jobs to archive (all 759 jobs within 7-day window)
[2026-01-13T05:42:57.469Z] [BOT] 💾 Saved posted_jobs.json: 759 active jobs
[2026-01-13T05:42:57.469Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:42:57.470Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_9d38443e of Chicago
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T05:42:57.700Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_9d38443e of Chicago in #🤖・ai-jobs
[2026-01-13T05:42:57.700Z] [BOT] ✅ Industry: Data Analyst @ ORG_9d38443e of Chicago
[2026-01-13T05:42:59.360Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-13T05:43:00.860Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_9d38443e of Chicago (instance #1)
💾 BEFORE ARCHIVING: 760 jobs in database
[2026-01-13T05:43:00.861Z] [BOT] ✅ No jobs to archive (all 760 jobs within 7-day window)
[2026-01-13T05:43:00.868Z] [BOT] 💾 Saved posted_jobs.json: 760 active jobs
[2026-01-13T05:43:00.868Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:43:03.869Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-13T05:43:03.870Z] [BOT] 📍 [ROUTING] "Consulting Associate - Engineering or Geology" @ ORG_d41a2092
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:43:04.090Z] [BOT] ✅ Created forum post: 🏢 Consulting Associate - Engineering or Geology @ ORG_d41a2092 in #💻・tech-jobs
  ✅ Industry: Consulting Associate - Engineering or Geology @ ORG_d41a2092
[2026-01-13T05:43:05.833Z] [BOT] ✅ Created forum post: 🏢 Consulting Associate - Engineering or Geology @ ORG_d41a2092 in #💻・remote-usa
[2026-01-13T05:43:05.833Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T05:43:07.333Z] [BOT] 💾 Marked as posted: Consulting Associate - Engineering or Geology @ ORG_d41a2092 (instance #1)
[2026-01-13T05:43:07.333Z] [BOT] 💾 BEFORE ARCHIVING: 761 jobs in database
[2026-01-13T05:43:07.334Z] [BOT] ✅ No jobs to archive (all 761 jobs within 7-day window)
[2026-01-13T05:43:07.340Z] [BOT] 💾 Saved posted_jobs.json: 761 active jobs
[2026-01-13T05:43:07.340Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:43:07.341Z] [BOT] 📍 [ROUTING] "Atc – Software and Platform Analyst" @ ORG_6cd9e83c
[2026-01-13T05:43:07.341Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:43:07.497Z] [BOT] ✅ Created forum post: 🏢 Atc – Software and Platform Analyst @ ORG_6cd9e83c in #💻・tech-jobs
  ✅ Industry: Atc – Software and Platform Analyst @ ORG_6cd9e83c
[2026-01-13T05:43:09.192Z] [BOT] ✅ Created forum post: 🏢 Atc – Software and Platform Analyst @ ORG_6cd9e83c in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T05:43:10.694Z] [BOT] 💾 Marked as posted: Atc – Software and Platform Analyst @ ORG_6cd9e83c (instance #1)
[2026-01-13T05:43:10.694Z] [BOT] 💾 BEFORE ARCHIVING: 762 jobs in database
[2026-01-13T05:43:10.695Z] [BOT] ✅ No jobs to archive (all 762 jobs within 7-day window)
[2026-01-13T05:43:10.702Z] [BOT] 💾 Saved posted_jobs.json: 762 active jobs
[2026-01-13T05:43:10.702Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:43:10.702Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - 3D/4D Generation - 2026 Start" @ ORG_08c9a13c
[2026-01-13T05:43:10.702Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:43:10.993Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - 3D/4D Generation - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-13T05:43:10.993Z] [BOT] ✅ Industry: Research Scientist Graduate - 3D/4D Generation - 2026 Start @ ORG_08c9a13c
[2026-01-13T05:43:12.642Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - 3D/4D Generation - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-13T05:43:12.642Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T05:43:14.143Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - 3D/4D Generation - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-13T05:43:14.143Z] [BOT] 💾 BEFORE ARCHIVING: 763 jobs in database
[2026-01-13T05:43:14.144Z] [BOT] ✅ No jobs to archive (all 763 jobs within 7-day window)
[2026-01-13T05:43:14.150Z] [BOT] 💾 Saved posted_jobs.json: 763 active jobs
[2026-01-13T05:43:14.150Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:43:17.151Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T05:43:17.152Z] [BOT] 📍 [ROUTING] "National Channel Sales Manager, Convergint (East)" @ verkada
[2026-01-13T05:43:17.152Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-13T05:43:17.354Z] [BOT] ✅ Created forum post: 🏢 National Channel Sales Manager, Convergint (East) @ verkada in #📈・JID_fb739488
[2026-01-13T05:43:17.354Z] [BOT] ✅ Industry: National Channel Sales Manager, Convergint (East) @ verkada
[2026-01-13T05:43:18.855Z] [BOT] 💾 Marked as posted: National Channel Sales Manager, Convergint (East) @ verkada (instance #1)
[2026-01-13T05:43:18.855Z] [BOT] 💾 BEFORE ARCHIVING: 764 jobs in database
[2026-01-13T05:43:18.856Z] [BOT] ✅ No jobs to archive (all 764 jobs within 7-day window)
[2026-01-13T05:43:18.862Z] [BOT] 💾 Saved posted_jobs.json: 764 active jobs
[2026-01-13T05:43:18.863Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:43:18.863Z] [BOT] 💾 Marked as posted: National Channel Sales Manager, Convergint (East) @ verkada (instance #1)
[2026-01-13T05:43:18.863Z] [BOT] 💾 BEFORE ARCHIVING: 765 jobs in database
[2026-01-13T05:43:18.863Z] [BOT] ✅ No jobs to archive (all 765 jobs within 7-day window)
[2026-01-13T05:43:18.869Z] [BOT] 💾 Saved posted_jobs.json: 765 active jobs
[2026-01-13T05:43:18.869Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: National Channel Sales Manager, Convergint (East) @ verkada (instance #1)
[2026-01-13T05:43:18.869Z] [BOT] 💾 BEFORE ARCHIVING: 766 jobs in database
[2026-01-13T05:43:18.870Z] [BOT] ✅ No jobs to archive (all 766 jobs within 7-day window)
[2026-01-13T05:43:18.875Z] [BOT] 💾 Saved posted_jobs.json: 766 active jobs
[2026-01-13T05:43:18.875Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:43:21.876Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-13T05:43:21.876Z] [BOT] 📍 [ROUTING] "Technology Analyst Program" @ ORG_526691c5 Insurance
[2026-01-13T05:43:21.877Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-13T05:43:22.305Z] [BOT] ✅ Created forum post: 🏢 Technology Analyst Program @ ORG_526691c5 Insurance in #💰・finance-jobs
[2026-01-13T05:43:22.305Z] [BOT] ✅ Industry: Technology Analyst Program @ ORG_526691c5 Insurance
[2026-01-13T05:43:24.347Z] [BOT] ✅ Created forum post: 🏢 Technology Analyst Program @ ORG_526691c5 Insurance in #🗽・new-york
[2026-01-13T05:43:24.347Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T05:43:25.847Z] [BOT] 💾 Marked as posted: Technology Analyst Program @ ORG_526691c5 Insurance (instance #1)
[2026-01-13T05:43:25.847Z] [BOT] 💾 BEFORE ARCHIVING: 767 jobs in database
[2026-01-13T05:43:25.848Z] [BOT] ✅ No jobs to archive (all 767 jobs within 7-day window)
[2026-01-13T05:43:25.854Z] [BOT] 💾 Saved posted_jobs.json: 767 active jobs
[2026-01-13T05:43:25.854Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:43:28.854Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-13T05:43:28.855Z] [BOT] 📍 [ROUTING] "Account Executive, Select, Austin" @ verkada
[2026-01-13T05:43:28.855Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:43:29.122Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Select, Austin @ verkada in #💲・sales-jobs
[2026-01-13T05:43:29.123Z] [BOT] ✅ Industry: Account Executive, Select, Austin @ verkada
[2026-01-13T05:43:30.841Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Select, Austin @ verkada in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-13T05:43:32.342Z] [BOT] 💾 Marked as posted: Account Executive, Select, Austin @ verkada (instance #1)
[2026-01-13T05:43:32.342Z] [BOT] 💾 BEFORE ARCHIVING: 768 jobs in database
[2026-01-13T05:43:32.343Z] [BOT] ✅ No jobs to archive (all 768 jobs within 7-day window)
[2026-01-13T05:43:32.349Z] [BOT] 💾 Saved posted_jobs.json: 768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:43:32.350Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
[2026-01-13T05:43:32.350Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:43:32.532Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Territory (Mid-Market) @ verkada in #💲・sales-jobs
  ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-01-13T05:43:34.199Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Territory (Mid-Market) @ verkada in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-13T05:43:35.700Z] [BOT] 💾 Marked as posted: Account Executive, Territory (Mid-Market) @ verkada (instance #1)
[2026-01-13T05:43:35.700Z] [BOT] 💾 BEFORE ARCHIVING: 769 jobs in database
[2026-01-13T05:43:35.701Z] [BOT] ✅ No jobs to archive (all 769 jobs within 7-day window)
[2026-01-13T05:43:35.707Z] [BOT] 💾 Saved posted_jobs.json: 769 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:43:35.708Z] [BOT] 💾 Marked as posted: Account Executive, Territory (Mid-Market) @ verkada (instance #1)
[2026-01-13T05:43:35.708Z] [BOT] 💾 BEFORE ARCHIVING: 770 jobs in database
[2026-01-13T05:43:35.708Z] [BOT] ✅ No jobs to archive (all 770 jobs within 7-day window)
[2026-01-13T05:43:35.714Z] [BOT] 💾 Saved posted_jobs.json: 770 active jobs
[2026-01-13T05:43:35.714Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Account Executive, Territory (Mid-Market) @ verkada (instance #1)
💾 BEFORE ARCHIVING: 771 jobs in database
[2026-01-13T05:43:35.715Z] [BOT] ✅ No jobs to archive (all 771 jobs within 7-day window)
[2026-01-13T05:43:35.720Z] [BOT] 💾 Saved posted_jobs.json: 771 active jobs
[2026-01-13T05:43:35.720Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:43:35.720Z] [BOT] 💾 Marked as posted: Account Executive, Territory (Mid-Market) @ verkada (instance #1)
[2026-01-13T05:43:35.721Z] [BOT] 💾 BEFORE ARCHIVING: 772 jobs in database
[2026-01-13T05:43:35.721Z] [BOT] ✅ No jobs to archive (all 772 jobs within 7-day window)
[2026-01-13T05:43:35.727Z] [BOT] 💾 Saved posted_jobs.json: 772 active jobs
[2026-01-13T05:43:35.727Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:43:35.727Z] [BOT] 📍 [ROUTING] "Channel Development Representative, South East (Tampa)" @ verkada
[2026-01-13T05:43:35.727Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:43:35.892Z] [BOT] ✅ Created forum post: 🏢 Channel Development Representative, South East (Tampa) @ verkada in #💲・sales-jobs
  ✅ Industry: Channel Development Representative, South East (Tampa) @ verkada
[2026-01-13T05:43:37.394Z] [BOT] 💾 Marked as posted: Channel Development Representative, South East (Tampa) @ verkada (instance #1)
[2026-01-13T05:43:37.394Z] [BOT] 💾 BEFORE ARCHIVING: 773 jobs in database
[2026-01-13T05:43:37.395Z] [BOT] ✅ No jobs to archive (all 773 jobs within 7-day window)
[2026-01-13T05:43:37.400Z] [BOT] 💾 Saved posted_jobs.json: 773 active jobs
[2026-01-13T05:43:37.401Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:43:40.401Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T05:43:40.402Z] [BOT] ⏭️  Skipping duplicate: JID_fe3ddf49 (posted within 7 days)
[2026-01-13T05:43:40.402Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_6cf3bd5c-geology_r00028752 (posted within 7 days)
⏭️  Skipping duplicate: JID_e5503d49 (posted within 7 days)
[2026-01-13T05:43:40.402Z] [BOT] ⏭️  Skipping duplicate: JID_e938e280-analyst_jr32386 (posted within 7 days)
[2026-01-13T05:43:40.402Z] [BOT] ⏭️  Skipping duplicate: JID_cfb24211-2026_r2561 (posted within 7 days)
[2026-01-13T05:43:40.402Z] [BOT] ⏭️  Skipping duplicate: JID_28f307b7-naelfy26_r00304885 (posted within 7 days)
[2026-01-13T05:43:40.402Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_5b3b53e8-detail (posted within 7 days)
[2026-01-13T05:43:40.403Z] [BOT] ⏭️  Skipping duplicate: JID_9601d5e9 (posted within 7 days)
[2026-01-13T05:43:40.403Z] [BOT] ⏭️  Skipping duplicate: JID_10ccb697 (posted within 7 days)
[2026-01-13T05:43:40.403Z] [BOT] ⏭️  Skipping duplicate: JID_f59a87c2 (posted within 7 days)
[2026-01-13T05:43:40.520Z] [BOT] ✅ Loaded pending queue: 2701 total (2681 pending, 20 enriched, 0 posted)
[2026-01-13T05:43:40.678Z] [BOT] ✅ Saved pending queue: 2701 total (2681 pending, 10 enriched, 10 posted)
[2026-01-13T05:43:40.678Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T05:43:40.729Z] [BOT] 📂 Loaded 2905 existing routing entries
[2026-01-13T05:43:40.787Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T05:43:40.787Z] [BOT] Total entries: 2915
   Timestamp: 2026-01-13T05:43:40.773Z
[2026-01-13T05:43:40.788Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T05:43:40.788Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-13T05:43:40.788Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
[2026-01-13T05:43:40.788Z] [BOT] Channels used: 10
   Top channels:
     1. #🗽・new-york: 3 posts
     2. #💻・tech-jobs: 3 posts
     3. #💲・sales-jobs: 3 posts
     4. #🤖・ai-jobs: 2 posts
[2026-01-13T05:43:40.788Z] [BOT] 5. #🤠・austin: 2 posts
[2026-01-13T05:43:40.788Z] [BOT] [STATS] Channel stats saved
[2026-01-13T05:43:42.813Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2455) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*