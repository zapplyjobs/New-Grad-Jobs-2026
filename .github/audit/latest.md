# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T21:30:04.947Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T21:29:25.142Z] ========================================
[2026-01-20T21:29:25.144Z] Discord Bot Execution Log
[2026-01-20T21:29:25.144Z] Environment: GitHub Actions
[2026-01-20T21:29:25.144Z] Node Version: v20.19.6
[2026-01-20T21:29:25.144Z] ========================================
[2026-01-20T21:29:25.144Z] Environment Variables Check:
[2026-01-20T21:29:25.144Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T21:29:25.144Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T21:29:25.144Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T21:29:25.145Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T21:29:25.145Z] 
Multi-Channel Configuration:
[2026-01-20T21:29:25.145Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T21:29:25.145Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T21:29:25.145Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T21:29:25.145Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T21:29:25.145Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T21:29:25.145Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T21:29:25.145Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T21:29:25.145Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T21:29:25.145Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T21:29:25.145Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T21:29:25.146Z] 
Data Files Check:
[2026-01-20T21:29:25.146Z] .github/data/new_jobs.json: ✅ Exists (10 items, 102502 bytes)
[2026-01-20T21:29:25.161Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1646939 bytes)
[2026-01-20T21:29:25.161Z] 
========================================
[2026-01-20T21:29:25.161Z] Starting Enhanced Discord Bot...
[2026-01-20T21:29:25.161Z] ========================================
[2026-01-20T21:29:25.735Z] [BOT] ✅ Loaded V2 database: 2944 jobs
[2026-01-20T21:29:26.507Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T21:29:26.508Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T21:29:26.508Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T21:29:26.625Z] [BOT] ✅ Loaded pending queue: 2762 total (2742 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer - Realtime Infrastructure at discord
[2026-01-20T21:29:26.628Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T21:29:26.629Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T21:29:26.629Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T21:29:26.630Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-20T21:29:26.630Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T21:29:26.634Z] [BOT] 📌 Posting 7 jobs to #tech-jobs
[2026-01-20T21:29:26.635Z] [BOT] 📍 [ROUTING] "Software Engineer - Realtime Infrastructure" @ discord
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T21:29:26.639Z] [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T21:29:27.028Z] [BOT] ✅ Posted message: Software Engineer - Realtime Infrastructure @ discord in #tech-jobs
[2026-01-20T21:29:27.028Z] [BOT] ✅ Industry: Software Engineer - Realtime Infrastructure @ discord
[2026-01-20T21:29:27.029Z] [BOT] 💾 Added channel posting: Software Engineer - Realtime Infrastructure @ discord → category channel (1 total channels)
[2026-01-20T21:29:27.029Z] [BOT] 💾 BEFORE ARCHIVING: 2945 jobs in database
[2026-01-20T21:29:27.031Z] [BOT] ✅ No jobs to archive (all 2945 jobs within 7-day window)
[2026-01-20T21:29:27.054Z] [BOT] 💾 Saved posted_jobs.json: 2945 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:28.557Z] [BOT] 💾 Marked as posted: Software Engineer - Realtime Infrastructure @ discord (instance #1)
💾 BEFORE ARCHIVING: 2946 jobs in database
[2026-01-20T21:29:28.559Z] [BOT] ✅ No jobs to archive (all 2946 jobs within 7-day window)
[2026-01-20T21:29:28.576Z] [BOT] 💾 Saved posted_jobs.json: 2946 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:28.577Z] [BOT] 📍 [ROUTING] "Senior Developer Support Engineer-West Coast" @ airtable
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T21:29:28.835Z] [BOT] ✅ Posted message: Senior Developer Support Engineer-West Coast @ airtable in #tech-jobs
[2026-01-20T21:29:28.835Z] [BOT] ✅ Industry: Senior Developer Support Engineer-West Coast @ airtable
[2026-01-20T21:29:28.836Z] [BOT] 💾 Added channel posting: Senior Developer Support Engineer-West Coast @ airtable → category channel (1 total channels)
[2026-01-20T21:29:28.836Z] [BOT] 💾 BEFORE ARCHIVING: 2947 jobs in database
[2026-01-20T21:29:28.838Z] [BOT] ✅ No jobs to archive (all 2947 jobs within 7-day window)
[2026-01-20T21:29:28.857Z] [BOT] 💾 Saved posted_jobs.json: 2947 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:30.358Z] [BOT] 💾 Marked as posted: Senior Developer Support Engineer-West Coast @ airtable (instance #1)
[2026-01-20T21:29:30.359Z] [BOT] 💾 BEFORE ARCHIVING: 2948 jobs in database
[2026-01-20T21:29:30.361Z] [BOT] ✅ No jobs to archive (all 2948 jobs within 7-day window)
[2026-01-20T21:29:30.380Z] [BOT] 💾 Saved posted_jobs.json: 2948 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:30.380Z] [BOT] 📍 [ROUTING] "Financial Crimes Investigator" @ brex
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T21:29:30.709Z] [BOT] ✅ Posted message: Financial Crimes Investigator @ brex in #tech-jobs
  ✅ Industry: Financial Crimes Investigator @ brex
