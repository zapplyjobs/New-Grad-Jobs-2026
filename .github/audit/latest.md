# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T20:03:15.126Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T20:02:38.089Z] ========================================
[2026-01-21T20:02:38.091Z] Discord Bot Execution Log
[2026-01-21T20:02:38.091Z] Environment: GitHub Actions
[2026-01-21T20:02:38.091Z] Node Version: v20.19.6
[2026-01-21T20:02:38.091Z] ========================================
[2026-01-21T20:02:38.091Z] Environment Variables Check:
[2026-01-21T20:02:38.091Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T20:02:38.091Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T20:02:38.091Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T20:02:38.092Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T20:02:38.092Z] 
Multi-Channel Configuration:
[2026-01-21T20:02:38.092Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T20:02:38.092Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T20:02:38.092Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T20:02:38.092Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T20:02:38.092Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T20:02:38.092Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T20:02:38.092Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T20:02:38.092Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T20:02:38.092Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T20:02:38.092Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T20:02:38.092Z] 
Data Files Check:
[2026-01-21T20:02:38.094Z] .github/data/new_jobs.json: ✅ Exists (10 items, 87487 bytes)
[2026-01-21T20:02:38.108Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2162893 bytes)
[2026-01-21T20:02:38.108Z] 
========================================
[2026-01-21T20:02:38.108Z] Starting Enhanced Discord Bot...
[2026-01-21T20:02:38.108Z] ========================================
[2026-01-21T20:02:38.651Z] [BOT] ✅ Loaded V2 database: 3757 jobs
[2026-01-21T20:02:39.094Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T20:02:39.095Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T20:02:39.095Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T20:02:39.213Z] [BOT] ✅ Loaded pending queue: 2765 total (2745 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at GumGum
[2026-01-21T20:02:39.217Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T20:02:39.218Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T20:02:39.218Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T20:02:39.219Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T20:02:39.219Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T20:02:39.223Z] [BOT] 📌 Posting 3 jobs to #ai-jobs
[2026-01-21T20:02:39.223Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_655fad25
[2026-01-21T20:02:39.224Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T20:02:39.240Z] [BOT ERROR] (node:3150) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T20:02:39.633Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_655fad25 in #ai-jobs
[2026-01-21T20:02:39.633Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_655fad25
[2026-01-21T20:02:39.634Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_655fad25 → category channel (1 total channels)
[2026-01-21T20:02:39.634Z] [BOT] 💾 BEFORE ARCHIVING: 3758 jobs in database
[2026-01-21T20:02:39.638Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T20:02:39.643Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T20:02:39.643Z] [BOT] ✅ Archiving complete: 10 archived, 3748 active
[2026-01-21T20:02:39.671Z] [BOT] 💾 Saved posted_jobs.json: 3748 active jobs
[2026-01-21T20:02:39.671Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:41.174Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_655fad25 (instance #1)
[2026-01-21T20:02:41.174Z] [BOT] 💾 BEFORE ARCHIVING: 3749 jobs in database
[2026-01-21T20:02:41.177Z] [BOT] ✅ No jobs to archive (all 3749 jobs within 7-day window)
[2026-01-21T20:02:41.201Z] [BOT] 💾 Saved posted_jobs.json: 3749 active jobs
[2026-01-21T20:02:41.201Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:41.202Z] [BOT] 📍 [ROUTING] "Research Scientist" @ ORG_72fd3ae0
   Category: AI (matched: "machine learning")
[2026-01-21T20:02:41.202Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T20:02:41.373Z] [BOT] ✅ Posted message: Research Scientist @ ORG_72fd3ae0 in #ai-jobs
[2026-01-21T20:02:41.373Z] [BOT] ✅ Industry: Research Scientist @ ORG_72fd3ae0
[2026-01-21T20:02:41.374Z] [BOT] 💾 Added channel posting: Research Scientist @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-01-21T20:02:41.374Z] [BOT] 💾 BEFORE ARCHIVING: 3750 jobs in database
[2026-01-21T20:02:41.377Z] [BOT] ✅ No jobs to archive (all 3750 jobs within 7-day window)
[2026-01-21T20:02:41.402Z] [BOT] 💾 Saved posted_jobs.json: 3750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:42.904Z] [BOT] 💾 Marked as posted: Research Scientist @ ORG_72fd3ae0 (instance #1)
[2026-01-21T20:02:42.904Z] [BOT] 💾 BEFORE ARCHIVING: 3751 jobs in database
[2026-01-21T20:02:42.907Z] [BOT] ✅ No jobs to archive (all 3751 jobs within 7-day window)
[2026-01-21T20:02:42.932Z] [BOT] 💾 Saved posted_jobs.json: 3751 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:42.932Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Spanish Speaking" @ figma
[2026-01-21T20:02:42.933Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T20:02:43.136Z] [BOT] ✅ Posted message: Enterprise Support Specialist, Spanish Speaking @ figma in #ai-jobs
[2026-01-21T20:02:43.136Z] [BOT] ✅ Industry: Enterprise Support Specialist, Spanish Speaking @ figma
[2026-01-21T20:02:43.137Z] [BOT] 💾 Added channel posting: Enterprise Support Specialist, Spanish Speaking @ figma → category channel (1 total channels)
[2026-01-21T20:02:43.137Z] [BOT] 💾 BEFORE ARCHIVING: 3752 jobs in database
[2026-01-21T20:02:43.139Z] [BOT] ✅ No jobs to archive (all 3752 jobs within 7-day window)
[2026-01-21T20:02:43.161Z] [BOT] 💾 Saved posted_jobs.json: 3752 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:44.663Z] [BOT] 💾 Marked as posted: Enterprise Support Specialist, Spanish Speaking @ figma (instance #1)
[2026-01-21T20:02:44.663Z] [BOT] 💾 BEFORE ARCHIVING: 3753 jobs in database
[2026-01-21T20:02:44.665Z] [BOT] ✅ No jobs to archive (all 3753 jobs within 7-day window)
[2026-01-21T20:02:44.688Z] [BOT] 💾 Saved posted_jobs.json: 3753 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:47.689Z] [BOT] 📌 Posting 6 jobs to #tech-jobs
[2026-01-21T20:02:47.690Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher" @ ORG_865b30e2 Renewable Energy Laboratory
[2026-01-21T20:02:47.690Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T20:02:48.071Z] [BOT] ✅ Posted message: Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #tech-jobs
[2026-01-21T20:02:48.072Z] [BOT] ✅ Industry: Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory
[2026-01-21T20:02:48.073Z] [BOT] 💾 Added channel posting: Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory → category channel (1 total channels)
[2026-01-21T20:02:48.073Z] [BOT] 💾 BEFORE ARCHIVING: 3754 jobs in database
[2026-01-21T20:02:48.076Z] [BOT] ✅ No jobs to archive (all 3754 jobs within 7-day window)
[2026-01-21T20:02:48.102Z] [BOT] 💾 Saved posted_jobs.json: 3754 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:49.796Z] [BOT] ✅ Posted message: Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #JID_ead674af
[2026-01-21T20:02:49.797Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T20:02:49.797Z] [BOT] 💾 Added channel posting: Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory → location channel (2 total channels)
[2026-01-21T20:02:49.797Z] [BOT] 💾 BEFORE ARCHIVING: 3754 jobs in database
[2026-01-21T20:02:49.800Z] [BOT] ✅ No jobs to archive (all 3754 jobs within 7-day window)
[2026-01-21T20:02:49.831Z] [BOT] 💾 Saved posted_jobs.json: 3754 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:51.333Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory (instance #1)
[2026-01-21T20:02:51.333Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T20:02:51.336Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T20:02:51.359Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:51.359Z] [BOT] 📍 [ROUTING] "Software Engineer - Backend - Platform" @ ORG_9ee5b96f
[2026-01-21T20:02:51.359Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T20:02:51.666Z] [BOT] ✅ Posted message: Software Engineer - Backend - Platform @ ORG_9ee5b96f in #tech-jobs
  ✅ Industry: Software Engineer - Backend - Platform @ ORG_9ee5b96f
[2026-01-21T20:02:51.667Z] [BOT] 💾 Added channel posting: Software Engineer - Backend - Platform @ ORG_9ee5b96f → category channel (1 total channels)
[2026-01-21T20:02:51.667Z] [BOT] 💾 BEFORE ARCHIVING: 3756 jobs in database
[2026-01-21T20:02:51.669Z] [BOT] ✅ No jobs to archive (all 3756 jobs within 7-day window)
[2026-01-21T20:02:51.696Z] [BOT] 💾 Saved posted_jobs.json: 3756 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:53.198Z] [BOT] 💾 Marked as posted: Software Engineer - Backend - Platform @ ORG_9ee5b96f (instance #1)
[2026-01-21T20:02:53.198Z] [BOT] 💾 BEFORE ARCHIVING: 3757 jobs in database
[2026-01-21T20:02:53.201Z] [BOT] ✅ No jobs to archive (all 3757 jobs within 7-day window)
[2026-01-21T20:02:53.222Z] [BOT] 💾 Saved posted_jobs.json: 3757 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:53.223Z] [BOT] 📍 [ROUTING] "ATC Salesforce Analyst - Nashville" @ ORG_6cd9e83c
[2026-01-21T20:02:53.223Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T20:02:53.476Z] [BOT] ✅ Posted message: ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c in #tech-jobs
  ✅ Industry: ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c
[2026-01-21T20:02:53.477Z] [BOT] 💾 Added channel posting: ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c → category channel (1 total channels)
[2026-01-21T20:02:53.477Z] [BOT] 💾 BEFORE ARCHIVING: 3758 jobs in database
[2026-01-21T20:02:53.479Z] [BOT] ✅ No jobs to archive (all 3758 jobs within 7-day window)
[2026-01-21T20:02:53.504Z] [BOT] 💾 Saved posted_jobs.json: 3758 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:55.278Z] [BOT] ✅ Posted message: ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T20:02:55.279Z] [BOT] 💾 Added channel posting: ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c → location channel (2 total channels)
[2026-01-21T20:02:55.279Z] [BOT] 💾 BEFORE ARCHIVING: 3758 jobs in database
[2026-01-21T20:02:55.282Z] [BOT] ✅ No jobs to archive (all 3758 jobs within 7-day window)
[2026-01-21T20:02:55.305Z] [BOT] 💾 Saved posted_jobs.json: 3758 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:56.806Z] [BOT] 💾 Marked as posted: ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c (instance #1)
[2026-01-21T20:02:56.806Z] [BOT] 💾 BEFORE ARCHIVING: 3759 jobs in database
[2026-01-21T20:02:56.809Z] [BOT] ✅ No jobs to archive (all 3759 jobs within 7-day window)
[2026-01-21T20:02:56.834Z] [BOT] 💾 Saved posted_jobs.json: 3759 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:56.834Z] [BOT] 📍 [ROUTING] "Software Engineer - Perception Infrastructure" @ pony.ai
[2026-01-21T20:02:56.835Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T20:02:57.110Z] [BOT] ✅ Posted message: Software Engineer - Perception Infrastructure @ pony.ai in #tech-jobs
[2026-01-21T20:02:57.110Z] [BOT] ✅ Industry: Software Engineer - Perception Infrastructure @ pony.ai
[2026-01-21T20:02:57.111Z] [BOT] 💾 Added channel posting: Software Engineer - Perception Infrastructure @ pony.ai → category channel (1 total channels)
[2026-01-21T20:02:57.111Z] [BOT] 💾 BEFORE ARCHIVING: 3760 jobs in database
[2026-01-21T20:02:57.113Z] [BOT] ✅ No jobs to archive (all 3760 jobs within 7-day window)
[2026-01-21T20:02:57.136Z] [BOT] 💾 Saved posted_jobs.json: 3760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:58.637Z] [BOT] 💾 Marked as posted: Software Engineer - Perception Infrastructure @ pony.ai (instance #1)
[2026-01-21T20:02:58.638Z] [BOT] 💾 BEFORE ARCHIVING: 3761 jobs in database
[2026-01-21T20:02:58.640Z] [BOT] ✅ No jobs to archive (all 3761 jobs within 7-day window)
[2026-01-21T20:02:58.662Z] [BOT] 💾 Saved posted_jobs.json: 3761 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:02:58.663Z] [BOT] 📍 [ROUTING] "Software Engineer / Principal Software Engineer - Aht" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-21T20:02:58.663Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T20:02:58.944Z] [BOT] ✅ Posted message: Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman
[2026-01-21T20:02:58.946Z] [BOT] 💾 Added channel posting: Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman → category channel (1 total channels)
[2026-01-21T20:02:58.946Z] [BOT] 💾 BEFORE ARCHIVING: 3762 jobs in database
[2026-01-21T20:02:58.948Z] [BOT] ✅ No jobs to archive (all 3762 jobs within 7-day window)
[2026-01-21T20:02:58.971Z] [BOT] 💾 Saved posted_jobs.json: 3762 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:03:00.472Z] [BOT] 💾 Marked as posted: Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman (instance #1)
[2026-01-21T20:03:00.473Z] [BOT] 💾 BEFORE ARCHIVING: 3763 jobs in database
[2026-01-21T20:03:00.475Z] [BOT] ✅ No jobs to archive (all 3763 jobs within 7-day window)
[2026-01-21T20:03:00.498Z] [BOT] 💾 Saved posted_jobs.json: 3763 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:03:00.498Z] [BOT] 📍 [ROUTING] "Appian Application Developer" @ ORG_36b7cbc3
[2026-01-21T20:03:00.498Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T20:03:00.837Z] [BOT] ✅ Posted message: Appian Application Developer @ ORG_36b7cbc3 in #tech-jobs
  ✅ Industry: Appian Application Developer @ ORG_36b7cbc3
