# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T20:36:35.356Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T20:35:52.650Z] ========================================
[2026-01-21T20:35:52.651Z] Discord Bot Execution Log
[2026-01-21T20:35:52.651Z] Environment: GitHub Actions
[2026-01-21T20:35:52.651Z] Node Version: v20.19.6
[2026-01-21T20:35:52.651Z] ========================================
[2026-01-21T20:35:52.652Z] Environment Variables Check:
[2026-01-21T20:35:52.652Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T20:35:52.652Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T20:35:52.652Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T20:35:52.652Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T20:35:52.652Z] 
Multi-Channel Configuration:
[2026-01-21T20:35:52.652Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T20:35:52.652Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T20:35:52.652Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T20:35:52.652Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T20:35:52.652Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T20:35:52.652Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T20:35:52.652Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T20:35:52.652Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T20:35:52.653Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T20:35:52.653Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T20:35:52.653Z] 
Data Files Check:
[2026-01-21T20:35:52.654Z] .github/data/new_jobs.json: ✅ Exists (10 items, 74145 bytes)
[2026-01-21T20:35:52.670Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2180350 bytes)
[2026-01-21T20:35:52.670Z] 
========================================
[2026-01-21T20:35:52.670Z] Starting Enhanced Discord Bot...
[2026-01-21T20:35:52.670Z] ========================================
[2026-01-21T20:35:53.145Z] [BOT] ✅ Loaded V2 database: 3777 jobs
[2026-01-21T20:35:54.005Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T20:35:54.005Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T20:35:54.006Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T20:35:54.167Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: RevOps Reporting & Insights Analyst at anthropic
[2026-01-21T20:35:54.173Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T20:35:54.173Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T20:35:54.173Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T20:35:54.174Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T20:35:54.175Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T20:35:54.179Z] [BOT] 📌 Posting 7 jobs to #tech-jobs
[2026-01-21T20:35:54.179Z] [BOT] 📍 [ROUTING] "RevOps Reporting & Insights Analyst" @ anthropic
[2026-01-21T20:35:54.179Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T20:35:54.183Z] [BOT ERROR] (node:3113) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T20:35:54.490Z] [BOT] ✅ Posted message: RevOps Reporting & Insights Analyst @ anthropic in #tech-jobs
[2026-01-21T20:35:54.490Z] [BOT] ✅ Industry: RevOps Reporting & Insights Analyst @ anthropic
[2026-01-21T20:35:54.492Z] [BOT] 💾 Added channel posting: RevOps Reporting & Insights Analyst @ anthropic → category channel (1 total channels)
[2026-01-21T20:35:54.492Z] [BOT] 💾 BEFORE ARCHIVING: 3778 jobs in database
[2026-01-21T20:35:54.495Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T20:35:54.501Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 3768 active
[2026-01-21T20:35:54.526Z] [BOT] 💾 Saved posted_jobs.json: 3768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:35:56.028Z] [BOT] 💾 Marked as posted: RevOps Reporting & Insights Analyst @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 3769 jobs in database
[2026-01-21T20:35:56.031Z] [BOT] ✅ No jobs to archive (all 3769 jobs within 7-day window)
[2026-01-21T20:35:56.053Z] [BOT] 💾 Saved posted_jobs.json: 3769 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:35:56.054Z] [BOT] 📍 [ROUTING] "Mobile Engineer" @ vercel
   Category: TECH (matched: "engineer/engineering")
