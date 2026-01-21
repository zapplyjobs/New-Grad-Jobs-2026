# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T08:15:36.766Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T08:14:55.269Z] ========================================
[2026-01-21T08:14:55.271Z] Discord Bot Execution Log
[2026-01-21T08:14:55.271Z] Environment: GitHub Actions
[2026-01-21T08:14:55.271Z] Node Version: v20.19.6
[2026-01-21T08:14:55.271Z] ========================================
[2026-01-21T08:14:55.271Z] Environment Variables Check:
[2026-01-21T08:14:55.271Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T08:14:55.271Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T08:14:55.271Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T08:14:55.271Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T08:14:55.271Z] 
Multi-Channel Configuration:
[2026-01-21T08:14:55.271Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T08:14:55.272Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T08:14:55.272Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T08:14:55.272Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T08:14:55.272Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T08:14:55.272Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T08:14:55.272Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T08:14:55.272Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T08:14:55.272Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T08:14:55.272Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T08:14:55.272Z] 
Data Files Check:
[2026-01-21T08:14:55.273Z] .github/data/new_jobs.json: ✅ Exists (10 items, 111599 bytes)
[2026-01-21T08:14:55.285Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1804903 bytes)
[2026-01-21T08:14:55.286Z] 
========================================
[2026-01-21T08:14:55.286Z] Starting Enhanced Discord Bot...
[2026-01-21T08:14:55.286Z] ========================================
[2026-01-21T08:14:55.832Z] [BOT] ✅ Loaded V2 database: 3174 jobs
[2026-01-21T08:14:56.488Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T08:14:56.489Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T08:14:56.489Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T08:14:56.607Z] [BOT] ✅ Loaded pending queue: 2743 total (2723 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Product Manager - Cost and Usage Experience at datadog
[2026-01-21T08:14:56.612Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T08:14:56.612Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T08:14:56.612Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T08:14:56.613Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-21T08:14:56.613Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T08:14:56.617Z] [BOT] 📌 Posting 8 jobs to #tech-jobs
[2026-01-21T08:14:56.618Z] [BOT] 📍 [ROUTING] "Senior Product Manager - Cost and Usage Experience" @ datadog
[2026-01-21T08:14:56.618Z] [BOT] Category: TECH (matched: "product")
   Channel: tech-jobs (1462...4987)
[2026-01-21T08:14:56.622Z] [BOT ERROR] (node:3247) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T08:14:56.803Z] [BOT] ✅ Posted message: Senior Product Manager - Cost and Usage Experience @ datadog in #tech-jobs
[2026-01-21T08:14:56.804Z] [BOT] ✅ Industry: Senior Product Manager - Cost and Usage Experience @ datadog
[2026-01-21T08:14:56.805Z] [BOT] 💾 Added channel posting: Senior Product Manager - Cost and Usage Experience @ datadog → category channel (1 total channels)
[2026-01-21T08:14:56.805Z] [BOT] 💾 BEFORE ARCHIVING: 3175 jobs in database
[2026-01-21T08:14:56.807Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T08:14:56.813Z] [BOT] 📦 Archived 8 jobs to 2026-01.json (8 total in archive)
[2026-01-21T08:14:56.813Z] [BOT] ✅ Archiving complete: 8 archived, 3167 active
[2026-01-21T08:14:56.851Z] [BOT] 💾 Saved posted_jobs.json: 3167 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:14:58.656Z] [BOT] ✅ Posted message: Senior Product Manager - Cost and Usage Experience @ datadog in #JID_98d4f0de
[2026-01-21T08:14:58.656Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T08:14:58.657Z] [BOT] 💾 Added channel posting: Senior Product Manager - Cost and Usage Experience @ datadog → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3167 jobs in database
[2026-01-21T08:14:58.659Z] [BOT] ✅ No jobs to archive (all 3167 jobs within 7-day window)
[2026-01-21T08:14:58.678Z] [BOT] 💾 Saved posted_jobs.json: 3167 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:00.179Z] [BOT] 💾 Marked as posted: Senior Product Manager - Cost and Usage Experience @ datadog (instance #1)
💾 BEFORE ARCHIVING: 3168 jobs in database
[2026-01-21T08:15:00.181Z] [BOT] ✅ No jobs to archive (all 3168 jobs within 7-day window)
[2026-01-21T08:15:00.202Z] [BOT] 💾 Saved posted_jobs.json: 3168 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:00.203Z] [BOT] 💾 Marked as posted: Senior Product Manager - Database AI Optimization @ datadog (instance #1)
[2026-01-21T08:15:00.203Z] [BOT] 💾 BEFORE ARCHIVING: 3169 jobs in database
[2026-01-21T08:15:00.206Z] [BOT] ✅ No jobs to archive (all 3169 jobs within 7-day window)
[2026-01-21T08:15:00.227Z] [BOT] 💾 Saved posted_jobs.json: 3169 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:00.227Z] [BOT] 📍 [ROUTING] "Senior Enterprise Marketing Manager" @ airtable
[2026-01-21T08:15:00.227Z] [BOT] Category: TECH (matched: "product marketing")
   Channel: tech-jobs (1462...4987)
