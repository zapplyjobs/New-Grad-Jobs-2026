# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T06:57:11.370Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T06:56:33.566Z] ========================================
[2026-01-21T06:56:33.568Z] Discord Bot Execution Log
[2026-01-21T06:56:33.568Z] Environment: GitHub Actions
[2026-01-21T06:56:33.568Z] Node Version: v20.19.6
[2026-01-21T06:56:33.568Z] ========================================
[2026-01-21T06:56:33.568Z] Environment Variables Check:
[2026-01-21T06:56:33.568Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T06:56:33.568Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T06:56:33.568Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T06:56:33.569Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T06:56:33.569Z] 
Multi-Channel Configuration:
[2026-01-21T06:56:33.569Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T06:56:33.569Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T06:56:33.569Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T06:56:33.569Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T06:56:33.569Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T06:56:33.569Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T06:56:33.569Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T06:56:33.569Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T06:56:33.569Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T06:56:33.569Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T06:56:33.570Z] 
Data Files Check:
[2026-01-21T06:56:33.571Z] .github/data/new_jobs.json: ✅ Exists (10 items, 185525 bytes)
[2026-01-21T06:56:33.583Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1790174 bytes)
[2026-01-21T06:56:33.583Z] 
========================================
[2026-01-21T06:56:33.583Z] Starting Enhanced Discord Bot...
[2026-01-21T06:56:33.583Z] ========================================
[2026-01-21T06:56:34.123Z] [BOT] ✅ Loaded V2 database: 3147 jobs
[2026-01-21T06:56:34.854Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T06:56:34.854Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T06:56:34.854Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T06:56:34.970Z] [BOT] ✅ Loaded pending queue: 2743 total (2723 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Field Marketing Specialist, West at airtable
[2026-01-21T06:56:34.974Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T06:56:34.974Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T06:56:34.975Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T06:56:34.975Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-21T06:56:34.976Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Product Designer - DeepSky @ airtable: san francisco, ca;, remote
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-21T06:56:34.976Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T06:56:34.979Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T06:56:34.980Z] [BOT] 📍 [ROUTING] "Field Marketing Specialist, West" @ airtable
[2026-01-21T06:56:34.980Z] [BOT] Category: TECH (matched: "project manager")
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:56:34.997Z] [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T06:56:35.354Z] [BOT] ✅ Posted message: Field Marketing Specialist, West @ airtable in #tech-jobs
[2026-01-21T06:56:35.354Z] [BOT] ✅ Industry: Field Marketing Specialist, West @ airtable
[2026-01-21T06:56:35.355Z] [BOT] 💾 Added channel posting: Field Marketing Specialist, West @ airtable → category channel (1 total channels)
[2026-01-21T06:56:35.356Z] [BOT] 💾 BEFORE ARCHIVING: 3148 jobs in database
[2026-01-21T06:56:35.358Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T06:56:35.363Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T06:56:35.363Z] [BOT] ✅ Archiving complete: 10 archived, 3138 active
[2026-01-21T06:56:35.389Z] [BOT] 💾 Saved posted_jobs.json: 3138 active jobs
[2026-01-21T06:56:35.389Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:36.891Z] [BOT] 💾 Marked as posted: Field Marketing Specialist, West @ airtable (instance #1)
[2026-01-21T06:56:36.891Z] [BOT] 💾 BEFORE ARCHIVING: 3139 jobs in database
[2026-01-21T06:56:36.893Z] [BOT] ✅ No jobs to archive (all 3139 jobs within 7-day window)
[2026-01-21T06:56:36.911Z] [BOT] 💾 Saved posted_jobs.json: 3139 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:36.911Z] [BOT] 📍 [ROUTING] "Lead Solutions Consultant" @ airtable
   Category: TECH (default)