[2026-01-21T20:35:56.054Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T20:35:56.321Z] [BOT] ✅ Posted message: Mobile Engineer @ vercel in #tech-jobs
[2026-01-21T20:35:56.321Z] [BOT] ✅ Industry: Mobile Engineer @ vercel
[2026-01-21T20:35:56.322Z] [BOT] 💾 Added channel posting: Mobile Engineer @ vercel → category channel (1 total channels)
[2026-01-21T20:35:56.322Z] [BOT] 💾 BEFORE ARCHIVING: 3770 jobs in database
[2026-01-21T20:35:56.325Z] [BOT] ✅ No jobs to archive (all 3770 jobs within 7-day window)
[2026-01-21T20:35:56.349Z] [BOT] 💾 Saved posted_jobs.json: 3770 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:35:58.199Z] [BOT] ✅ Posted message: Mobile Engineer @ vercel in #JID_98d4f0de
[2026-01-21T20:35:58.199Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T20:35:58.199Z] [BOT] 💾 Added channel posting: Mobile Engineer @ vercel → location channel (2 total channels)
[2026-01-21T20:35:58.199Z] [BOT] 💾 BEFORE ARCHIVING: 3770 jobs in database
[2026-01-21T20:35:58.202Z] [BOT] ✅ No jobs to archive (all 3770 jobs within 7-day window)
[2026-01-21T20:35:58.226Z] [BOT] 💾 Saved posted_jobs.json: 3770 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:35:59.728Z] [BOT] 💾 Marked as posted: Mobile Engineer @ vercel (instance #1)
[2026-01-21T20:35:59.728Z] [BOT] 💾 BEFORE ARCHIVING: 3771 jobs in database
[2026-01-21T20:35:59.730Z] [BOT] ✅ No jobs to archive (all 3771 jobs within 7-day window)
[2026-01-21T20:35:59.752Z] [BOT] 💾 Saved posted_jobs.json: 3771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:35:59.752Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_8a40e6ae Architects
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T20:35:59.950Z] [BOT] ✅ Posted message: Software Engineer @ ORG_8a40e6ae Architects in #tech-jobs
  ✅ Industry: Software Engineer @ ORG_8a40e6ae Architects
[2026-01-21T20:35:59.951Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_8a40e6ae Architects → category channel (1 total channels)
[2026-01-21T20:35:59.951Z] [BOT] 💾 BEFORE ARCHIVING: 3772 jobs in database
[2026-01-21T20:35:59.954Z] [BOT] ✅ No jobs to archive (all 3772 jobs within 7-day window)
[2026-01-21T20:35:59.977Z] [BOT] 💾 Saved posted_jobs.json: 3772 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:01.478Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_8a40e6ae Architects (instance #1)
[2026-01-21T20:36:01.479Z] [BOT] 💾 BEFORE ARCHIVING: 3773 jobs in database
[2026-01-21T20:36:01.481Z] [BOT] ✅ No jobs to archive (all 3773 jobs within 7-day window)
[2026-01-21T20:36:01.503Z] [BOT] 💾 Saved posted_jobs.json: 3773 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:01.503Z] [BOT] 📍 [ROUTING] "Java Developer" @ mthree
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T20:36:01.681Z] [BOT] ✅ Posted message: Java Developer @ mthree in #tech-jobs
[2026-01-21T20:36:01.681Z] [BOT] ✅ Industry: Java Developer @ mthree
[2026-01-21T20:36:01.682Z] [BOT] 💾 Added channel posting: Java Developer @ mthree → category channel (1 total channels)
[2026-01-21T20:36:01.682Z] [BOT] 💾 BEFORE ARCHIVING: 3774 jobs in database
[2026-01-21T20:36:01.684Z] [BOT] ✅ No jobs to archive (all 3774 jobs within 7-day window)
[2026-01-21T20:36:01.706Z] [BOT] 💾 Saved posted_jobs.json: 3774 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:03.207Z] [BOT] 💾 Marked as posted: Java Developer @ mthree (instance #1)
[2026-01-21T20:36:03.208Z] [BOT] 💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T20:36:03.210Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T20:36:03.237Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:03.238Z] [BOT] 📍 [ROUTING] "Inside Sales Representative - Early Career (2026)" @ figma
   Category: TECH (default)
[2026-01-21T20:36:03.238Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T20:36:03.453Z] [BOT] ✅ Posted message: Inside Sales Representative - Early Career (2026) @ figma in #tech-jobs
  ✅ Industry: Inside Sales Representative - Early Career (2026) @ figma
