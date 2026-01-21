# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T11:31:26.603Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T11:30:47.409Z] ========================================
[2026-01-21T11:30:47.411Z] Discord Bot Execution Log
[2026-01-21T11:30:47.411Z] Environment: GitHub Actions
[2026-01-21T11:30:47.411Z] Node Version: v20.19.6
[2026-01-21T11:30:47.411Z] ========================================
[2026-01-21T11:30:47.411Z] Environment Variables Check:
[2026-01-21T11:30:47.411Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T11:30:47.411Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T11:30:47.411Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T11:30:47.411Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T11:30:47.412Z] 
Multi-Channel Configuration:
[2026-01-21T11:30:47.412Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T11:30:47.412Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T11:30:47.412Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T11:30:47.412Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T11:30:47.412Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T11:30:47.412Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T11:30:47.412Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T11:30:47.412Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T11:30:47.412Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T11:30:47.412Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T11:30:47.412Z] 
Data Files Check:
[2026-01-21T11:30:47.413Z] .github/data/new_jobs.json: ✅ Exists (10 items, 53875 bytes)
[2026-01-21T11:30:47.426Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1909471 bytes)
[2026-01-21T11:30:47.426Z] 
========================================
[2026-01-21T11:30:47.426Z] Starting Enhanced Discord Bot...
[2026-01-21T11:30:47.426Z] ========================================
[2026-01-21T11:30:47.985Z] [BOT] ✅ Loaded V2 database: 3339 jobs
[2026-01-21T11:30:48.740Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T11:30:48.740Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T11:30:48.740Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T11:30:48.859Z] [BOT] ✅ Loaded pending queue: 2759 total (2739 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer I at Thorlabs
[2026-01-21T11:30:48.864Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T11:30:48.864Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T11:30:48.865Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T11:30:48.865Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-21T11:30:48.866Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-21T11:30:48.866Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T11:30:48.870Z] [BOT] 📌 Posting 7 jobs to #tech-jobs
[2026-01-21T11:30:48.870Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_2c6b11e0
[2026-01-21T11:30:48.870Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T11:30:48.887Z] [BOT ERROR] (node:3114) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T11:30:49.029Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_2c6b11e0 in #tech-jobs
[2026-01-21T11:30:49.029Z] [BOT] ✅ Industry: Software Engineer I @ ORG_2c6b11e0
[2026-01-21T11:30:49.030Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_2c6b11e0 → category channel (1 total channels)
[2026-01-21T11:30:49.031Z] [BOT] 💾 BEFORE ARCHIVING: 3340 jobs in database
[2026-01-21T11:30:49.033Z] [BOT] ✅ No jobs to archive (all 3340 jobs within 7-day window)
[2026-01-21T11:30:49.059Z] [BOT] 💾 Saved posted_jobs.json: 3340 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:30:50.849Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_2c6b11e0 in #JID_ead674af
[2026-01-21T11:30:50.850Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T11:30:50.850Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_2c6b11e0 → location channel (2 total channels)
[2026-01-21T11:30:50.850Z] [BOT] 💾 BEFORE ARCHIVING: 3340 jobs in database
[2026-01-21T11:30:50.852Z] [BOT] ✅ No jobs to archive (all 3340 jobs within 7-day window)
[2026-01-21T11:30:50.872Z] [BOT] 💾 Saved posted_jobs.json: 3340 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:30:52.374Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_2c6b11e0 (instance #1)
[2026-01-21T11:30:52.374Z] [BOT] 💾 BEFORE ARCHIVING: 3341 jobs in database
[2026-01-21T11:30:52.376Z] [BOT] ✅ No jobs to archive (all 3341 jobs within 7-day window)
[2026-01-21T11:30:52.399Z] [BOT] 💾 Saved posted_jobs.json: 3341 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:30:52.399Z] [BOT] 📍 [ROUTING] "Software Engineer - New Grad" @ ORG_fa57efea
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T11:30:52.732Z] [BOT] ✅ Posted message: Software Engineer - New Grad @ ORG_fa57efea in #tech-jobs
  ✅ Industry: Software Engineer - New Grad @ ORG_fa57efea
[2026-01-21T11:30:52.733Z] [BOT] 💾 Added channel posting: Software Engineer - New Grad @ ORG_fa57efea → category channel (1 total channels)
[2026-01-21T11:30:52.733Z] [BOT] 💾 BEFORE ARCHIVING: 3342 jobs in database
[2026-01-21T11:30:52.735Z] [BOT] ✅ No jobs to archive (all 3342 jobs within 7-day window)
[2026-01-21T11:30:52.756Z] [BOT] 💾 Saved posted_jobs.json: 3342 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:30:54.258Z] [BOT] 💾 Marked as posted: Software Engineer - New Grad @ ORG_fa57efea (instance #1)
[2026-01-21T11:30:54.259Z] [BOT] 💾 BEFORE ARCHIVING: 3343 jobs in database
[2026-01-21T11:30:54.261Z] [BOT] ✅ No jobs to archive (all 3343 jobs within 7-day window)
[2026-01-21T11:30:54.282Z] [BOT] 💾 Saved posted_jobs.json: 3343 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:30:54.282Z] [BOT] 📍 [ROUTING] "Research Specialist" @ ORG_9d38443e of Chicago
   Category: TECH (default)
[2026-01-21T11:30:54.283Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T11:30:54.442Z] [BOT] ✅ Posted message: Research Specialist @ ORG_9d38443e of Chicago in #tech-jobs
  ✅ Industry: Research Specialist @ ORG_9d38443e of Chicago
[2026-01-21T11:30:54.443Z] [BOT] 💾 Added channel posting: Research Specialist @ ORG_9d38443e of Chicago → category channel (1 total channels)
[2026-01-21T11:30:54.443Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-21T11:30:54.445Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-21T11:30:54.464Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:30:55.965Z] [BOT] 💾 Marked as posted: Research Specialist @ ORG_9d38443e of Chicago (instance #1)
[2026-01-21T11:30:55.966Z] [BOT] 💾 BEFORE ARCHIVING: 3345 jobs in database
[2026-01-21T11:30:55.968Z] [BOT] ✅ No jobs to archive (all 3345 jobs within 7-day window)
[2026-01-21T11:30:55.988Z] [BOT] 💾 Saved posted_jobs.json: 3345 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:30:55.988Z] [BOT] 💾 Marked as posted: Research Specialist @ ORG_9d38443e of Chicago (instance #1)
[2026-01-21T11:30:55.988Z] [BOT] 💾 BEFORE ARCHIVING: 3346 jobs in database
[2026-01-21T11:30:55.990Z] [BOT] ✅ No jobs to archive (all 3346 jobs within 7-day window)
[2026-01-21T11:30:56.009Z] [BOT] 💾 Saved posted_jobs.json: 3346 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:30:56.010Z] [BOT] 📍 [ROUTING] "Search Quality Rater" @ ORG_066855bc
[2026-01-21T11:30:56.010Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T11:30:56.331Z] [BOT] ✅ Posted message: Search Quality Rater @ ORG_066855bc in #tech-jobs
  ✅ Industry: Search Quality Rater @ ORG_066855bc
[2026-01-21T11:30:56.332Z] [BOT] 💾 Added channel posting: Search Quality Rater @ ORG_066855bc → category channel (1 total channels)
[2026-01-21T11:30:56.332Z] [BOT] 💾 BEFORE ARCHIVING: 3347 jobs in database
[2026-01-21T11:30:56.334Z] [BOT] ✅ No jobs to archive (all 3347 jobs within 7-day window)
[2026-01-21T11:30:56.353Z] [BOT] 💾 Saved posted_jobs.json: 3347 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:30:58.049Z] [BOT] ✅ Posted message: Search Quality Rater @ ORG_066855bc in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T11:30:58.049Z] [BOT] 💾 Added channel posting: Search Quality Rater @ ORG_066855bc → location channel (2 total channels)
[2026-01-21T11:30:58.050Z] [BOT] 💾 BEFORE ARCHIVING: 3347 jobs in database
[2026-01-21T11:30:58.052Z] [BOT] ✅ No jobs to archive (all 3347 jobs within 7-day window)
[2026-01-21T11:30:58.077Z] [BOT] 💾 Saved posted_jobs.json: 3347 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:30:59.579Z] [BOT] 💾 Marked as posted: Search Quality Rater @ ORG_066855bc (instance #1)
[2026-01-21T11:30:59.579Z] [BOT] 💾 BEFORE ARCHIVING: 3348 jobs in database
[2026-01-21T11:30:59.582Z] [BOT] ✅ No jobs to archive (all 3348 jobs within 7-day window)
[2026-01-21T11:30:59.604Z] [BOT] 💾 Saved posted_jobs.json: 3348 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:30:59.605Z] [BOT] 📍 [ROUTING] "Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center" @ ORG_f5f75c9b U
[2026-01-21T11:30:59.605Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T11:30:59.850Z] [BOT] ✅ Posted message: Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U in #tech-jobs
[2026-01-21T11:30:59.850Z] [BOT] ✅ Industry: Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U
[2026-01-21T11:30:59.851Z] [BOT] 💾 Added channel posting: Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U → category channel (1 total channels)
[2026-01-21T11:30:59.851Z] [BOT] 💾 BEFORE ARCHIVING: 3349 jobs in database
[2026-01-21T11:30:59.853Z] [BOT] ✅ No jobs to archive (all 3349 jobs within 7-day window)
[2026-01-21T11:30:59.875Z] [BOT] 💾 Saved posted_jobs.json: 3349 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:31:01.597Z] [BOT] ✅ Posted message: Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T11:31:01.597Z] [BOT] 💾 Added channel posting: Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U → location channel (2 total channels)
[2026-01-21T11:31:01.597Z] [BOT] 💾 BEFORE ARCHIVING: 3349 jobs in database
[2026-01-21T11:31:01.600Z] [BOT] ✅ No jobs to archive (all 3349 jobs within 7-day window)
[2026-01-21T11:31:01.620Z] [BOT] 💾 Saved posted_jobs.json: 3349 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:31:03.121Z] [BOT] 💾 Marked as posted: Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U (instance #1)
[2026-01-21T11:31:03.122Z] [BOT] 💾 BEFORE ARCHIVING: 3350 jobs in database
[2026-01-21T11:31:03.124Z] [BOT] ✅ No jobs to archive (all 3350 jobs within 7-day window)
[2026-01-21T11:31:03.144Z] [BOT] 💾 Saved posted_jobs.json: 3350 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:31:03.144Z] [BOT] 📍 [ROUTING] "Data Quality Analyst 1" @ ORG_0aa5052d State University (LSU)
   Category: TECH (matched: "data")