[2026-01-21T06:56:36.912Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T06:56:37.176Z] [BOT] ✅ Posted message: Lead Solutions Consultant @ airtable in #tech-jobs
[2026-01-21T06:56:37.176Z] [BOT] ✅ Industry: Lead Solutions Consultant @ airtable
[2026-01-21T06:56:37.177Z] [BOT] 💾 Added channel posting: Lead Solutions Consultant @ airtable → category channel (1 total channels)
[2026-01-21T06:56:37.177Z] [BOT] 💾 BEFORE ARCHIVING: 3140 jobs in database
[2026-01-21T06:56:37.179Z] [BOT] ✅ No jobs to archive (all 3140 jobs within 7-day window)
[2026-01-21T06:56:37.200Z] [BOT] 💾 Saved posted_jobs.json: 3140 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:38.869Z] [BOT] ✅ Posted message: Lead Solutions Consultant @ airtable in #JID_98d4f0de
[2026-01-21T06:56:38.869Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T06:56:38.869Z] [BOT] 💾 Added channel posting: Lead Solutions Consultant @ airtable → location channel (2 total channels)
[2026-01-21T06:56:38.870Z] [BOT] 💾 BEFORE ARCHIVING: 3140 jobs in database
[2026-01-21T06:56:38.872Z] [BOT] ✅ No jobs to archive (all 3140 jobs within 7-day window)
[2026-01-21T06:56:38.892Z] [BOT] 💾 Saved posted_jobs.json: 3140 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:40.393Z] [BOT] 💾 Marked as posted: Lead Solutions Consultant @ airtable (instance #1)
[2026-01-21T06:56:40.394Z] [BOT] 💾 BEFORE ARCHIVING: 3141 jobs in database
[2026-01-21T06:56:40.396Z] [BOT] ✅ No jobs to archive (all 3141 jobs within 7-day window)
[2026-01-21T06:56:40.416Z] [BOT] 💾 Saved posted_jobs.json: 3141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:40.416Z] [BOT] 📍 [ROUTING] "Product Designer - DeepSky" @ airtable
[2026-01-21T06:56:40.416Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:56:42.218Z] [BOT] ✅ Posted message: Product Designer - DeepSky @ airtable in #tech-jobs
  ✅ Industry: Product Designer - DeepSky @ airtable
[2026-01-21T06:56:42.219Z] [BOT] 💾 Added channel posting: Product Designer - DeepSky @ airtable → category channel (1 total channels)
[2026-01-21T06:56:42.219Z] [BOT] 💾 BEFORE ARCHIVING: 3142 jobs in database
[2026-01-21T06:56:42.221Z] [BOT] ✅ No jobs to archive (all 3142 jobs within 7-day window)
[2026-01-21T06:56:42.239Z] [BOT] 💾 Saved posted_jobs.json: 3142 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:43.739Z] [BOT] 💾 Marked as posted: Product Designer - DeepSky @ airtable (instance #1)
[2026-01-21T06:56:43.739Z] [BOT] 💾 BEFORE ARCHIVING: 3143 jobs in database
[2026-01-21T06:56:43.741Z] [BOT] ✅ No jobs to archive (all 3143 jobs within 7-day window)
[2026-01-21T06:56:43.763Z] [BOT] 💾 Saved posted_jobs.json: 3143 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:43.764Z] [BOT] 💾 Marked as posted: Product Designer - Mobile @ airtable (instance #1)
[2026-01-21T06:56:43.764Z] [BOT] 💾 BEFORE ARCHIVING: 3144 jobs in database
[2026-01-21T06:56:43.766Z] [BOT] ✅ No jobs to archive (all 3144 jobs within 7-day window)
[2026-01-21T06:56:43.787Z] [BOT] 💾 Saved posted_jobs.json: 3144 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:43.787Z] [BOT] 📍 [ROUTING] "Product Manager, AI & Automation" @ airtable
[2026-01-21T06:56:43.787Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:56:43.787Z] [BOT] ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-21T06:56:44.012Z] [BOT] ✅ Posted message: Product Manager, AI & Automation @ airtable in #tech-jobs
  ✅ Industry: Product Manager, AI & Automation @ airtable