[2026-01-21T20:36:03.454Z] [BOT] 💾 Added channel posting: Inside Sales Representative - Early Career (2026) @ figma → category channel (1 total channels)
[2026-01-21T20:36:03.454Z] [BOT] 💾 BEFORE ARCHIVING: 3776 jobs in database
[2026-01-21T20:36:03.457Z] [BOT] ✅ No jobs to archive (all 3776 jobs within 7-day window)
[2026-01-21T20:36:03.481Z] [BOT] 💾 Saved posted_jobs.json: 3776 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:05.182Z] [BOT] ✅ Posted message: Inside Sales Representative - Early Career (2026) @ figma in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T20:36:05.183Z] [BOT] 💾 Added channel posting: Inside Sales Representative - Early Career (2026) @ figma → location channel (2 total channels)
[2026-01-21T20:36:05.183Z] [BOT] 💾 BEFORE ARCHIVING: 3776 jobs in database
[2026-01-21T20:36:05.185Z] [BOT] ✅ No jobs to archive (all 3776 jobs within 7-day window)
[2026-01-21T20:36:05.211Z] [BOT] 💾 Saved posted_jobs.json: 3776 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:06.712Z] [BOT] 💾 Marked as posted: Inside Sales Representative - Early Career (2026) @ figma (instance #1)
[2026-01-21T20:36:06.712Z] [BOT] 💾 BEFORE ARCHIVING: 3777 jobs in database
[2026-01-21T20:36:06.715Z] [BOT] ✅ No jobs to archive (all 3777 jobs within 7-day window)
[2026-01-21T20:36:06.738Z] [BOT] 💾 Saved posted_jobs.json: 3777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:06.739Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer Graduate" @ ORG_f5f00f52
   Category: TECH (matched: "software")
[2026-01-21T20:36:06.739Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T20:36:06.935Z] [BOT] ✅ Posted message: Full Stack Software Engineer Graduate @ ORG_f5f00f52 in #tech-jobs
  ✅ Industry: Full Stack Software Engineer Graduate @ ORG_f5f00f52
[2026-01-21T20:36:06.936Z] [BOT] 💾 Added channel posting: Full Stack Software Engineer Graduate @ ORG_f5f00f52 → category channel (1 total channels)
[2026-01-21T20:36:06.936Z] [BOT] 💾 BEFORE ARCHIVING: 3778 jobs in database
[2026-01-21T20:36:06.938Z] [BOT] ✅ No jobs to archive (all 3778 jobs within 7-day window)
[2026-01-21T20:36:06.964Z] [BOT] 💾 Saved posted_jobs.json: 3778 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:08.659Z] [BOT] ✅ Posted message: Full Stack Software Engineer Graduate @ ORG_f5f00f52 in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T20:36:08.659Z] [BOT] 💾 Added channel posting: Full Stack Software Engineer Graduate @ ORG_f5f00f52 → location channel (2 total channels)
[2026-01-21T20:36:08.659Z] [BOT] 💾 BEFORE ARCHIVING: 3778 jobs in database
[2026-01-21T20:36:08.662Z] [BOT] ✅ No jobs to archive (all 3778 jobs within 7-day window)
[2026-01-21T20:36:08.685Z] [BOT] 💾 Saved posted_jobs.json: 3778 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:10.185Z] [BOT] 💾 Marked as posted: Full Stack Software Engineer Graduate @ ORG_f5f00f52 (instance #1)
[2026-01-21T20:36:10.186Z] [BOT] 💾 BEFORE ARCHIVING: 3779 jobs in database
[2026-01-21T20:36:10.188Z] [BOT] ✅ No jobs to archive (all 3779 jobs within 7-day window)
[2026-01-21T20:36:10.214Z] [BOT] 💾 Saved posted_jobs.json: 3779 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:10.214Z] [BOT] 📍 [ROUTING] "Tech 1 – Mapping" @ ORG_6f8a62f0 Hathaway Energy
   Category: TECH (default)
