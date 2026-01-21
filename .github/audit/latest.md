# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T17:33:19.941Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T17:32:44.909Z] ========================================
[2026-01-21T17:32:44.911Z] Discord Bot Execution Log
[2026-01-21T17:32:44.911Z] Environment: GitHub Actions
[2026-01-21T17:32:44.911Z] Node Version: v20.19.6
[2026-01-21T17:32:44.911Z] ========================================
[2026-01-21T17:32:44.911Z] Environment Variables Check:
[2026-01-21T17:32:44.911Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T17:32:44.911Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T17:32:44.911Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T17:32:44.911Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T17:32:44.911Z] 
Multi-Channel Configuration:
[2026-01-21T17:32:44.911Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T17:32:44.912Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T17:32:44.912Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T17:32:44.912Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T17:32:44.912Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T17:32:44.912Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T17:32:44.912Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T17:32:44.912Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T17:32:44.912Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T17:32:44.912Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T17:32:44.912Z] 
Data Files Check:
[2026-01-21T17:32:44.913Z] .github/data/new_jobs.json: ✅ Exists (10 items, 91199 bytes)
[2026-01-21T17:32:44.927Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2106216 bytes)
[2026-01-21T17:32:44.927Z] 
========================================
[2026-01-21T17:32:44.927Z] Starting Enhanced Discord Bot...
[2026-01-21T17:32:44.927Z] ========================================
[2026-01-21T17:32:45.463Z] [BOT] ✅ Loaded V2 database: 3672 jobs
[2026-01-21T17:32:46.094Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T17:32:46.094Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T17:32:46.094Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T17:32:46.209Z] [BOT] ✅ Loaded pending queue: 2769 total (2749 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Application Engineer at Cadence Design Systems
[2026-01-21T17:32:46.212Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T17:32:46.213Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T17:32:46.213Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T17:32:46.214Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T17:32:46.214Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T17:32:46.216Z] [BOT] 📌 Posting 1 jobs to #tech-jobs
[2026-01-21T17:32:46.217Z] [BOT] 📍 [ROUTING] "Application Engineer" @ ORG_316d43c0 Design Systems
[2026-01-21T17:32:46.217Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T17:32:46.234Z] [BOT ERROR] (node:3485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T17:32:46.536Z] [BOT] ✅ Posted message: Application Engineer @ ORG_316d43c0 Design Systems in #tech-jobs
  ✅ Industry: Application Engineer @ ORG_316d43c0 Design Systems
[2026-01-21T17:32:46.540Z] [BOT] 💾 Added channel posting: Application Engineer @ ORG_316d43c0 Design Systems → category channel (1 total channels)
[2026-01-21T17:32:46.540Z] [BOT] 💾 BEFORE ARCHIVING: 3673 jobs in database
[2026-01-21T17:32:46.544Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T17:32:46.550Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-21T17:32:46.551Z] [BOT] ✅ Archiving complete: 6 archived, 3667 active
[2026-01-21T17:32:46.577Z] [BOT] 💾 Saved posted_jobs.json: 3667 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:32:48.079Z] [BOT] 💾 Marked as posted: Application Engineer @ ORG_316d43c0 Design Systems (instance #1)
[2026-01-21T17:32:48.079Z] [BOT] 💾 BEFORE ARCHIVING: 3668 jobs in database
[2026-01-21T17:32:48.082Z] [BOT] ✅ No jobs to archive (all 3668 jobs within 7-day window)
[2026-01-21T17:32:48.103Z] [BOT] 💾 Saved posted_jobs.json: 3668 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:32:51.104Z] [BOT] 📌 Posting 6 jobs to #ai-jobs
[2026-01-21T17:32:51.104Z] [BOT] 📍 [ROUTING] "AI Engineer 2" @ ORG_37856574 Health
   Category: AI (matched: "machine learning")