[2026-01-21T08:15:00.705Z] [BOT] ✅ Posted message: Senior Enterprise Marketing Manager @ airtable in #tech-jobs
  ✅ Industry: Senior Enterprise Marketing Manager @ airtable
[2026-01-21T08:15:00.706Z] [BOT] 💾 Added channel posting: Senior Enterprise Marketing Manager @ airtable → category channel (1 total channels)
[2026-01-21T08:15:00.706Z] [BOT] 💾 BEFORE ARCHIVING: 3170 jobs in database
[2026-01-21T08:15:00.708Z] [BOT] ✅ No jobs to archive (all 3170 jobs within 7-day window)
[2026-01-21T08:15:00.732Z] [BOT] 💾 Saved posted_jobs.json: 3170 active jobs
[2026-01-21T08:15:00.732Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:02.234Z] [BOT] 💾 Marked as posted: Senior Enterprise Marketing Manager @ airtable (instance #1)
[2026-01-21T08:15:02.234Z] [BOT] 💾 BEFORE ARCHIVING: 3171 jobs in database
[2026-01-21T08:15:02.236Z] [BOT] ✅ No jobs to archive (all 3171 jobs within 7-day window)
[2026-01-21T08:15:02.254Z] [BOT] 💾 Saved posted_jobs.json: 3171 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:02.255Z] [BOT] 📍 [ROUTING] "Senior Growth Marketing Manager, Builders" @ airtable
[2026-01-21T08:15:02.255Z] [BOT] Category: TECH (matched: "product marketing")
   Channel: tech-jobs (1462...4987)
[2026-01-21T08:15:02.640Z] [BOT] ✅ Posted message: Senior Growth Marketing Manager, Builders @ airtable in #tech-jobs
[2026-01-21T08:15:02.640Z] [BOT] ✅ Industry: Senior Growth Marketing Manager, Builders @ airtable
[2026-01-21T08:15:02.641Z] [BOT] 💾 Added channel posting: Senior Growth Marketing Manager, Builders @ airtable → category channel (1 total channels)
[2026-01-21T08:15:02.641Z] [BOT] 💾 BEFORE ARCHIVING: 3172 jobs in database
[2026-01-21T08:15:02.643Z] [BOT] ✅ No jobs to archive (all 3172 jobs within 7-day window)
[2026-01-21T08:15:02.663Z] [BOT] 💾 Saved posted_jobs.json: 3172 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:04.165Z] [BOT] 💾 Marked as posted: Senior Growth Marketing Manager, Builders @ airtable (instance #1)
💾 BEFORE ARCHIVING: 3173 jobs in database
[2026-01-21T08:15:04.167Z] [BOT] ✅ No jobs to archive (all 3173 jobs within 7-day window)
[2026-01-21T08:15:04.187Z] [BOT] 💾 Saved posted_jobs.json: 3173 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:04.188Z] [BOT] 📍 [ROUTING] "Technical Sourcer (Contract)" @ airtable
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T08:15:04.400Z] [BOT] ✅ Posted message: Technical Sourcer (Contract) @ airtable in #tech-jobs
  ✅ Industry: Technical Sourcer (Contract) @ airtable