[2026-01-21T20:36:10.214Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T20:36:10.471Z] [BOT] ✅ Posted message: Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy in #tech-jobs
[2026-01-21T20:36:10.471Z] [BOT] ✅ Industry: Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy
[2026-01-21T20:36:10.472Z] [BOT] 💾 Added channel posting: Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy → category channel (1 total channels)
[2026-01-21T20:36:10.472Z] [BOT] 💾 BEFORE ARCHIVING: 3780 jobs in database
[2026-01-21T20:36:10.474Z] [BOT] ✅ No jobs to archive (all 3780 jobs within 7-day window)
[2026-01-21T20:36:10.500Z] [BOT] 💾 Saved posted_jobs.json: 3780 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:12.263Z] [BOT] ✅ Posted message: Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy in #JID_ead674af
[2026-01-21T20:36:12.263Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T20:36:12.264Z] [BOT] 💾 Added channel posting: Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy → location channel (2 total channels)
[2026-01-21T20:36:12.264Z] [BOT] 💾 BEFORE ARCHIVING: 3780 jobs in database
[2026-01-21T20:36:12.266Z] [BOT] ✅ No jobs to archive (all 3780 jobs within 7-day window)
[2026-01-21T20:36:12.289Z] [BOT] 💾 Saved posted_jobs.json: 3780 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:13.791Z] [BOT] 💾 Marked as posted: Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy (instance #1)
[2026-01-21T20:36:13.791Z] [BOT] 💾 BEFORE ARCHIVING: 3781 jobs in database
[2026-01-21T20:36:13.793Z] [BOT] ✅ No jobs to archive (all 3781 jobs within 7-day window)
[2026-01-21T20:36:13.817Z] [BOT] 💾 Saved posted_jobs.json: 3781 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:16.819Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T20:36:16.819Z] [BOT] 📍 [ROUTING] "Associate Data Analyst" @ ORG_578d5e7d
[2026-01-21T20:36:16.819Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T20:36:17.081Z] [BOT] ✅ Posted message: Associate Data Analyst @ ORG_578d5e7d in #JID_fb739488
  ✅ Industry: Associate Data Analyst @ ORG_578d5e7d
[2026-01-21T20:36:17.082Z] [BOT] 💾 Added channel posting: Associate Data Analyst @ ORG_578d5e7d → category channel (1 total channels)
[2026-01-21T20:36:17.082Z] [BOT] 💾 BEFORE ARCHIVING: 3782 jobs in database
[2026-01-21T20:36:17.084Z] [BOT] ✅ No jobs to archive (all 3782 jobs within 7-day window)
[2026-01-21T20:36:17.107Z] [BOT] 💾 Saved posted_jobs.json: 3782 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:18.761Z] [BOT] ✅ Posted message: Associate Data Analyst @ ORG_578d5e7d in #JID_98d4f0de
[2026-01-21T20:36:18.761Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T20:36:18.762Z] [BOT] 💾 Added channel posting: Associate Data Analyst @ ORG_578d5e7d → location channel (2 total channels)
[2026-01-21T20:36:18.762Z] [BOT] 💾 BEFORE ARCHIVING: 3782 jobs in database
[2026-01-21T20:36:18.764Z] [BOT] ✅ No jobs to archive (all 3782 jobs within 7-day window)
[2026-01-21T20:36:18.790Z] [BOT] 💾 Saved posted_jobs.json: 3782 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:20.292Z] [BOT] 💾 Marked as posted: Associate Data Analyst @ ORG_578d5e7d (instance #1)
[2026-01-21T20:36:20.292Z] [BOT] 💾 BEFORE ARCHIVING: 3783 jobs in database
[2026-01-21T20:36:20.294Z] [BOT] ✅ No jobs to archive (all 3783 jobs within 7-day window)
[2026-01-21T20:36:20.318Z] [BOT] 💾 Saved posted_jobs.json: 3783 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:23.318Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-21T20:36:23.319Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - Prediction" @ ORG_9eb7abc4
[2026-01-21T20:36:23.319Z] [BOT] Category: AI (matched: "machine learning")
[2026-01-21T20:36:23.319Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T20:36:23.548Z] [BOT] ✅ Posted message: Machine Learning Engineer - Prediction @ ORG_9eb7abc4 in #ai-jobs
  ✅ Industry: Machine Learning Engineer - Prediction @ ORG_9eb7abc4
[2026-01-21T20:36:23.549Z] [BOT] 💾 Added channel posting: Machine Learning Engineer - Prediction @ ORG_9eb7abc4 → category channel (1 total channels)
[2026-01-21T20:36:23.549Z] [BOT] 💾 BEFORE ARCHIVING: 3784 jobs in database
[2026-01-21T20:36:23.551Z] [BOT] ✅ No jobs to archive (all 3784 jobs within 7-day window)
[2026-01-21T20:36:23.578Z] [BOT] 💾 Saved posted_jobs.json: 3784 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:25.080Z] [BOT] 💾 Marked as posted: Machine Learning Engineer - Prediction @ ORG_9eb7abc4 (instance #1)
[2026-01-21T20:36:25.081Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T20:36:25.083Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T20:36:25.107Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:25.107Z] [BOT] 📍 [ROUTING] "AI Product Specialist" @ ORG_a0a5b7ba
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T20:36:25.108Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T20:36:25.555Z] [BOT] ✅ Posted message: AI Product Specialist @ ORG_a0a5b7ba in #ai-jobs
  ✅ Industry: AI Product Specialist @ ORG_a0a5b7ba
