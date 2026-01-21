# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T04:54:47.659Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T04:54:07.439Z] ========================================
[2026-01-21T04:54:07.441Z] Discord Bot Execution Log
[2026-01-21T04:54:07.441Z] Environment: GitHub Actions
[2026-01-21T04:54:07.441Z] Node Version: v20.19.6
[2026-01-21T04:54:07.441Z] ========================================
[2026-01-21T04:54:07.441Z] Environment Variables Check:
[2026-01-21T04:54:07.441Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T04:54:07.442Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T04:54:07.442Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T04:54:07.442Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T04:54:07.442Z] 
Multi-Channel Configuration:
[2026-01-21T04:54:07.442Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T04:54:07.442Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T04:54:07.442Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T04:54:07.442Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T04:54:07.442Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T04:54:07.442Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T04:54:07.442Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T04:54:07.442Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T04:54:07.443Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T04:54:07.443Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T04:54:07.443Z] 
Data Files Check:
[2026-01-21T04:54:07.444Z] .github/data/new_jobs.json: ✅ Exists (10 items, 93958 bytes)
[2026-01-21T04:54:07.455Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1749749 bytes)
[2026-01-21T04:54:07.455Z] 
========================================
[2026-01-21T04:54:07.455Z] Starting Enhanced Discord Bot...
[2026-01-21T04:54:07.456Z] ========================================
[2026-01-21T04:54:08.021Z] [BOT] ✅ Loaded V2 database: 3090 jobs
[2026-01-21T04:54:08.542Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T04:54:08.543Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T04:54:08.543Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T04:54:08.661Z] [BOT] ✅ Loaded pending queue: 2742 total (2722 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Global Technology Partner Lead at anthropic
[2026-01-21T04:54:08.666Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T04:54:08.667Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T04:54:08.667Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T04:54:08.668Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T04:54:08.668Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T04:54:08.672Z] [BOT] 📌 Posting 2 jobs to #finance-jobs
[2026-01-21T04:54:08.672Z] [BOT] 📍 [ROUTING] "Global Technology Partner Lead" @ anthropic
[2026-01-21T04:54:08.673Z] [BOT] Category: FINANCE (matched: "investment")
   Channel: finance-jobs (1462...4023)
[2026-01-21T04:54:08.677Z] [BOT ERROR] (node:2488) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T04:54:08.804Z] [BOT] ✅ Posted message: Global Technology Partner Lead @ anthropic in #finance-jobs
[2026-01-21T04:54:08.804Z] [BOT] ✅ Industry: Global Technology Partner Lead @ anthropic
[2026-01-21T04:54:08.805Z] [BOT] 💾 Added channel posting: Global Technology Partner Lead @ anthropic → category channel (1 total channels)
[2026-01-21T04:54:08.805Z] [BOT] 💾 BEFORE ARCHIVING: 3091 jobs in database
[2026-01-21T04:54:08.808Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T04:54:08.813Z] [BOT] 📦 Archived 15 jobs to 2026-01.json (15 total in archive)
[2026-01-21T04:54:08.813Z] [BOT] ✅ Archiving complete: 15 archived, 3076 active
[2026-01-21T04:54:08.836Z] [BOT] 💾 Saved posted_jobs.json: 3076 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:10.338Z] [BOT] 💾 Marked as posted: Global Technology Partner Lead @ anthropic (instance #1)
[2026-01-21T04:54:10.338Z] [BOT] 💾 BEFORE ARCHIVING: 3077 jobs in database
[2026-01-21T04:54:10.340Z] [BOT] ✅ No jobs to archive (all 3077 jobs within 7-day window)
[2026-01-21T04:54:10.360Z] [BOT] 💾 Saved posted_jobs.json: 3077 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:10.360Z] [BOT] 📍 [ROUTING] "Partner Operations Specialist" @ anthropic
[2026-01-21T04:54:10.360Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T04:54:11.888Z] [BOT] ✅ Posted message: Partner Operations Specialist @ anthropic in #finance-jobs
  ✅ Industry: Partner Operations Specialist @ anthropic
[2026-01-21T04:54:11.889Z] [BOT] 💾 Added channel posting: Partner Operations Specialist @ anthropic → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3078 jobs in database
[2026-01-21T04:54:11.891Z] [BOT] ✅ No jobs to archive (all 3078 jobs within 7-day window)
[2026-01-21T04:54:11.913Z] [BOT] 💾 Saved posted_jobs.json: 3078 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:13.414Z] [BOT] 💾 Marked as posted: Partner Operations Specialist @ anthropic (instance #1)
[2026-01-21T04:54:13.414Z] [BOT] 💾 BEFORE ARCHIVING: 3079 jobs in database
[2026-01-21T04:54:13.416Z] [BOT] ✅ No jobs to archive (all 3079 jobs within 7-day window)
[2026-01-21T04:54:13.437Z] [BOT] 💾 Saved posted_jobs.json: 3079 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:16.437Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T04:54:16.437Z] [BOT] 📍 [ROUTING] "Incentive Compensation System Engineer" @ anthropic
[2026-01-21T04:54:16.437Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T04:54:16.684Z] [BOT] ✅ Posted message: Incentive Compensation System Engineer @ anthropic in #tech-jobs
  ✅ Industry: Incentive Compensation System Engineer @ anthropic
