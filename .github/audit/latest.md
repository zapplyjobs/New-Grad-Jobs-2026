# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T11:57:25.706Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T11:56:42.842Z] ========================================
[2026-01-21T11:56:42.844Z] Discord Bot Execution Log
[2026-01-21T11:56:42.844Z] Environment: GitHub Actions
[2026-01-21T11:56:42.844Z] Node Version: v20.19.6
[2026-01-21T11:56:42.844Z] ========================================
[2026-01-21T11:56:42.844Z] Environment Variables Check:
[2026-01-21T11:56:42.845Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T11:56:42.845Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T11:56:42.845Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T11:56:42.845Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T11:56:42.845Z] 
Multi-Channel Configuration:
[2026-01-21T11:56:42.845Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T11:56:42.845Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T11:56:42.845Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T11:56:42.845Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T11:56:42.845Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T11:56:42.845Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T11:56:42.846Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T11:56:42.846Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T11:56:42.846Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T11:56:42.846Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T11:56:42.846Z] 
Data Files Check:
[2026-01-21T11:56:42.847Z] .github/data/new_jobs.json: ✅ Exists (10 items, 98883 bytes)
[2026-01-21T11:56:42.864Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1935249 bytes)
[2026-01-21T11:56:42.864Z] 
========================================
[2026-01-21T11:56:42.864Z] Starting Enhanced Discord Bot...
[2026-01-21T11:56:42.864Z] ========================================
[2026-01-21T11:56:43.413Z] [BOT] ✅ Loaded V2 database: 3379 jobs
[2026-01-21T11:56:43.840Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T11:56:43.841Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T11:56:43.841Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T11:56:43.956Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Jr. Onboarding Associate at gusto
[2026-01-21T11:56:43.960Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T11:56:43.960Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T11:56:43.961Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T11:56:43.962Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-21T11:56:43.962Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Enterprise Customer Success Manager @ brex: salt lake city, utah, united states, san francisco, california, united states, new york, new york, united states, seattle, washington, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-21T11:56:43.962Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T11:56:43.965Z] [BOT] 📌 Posting 4 jobs to #tech-jobs
[2026-01-21T11:56:43.966Z] [BOT] 📍 [ROUTING] "Jr. Onboarding Associate" @ gusto
   Category: TECH (default)
[2026-01-21T11:56:43.966Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T11:56:43.970Z] [BOT ERROR] (node:3023) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T11:56:44.166Z] [BOT] ✅ Posted message: Jr. Onboarding Associate @ gusto in #tech-jobs
[2026-01-21T11:56:44.167Z] [BOT] ✅ Industry: Jr. Onboarding Associate @ gusto
[2026-01-21T11:56:44.168Z] [BOT] 💾 Added channel posting: Jr. Onboarding Associate @ gusto → category channel (1 total channels)
[2026-01-21T11:56:44.168Z] [BOT] 💾 BEFORE ARCHIVING: 3380 jobs in database
[2026-01-21T11:56:44.171Z] [BOT] ✅ No jobs to archive (all 3380 jobs within 7-day window)
[2026-01-21T11:56:44.198Z] [BOT] 💾 Saved posted_jobs.json: 3380 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:56:45.701Z] [BOT] 💾 Marked as posted: Jr. Onboarding Associate @ gusto (instance #1)
[2026-01-21T11:56:45.701Z] [BOT] 💾 BEFORE ARCHIVING: 3381 jobs in database
[2026-01-21T11:56:45.703Z] [BOT] ✅ No jobs to archive (all 3381 jobs within 7-day window)
[2026-01-21T11:56:45.722Z] [BOT] 💾 Saved posted_jobs.json: 3381 active jobs
[2026-01-21T11:56:45.723Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T11:56:45.723Z] [BOT] 📍 [ROUTING] "Segment Marketing Manager, Startups" @ anthropic
[2026-01-21T11:56:45.723Z] [BOT] Category: TECH (matched: "product marketing")
   Channel: tech-jobs (1462...4987)
[2026-01-21T11:56:45.930Z] [BOT] ✅ Posted message: Segment Marketing Manager, Startups @ anthropic in #tech-jobs
  ✅ Industry: Segment Marketing Manager, Startups @ anthropic
[2026-01-21T11:56:45.931Z] [BOT] 💾 Added channel posting: Segment Marketing Manager, Startups @ anthropic → category channel (1 total channels)
[2026-01-21T11:56:45.932Z] [BOT] 💾 BEFORE ARCHIVING: 3382 jobs in database
[2026-01-21T11:56:45.934Z] [BOT] ✅ No jobs to archive (all 3382 jobs within 7-day window)
[2026-01-21T11:56:45.955Z] [BOT] 💾 Saved posted_jobs.json: 3382 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:56:47.456Z] [BOT] 💾 Marked as posted: Segment Marketing Manager, Startups @ anthropic (instance #1)
[2026-01-21T11:56:47.457Z] [BOT] 💾 BEFORE ARCHIVING: 3383 jobs in database
[2026-01-21T11:56:47.459Z] [BOT] ✅ No jobs to archive (all 3383 jobs within 7-day window)
[2026-01-21T11:56:47.481Z] [BOT] 💾 Saved posted_jobs.json: 3383 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:56:47.481Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Web Frameworks - Officer" @ ORG_a3b50c47 Street
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T11:56:47.612Z] [BOT] ✅ Posted message: Software Engineer 1 - Web Frameworks - Officer @ ORG_a3b50c47 Street in #tech-jobs
  ✅ Industry: Software Engineer 1 - Web Frameworks - Officer @ ORG_a3b50c47 Street