[2026-01-21T20:03:00.839Z] [BOT] 💾 Added channel posting: Appian Application Developer @ ORG_36b7cbc3 → category channel (1 total channels)
[2026-01-21T20:03:00.839Z] [BOT] 💾 BEFORE ARCHIVING: 3764 jobs in database
[2026-01-21T20:03:00.841Z] [BOT] ✅ No jobs to archive (all 3764 jobs within 7-day window)
[2026-01-21T20:03:00.864Z] [BOT] 💾 Saved posted_jobs.json: 3764 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:03:02.569Z] [BOT] ✅ Posted message: Appian Application Developer @ ORG_36b7cbc3 in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T20:03:02.570Z] [BOT] 💾 Added channel posting: Appian Application Developer @ ORG_36b7cbc3 → location channel (2 total channels)
[2026-01-21T20:03:02.570Z] [BOT] 💾 BEFORE ARCHIVING: 3764 jobs in database
[2026-01-21T20:03:02.573Z] [BOT] ✅ No jobs to archive (all 3764 jobs within 7-day window)
[2026-01-21T20:03:02.596Z] [BOT] 💾 Saved posted_jobs.json: 3764 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:03:04.097Z] [BOT] 💾 Marked as posted: Appian Application Developer @ ORG_36b7cbc3 (instance #1)
[2026-01-21T20:03:04.097Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T20:03:04.100Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T20:03:04.123Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:03:07.124Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T20:03:07.124Z] [BOT] 📍 [ROUTING] "Marketing Strategy Manager" @ figma
   Category: DATA-SCIENCE (matched: "analytics")
[2026-01-21T20:03:07.125Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-21T20:03:07.395Z] [BOT] ✅ Posted message: Marketing Strategy Manager @ figma in #JID_fb739488
[2026-01-21T20:03:07.396Z] [BOT] ✅ Industry: Marketing Strategy Manager @ figma
[2026-01-21T20:03:07.396Z] [BOT] 💾 Added channel posting: Marketing Strategy Manager @ figma → category channel (1 total channels)
[2026-01-21T20:03:07.397Z] [BOT] 💾 BEFORE ARCHIVING: 3766 jobs in database
[2026-01-21T20:03:07.399Z] [BOT] ✅ No jobs to archive (all 3766 jobs within 7-day window)
[2026-01-21T20:03:07.423Z] [BOT] 💾 Saved posted_jobs.json: 3766 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:03:08.924Z] [BOT] 💾 Marked as posted: Marketing Strategy Manager @ figma (instance #1)
[2026-01-21T20:03:08.924Z] [BOT] 💾 BEFORE ARCHIVING: 3767 jobs in database
[2026-01-21T20:03:08.926Z] [BOT] ✅ No jobs to archive (all 3767 jobs within 7-day window)
[2026-01-21T20:03:08.949Z] [BOT] 💾 Saved posted_jobs.json: 3767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:03:11.950Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T20:03:11.951Z] [BOT] ⏭️  Skipping duplicate: JID_e9645df1 (posted within 7 days)
[2026-01-21T20:03:11.951Z] [BOT] ⏭️  Skipping duplicate: JID_567ab9c9-biorefining_r14058 (posted within 7 days)
[2026-01-21T20:03:11.951Z] [BOT] ⏭️  Skipping duplicate: JID_57002500 (posted within 7 days)
[2026-01-21T20:03:11.952Z] [BOT] ⏭️  Skipping duplicate: JID_fa487e74-naelfy26_r00300075 (posted within 7 days)
[2026-01-21T20:03:11.952Z] [BOT] ⏭️  Skipping duplicate: JID_53e0b423 (posted within 7 days)
[2026-01-21T20:03:11.952Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_ca9e8846-scientist_r163076 (posted within 7 days)
[2026-01-21T20:03:11.952Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_c4eaea7c-_r10216147 (posted within 7 days)
[2026-01-21T20:03:11.953Z] [BOT] ⏭️  Skipping duplicate: JID_5686fd03 (posted within 7 days)
[2026-01-21T20:03:11.953Z] [BOT] ⏭️  Skipping duplicate: JID_8f92590b-developer_r20060158 (posted within 7 days)
[2026-01-21T20:03:11.953Z] [BOT] ⏭️  Skipping duplicate: JID_e6ef062c (posted within 7 days)
[2026-01-21T20:03:12.082Z] [BOT] ✅ Loaded pending queue: 2765 total (2745 pending, 20 enriched, 0 posted)
[2026-01-21T20:03:12.265Z] [BOT] ✅ Saved pending queue: 2765 total (2745 pending, 10 enriched, 10 posted)
[2026-01-21T20:03:12.265Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T20:03:12.330Z] [BOT] 📂 Loaded 6061 existing routing entries
[2026-01-21T20:03:12.410Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T20:03:12.410Z] [BOT] Total entries: 6071
   Timestamp: 2026-01-21T20:03:12.383Z
[2026-01-21T20:03:12.410Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T20:03:12.411Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-21T20:03:12.411Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #tech-jobs: 6 posts
     2. #ai-jobs: 3 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_ead674af: 1 posts
[2026-01-21T20:03:12.411Z] [BOT] 5. #JID_fb739488: 1 posts
[2026-01-21T20:03:12.411Z] [BOT] [STATS] Channel stats saved
[2026-01-21T20:03:14.438Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3150) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*