[2026-01-21T04:54:16.684Z] [BOT] 💾 Added channel posting: Incentive Compensation System Engineer @ anthropic → category channel (1 total channels)
[2026-01-21T04:54:16.684Z] [BOT] 💾 BEFORE ARCHIVING: 3080 jobs in database
[2026-01-21T04:54:16.687Z] [BOT] ✅ No jobs to archive (all 3080 jobs within 7-day window)
[2026-01-21T04:54:16.708Z] [BOT] 💾 Saved posted_jobs.json: 3080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:18.209Z] [BOT] 💾 Marked as posted: Incentive Compensation System Engineer @ anthropic (instance #1)
[2026-01-21T04:54:18.209Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-21T04:54:18.212Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-21T04:54:18.235Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:18.236Z] [BOT] 📍 [ROUTING] "Manager of Sales Engineering, Majors/Commercial - AMER" @ vercel
[2026-01-21T04:54:18.236Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T04:54:18.452Z] [BOT] ✅ Posted message: Manager of Sales Engineering, Majors/Commercial - AMER @ vercel in #tech-jobs
[2026-01-21T04:54:18.452Z] [BOT] ✅ Industry: Manager of Sales Engineering, Majors/Commercial - AMER @ vercel
[2026-01-21T04:54:18.453Z] [BOT] 💾 Added channel posting: Manager of Sales Engineering, Majors/Commercial - AMER @ vercel → category channel (1 total channels)
[2026-01-21T04:54:18.453Z] [BOT] 💾 BEFORE ARCHIVING: 3082 jobs in database
[2026-01-21T04:54:18.455Z] [BOT] ✅ No jobs to archive (all 3082 jobs within 7-day window)
[2026-01-21T04:54:18.475Z] [BOT] 💾 Saved posted_jobs.json: 3082 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:19.976Z] [BOT] 💾 Marked as posted: Manager of Sales Engineering, Majors/Commercial - AMER @ vercel (instance #1)
[2026-01-21T04:54:19.977Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-21T04:54:19.979Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-21T04:54:20.001Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:20.002Z] [BOT] 📍 [ROUTING] "Associate Software Engineer (Temporary)" @ ORG_dc008d0e Bros.
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T04:54:20.212Z] [BOT] ✅ Posted message: Associate Software Engineer (Temporary) @ ORG_dc008d0e Bros. in #tech-jobs
[2026-01-21T04:54:20.212Z] [BOT] ✅ Industry: Associate Software Engineer (Temporary) @ ORG_dc008d0e Bros.
[2026-01-21T04:54:20.213Z] [BOT] 💾 Added channel posting: Associate Software Engineer (Temporary) @ ORG_dc008d0e Bros. → category channel (1 total channels)
[2026-01-21T04:54:20.213Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-21T04:54:20.215Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-21T04:54:20.235Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:21.736Z] [BOT] 💾 Marked as posted: Associate Software Engineer (Temporary) @ ORG_dc008d0e Bros. (instance #1)
[2026-01-21T04:54:21.736Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-21T04:54:21.738Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-21T04:54:21.757Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:21.757Z] [BOT] 📍 [ROUTING] "Software Developer, Network Software Associate" @ ORG_9ee5b96f
[2026-01-21T04:54:21.758Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T04:54:21.919Z] [BOT] ✅ Posted message: Software Developer, Network Software Associate @ ORG_9ee5b96f in #tech-jobs
  ✅ Industry: Software Developer, Network Software Associate @ ORG_9ee5b96f
[2026-01-21T04:54:21.919Z] [BOT] 💾 Added channel posting: Software Developer, Network Software Associate @ ORG_9ee5b96f → category channel (1 total channels)
[2026-01-21T04:54:21.919Z] [BOT] 💾 BEFORE ARCHIVING: 3086 jobs in database
[2026-01-21T04:54:21.921Z] [BOT] ✅ No jobs to archive (all 3086 jobs within 7-day window)
[2026-01-21T04:54:21.940Z] [BOT] 💾 Saved posted_jobs.json: 3086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:23.441Z] [BOT] 💾 Marked as posted: Software Developer, Network Software Associate @ ORG_9ee5b96f (instance #1)
[2026-01-21T04:54:23.441Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-21T04:54:23.443Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-21T04:54:23.463Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:23.463Z] [BOT] 📍 [ROUTING] "Junior Product Software Engineer" @ ORG_d6d2009d
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T04:54:23.621Z] [BOT] ✅ Posted message: Junior Product Software Engineer @ ORG_d6d2009d in #tech-jobs
  ✅ Industry: Junior Product Software Engineer @ ORG_d6d2009d
