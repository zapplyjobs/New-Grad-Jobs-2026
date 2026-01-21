# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T02:38:00.893Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T02:37:22.354Z] ========================================
[2026-01-21T02:37:22.356Z] Discord Bot Execution Log
[2026-01-21T02:37:22.356Z] Environment: GitHub Actions
[2026-01-21T02:37:22.356Z] Node Version: v20.19.6
[2026-01-21T02:37:22.356Z] ========================================
[2026-01-21T02:37:22.356Z] Environment Variables Check:
[2026-01-21T02:37:22.356Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T02:37:22.356Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T02:37:22.356Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T02:37:22.356Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T02:37:22.357Z] 
Multi-Channel Configuration:
[2026-01-21T02:37:22.357Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T02:37:22.357Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T02:37:22.357Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T02:37:22.357Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T02:37:22.357Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T02:37:22.357Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T02:37:22.357Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T02:37:22.357Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T02:37:22.357Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T02:37:22.357Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T02:37:22.357Z] 
Data Files Check:
[2026-01-21T02:37:22.359Z] .github/data/new_jobs.json: ✅ Exists (10 items, 158093 bytes)
[2026-01-21T02:37:22.370Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1733503 bytes)
[2026-01-21T02:37:22.370Z] 
========================================
[2026-01-21T02:37:22.370Z] Starting Enhanced Discord Bot...
[2026-01-21T02:37:22.370Z] ========================================
[2026-01-21T02:37:22.905Z] [BOT] ✅ Loaded V2 database: 3084 jobs
[2026-01-21T02:37:23.763Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T02:37:23.763Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T02:37:23.764Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T02:37:23.877Z] [BOT] ✅ Loaded pending queue: 2733 total (2713 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Solutions Engineer, Southeast at verkada
[2026-01-21T02:37:23.882Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T02:37:23.883Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T02:37:23.883Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T02:37:23.884Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-21T02:37:23.884Z] [BOT] (5 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Project Engineer, Global Services @ verkada: austin, tx united states; new york city, ny united states; philadelphia, pa united states; tampa, fl united states, new york city, ny united states, chicago, il united states, austin, tx united states, philadelphia, pa united states, tampa, fl united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-21T02:37:23.884Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T02:37:23.888Z] [BOT] 📌 Posting 6 jobs to #tech-jobs
[2026-01-21T02:37:23.888Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Southeast" @ verkada
[2026-01-21T02:37:23.889Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T02:37:23.893Z] [BOT ERROR] (node:2385) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T02:37:24.120Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Southeast @ verkada in #tech-jobs
[2026-01-21T02:37:24.120Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Southeast @ verkada
[2026-01-21T02:37:24.121Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Southeast @ verkada → category channel (1 total channels)
[2026-01-21T02:37:24.121Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-21T02:37:24.123Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T02:37:24.129Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-21T02:37:24.129Z] [BOT] ✅ Archiving complete: 20 archived, 3065 active
[2026-01-21T02:37:24.155Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
[2026-01-21T02:37:24.156Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:25.659Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Southeast @ verkada (instance #1)
[2026-01-21T02:37:25.659Z] [BOT] 💾 BEFORE ARCHIVING: 3066 jobs in database
[2026-01-21T02:37:25.661Z] [BOT] ✅ No jobs to archive (all 3066 jobs within 7-day window)
[2026-01-21T02:37:25.679Z] [BOT] 💾 Saved posted_jobs.json: 3066 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:25.679Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Southern California" @ verkada
[2026-01-21T02:37:25.679Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T02:37:25.943Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Southern California @ verkada in #tech-jobs
  ✅ Industry: Enterprise Solutions Engineer, Southern California @ verkada
[2026-01-21T02:37:25.944Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Southern California @ verkada → category channel (1 total channels)
[2026-01-21T02:37:25.944Z] [BOT] 💾 BEFORE ARCHIVING: 3067 jobs in database
[2026-01-21T02:37:25.946Z] [BOT] ✅ No jobs to archive (all 3067 jobs within 7-day window)
[2026-01-21T02:37:25.967Z] [BOT] 💾 Saved posted_jobs.json: 3067 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:27.468Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Southern California @ verkada (instance #1)
[2026-01-21T02:37:27.468Z] [BOT] 💾 BEFORE ARCHIVING: 3068 jobs in database
[2026-01-21T02:37:27.470Z] [BOT] ✅ No jobs to archive (all 3068 jobs within 7-day window)
[2026-01-21T02:37:27.490Z] [BOT] 💾 Saved posted_jobs.json: 3068 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:27.490Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, West Coast" @ verkada
   Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T02:37:27.689Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, West Coast @ verkada in #tech-jobs
  ✅ Industry: Enterprise Solutions Engineer, West Coast @ verkada
[2026-01-21T02:37:27.690Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, West Coast @ verkada → category channel (1 total channels)
[2026-01-21T02:37:27.690Z] [BOT] 💾 BEFORE ARCHIVING: 3069 jobs in database
[2026-01-21T02:37:27.692Z] [BOT] ✅ No jobs to archive (all 3069 jobs within 7-day window)
[2026-01-21T02:37:27.712Z] [BOT] 💾 Saved posted_jobs.json: 3069 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:29.214Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, West Coast @ verkada (instance #1)
[2026-01-21T02:37:29.214Z] [BOT] 💾 BEFORE ARCHIVING: 3070 jobs in database
[2026-01-21T02:37:29.216Z] [BOT] ✅ No jobs to archive (all 3070 jobs within 7-day window)
[2026-01-21T02:37:29.233Z] [BOT] 💾 Saved posted_jobs.json: 3070 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:29.233Z] [BOT] 📍 [ROUTING] "Senior Project Engineer, Global Services" @ verkada
[2026-01-21T02:37:29.233Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T02:37:29.455Z] [BOT] ✅ Posted message: Senior Project Engineer, Global Services @ verkada in #tech-jobs
[2026-01-21T02:37:29.456Z] [BOT] ✅ Industry: Senior Project Engineer, Global Services @ verkada
[2026-01-21T02:37:29.456Z] [BOT] 💾 Added channel posting: Senior Project Engineer, Global Services @ verkada → category channel (1 total channels)
[2026-01-21T02:37:29.456Z] [BOT] 💾 BEFORE ARCHIVING: 3071 jobs in database
[2026-01-21T02:37:29.458Z] [BOT] ✅ No jobs to archive (all 3071 jobs within 7-day window)
[2026-01-21T02:37:29.476Z] [BOT] 💾 Saved posted_jobs.json: 3071 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:31.137Z] [BOT] ✅ Posted message: Senior Project Engineer, Global Services @ verkada in #JID_98d4f0de
[2026-01-21T02:37:31.137Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T02:37:31.138Z] [BOT] 💾 Added channel posting: Senior Project Engineer, Global Services @ verkada → location channel (2 total channels)
[2026-01-21T02:37:31.138Z] [BOT] 💾 BEFORE ARCHIVING: 3071 jobs in database
[2026-01-21T02:37:31.139Z] [BOT] ✅ No jobs to archive (all 3071 jobs within 7-day window)
[2026-01-21T02:37:31.158Z] [BOT] 💾 Saved posted_jobs.json: 3071 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:32.659Z] [BOT] 💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
[2026-01-21T02:37:32.659Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-21T02:37:32.661Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-21T02:37:32.683Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
[2026-01-21T02:37:32.683Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:32.683Z] [BOT] 💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
[2026-01-21T02:37:32.684Z] [BOT] 💾 BEFORE ARCHIVING: 3073 jobs in database
[2026-01-21T02:37:32.685Z] [BOT] ✅ No jobs to archive (all 3073 jobs within 7-day window)
[2026-01-21T02:37:32.705Z] [BOT] 💾 Saved posted_jobs.json: 3073 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:32.705Z] [BOT] 💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
[2026-01-21T02:37:32.706Z] [BOT] 💾 BEFORE ARCHIVING: 3074 jobs in database
[2026-01-21T02:37:32.707Z] [BOT] ✅ No jobs to archive (all 3074 jobs within 7-day window)
[2026-01-21T02:37:32.727Z] [BOT] 💾 Saved posted_jobs.json: 3074 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:32.727Z] [BOT] 💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
[2026-01-21T02:37:32.727Z] [BOT] 💾 BEFORE ARCHIVING: 3075 jobs in database
[2026-01-21T02:37:32.729Z] [BOT] ✅ No jobs to archive (all 3075 jobs within 7-day window)
[2026-01-21T02:37:32.746Z] [BOT] 💾 Saved posted_jobs.json: 3075 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:32.747Z] [BOT] 💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
[2026-01-21T02:37:32.747Z] [BOT] 💾 BEFORE ARCHIVING: 3076 jobs in database
[2026-01-21T02:37:32.748Z] [BOT] ✅ No jobs to archive (all 3076 jobs within 7-day window)
[2026-01-21T02:37:32.766Z] [BOT] 💾 Saved posted_jobs.json: 3076 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:32.766Z] [BOT] 💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
[2026-01-21T02:37:32.766Z] [BOT] 💾 BEFORE ARCHIVING: 3077 jobs in database
[2026-01-21T02:37:32.768Z] [BOT] ✅ No jobs to archive (all 3077 jobs within 7-day window)
[2026-01-21T02:37:32.785Z] [BOT] 💾 Saved posted_jobs.json: 3077 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:32.786Z] [BOT] 📍 [ROUTING] "Solutions Engineer" @ verkada
[2026-01-21T02:37:32.786Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T02:37:32.921Z] [BOT] ✅ Posted message: Solutions Engineer @ verkada in #tech-jobs
[2026-01-21T02:37:32.921Z] [BOT] ✅ Industry: Solutions Engineer @ verkada
[2026-01-21T02:37:32.922Z] [BOT] 💾 Added channel posting: Solutions Engineer @ verkada → category channel (1 total channels)
[2026-01-21T02:37:32.922Z] [BOT] 💾 BEFORE ARCHIVING: 3078 jobs in database
[2026-01-21T02:37:32.924Z] [BOT] ✅ No jobs to archive (all 3078 jobs within 7-day window)
[2026-01-21T02:37:32.941Z] [BOT] 💾 Saved posted_jobs.json: 3078 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:34.443Z] [BOT] 💾 Marked as posted: Solutions Engineer @ verkada (instance #1)
[2026-01-21T02:37:34.443Z] [BOT] 💾 BEFORE ARCHIVING: 3079 jobs in database
[2026-01-21T02:37:34.445Z] [BOT] ✅ No jobs to archive (all 3079 jobs within 7-day window)
[2026-01-21T02:37:34.466Z] [BOT] 💾 Saved posted_jobs.json: 3079 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:34.467Z] [BOT] 📍 [ROUTING] "Solutions Engineering Manager, Select & Territory" @ verkada
[2026-01-21T02:37:34.467Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T02:37:34.619Z] [BOT] ✅ Posted message: Solutions Engineering Manager, Select & Territory @ verkada in #tech-jobs
[2026-01-21T02:37:34.619Z] [BOT] ✅ Industry: Solutions Engineering Manager, Select & Territory @ verkada
[2026-01-21T02:37:34.620Z] [BOT] 💾 Added channel posting: Solutions Engineering Manager, Select & Territory @ verkada → category channel (1 total channels)
[2026-01-21T02:37:34.620Z] [BOT] 💾 BEFORE ARCHIVING: 3080 jobs in database
[2026-01-21T02:37:34.622Z] [BOT] ✅ No jobs to archive (all 3080 jobs within 7-day window)
[2026-01-21T02:37:34.643Z] [BOT] 💾 Saved posted_jobs.json: 3080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:36.393Z] [BOT] ✅ Posted message: Solutions Engineering Manager, Select & Territory @ verkada in #JID_ead674af
[2026-01-21T02:37:36.393Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T02:37:36.393Z] [BOT] 💾 Added channel posting: Solutions Engineering Manager, Select & Territory @ verkada → location channel (2 total channels)
[2026-01-21T02:37:36.394Z] [BOT] 💾 BEFORE ARCHIVING: 3080 jobs in database
[2026-01-21T02:37:36.395Z] [BOT] ✅ No jobs to archive (all 3080 jobs within 7-day window)
[2026-01-21T02:37:36.414Z] [BOT] 💾 Saved posted_jobs.json: 3080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:37.916Z] [BOT] 💾 Marked as posted: Solutions Engineering Manager, Select & Territory @ verkada (instance #1)
[2026-01-21T02:37:37.916Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-21T02:37:37.918Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-21T02:37:37.938Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:40.939Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T02:37:40.939Z] [BOT] 📍 [ROUTING] "National Channel Sales Manager, Midwest" @ verkada
[2026-01-21T02:37:40.939Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1462...4531)
[2026-01-21T02:37:41.314Z] [BOT] ✅ Posted message: National Channel Sales Manager, Midwest @ verkada in #JID_fb739488
[2026-01-21T02:37:41.315Z] [BOT] ✅ Industry: National Channel Sales Manager, Midwest @ verkada
[2026-01-21T02:37:41.315Z] [BOT] 💾 Added channel posting: National Channel Sales Manager, Midwest @ verkada → category channel (1 total channels)
[2026-01-21T02:37:41.315Z] [BOT] 💾 BEFORE ARCHIVING: 3082 jobs in database
[2026-01-21T02:37:41.317Z] [BOT] ✅ No jobs to archive (all 3082 jobs within 7-day window)
[2026-01-21T02:37:41.335Z] [BOT] 💾 Saved posted_jobs.json: 3082 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:42.837Z] [BOT] 💾 Marked as posted: National Channel Sales Manager, Midwest @ verkada (instance #1)
[2026-01-21T02:37:42.837Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-21T02:37:42.839Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-21T02:37:42.858Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:45.859Z] [BOT] 📌 Posting 3 jobs to #finance-jobs
[2026-01-21T02:37:45.859Z] [BOT] 📍 [ROUTING] "Regional Sales Manager, Mid-Market" @ verkada
[2026-01-21T02:37:45.859Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-21T02:37:46.126Z] [BOT] ✅ Posted message: Regional Sales Manager, Mid-Market @ verkada in #finance-jobs
[2026-01-21T02:37:46.126Z] [BOT] ✅ Industry: Regional Sales Manager, Mid-Market @ verkada
[2026-01-21T02:37:46.126Z] [BOT] 💾 Added channel posting: Regional Sales Manager, Mid-Market @ verkada → category channel (1 total channels)
[2026-01-21T02:37:46.126Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-21T02:37:46.129Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-21T02:37:46.146Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:47.649Z] [BOT] 💾 Marked as posted: Regional Sales Manager, Mid-Market @ verkada (instance #1)
[2026-01-21T02:37:47.649Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-21T02:37:47.651Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-21T02:37:47.671Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:47.671Z] [BOT] 📍 [ROUTING] "Sales Development Representative (AAE), New York City " @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-21T02:37:47.671Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T02:37:47.885Z] [BOT] ✅ Posted message: Sales Development Representative (AAE), New York City  @ verkada in #finance-jobs
[2026-01-21T02:37:47.885Z] [BOT] ✅ Industry: Sales Development Representative (AAE), New York City  @ verkada
[2026-01-21T02:37:47.886Z] [BOT] 💾 Added channel posting: Sales Development Representative (AAE), New York City  @ verkada → category channel (1 total channels)
[2026-01-21T02:37:47.886Z] [BOT] 💾 BEFORE ARCHIVING: 3086 jobs in database
[2026-01-21T02:37:47.888Z] [BOT] ✅ No jobs to archive (all 3086 jobs within 7-day window)
[2026-01-21T02:37:47.905Z] [BOT] 💾 Saved posted_jobs.json: 3086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:49.598Z] [BOT] ✅ Posted message: Sales Development Representative (AAE), New York City  @ verkada in #JID_98d4f0de
[2026-01-21T02:37:49.598Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T02:37:49.599Z] [BOT] 💾 Added channel posting: Sales Development Representative (AAE), New York City  @ verkada → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3086 jobs in database
[2026-01-21T02:37:49.601Z] [BOT] ✅ No jobs to archive (all 3086 jobs within 7-day window)
[2026-01-21T02:37:49.619Z] [BOT] 💾 Saved posted_jobs.json: 3086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:51.121Z] [BOT] 💾 Marked as posted: Sales Development Representative (AAE), New York City  @ verkada (instance #1)
[2026-01-21T02:37:51.121Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-21T02:37:51.123Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-21T02:37:51.141Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:51.141Z] [BOT] 📍 [ROUTING] "Senior Channel Marketing Manager, Northeast (Remote)" @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-21T02:37:51.141Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T02:37:51.414Z] [BOT] ✅ Posted message: Senior Channel Marketing Manager, Northeast (Remote) @ verkada in #finance-jobs
  ✅ Industry: Senior Channel Marketing Manager, Northeast (Remote) @ verkada
[2026-01-21T02:37:51.414Z] [BOT] 💾 Added channel posting: Senior Channel Marketing Manager, Northeast (Remote) @ verkada → category channel (1 total channels)
[2026-01-21T02:37:51.414Z] [BOT] 💾 BEFORE ARCHIVING: 3088 jobs in database
[2026-01-21T02:37:51.416Z] [BOT] ✅ No jobs to archive (all 3088 jobs within 7-day window)
[2026-01-21T02:37:51.436Z] [BOT] 💾 Saved posted_jobs.json: 3088 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:53.130Z] [BOT] ✅ Posted message: Senior Channel Marketing Manager, Northeast (Remote) @ verkada in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T02:37:53.130Z] [BOT] 💾 Added channel posting: Senior Channel Marketing Manager, Northeast (Remote) @ verkada → location channel (2 total channels)
[2026-01-21T02:37:53.130Z] [BOT] 💾 BEFORE ARCHIVING: 3088 jobs in database
[2026-01-21T02:37:53.132Z] [BOT] ✅ No jobs to archive (all 3088 jobs within 7-day window)
[2026-01-21T02:37:53.149Z] [BOT] 💾 Saved posted_jobs.json: 3088 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:54.651Z] [BOT] 💾 Marked as posted: Senior Channel Marketing Manager, Northeast (Remote) @ verkada (instance #1)
[2026-01-21T02:37:54.651Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-21T02:37:54.653Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-21T02:37:54.672Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T02:37:57.673Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T02:37:57.674Z] [BOT] ⏭️  Skipping duplicate: JID_64e076e0 (posted within 7 days)
[2026-01-21T02:37:57.674Z] [BOT] ⏭️  Skipping duplicate: JID_3fa8d492 (posted within 7 days)
[2026-01-21T02:37:57.674Z] [BOT] ⏭️  Skipping duplicate: JID_d5432eed (posted within 7 days)
[2026-01-21T02:37:57.675Z] [BOT] ⏭️  Skipping duplicate: JID_3e27f1f0 (posted within 7 days)
[2026-01-21T02:37:57.675Z] [BOT] ⏭️  Skipping duplicate: JID_81e4bb0d (posted within 7 days)
[2026-01-21T02:37:57.675Z] [BOT] ⏭️  Skipping duplicate: JID_aa58a0bd (posted within 7 days)
[2026-01-21T02:37:57.675Z] [BOT] ⏭️  Skipping duplicate: JID_655e3681 (posted within 7 days)
[2026-01-21T02:37:57.675Z] [BOT] ⏭️  Skipping duplicate: JID_e1dc469b (posted within 7 days)
[2026-01-21T02:37:57.675Z] [BOT] ⏭️  Skipping duplicate: JID_a1c0a588 (posted within 7 days)
[2026-01-21T02:37:57.675Z] [BOT] ⏭️  Skipping duplicate: JID_6b30789d (posted within 7 days)
[2026-01-21T02:37:57.780Z] [BOT] ✅ Loaded pending queue: 2733 total (2713 pending, 20 enriched, 0 posted)
[2026-01-21T02:37:57.965Z] [BOT] ✅ Saved pending queue: 2733 total (2713 pending, 10 enriched, 10 posted)
[2026-01-21T02:37:57.966Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T02:37:58.033Z] [BOT] 📂 Loaded 5605 existing routing entries
[2026-01-21T02:37:58.107Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5615
   Timestamp: 2026-01-21T02:37:58.084Z
[2026-01-21T02:37:58.108Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 14
[2026-01-21T02:37:58.108Z] [BOT] Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-21T02:37:58.109Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 5
   Top channels:
     1. #tech-jobs: 6 posts
     2. #JID_98d4f0de: 3 posts
     3. #finance-jobs: 3 posts
     4. #JID_ead674af: 1 posts
     5. #JID_fb739488: 1 posts
[2026-01-21T02:37:58.109Z] [BOT] [STATS] Channel stats saved
[2026-01-21T02:38:00.135Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2385) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*