[2026-01-21T08:15:04.401Z] [BOT] 💾 Added channel posting: Technical Sourcer (Contract) @ airtable → category channel (1 total channels)
[2026-01-21T08:15:04.401Z] [BOT] 💾 BEFORE ARCHIVING: 3174 jobs in database
[2026-01-21T08:15:04.403Z] [BOT] ✅ No jobs to archive (all 3174 jobs within 7-day window)
[2026-01-21T08:15:04.423Z] [BOT] 💾 Saved posted_jobs.json: 3174 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:05.924Z] [BOT] 💾 Marked as posted: Technical Sourcer (Contract) @ airtable (instance #1)
[2026-01-21T08:15:05.924Z] [BOT] 💾 BEFORE ARCHIVING: 3175 jobs in database
[2026-01-21T08:15:05.927Z] [BOT] ✅ No jobs to archive (all 3175 jobs within 7-day window)
[2026-01-21T08:15:05.951Z] [BOT] 💾 Saved posted_jobs.json: 3175 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:05.951Z] [BOT] 📍 [ROUTING] "GIS Technician" @ NV5 Global
   Category: TECH (default)
[2026-01-21T08:15:05.951Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T08:15:06.196Z] [BOT] ✅ Posted message: GIS Technician @ NV5 Global in #tech-jobs
  ✅ Industry: GIS Technician @ NV5 Global
[2026-01-21T08:15:06.197Z] [BOT] 💾 Added channel posting: GIS Technician @ NV5 Global → category channel (1 total channels)
[2026-01-21T08:15:06.197Z] [BOT] 💾 BEFORE ARCHIVING: 3176 jobs in database
[2026-01-21T08:15:06.199Z] [BOT] ✅ No jobs to archive (all 3176 jobs within 7-day window)
[2026-01-21T08:15:06.220Z] [BOT] 💾 Saved posted_jobs.json: 3176 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:07.916Z] [BOT] ✅ Posted message: GIS Technician @ NV5 Global in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T08:15:07.916Z] [BOT] 💾 Added channel posting: GIS Technician @ NV5 Global → location channel (2 total channels)
[2026-01-21T08:15:07.917Z] [BOT] 💾 BEFORE ARCHIVING: 3176 jobs in database
[2026-01-21T08:15:07.919Z] [BOT] ✅ No jobs to archive (all 3176 jobs within 7-day window)
[2026-01-21T08:15:07.940Z] [BOT] 💾 Saved posted_jobs.json: 3176 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:09.442Z] [BOT] 💾 Marked as posted: GIS Technician @ NV5 Global (instance #1)
[2026-01-21T08:15:09.443Z] [BOT] 💾 BEFORE ARCHIVING: 3177 jobs in database
[2026-01-21T08:15:09.445Z] [BOT] ✅ No jobs to archive (all 3177 jobs within 7-day window)
[2026-01-21T08:15:09.468Z] [BOT] 💾 Saved posted_jobs.json: 3177 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:09.468Z] [BOT] 📍 [ROUTING] "Helix Data Creator" @ ORG_1f5be668
   Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T08:15:09.924Z] [BOT] ✅ Posted message: Helix Data Creator @ ORG_1f5be668 in #tech-jobs
  ✅ Industry: Helix Data Creator @ ORG_1f5be668