[2026-01-20T21:29:30.710Z] [BOT] 💾 Added channel posting: Financial Crimes Investigator @ brex → category channel (1 total channels)
[2026-01-20T21:29:30.710Z] [BOT] 💾 BEFORE ARCHIVING: 2949 jobs in database
[2026-01-20T21:29:30.712Z] [BOT] ✅ No jobs to archive (all 2949 jobs within 7-day window)
[2026-01-20T21:29:30.733Z] [BOT] 💾 Saved posted_jobs.json: 2949 active jobs
[2026-01-20T21:29:30.733Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:32.416Z] [BOT] ✅ Posted message: Financial Crimes Investigator @ brex in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T21:29:32.416Z] [BOT] 💾 Added channel posting: Financial Crimes Investigator @ brex → location channel (2 total channels)
[2026-01-20T21:29:32.417Z] [BOT] 💾 BEFORE ARCHIVING: 2949 jobs in database
[2026-01-20T21:29:32.418Z] [BOT] ✅ No jobs to archive (all 2949 jobs within 7-day window)
[2026-01-20T21:29:32.435Z] [BOT] 💾 Saved posted_jobs.json: 2949 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:33.935Z] [BOT] 💾 Marked as posted: Financial Crimes Investigator @ brex (instance #1)
💾 BEFORE ARCHIVING: 2950 jobs in database
[2026-01-20T21:29:33.937Z] [BOT] ✅ No jobs to archive (all 2950 jobs within 7-day window)
[2026-01-20T21:29:33.956Z] [BOT] 💾 Saved posted_jobs.json: 2950 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:33.956Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Media Network Global Engineering - 2026 Start" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T21:29:34.151Z] [BOT] ✅ Posted message: Software Engineer Graduate - Media Network Global Engineering - 2026 Start @ ORG_08c9a13c in #tech-jobs
  ✅ Industry: Software Engineer Graduate - Media Network Global Engineering - 2026 Start @ ORG_08c9a13c
[2026-01-20T21:29:34.152Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Media Network Global Engineering - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-20T21:29:34.152Z] [BOT] 💾 BEFORE ARCHIVING: 2951 jobs in database
[2026-01-20T21:29:34.154Z] [BOT] ✅ No jobs to archive (all 2951 jobs within 7-day window)
[2026-01-20T21:29:34.171Z] [BOT] 💾 Saved posted_jobs.json: 2951 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:35.672Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Media Network Global Engineering - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-20T21:29:35.672Z] [BOT] 💾 BEFORE ARCHIVING: 2952 jobs in database
[2026-01-20T21:29:35.674Z] [BOT] ✅ No jobs to archive (all 2952 jobs within 7-day window)
[2026-01-20T21:29:35.695Z] [BOT] 💾 Saved posted_jobs.json: 2952 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:35.696Z] [BOT] 📍 [ROUTING] "MFG System Implementations Engineer 1" @ ORG_3a7d2c6a Bottling
   Category: TECH (matched: "engineer/engineering")
[2026-01-20T21:29:35.696Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T21:29:35.891Z] [BOT] ✅ Posted message: MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling in #tech-jobs
  ✅ Industry: MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling
