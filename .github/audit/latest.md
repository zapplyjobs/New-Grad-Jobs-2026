# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T19:33:19.767Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T19:32:41.428Z] ========================================
[2026-01-21T19:32:41.430Z] Discord Bot Execution Log
[2026-01-21T19:32:41.430Z] Environment: GitHub Actions
[2026-01-21T19:32:41.430Z] Node Version: v20.19.6
[2026-01-21T19:32:41.430Z] ========================================
[2026-01-21T19:32:41.430Z] Environment Variables Check:
[2026-01-21T19:32:41.430Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T19:32:41.430Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T19:32:41.430Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T19:32:41.430Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T19:32:41.430Z] 
Multi-Channel Configuration:
[2026-01-21T19:32:41.430Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T19:32:41.430Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T19:32:41.431Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T19:32:41.431Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T19:32:41.431Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T19:32:41.431Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T19:32:41.431Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T19:32:41.431Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T19:32:41.431Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T19:32:41.431Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T19:32:41.431Z] 
Data Files Check:
[2026-01-21T19:32:41.432Z] .github/data/new_jobs.json: ✅ Exists (10 items, 82854 bytes)
[2026-01-21T19:32:41.446Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2149196 bytes)
[2026-01-21T19:32:41.446Z] 
========================================
[2026-01-21T19:32:41.446Z] Starting Enhanced Discord Bot...
[2026-01-21T19:32:41.446Z] ========================================
[2026-01-21T19:32:42.002Z] [BOT] ✅ Loaded V2 database: 3736 jobs
[2026-01-21T19:32:42.624Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T19:32:42.625Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T19:32:42.625Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T19:32:42.747Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist  - Business Analytics at spotify
[2026-01-21T19:32:42.751Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T19:32:42.751Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T19:32:42.751Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T19:32:42.752Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T19:32:42.753Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T19:32:42.756Z] [BOT] 📌 Posting 3 jobs to #ai-jobs
[2026-01-21T19:32:42.756Z] [BOT] 📍 [ROUTING] "Data Scientist  - Business Analytics" @ spotify
[2026-01-21T19:32:42.757Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T19:32:42.774Z] [BOT ERROR] (node:3494) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T19:32:42.931Z] [BOT] ✅ Posted message: Data Scientist  - Business Analytics @ spotify in #ai-jobs
[2026-01-21T19:32:42.931Z] [BOT] ✅ Industry: Data Scientist  - Business Analytics @ spotify
[2026-01-21T19:32:42.932Z] [BOT] 💾 Added channel posting: Data Scientist  - Business Analytics @ spotify → category channel (1 total channels)
[2026-01-21T19:32:42.933Z] [BOT] 💾 BEFORE ARCHIVING: 3737 jobs in database
[2026-01-21T19:32:42.936Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T19:32:42.942Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
✅ Archiving complete: 9 archived, 3728 active
[2026-01-21T19:32:42.965Z] [BOT] 💾 Saved posted_jobs.json: 3728 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:32:44.680Z] [BOT] ✅ Posted message: Data Scientist  - Business Analytics @ spotify in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T19:32:44.681Z] [BOT] 💾 Added channel posting: Data Scientist  - Business Analytics @ spotify → location channel (2 total channels)
[2026-01-21T19:32:44.681Z] [BOT] 💾 BEFORE ARCHIVING: 3728 jobs in database
[2026-01-21T19:32:44.683Z] [BOT] ✅ No jobs to archive (all 3728 jobs within 7-day window)
[2026-01-21T19:32:44.708Z] [BOT] 💾 Saved posted_jobs.json: 3728 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:32:46.209Z] [BOT] 💾 Marked as posted: Data Scientist  - Business Analytics @ spotify (instance #1)
[2026-01-21T19:32:46.209Z] [BOT] 💾 BEFORE ARCHIVING: 3729 jobs in database
[2026-01-21T19:32:46.212Z] [BOT] ✅ No jobs to archive (all 3729 jobs within 7-day window)
[2026-01-21T19:32:46.237Z] [BOT] 💾 Saved posted_jobs.json: 3729 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:32:46.237Z] [BOT] 📍 [ROUTING] "Mission Integration Engineer - Applied Computing - Starshield" @ ORG_afd623b1
[2026-01-21T19:32:46.237Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T19:32:46.536Z] [BOT] ✅ Posted message: Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1 in #ai-jobs
  ✅ Industry: Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1