[2026-01-21T08:15:09.925Z] [BOT] 💾 Added channel posting: Helix Data Creator @ ORG_1f5be668 → category channel (1 total channels)
[2026-01-21T08:15:09.925Z] [BOT] 💾 BEFORE ARCHIVING: 3178 jobs in database
[2026-01-21T08:15:09.927Z] [BOT] ✅ No jobs to archive (all 3178 jobs within 7-day window)
[2026-01-21T08:15:09.947Z] [BOT] 💾 Saved posted_jobs.json: 3178 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:11.449Z] [BOT] 💾 Marked as posted: Helix Data Creator @ ORG_1f5be668 (instance #1)
💾 BEFORE ARCHIVING: 3179 jobs in database
[2026-01-21T08:15:11.451Z] [BOT] ✅ No jobs to archive (all 3179 jobs within 7-day window)
[2026-01-21T08:15:11.471Z] [BOT] 💾 Saved posted_jobs.json: 3179 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:11.471Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_4893d237 Technologies
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T08:15:11.776Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_4893d237 Technologies in #tech-jobs
[2026-01-21T08:15:11.776Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_4893d237 Technologies
[2026-01-21T08:15:11.776Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_4893d237 Technologies → category channel (1 total channels)
[2026-01-21T08:15:11.776Z] [BOT] 💾 BEFORE ARCHIVING: 3180 jobs in database
[2026-01-21T08:15:11.778Z] [BOT] ✅ No jobs to archive (all 3180 jobs within 7-day window)
[2026-01-21T08:15:11.798Z] [BOT] 💾 Saved posted_jobs.json: 3180 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:13.791Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_4893d237 Technologies in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T08:15:13.792Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_4893d237 Technologies → location channel (2 total channels)
[2026-01-21T08:15:13.792Z] [BOT] 💾 BEFORE ARCHIVING: 3180 jobs in database
[2026-01-21T08:15:13.794Z] [BOT] ✅ No jobs to archive (all 3180 jobs within 7-day window)
[2026-01-21T08:15:13.815Z] [BOT] 💾 Saved posted_jobs.json: 3180 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:15.317Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_4893d237 Technologies (instance #1)
[2026-01-21T08:15:15.317Z] [BOT] 💾 BEFORE ARCHIVING: 3181 jobs in database
[2026-01-21T08:15:15.319Z] [BOT] ✅ No jobs to archive (all 3181 jobs within 7-day window)
[2026-01-21T08:15:15.339Z] [BOT] 💾 Saved posted_jobs.json: 3181 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:15.340Z] [BOT] 📍 [ROUTING] "Algorithm and Analysis Software Engineer Scientist Associate" @ ORG_9d38443e of Texas - Austin
[2026-01-21T08:15:15.340Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T08:15:15.567Z] [BOT] ✅ Posted message: Algorithm and Analysis Software Engineer Scientist Associate @ ORG_9d38443e of Texas - Austin in #tech-jobs
  ✅ Industry: Algorithm and Analysis Software Engineer Scientist Associate @ ORG_9d38443e of Texas - Austin
[2026-01-21T08:15:15.568Z] [BOT] 💾 Added channel posting: Algorithm and Analysis Software Engineer Scientist Associate @ ORG_9d38443e of Texas - Austin → category channel (1 total channels)
[2026-01-21T08:15:15.568Z] [BOT] 💾 BEFORE ARCHIVING: 3182 jobs in database
[2026-01-21T08:15:15.570Z] [BOT] ✅ No jobs to archive (all 3182 jobs within 7-day window)
[2026-01-21T08:15:15.591Z] [BOT] 💾 Saved posted_jobs.json: 3182 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:17.092Z] [BOT] 💾 Marked as posted: Algorithm and Analysis Software Engineer Scientist Associate @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-21T08:15:17.093Z] [BOT] 💾 BEFORE ARCHIVING: 3183 jobs in database
[2026-01-21T08:15:17.095Z] [BOT] ✅ No jobs to archive (all 3183 jobs within 7-day window)
[2026-01-21T08:15:17.115Z] [BOT] 💾 Saved posted_jobs.json: 3183 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:20.117Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-21T08:15:20.117Z] [BOT] 📍 [ROUTING] "Data Engineer - Personalization" @ spotify
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T08:15:21.685Z] [BOT] ✅ Posted message: Data Engineer - Personalization @ spotify in #ai-jobs
  ✅ Industry: Data Engineer - Personalization @ spotify
[2026-01-21T08:15:21.685Z] [BOT] 💾 Added channel posting: Data Engineer - Personalization @ spotify → category channel (1 total channels)
[2026-01-21T08:15:21.686Z] [BOT] 💾 BEFORE ARCHIVING: 3184 jobs in database
[2026-01-21T08:15:21.687Z] [BOT] ✅ No jobs to archive (all 3184 jobs within 7-day window)
[2026-01-21T08:15:21.708Z] [BOT] 💾 Saved posted_jobs.json: 3184 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:23.649Z] [BOT] ✅ Posted message: Data Engineer - Personalization @ spotify in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T08:15:23.649Z] [BOT] 💾 Added channel posting: Data Engineer - Personalization @ spotify → location channel (2 total channels)
[2026-01-21T08:15:23.650Z] [BOT] 💾 BEFORE ARCHIVING: 3184 jobs in database
[2026-01-21T08:15:23.652Z] [BOT] ✅ No jobs to archive (all 3184 jobs within 7-day window)
[2026-01-21T08:15:23.672Z] [BOT] 💾 Saved posted_jobs.json: 3184 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:25.174Z] [BOT] 💾 Marked as posted: Data Engineer - Personalization @ spotify (instance #1)
[2026-01-21T08:15:25.174Z] [BOT] 💾 BEFORE ARCHIVING: 3185 jobs in database
[2026-01-21T08:15:25.176Z] [BOT] ✅ No jobs to archive (all 3185 jobs within 7-day window)
[2026-01-21T08:15:25.196Z] [BOT] 💾 Saved posted_jobs.json: 3185 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:28.198Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T08:15:28.198Z] [BOT] 📍 [ROUTING] "Finance Variable Compensation Lead" @ anthropic
[2026-01-21T08:15:28.198Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T08:15:28.527Z] [BOT] ✅ Posted message: Finance Variable Compensation Lead @ anthropic in #finance-jobs
  ✅ Industry: Finance Variable Compensation Lead @ anthropic