[2026-01-21T06:56:44.013Z] [BOT] 💾 Added channel posting: Product Manager, AI & Automation @ airtable → category channel (1 total channels)
[2026-01-21T06:56:44.013Z] [BOT] 💾 BEFORE ARCHIVING: 3145 jobs in database
[2026-01-21T06:56:44.015Z] [BOT] ✅ No jobs to archive (all 3145 jobs within 7-day window)
[2026-01-21T06:56:44.034Z] [BOT] 💾 Saved posted_jobs.json: 3145 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:45.536Z] [BOT] 💾 Marked as posted: Product Manager, AI & Automation @ airtable (instance #1)
[2026-01-21T06:56:45.537Z] [BOT] 💾 BEFORE ARCHIVING: 3146 jobs in database
[2026-01-21T06:56:45.539Z] [BOT] ✅ No jobs to archive (all 3146 jobs within 7-day window)
[2026-01-21T06:56:45.558Z] [BOT] 💾 Saved posted_jobs.json: 3146 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:45.558Z] [BOT] 📍 [ROUTING] "Renewals Associate" @ airtable
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:56:45.758Z] [BOT] ✅ Posted message: Renewals Associate @ airtable in #tech-jobs
  ✅ Industry: Renewals Associate @ airtable
[2026-01-21T06:56:45.759Z] [BOT] 💾 Added channel posting: Renewals Associate @ airtable → category channel (1 total channels)
[2026-01-21T06:56:45.760Z] [BOT] 💾 BEFORE ARCHIVING: 3147 jobs in database
[2026-01-21T06:56:45.762Z] [BOT] ✅ No jobs to archive (all 3147 jobs within 7-day window)
[2026-01-21T06:56:45.781Z] [BOT] 💾 Saved posted_jobs.json: 3147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:47.283Z] [BOT] 💾 Marked as posted: Renewals Associate @ airtable (instance #1)
[2026-01-21T06:56:47.283Z] [BOT] 💾 BEFORE ARCHIVING: 3148 jobs in database
[2026-01-21T06:56:47.285Z] [BOT] ✅ No jobs to archive (all 3148 jobs within 7-day window)
[2026-01-21T06:56:47.304Z] [BOT] 💾 Saved posted_jobs.json: 3148 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:50.305Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T06:56:50.306Z] [BOT] 📍 [ROUTING] "People Analytics Lead" @ airtable
[2026-01-21T06:56:50.306Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T06:56:50.485Z] [BOT] ✅ Posted message: People Analytics Lead @ airtable in #JID_fb739488
  ✅ Industry: People Analytics Lead @ airtable
[2026-01-21T06:56:50.485Z] [BOT] 💾 Added channel posting: People Analytics Lead @ airtable → category channel (1 total channels)
[2026-01-21T06:56:50.486Z] [BOT] 💾 BEFORE ARCHIVING: 3149 jobs in database
[2026-01-21T06:56:50.487Z] [BOT] ✅ No jobs to archive (all 3149 jobs within 7-day window)
[2026-01-21T06:56:50.506Z] [BOT] 💾 Saved posted_jobs.json: 3149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:52.007Z] [BOT] 💾 Marked as posted: People Analytics Lead @ airtable (instance #1)
[2026-01-21T06:56:52.008Z] [BOT] 💾 BEFORE ARCHIVING: 3150 jobs in database
[2026-01-21T06:56:52.010Z] [BOT] ✅ No jobs to archive (all 3150 jobs within 7-day window)
[2026-01-21T06:56:52.028Z] [BOT] 💾 Saved posted_jobs.json: 3150 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:55.029Z] [BOT] 📌 Posting 3 jobs to #ai-jobs
[2026-01-21T06:56:55.030Z] [BOT] 📍 [ROUTING] " People Systems Engineer, Airtable Specialist" @ airtable
   Category: AI (matched: "AI/ML")
[2026-01-21T06:56:55.030Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T06:56:55.238Z] [BOT] ✅ Posted message:  People Systems Engineer, Airtable Specialist @ airtable in #ai-jobs
  ✅ Industry:  People Systems Engineer, Airtable Specialist @ airtable
