# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T06:18:30.015Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T06:17:52.305Z] ========================================
[2026-01-21T06:17:52.307Z] Discord Bot Execution Log
[2026-01-21T06:17:52.307Z] Environment: GitHub Actions
[2026-01-21T06:17:52.307Z] Node Version: v20.19.6
[2026-01-21T06:17:52.307Z] ========================================
[2026-01-21T06:17:52.307Z] Environment Variables Check:
[2026-01-21T06:17:52.307Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T06:17:52.307Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T06:17:52.307Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T06:17:52.308Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T06:17:52.308Z] 
Multi-Channel Configuration:
[2026-01-21T06:17:52.308Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T06:17:52.308Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T06:17:52.308Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T06:17:52.308Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T06:17:52.308Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T06:17:52.308Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T06:17:52.308Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T06:17:52.308Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T06:17:52.308Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T06:17:52.308Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T06:17:52.309Z] 
Data Files Check:
[2026-01-21T06:17:52.310Z] .github/data/new_jobs.json: ✅ Exists (10 items, 134421 bytes)
[2026-01-21T06:17:52.321Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1777993 bytes)
[2026-01-21T06:17:52.321Z] 
========================================
[2026-01-21T06:17:52.321Z] Starting Enhanced Discord Bot...
[2026-01-21T06:17:52.321Z] ========================================
[2026-01-21T06:17:52.845Z] [BOT] ✅ Loaded V2 database: 3127 jobs
[2026-01-21T06:17:53.590Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T06:17:53.591Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T06:17:53.591Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T06:17:53.705Z] [BOT] ✅ Loaded pending queue: 2749 total (2729 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer at Q2
[2026-01-21T06:17:53.710Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T06:17:53.710Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T06:17:53.711Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T06:17:53.711Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T06:17:53.711Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T06:17:53.715Z] [BOT] 📌 Posting 4 jobs to #tech-jobs
[2026-01-21T06:17:53.715Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Q2
[2026-01-21T06:17:53.716Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:17:53.732Z] [BOT ERROR] (node:2390) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T06:17:53.945Z] [BOT] ✅ Posted message: Software Engineer @ Q2 in #tech-jobs
  ✅ Industry: Software Engineer @ Q2
[2026-01-21T06:17:53.946Z] [BOT] 💾 Added channel posting: Software Engineer @ Q2 → category channel (1 total channels)
[2026-01-21T06:17:53.946Z] [BOT] 💾 BEFORE ARCHIVING: 3128 jobs in database
[2026-01-21T06:17:53.949Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T06:17:53.954Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T06:17:53.954Z] [BOT] ✅ Archiving complete: 10 archived, 3118 active
[2026-01-21T06:17:53.974Z] [BOT] 💾 Saved posted_jobs.json: 3118 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:17:55.476Z] [BOT] 💾 Marked as posted: Software Engineer @ Q2 (instance #1)
[2026-01-21T06:17:55.477Z] [BOT] 💾 BEFORE ARCHIVING: 3119 jobs in database
[2026-01-21T06:17:55.479Z] [BOT] ✅ No jobs to archive (all 3119 jobs within 7-day window)
[2026-01-21T06:17:55.496Z] [BOT] 💾 Saved posted_jobs.json: 3119 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:17:55.497Z] [BOT] 📍 [ROUTING] "Engineering Manager, Networking" @ anthropic
[2026-01-21T06:17:55.497Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:17:56.013Z] [BOT] ✅ Posted message: Engineering Manager, Networking @ anthropic in #tech-jobs
  ✅ Industry: Engineering Manager, Networking @ anthropic
