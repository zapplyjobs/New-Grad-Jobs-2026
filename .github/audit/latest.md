# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T03:33:21.688Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T03:32:42.767Z] ========================================
[2026-01-21T03:32:42.769Z] Discord Bot Execution Log
[2026-01-21T03:32:42.769Z] Environment: GitHub Actions
[2026-01-21T03:32:42.769Z] Node Version: v20.19.6
[2026-01-21T03:32:42.769Z] ========================================
[2026-01-21T03:32:42.769Z] Environment Variables Check:
[2026-01-21T03:32:42.769Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T03:32:42.769Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T03:32:42.769Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T03:32:42.770Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T03:32:42.770Z] 
Multi-Channel Configuration:
[2026-01-21T03:32:42.770Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T03:32:42.770Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T03:32:42.770Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T03:32:42.770Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T03:32:42.770Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T03:32:42.770Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T03:32:42.770Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T03:32:42.770Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T03:32:42.770Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T03:32:42.770Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T03:32:42.770Z] 
Data Files Check:
[2026-01-21T03:32:42.772Z] .github/data/new_jobs.json: ✅ Exists (10 items, 135574 bytes)
[2026-01-21T03:32:42.783Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1739004 bytes)
[2026-01-21T03:32:42.783Z] 
========================================
[2026-01-21T03:32:42.783Z] Starting Enhanced Discord Bot...
[2026-01-21T03:32:42.783Z] ========================================
[2026-01-21T03:32:43.327Z] [BOT] ✅ Loaded V2 database: 3089 jobs
[2026-01-21T03:32:43.914Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T03:32:43.915Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T03:32:43.915Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T03:32:44.039Z] [BOT] ✅ Loaded pending queue: 2732 total (2712 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Sr. Tradeshow and Event Marketing Manager at verkada
[2026-01-21T03:32:44.044Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T03:32:44.045Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T03:32:44.046Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-21T03:32:44.046Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-21T03:32:44.046Z] [BOT] - Android Sales Expert @ 2020 Companies: sf, alameda
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T03:32:44.050Z] [BOT] 📌 Posting 4 jobs to #finance-jobs
[2026-01-21T03:32:44.050Z] [BOT] 📍 [ROUTING] "Sr. Tradeshow and Event Marketing Manager" @ verkada
[2026-01-21T03:32:44.051Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-21T03:32:44.055Z] [BOT ERROR] (node:3047) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T03:32:44.340Z] [BOT] ✅ Posted message: Sr. Tradeshow and Event Marketing Manager @ verkada in #finance-jobs
[2026-01-21T03:32:44.340Z] [BOT] ✅ Industry: Sr. Tradeshow and Event Marketing Manager @ verkada
[2026-01-21T03:32:44.341Z] [BOT] 💾 Added channel posting: Sr. Tradeshow and Event Marketing Manager @ verkada → category channel (1 total channels)
[2026-01-21T03:32:44.341Z] [BOT] 💾 BEFORE ARCHIVING: 3090 jobs in database
[2026-01-21T03:32:44.344Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T03:32:44.348Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-21T03:32:44.348Z] [BOT] ✅ Archiving complete: 20 archived, 3070 active
[2026-01-21T03:32:44.371Z] [BOT] 💾 Saved posted_jobs.json: 3070 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:32:46.085Z] [BOT] ✅ Posted message: Sr. Tradeshow and Event Marketing Manager @ verkada in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T03:32:46.085Z] [BOT] 💾 Added channel posting: Sr. Tradeshow and Event Marketing Manager @ verkada → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3070 jobs in database
[2026-01-21T03:32:46.087Z] [BOT] ✅ No jobs to archive (all 3070 jobs within 7-day window)
[2026-01-21T03:32:46.105Z] [BOT] 💾 Saved posted_jobs.json: 3070 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:32:47.605Z] [BOT] 💾 Marked as posted: Sr. Tradeshow and Event Marketing Manager @ verkada (instance #1)
[2026-01-21T03:32:47.606Z] [BOT] 💾 BEFORE ARCHIVING: 3071 jobs in database
[2026-01-21T03:32:47.608Z] [BOT] ✅ No jobs to archive (all 3071 jobs within 7-day window)
[2026-01-21T03:32:47.628Z] [BOT] 💾 Saved posted_jobs.json: 3071 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:32:47.628Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (Corp)" @ verkada
[2026-01-21T03:32:47.629Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-21T03:32:47.896Z] [BOT] ✅ Posted message: Strategic Account Executive (Corp) @ verkada in #finance-jobs
[2026-01-21T03:32:47.896Z] [BOT] ✅ Industry: Strategic Account Executive (Corp) @ verkada
[2026-01-21T03:32:47.897Z] [BOT] 💾 Added channel posting: Strategic Account Executive (Corp) @ verkada → category channel (1 total channels)
[2026-01-21T03:32:47.897Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-21T03:32:47.899Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-21T03:32:47.920Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:32:49.421Z] [BOT] 💾 Marked as posted: Strategic Account Executive (Corp) @ verkada (instance #1)
[2026-01-21T03:32:49.422Z] [BOT] 💾 BEFORE ARCHIVING: 3073 jobs in database
[2026-01-21T03:32:49.424Z] [BOT] ✅ No jobs to archive (all 3073 jobs within 7-day window)
[2026-01-21T03:32:49.443Z] [BOT] 💾 Saved posted_jobs.json: 3073 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:32:49.444Z] [BOT] 📍 [ROUTING] "Tradeshow Associate" @ verkada
[2026-01-21T03:32:49.444Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-21T03:32:49.620Z] [BOT] ✅ Posted message: Tradeshow Associate @ verkada in #finance-jobs
[2026-01-21T03:32:49.620Z] [BOT] ✅ Industry: Tradeshow Associate @ verkada
[2026-01-21T03:32:49.620Z] [BOT] 💾 Added channel posting: Tradeshow Associate @ verkada → category channel (1 total channels)
[2026-01-21T03:32:49.621Z] [BOT] 💾 BEFORE ARCHIVING: 3074 jobs in database
[2026-01-21T03:32:49.622Z] [BOT] ✅ No jobs to archive (all 3074 jobs within 7-day window)
[2026-01-21T03:32:49.640Z] [BOT] 💾 Saved posted_jobs.json: 3074 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:32:51.348Z] [BOT] ✅ Posted message: Tradeshow Associate @ verkada in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T03:32:51.349Z] [BOT] 💾 Added channel posting: Tradeshow Associate @ verkada → location channel (2 total channels)
[2026-01-21T03:32:51.349Z] [BOT] 💾 BEFORE ARCHIVING: 3074 jobs in database
[2026-01-21T03:32:51.351Z] [BOT] ✅ No jobs to archive (all 3074 jobs within 7-day window)
[2026-01-21T03:32:51.369Z] [BOT] 💾 Saved posted_jobs.json: 3074 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:32:52.870Z] [BOT] 💾 Marked as posted: Tradeshow Associate @ verkada (instance #1)
[2026-01-21T03:32:52.870Z] [BOT] 💾 BEFORE ARCHIVING: 3075 jobs in database
[2026-01-21T03:32:52.872Z] [BOT] ✅ No jobs to archive (all 3075 jobs within 7-day window)
[2026-01-21T03:32:52.894Z] [BOT] 💾 Saved posted_jobs.json: 3075 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:32:52.894Z] [BOT] 📍 [ROUTING] "Strategic Finance Manager, GTM" @ vercel
[2026-01-21T03:32:52.895Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T03:32:53.086Z] [BOT] ✅ Posted message: Strategic Finance Manager, GTM @ vercel in #finance-jobs
  ✅ Industry: Strategic Finance Manager, GTM @ vercel