[2026-01-21T20:36:25.556Z] [BOT] 💾 Added channel posting: AI Product Specialist @ ORG_a0a5b7ba → category channel (1 total channels)
[2026-01-21T20:36:25.557Z] [BOT] 💾 BEFORE ARCHIVING: 3786 jobs in database
[2026-01-21T20:36:25.559Z] [BOT] ✅ No jobs to archive (all 3786 jobs within 7-day window)
[2026-01-21T20:36:25.583Z] [BOT] 💾 Saved posted_jobs.json: 3786 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:27.244Z] [BOT] ✅ Posted message: AI Product Specialist @ ORG_a0a5b7ba in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T20:36:27.245Z] [BOT] 💾 Added channel posting: AI Product Specialist @ ORG_a0a5b7ba → location channel (2 total channels)
[2026-01-21T20:36:27.245Z] [BOT] 💾 BEFORE ARCHIVING: 3786 jobs in database
[2026-01-21T20:36:27.247Z] [BOT] ✅ No jobs to archive (all 3786 jobs within 7-day window)
[2026-01-21T20:36:27.271Z] [BOT] 💾 Saved posted_jobs.json: 3786 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:28.771Z] [BOT] 💾 Marked as posted: AI Product Specialist @ ORG_a0a5b7ba (instance #1)
[2026-01-21T20:36:28.772Z] [BOT] 💾 BEFORE ARCHIVING: 3787 jobs in database
[2026-01-21T20:36:28.774Z] [BOT] ✅ No jobs to archive (all 3787 jobs within 7-day window)
[2026-01-21T20:36:28.800Z] [BOT] 💾 Saved posted_jobs.json: 3787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:36:31.800Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T20:36:31.800Z] [BOT] ⏭️  Skipping duplicate: JID_7fd4c3cf (posted within 7 days)
[2026-01-21T20:36:31.801Z] [BOT] ⏭️  Skipping duplicate: JID_13223fd1 (posted within 7 days)
[2026-01-21T20:36:31.801Z] [BOT] ⏭️  Skipping duplicate: JID_b2086fb7 (posted within 7 days)
[2026-01-21T20:36:31.801Z] [BOT] ⏭️  Skipping duplicate: JID_efb98fbf (posted within 7 days)
[2026-01-21T20:36:31.802Z] [BOT] ⏭️  Skipping duplicate: JID_cb0e6e14 (posted within 7 days)
[2026-01-21T20:36:31.802Z] [BOT] ⏭️  Skipping duplicate: JID_b7215b2b (posted within 7 days)
[2026-01-21T20:36:31.802Z] [BOT] ⏭️  Skipping duplicate: JID_d86c1432 (posted within 7 days)
[2026-01-21T20:36:31.802Z] [BOT] ⏭️  Skipping duplicate: JID_64fd6385 (posted within 7 days)
[2026-01-21T20:36:31.803Z] [BOT] ⏭️  Skipping duplicate: JID_3f2874e7 (posted within 7 days)
[2026-01-21T20:36:31.803Z] [BOT] ⏭️  Skipping duplicate: JID_b54cc3d5-cx_1-job-10003893 (posted within 7 days)
[2026-01-21T20:36:31.963Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[2026-01-21T20:36:32.129Z] [BOT] ✅ Saved pending queue: 2766 total (2746 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T20:36:32.201Z] [BOT] 📂 Loaded 6081 existing routing entries
[2026-01-21T20:36:32.276Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6091
   Timestamp: 2026-01-21T20:36:32.253Z
[2026-01-21T20:36:32.277Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T20:36:32.277Z] [BOT] Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-21T20:36:32.277Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T20:36:32.277Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 5
   Top channels:
     1. #tech-jobs: 7 posts
     2. #JID_98d4f0de: 5 posts
[2026-01-21T20:36:32.277Z] [BOT] 3. #ai-jobs: 2 posts
     4. #JID_ead674af: 1 posts
     5. #JID_fb739488: 1 posts
[2026-01-21T20:36:32.277Z] [BOT] [STATS] Channel stats saved
[2026-01-21T20:36:34.295Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3113) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*