[2026-01-21T06:17:56.013Z] [BOT] 💾 Added channel posting: Engineering Manager, Networking @ anthropic → category channel (1 total channels)
[2026-01-21T06:17:56.013Z] [BOT] 💾 BEFORE ARCHIVING: 3120 jobs in database
[2026-01-21T06:17:56.015Z] [BOT] ✅ No jobs to archive (all 3120 jobs within 7-day window)
[2026-01-21T06:17:56.036Z] [BOT] 💾 Saved posted_jobs.json: 3120 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:17:57.539Z] [BOT] 💾 Marked as posted: Engineering Manager, Networking @ anthropic (instance #1)
[2026-01-21T06:17:57.539Z] [BOT] 💾 BEFORE ARCHIVING: 3121 jobs in database
[2026-01-21T06:17:57.541Z] [BOT] ✅ No jobs to archive (all 3121 jobs within 7-day window)
[2026-01-21T06:17:57.561Z] [BOT] 💾 Saved posted_jobs.json: 3121 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:17:57.562Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Life Sciences" @ anthropic
[2026-01-21T06:17:57.562Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:17:57.739Z] [BOT] ✅ Posted message: Enterprise Account Executive, Life Sciences @ anthropic in #tech-jobs
  ✅ Industry: Enterprise Account Executive, Life Sciences @ anthropic
[2026-01-21T06:17:57.740Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, Life Sciences @ anthropic → category channel (1 total channels)
[2026-01-21T06:17:57.740Z] [BOT] 💾 BEFORE ARCHIVING: 3122 jobs in database
[2026-01-21T06:17:57.742Z] [BOT] ✅ No jobs to archive (all 3122 jobs within 7-day window)
[2026-01-21T06:17:57.762Z] [BOT] 💾 Saved posted_jobs.json: 3122 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:17:59.263Z] [BOT] 💾 Marked as posted: Enterprise Account Executive, Life Sciences @ anthropic (instance #1)
[2026-01-21T06:17:59.264Z] [BOT] 💾 BEFORE ARCHIVING: 3123 jobs in database
[2026-01-21T06:17:59.265Z] [BOT] ✅ No jobs to archive (all 3123 jobs within 7-day window)
[2026-01-21T06:17:59.283Z] [BOT] 💾 Saved posted_jobs.json: 3123 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:17:59.284Z] [BOT] 📍 [ROUTING] "Associate Professional Application Programmer" @ ORG_5cdab806 Technology
[2026-01-21T06:17:59.284Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:17:59.460Z] [BOT] ✅ Posted message: Associate Professional Application Programmer @ ORG_5cdab806 Technology in #tech-jobs
[2026-01-21T06:17:59.460Z] [BOT] ✅ Industry: Associate Professional Application Programmer @ ORG_5cdab806 Technology
[2026-01-21T06:17:59.461Z] [BOT] 💾 Added channel posting: Associate Professional Application Programmer @ ORG_5cdab806 Technology → category channel (1 total channels)
[2026-01-21T06:17:59.461Z] [BOT] 💾 BEFORE ARCHIVING: 3124 jobs in database
[2026-01-21T06:17:59.463Z] [BOT] ✅ No jobs to archive (all 3124 jobs within 7-day window)
[2026-01-21T06:17:59.481Z] [BOT] 💾 Saved posted_jobs.json: 3124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:01.254Z] [BOT] ✅ Posted message: Associate Professional Application Programmer @ ORG_5cdab806 Technology in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T06:18:01.254Z] [BOT] 💾 Added channel posting: Associate Professional Application Programmer @ ORG_5cdab806 Technology → location channel (2 total channels)
[2026-01-21T06:18:01.255Z] [BOT] 💾 BEFORE ARCHIVING: 3124 jobs in database
[2026-01-21T06:18:01.256Z] [BOT] ✅ No jobs to archive (all 3124 jobs within 7-day window)
[2026-01-21T06:18:01.277Z] [BOT] 💾 Saved posted_jobs.json: 3124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:02.778Z] [BOT] 💾 Marked as posted: Associate Professional Application Programmer @ ORG_5cdab806 Technology (instance #1)
[2026-01-21T06:18:02.779Z] [BOT] 💾 BEFORE ARCHIVING: 3125 jobs in database
[2026-01-21T06:18:02.781Z] [BOT] ✅ No jobs to archive (all 3125 jobs within 7-day window)
[2026-01-21T06:18:02.803Z] [BOT] 💾 Saved posted_jobs.json: 3125 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:05.804Z] [BOT] 📌 Posting 3 jobs to #JID_fb739488
[2026-01-21T06:18:05.804Z] [BOT] 📍 [ROUTING] "Data Engineer" @ airtable
[2026-01-21T06:18:05.804Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T06:18:05.961Z] [BOT] ✅ Posted message: Data Engineer @ airtable in #JID_fb739488
  ✅ Industry: Data Engineer @ airtable
