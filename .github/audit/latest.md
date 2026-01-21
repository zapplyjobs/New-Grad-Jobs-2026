# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T20:54:00.036Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T20:53:22.699Z] ========================================
[2026-01-21T20:53:22.701Z] Discord Bot Execution Log
[2026-01-21T20:53:22.701Z] Environment: GitHub Actions
[2026-01-21T20:53:22.701Z] Node Version: v20.19.6
[2026-01-21T20:53:22.702Z] ========================================
[2026-01-21T20:53:22.702Z] Environment Variables Check:
[2026-01-21T20:53:22.702Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T20:53:22.702Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T20:53:22.702Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T20:53:22.702Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T20:53:22.702Z] 
Multi-Channel Configuration:
[2026-01-21T20:53:22.702Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T20:53:22.702Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T20:53:22.702Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T20:53:22.703Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T20:53:22.703Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T20:53:22.703Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T20:53:22.703Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T20:53:22.703Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T20:53:22.703Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T20:53:22.703Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T20:53:22.703Z] 
Data Files Check:
[2026-01-21T20:53:22.704Z] .github/data/new_jobs.json: ✅ Exists (10 items, 70586 bytes)
[2026-01-21T20:53:22.718Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2187946 bytes)
[2026-01-21T20:53:22.718Z] 
========================================
[2026-01-21T20:53:22.718Z] Starting Enhanced Discord Bot...
[2026-01-21T20:53:22.718Z] ========================================
[2026-01-21T20:53:23.240Z] [BOT] ✅ Loaded V2 database: 3787 jobs
[2026-01-21T20:53:24.407Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T20:53:24.408Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T20:53:24.408Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T20:53:24.522Z] [BOT] ✅ Loaded pending queue: 2764 total (2744 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Internship Program Coordinator at gohighlevel
[2026-01-21T20:53:24.526Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T20:53:24.526Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T20:53:24.527Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T20:53:24.528Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T20:53:24.528Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T20:53:24.531Z] [BOT] 📌 Posting 3 jobs to #ai-jobs
[2026-01-21T20:53:24.532Z] [BOT] 📍 [ROUTING] "Internship Program Coordinator" @ gohighlevel
[2026-01-21T20:53:24.532Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T20:53:24.549Z] [BOT ERROR] (node:2741) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T20:53:24.790Z] [BOT] ✅ Posted message: Internship Program Coordinator @ gohighlevel in #ai-jobs
[2026-01-21T20:53:24.790Z] [BOT] ✅ Industry: Internship Program Coordinator @ gohighlevel
[2026-01-21T20:53:24.791Z] [BOT] 💾 Added channel posting: Internship Program Coordinator @ gohighlevel → category channel (1 total channels)
[2026-01-21T20:53:24.791Z] [BOT] 💾 BEFORE ARCHIVING: 3788 jobs in database
[2026-01-21T20:53:24.794Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T20:53:24.799Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-21T20:53:24.799Z] [BOT] ✅ Archiving complete: 5 archived, 3783 active
[2026-01-21T20:53:24.824Z] [BOT] 💾 Saved posted_jobs.json: 3783 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:26.325Z] [BOT] 💾 Marked as posted: Internship Program Coordinator @ gohighlevel (instance #1)
[2026-01-21T20:53:26.325Z] [BOT] 💾 BEFORE ARCHIVING: 3784 jobs in database
[2026-01-21T20:53:26.327Z] [BOT] ✅ No jobs to archive (all 3784 jobs within 7-day window)
[2026-01-21T20:53:26.348Z] [BOT] 💾 Saved posted_jobs.json: 3784 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:26.349Z] [BOT] 📍 [ROUTING] "Associate Machine Learning Engineer" @ ORG_e5ca4df3 Group
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T20:53:26.349Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T20:53:26.566Z] [BOT] ✅ Posted message: Associate Machine Learning Engineer @ ORG_e5ca4df3 Group in #ai-jobs
[2026-01-21T20:53:26.567Z] [BOT] ✅ Industry: Associate Machine Learning Engineer @ ORG_e5ca4df3 Group
[2026-01-21T20:53:26.567Z] [BOT] 💾 Added channel posting: Associate Machine Learning Engineer @ ORG_e5ca4df3 Group → category channel (1 total channels)
[2026-01-21T20:53:26.567Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T20:53:26.570Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T20:53:26.594Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:28.095Z] [BOT] 💾 Marked as posted: Associate Machine Learning Engineer @ ORG_e5ca4df3 Group (instance #1)
[2026-01-21T20:53:28.095Z] [BOT] 💾 BEFORE ARCHIVING: 3786 jobs in database
[2026-01-21T20:53:28.099Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (6 total in archive)
[2026-01-21T20:53:28.099Z] [BOT] ✅ Archiving complete: 1 archived, 3785 active
[2026-01-21T20:53:28.123Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:28.124Z] [BOT] 📍 [ROUTING] "Software Developer - Leadership Development Program - Uniondale" @ ORG_49d0893a Group
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T20:53:28.124Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T20:53:28.284Z] [BOT] ✅ Posted message: Software Developer - Leadership Development Program - Uniondale @ ORG_49d0893a Group in #ai-jobs
[2026-01-21T20:53:28.284Z] [BOT] ✅ Industry: Software Developer - Leadership Development Program - Uniondale @ ORG_49d0893a Group
[2026-01-21T20:53:28.285Z] [BOT] 💾 Added channel posting: Software Developer - Leadership Development Program - Uniondale @ ORG_49d0893a Group → category channel (1 total channels)
[2026-01-21T20:53:28.285Z] [BOT] 💾 BEFORE ARCHIVING: 3786 jobs in database
[2026-01-21T20:53:28.287Z] [BOT] ✅ No jobs to archive (all 3786 jobs within 7-day window)
[2026-01-21T20:53:28.309Z] [BOT] 💾 Saved posted_jobs.json: 3786 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:30.084Z] [BOT] ✅ Posted message: Software Developer - Leadership Development Program - Uniondale @ ORG_49d0893a Group in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T20:53:30.085Z] [BOT] 💾 Added channel posting: Software Developer - Leadership Development Program - Uniondale @ ORG_49d0893a Group → location channel (2 total channels)
[2026-01-21T20:53:30.085Z] [BOT] 💾 BEFORE ARCHIVING: 3786 jobs in database
[2026-01-21T20:53:30.087Z] [BOT] ✅ No jobs to archive (all 3786 jobs within 7-day window)
[2026-01-21T20:53:30.109Z] [BOT] 💾 Saved posted_jobs.json: 3786 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:31.608Z] [BOT] 💾 Marked as posted: Software Developer - Leadership Development Program - Uniondale @ ORG_49d0893a Group (instance #1)
[2026-01-21T20:53:31.609Z] [BOT] 💾 BEFORE ARCHIVING: 3787 jobs in database
[2026-01-21T20:53:31.613Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (7 total in archive)
✅ Archiving complete: 1 archived, 3786 active
[2026-01-21T20:53:31.635Z] [BOT] 💾 Saved posted_jobs.json: 3786 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:34.635Z] [BOT] 📌 Posting 6 jobs to #tech-jobs
[2026-01-21T20:53:34.635Z] [BOT] 📍 [ROUTING] "Associate Full Stack Engineer" @ ORG_66279f04 Investments
   Category: TECH (matched: "web engineer")
[2026-01-21T20:53:34.636Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T20:53:35.068Z] [BOT] ✅ Posted message: Associate Full Stack Engineer @ ORG_66279f04 Investments in #tech-jobs
  ✅ Industry: Associate Full Stack Engineer @ ORG_66279f04 Investments
[2026-01-21T20:53:35.069Z] [BOT] 💾 Added channel posting: Associate Full Stack Engineer @ ORG_66279f04 Investments → category channel (1 total channels)
[2026-01-21T20:53:35.069Z] [BOT] 💾 BEFORE ARCHIVING: 3787 jobs in database
[2026-01-21T20:53:35.072Z] [BOT] ✅ No jobs to archive (all 3787 jobs within 7-day window)
[2026-01-21T20:53:35.098Z] [BOT] 💾 Saved posted_jobs.json: 3787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:36.883Z] [BOT] ✅ Posted message: Associate Full Stack Engineer @ ORG_66279f04 Investments in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T20:53:36.884Z] [BOT] 💾 Added channel posting: Associate Full Stack Engineer @ ORG_66279f04 Investments → location channel (2 total channels)
[2026-01-21T20:53:36.884Z] [BOT] 💾 BEFORE ARCHIVING: 3787 jobs in database
[2026-01-21T20:53:36.886Z] [BOT] ✅ No jobs to archive (all 3787 jobs within 7-day window)
[2026-01-21T20:53:36.910Z] [BOT] 💾 Saved posted_jobs.json: 3787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:38.412Z] [BOT] 💾 Marked as posted: Associate Full Stack Engineer @ ORG_66279f04 Investments (instance #1)
[2026-01-21T20:53:38.412Z] [BOT] 💾 BEFORE ARCHIVING: 3788 jobs in database
[2026-01-21T20:53:38.416Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (8 total in archive)
[2026-01-21T20:53:38.416Z] [BOT] ✅ Archiving complete: 1 archived, 3787 active
[2026-01-21T20:53:38.442Z] [BOT] 💾 Saved posted_jobs.json: 3787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:38.443Z] [BOT] 📍 [ROUTING] "Community Experiences Manager" @ figma
   Category: TECH (matched: "product marketing")
[2026-01-21T20:53:38.443Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T20:53:38.608Z] [BOT] ✅ Posted message: Community Experiences Manager @ figma in #tech-jobs
[2026-01-21T20:53:38.608Z] [BOT] ✅ Industry: Community Experiences Manager @ figma
[2026-01-21T20:53:38.609Z] [BOT] 💾 Added channel posting: Community Experiences Manager @ figma → category channel (1 total channels)
[2026-01-21T20:53:38.609Z] [BOT] 💾 BEFORE ARCHIVING: 3788 jobs in database
[2026-01-21T20:53:38.611Z] [BOT] ✅ No jobs to archive (all 3788 jobs within 7-day window)
[2026-01-21T20:53:38.635Z] [BOT] 💾 Saved posted_jobs.json: 3788 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:40.136Z] [BOT] 💾 Marked as posted: Community Experiences Manager @ figma (instance #1)
[2026-01-21T20:53:40.136Z] [BOT] 💾 BEFORE ARCHIVING: 3789 jobs in database
[2026-01-21T20:53:40.138Z] [BOT] ✅ No jobs to archive (all 3789 jobs within 7-day window)
[2026-01-21T20:53:40.163Z] [BOT] 💾 Saved posted_jobs.json: 3789 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:40.164Z] [BOT] 📍 [ROUTING] "Lifecycle Marketing Manager" @ vercel
[2026-01-21T20:53:40.164Z] [BOT] Category: TECH (matched: "product marketing")
   Channel: tech-jobs (1462...4987)
