# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T04:56:51.856Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T04:56:03.073Z] ========================================
[2025-12-16T04:56:03.074Z] Discord Bot Execution Log
[2025-12-16T04:56:03.074Z] Environment: GitHub Actions
[2025-12-16T04:56:03.075Z] Node Version: v20.19.6
[2025-12-16T04:56:03.075Z] ========================================
[2025-12-16T04:56:03.075Z] Environment Variables Check:
[2025-12-16T04:56:03.075Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T04:56:03.075Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T04:56:03.075Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T04:56:03.075Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T04:56:03.075Z] 
Multi-Channel Configuration:
[2025-12-16T04:56:03.075Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T04:56:03.075Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T04:56:03.076Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T04:56:03.076Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T04:56:03.076Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T04:56:03.076Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T04:56:03.076Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T04:56:03.076Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T04:56:03.076Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T04:56:03.076Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T04:56:03.076Z] 
Data Files Check:
[2025-12-16T04:56:03.077Z] .github/data/new_jobs.json: ✅ Exists (10 items, 43939 bytes)
[2025-12-16T04:56:03.078Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 153696 bytes)
[2025-12-16T04:56:03.078Z] 
========================================
[2025-12-16T04:56:03.078Z] Starting Enhanced Discord Bot...
[2025-12-16T04:56:03.078Z] ========================================
[2025-12-16T04:56:03.595Z] [BOT] ✅ Loaded V2 database: 245 jobs
[2025-12-16T04:56:04.558Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T04:56:04.558Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T04:56:04.558Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T04:56:04.561Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T04:56:04.616Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T04:56:04.687Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T04:56:04.689Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T04:56:04.689Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T04:56:04.689Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T04:56:04.690Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T04:56:04.690Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T04:56:04.692Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-16T04:56:04.694Z] [BOT] 📍 [ROUTING] "Design Strategist - Data Analytics + Insights" @ ORG_4c018515
[2025-12-16T04:56:04.694Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:56:04.711Z] [BOT ERROR] (node:2892) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T04:56:04.911Z] [BOT] ✅ Created forum post: 🏢 Design Strategist - Data Analytics + Insights @ ORG_4c018515 in #💻・tech-jobs
[2025-12-16T04:56:04.912Z] [BOT] ✅ Industry: Design Strategist - Data Analytics + Insights @ ORG_4c018515
[2025-12-16T04:56:06.557Z] [BOT] ✅ Created forum post: 🏢 Design Strategist - Data Analytics + Insights @ ORG_4c018515 in #🗽・new-york
[2025-12-16T04:56:06.557Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-16T04:56:08.057Z] [BOT] 💾 Marked as posted: Design Strategist - Data Analytics + Insights @ ORG_4c018515 (instance #1)
[2025-12-16T04:56:08.057Z] [BOT] 💾 BEFORE ARCHIVING: 246 jobs in database
[2025-12-16T04:56:08.057Z] [BOT] ✅ No jobs to archive (all 246 jobs within 7-day window)
[2025-12-16T04:56:08.064Z] [BOT] 💾 Saved posted_jobs.json: 246 active jobs
[2025-12-16T04:56:08.064Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:56:08.065Z] [BOT] 📍 [ROUTING] "Application Engineer 1 - Pre-sale Product Selection" @ ORG_7a23266b
[2025-12-16T04:56:08.065Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:56:08.339Z] [BOT] ✅ Created forum post: 🏢 Application Engineer 1 - Pre-sale Product Selection @ ORG_7a23266b in #💻・tech-jobs
[2025-12-16T04:56:08.339Z] [BOT] ✅ Industry: Application Engineer 1 - Pre-sale Product Selection @ ORG_7a23266b
[2025-12-16T04:56:10.184Z] [BOT] ✅ Created forum post: 🏢 Application Engineer 1 - Pre-sale Product Selection @ ORG_7a23266b in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-16T04:56:11.685Z] [BOT] 💾 Marked as posted: Application Engineer 1 - Pre-sale Product Selection @ ORG_7a23266b (instance #1)
[2025-12-16T04:56:11.685Z] [BOT] 💾 BEFORE ARCHIVING: 247 jobs in database
[2025-12-16T04:56:11.686Z] [BOT] ✅ No jobs to archive (all 247 jobs within 7-day window)
[2025-12-16T04:56:11.688Z] [BOT] 💾 Saved posted_jobs.json: 247 active jobs
[2025-12-16T04:56:11.688Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:56:11.689Z] [BOT] 📍 [ROUTING] "Investments Operational Support Analyst - Document/Data Management" @ ORG_fa3fca02 Life
[2025-12-16T04:56:11.689Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:56:11.965Z] [BOT] ✅ Created forum post: 🏢 Investments Operational Support Analyst - Document/Data Management @ ORG_fa3fca02 Life in #💻・tech-jobs
  ✅ Industry: Investments Operational Support Analyst - Document/Data Management @ ORG_fa3fca02 Life
[2025-12-16T04:56:13.833Z] [BOT] ✅ Created forum post: 🏢 Investments Operational Support Analyst - Document/Data Management @ ORG_fa3fca02 Life in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-16T04:56:15.335Z] [BOT] 💾 Marked as posted: Investments Operational Support Analyst - Document/Data Management @ ORG_fa3fca02 Life (instance #1)
[2025-12-16T04:56:15.335Z] [BOT] 💾 BEFORE ARCHIVING: 248 jobs in database
[2025-12-16T04:56:15.335Z] [BOT] ✅ No jobs to archive (all 248 jobs within 7-day window)
[2025-12-16T04:56:15.339Z] [BOT] 💾 Saved posted_jobs.json: 248 active jobs
[2025-12-16T04:56:15.339Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:56:15.340Z] [BOT] 📍 [ROUTING] "Software Engineer - Inference AI/ML" @ ORG_ba7c5cf0
[2025-12-16T04:56:15.340Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:56:15.568Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Inference AI/ML @ ORG_ba7c5cf0 in #💻・tech-jobs
[2025-12-16T04:56:15.569Z] [BOT] ✅ Industry: Software Engineer - Inference AI/ML @ ORG_ba7c5cf0
[2025-12-16T04:56:17.229Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Inference AI/ML @ ORG_ba7c5cf0 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T04:56:18.731Z] [BOT] 💾 Marked as posted: Software Engineer - Inference AI/ML @ ORG_ba7c5cf0 (instance #1)
[2025-12-16T04:56:18.731Z] [BOT] 💾 BEFORE ARCHIVING: 249 jobs in database
[2025-12-16T04:56:18.731Z] [BOT] ✅ No jobs to archive (all 249 jobs within 7-day window)
[2025-12-16T04:56:18.734Z] [BOT] 💾 Saved posted_jobs.json: 249 active jobs
[2025-12-16T04:56:18.734Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:56:18.735Z] [BOT] 📍 [ROUTING] "Full Stack Engineer" @ hhaexchange
[2025-12-16T04:56:18.735Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:56:19.103Z] [BOT] ✅ Created forum post: 🏢 Full Stack Engineer @ hhaexchange in #💻・tech-jobs
  ✅ Industry: Full Stack Engineer @ hhaexchange
[2025-12-16T04:56:20.820Z] [BOT] ✅ Created forum post: 🏢 Full Stack Engineer @ hhaexchange in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-16T04:56:22.321Z] [BOT] 💾 Marked as posted: Full Stack Engineer @ hhaexchange (instance #1)
[2025-12-16T04:56:22.321Z] [BOT] 💾 BEFORE ARCHIVING: 250 jobs in database
[2025-12-16T04:56:22.321Z] [BOT] ✅ No jobs to archive (all 250 jobs within 7-day window)
[2025-12-16T04:56:22.324Z] [BOT] 💾 Saved posted_jobs.json: 250 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:56:25.324Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2025-12-16T04:56:25.325Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_8a98c24f
[2025-12-16T04:56:25.325Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-16T04:56:25.609Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_8a98c24f in #🤖・ai-jobs
  ✅ Industry: Data Scientist @ ORG_8a98c24f
[2025-12-16T04:56:27.469Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_8a98c24f in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T04:56:28.970Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_8a98c24f (instance #1)
[2025-12-16T04:56:28.970Z] [BOT] 💾 BEFORE ARCHIVING: 251 jobs in database
[2025-12-16T04:56:28.970Z] [BOT] ✅ No jobs to archive (all 251 jobs within 7-day window)
[2025-12-16T04:56:28.973Z] [BOT] 💾 Saved posted_jobs.json: 251 active jobs
[2025-12-16T04:56:28.973Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:56:28.974Z] [BOT] 📍 [ROUTING] "Data Scientist – Early Career - Research - PhD" @ ORG_ce770667
[2025-12-16T04:56:28.974Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-16T04:56:29.229Z] [BOT] ✅ Created forum post: 🟢 Data Scientist – Early Career - Research - PhD @ ORG_ce770667 in #🤖・ai-jobs
  ✅ Industry: Data Scientist – Early Career - Research - PhD @ ORG_ce770667
[2025-12-16T04:56:30.884Z] [BOT] ✅ Created forum post: 🟢 Data Scientist – Early Career - Research - PhD @ ORG_ce770667 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-16T04:56:32.385Z] [BOT] 💾 Marked as posted: Data Scientist – Early Career - Research - PhD @ ORG_ce770667 (instance #1)
[2025-12-16T04:56:32.385Z] [BOT] 💾 BEFORE ARCHIVING: 252 jobs in database
[2025-12-16T04:56:32.385Z] [BOT] ✅ No jobs to archive (all 252 jobs within 7-day window)
[2025-12-16T04:56:32.389Z] [BOT] 💾 Saved posted_jobs.json: 252 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:56:32.389Z] [BOT] 📍 [ROUTING] "Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence" @ ORG_569ec613 Morgan Chase
[2025-12-16T04:56:32.389Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T04:56:32.577Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence  in #🤖・ai-jobs
  ✅ Industry: Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence @ ORG_569ec613 Morgan Chase
[2025-12-16T04:56:34.376Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence  in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T04:56:35.877Z] [BOT] 💾 Marked as posted: Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence @ ORG_569ec613 Morgan Chase (instance #1)
[2025-12-16T04:56:35.877Z] [BOT] 💾 BEFORE ARCHIVING: 253 jobs in database
[2025-12-16T04:56:35.877Z] [BOT] ✅ No jobs to archive (all 253 jobs within 7-day window)
[2025-12-16T04:56:35.881Z] [BOT] 💾 Saved posted_jobs.json: 253 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:56:35.882Z] [BOT] 📍 [ROUTING] "Engineering Scientist Associate" @ ORG_9d38443e of Texas - Austin
[2025-12-16T04:56:35.882Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-16T04:56:36.122Z] [BOT] ✅ Created forum post: 🏢 Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
  ✅ Industry: Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin
[2025-12-16T04:56:37.771Z] [BOT] ✅ Created forum post: 🏢 Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-16T04:56:39.272Z] [BOT] 💾 Marked as posted: Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin (instance #1)
[2025-12-16T04:56:39.272Z] [BOT] 💾 BEFORE ARCHIVING: 254 jobs in database
[2025-12-16T04:56:39.273Z] [BOT] ✅ No jobs to archive (all 254 jobs within 7-day window)
[2025-12-16T04:56:39.276Z] [BOT] 💾 Saved posted_jobs.json: 254 active jobs
[2025-12-16T04:56:39.276Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:56:42.278Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-16T04:56:42.278Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_8cf51e99 Group
[2025-12-16T04:56:42.278Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T04:56:42.581Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_8cf51e99 Group in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_8cf51e99 Group
[2025-12-16T04:56:44.252Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_8cf51e99 Group in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-16T04:56:45.754Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_8cf51e99 Group (instance #1)
[2025-12-16T04:56:45.754Z] [BOT] 💾 BEFORE ARCHIVING: 255 jobs in database
[2025-12-16T04:56:45.755Z] [BOT] ✅ No jobs to archive (all 255 jobs within 7-day window)
[2025-12-16T04:56:45.758Z] [BOT] 💾 Saved posted_jobs.json: 255 active jobs
[2025-12-16T04:56:45.758Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:56:48.758Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T04:56:48.758Z] [BOT] ⏭️  Skipping duplicate: JID_7e3d6ed0-insights_r-16508 (posted within 7 days)
[2025-12-16T04:56:48.759Z] [BOT] ⏭️  Skipping duplicate: JID_27ef52d9-scientist_r0166434 (posted within 7 days)
⏭️  Skipping duplicate: JID_aecea04f (posted within 7 days)
⏭️  Skipping duplicate: JID_d93d97a0-management_r15681-1 (posted within 7 days)
[2025-12-16T04:56:48.759Z] [BOT] ⏭️  Skipping duplicate: JID_6bb08f4f-CH_81c7aa05 (posted within 7 days)
⏭️  Skipping duplicate: JID_b4bb08df (posted within 7 days)
[2025-12-16T04:56:48.759Z] [BOT] ⏭️  Skipping duplicate: JID_8d8fd67b (posted within 7 days)
⏭️  Skipping duplicate: JID_860e27d6-cx_1001-job-210680850 (posted within 7 days)
⏭️  Skipping duplicate: JID_eae6d47c-application_r_00042538 (posted within 7 days)
[2025-12-16T04:56:48.759Z] [BOT] ⏭️  Skipping duplicate: JID_c9288196 (posted within 7 days)
[2025-12-16T04:56:48.762Z] [BOT] ✅ Loaded pending queue: 633 total (613 pending, 20 enriched, 0 posted)
[2025-12-16T04:56:48.771Z] [BOT] ✅ Saved pending queue: 633 total (613 pending, 10 enriched, 10 posted)
[2025-12-16T04:56:48.772Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T04:56:48.809Z] [BOT] 📂 Loaded 238 existing routing entries
[2025-12-16T04:56:48.848Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2025-12-16T04:56:48.848Z] [BOT] Total entries: 248
   Timestamp: 2025-12-16T04:56:48.846Z
[2025-12-16T04:56:48.848Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T04:56:48.848Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T04:56:50.859Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2892) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*