[2026-01-21T06:18:05.962Z] [BOT] 💾 Added channel posting: Data Engineer @ airtable → category channel (1 total channels)
[2026-01-21T06:18:05.962Z] [BOT] 💾 BEFORE ARCHIVING: 3126 jobs in database
[2026-01-21T06:18:05.964Z] [BOT] ✅ No jobs to archive (all 3126 jobs within 7-day window)
[2026-01-21T06:18:05.984Z] [BOT] 💾 Saved posted_jobs.json: 3126 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:07.486Z] [BOT] 💾 Marked as posted: Data Engineer @ airtable (instance #1)
[2026-01-21T06:18:07.486Z] [BOT] 💾 BEFORE ARCHIVING: 3127 jobs in database
[2026-01-21T06:18:07.488Z] [BOT] ✅ No jobs to archive (all 3127 jobs within 7-day window)
[2026-01-21T06:18:07.510Z] [BOT] 💾 Saved posted_jobs.json: 3127 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:07.510Z] [BOT] 📍 [ROUTING] "Compute Analyst" @ anthropic
[2026-01-21T06:18:07.510Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-21T06:18:07.628Z] [BOT] ✅ Posted message: Compute Analyst @ anthropic in #JID_fb739488
  ✅ Industry: Compute Analyst @ anthropic
[2026-01-21T06:18:07.629Z] [BOT] 💾 Added channel posting: Compute Analyst @ anthropic → category channel (1 total channels)
[2026-01-21T06:18:07.629Z] [BOT] 💾 BEFORE ARCHIVING: 3128 jobs in database
[2026-01-21T06:18:07.631Z] [BOT] ✅ No jobs to archive (all 3128 jobs within 7-day window)
[2026-01-21T06:18:07.650Z] [BOT] 💾 Saved posted_jobs.json: 3128 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:09.153Z] [BOT] 💾 Marked as posted: Compute Analyst @ anthropic (instance #1)
[2026-01-21T06:18:09.153Z] [BOT] 💾 BEFORE ARCHIVING: 3129 jobs in database
[2026-01-21T06:18:09.155Z] [BOT] ✅ No jobs to archive (all 3129 jobs within 7-day window)
[2026-01-21T06:18:09.174Z] [BOT] 💾 Saved posted_jobs.json: 3129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:09.174Z] [BOT] 📍 [ROUTING] "Power BI Analyst" @ ORG_9d38443e of Texas - Austin
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T06:18:09.413Z] [BOT] ✅ Posted message: Power BI Analyst @ ORG_9d38443e of Texas - Austin in #JID_fb739488
[2026-01-21T06:18:09.413Z] [BOT] ✅ Industry: Power BI Analyst @ ORG_9d38443e of Texas - Austin
[2026-01-21T06:18:09.414Z] [BOT] 💾 Added channel posting: Power BI Analyst @ ORG_9d38443e of Texas - Austin → category channel (1 total channels)
[2026-01-21T06:18:09.414Z] [BOT] 💾 BEFORE ARCHIVING: 3130 jobs in database
[2026-01-21T06:18:09.416Z] [BOT] ✅ No jobs to archive (all 3130 jobs within 7-day window)
[2026-01-21T06:18:09.435Z] [BOT] 💾 Saved posted_jobs.json: 3130 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:10.936Z] [BOT] 💾 Marked as posted: Power BI Analyst @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-21T06:18:10.936Z] [BOT] 💾 BEFORE ARCHIVING: 3131 jobs in database
[2026-01-21T06:18:10.938Z] [BOT] ✅ No jobs to archive (all 3131 jobs within 7-day window)
[2026-01-21T06:18:10.957Z] [BOT] 💾 Saved posted_jobs.json: 3131 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:13.958Z] [BOT] 📌 Posting 3 jobs to #ai-jobs
[2026-01-21T06:18:13.958Z] [BOT] 📍 [ROUTING] "Data Scientist - Podcast Monetization" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T06:18:13.958Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T06:18:14.145Z] [BOT] ✅ Posted message: Data Scientist - Podcast Monetization @ spotify in #ai-jobs
[2026-01-21T06:18:14.145Z] [BOT] ✅ Industry: Data Scientist - Podcast Monetization @ spotify
[2026-01-21T06:18:14.146Z] [BOT] 💾 Added channel posting: Data Scientist - Podcast Monetization @ spotify → category channel (1 total channels)
[2026-01-21T06:18:14.146Z] [BOT] 💾 BEFORE ARCHIVING: 3132 jobs in database
[2026-01-21T06:18:14.148Z] [BOT] ✅ No jobs to archive (all 3132 jobs within 7-day window)
[2026-01-21T06:18:14.168Z] [BOT] 💾 Saved posted_jobs.json: 3132 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:15.786Z] [BOT] ✅ Posted message: Data Scientist - Podcast Monetization @ spotify in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T06:18:15.786Z] [BOT] 💾 Added channel posting: Data Scientist - Podcast Monetization @ spotify → location channel (2 total channels)
[2026-01-21T06:18:15.786Z] [BOT] 💾 BEFORE ARCHIVING: 3132 jobs in database
[2026-01-21T06:18:15.788Z] [BOT] ✅ No jobs to archive (all 3132 jobs within 7-day window)
[2026-01-21T06:18:15.808Z] [BOT] 💾 Saved posted_jobs.json: 3132 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:17.310Z] [BOT] 💾 Marked as posted: Data Scientist - Podcast Monetization @ spotify (instance #1)
[2026-01-21T06:18:17.310Z] [BOT] 💾 BEFORE ARCHIVING: 3133 jobs in database
[2026-01-21T06:18:17.312Z] [BOT] ✅ No jobs to archive (all 3133 jobs within 7-day window)
[2026-01-21T06:18:17.330Z] [BOT] 💾 Saved posted_jobs.json: 3133 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:17.330Z] [BOT] 📍 [ROUTING] "Enablement Operations Senior Associate" @ datadog
   Category: AI (matched: "AI/ML")
