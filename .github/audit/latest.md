# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T07:17:18.866Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T07:16:45.602Z] ========================================
[2026-01-21T07:16:45.604Z] Discord Bot Execution Log
[2026-01-21T07:16:45.604Z] Environment: GitHub Actions
[2026-01-21T07:16:45.604Z] Node Version: v20.19.6
[2026-01-21T07:16:45.604Z] ========================================
[2026-01-21T07:16:45.604Z] Environment Variables Check:
[2026-01-21T07:16:45.604Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T07:16:45.604Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T07:16:45.604Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T07:16:45.605Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T07:16:45.605Z] 
Multi-Channel Configuration:
[2026-01-21T07:16:45.605Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T07:16:45.605Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T07:16:45.605Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T07:16:45.605Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T07:16:45.605Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T07:16:45.605Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T07:16:45.605Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T07:16:45.605Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T07:16:45.605Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T07:16:45.605Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T07:16:45.605Z] 
Data Files Check:
[2026-01-21T07:16:45.607Z] .github/data/new_jobs.json: ✅ Exists (10 items, 153245 bytes)
[2026-01-21T07:16:45.619Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1796426 bytes)
[2026-01-21T07:16:45.619Z] 
========================================
[2026-01-21T07:16:45.619Z] Starting Enhanced Discord Bot...
[2026-01-21T07:16:45.619Z] ========================================
[2026-01-21T07:16:46.193Z] [BOT] ✅ Loaded V2 database: 3158 jobs
[2026-01-21T07:16:46.958Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T07:16:46.959Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T07:16:46.959Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T07:16:47.078Z] [BOT] ✅ Loaded pending queue: 2742 total (2722 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Scaled Customer Success Manager at airtable
[2026-01-21T07:16:47.083Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T07:16:47.083Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T07:16:47.084Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T07:16:47.085Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T07:16:47.085Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T07:16:47.088Z] [BOT] 📌 Posting 6 jobs to #tech-jobs
[2026-01-21T07:16:47.089Z] [BOT] 📍 [ROUTING] "Scaled Customer Success Manager" @ airtable
[2026-01-21T07:16:47.089Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T07:16:47.106Z] [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T07:16:47.307Z] [BOT] ✅ Posted message: Scaled Customer Success Manager @ airtable in #tech-jobs
  ✅ Industry: Scaled Customer Success Manager @ airtable
[2026-01-21T07:16:47.308Z] [BOT] 💾 Added channel posting: Scaled Customer Success Manager @ airtable → category channel (1 total channels)
[2026-01-21T07:16:47.308Z] [BOT] 💾 BEFORE ARCHIVING: 3159 jobs in database
[2026-01-21T07:16:47.311Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T07:16:47.313Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-21T07:16:47.313Z] [BOT] ✅ Archiving complete: 20 archived, 3139 active
[2026-01-21T07:16:47.332Z] [BOT] 💾 Saved posted_jobs.json: 3139 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:16:48.834Z] [BOT] 💾 Marked as posted: Scaled Customer Success Manager @ airtable (instance #1)
[2026-01-21T07:16:48.834Z] [BOT] 💾 BEFORE ARCHIVING: 3140 jobs in database
[2026-01-21T07:16:48.836Z] [BOT] ✅ No jobs to archive (all 3140 jobs within 7-day window)
[2026-01-21T07:16:48.854Z] [BOT] 💾 Saved posted_jobs.json: 3140 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:16:48.854Z] [BOT] 📍 [ROUTING] "Senior Solutions Consultant" @ airtable
[2026-01-21T07:16:48.855Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T07:16:49.144Z] [BOT] ✅ Posted message: Senior Solutions Consultant @ airtable in #tech-jobs
[2026-01-21T07:16:49.144Z] [BOT] ✅ Industry: Senior Solutions Consultant @ airtable
[2026-01-21T07:16:49.145Z] [BOT] 💾 Added channel posting: Senior Solutions Consultant @ airtable → category channel (1 total channels)
[2026-01-21T07:16:49.145Z] [BOT] 💾 BEFORE ARCHIVING: 3141 jobs in database
[2026-01-21T07:16:49.147Z] [BOT] ✅ No jobs to archive (all 3141 jobs within 7-day window)
[2026-01-21T07:16:49.168Z] [BOT] 💾 Saved posted_jobs.json: 3141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:16:50.899Z] [BOT] ✅ Posted message: Senior Solutions Consultant @ airtable in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T07:16:50.900Z] [BOT] 💾 Added channel posting: Senior Solutions Consultant @ airtable → location channel (2 total channels)
[2026-01-21T07:16:50.900Z] [BOT] 💾 BEFORE ARCHIVING: 3141 jobs in database
[2026-01-21T07:16:50.902Z] [BOT] ✅ No jobs to archive (all 3141 jobs within 7-day window)
[2026-01-21T07:16:50.922Z] [BOT] 💾 Saved posted_jobs.json: 3141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:16:52.423Z] [BOT] 💾 Marked as posted: Senior Solutions Consultant @ airtable (instance #1)
[2026-01-21T07:16:52.423Z] [BOT] 💾 BEFORE ARCHIVING: 3142 jobs in database
[2026-01-21T07:16:52.426Z] [BOT] ✅ No jobs to archive (all 3142 jobs within 7-day window)
[2026-01-21T07:16:52.446Z] [BOT] 💾 Saved posted_jobs.json: 3142 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:16:52.446Z] [BOT] 📍 [ROUTING] "Software Engineer, Android" @ airtable
[2026-01-21T07:16:52.446Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T07:16:52.677Z] [BOT] ✅ Posted message: Software Engineer, Android @ airtable in #tech-jobs
  ✅ Industry: Software Engineer, Android @ airtable