[2026-01-21T11:56:47.613Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Web Frameworks - Officer @ ORG_a3b50c47 Street → category channel (1 total channels)
[2026-01-21T11:56:47.613Z] [BOT] 💾 BEFORE ARCHIVING: 3384 jobs in database
[2026-01-21T11:56:47.616Z] [BOT] ✅ No jobs to archive (all 3384 jobs within 7-day window)
[2026-01-21T11:56:47.637Z] [BOT] 💾 Saved posted_jobs.json: 3384 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:56:49.139Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Web Frameworks - Officer @ ORG_a3b50c47 Street (instance #1)
💾 BEFORE ARCHIVING: 3385 jobs in database
[2026-01-21T11:56:49.140Z] [BOT] ✅ No jobs to archive (all 3385 jobs within 7-day window)
[2026-01-21T11:56:49.160Z] [BOT] 💾 Saved posted_jobs.json: 3385 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:56:49.161Z] [BOT] 📍 [ROUTING] "Software Engineer - Ent" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T11:56:49.305Z] [BOT] ✅ Posted message: Software Engineer - Ent @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Software Engineer - Ent @ ORG_f3f2248d Grumman
[2026-01-21T11:56:49.306Z] [BOT] 💾 Added channel posting: Software Engineer - Ent @ ORG_f3f2248d Grumman → category channel (1 total channels)
[2026-01-21T11:56:49.306Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-21T11:56:49.308Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-21T11:56:49.327Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:56:51.450Z] [BOT] ✅ Posted message: Software Engineer - Ent @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T11:56:51.451Z] [BOT] 💾 Added channel posting: Software Engineer - Ent @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-21T11:56:51.451Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-21T11:56:51.453Z] [BOT] ✅ No jobs to archive (all 3386 jobs within 7-day window)
[2026-01-21T11:56:51.472Z] [BOT] 💾 Saved posted_jobs.json: 3386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:56:52.974Z] [BOT] 💾 Marked as posted: Software Engineer - Ent @ ORG_f3f2248d Grumman (instance #1)
[2026-01-21T11:56:52.974Z] [BOT] 💾 BEFORE ARCHIVING: 3387 jobs in database
[2026-01-21T11:56:52.977Z] [BOT] ✅ No jobs to archive (all 3387 jobs within 7-day window)
[2026-01-21T11:56:52.999Z] [BOT] 💾 Saved posted_jobs.json: 3387 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:56:56.001Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T11:56:56.001Z] [BOT] 📍 [ROUTING] "Manager, Inside Sales" @ figma
[2026-01-21T11:56:56.002Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T11:56:56.287Z] [BOT] ✅ Posted message: Manager, Inside Sales @ figma in #finance-jobs
[2026-01-21T11:56:56.287Z] [BOT] ✅ Industry: Manager, Inside Sales @ figma
[2026-01-21T11:56:56.288Z] [BOT] 💾 Added channel posting: Manager, Inside Sales @ figma → category channel (1 total channels)
[2026-01-21T11:56:56.288Z] [BOT] 💾 BEFORE ARCHIVING: 3388 jobs in database
[2026-01-21T11:56:56.290Z] [BOT] ✅ No jobs to archive (all 3388 jobs within 7-day window)
[2026-01-21T11:56:56.311Z] [BOT] 💾 Saved posted_jobs.json: 3388 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:56:57.945Z] [BOT] ✅ Posted message: Manager, Inside Sales @ figma in #JID_98d4f0de
[2026-01-21T11:56:57.945Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T11:56:57.946Z] [BOT] 💾 Added channel posting: Manager, Inside Sales @ figma → location channel (2 total channels)
[2026-01-21T11:56:57.946Z] [BOT] 💾 BEFORE ARCHIVING: 3388 jobs in database
[2026-01-21T11:56:57.948Z] [BOT] ✅ No jobs to archive (all 3388 jobs within 7-day window)
[2026-01-21T11:56:57.969Z] [BOT] 💾 Saved posted_jobs.json: 3388 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:56:59.470Z] [BOT] 💾 Marked as posted: Manager, Inside Sales @ figma (instance #1)
[2026-01-21T11:56:59.470Z] [BOT] 💾 BEFORE ARCHIVING: 3389 jobs in database
[2026-01-21T11:56:59.472Z] [BOT] ✅ No jobs to archive (all 3389 jobs within 7-day window)
[2026-01-21T11:56:59.492Z] [BOT] 💾 Saved posted_jobs.json: 3389 active jobs
[2026-01-21T11:56:59.492Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T11:57:02.493Z] [BOT] 📌 Posting 3 jobs to #ai-jobs
[2026-01-21T11:57:02.494Z] [BOT] 📍 [ROUTING] "Product Analyst - Digital Advertising" @ ORG_162cc64c Tower
[2026-01-21T11:57:02.494Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T11:57:02.709Z] [BOT] ✅ Posted message: Product Analyst - Digital Advertising @ ORG_162cc64c Tower in #ai-jobs
[2026-01-21T11:57:02.709Z] [BOT] ✅ Industry: Product Analyst - Digital Advertising @ ORG_162cc64c Tower
[2026-01-21T11:57:02.709Z] [BOT] 💾 Added channel posting: Product Analyst - Digital Advertising @ ORG_162cc64c Tower → category channel (1 total channels)
[2026-01-21T11:57:02.710Z] [BOT] 💾 BEFORE ARCHIVING: 3390 jobs in database
[2026-01-21T11:57:02.712Z] [BOT] ✅ No jobs to archive (all 3390 jobs within 7-day window)
[2026-01-21T11:57:02.731Z] [BOT] 💾 Saved posted_jobs.json: 3390 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:57:04.232Z] [BOT] 💾 Marked as posted: Product Analyst - Digital Advertising @ ORG_162cc64c Tower (instance #1)
[2026-01-21T11:57:04.232Z] [BOT] 💾 BEFORE ARCHIVING: 3391 jobs in database
[2026-01-21T11:57:04.234Z] [BOT] ✅ No jobs to archive (all 3391 jobs within 7-day window)
[2026-01-21T11:57:04.255Z] [BOT] 💾 Saved posted_jobs.json: 3391 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:57:04.255Z] [BOT] 📍 [ROUTING] "Associate Director, Programmatic Platform Operations" @ spotify
   Category: AI (matched: "artificial intelligence")