[2026-01-21T17:32:51.104Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T17:32:51.378Z] [BOT] ✅ Posted message: AI Engineer 2 @ ORG_37856574 Health in #ai-jobs
[2026-01-21T17:32:51.379Z] [BOT] ✅ Industry: AI Engineer 2 @ ORG_37856574 Health
[2026-01-21T17:32:51.379Z] [BOT] 💾 Added channel posting: AI Engineer 2 @ ORG_37856574 Health → category channel (1 total channels)
[2026-01-21T17:32:51.380Z] [BOT] 💾 BEFORE ARCHIVING: 3669 jobs in database
[2026-01-21T17:32:51.382Z] [BOT] ✅ No jobs to archive (all 3669 jobs within 7-day window)
[2026-01-21T17:32:51.406Z] [BOT] 💾 Saved posted_jobs.json: 3669 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:32:52.908Z] [BOT] 💾 Marked as posted: AI Engineer 2 @ ORG_37856574 Health (instance #1)
[2026-01-21T17:32:52.908Z] [BOT] 💾 BEFORE ARCHIVING: 3670 jobs in database
[2026-01-21T17:32:52.910Z] [BOT] ✅ No jobs to archive (all 3670 jobs within 7-day window)
[2026-01-21T17:32:52.934Z] [BOT] 💾 Saved posted_jobs.json: 3670 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:32:52.935Z] [BOT] 📍 [ROUTING] "Vibe Marketer" @ ORG_f102986b AI
[2026-01-21T17:32:52.935Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T17:32:53.180Z] [BOT] ✅ Posted message: Vibe Marketer @ ORG_f102986b AI in #ai-jobs
  ✅ Industry: Vibe Marketer @ ORG_f102986b AI