[2026-01-21T07:16:52.678Z] [BOT] 💾 Added channel posting: Software Engineer, Android @ airtable → category channel (1 total channels)
[2026-01-21T07:16:52.678Z] [BOT] 💾 BEFORE ARCHIVING: 3143 jobs in database
[2026-01-21T07:16:52.680Z] [BOT] ✅ No jobs to archive (all 3143 jobs within 7-day window)
[2026-01-21T07:16:52.699Z] [BOT] 💾 Saved posted_jobs.json: 3143 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:16:54.200Z] [BOT] 💾 Marked as posted: Software Engineer, Android @ airtable (instance #1)
💾 BEFORE ARCHIVING: 3144 jobs in database
[2026-01-21T07:16:54.202Z] [BOT] ✅ No jobs to archive (all 3144 jobs within 7-day window)
[2026-01-21T07:16:54.222Z] [BOT] 💾 Saved posted_jobs.json: 3144 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:16:54.222Z] [BOT] 📍 [ROUTING] "Software Engineer, Infrastructure (8+ YOE)" @ airtable
[2026-01-21T07:16:54.222Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T07:16:54.506Z] [BOT] ✅ Posted message: Software Engineer, Infrastructure (8+ YOE) @ airtable in #tech-jobs
  ✅ Industry: Software Engineer, Infrastructure (8+ YOE) @ airtable
[2026-01-21T07:16:54.507Z] [BOT] 💾 Added channel posting: Software Engineer, Infrastructure (8+ YOE) @ airtable → category channel (1 total channels)
[2026-01-21T07:16:54.507Z] [BOT] 💾 BEFORE ARCHIVING: 3145 jobs in database
[2026-01-21T07:16:54.509Z] [BOT] ✅ No jobs to archive (all 3145 jobs within 7-day window)
[2026-01-21T07:16:54.528Z] [BOT] 💾 Saved posted_jobs.json: 3145 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:16:56.030Z] [BOT] 💾 Marked as posted: Software Engineer, Infrastructure (8+ YOE) @ airtable (instance #1)
[2026-01-21T07:16:56.030Z] [BOT] 💾 BEFORE ARCHIVING: 3146 jobs in database
[2026-01-21T07:16:56.033Z] [BOT] ✅ No jobs to archive (all 3146 jobs within 7-day window)
[2026-01-21T07:16:56.056Z] [BOT] 💾 Saved posted_jobs.json: 3146 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:16:56.056Z] [BOT] 📍 [ROUTING] "Solutions Consultant" @ airtable
[2026-01-21T07:16:56.056Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T07:16:56.321Z] [BOT] ✅ Posted message: Solutions Consultant @ airtable in #tech-jobs
  ✅ Industry: Solutions Consultant @ airtable