[2026-01-21T19:32:46.537Z] [BOT] 💾 Added channel posting: Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1 → category channel (1 total channels)
[2026-01-21T19:32:46.537Z] [BOT] 💾 BEFORE ARCHIVING: 3730 jobs in database
[2026-01-21T19:32:46.540Z] [BOT] ✅ No jobs to archive (all 3730 jobs within 7-day window)
[2026-01-21T19:32:46.566Z] [BOT] 💾 Saved posted_jobs.json: 3730 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:32:48.068Z] [BOT] 💾 Marked as posted: Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1 (instance #1)
[2026-01-21T19:32:48.068Z] [BOT] 💾 BEFORE ARCHIVING: 3731 jobs in database
[2026-01-21T19:32:48.070Z] [BOT] ✅ No jobs to archive (all 3731 jobs within 7-day window)
[2026-01-21T19:32:48.092Z] [BOT] 💾 Saved posted_jobs.json: 3731 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:32:48.093Z] [BOT] 📍 [ROUTING] "Developer Relations, MCP" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-21T19:32:48.093Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T19:32:48.224Z] [BOT] ✅ Posted message: Developer Relations, MCP @ anthropic in #ai-jobs
  ✅ Industry: Developer Relations, MCP @ anthropic
[2026-01-21T19:32:48.225Z] [BOT] 💾 Added channel posting: Developer Relations, MCP @ anthropic → category channel (1 total channels)
[2026-01-21T19:32:48.225Z] [BOT] 💾 BEFORE ARCHIVING: 3732 jobs in database
[2026-01-21T19:32:48.227Z] [BOT] ✅ No jobs to archive (all 3732 jobs within 7-day window)
[2026-01-21T19:32:48.251Z] [BOT] 💾 Saved posted_jobs.json: 3732 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:32:49.753Z] [BOT] 💾 Marked as posted: Developer Relations, MCP @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 3733 jobs in database
[2026-01-21T19:32:49.755Z] [BOT] ✅ No jobs to archive (all 3733 jobs within 7-day window)
[2026-01-21T19:32:49.778Z] [BOT] 💾 Saved posted_jobs.json: 3733 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:32:52.779Z] [BOT] 📌 Posting 3 jobs to #JID_fb739488
[2026-01-21T19:32:52.779Z] [BOT] 📍 [ROUTING] "Linux System Administrator" @ ORG_b344d80e Boeing Company
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-21T19:32:53.154Z] [BOT] ✅ Posted message: Linux System Administrator @ ORG_b344d80e Boeing Company in #JID_fb739488
[2026-01-21T19:32:53.154Z] [BOT] ✅ Industry: Linux System Administrator @ ORG_b344d80e Boeing Company
[2026-01-21T19:32:53.155Z] [BOT] 💾 Added channel posting: Linux System Administrator @ ORG_b344d80e Boeing Company → category channel (1 total channels)
[2026-01-21T19:32:53.155Z] [BOT] 💾 BEFORE ARCHIVING: 3734 jobs in database
[2026-01-21T19:32:53.158Z] [BOT] ✅ No jobs to archive (all 3734 jobs within 7-day window)
[2026-01-21T19:32:53.182Z] [BOT] 💾 Saved posted_jobs.json: 3734 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:32:54.684Z] [BOT] 💾 Marked as posted: Linux System Administrator @ ORG_b344d80e Boeing Company (instance #1)
[2026-01-21T19:32:54.684Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T19:32:54.687Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T19:32:54.709Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:32:54.709Z] [BOT] 📍 [ROUTING] "Business Intelligence & Analytics Senior Analyst" @ ORG_9d38443e of Chicago
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-21T19:32:54.709Z] [BOT] Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T19:32:54.864Z] [BOT] ✅ Posted message: Business Intelligence & Analytics Senior Analyst @ ORG_9d38443e of Chicago in #JID_fb739488
  ✅ Industry: Business Intelligence & Analytics Senior Analyst @ ORG_9d38443e of Chicago