[2026-01-21T20:53:40.409Z] [BOT] ✅ Posted message: Lifecycle Marketing Manager @ vercel in #tech-jobs
  ✅ Industry: Lifecycle Marketing Manager @ vercel
[2026-01-21T20:53:40.410Z] [BOT] 💾 Added channel posting: Lifecycle Marketing Manager @ vercel → category channel (1 total channels)
[2026-01-21T20:53:40.410Z] [BOT] 💾 BEFORE ARCHIVING: 3790 jobs in database
[2026-01-21T20:53:40.412Z] [BOT] ✅ No jobs to archive (all 3790 jobs within 7-day window)
[2026-01-21T20:53:40.435Z] [BOT] 💾 Saved posted_jobs.json: 3790 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:41.937Z] [BOT] 💾 Marked as posted: Lifecycle Marketing Manager @ vercel (instance #1)
[2026-01-21T20:53:41.937Z] [BOT] 💾 BEFORE ARCHIVING: 3791 jobs in database
[2026-01-21T20:53:41.941Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (9 total in archive)
[2026-01-21T20:53:41.941Z] [BOT] ✅ Archiving complete: 1 archived, 3790 active
[2026-01-21T20:53:41.967Z] [BOT] 💾 Saved posted_jobs.json: 3790 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:41.968Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Warehouse" @ ORG_af20d304
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T20:53:42.138Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Warehouse @ ORG_af20d304 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Data Warehouse @ ORG_af20d304
[2026-01-21T20:53:42.139Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Warehouse @ ORG_af20d304 → category channel (1 total channels)
[2026-01-21T20:53:42.139Z] [BOT] 💾 BEFORE ARCHIVING: 3791 jobs in database
[2026-01-21T20:53:42.141Z] [BOT] ✅ No jobs to archive (all 3791 jobs within 7-day window)
[2026-01-21T20:53:42.163Z] [BOT] 💾 Saved posted_jobs.json: 3791 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:43.665Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Data Warehouse @ ORG_af20d304 (instance #1)
[2026-01-21T20:53:43.665Z] [BOT] 💾 BEFORE ARCHIVING: 3792 jobs in database
[2026-01-21T20:53:43.668Z] [BOT] ✅ No jobs to archive (all 3792 jobs within 7-day window)
[2026-01-21T20:53:43.690Z] [BOT] 💾 Saved posted_jobs.json: 3792 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:43.690Z] [BOT] 📍 [ROUTING] "Associate – Data Cloud Solutions" @ ORG_f0ac255c Global
   Category: TECH (matched: "data")
[2026-01-21T20:53:43.690Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T20:53:43.953Z] [BOT] ✅ Posted message: Associate – Data Cloud Solutions @ ORG_f0ac255c Global in #tech-jobs
[2026-01-21T20:53:43.953Z] [BOT] ✅ Industry: Associate – Data Cloud Solutions @ ORG_f0ac255c Global
[2026-01-21T20:53:43.954Z] [BOT] 💾 Added channel posting: Associate – Data Cloud Solutions @ ORG_f0ac255c Global → category channel (1 total channels)
[2026-01-21T20:53:43.954Z] [BOT] 💾 BEFORE ARCHIVING: 3793 jobs in database
[2026-01-21T20:53:43.956Z] [BOT] ✅ No jobs to archive (all 3793 jobs within 7-day window)
[2026-01-21T20:53:43.979Z] [BOT] 💾 Saved posted_jobs.json: 3793 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:45.681Z] [BOT] ✅ Posted message: Associate – Data Cloud Solutions @ ORG_f0ac255c Global in #JID_ead674af
[2026-01-21T20:53:45.681Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T20:53:45.682Z] [BOT] 💾 Added channel posting: Associate – Data Cloud Solutions @ ORG_f0ac255c Global → location channel (2 total channels)
[2026-01-21T20:53:45.682Z] [BOT] 💾 BEFORE ARCHIVING: 3793 jobs in database
[2026-01-21T20:53:45.685Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (10 total in archive)
[2026-01-21T20:53:45.685Z] [BOT] ✅ Archiving complete: 1 archived, 3792 active
[2026-01-21T20:53:45.707Z] [BOT] 💾 Saved posted_jobs.json: 3792 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:47.207Z] [BOT] 💾 Marked as posted: Associate – Data Cloud Solutions @ ORG_f0ac255c Global (instance #1)
[2026-01-21T20:53:47.208Z] [BOT] 💾 BEFORE ARCHIVING: 3793 jobs in database
[2026-01-21T20:53:47.210Z] [BOT] ✅ No jobs to archive (all 3793 jobs within 7-day window)
[2026-01-21T20:53:47.233Z] [BOT] 💾 Saved posted_jobs.json: 3793 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:47.234Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_44c4dab8
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T20:53:47.409Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_44c4dab8 in #tech-jobs
[2026-01-21T20:53:47.409Z] [BOT] ✅ Industry: Software Engineer – New Grad @ ORG_44c4dab8
[2026-01-21T20:53:47.410Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_44c4dab8 → category channel (1 total channels)
[2026-01-21T20:53:47.410Z] [BOT] 💾 BEFORE ARCHIVING: 3794 jobs in database
[2026-01-21T20:53:47.412Z] [BOT] ✅ No jobs to archive (all 3794 jobs within 7-day window)
[2026-01-21T20:53:47.435Z] [BOT] 💾 Saved posted_jobs.json: 3794 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:48.937Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_44c4dab8 (instance #1)
[2026-01-21T20:53:48.937Z] [BOT] 💾 BEFORE ARCHIVING: 3795 jobs in database
[2026-01-21T20:53:48.939Z] [BOT] ✅ No jobs to archive (all 3795 jobs within 7-day window)
[2026-01-21T20:53:48.961Z] [BOT] 💾 Saved posted_jobs.json: 3795 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:51.963Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T20:53:51.963Z] [BOT] 📍 [ROUTING] "Director, Global Payments Strategy and Operations" @ discord
   Category: FINANCE (matched: "finance")
[2026-01-21T20:53:51.963Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T20:53:52.196Z] [BOT] ✅ Posted message: Director, Global Payments Strategy and Operations @ discord in #finance-jobs
[2026-01-21T20:53:52.196Z] [BOT] ✅ Industry: Director, Global Payments Strategy and Operations @ discord
[2026-01-21T20:53:52.197Z] [BOT] 💾 Added channel posting: Director, Global Payments Strategy and Operations @ discord → category channel (1 total channels)
[2026-01-21T20:53:52.197Z] [BOT] 💾 BEFORE ARCHIVING: 3796 jobs in database
[2026-01-21T20:53:52.199Z] [BOT] ✅ No jobs to archive (all 3796 jobs within 7-day window)
[2026-01-21T20:53:52.221Z] [BOT] 💾 Saved posted_jobs.json: 3796 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:53.722Z] [BOT] 💾 Marked as posted: Director, Global Payments Strategy and Operations @ discord (instance #1)
[2026-01-21T20:53:53.722Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T20:53:53.724Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T20:53:53.747Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:53:56.748Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T20:53:56.749Z] [BOT] ⏭️  Skipping duplicate: JID_766dbf9e (posted within 7 days)
[2026-01-21T20:53:56.749Z] [BOT] ⏭️  Skipping duplicate: JID_13ccb65e-engineer_2120832-1 (posted within 7 days)
[2026-01-21T20:53:56.749Z] [BOT] ⏭️  Skipping duplicate: JID_bf35e57b-costar_campus-JID_280988fc-engineer_r37862 (posted within 7 days)
[2026-01-21T20:53:56.749Z] [BOT] ⏭️  Skipping duplicate: JID_b623225e (posted within 7 days)
[2026-01-21T20:53:56.749Z] [BOT] ⏭️  Skipping duplicate: JID_c4f9a5a5 (posted within 7 days)
[2026-01-21T20:53:56.750Z] [BOT] ⏭️  Skipping duplicate: JID_9c3b8732 (posted within 7 days)
[2026-01-21T20:53:56.750Z] [BOT] ⏭️  Skipping duplicate: JID_4b752833 (posted within 7 days)
[2026-01-21T20:53:56.750Z] [BOT] ⏭️  Skipping duplicate: JID_cea08a83 (posted within 7 days)
[2026-01-21T20:53:56.750Z] [BOT] ⏭️  Skipping duplicate: JID_cf16accc (posted within 7 days)
[2026-01-21T20:53:56.750Z] [BOT] ⏭️  Skipping duplicate: JID_5e8b2684 (posted within 7 days)
[2026-01-21T20:53:56.857Z] [BOT] ✅ Loaded pending queue: 2764 total (2744 pending, 20 enriched, 0 posted)
[2026-01-21T20:53:57.048Z] [BOT] ✅ Saved pending queue: 2764 total (2744 pending, 10 enriched, 10 posted)
[2026-01-21T20:53:57.048Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T20:53:57.113Z] [BOT] 📂 Loaded 6091 existing routing entries
[2026-01-21T20:53:57.193Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6101
   Timestamp: 2026-01-21T20:53:57.165Z
[2026-01-21T20:53:57.194Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T20:53:57.194Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #tech-jobs: 6 posts
     2. #ai-jobs: 3 posts
     3. #JID_ead674af: 2 posts
     4. #JID_98d4f0de: 1 posts
     5. #finance-jobs: 1 posts
[2026-01-21T20:53:57.194Z] [BOT] [STATS] Channel stats saved
[2026-01-21T20:53:59.221Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2741) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*