[2026-01-20T21:29:35.892Z] [BOT] 💾 Added channel posting: MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling → category channel (1 total channels)
[2026-01-20T21:29:35.892Z] [BOT] 💾 BEFORE ARCHIVING: 2953 jobs in database
[2026-01-20T21:29:35.894Z] [BOT] ✅ No jobs to archive (all 2953 jobs within 7-day window)
[2026-01-20T21:29:35.915Z] [BOT] 💾 Saved posted_jobs.json: 2953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:37.418Z] [BOT] 💾 Marked as posted: MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling (instance #1)
[2026-01-20T21:29:37.418Z] [BOT] 💾 BEFORE ARCHIVING: 2954 jobs in database
[2026-01-20T21:29:37.420Z] [BOT] ✅ No jobs to archive (all 2954 jobs within 7-day window)
[2026-01-20T21:29:37.438Z] [BOT] 💾 Saved posted_jobs.json: 2954 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:37.439Z] [BOT] 📍 [ROUTING] "EDI Coordinator" @ ORG_22fa11a5ingham & Butler
[2026-01-20T21:29:37.439Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T21:29:37.680Z] [BOT] ✅ Posted message: EDI Coordinator @ ORG_22fa11a5ingham & Butler in #tech-jobs
[2026-01-20T21:29:37.680Z] [BOT] ✅ Industry: EDI Coordinator @ ORG_22fa11a5ingham & Butler
[2026-01-20T21:29:37.681Z] [BOT] 💾 Added channel posting: EDI Coordinator @ ORG_22fa11a5ingham & Butler → category channel (1 total channels)
[2026-01-20T21:29:37.681Z] [BOT] 💾 BEFORE ARCHIVING: 2955 jobs in database
[2026-01-20T21:29:37.683Z] [BOT] ✅ No jobs to archive (all 2955 jobs within 7-day window)
[2026-01-20T21:29:37.701Z] [BOT] 💾 Saved posted_jobs.json: 2955 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:39.421Z] [BOT] ✅ Posted message: EDI Coordinator @ ORG_22fa11a5ingham & Butler in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T21:29:39.421Z] [BOT] 💾 Added channel posting: EDI Coordinator @ ORG_22fa11a5ingham & Butler → location channel (2 total channels)
[2026-01-20T21:29:39.421Z] [BOT] 💾 BEFORE ARCHIVING: 2955 jobs in database
[2026-01-20T21:29:39.424Z] [BOT] ✅ No jobs to archive (all 2955 jobs within 7-day window)
[2026-01-20T21:29:39.443Z] [BOT] 💾 Saved posted_jobs.json: 2955 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:40.944Z] [BOT] 💾 Marked as posted: EDI Coordinator @ ORG_22fa11a5ingham & Butler (instance #1)
[2026-01-20T21:29:40.945Z] [BOT] 💾 BEFORE ARCHIVING: 2956 jobs in database
[2026-01-20T21:29:40.946Z] [BOT] ✅ No jobs to archive (all 2956 jobs within 7-day window)
[2026-01-20T21:29:40.964Z] [BOT] 💾 Saved posted_jobs.json: 2956 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:40.964Z] [BOT] 📍 [ROUTING] "Search Quality Rater" @ ORG_f3ae3598
[2026-01-20T21:29:40.964Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T21:29:41.486Z] [BOT] ✅ Posted message: Search Quality Rater @ ORG_f3ae3598 in #tech-jobs
[2026-01-20T21:29:41.486Z] [BOT] ✅ Industry: Search Quality Rater @ ORG_f3ae3598
[2026-01-20T21:29:41.486Z] [BOT] 💾 Added channel posting: Search Quality Rater @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-20T21:29:41.486Z] [BOT] 💾 BEFORE ARCHIVING: 2957 jobs in database
[2026-01-20T21:29:41.488Z] [BOT] ✅ No jobs to archive (all 2957 jobs within 7-day window)
[2026-01-20T21:29:41.506Z] [BOT] 💾 Saved posted_jobs.json: 2957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:43.292Z] [BOT] ✅ Posted message: Search Quality Rater @ ORG_f3ae3598 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T21:29:43.292Z] [BOT] 💾 Added channel posting: Search Quality Rater @ ORG_f3ae3598 → location channel (2 total channels)
[2026-01-20T21:29:43.292Z] [BOT] 💾 BEFORE ARCHIVING: 2957 jobs in database
[2026-01-20T21:29:43.294Z] [BOT] ✅ No jobs to archive (all 2957 jobs within 7-day window)
[2026-01-20T21:29:43.313Z] [BOT] 💾 Saved posted_jobs.json: 2957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:44.814Z] [BOT] 💾 Marked as posted: Search Quality Rater @ ORG_f3ae3598 (instance #1)
[2026-01-20T21:29:44.815Z] [BOT] 💾 BEFORE ARCHIVING: 2958 jobs in database
[2026-01-20T21:29:44.817Z] [BOT] ✅ No jobs to archive (all 2958 jobs within 7-day window)
[2026-01-20T21:29:44.835Z] [BOT] 💾 Saved posted_jobs.json: 2958 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:47.836Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-20T21:29:47.836Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_bdc26476
   Category: AI (matched: "machine learning")
[2026-01-20T21:29:47.836Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-20T21:29:48.342Z] [BOT] ✅ Posted message: GIS Analyst 1 @ ORG_bdc26476 in #ai-jobs
[2026-01-20T21:29:48.342Z] [BOT] ✅ Industry: GIS Analyst 1 @ ORG_bdc26476
[2026-01-20T21:29:48.343Z] [BOT] 💾 Added channel posting: GIS Analyst 1 @ ORG_bdc26476 → category channel (1 total channels)
[2026-01-20T21:29:48.343Z] [BOT] 💾 BEFORE ARCHIVING: 2959 jobs in database
[2026-01-20T21:29:48.344Z] [BOT] ✅ No jobs to archive (all 2959 jobs within 7-day window)
[2026-01-20T21:29:48.363Z] [BOT] 💾 Saved posted_jobs.json: 2959 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:50.080Z] [BOT] ✅ Posted message: GIS Analyst 1 @ ORG_bdc26476 in #JID_ead674af
[2026-01-20T21:29:50.081Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T21:29:50.081Z] [BOT] 💾 Added channel posting: GIS Analyst 1 @ ORG_bdc26476 → location channel (2 total channels)
[2026-01-20T21:29:50.081Z] [BOT] 💾 BEFORE ARCHIVING: 2959 jobs in database
[2026-01-20T21:29:50.083Z] [BOT] ✅ No jobs to archive (all 2959 jobs within 7-day window)
[2026-01-20T21:29:50.103Z] [BOT] 💾 Saved posted_jobs.json: 2959 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:51.604Z] [BOT] 💾 Marked as posted: GIS Analyst 1 @ ORG_bdc26476 (instance #1)
[2026-01-20T21:29:51.604Z] [BOT] 💾 BEFORE ARCHIVING: 2960 jobs in database
[2026-01-20T21:29:51.606Z] [BOT] ✅ No jobs to archive (all 2960 jobs within 7-day window)
[2026-01-20T21:29:51.626Z] [BOT] 💾 Saved posted_jobs.json: 2960 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:51.626Z] [BOT] 📍 [ROUTING] "Data Scientist, GTM Analytics" @ airtable
[2026-01-20T21:29:51.626Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-20T21:29:51.827Z] [BOT] ✅ Posted message: Data Scientist, GTM Analytics @ airtable in #ai-jobs
  ✅ Industry: Data Scientist, GTM Analytics @ airtable