[2026-01-21T17:32:53.181Z] [BOT] 💾 Added channel posting: Vibe Marketer @ ORG_f102986b AI → category channel (1 total channels)
[2026-01-21T17:32:53.181Z] [BOT] 💾 BEFORE ARCHIVING: 3671 jobs in database
[2026-01-21T17:32:53.183Z] [BOT] ✅ No jobs to archive (all 3671 jobs within 7-day window)
[2026-01-21T17:32:53.204Z] [BOT] 💾 Saved posted_jobs.json: 3671 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:32:54.706Z] [BOT] 💾 Marked as posted: Vibe Marketer @ ORG_f102986b AI (instance #1)
[2026-01-21T17:32:54.706Z] [BOT] 💾 BEFORE ARCHIVING: 3672 jobs in database
[2026-01-21T17:32:54.709Z] [BOT] ✅ No jobs to archive (all 3672 jobs within 7-day window)
[2026-01-21T17:32:54.734Z] [BOT] 💾 Saved posted_jobs.json: 3672 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:32:54.735Z] [BOT] 📍 [ROUTING] "Research Scientist – New College Grad 2026 - Embodied and Agentic AI" @ ORG_0890f456
[2026-01-21T17:32:54.736Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T17:32:55.014Z] [BOT] ✅ Posted message: Research Scientist – New College Grad 2026 - Embodied and Agentic AI @ ORG_0890f456 in #ai-jobs
[2026-01-21T17:32:55.014Z] [BOT] ✅ Industry: Research Scientist – New College Grad 2026 - Embodied and Agentic AI @ ORG_0890f456
[2026-01-21T17:32:55.015Z] [BOT] 💾 Added channel posting: Research Scientist – New College Grad 2026 - Embodied and Agentic AI @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3673 jobs in database
[2026-01-21T17:32:55.017Z] [BOT] ✅ No jobs to archive (all 3673 jobs within 7-day window)
[2026-01-21T17:32:55.046Z] [BOT] 💾 Saved posted_jobs.json: 3673 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:32:56.548Z] [BOT] 💾 Marked as posted: Research Scientist – New College Grad 2026 - Embodied and Agentic AI @ ORG_0890f456 (instance #1)
[2026-01-21T17:32:56.548Z] [BOT] 💾 BEFORE ARCHIVING: 3674 jobs in database
[2026-01-21T17:32:56.550Z] [BOT] ✅ No jobs to archive (all 3674 jobs within 7-day window)
[2026-01-21T17:32:56.576Z] [BOT] 💾 Saved posted_jobs.json: 3674 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:32:56.577Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Portuguese Speaking" @ figma
[2026-01-21T17:32:56.578Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T17:32:56.759Z] [BOT] ✅ Posted message: Enterprise Support Specialist, Portuguese Speaking @ figma in #ai-jobs
  ✅ Industry: Enterprise Support Specialist, Portuguese Speaking @ figma
[2026-01-21T17:32:56.760Z] [BOT] 💾 Added channel posting: Enterprise Support Specialist, Portuguese Speaking @ figma → category channel (1 total channels)
[2026-01-21T17:32:56.760Z] [BOT] 💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-21T17:32:56.762Z] [BOT] ✅ No jobs to archive (all 3675 jobs within 7-day window)
[2026-01-21T17:32:56.787Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:32:58.289Z] [BOT] 💾 Marked as posted: Enterprise Support Specialist, Portuguese Speaking @ figma (instance #1)
[2026-01-21T17:32:58.289Z] [BOT] 💾 BEFORE ARCHIVING: 3676 jobs in database
[2026-01-21T17:32:58.292Z] [BOT] ✅ No jobs to archive (all 3676 jobs within 7-day window)
[2026-01-21T17:32:58.314Z] [BOT] 💾 Saved posted_jobs.json: 3676 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:32:58.316Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Korean Speaking" @ figma
[2026-01-21T17:32:58.316Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T17:32:58.488Z] [BOT] ✅ Posted message: Enterprise Support Specialist, Korean Speaking @ figma in #ai-jobs
[2026-01-21T17:32:58.489Z] [BOT] ✅ Industry: Enterprise Support Specialist, Korean Speaking @ figma
[2026-01-21T17:32:58.490Z] [BOT] 💾 Added channel posting: Enterprise Support Specialist, Korean Speaking @ figma → category channel (1 total channels)
[2026-01-21T17:32:58.490Z] [BOT] 💾 BEFORE ARCHIVING: 3677 jobs in database
[2026-01-21T17:32:58.493Z] [BOT] ✅ No jobs to archive (all 3677 jobs within 7-day window)
[2026-01-21T17:32:58.524Z] [BOT] 💾 Saved posted_jobs.json: 3677 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:33:00.025Z] [BOT] 💾 Marked as posted: Enterprise Support Specialist, Korean Speaking @ figma (instance #1)
[2026-01-21T17:33:00.025Z] [BOT] 💾 BEFORE ARCHIVING: 3678 jobs in database
[2026-01-21T17:33:00.027Z] [BOT] ✅ No jobs to archive (all 3678 jobs within 7-day window)
[2026-01-21T17:33:00.049Z] [BOT] 💾 Saved posted_jobs.json: 3678 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:33:00.050Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Japanese Speaking" @ figma
[2026-01-21T17:33:00.050Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T17:33:00.252Z] [BOT] ✅ Posted message: Enterprise Support Specialist, Japanese Speaking @ figma in #ai-jobs
[2026-01-21T17:33:00.252Z] [BOT] ✅ Industry: Enterprise Support Specialist, Japanese Speaking @ figma
[2026-01-21T17:33:00.253Z] [BOT] 💾 Added channel posting: Enterprise Support Specialist, Japanese Speaking @ figma → category channel (1 total channels)
[2026-01-21T17:33:00.253Z] [BOT] 💾 BEFORE ARCHIVING: 3679 jobs in database
[2026-01-21T17:33:00.256Z] [BOT] ✅ No jobs to archive (all 3679 jobs within 7-day window)
[2026-01-21T17:33:00.282Z] [BOT] 💾 Saved posted_jobs.json: 3679 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:33:01.786Z] [BOT] 💾 Marked as posted: Enterprise Support Specialist, Japanese Speaking @ figma (instance #1)
[2026-01-21T17:33:01.786Z] [BOT] 💾 BEFORE ARCHIVING: 3680 jobs in database
[2026-01-21T17:33:01.788Z] [BOT] ✅ No jobs to archive (all 3680 jobs within 7-day window)
[2026-01-21T17:33:01.811Z] [BOT] 💾 Saved posted_jobs.json: 3680 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:33:04.812Z] [BOT] 📌 Posting 3 jobs to #JID_fb739488
[2026-01-21T17:33:04.813Z] [BOT] 📍 [ROUTING] "Data Scientist 1" @ ORG_3a21c69b
[2026-01-21T17:33:04.813Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T17:33:05.059Z] [BOT] ✅ Posted message: Data Scientist 1 @ ORG_3a21c69b in #JID_fb739488
  ✅ Industry: Data Scientist 1 @ ORG_3a21c69b