[2026-01-21T19:32:54.865Z] [BOT] 💾 Added channel posting: Business Intelligence & Analytics Senior Analyst @ ORG_9d38443e of Chicago → category channel (1 total channels)
[2026-01-21T19:32:54.865Z] [BOT] 💾 BEFORE ARCHIVING: 3736 jobs in database
[2026-01-21T19:32:54.868Z] [BOT] ✅ No jobs to archive (all 3736 jobs within 7-day window)
[2026-01-21T19:32:54.891Z] [BOT] 💾 Saved posted_jobs.json: 3736 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:32:56.392Z] [BOT] 💾 Marked as posted: Business Intelligence & Analytics Senior Analyst @ ORG_9d38443e of Chicago (instance #1)
[2026-01-21T19:32:56.392Z] [BOT] 💾 BEFORE ARCHIVING: 3737 jobs in database
[2026-01-21T19:32:56.395Z] [BOT] ✅ No jobs to archive (all 3737 jobs within 7-day window)
[2026-01-21T19:32:56.418Z] [BOT] 💾 Saved posted_jobs.json: 3737 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:32:56.418Z] [BOT] 📍 [ROUTING] "Analytics/Dashboarding Analyst - Ada" @ ORG_434be781
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-21T19:32:56.418Z] [BOT] Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T19:32:56.591Z] [BOT] ✅ Posted message: Analytics/Dashboarding Analyst - Ada @ ORG_434be781 in #JID_fb739488
[2026-01-21T19:32:56.591Z] [BOT] ✅ Industry: Analytics/Dashboarding Analyst - Ada @ ORG_434be781
[2026-01-21T19:32:56.592Z] [BOT] 💾 Added channel posting: Analytics/Dashboarding Analyst - Ada @ ORG_434be781 → category channel (1 total channels)
[2026-01-21T19:32:56.592Z] [BOT] 💾 BEFORE ARCHIVING: 3738 jobs in database
[2026-01-21T19:32:56.595Z] [BOT] ✅ No jobs to archive (all 3738 jobs within 7-day window)
[2026-01-21T19:32:56.618Z] [BOT] 💾 Saved posted_jobs.json: 3738 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:32:58.241Z] [BOT] ✅ Posted message: Analytics/Dashboarding Analyst - Ada @ ORG_434be781 in #JID_ead674af
[2026-01-21T19:32:58.242Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T19:32:58.242Z] [BOT] 💾 Added channel posting: Analytics/Dashboarding Analyst - Ada @ ORG_434be781 → location channel (2 total channels)
[2026-01-21T19:32:58.242Z] [BOT] 💾 BEFORE ARCHIVING: 3738 jobs in database
[2026-01-21T19:32:58.245Z] [BOT] ✅ No jobs to archive (all 3738 jobs within 7-day window)
[2026-01-21T19:32:58.267Z] [BOT] 💾 Saved posted_jobs.json: 3738 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:32:59.768Z] [BOT] 💾 Marked as posted: Analytics/Dashboarding Analyst - Ada @ ORG_434be781 (instance #1)
[2026-01-21T19:32:59.768Z] [BOT] 💾 BEFORE ARCHIVING: 3739 jobs in database
[2026-01-21T19:32:59.770Z] [BOT] ✅ No jobs to archive (all 3739 jobs within 7-day window)
[2026-01-21T19:32:59.793Z] [BOT] 💾 Saved posted_jobs.json: 3739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:33:02.794Z] [BOT] 📌 Posting 4 jobs to #tech-jobs
[2026-01-21T19:33:02.795Z] [BOT] 📍 [ROUTING] "Technical Recruiter" @ figma
[2026-01-21T19:33:02.795Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T19:33:03.035Z] [BOT] ✅ Posted message: Technical Recruiter @ figma in #tech-jobs
[2026-01-21T19:33:03.035Z] [BOT] ✅ Industry: Technical Recruiter @ figma
[2026-01-21T19:33:03.036Z] [BOT] 💾 Added channel posting: Technical Recruiter @ figma → category channel (1 total channels)
[2026-01-21T19:33:03.036Z] [BOT] 💾 BEFORE ARCHIVING: 3740 jobs in database
[2026-01-21T19:33:03.038Z] [BOT] ✅ No jobs to archive (all 3740 jobs within 7-day window)
[2026-01-21T19:33:03.065Z] [BOT] 💾 Saved posted_jobs.json: 3740 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:33:04.566Z] [BOT] 💾 Marked as posted: Technical Recruiter @ figma (instance #1)
[2026-01-21T19:33:04.567Z] [BOT] 💾 BEFORE ARCHIVING: 3741 jobs in database
[2026-01-21T19:33:04.569Z] [BOT] ✅ No jobs to archive (all 3741 jobs within 7-day window)
[2026-01-21T19:33:04.597Z] [BOT] 💾 Saved posted_jobs.json: 3741 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:33:04.598Z] [BOT] 📍 [ROUTING] "Research Technician" @ ORG_540647baing
   Category: TECH (default)