[2026-01-21T07:16:56.322Z] [BOT] 💾 Added channel posting: Solutions Consultant @ airtable → category channel (1 total channels)
[2026-01-21T07:16:56.322Z] [BOT] 💾 BEFORE ARCHIVING: 3147 jobs in database
[2026-01-21T07:16:56.324Z] [BOT] ✅ No jobs to archive (all 3147 jobs within 7-day window)
[2026-01-21T07:16:56.344Z] [BOT] 💾 Saved posted_jobs.json: 3147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:16:57.846Z] [BOT] 💾 Marked as posted: Solutions Consultant @ airtable (instance #1)
[2026-01-21T07:16:57.846Z] [BOT] 💾 BEFORE ARCHIVING: 3148 jobs in database
[2026-01-21T07:16:57.848Z] [BOT] ✅ No jobs to archive (all 3148 jobs within 7-day window)
[2026-01-21T07:16:57.870Z] [BOT] 💾 Saved posted_jobs.json: 3148 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:16:57.870Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer 1 - Mobile" @ ORG_3cfbdbc3
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T07:16:58.033Z] [BOT] ✅ Posted message: Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3 in #tech-jobs
  ✅ Industry: Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3
[2026-01-21T07:16:58.034Z] [BOT] 💾 Added channel posting: Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3 → category channel (1 total channels)
[2026-01-21T07:16:58.034Z] [BOT] 💾 BEFORE ARCHIVING: 3149 jobs in database
[2026-01-21T07:16:58.036Z] [BOT] ✅ No jobs to archive (all 3149 jobs within 7-day window)
[2026-01-21T07:16:58.056Z] [BOT] 💾 Saved posted_jobs.json: 3149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:16:59.557Z] [BOT] 💾 Marked as posted: Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3 (instance #1)
[2026-01-21T07:16:59.558Z] [BOT] 💾 BEFORE ARCHIVING: 3150 jobs in database
[2026-01-21T07:16:59.559Z] [BOT] ✅ No jobs to archive (all 3150 jobs within 7-day window)
[2026-01-21T07:16:59.578Z] [BOT] 💾 Saved posted_jobs.json: 3150 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:17:02.579Z] [BOT] 📌 Posting 2 jobs to #finance-jobs
[2026-01-21T07:17:02.579Z] [BOT] 📍 [ROUTING] "Senior Manager, Finance Systems" @ airtable
[2026-01-21T07:17:02.579Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T07:17:02.742Z] [BOT] ✅ Posted message: Senior Manager, Finance Systems @ airtable in #finance-jobs
[2026-01-21T07:17:02.742Z] [BOT] ✅ Industry: Senior Manager, Finance Systems @ airtable
[2026-01-21T07:17:02.743Z] [BOT] 💾 Added channel posting: Senior Manager, Finance Systems @ airtable → category channel (1 total channels)
[2026-01-21T07:17:02.743Z] [BOT] 💾 BEFORE ARCHIVING: 3151 jobs in database
[2026-01-21T07:17:02.745Z] [BOT] ✅ No jobs to archive (all 3151 jobs within 7-day window)
[2026-01-21T07:17:02.766Z] [BOT] 💾 Saved posted_jobs.json: 3151 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:17:04.267Z] [BOT] 💾 Marked as posted: Senior Manager, Finance Systems @ airtable (instance #1)
[2026-01-21T07:17:04.268Z] [BOT] 💾 BEFORE ARCHIVING: 3152 jobs in database
[2026-01-21T07:17:04.269Z] [BOT] ✅ No jobs to archive (all 3152 jobs within 7-day window)
[2026-01-21T07:17:04.289Z] [BOT] 💾 Saved posted_jobs.json: 3152 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:17:04.289Z] [BOT] 📍 [ROUTING] "Senior Manager, People Systems" @ airtable
   Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T07:17:04.440Z] [BOT] ✅ Posted message: Senior Manager, People Systems @ airtable in #finance-jobs
[2026-01-21T07:17:04.441Z] [BOT] ✅ Industry: Senior Manager, People Systems @ airtable
[2026-01-21T07:17:04.441Z] [BOT] 💾 Added channel posting: Senior Manager, People Systems @ airtable → category channel (1 total channels)
[2026-01-21T07:17:04.441Z] [BOT] 💾 BEFORE ARCHIVING: 3153 jobs in database
[2026-01-21T07:17:04.443Z] [BOT] ✅ No jobs to archive (all 3153 jobs within 7-day window)
[2026-01-21T07:17:04.463Z] [BOT] 💾 Saved posted_jobs.json: 3153 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:17:05.964Z] [BOT] 💾 Marked as posted: Senior Manager, People Systems @ airtable (instance #1)
[2026-01-21T07:17:05.965Z] [BOT] 💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-21T07:17:05.966Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-21T07:17:05.986Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:17:08.987Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-21T07:17:08.988Z] [BOT] 📍 [ROUTING] "University Graduate - Machine Learning Engineer" @ ORG_72fd3ae0
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T07:17:09.182Z] [BOT] ✅ Posted message: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #ai-jobs
  ✅ Industry: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0