[2026-01-21T11:57:04.256Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T11:57:04.423Z] [BOT] ✅ Posted message: Associate Director, Programmatic Platform Operations @ spotify in #ai-jobs
  ✅ Industry: Associate Director, Programmatic Platform Operations @ spotify
[2026-01-21T11:57:04.423Z] [BOT] 💾 Added channel posting: Associate Director, Programmatic Platform Operations @ spotify → category channel (1 total channels)
[2026-01-21T11:57:04.424Z] [BOT] 💾 BEFORE ARCHIVING: 3392 jobs in database
[2026-01-21T11:57:04.426Z] [BOT] ✅ No jobs to archive (all 3392 jobs within 7-day window)
[2026-01-21T11:57:04.446Z] [BOT] 💾 Saved posted_jobs.json: 3392 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:57:06.240Z] [BOT] ✅ Posted message: Associate Director, Programmatic Platform Operations @ spotify in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T11:57:06.241Z] [BOT] 💾 Added channel posting: Associate Director, Programmatic Platform Operations @ spotify → location channel (2 total channels)
[2026-01-21T11:57:06.241Z] [BOT] 💾 BEFORE ARCHIVING: 3392 jobs in database
[2026-01-21T11:57:06.243Z] [BOT] ✅ No jobs to archive (all 3392 jobs within 7-day window)
[2026-01-21T11:57:06.263Z] [BOT] 💾 Saved posted_jobs.json: 3392 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:57:07.764Z] [BOT] 💾 Marked as posted: Associate Director, Programmatic Platform Operations @ spotify (instance #1)
[2026-01-21T11:57:07.764Z] [BOT] 💾 BEFORE ARCHIVING: 3393 jobs in database
[2026-01-21T11:57:07.766Z] [BOT] ✅ No jobs to archive (all 3393 jobs within 7-day window)
[2026-01-21T11:57:07.786Z] [BOT] 💾 Saved posted_jobs.json: 3393 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:57:07.786Z] [BOT] 📍 [ROUTING] "GPU and SoC Modelling Architect – New College Grad" @ ORG_0890f456
[2026-01-21T11:57:07.786Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T11:57:08.015Z] [BOT] ✅ Posted message: GPU and SoC Modelling Architect – New College Grad @ ORG_0890f456 in #ai-jobs
[2026-01-21T11:57:08.015Z] [BOT] ✅ Industry: GPU and SoC Modelling Architect – New College Grad @ ORG_0890f456
[2026-01-21T11:57:08.016Z] [BOT] 💾 Added channel posting: GPU and SoC Modelling Architect – New College Grad @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T11:57:08.016Z] [BOT] 💾 BEFORE ARCHIVING: 3394 jobs in database
[2026-01-21T11:57:08.018Z] [BOT] ✅ No jobs to archive (all 3394 jobs within 7-day window)
[2026-01-21T11:57:08.039Z] [BOT] 💾 Saved posted_jobs.json: 3394 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:57:09.539Z] [BOT] 💾 Marked as posted: GPU and SoC Modelling Architect – New College Grad @ ORG_0890f456 (instance #1)
[2026-01-21T11:57:09.539Z] [BOT] 💾 BEFORE ARCHIVING: 3395 jobs in database
[2026-01-21T11:57:09.541Z] [BOT] ✅ No jobs to archive (all 3395 jobs within 7-day window)
[2026-01-21T11:57:09.561Z] [BOT] 💾 Saved posted_jobs.json: 3395 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:57:12.561Z] [BOT] 📌 Posting 2 jobs to #JID_fb739488
[2026-01-21T11:57:12.561Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_692aa04a
[2026-01-21T11:57:12.561Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T11:57:12.758Z] [BOT] ✅ Posted message: Data Analyst @ ORG_692aa04a in #JID_fb739488
[2026-01-21T11:57:12.758Z] [BOT] ✅ Industry: Data Analyst @ ORG_692aa04a
[2026-01-21T11:57:12.758Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_692aa04a → category channel (1 total channels)
[2026-01-21T11:57:12.758Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-21T11:57:12.760Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-21T11:57:12.780Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:57:14.427Z] [BOT] ✅ Posted message: Data Analyst @ ORG_692aa04a in #JID_ead674af
[2026-01-21T11:57:14.427Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T11:57:14.428Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_692aa04a → location channel (2 total channels)
[2026-01-21T11:57:14.428Z] [BOT] 💾 BEFORE ARCHIVING: 3396 jobs in database
[2026-01-21T11:57:14.430Z] [BOT] ✅ No jobs to archive (all 3396 jobs within 7-day window)
[2026-01-21T11:57:14.451Z] [BOT] 💾 Saved posted_jobs.json: 3396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:57:15.952Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_692aa04a (instance #1)
[2026-01-21T11:57:15.953Z] [BOT] 💾 BEFORE ARCHIVING: 3397 jobs in database
[2026-01-21T11:57:15.955Z] [BOT] ✅ No jobs to archive (all 3397 jobs within 7-day window)
[2026-01-21T11:57:15.975Z] [BOT] 💾 Saved posted_jobs.json: 3397 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:57:15.975Z] [BOT] 📍 [ROUTING] "Business Intelligence Analyst" @ ORG_2d1e8306 Specialty
[2026-01-21T11:57:15.975Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T11:57:16.266Z] [BOT] ✅ Posted message: Business Intelligence Analyst @ ORG_2d1e8306 Specialty in #JID_fb739488
  ✅ Industry: Business Intelligence Analyst @ ORG_2d1e8306 Specialty
[2026-01-21T11:57:16.267Z] [BOT] 💾 Added channel posting: Business Intelligence Analyst @ ORG_2d1e8306 Specialty → category channel (1 total channels)
[2026-01-21T11:57:16.267Z] [BOT] 💾 BEFORE ARCHIVING: 3398 jobs in database
[2026-01-21T11:57:16.269Z] [BOT] ✅ No jobs to archive (all 3398 jobs within 7-day window)
[2026-01-21T11:57:16.290Z] [BOT] 💾 Saved posted_jobs.json: 3398 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:57:18.083Z] [BOT] ✅ Posted message: Business Intelligence Analyst @ ORG_2d1e8306 Specialty in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T11:57:18.084Z] [BOT] 💾 Added channel posting: Business Intelligence Analyst @ ORG_2d1e8306 Specialty → location channel (2 total channels)
[2026-01-21T11:57:18.084Z] [BOT] 💾 BEFORE ARCHIVING: 3398 jobs in database
[2026-01-21T11:57:18.086Z] [BOT] ✅ No jobs to archive (all 3398 jobs within 7-day window)
[2026-01-21T11:57:18.107Z] [BOT] 💾 Saved posted_jobs.json: 3398 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:57:19.609Z] [BOT] 💾 Marked as posted: Business Intelligence Analyst @ ORG_2d1e8306 Specialty (instance #1)
[2026-01-21T11:57:19.609Z] [BOT] 💾 BEFORE ARCHIVING: 3399 jobs in database
[2026-01-21T11:57:19.611Z] [BOT] ✅ No jobs to archive (all 3399 jobs within 7-day window)
[2026-01-21T11:57:19.632Z] [BOT] 💾 Saved posted_jobs.json: 3399 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:57:22.633Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T11:57:22.634Z] [BOT] ⏭️  Skipping duplicate: JID_53dff2d1 (posted within 7 days)
[2026-01-21T11:57:22.634Z] [BOT] ⏭️  Skipping duplicate: JID_b3f780e6 (posted within 7 days)
[2026-01-21T11:57:22.635Z] [BOT] ⏭️  Skipping duplicate: JID_60d64f1d (posted within 7 days)
[2026-01-21T11:57:22.635Z] [BOT] ⏭️  Skipping duplicate: JID_cc999bf9-officer_r-779734-1 (posted within 7 days)
[2026-01-21T11:57:22.635Z] [BOT] ⏭️  Skipping duplicate: JID_aed7440b (posted within 7 days)
⏭️  Skipping duplicate: JID_8a767604 (posted within 7 days)
⏭️  Skipping duplicate: JID_f18f7721-analyst_r105711 (posted within 7 days)
[2026-01-21T11:57:22.635Z] [BOT] ⏭️  Skipping duplicate: JID_2f317ae4-2026_jr2009934 (posted within 7 days)
[2026-01-21T11:57:22.635Z] [BOT] ⏭️  Skipping duplicate: JID_9ecc75be-ryan_specialty_career_site-JID_097d5bb0-analyst_jr25-3719 (posted within 7 days)
[2026-01-21T11:57:22.636Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_d9435324-_r10216983 (posted within 7 days)
[2026-01-21T11:57:22.745Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[2026-01-21T11:57:22.933Z] [BOT] ✅ Saved pending queue: 2768 total (2748 pending, 10 enriched, 10 posted)
[2026-01-21T11:57:22.933Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T11:57:22.996Z] [BOT] 📂 Loaded 5865 existing routing entries
[2026-01-21T11:57:23.074Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5875
   Timestamp: 2026-01-21T11:57:23.048Z
[2026-01-21T11:57:23.074Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T11:57:23.075Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-21T11:57:23.075Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 6
   Top channels:
     1. #tech-jobs: 4 posts
     2. #JID_ead674af: 3 posts
     3. #ai-jobs: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #JID_fb739488: 2 posts
[2026-01-21T11:57:23.075Z] [BOT] [STATS] Channel stats saved
[2026-01-21T11:57:25.101Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3023) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*