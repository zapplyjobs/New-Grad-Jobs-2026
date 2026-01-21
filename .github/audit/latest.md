# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T21:16:32.785Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T21:15:50.407Z] ========================================
[2026-01-21T21:15:50.409Z] Discord Bot Execution Log
[2026-01-21T21:15:50.409Z] Environment: GitHub Actions
[2026-01-21T21:15:50.409Z] Node Version: v20.19.6
[2026-01-21T21:15:50.409Z] ========================================
[2026-01-21T21:15:50.409Z] Environment Variables Check:
[2026-01-21T21:15:50.409Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T21:15:50.409Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T21:15:50.409Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T21:15:50.409Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T21:15:50.409Z] 
Multi-Channel Configuration:
[2026-01-21T21:15:50.409Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T21:15:50.409Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T21:15:50.410Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T21:15:50.410Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T21:15:50.410Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T21:15:50.410Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T21:15:50.410Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T21:15:50.410Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T21:15:50.410Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T21:15:50.410Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T21:15:50.410Z] 
Data Files Check:
[2026-01-21T21:15:50.411Z] .github/data/new_jobs.json: ✅ Exists (10 items, 70089 bytes)
[2026-01-21T21:15:50.425Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2195188 bytes)
[2026-01-21T21:15:50.425Z] 
========================================
[2026-01-21T21:15:50.426Z] Starting Enhanced Discord Bot...
[2026-01-21T21:15:50.426Z] ========================================
[2026-01-21T21:15:50.958Z] [BOT] ✅ Loaded V2 database: 3797 jobs
[2026-01-21T21:15:51.850Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T21:15:51.851Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T21:15:51.851Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T21:15:51.972Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer Full Stack & Application Development 1 at Cisco
[2026-01-21T21:15:51.976Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T21:15:51.977Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-21T21:15:51.977Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-21T21:15:51.977Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-21T21:15:51.977Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-21T21:15:51.977Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-21T21:15:52.078Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[2026-01-21T21:15:52.260Z] [BOT] ✅ Saved pending queue: 2760 total (2748 pending, 12 enriched, 0 posted)
🗑️ Removed 8 blacklisted jobs from pending queue
[2026-01-21T21:15:52.260Z] [BOT] 📋 After blacklist filter: 12 jobs (8 blacklisted)
📋 After data quality filter: 12 jobs (0 invalid)
[2026-01-21T21:15:52.261Z] [BOT] 📋 After multi-location grouping: 12 unique jobs to post
[2026-01-21T21:15:52.261Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T21:15:52.265Z] [BOT] 📌 Posting 7 jobs to #tech-jobs
[2026-01-21T21:15:52.265Z] [BOT] 📍 [ROUTING] "Software Engineer Full Stack & Application Development 1" @ ORG_aa669b28
[2026-01-21T21:15:52.265Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:15:52.282Z] [BOT ERROR] (node:2575) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T21:15:52.688Z] [BOT] ✅ Posted message: Software Engineer Full Stack & Application Development 1 @ ORG_aa669b28 in #tech-jobs
  ✅ Industry: Software Engineer Full Stack & Application Development 1 @ ORG_aa669b28
[2026-01-21T21:15:52.690Z] [BOT] 💾 Added channel posting: Software Engineer Full Stack & Application Development 1 @ ORG_aa669b28 → category channel (1 total channels)
[2026-01-21T21:15:52.690Z] [BOT] 💾 BEFORE ARCHIVING: 3798 jobs in database
[2026-01-21T21:15:52.693Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T21:15:52.698Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T21:15:52.698Z] [BOT] ✅ Archiving complete: 10 archived, 3788 active
[2026-01-21T21:15:52.726Z] [BOT] 💾 Saved posted_jobs.json: 3788 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:15:54.228Z] [BOT] 💾 Marked as posted: Software Engineer Full Stack & Application Development 1 @ ORG_aa669b28 (instance #1)
[2026-01-21T21:15:54.229Z] [BOT] 💾 BEFORE ARCHIVING: 3789 jobs in database
[2026-01-21T21:15:54.231Z] [BOT] ✅ No jobs to archive (all 3789 jobs within 7-day window)
[2026-01-21T21:15:54.252Z] [BOT] 💾 Saved posted_jobs.json: 3789 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:15:54.252Z] [BOT] 📍 [ROUTING] "Manager, Software Engineering - Billing" @ figma
   Category: TECH (matched: "software")