[2026-01-21T19:33:04.598Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T19:33:04.778Z] [BOT] ✅ Posted message: Research Technician @ ORG_540647baing in #tech-jobs
  ✅ Industry: Research Technician @ ORG_540647baing
[2026-01-21T19:33:04.780Z] [BOT] 💾 Added channel posting: Research Technician @ ORG_540647baing → category channel (1 total channels)
[2026-01-21T19:33:04.780Z] [BOT] 💾 BEFORE ARCHIVING: 3742 jobs in database
[2026-01-21T19:33:04.783Z] [BOT] ✅ No jobs to archive (all 3742 jobs within 7-day window)
[2026-01-21T19:33:04.807Z] [BOT] 💾 Saved posted_jobs.json: 3742 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:33:06.695Z] [BOT] ✅ Posted message: Research Technician @ ORG_540647baing in #JID_98d4f0de
[2026-01-21T19:33:06.695Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T19:33:06.696Z] [BOT] 💾 Added channel posting: Research Technician @ ORG_540647baing → location channel (2 total channels)
[2026-01-21T19:33:06.696Z] [BOT] 💾 BEFORE ARCHIVING: 3742 jobs in database
[2026-01-21T19:33:06.698Z] [BOT] ✅ No jobs to archive (all 3742 jobs within 7-day window)
[2026-01-21T19:33:06.726Z] [BOT] 💾 Saved posted_jobs.json: 3742 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:33:08.227Z] [BOT] 💾 Marked as posted: Research Technician @ ORG_540647baing (instance #1)
[2026-01-21T19:33:08.227Z] [BOT] 💾 BEFORE ARCHIVING: 3743 jobs in database
[2026-01-21T19:33:08.230Z] [BOT] ✅ No jobs to archive (all 3743 jobs within 7-day window)
[2026-01-21T19:33:08.253Z] [BOT] 💾 Saved posted_jobs.json: 3743 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:33:08.254Z] [BOT] 📍 [ROUTING] "Condition Monitoring Engineer" @ ORG_1640be31 Insight
[2026-01-21T19:33:08.254Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T19:33:08.421Z] [BOT] ✅ Posted message: Condition Monitoring Engineer @ ORG_1640be31 Insight in #tech-jobs
[2026-01-21T19:33:08.421Z] [BOT] ✅ Industry: Condition Monitoring Engineer @ ORG_1640be31 Insight
[2026-01-21T19:33:08.422Z] [BOT] 💾 Added channel posting: Condition Monitoring Engineer @ ORG_1640be31 Insight → category channel (1 total channels)
[2026-01-21T19:33:08.422Z] [BOT] 💾 BEFORE ARCHIVING: 3744 jobs in database
[2026-01-21T19:33:08.425Z] [BOT] ✅ No jobs to archive (all 3744 jobs within 7-day window)
[2026-01-21T19:33:08.451Z] [BOT] 💾 Saved posted_jobs.json: 3744 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:33:10.164Z] [BOT] ✅ Posted message: Condition Monitoring Engineer @ ORG_1640be31 Insight in #JID_ead674af
[2026-01-21T19:33:10.165Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T19:33:10.165Z] [BOT] 💾 Added channel posting: Condition Monitoring Engineer @ ORG_1640be31 Insight → location channel (2 total channels)
[2026-01-21T19:33:10.165Z] [BOT] 💾 BEFORE ARCHIVING: 3744 jobs in database
[2026-01-21T19:33:10.168Z] [BOT] ✅ No jobs to archive (all 3744 jobs within 7-day window)
[2026-01-21T19:33:10.191Z] [BOT] 💾 Saved posted_jobs.json: 3744 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:33:11.692Z] [BOT] 💾 Marked as posted: Condition Monitoring Engineer @ ORG_1640be31 Insight (instance #1)
💾 BEFORE ARCHIVING: 3745 jobs in database
[2026-01-21T19:33:11.695Z] [BOT] ✅ No jobs to archive (all 3745 jobs within 7-day window)
[2026-01-21T19:33:11.722Z] [BOT] 💾 Saved posted_jobs.json: 3745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:33:11.722Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_afd623b1
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T19:33:12.051Z] [BOT] ✅ Posted message: Software Engineer @ ORG_afd623b1 in #tech-jobs
  ✅ Industry: Software Engineer @ ORG_afd623b1