[2026-01-21T06:56:55.238Z] [BOT] 💾 Added channel posting:  People Systems Engineer, Airtable Specialist @ airtable → category channel (1 total channels)
[2026-01-21T06:56:55.239Z] [BOT] 💾 BEFORE ARCHIVING: 3151 jobs in database
[2026-01-21T06:56:55.241Z] [BOT] ✅ No jobs to archive (all 3151 jobs within 7-day window)
[2026-01-21T06:56:55.260Z] [BOT] 💾 Saved posted_jobs.json: 3151 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:56.762Z] [BOT] 💾 Marked as posted:  People Systems Engineer, Airtable Specialist @ airtable (instance #1)
[2026-01-21T06:56:56.762Z] [BOT] 💾 BEFORE ARCHIVING: 3152 jobs in database
[2026-01-21T06:56:56.764Z] [BOT] ✅ No jobs to archive (all 3152 jobs within 7-day window)
[2026-01-21T06:56:56.783Z] [BOT] 💾 Saved posted_jobs.json: 3152 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:56.783Z] [BOT] 📍 [ROUTING] "Product Manager, AI" @ airtable
   Category: AI (matched: "AI specialization")
[2026-01-21T06:56:56.783Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch, nonTechMatch (using ai)
[2026-01-21T06:56:56.998Z] [BOT] ✅ Posted message: Product Manager, AI @ airtable in #ai-jobs
  ✅ Industry: Product Manager, AI @ airtable
[2026-01-21T06:56:56.999Z] [BOT] 💾 Added channel posting: Product Manager, AI @ airtable → category channel (1 total channels)
[2026-01-21T06:56:56.999Z] [BOT] 💾 BEFORE ARCHIVING: 3153 jobs in database
[2026-01-21T06:56:57.001Z] [BOT] ✅ No jobs to archive (all 3153 jobs within 7-day window)
[2026-01-21T06:56:57.022Z] [BOT] 💾 Saved posted_jobs.json: 3153 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:58.523Z] [BOT] 💾 Marked as posted: Product Manager, AI @ airtable (instance #1)
[2026-01-21T06:56:58.523Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-21T06:56:58.526Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-21T06:56:58.546Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:56:58.546Z] [BOT] 📍 [ROUTING] "Product Manager, Omni Analysis & Q&A" @ airtable
   Category: AI (matched: "AI specialization")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-21T06:56:58.789Z] [BOT] ✅ Posted message: Product Manager, Omni Analysis & Q&A @ airtable in #ai-jobs
  ✅ Industry: Product Manager, Omni Analysis & Q&A @ airtable