[2026-01-21T11:31:03.144Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T11:31:03.509Z] [BOT] ✅ Posted message: Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU) in #tech-jobs
  ✅ Industry: Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU)
[2026-01-21T11:31:03.510Z] [BOT] 💾 Added channel posting: Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU) → category channel (1 total channels)
[2026-01-21T11:31:03.510Z] [BOT] 💾 BEFORE ARCHIVING: 3351 jobs in database
[2026-01-21T11:31:03.512Z] [BOT] ✅ No jobs to archive (all 3351 jobs within 7-day window)
[2026-01-21T11:31:03.532Z] [BOT] 💾 Saved posted_jobs.json: 3351 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:31:05.479Z] [BOT] ✅ Posted message: Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU) in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T11:31:05.479Z] [BOT] 💾 Added channel posting: Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU) → location channel (2 total channels)
[2026-01-21T11:31:05.480Z] [BOT] 💾 BEFORE ARCHIVING: 3351 jobs in database
[2026-01-21T11:31:05.482Z] [BOT] ✅ No jobs to archive (all 3351 jobs within 7-day window)
[2026-01-21T11:31:05.502Z] [BOT] 💾 Saved posted_jobs.json: 3351 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:31:07.004Z] [BOT] 💾 Marked as posted: Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU) (instance #1)
[2026-01-21T11:31:07.004Z] [BOT] 💾 BEFORE ARCHIVING: 3352 jobs in database
[2026-01-21T11:31:07.006Z] [BOT] ✅ No jobs to archive (all 3352 jobs within 7-day window)
[2026-01-21T11:31:07.026Z] [BOT] 💾 Saved posted_jobs.json: 3352 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:31:07.027Z] [BOT] 📍 [ROUTING] "Infrastructure Engineer, Sandboxing" @ anthropic
[2026-01-21T11:31:07.027Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T11:31:07.325Z] [BOT] ✅ Posted message: Infrastructure Engineer, Sandboxing @ anthropic in #tech-jobs
[2026-01-21T11:31:07.325Z] [BOT] ✅ Industry: Infrastructure Engineer, Sandboxing @ anthropic
[2026-01-21T11:31:07.326Z] [BOT] 💾 Added channel posting: Infrastructure Engineer, Sandboxing @ anthropic → category channel (1 total channels)
[2026-01-21T11:31:07.326Z] [BOT] 💾 BEFORE ARCHIVING: 3353 jobs in database
[2026-01-21T11:31:07.328Z] [BOT] ✅ No jobs to archive (all 3353 jobs within 7-day window)
[2026-01-21T11:31:07.349Z] [BOT] 💾 Saved posted_jobs.json: 3353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:31:08.851Z] [BOT] 💾 Marked as posted: Infrastructure Engineer, Sandboxing @ anthropic (instance #1)
[2026-01-21T11:31:08.851Z] [BOT] 💾 BEFORE ARCHIVING: 3354 jobs in database
[2026-01-21T11:31:08.853Z] [BOT] ✅ No jobs to archive (all 3354 jobs within 7-day window)
[2026-01-21T11:31:08.873Z] [BOT] 💾 Saved posted_jobs.json: 3354 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:31:11.873Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-21T11:31:11.874Z] [BOT] 📍 [ROUTING] "Software Quality Assurance Engineer I" @ ORG_1b91b475 Automation
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T11:31:11.874Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T11:31:12.193Z] [BOT] ✅ Posted message: Software Quality Assurance Engineer I @ ORG_1b91b475 Automation in #ai-jobs
  ✅ Industry: Software Quality Assurance Engineer I @ ORG_1b91b475 Automation