[2026-01-21T19:33:12.052Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_afd623b1 → category channel (1 total channels)
[2026-01-21T19:33:12.052Z] [BOT] 💾 BEFORE ARCHIVING: 3746 jobs in database
[2026-01-21T19:33:12.055Z] [BOT] ✅ No jobs to archive (all 3746 jobs within 7-day window)
[2026-01-21T19:33:12.078Z] [BOT] 💾 Saved posted_jobs.json: 3746 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:33:13.581Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_afd623b1 (instance #1)
[2026-01-21T19:33:13.581Z] [BOT] 💾 BEFORE ARCHIVING: 3747 jobs in database
[2026-01-21T19:33:13.583Z] [BOT] ✅ No jobs to archive (all 3747 jobs within 7-day window)
[2026-01-21T19:33:13.606Z] [BOT] 💾 Saved posted_jobs.json: 3747 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:33:16.607Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T19:33:16.608Z] [BOT] ⏭️  Skipping duplicate: JID_48163599 (posted within 7 days)
[2026-01-21T19:33:16.608Z] [BOT] ⏭️  Skipping duplicate: JID_1c54387c (posted within 7 days)
[2026-01-21T19:33:16.608Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_3e21d42d-administrator_jr2025487641 (posted within 7 days)
[2026-01-21T19:33:16.609Z] [BOT] ⏭️  Skipping duplicate: JID_d7a00349-analyst_jr32249 (posted within 7 days)
[2026-01-21T19:33:16.609Z] [BOT] ⏭️  Skipping duplicate: JID_c4b3a057 (posted within 7 days)
[2026-01-21T19:33:16.609Z] [BOT] ⏭️  Skipping duplicate: JID_5a465ac4 (posted within 7 days)
[2026-01-21T19:33:16.609Z] [BOT] ⏭️  Skipping duplicate: JID_bd0a79e9 (posted within 7 days)
[2026-01-21T19:33:16.609Z] [BOT] ⏭️  Skipping duplicate: JID_e9d8a165 (posted within 7 days)
[2026-01-21T19:33:16.609Z] [BOT] ⏭️  Skipping duplicate: JID_ee1ee315 (posted within 7 days)
[2026-01-21T19:33:16.609Z] [BOT] ⏭️  Skipping duplicate: JID_a87be6c2-_r175222-1 (posted within 7 days)
[2026-01-21T19:33:16.721Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[2026-01-21T19:33:16.912Z] [BOT] ✅ Saved pending queue: 2768 total (2748 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-21T19:33:16.913Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T19:33:16.980Z] [BOT] 📂 Loaded 6041 existing routing entries
[2026-01-21T19:33:17.061Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6051
   Timestamp: 2026-01-21T19:33:17.035Z
[2026-01-21T19:33:17.063Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 5
   Top channels:
     1. #tech-jobs: 4 posts
     2. #ai-jobs: 3 posts
     3. #JID_fb739488: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #JID_ead674af: 2 posts
[STATS] Channel stats saved
[2026-01-21T19:33:19.088Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3494) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*