[2026-01-20T21:29:51.828Z] [BOT] 💾 Added channel posting: Data Scientist, GTM Analytics @ airtable → category channel (1 total channels)
[2026-01-20T21:29:51.828Z] [BOT] 💾 BEFORE ARCHIVING: 2961 jobs in database
[2026-01-20T21:29:51.830Z] [BOT] ✅ No jobs to archive (all 2961 jobs within 7-day window)
[2026-01-20T21:29:51.849Z] [BOT] 💾 Saved posted_jobs.json: 2961 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:53.351Z] [BOT] 💾 Marked as posted: Data Scientist, GTM Analytics @ airtable (instance #1)
[2026-01-20T21:29:53.351Z] [BOT] 💾 BEFORE ARCHIVING: 2962 jobs in database
[2026-01-20T21:29:53.353Z] [BOT] ✅ No jobs to archive (all 2962 jobs within 7-day window)
[2026-01-20T21:29:53.372Z] [BOT] 💾 Saved posted_jobs.json: 2962 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:56.372Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-20T21:29:56.372Z] [BOT] 📍 [ROUTING] "Data Scientist, Product Analytics" @ airtable
[2026-01-20T21:29:56.372Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T21:29:56.684Z] [BOT] ✅ Posted message: Data Scientist, Product Analytics @ airtable in #JID_fb739488
[2026-01-20T21:29:56.684Z] [BOT] ✅ Industry: Data Scientist, Product Analytics @ airtable
[2026-01-20T21:29:56.685Z] [BOT] 💾 Added channel posting: Data Scientist, Product Analytics @ airtable → category channel (1 total channels)
[2026-01-20T21:29:56.685Z] [BOT] 💾 BEFORE ARCHIVING: 2963 jobs in database
[2026-01-20T21:29:56.687Z] [BOT] ✅ No jobs to archive (all 2963 jobs within 7-day window)
[2026-01-20T21:29:56.706Z] [BOT] 💾 Saved posted_jobs.json: 2963 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:29:58.208Z] [BOT] 💾 Marked as posted: Data Scientist, Product Analytics @ airtable (instance #1)
[2026-01-20T21:29:58.208Z] [BOT] 💾 BEFORE ARCHIVING: 2964 jobs in database
[2026-01-20T21:29:58.210Z] [BOT] ✅ No jobs to archive (all 2964 jobs within 7-day window)
[2026-01-20T21:29:58.230Z] [BOT] 💾 Saved posted_jobs.json: 2964 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:30:01.230Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T21:30:01.231Z] [BOT] ⏭️  Skipping duplicate: JID_9f9fd338 (posted within 7 days)
[2026-01-20T21:30:01.231Z] [BOT] ⏭️  Skipping duplicate: JID_39c8a27b (posted within 7 days)
[2026-01-20T21:30:01.232Z] [BOT] ⏭️  Skipping duplicate: JID_1a0e44d8 (posted within 7 days)
[2026-01-20T21:30:01.232Z] [BOT] ⏭️  Skipping duplicate: JID_00f8aad3 (posted within 7 days)
[2026-01-20T21:30:01.232Z] [BOT] ⏭️  Skipping duplicate: JID_669502c0 (posted within 7 days)
[2026-01-20T21:30:01.232Z] [BOT] ⏭️  Skipping duplicate: JID_b8727a6a (posted within 7 days)
[2026-01-20T21:30:01.232Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_9c80e33d-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_d918151e-i_r52026 (posted within 7 days)
[2026-01-20T21:30:01.233Z] [BOT] ⏭️  Skipping duplicate: JID_9138a48f (posted within 7 days)
[2026-01-20T21:30:01.233Z] [BOT] ⏭️  Skipping duplicate: JID_59128a5e (posted within 7 days)
[2026-01-20T21:30:01.345Z] [BOT] ✅ Loaded pending queue: 2762 total (2742 pending, 20 enriched, 0 posted)
[2026-01-20T21:30:01.521Z] [BOT] ✅ Saved pending queue: 2762 total (2742 pending, 10 enriched, 10 posted)
[2026-01-20T21:30:01.522Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T21:30:01.586Z] [BOT] 📂 Loaded 5492 existing routing entries
[2026-01-20T21:30:01.664Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5502
[2026-01-20T21:30:01.664Z] [BOT] Timestamp: 2026-01-20T21:30:01.639Z
[2026-01-20T21:30:01.665Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T21:30:01.665Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-20T21:30:01.665Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-20T21:30:01.665Z] [BOT] Total posts: 14
   Channels used: 4
   Top channels:
     1. #tech-jobs: 7 posts
[2026-01-20T21:30:01.665Z] [BOT] 2. #JID_ead674af: 4 posts
     3. #ai-jobs: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-20T21:30:01.666Z] [BOT] [STATS] Channel stats saved
[2026-01-20T21:30:03.693Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*