[2026-01-21T11:31:12.194Z] [BOT] 💾 Added channel posting: Software Quality Assurance Engineer I @ ORG_1b91b475 Automation → category channel (1 total channels)
[2026-01-21T11:31:12.194Z] [BOT] 💾 BEFORE ARCHIVING: 3355 jobs in database
[2026-01-21T11:31:12.196Z] [BOT] ✅ No jobs to archive (all 3355 jobs within 7-day window)
[2026-01-21T11:31:12.216Z] [BOT] 💾 Saved posted_jobs.json: 3355 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:31:13.719Z] [BOT] 💾 Marked as posted: Software Quality Assurance Engineer I @ ORG_1b91b475 Automation (instance #1)
[2026-01-21T11:31:13.719Z] [BOT] 💾 BEFORE ARCHIVING: 3356 jobs in database
[2026-01-21T11:31:13.721Z] [BOT] ✅ No jobs to archive (all 3356 jobs within 7-day window)
[2026-01-21T11:31:13.743Z] [BOT] 💾 Saved posted_jobs.json: 3356 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:31:13.744Z] [BOT] 📍 [ROUTING] "Research Scientist – PhD New College Grad 2026 - Autonomous Vehicles" @ ORG_0890f456
[2026-01-21T11:31:13.744Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T11:31:13.954Z] [BOT] ✅ Posted message: Research Scientist – PhD New College Grad 2026 - Autonomous Vehicles @ ORG_0890f456 in #ai-jobs
[2026-01-21T11:31:13.955Z] [BOT] ✅ Industry: Research Scientist – PhD New College Grad 2026 - Autonomous Vehicles @ ORG_0890f456
[2026-01-21T11:31:13.956Z] [BOT] 💾 Added channel posting: Research Scientist – PhD New College Grad 2026 - Autonomous Vehicles @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T11:31:13.956Z] [BOT] 💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-21T11:31:13.958Z] [BOT] ✅ No jobs to archive (all 3357 jobs within 7-day window)
[2026-01-21T11:31:13.978Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:31:15.480Z] [BOT] 💾 Marked as posted: Research Scientist – PhD New College Grad 2026 - Autonomous Vehicles @ ORG_0890f456 (instance #1)
[2026-01-21T11:31:15.480Z] [BOT] 💾 BEFORE ARCHIVING: 3358 jobs in database
[2026-01-21T11:31:15.483Z] [BOT] ✅ No jobs to archive (all 3358 jobs within 7-day window)
[2026-01-21T11:31:15.505Z] [BOT] 💾 Saved posted_jobs.json: 3358 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:31:18.506Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T11:31:18.506Z] [BOT] 📍 [ROUTING] "Consulting Associate - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-21T11:31:18.506Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: finance-jobs (1462...4023)
[2026-01-21T11:31:18.778Z] [BOT] ✅ Posted message: Consulting Associate - EHS Management Information Systems @ ORG_d41a2092 in #finance-jobs
  ✅ Industry: Consulting Associate - EHS Management Information Systems @ ORG_d41a2092