[2026-01-21T07:17:09.183Z] [BOT] 💾 Added channel posting: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-01-21T07:17:09.183Z] [BOT] 💾 BEFORE ARCHIVING: 3155 jobs in database
[2026-01-21T07:17:09.185Z] [BOT] ✅ No jobs to archive (all 3155 jobs within 7-day window)
[2026-01-21T07:17:09.203Z] [BOT] 💾 Saved posted_jobs.json: 3155 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:17:10.705Z] [BOT] 💾 Marked as posted: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-21T07:17:10.705Z] [BOT] 💾 BEFORE ARCHIVING: 3156 jobs in database
[2026-01-21T07:17:10.707Z] [BOT] ✅ No jobs to archive (all 3156 jobs within 7-day window)
[2026-01-21T07:17:10.728Z] [BOT] 💾 Saved posted_jobs.json: 3156 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:17:10.728Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_4db4f14a Technologies
   Category: AI (matched: "machine learning")
[2026-01-21T07:17:10.728Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T07:17:11.006Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_4db4f14a Technologies in #ai-jobs
  ✅ Industry: Associate Software Engineer @ ORG_4db4f14a Technologies
[2026-01-21T07:17:11.007Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_4db4f14a Technologies → category channel (1 total channels)
[2026-01-21T07:17:11.007Z] [BOT] 💾 BEFORE ARCHIVING: 3157 jobs in database
[2026-01-21T07:17:11.009Z] [BOT] ✅ No jobs to archive (all 3157 jobs within 7-day window)
[2026-01-21T07:17:11.031Z] [BOT] 💾 Saved posted_jobs.json: 3157 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:17:12.533Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_4db4f14a Technologies (instance #1)
[2026-01-21T07:17:12.533Z] [BOT] 💾 BEFORE ARCHIVING: 3158 jobs in database
[2026-01-21T07:17:12.535Z] [BOT] ✅ No jobs to archive (all 3158 jobs within 7-day window)
[2026-01-21T07:17:12.554Z] [BOT] 💾 Saved posted_jobs.json: 3158 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T07:17:15.554Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T07:17:15.555Z] [BOT] ⏭️  Skipping duplicate: JID_0f66f7f5 (posted within 7 days)
[2026-01-21T07:17:15.555Z] [BOT] ⏭️  Skipping duplicate: JID_69728141 (posted within 7 days)
[2026-01-21T07:17:15.556Z] [BOT] ⏭️  Skipping duplicate: JID_35040d7a (posted within 7 days)
[2026-01-21T07:17:15.556Z] [BOT] ⏭️  Skipping duplicate: JID_c3b16c3e (posted within 7 days)
[2026-01-21T07:17:15.556Z] [BOT] ⏭️  Skipping duplicate: JID_7382d413 (posted within 7 days)
⏭️  Skipping duplicate: JID_f67c90ef (posted within 7 days)
[2026-01-21T07:17:15.557Z] [BOT] ⏭️  Skipping duplicate: JID_6ffb7799 (posted within 7 days)
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r160648 (posted within 7 days)
⏭️  Skipping duplicate: JID_4ac515f0 (posted within 7 days)
[2026-01-21T07:17:15.557Z] [BOT] ⏭️  Skipping duplicate: JID_9ad652b5 (posted within 7 days)
[2026-01-21T07:17:15.664Z] [BOT] ✅ Loaded pending queue: 2742 total (2722 pending, 20 enriched, 0 posted)
[2026-01-21T07:17:15.853Z] [BOT] ✅ Saved pending queue: 2742 total (2722 pending, 10 enriched, 10 posted)
[2026-01-21T07:17:15.854Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T07:17:15.918Z] [BOT] 📂 Loaded 5725 existing routing entries
[2026-01-21T07:17:15.997Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5735
[2026-01-21T07:17:15.997Z] [BOT] Timestamp: 2026-01-21T07:17:15.970Z
[2026-01-21T07:17:15.997Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 11
   Successful: 11
[2026-01-21T07:17:15.997Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-21T07:17:15.998Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 4
[2026-01-21T07:17:15.998Z] [BOT] Top channels:
     1. #tech-jobs: 6 posts
     2. #finance-jobs: 2 posts
     3. #ai-jobs: 2 posts
     4. #JID_98d4f0de: 1 posts
[2026-01-21T07:17:15.998Z] [BOT] [STATS] Channel stats saved
[2026-01-21T07:17:18.025Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*