[2026-01-21T08:15:28.528Z] [BOT] 💾 Added channel posting: Finance Variable Compensation Lead @ anthropic → category channel (1 total channels)
[2026-01-21T08:15:28.528Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-21T08:15:28.530Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-21T08:15:28.552Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:30.054Z] [BOT] 💾 Marked as posted: Finance Variable Compensation Lead @ anthropic (instance #1)
[2026-01-21T08:15:30.054Z] [BOT] 💾 BEFORE ARCHIVING: 3187 jobs in database
[2026-01-21T08:15:30.056Z] [BOT] ✅ No jobs to archive (all 3187 jobs within 7-day window)
[2026-01-21T08:15:30.076Z] [BOT] 💾 Saved posted_jobs.json: 3187 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:15:33.077Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T08:15:33.078Z] [BOT] ⏭️  Skipping duplicate: JID_22b239dd (posted within 7 days)
[2026-01-21T08:15:33.078Z] [BOT] ⏭️  Skipping duplicate: JID_06554dac (posted within 7 days)
[2026-01-21T08:15:33.079Z] [BOT] ⏭️  Skipping duplicate: JID_2fbb5b06 (posted within 7 days)
[2026-01-21T08:15:33.079Z] [BOT] ⏭️  Skipping duplicate: JID_e81b6402 (posted within 7 days)
[2026-01-21T08:15:33.079Z] [BOT] ⏭️  Skipping duplicate: JID_c313cfe5 (posted within 7 days)
[2026-01-21T08:15:33.079Z] [BOT] ⏭️  Skipping duplicate: JID_1163d0da (posted within 7 days)
[2026-01-21T08:15:33.079Z] [BOT] ⏭️  Skipping duplicate: JID_bc250026 (posted within 7 days)
[2026-01-21T08:15:33.080Z] [BOT] ⏭️  Skipping duplicate: JID_ec4e396f-associate_r_00043737 (posted within 7 days)
[2026-01-21T08:15:33.080Z] [BOT] ⏭️  Skipping duplicate: JID_6defa6b6 (posted within 7 days)
[2026-01-21T08:15:33.080Z] [BOT] ⏭️  Skipping duplicate: JID_8466d1ec (posted within 7 days)
[2026-01-21T08:15:33.189Z] [BOT] ✅ Loaded pending queue: 2743 total (2723 pending, 20 enriched, 0 posted)
[2026-01-21T08:15:33.386Z] [BOT] ✅ Saved pending queue: 2743 total (2723 pending, 10 enriched, 10 posted)
[2026-01-21T08:15:33.386Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T08:15:33.451Z] [BOT] 📂 Loaded 5755 existing routing entries
[2026-01-21T08:15:33.528Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5765
   Timestamp: 2026-01-21T08:15:33.503Z
[2026-01-21T08:15:33.529Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 14
[2026-01-21T08:15:33.529Z] [BOT] Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-21T08:15:33.529Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 5
   Top channels:
[2026-01-21T08:15:33.529Z] [BOT] 1. #tech-jobs: 8 posts
     2. #JID_98d4f0de: 2 posts
     3. #JID_ead674af: 2 posts
     4. #ai-jobs: 1 posts
     5. #finance-jobs: 1 posts
[2026-01-21T08:15:33.529Z] [BOT] [STATS] Channel stats saved
[2026-01-21T08:15:35.558Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3247) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*