[2026-01-21T06:18:17.330Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T06:18:19.123Z] [BOT] ✅ Posted message: Enablement Operations Senior Associate @ datadog in #ai-jobs
  ✅ Industry: Enablement Operations Senior Associate @ datadog
[2026-01-21T06:18:19.124Z] [BOT] 💾 Added channel posting: Enablement Operations Senior Associate @ datadog → category channel (1 total channels)
[2026-01-21T06:18:19.124Z] [BOT] 💾 BEFORE ARCHIVING: 3134 jobs in database
[2026-01-21T06:18:19.126Z] [BOT] ✅ No jobs to archive (all 3134 jobs within 7-day window)
[2026-01-21T06:18:19.145Z] [BOT] 💾 Saved posted_jobs.json: 3134 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:20.784Z] [BOT] ✅ Posted message: Enablement Operations Senior Associate @ datadog in #JID_98d4f0de
[2026-01-21T06:18:20.785Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T06:18:20.785Z] [BOT] 💾 Added channel posting: Enablement Operations Senior Associate @ datadog → location channel (2 total channels)
[2026-01-21T06:18:20.785Z] [BOT] 💾 BEFORE ARCHIVING: 3134 jobs in database
[2026-01-21T06:18:20.787Z] [BOT] ✅ No jobs to archive (all 3134 jobs within 7-day window)
[2026-01-21T06:18:20.807Z] [BOT] 💾 Saved posted_jobs.json: 3134 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:22.308Z] [BOT] 💾 Marked as posted: Enablement Operations Senior Associate @ datadog (instance #1)
[2026-01-21T06:18:22.308Z] [BOT] 💾 BEFORE ARCHIVING: 3135 jobs in database
[2026-01-21T06:18:22.310Z] [BOT] ✅ No jobs to archive (all 3135 jobs within 7-day window)
[2026-01-21T06:18:22.330Z] [BOT] 💾 Saved posted_jobs.json: 3135 active jobs
[2026-01-21T06:18:22.330Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:22.331Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Full-Stack" @ brex
[2026-01-21T06:18:22.331Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T06:18:22.440Z] [BOT] ✅ Posted message: Senior Software Engineer, Full-Stack @ brex in #ai-jobs
  ✅ Industry: Senior Software Engineer, Full-Stack @ brex
[2026-01-21T06:18:22.440Z] [BOT] 💾 Added channel posting: Senior Software Engineer, Full-Stack @ brex → category channel (1 total channels)
[2026-01-21T06:18:22.440Z] [BOT] 💾 BEFORE ARCHIVING: 3136 jobs in database
[2026-01-21T06:18:22.443Z] [BOT] ✅ No jobs to archive (all 3136 jobs within 7-day window)
[2026-01-21T06:18:22.464Z] [BOT] 💾 Saved posted_jobs.json: 3136 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:23.966Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Full-Stack @ brex (instance #1)
[2026-01-21T06:18:23.966Z] [BOT] 💾 BEFORE ARCHIVING: 3137 jobs in database
[2026-01-21T06:18:23.968Z] [BOT] ✅ No jobs to archive (all 3137 jobs within 7-day window)
[2026-01-21T06:18:23.985Z] [BOT] 💾 Saved posted_jobs.json: 3137 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:18:26.987Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T06:18:26.987Z] [BOT] ⏭️  Skipping duplicate: JID_68fe2f2f-engineer_req-11939 (posted within 7 days)
[2026-01-21T06:18:26.987Z] [BOT] ⏭️  Skipping duplicate: JID_7548c722 (posted within 7 days)
[2026-01-21T06:18:26.988Z] [BOT] ⏭️  Skipping duplicate: JID_aa5374fc (posted within 7 days)
[2026-01-21T06:18:26.988Z] [BOT] ⏭️  Skipping duplicate: JID_4342582a (posted within 7 days)
[2026-01-21T06:18:26.988Z] [BOT] ⏭️  Skipping duplicate: JID_3f7908dd (posted within 7 days)
[2026-01-21T06:18:26.988Z] [BOT] ⏭️  Skipping duplicate: JID_33e8b710 (posted within 7 days)
[2026-01-21T06:18:26.988Z] [BOT] ⏭️  Skipping duplicate: JID_73b1628e (posted within 7 days)
[2026-01-21T06:18:26.988Z] [BOT] ⏭️  Skipping duplicate: JID_91ea96e8 (posted within 7 days)
[2026-01-21T06:18:26.989Z] [BOT] ⏭️  Skipping duplicate: JID_ae4004a7-programmer_51569293 (posted within 7 days)
[2026-01-21T06:18:26.989Z] [BOT] ⏭️  Skipping duplicate: JID_8a0ebdcc-analyst_r_00044081-1 (posted within 7 days)
[2026-01-21T06:18:27.093Z] [BOT] ✅ Loaded pending queue: 2749 total (2729 pending, 20 enriched, 0 posted)
[2026-01-21T06:18:27.275Z] [BOT] ✅ Saved pending queue: 2749 total (2729 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T06:18:27.342Z] [BOT] 📂 Loaded 5695 existing routing entries
[2026-01-21T06:18:27.417Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5705
   Timestamp: 2026-01-21T06:18:27.393Z
[2026-01-21T06:18:27.418Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 13
[2026-01-21T06:18:27.418Z] [BOT] Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-21T06:18:27.418Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-21T06:18:27.418Z] [BOT] Total posts: 13
   Channels used: 4
   Top channels:
     1. #tech-jobs: 4 posts
     2. #JID_98d4f0de: 3 posts
     3. #JID_fb739488: 3 posts
     4. #ai-jobs: 3 posts
[2026-01-21T06:18:27.418Z] [BOT] [STATS] Channel stats saved
[2026-01-21T06:18:29.444Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2390) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*