[2026-01-21T21:15:54.252Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T21:15:54.503Z] [BOT] ✅ Posted message: Manager, Software Engineering - Billing @ figma in #tech-jobs
[2026-01-21T21:15:54.503Z] [BOT] ✅ Industry: Manager, Software Engineering - Billing @ figma
[2026-01-21T21:15:54.504Z] [BOT] 💾 Added channel posting: Manager, Software Engineering - Billing @ figma → category channel (1 total channels)
[2026-01-21T21:15:54.504Z] [BOT] 💾 BEFORE ARCHIVING: 3790 jobs in database
[2026-01-21T21:15:54.506Z] [BOT] ✅ No jobs to archive (all 3790 jobs within 7-day window)
[2026-01-21T21:15:54.528Z] [BOT] 💾 Saved posted_jobs.json: 3790 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:15:56.029Z] [BOT] 💾 Marked as posted: Manager, Software Engineering - Billing @ figma (instance #1)
[2026-01-21T21:15:56.029Z] [BOT] 💾 BEFORE ARCHIVING: 3791 jobs in database
[2026-01-21T21:15:56.031Z] [BOT] ✅ No jobs to archive (all 3791 jobs within 7-day window)
[2026-01-21T21:15:56.054Z] [BOT] 💾 Saved posted_jobs.json: 3791 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:15:56.054Z] [BOT] 📍 [ROUTING] "Associate Report Developer" @ ORG_044baaec Logistics
[2026-01-21T21:15:56.054Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:15:56.227Z] [BOT] ✅ Posted message: Associate Report Developer @ ORG_044baaec Logistics in #tech-jobs
  ✅ Industry: Associate Report Developer @ ORG_044baaec Logistics
[2026-01-21T21:15:56.228Z] [BOT] 💾 Added channel posting: Associate Report Developer @ ORG_044baaec Logistics → category channel (1 total channels)
[2026-01-21T21:15:56.228Z] [BOT] 💾 BEFORE ARCHIVING: 3792 jobs in database
[2026-01-21T21:15:56.230Z] [BOT] ✅ No jobs to archive (all 3792 jobs within 7-day window)
[2026-01-21T21:15:56.252Z] [BOT] 💾 Saved posted_jobs.json: 3792 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:15:57.932Z] [BOT] ✅ Posted message: Associate Report Developer @ ORG_044baaec Logistics in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T21:15:57.933Z] [BOT] 💾 Added channel posting: Associate Report Developer @ ORG_044baaec Logistics → location channel (2 total channels)
[2026-01-21T21:15:57.933Z] [BOT] 💾 BEFORE ARCHIVING: 3792 jobs in database
[2026-01-21T21:15:57.935Z] [BOT] ✅ No jobs to archive (all 3792 jobs within 7-day window)
[2026-01-21T21:15:57.957Z] [BOT] 💾 Saved posted_jobs.json: 3792 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:15:59.458Z] [BOT] 💾 Marked as posted: Associate Report Developer @ ORG_044baaec Logistics (instance #1)
[2026-01-21T21:15:59.458Z] [BOT] 💾 BEFORE ARCHIVING: 3793 jobs in database
[2026-01-21T21:15:59.460Z] [BOT] ✅ No jobs to archive (all 3793 jobs within 7-day window)
[2026-01-21T21:15:59.483Z] [BOT] 💾 Saved posted_jobs.json: 3793 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:15:59.483Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Fullstack - Hardware Accelerate" @ ORG_3acb0a4a
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:15:59.666Z] [BOT] ✅ Posted message: Software Engineer 1 - Fullstack - Hardware Accelerate @ ORG_3acb0a4a in #tech-jobs
  ✅ Industry: Software Engineer 1 - Fullstack - Hardware Accelerate @ ORG_3acb0a4a