[2026-01-21T04:54:23.622Z] [BOT] 💾 Added channel posting: Junior Product Software Engineer @ ORG_d6d2009d → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3088 jobs in database
[2026-01-21T04:54:23.624Z] [BOT] ✅ No jobs to archive (all 3088 jobs within 7-day window)
[2026-01-21T04:54:23.644Z] [BOT] 💾 Saved posted_jobs.json: 3088 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:25.391Z] [BOT] ✅ Posted message: Junior Product Software Engineer @ ORG_d6d2009d in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T04:54:25.391Z] [BOT] 💾 Added channel posting: Junior Product Software Engineer @ ORG_d6d2009d → location channel (2 total channels)
[2026-01-21T04:54:25.391Z] [BOT] 💾 BEFORE ARCHIVING: 3088 jobs in database
[2026-01-21T04:54:25.393Z] [BOT] ✅ No jobs to archive (all 3088 jobs within 7-day window)
[2026-01-21T04:54:25.412Z] [BOT] 💾 Saved posted_jobs.json: 3088 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:26.915Z] [BOT] 💾 Marked as posted: Junior Product Software Engineer @ ORG_d6d2009d (instance #1)
[2026-01-21T04:54:26.915Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-21T04:54:26.917Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-21T04:54:26.936Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:29.936Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-21T04:54:29.936Z] [BOT] 📍 [ROUTING] "FP&A Analyst, Strategic Planning" @ spotify
   Category: AI (matched: "artificial intelligence")
[2026-01-21T04:54:29.936Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T04:54:30.102Z] [BOT] ✅ Posted message: FP&A Analyst, Strategic Planning @ spotify in #ai-jobs
[2026-01-21T04:54:30.102Z] [BOT] ✅ Industry: FP&A Analyst, Strategic Planning @ spotify
[2026-01-21T04:54:30.103Z] [BOT] 💾 Added channel posting: FP&A Analyst, Strategic Planning @ spotify → category channel (1 total channels)
[2026-01-21T04:54:30.103Z] [BOT] 💾 BEFORE ARCHIVING: 3090 jobs in database
[2026-01-21T04:54:30.105Z] [BOT] ✅ No jobs to archive (all 3090 jobs within 7-day window)
[2026-01-21T04:54:30.125Z] [BOT] 💾 Saved posted_jobs.json: 3090 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:31.793Z] [BOT] ✅ Posted message: FP&A Analyst, Strategic Planning @ spotify in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T04:54:31.793Z] [BOT] 💾 Added channel posting: FP&A Analyst, Strategic Planning @ spotify → location channel (2 total channels)
[2026-01-21T04:54:31.793Z] [BOT] 💾 BEFORE ARCHIVING: 3090 jobs in database
[2026-01-21T04:54:31.796Z] [BOT] ✅ No jobs to archive (all 3090 jobs within 7-day window)
[2026-01-21T04:54:31.817Z] [BOT] 💾 Saved posted_jobs.json: 3090 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:33.319Z] [BOT] 💾 Marked as posted: FP&A Analyst, Strategic Planning @ spotify (instance #1)
[2026-01-21T04:54:33.319Z] [BOT] 💾 BEFORE ARCHIVING: 3091 jobs in database
[2026-01-21T04:54:33.321Z] [BOT] ✅ No jobs to archive (all 3091 jobs within 7-day window)
[2026-01-21T04:54:33.340Z] [BOT] 💾 Saved posted_jobs.json: 3091 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:33.340Z] [BOT] 📍 [ROUTING] "AI Developer I- Call Center" @ ORG_a151ceb1 Financial Bank
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T04:54:33.531Z] [BOT] ✅ Posted message: AI Developer I- Call Center @ ORG_a151ceb1 Financial Bank in #ai-jobs
  ✅ Industry: AI Developer I- Call Center @ ORG_a151ceb1 Financial Bank