[2026-01-21T06:56:58.790Z] [BOT] 💾 Added channel posting: Product Manager, Omni Analysis & Q&A @ airtable → category channel (1 total channels)
[2026-01-21T06:56:58.790Z] [BOT] 💾 BEFORE ARCHIVING: 3155 jobs in database
[2026-01-21T06:56:58.792Z] [BOT] ✅ No jobs to archive (all 3155 jobs within 7-day window)
[2026-01-21T06:56:58.812Z] [BOT] 💾 Saved posted_jobs.json: 3155 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:57:00.313Z] [BOT] 💾 Marked as posted: Product Manager, Omni Analysis & Q&A @ airtable (instance #1)
[2026-01-21T06:57:00.313Z] [BOT] 💾 BEFORE ARCHIVING: 3156 jobs in database
[2026-01-21T06:57:00.315Z] [BOT] ✅ No jobs to archive (all 3156 jobs within 7-day window)
[2026-01-21T06:57:00.336Z] [BOT] 💾 Saved posted_jobs.json: 3156 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:57:03.337Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T06:57:03.337Z] [BOT] 📍 [ROUTING] "Risk Specialist, GRCP" @ airtable
[2026-01-21T06:57:03.337Z] [BOT] Category: FINANCE (matched: "finance")
[2026-01-21T06:57:03.337Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T06:57:03.599Z] [BOT] ✅ Posted message: Risk Specialist, GRCP @ airtable in #finance-jobs
[2026-01-21T06:57:03.599Z] [BOT] ✅ Industry: Risk Specialist, GRCP @ airtable
[2026-01-21T06:57:03.600Z] [BOT] 💾 Added channel posting: Risk Specialist, GRCP @ airtable → category channel (1 total channels)
[2026-01-21T06:57:03.600Z] [BOT] 💾 BEFORE ARCHIVING: 3157 jobs in database
[2026-01-21T06:57:03.602Z] [BOT] ✅ No jobs to archive (all 3157 jobs within 7-day window)
[2026-01-21T06:57:03.620Z] [BOT] 💾 Saved posted_jobs.json: 3157 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:57:05.122Z] [BOT] 💾 Marked as posted: Risk Specialist, GRCP @ airtable (instance #1)
[2026-01-21T06:57:05.122Z] [BOT] 💾 BEFORE ARCHIVING: 3158 jobs in database
[2026-01-21T06:57:05.124Z] [BOT] ✅ No jobs to archive (all 3158 jobs within 7-day window)
[2026-01-21T06:57:05.143Z] [BOT] 💾 Saved posted_jobs.json: 3158 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:57:08.144Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T06:57:08.145Z] [BOT] ⏭️  Skipping duplicate: JID_ad49cabe (posted within 7 days)
[2026-01-21T06:57:08.145Z] [BOT] ⏭️  Skipping duplicate: JID_64a8496a (posted within 7 days)
[2026-01-21T06:57:08.145Z] [BOT] ⏭️  Skipping duplicate: JID_37726e3e (posted within 7 days)
[2026-01-21T06:57:08.145Z] [BOT] ⏭️  Skipping duplicate: JID_ba7988a5 (posted within 7 days)
[2026-01-21T06:57:08.145Z] [BOT] ⏭️  Skipping duplicate: JID_e20e3bf0 (posted within 7 days)
[2026-01-21T06:57:08.146Z] [BOT] ⏭️  Skipping duplicate: JID_0d66a7b5 (posted within 7 days)
[2026-01-21T06:57:08.146Z] [BOT] ⏭️  Skipping duplicate: JID_4b48924d (posted within 7 days)
[2026-01-21T06:57:08.146Z] [BOT] ⏭️  Skipping duplicate: JID_fb8f2bd9 (posted within 7 days)
[2026-01-21T06:57:08.146Z] [BOT] ⏭️  Skipping duplicate: JID_4b569989 (posted within 7 days)
[2026-01-21T06:57:08.146Z] [BOT] ⏭️  Skipping duplicate: JID_3579e77b (posted within 7 days)
[2026-01-21T06:57:08.250Z] [BOT] ✅ Loaded pending queue: 2743 total (2723 pending, 20 enriched, 0 posted)
[2026-01-21T06:57:08.442Z] [BOT] ✅ Saved pending queue: 2743 total (2723 pending, 10 enriched, 10 posted)
[2026-01-21T06:57:08.442Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T06:57:08.505Z] [BOT] 📂 Loaded 5715 existing routing entries
[2026-01-21T06:57:08.581Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T06:57:08.581Z] [BOT] Total entries: 5725
   Timestamp: 2026-01-21T06:57:08.557Z
[2026-01-21T06:57:08.582Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T06:57:08.582Z] [BOT] Total attempts: 11
   Successful: 11
   Failed: 0
   Skipped: 0
[2026-01-21T06:57:08.582Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-21T06:57:08.582Z] [BOT] Total posts: 11
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 3 posts
     3. #JID_98d4f0de: 1 posts
     4. #JID_fb739488: 1 posts
     5. #finance-jobs: 1 posts
[2026-01-21T06:57:08.583Z] [BOT] [STATS] Channel stats saved
[2026-01-21T06:57:10.610Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*