[2026-01-21T03:32:53.087Z] [BOT] 💾 Added channel posting: Strategic Finance Manager, GTM @ vercel → category channel (1 total channels)
[2026-01-21T03:32:53.087Z] [BOT] 💾 BEFORE ARCHIVING: 3076 jobs in database
[2026-01-21T03:32:53.089Z] [BOT] ✅ No jobs to archive (all 3076 jobs within 7-day window)
[2026-01-21T03:32:53.109Z] [BOT] 💾 Saved posted_jobs.json: 3076 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:32:54.610Z] [BOT] 💾 Marked as posted: Strategic Finance Manager, GTM @ vercel (instance #1)
[2026-01-21T03:32:54.611Z] [BOT] 💾 BEFORE ARCHIVING: 3077 jobs in database
[2026-01-21T03:32:54.613Z] [BOT] ✅ No jobs to archive (all 3077 jobs within 7-day window)
[2026-01-21T03:32:54.634Z] [BOT] 💾 Saved posted_jobs.json: 3077 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:32:57.636Z] [BOT] 📌 Posting 2 jobs to #JID_fb739488
[2026-01-21T03:32:57.636Z] [BOT] 📍 [ROUTING] "Senior Product Design Manager, Growth & Safety" @ discord
[2026-01-21T03:32:57.636Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-21T03:32:57.846Z] [BOT] ✅ Posted message: Senior Product Design Manager, Growth & Safety @ discord in #JID_fb739488
[2026-01-21T03:32:57.847Z] [BOT] ✅ Industry: Senior Product Design Manager, Growth & Safety @ discord
[2026-01-21T03:32:57.847Z] [BOT] 💾 Added channel posting: Senior Product Design Manager, Growth & Safety @ discord → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3078 jobs in database
[2026-01-21T03:32:57.849Z] [BOT] ✅ No jobs to archive (all 3078 jobs within 7-day window)
[2026-01-21T03:32:57.868Z] [BOT] 💾 Saved posted_jobs.json: 3078 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:32:59.372Z] [BOT] 💾 Marked as posted: Senior Product Design Manager, Growth & Safety @ discord (instance #1)
[2026-01-21T03:32:59.372Z] [BOT] 💾 BEFORE ARCHIVING: 3079 jobs in database
[2026-01-21T03:32:59.374Z] [BOT] ✅ No jobs to archive (all 3079 jobs within 7-day window)
[2026-01-21T03:32:59.392Z] [BOT] 💾 Saved posted_jobs.json: 3079 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:32:59.393Z] [BOT] 📍 [ROUTING] "Predoctoral Scholar" @ ORG_9d38443e of Chicago
[2026-01-21T03:32:59.393Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
[2026-01-21T03:32:59.393Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-21T03:32:59.804Z] [BOT] ✅ Posted message: Predoctoral Scholar @ ORG_9d38443e of Chicago in #JID_fb739488
  ✅ Industry: Predoctoral Scholar @ ORG_9d38443e of Chicago
[2026-01-21T03:32:59.804Z] [BOT] 💾 Added channel posting: Predoctoral Scholar @ ORG_9d38443e of Chicago → category channel (1 total channels)
[2026-01-21T03:32:59.804Z] [BOT] 💾 BEFORE ARCHIVING: 3080 jobs in database
[2026-01-21T03:32:59.806Z] [BOT] ✅ No jobs to archive (all 3080 jobs within 7-day window)
[2026-01-21T03:32:59.824Z] [BOT] 💾 Saved posted_jobs.json: 3080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:33:01.326Z] [BOT] 💾 Marked as posted: Predoctoral Scholar @ ORG_9d38443e of Chicago (instance #1)
[2026-01-21T03:33:01.326Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-21T03:33:01.328Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-21T03:33:01.346Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:33:04.347Z] [BOT] 📌 Posting 2 jobs to #tech-jobs
[2026-01-21T03:33:04.347Z] [BOT] 📍 [ROUTING] "Senior Privacy Counsel" @ discord
   Category: TECH (default)
[2026-01-21T03:33:04.347Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T03:33:04.802Z] [BOT] ✅ Posted message: Senior Privacy Counsel @ discord in #tech-jobs
  ✅ Industry: Senior Privacy Counsel @ discord
[2026-01-21T03:33:04.803Z] [BOT] 💾 Added channel posting: Senior Privacy Counsel @ discord → category channel (1 total channels)
[2026-01-21T03:33:04.803Z] [BOT] 💾 BEFORE ARCHIVING: 3082 jobs in database
[2026-01-21T03:33:04.805Z] [BOT] ✅ No jobs to archive (all 3082 jobs within 7-day window)
[2026-01-21T03:33:04.823Z] [BOT] 💾 Saved posted_jobs.json: 3082 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:33:06.325Z] [BOT] 💾 Marked as posted: Senior Privacy Counsel @ discord (instance #1)
[2026-01-21T03:33:06.325Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-21T03:33:06.327Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-21T03:33:06.347Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:33:06.347Z] [BOT] 📍 [ROUTING] "Software Engineer - Manufacturing Integration" @ ORG_e03f7067 Technologies
   Category: TECH (matched: "software")
[2026-01-21T03:33:06.348Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T03:33:06.699Z] [BOT] ✅ Posted message: Software Engineer - Manufacturing Integration @ ORG_e03f7067 Technologies in #tech-jobs
  ✅ Industry: Software Engineer - Manufacturing Integration @ ORG_e03f7067 Technologies
[2026-01-21T03:33:06.699Z] [BOT] 💾 Added channel posting: Software Engineer - Manufacturing Integration @ ORG_e03f7067 Technologies → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-21T03:33:06.702Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-21T03:33:06.719Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:33:08.221Z] [BOT] 💾 Marked as posted: Software Engineer - Manufacturing Integration @ ORG_e03f7067 Technologies (instance #1)
[2026-01-21T03:33:08.221Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-21T03:33:08.223Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-21T03:33:08.242Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:33:11.243Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-21T03:33:11.244Z] [BOT] 📍 [ROUTING] "On‑Site IT Support Engineer (Residential Operations)" @ coinbase
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T03:33:11.244Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T03:33:11.459Z] [BOT] ✅ Posted message: On‑Site IT Support Engineer (Residential Operations) @ coinbase in #ai-jobs
  ✅ Industry: On‑Site IT Support Engineer (Residential Operations) @ coinbase