[2026-01-21T21:15:59.666Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Fullstack - Hardware Accelerate @ ORG_3acb0a4a → category channel (1 total channels)
[2026-01-21T21:15:59.667Z] [BOT] 💾 BEFORE ARCHIVING: 3794 jobs in database
[2026-01-21T21:15:59.669Z] [BOT] ✅ No jobs to archive (all 3794 jobs within 7-day window)
[2026-01-21T21:15:59.691Z] [BOT] 💾 Saved posted_jobs.json: 3794 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:01.192Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Fullstack - Hardware Accelerate @ ORG_3acb0a4a (instance #1)
[2026-01-21T21:16:01.193Z] [BOT] 💾 BEFORE ARCHIVING: 3795 jobs in database
[2026-01-21T21:16:01.195Z] [BOT] ✅ No jobs to archive (all 3795 jobs within 7-day window)
[2026-01-21T21:16:01.223Z] [BOT] 💾 Saved posted_jobs.json: 3795 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:01.224Z] [BOT] 📍 [ROUTING] "AI/ML Systems Engineer" @ ORG_04c08645ins
   Category: TECH (matched: "machine learning")
[2026-01-21T21:16:01.224Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T21:16:01.446Z] [BOT] ✅ Posted message: AI/ML Systems Engineer @ ORG_04c08645ins in #tech-jobs
  ✅ Industry: AI/ML Systems Engineer @ ORG_04c08645ins
[2026-01-21T21:16:01.447Z] [BOT] 💾 Added channel posting: AI/ML Systems Engineer @ ORG_04c08645ins → category channel (1 total channels)
[2026-01-21T21:16:01.447Z] [BOT] 💾 BEFORE ARCHIVING: 3796 jobs in database
[2026-01-21T21:16:01.450Z] [BOT] ✅ No jobs to archive (all 3796 jobs within 7-day window)
[2026-01-21T21:16:01.477Z] [BOT] 💾 Saved posted_jobs.json: 3796 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:03.210Z] [BOT] ✅ Posted message: AI/ML Systems Engineer @ ORG_04c08645ins in #JID_ead674af
[2026-01-21T21:16:03.210Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T21:16:03.210Z] [BOT] 💾 Added channel posting: AI/ML Systems Engineer @ ORG_04c08645ins → location channel (2 total channels)
[2026-01-21T21:16:03.211Z] [BOT] 💾 BEFORE ARCHIVING: 3796 jobs in database
[2026-01-21T21:16:03.213Z] [BOT] ✅ No jobs to archive (all 3796 jobs within 7-day window)
[2026-01-21T21:16:03.239Z] [BOT] 💾 Saved posted_jobs.json: 3796 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:04.741Z] [BOT] 💾 Marked as posted: AI/ML Systems Engineer @ ORG_04c08645ins (instance #1)
[2026-01-21T21:16:04.741Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T21:16:04.744Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T21:16:04.766Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:04.767Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_05d2f9ea Electric
[2026-01-21T21:16:04.767Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:16:04.942Z] [BOT] ✅ Posted message: Software Engineer @ ORG_05d2f9ea Electric in #tech-jobs
[2026-01-21T21:16:04.942Z] [BOT] ✅ Industry: Software Engineer @ ORG_05d2f9ea Electric
[2026-01-21T21:16:04.943Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_05d2f9ea Electric → category channel (1 total channels)
[2026-01-21T21:16:04.943Z] [BOT] 💾 BEFORE ARCHIVING: 3798 jobs in database
[2026-01-21T21:16:04.946Z] [BOT] ✅ No jobs to archive (all 3798 jobs within 7-day window)
[2026-01-21T21:16:04.973Z] [BOT] 💾 Saved posted_jobs.json: 3798 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:06.475Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_05d2f9ea Electric (instance #1)
[2026-01-21T21:16:06.475Z] [BOT] 💾 BEFORE ARCHIVING: 3799 jobs in database
[2026-01-21T21:16:06.477Z] [BOT] ✅ No jobs to archive (all 3799 jobs within 7-day window)
[2026-01-21T21:16:06.503Z] [BOT] 💾 Saved posted_jobs.json: 3799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:06.503Z] [BOT] 📍 [ROUTING] "Software Engineer, Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:16:06.739Z] [BOT] ✅ Posted message: Software Engineer, Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer, Early Career @ ORG_07b9fafa
[2026-01-21T21:16:06.740Z] [BOT] 💾 Added channel posting: Software Engineer, Early Career @ ORG_07b9fafa → category channel (1 total channels)
[2026-01-21T21:16:06.740Z] [BOT] 💾 BEFORE ARCHIVING: 3800 jobs in database
[2026-01-21T21:16:06.742Z] [BOT] ✅ No jobs to archive (all 3800 jobs within 7-day window)
[2026-01-21T21:16:06.764Z] [BOT] 💾 Saved posted_jobs.json: 3800 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:08.266Z] [BOT] 💾 Marked as posted: Software Engineer, Early Career @ ORG_07b9fafa (instance #1)
[2026-01-21T21:16:08.266Z] [BOT] 💾 BEFORE ARCHIVING: 3801 jobs in database
[2026-01-21T21:16:08.268Z] [BOT] ✅ No jobs to archive (all 3801 jobs within 7-day window)
[2026-01-21T21:16:08.291Z] [BOT] 💾 Saved posted_jobs.json: 3801 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:11.292Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T21:16:11.293Z] [BOT] 📍 [ROUTING] "Director, Technical Accounting & Financial Reporting" @ vercel
   Category: FINANCE (matched: "finance")
[2026-01-21T21:16:11.293Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T21:16:11.652Z] [BOT] ✅ Posted message: Director, Technical Accounting & Financial Reporting @ vercel in #finance-jobs
  ✅ Industry: Director, Technical Accounting & Financial Reporting @ vercel
[2026-01-21T21:16:11.653Z] [BOT] 💾 Added channel posting: Director, Technical Accounting & Financial Reporting @ vercel → category channel (1 total channels)
[2026-01-21T21:16:11.653Z] [BOT] 💾 BEFORE ARCHIVING: 3802 jobs in database
[2026-01-21T21:16:11.655Z] [BOT] ✅ No jobs to archive (all 3802 jobs within 7-day window)
[2026-01-21T21:16:11.678Z] [BOT] 💾 Saved posted_jobs.json: 3802 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:13.180Z] [BOT] 💾 Marked as posted: Director, Technical Accounting & Financial Reporting @ vercel (instance #1)
[2026-01-21T21:16:13.180Z] [BOT] 💾 BEFORE ARCHIVING: 3803 jobs in database
[2026-01-21T21:16:13.182Z] [BOT] ✅ No jobs to archive (all 3803 jobs within 7-day window)
[2026-01-21T21:16:13.208Z] [BOT] 💾 Saved posted_jobs.json: 3803 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:16.209Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T21:16:16.209Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_7f1f7a12
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-21T21:16:16.210Z] [BOT] Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T21:16:16.623Z] [BOT] ✅ Posted message: Data Analyst @ ORG_7f1f7a12 in #JID_fb739488
[2026-01-21T21:16:16.623Z] [BOT] ✅ Industry: Data Analyst @ ORG_7f1f7a12
[2026-01-21T21:16:16.624Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-21T21:16:16.624Z] [BOT] 💾 BEFORE ARCHIVING: 3804 jobs in database
[2026-01-21T21:16:16.627Z] [BOT] ✅ No jobs to archive (all 3804 jobs within 7-day window)
[2026-01-21T21:16:16.650Z] [BOT] 💾 Saved posted_jobs.json: 3804 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:18.350Z] [BOT] ✅ Posted message: Data Analyst @ ORG_7f1f7a12 in #JID_ead674af
[2026-01-21T21:16:18.350Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T21:16:18.350Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_7f1f7a12 → location channel (2 total channels)
[2026-01-21T21:16:18.350Z] [BOT] 💾 BEFORE ARCHIVING: 3804 jobs in database
[2026-01-21T21:16:18.353Z] [BOT] ✅ No jobs to archive (all 3804 jobs within 7-day window)
[2026-01-21T21:16:18.374Z] [BOT] 💾 Saved posted_jobs.json: 3804 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:19.876Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_7f1f7a12 (instance #1)
[2026-01-21T21:16:19.876Z] [BOT] 💾 BEFORE ARCHIVING: 3805 jobs in database
[2026-01-21T21:16:19.879Z] [BOT] ✅ No jobs to archive (all 3805 jobs within 7-day window)
[2026-01-21T21:16:19.902Z] [BOT] 💾 Saved posted_jobs.json: 3805 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:22.903Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-21T21:16:22.903Z] [BOT] 📍 [ROUTING] "Machine Learning Engineering Manager II" @ spotify
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T21:16:23.160Z] [BOT] ✅ Posted message: Machine Learning Engineering Manager II @ spotify in #ai-jobs
[2026-01-21T21:16:23.160Z] [BOT] ✅ Industry: Machine Learning Engineering Manager II @ spotify
[2026-01-21T21:16:23.160Z] [BOT] 💾 Added channel posting: Machine Learning Engineering Manager II @ spotify → category channel (1 total channels)
[2026-01-21T21:16:23.161Z] [BOT] 💾 BEFORE ARCHIVING: 3806 jobs in database
[2026-01-21T21:16:23.163Z] [BOT] ✅ No jobs to archive (all 3806 jobs within 7-day window)
[2026-01-21T21:16:23.186Z] [BOT] 💾 Saved posted_jobs.json: 3806 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:24.870Z] [BOT] ✅ Posted message: Machine Learning Engineering Manager II @ spotify in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T21:16:24.871Z] [BOT] 💾 Added channel posting: Machine Learning Engineering Manager II @ spotify → location channel (2 total channels)
[2026-01-21T21:16:24.871Z] [BOT] 💾 BEFORE ARCHIVING: 3806 jobs in database
[2026-01-21T21:16:24.873Z] [BOT] ✅ No jobs to archive (all 3806 jobs within 7-day window)
[2026-01-21T21:16:24.895Z] [BOT] 💾 Saved posted_jobs.json: 3806 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:26.397Z] [BOT] 💾 Marked as posted: Machine Learning Engineering Manager II @ spotify (instance #1)
[2026-01-21T21:16:26.397Z] [BOT] 💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:16:26.399Z] [BOT] ✅ No jobs to archive (all 3807 jobs within 7-day window)
[2026-01-21T21:16:26.422Z] [BOT] 💾 Saved posted_jobs.json: 3807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:16:29.424Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T21:16:29.425Z] [BOT] ⏭️  Skipping duplicate: JID_60c63ce8 (posted within 7 days)
[2026-01-21T21:16:29.425Z] [BOT] ⏭️  Skipping duplicate: JID_8daed847 (posted within 7 days)
[2026-01-21T21:16:29.425Z] [BOT] ⏭️  Skipping duplicate: JID_6aa65224 (posted within 7 days)
[2026-01-21T21:16:29.425Z] [BOT] ⏭️  Skipping duplicate: JID_0c5571aa-developer_r0097857 (posted within 7 days)
[2026-01-21T21:16:29.425Z] [BOT] ⏭️  Skipping duplicate: JID_eed10ef9-analyst_r00221046 (posted within 7 days)
[2026-01-21T21:16:29.426Z] [BOT] ⏭️  Skipping duplicate: JID_783695d9 (posted within 7 days)
[2026-01-21T21:16:29.426Z] [BOT] ⏭️  Skipping duplicate: JID_353416e4-cx_1-job-2418409 (posted within 7 days)
[2026-01-21T21:16:29.426Z] [BOT] ⏭️  Skipping duplicate: JID_b02011d1-cx_1-job-25028581 (posted within 7 days)
[2026-01-21T21:16:29.426Z] [BOT] ⏭️  Skipping duplicate: JID_efe0ae10 (posted within 7 days)
[2026-01-21T21:16:29.426Z] [BOT] ⏭️  Skipping duplicate: JID_13adae03 (posted within 7 days)
[2026-01-21T21:16:29.529Z] [BOT] ✅ Loaded pending queue: 2760 total (2748 pending, 12 enriched, 0 posted)
[2026-01-21T21:16:29.707Z] [BOT] ✅ Saved pending queue: 2760 total (2748 pending, 2 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-21T21:16:29.707Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T21:16:29.788Z] [BOT] 📂 Loaded 6101 existing routing entries
[2026-01-21T21:16:29.868Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T21:16:29.868Z] [BOT] Total entries: 6111
   Timestamp: 2026-01-21T21:16:29.842Z
[2026-01-21T21:16:29.868Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T21:16:29.869Z] [BOT] Total attempts: 22
   Successful: 14
   Failed: 0
   Skipped: 8
[2026-01-21T21:16:29.869Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T21:16:29.869Z] [BOT] Last cleanup: Never
   Total posts: 14
   Channels used: 6
   Top channels:
     1. #tech-jobs: 7 posts
     2. #JID_ead674af: 3 posts
     3. #finance-jobs: 1 posts
[2026-01-21T21:16:29.869Z] [BOT] 4. #JID_fb739488: 1 posts
     5. #ai-jobs: 1 posts
[2026-01-21T21:16:29.869Z] [BOT] [STATS] Channel stats saved
[2026-01-21T21:16:31.895Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2575) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*