[2026-01-21T17:33:05.060Z] [BOT] 💾 Added channel posting: Data Scientist 1 @ ORG_3a21c69b → category channel (1 total channels)
[2026-01-21T17:33:05.060Z] [BOT] 💾 BEFORE ARCHIVING: 3681 jobs in database
[2026-01-21T17:33:05.062Z] [BOT] ✅ No jobs to archive (all 3681 jobs within 7-day window)
[2026-01-21T17:33:05.086Z] [BOT] 💾 Saved posted_jobs.json: 3681 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:33:06.870Z] [BOT] ✅ Posted message: Data Scientist 1 @ ORG_3a21c69b in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T17:33:06.870Z] [BOT] 💾 Added channel posting: Data Scientist 1 @ ORG_3a21c69b → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3681 jobs in database
[2026-01-21T17:33:06.873Z] [BOT] ✅ No jobs to archive (all 3681 jobs within 7-day window)
[2026-01-21T17:33:06.894Z] [BOT] 💾 Saved posted_jobs.json: 3681 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:33:08.396Z] [BOT] 💾 Marked as posted: Data Scientist 1 @ ORG_3a21c69b (instance #1)
[2026-01-21T17:33:08.396Z] [BOT] 💾 BEFORE ARCHIVING: 3682 jobs in database
[2026-01-21T17:33:08.399Z] [BOT] ✅ No jobs to archive (all 3682 jobs within 7-day window)
[2026-01-21T17:33:08.420Z] [BOT] 💾 Saved posted_jobs.json: 3682 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:33:08.421Z] [BOT] 📍 [ROUTING] "Data Analyst - Python/SQL + Finance knowledge" @ ORG_23325912 Global
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-21T17:33:08.421Z] [BOT] Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T17:33:08.872Z] [BOT] ✅ Posted message: Data Analyst - Python/SQL + Finance knowledge @ ORG_23325912 Global in #JID_fb739488
  ✅ Industry: Data Analyst - Python/SQL + Finance knowledge @ ORG_23325912 Global
[2026-01-21T17:33:08.873Z] [BOT] 💾 Added channel posting: Data Analyst - Python/SQL + Finance knowledge @ ORG_23325912 Global → category channel (1 total channels)
[2026-01-21T17:33:08.873Z] [BOT] 💾 BEFORE ARCHIVING: 3683 jobs in database
[2026-01-21T17:33:08.875Z] [BOT] ✅ No jobs to archive (all 3683 jobs within 7-day window)
[2026-01-21T17:33:08.897Z] [BOT] 💾 Saved posted_jobs.json: 3683 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:33:10.399Z] [BOT] 💾 Marked as posted: Data Analyst - Python/SQL + Finance knowledge @ ORG_23325912 Global (instance #1)
[2026-01-21T17:33:10.399Z] [BOT] 💾 BEFORE ARCHIVING: 3684 jobs in database
[2026-01-21T17:33:10.402Z] [BOT] ✅ No jobs to archive (all 3684 jobs within 7-day window)
[2026-01-21T17:33:10.423Z] [BOT] 💾 Saved posted_jobs.json: 3684 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:33:10.423Z] [BOT] 📍 [ROUTING] "Business Intelligence Developer 1" @ ORG_d5eef8ad Nevada Corporation
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-21T17:33:10.424Z] [BOT] Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T17:33:10.593Z] [BOT] ✅ Posted message: Business Intelligence Developer 1 @ ORG_d5eef8ad Nevada Corporation in #JID_fb739488
  ✅ Industry: Business Intelligence Developer 1 @ ORG_d5eef8ad Nevada Corporation