[2026-01-21T03:33:11.460Z] [BOT] 💾 Added channel posting: On‑Site IT Support Engineer (Residential Operations) @ coinbase → category channel (1 total channels)
[2026-01-21T03:33:11.460Z] [BOT] 💾 BEFORE ARCHIVING: 3086 jobs in database
[2026-01-21T03:33:11.462Z] [BOT] ✅ No jobs to archive (all 3086 jobs within 7-day window)
[2026-01-21T03:33:11.484Z] [BOT] 💾 Saved posted_jobs.json: 3086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:33:12.985Z] [BOT] 💾 Marked as posted: On‑Site IT Support Engineer (Residential Operations) @ coinbase (instance #1)
[2026-01-21T03:33:12.985Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-21T03:33:12.987Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-21T03:33:13.006Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:33:13.007Z] [BOT] 📍 [ROUTING] "AI Software Engineer - Agents - Ace" @ ORG_e03f7067 Technologies
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T03:33:13.007Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T03:33:13.339Z] [BOT] ✅ Posted message: AI Software Engineer - Agents - Ace @ ORG_e03f7067 Technologies in #ai-jobs
[2026-01-21T03:33:13.339Z] [BOT] ✅ Industry: AI Software Engineer - Agents - Ace @ ORG_e03f7067 Technologies
[2026-01-21T03:33:13.339Z] [BOT] 💾 Added channel posting: AI Software Engineer - Agents - Ace @ ORG_e03f7067 Technologies → category channel (1 total channels)
[2026-01-21T03:33:13.340Z] [BOT] 💾 BEFORE ARCHIVING: 3088 jobs in database
[2026-01-21T03:33:13.342Z] [BOT] ✅ No jobs to archive (all 3088 jobs within 7-day window)
[2026-01-21T03:33:13.363Z] [BOT] 💾 Saved posted_jobs.json: 3088 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:33:14.864Z] [BOT] 💾 Marked as posted: AI Software Engineer - Agents - Ace @ ORG_e03f7067 Technologies (instance #1)
💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-21T03:33:14.866Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-21T03:33:14.884Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T03:33:17.885Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T03:33:17.886Z] [BOT] ⏭️  Skipping duplicate: JID_77ee8e7b (posted within 7 days)
[2026-01-21T03:33:17.886Z] [BOT] ⏭️  Skipping duplicate: JID_652438ef (posted within 7 days)
[2026-01-21T03:33:17.886Z] [BOT] ⏭️  Skipping duplicate: JID_dce564fc (posted within 7 days)
[2026-01-21T03:33:17.886Z] [BOT] ⏭️  Skipping duplicate: JID_297ef683 (posted within 7 days)
[2026-01-21T03:33:17.886Z] [BOT] ⏭️  Skipping duplicate: JID_4625054f (posted within 7 days)
[2026-01-21T03:33:17.886Z] [BOT] ⏭️  Skipping duplicate: JID_df37ce36 (posted within 7 days)
[2026-01-21T03:33:17.887Z] [BOT] ⏭️  Skipping duplicate: JID_9ad24dae (posted within 7 days)
[2026-01-21T03:33:17.887Z] [BOT] ⏭️  Skipping duplicate: JID_a58979e1-scholar_jr32397 (posted within 7 days)
[2026-01-21T03:33:17.887Z] [BOT] ⏭️  Skipping duplicate: JID_758e78d3 (posted within 7 days)
[2026-01-21T03:33:17.887Z] [BOT] ⏭️  Skipping duplicate: JID_23021325 (posted within 7 days)
[2026-01-21T03:33:17.989Z] [BOT] ✅ Loaded pending queue: 2732 total (2712 pending, 20 enriched, 0 posted)
[2026-01-21T03:33:18.174Z] [BOT] ✅ Saved pending queue: 2732 total (2712 pending, 10 enriched, 10 posted)
[2026-01-21T03:33:18.174Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T03:33:18.237Z] [BOT] 📂 Loaded 5615 existing routing entries
[2026-01-21T03:33:18.312Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5625
   Timestamp: 2026-01-21T03:33:18.288Z
[2026-01-21T03:33:18.313Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T03:33:18.313Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-21T03:33:18.313Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-21T03:33:18.314Z] [BOT] Total posts: 12
   Channels used: 5
   Top channels:
     1. #finance-jobs: 4 posts
     2. #JID_98d4f0de: 2 posts
     3. #JID_fb739488: 2 posts
     4. #tech-jobs: 2 posts
     5. #ai-jobs: 2 posts
[2026-01-21T03:33:18.314Z] [BOT] [STATS] Channel stats saved
[2026-01-21T03:33:20.339Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3047) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*