[2026-01-21T11:31:18.779Z] [BOT] 💾 Added channel posting: Consulting Associate - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
[2026-01-21T11:31:18.779Z] [BOT] 💾 BEFORE ARCHIVING: 3359 jobs in database
[2026-01-21T11:31:18.781Z] [BOT] ✅ No jobs to archive (all 3359 jobs within 7-day window)
[2026-01-21T11:31:18.803Z] [BOT] 💾 Saved posted_jobs.json: 3359 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:31:20.305Z] [BOT] 💾 Marked as posted: Consulting Associate - EHS Management Information Systems @ ORG_d41a2092 (instance #1)
[2026-01-21T11:31:20.305Z] [BOT] 💾 BEFORE ARCHIVING: 3360 jobs in database
[2026-01-21T11:31:20.307Z] [BOT] ✅ No jobs to archive (all 3360 jobs within 7-day window)
[2026-01-21T11:31:20.329Z] [BOT] 💾 Saved posted_jobs.json: 3360 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:31:23.330Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T11:31:23.331Z] [BOT] ⏭️  Skipping duplicate: JID_e4a1c099 (posted within 7 days)
[2026-01-21T11:31:23.331Z] [BOT] ⏭️  Skipping duplicate: JID_285e805e (posted within 7 days)
[2026-01-21T11:31:23.331Z] [BOT] ⏭️  Skipping duplicate: JID_c2bcf3af (posted within 7 days)
[2026-01-21T11:31:23.332Z] [BOT] ⏭️  Skipping duplicate: JID_32cb8765-specialist_jr31936 (posted within 7 days)
[2026-01-21T11:31:23.332Z] [BOT] ⏭️  Skipping duplicate: JID_0940be93-rater_r0007198 (posted within 7 days)
[2026-01-21T11:31:23.332Z] [BOT] ⏭️  Skipping duplicate: JID_8d05fa0a-2026_jr2008395 (posted within 7 days)
[2026-01-21T11:31:23.332Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_84208682-_r00025970 (posted within 7 days)
[2026-01-21T11:31:23.332Z] [BOT] ⏭️  Skipping duplicate: JID_22c9c844-center_jr89315-1 (posted within 7 days)
[2026-01-21T11:31:23.332Z] [BOT] ⏭️  Skipping duplicate: JID_a9275996-1_r00111644-1 (posted within 7 days)
[2026-01-21T11:31:23.333Z] [BOT] ⏭️  Skipping duplicate: JID_37f991dd (posted within 7 days)
[2026-01-21T11:31:23.439Z] [BOT] ✅ Loaded pending queue: 2759 total (2739 pending, 20 enriched, 0 posted)
[2026-01-21T11:31:23.638Z] [BOT] ✅ Saved pending queue: 2759 total (2739 pending, 10 enriched, 10 posted)
[2026-01-21T11:31:23.638Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T11:31:23.704Z] [BOT] 📂 Loaded 5845 existing routing entries
[2026-01-21T11:31:23.783Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5855
   Timestamp: 2026-01-21T11:31:23.757Z
[2026-01-21T11:31:23.784Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T11:31:23.784Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-21T11:31:23.784Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T11:31:23.784Z] [BOT] Last cleanup: Never
   Total posts: 14
   Channels used: 4
   Top channels:
     1. #tech-jobs: 7 posts
     2. #JID_ead674af: 4 posts
[2026-01-21T11:31:23.784Z] [BOT] 3. #ai-jobs: 2 posts
     4. #finance-jobs: 1 posts
[2026-01-21T11:31:23.784Z] [BOT] [STATS] Channel stats saved
[2026-01-21T11:31:25.818Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3114) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*