[2026-01-21T17:33:10.594Z] [BOT] 💾 Added channel posting: Business Intelligence Developer 1 @ ORG_d5eef8ad Nevada Corporation → category channel (1 total channels)
[2026-01-21T17:33:10.594Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-21T17:33:10.596Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-21T17:33:10.619Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:33:12.312Z] [BOT] ✅ Posted message: Business Intelligence Developer 1 @ ORG_d5eef8ad Nevada Corporation in #JID_ead674af
[2026-01-21T17:33:12.312Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T17:33:12.312Z] [BOT] 💾 Added channel posting: Business Intelligence Developer 1 @ ORG_d5eef8ad Nevada Corporation → location channel (2 total channels)
[2026-01-21T17:33:12.312Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-21T17:33:12.314Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-21T17:33:12.337Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:33:13.838Z] [BOT] 💾 Marked as posted: Business Intelligence Developer 1 @ ORG_d5eef8ad Nevada Corporation (instance #1)
[2026-01-21T17:33:13.839Z] [BOT] 💾 BEFORE ARCHIVING: 3686 jobs in database
[2026-01-21T17:33:13.841Z] [BOT] ✅ No jobs to archive (all 3686 jobs within 7-day window)
[2026-01-21T17:33:13.862Z] [BOT] 💾 Saved posted_jobs.json: 3686 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T17:33:16.863Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T17:33:16.864Z] [BOT] ⏭️  Skipping duplicate: JID_1980d06d-external_careers-JID_62bb63d8-engineer_r52105 (posted within 7 days)
[2026-01-21T17:33:16.864Z] [BOT] ⏭️  Skipping duplicate: JID_0c2d9b4d-vcuhealth_careers-JID_c8a25921-ii_r40510 (posted within 7 days)
[2026-01-21T17:33:16.865Z] [BOT] ⏭️  Skipping duplicate: JID_428dd745 (posted within 7 days)
[2026-01-21T17:33:16.865Z] [BOT] ⏭️  Skipping duplicate: JID_08c34893 (posted within 7 days)
[2026-01-21T17:33:16.865Z] [BOT] ⏭️  Skipping duplicate: JID_a13b88d4 (posted within 7 days)
[2026-01-21T17:33:16.865Z] [BOT] ⏭️  Skipping duplicate: JID_a997bf5d-2026_jr2009464 (posted within 7 days)
[2026-01-21T17:33:16.865Z] [BOT] ⏭️  Skipping duplicate: JID_3b249bf5-snc_external_career_site-JID_2b23b585-i_r0028996-1 (posted within 7 days)
[2026-01-21T17:33:16.866Z] [BOT] ⏭️  Skipping duplicate: JID_a84fdeff (posted within 7 days)
[2026-01-21T17:33:16.866Z] [BOT] ⏭️  Skipping duplicate: JID_88d8e6a9 (posted within 7 days)
[2026-01-21T17:33:16.866Z] [BOT] ⏭️  Skipping duplicate: JID_a0ec39cd (posted within 7 days)
[2026-01-21T17:33:16.968Z] [BOT] ✅ Loaded pending queue: 2769 total (2749 pending, 20 enriched, 0 posted)
[2026-01-21T17:33:17.147Z] [BOT] ✅ Saved pending queue: 2769 total (2749 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-21T17:33:17.148Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T17:33:17.218Z] [BOT] 📂 Loaded 5991 existing routing entries
[2026-01-21T17:33:17.307Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T17:33:17.307Z] [BOT] Total entries: 6001
   Timestamp: 2026-01-21T17:33:17.282Z
[2026-01-21T17:33:17.308Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T17:33:17.308Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-21T17:33:17.308Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #ai-jobs: 6 posts
[2026-01-21T17:33:17.308Z] [BOT] 2. #JID_fb739488: 3 posts
     3. #JID_ead674af: 2 posts
     4. #tech-jobs: 1 posts
[2026-01-21T17:33:17.308Z] [BOT] [STATS] Channel stats saved
[2026-01-21T17:33:19.329Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*