[2026-01-21T04:54:33.532Z] [BOT] 💾 Added channel posting: AI Developer I- Call Center @ ORG_a151ceb1 Financial Bank → category channel (1 total channels)
[2026-01-21T04:54:33.532Z] [BOT] 💾 BEFORE ARCHIVING: 3092 jobs in database
[2026-01-21T04:54:33.534Z] [BOT] ✅ No jobs to archive (all 3092 jobs within 7-day window)
[2026-01-21T04:54:33.556Z] [BOT] 💾 Saved posted_jobs.json: 3092 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:35.058Z] [BOT] 💾 Marked as posted: AI Developer I- Call Center @ ORG_a151ceb1 Financial Bank (instance #1)
[2026-01-21T04:54:35.059Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-21T04:54:35.061Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-21T04:54:35.080Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:38.082Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T04:54:38.082Z] [BOT] 📍 [ROUTING] "Data Scientist I - Hybrid" @ ORG_96324500
[2026-01-21T04:54:38.082Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T04:54:38.348Z] [BOT] ✅ Posted message: Data Scientist I - Hybrid @ ORG_96324500 in #JID_fb739488
[2026-01-21T04:54:38.348Z] [BOT] ✅ Industry: Data Scientist I - Hybrid @ ORG_96324500
[2026-01-21T04:54:38.349Z] [BOT] 💾 Added channel posting: Data Scientist I - Hybrid @ ORG_96324500 → category channel (1 total channels)
[2026-01-21T04:54:38.349Z] [BOT] 💾 BEFORE ARCHIVING: 3094 jobs in database
[2026-01-21T04:54:38.351Z] [BOT] ✅ No jobs to archive (all 3094 jobs within 7-day window)
[2026-01-21T04:54:38.372Z] [BOT] 💾 Saved posted_jobs.json: 3094 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:40.012Z] [BOT] ✅ Posted message: Data Scientist I - Hybrid @ ORG_96324500 in #JID_98d4f0de
[2026-01-21T04:54:40.012Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T04:54:40.012Z] [BOT] 💾 Added channel posting: Data Scientist I - Hybrid @ ORG_96324500 → location channel (2 total channels)
[2026-01-21T04:54:40.012Z] [BOT] 💾 BEFORE ARCHIVING: 3094 jobs in database
[2026-01-21T04:54:40.014Z] [BOT] ✅ No jobs to archive (all 3094 jobs within 7-day window)
[2026-01-21T04:54:40.033Z] [BOT] 💾 Saved posted_jobs.json: 3094 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:41.535Z] [BOT] 💾 Marked as posted: Data Scientist I - Hybrid @ ORG_96324500 (instance #1)
[2026-01-21T04:54:41.535Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-21T04:54:41.537Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-21T04:54:41.557Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T04:54:44.558Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T04:54:44.559Z] [BOT] ⏭️  Skipping duplicate: JID_894b5313 (posted within 7 days)
[2026-01-21T04:54:44.559Z] [BOT] ⏭️  Skipping duplicate: JID_9fb079d8 (posted within 7 days)
[2026-01-21T04:54:44.559Z] [BOT] ⏭️  Skipping duplicate: JID_b606c14e (posted within 7 days)
[2026-01-21T04:54:44.559Z] [BOT] ⏭️  Skipping duplicate: JID_92d01207 (posted within 7 days)
[2026-01-21T04:54:44.560Z] [BOT] ⏭️  Skipping duplicate: JID_3e9d0ef2 (posted within 7 days)
[2026-01-21T04:54:44.560Z] [BOT] ⏭️  Skipping duplicate: JID_ad33ad88-radian_external_career_site-JID_af066355-hybrid_r20250160 (posted within 7 days)
[2026-01-21T04:54:44.560Z] [BOT] ⏭️  Skipping duplicate: JID_5468cf71-first_financial_bank-JID_a7a52860-center_jr102406 (posted within 7 days)
[2026-01-21T04:54:44.560Z] [BOT] ⏭️  Skipping duplicate: JID_ee7c7aa1-_r000101071 (posted within 7 days)
[2026-01-21T04:54:44.560Z] [BOT] ⏭️  Skipping duplicate: JID_7b79f1e0 (posted within 7 days)
[2026-01-21T04:54:44.560Z] [BOT] ⏭️  Skipping duplicate: JID_672289ac (posted within 7 days)
[2026-01-21T04:54:44.666Z] [BOT] ✅ Loaded pending queue: 2742 total (2722 pending, 20 enriched, 0 posted)
[2026-01-21T04:54:44.852Z] [BOT] ✅ Saved pending queue: 2742 total (2722 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T04:54:44.921Z] [BOT] 📂 Loaded 5645 existing routing entries
[2026-01-21T04:54:44.996Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5655
   Timestamp: 2026-01-21T04:54:44.973Z
[2026-01-21T04:54:44.997Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T04:54:44.997Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-21T04:54:44.998Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 6
   Top channels:
     1. #tech-jobs: 5 posts
     2. #finance-jobs: 2 posts
     3. #ai-jobs: 2 posts
     4. #JID_98d4f0de: 2 posts
     5. #JID_ead674af: 1 posts
[STATS] Channel stats saved
[2026-01-21T04:54:47.025Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2488) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*