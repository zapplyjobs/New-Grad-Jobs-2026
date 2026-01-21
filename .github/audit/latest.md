# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T05:17:45.892Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T05:17:09.459Z] ========================================
[2026-01-21T05:17:09.460Z] Discord Bot Execution Log
[2026-01-21T05:17:09.460Z] Environment: GitHub Actions
[2026-01-21T05:17:09.461Z] Node Version: v20.19.6
[2026-01-21T05:17:09.461Z] ========================================
[2026-01-21T05:17:09.461Z] Environment Variables Check:
[2026-01-21T05:17:09.461Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T05:17:09.461Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T05:17:09.461Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T05:17:09.461Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T05:17:09.461Z] 
Multi-Channel Configuration:
[2026-01-21T05:17:09.461Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T05:17:09.461Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T05:17:09.462Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T05:17:09.462Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T05:17:09.462Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T05:17:09.462Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T05:17:09.462Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T05:17:09.462Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T05:17:09.462Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T05:17:09.462Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T05:17:09.462Z] 
Data Files Check:
[2026-01-21T05:17:09.463Z] .github/data/new_jobs.json: ✅ Exists (10 items, 53283 bytes)
[2026-01-21T05:17:09.474Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1755608 bytes)
[2026-01-21T05:17:09.474Z] 
========================================
[2026-01-21T05:17:09.474Z] Starting Enhanced Discord Bot...
[2026-01-21T05:17:09.474Z] ========================================
[2026-01-21T05:17:10.007Z] [BOT] ✅ Loaded V2 database: 3095 jobs
[2026-01-21T05:17:10.666Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T05:17:10.667Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T05:17:10.667Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T05:17:10.782Z] [BOT] ✅ Loaded pending queue: 2741 total (2721 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Junior Software Engineer at Oklo
[2026-01-21T05:17:10.786Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T05:17:10.786Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T05:17:10.787Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T05:17:10.787Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T05:17:10.788Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T05:17:10.791Z] [BOT] 📌 Posting 6 jobs to #tech-jobs
[2026-01-21T05:17:10.792Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_a0299599
[2026-01-21T05:17:10.792Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T05:17:10.796Z] [BOT ERROR] (node:2798) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T05:17:10.977Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_a0299599 in #tech-jobs
[2026-01-21T05:17:10.977Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_a0299599
[2026-01-21T05:17:10.978Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_a0299599 → category channel (1 total channels)
[2026-01-21T05:17:10.978Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-21T05:17:10.981Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T05:17:10.986Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-21T05:17:10.986Z] [BOT] ✅ Archiving complete: 20 archived, 3076 active
[2026-01-21T05:17:11.007Z] [BOT] 💾 Saved posted_jobs.json: 3076 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:12.509Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_a0299599 (instance #1)
[2026-01-21T05:17:12.510Z] [BOT] 💾 BEFORE ARCHIVING: 3077 jobs in database
[2026-01-21T05:17:12.512Z] [BOT] ✅ No jobs to archive (all 3077 jobs within 7-day window)
[2026-01-21T05:17:12.530Z] [BOT] 💾 Saved posted_jobs.json: 3077 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:12.530Z] [BOT] 📍 [ROUTING] "Platform Engineer: General Compute" @ supabase
[2026-01-21T05:17:12.530Z] [BOT] Category: TECH (matched: "data engineer")
   Channel: tech-jobs (1462...4987)
[2026-01-21T05:17:12.940Z] [BOT] ✅ Posted message: Platform Engineer: General Compute @ supabase in #tech-jobs
  ✅ Industry: Platform Engineer: General Compute @ supabase
[2026-01-21T05:17:12.941Z] [BOT] 💾 Added channel posting: Platform Engineer: General Compute @ supabase → category channel (1 total channels)
[2026-01-21T05:17:12.941Z] [BOT] 💾 BEFORE ARCHIVING: 3078 jobs in database
[2026-01-21T05:17:12.943Z] [BOT] ✅ No jobs to archive (all 3078 jobs within 7-day window)
[2026-01-21T05:17:12.964Z] [BOT] 💾 Saved posted_jobs.json: 3078 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:14.466Z] [BOT] 💾 Marked as posted: Platform Engineer: General Compute @ supabase (instance #1)
[2026-01-21T05:17:14.466Z] [BOT] 💾 BEFORE ARCHIVING: 3079 jobs in database
[2026-01-21T05:17:14.468Z] [BOT] ✅ No jobs to archive (all 3079 jobs within 7-day window)
[2026-01-21T05:17:14.487Z] [BOT] 💾 Saved posted_jobs.json: 3079 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:14.488Z] [BOT] 📍 [ROUTING] "GSI & Consultancies, Partner Lead" @ vercel
   Category: TECH (default)
[2026-01-21T05:17:14.488Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T05:17:14.711Z] [BOT] ✅ Posted message: GSI & Consultancies, Partner Lead @ vercel in #tech-jobs
[2026-01-21T05:17:14.711Z] [BOT] ✅ Industry: GSI & Consultancies, Partner Lead @ vercel
[2026-01-21T05:17:14.712Z] [BOT] 💾 Added channel posting: GSI & Consultancies, Partner Lead @ vercel → category channel (1 total channels)
[2026-01-21T05:17:14.712Z] [BOT] 💾 BEFORE ARCHIVING: 3080 jobs in database
[2026-01-21T05:17:14.714Z] [BOT] ✅ No jobs to archive (all 3080 jobs within 7-day window)
[2026-01-21T05:17:14.734Z] [BOT] 💾 Saved posted_jobs.json: 3080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:16.236Z] [BOT] 💾 Marked as posted: GSI & Consultancies, Partner Lead @ vercel (instance #1)
[2026-01-21T05:17:16.236Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-21T05:17:16.238Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-21T05:17:16.256Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:16.256Z] [BOT] 📍 [ROUTING] "Applied Scientist 1 - Amazon" @ ORG_49d2dc07
   Category: TECH (default)
[2026-01-21T05:17:16.257Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T05:17:16.795Z] [BOT] ✅ Posted message: Applied Scientist 1 - Amazon @ ORG_49d2dc07 in #tech-jobs
  ✅ Industry: Applied Scientist 1 - Amazon @ ORG_49d2dc07
[2026-01-21T05:17:16.796Z] [BOT] 💾 Added channel posting: Applied Scientist 1 - Amazon @ ORG_49d2dc07 → category channel (1 total channels)
[2026-01-21T05:17:16.796Z] [BOT] 💾 BEFORE ARCHIVING: 3082 jobs in database
[2026-01-21T05:17:16.798Z] [BOT] ✅ No jobs to archive (all 3082 jobs within 7-day window)
[2026-01-21T05:17:16.817Z] [BOT] 💾 Saved posted_jobs.json: 3082 active jobs
[2026-01-21T05:17:16.817Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:18.318Z] [BOT] 💾 Marked as posted: Applied Scientist 1 - Amazon @ ORG_49d2dc07 (instance #1)
[2026-01-21T05:17:18.319Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-21T05:17:18.320Z] [BOT] ✅ No jobs to archive (all 3083 jobs within 7-day window)
[2026-01-21T05:17:18.339Z] [BOT] 💾 Saved posted_jobs.json: 3083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:18.339Z] [BOT] 📍 [ROUTING] "Support Engineer - Entry-Level" @ ORG_ed077f3d Asset
   Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T05:17:18.576Z] [BOT] ✅ Posted message: Support Engineer - Entry-Level @ ORG_ed077f3d Asset in #tech-jobs
[2026-01-21T05:17:18.577Z] [BOT] ✅ Industry: Support Engineer - Entry-Level @ ORG_ed077f3d Asset
[2026-01-21T05:17:18.578Z] [BOT] 💾 Added channel posting: Support Engineer - Entry-Level @ ORG_ed077f3d Asset → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-21T05:17:18.579Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-21T05:17:18.599Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:20.260Z] [BOT] ✅ Posted message: Support Engineer - Entry-Level @ ORG_ed077f3d Asset in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T05:17:20.260Z] [BOT] 💾 Added channel posting: Support Engineer - Entry-Level @ ORG_ed077f3d Asset → location channel (2 total channels)
[2026-01-21T05:17:20.261Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-21T05:17:20.263Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-21T05:17:20.285Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:21.787Z] [BOT] 💾 Marked as posted: Support Engineer - Entry-Level @ ORG_ed077f3d Asset (instance #1)
[2026-01-21T05:17:21.787Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-21T05:17:21.789Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-21T05:17:21.810Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:21.811Z] [BOT] 📍 [ROUTING] "Sales and Product Development Engineer" @ ORG_7611a65f
   Category: TECH (matched: "engineer/engineering")
[2026-01-21T05:17:21.811Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T05:17:22.124Z] [BOT] ✅ Posted message: Sales and Product Development Engineer @ ORG_7611a65f in #tech-jobs
[2026-01-21T05:17:22.124Z] [BOT] ✅ Industry: Sales and Product Development Engineer @ ORG_7611a65f
[2026-01-21T05:17:22.125Z] [BOT] 💾 Added channel posting: Sales and Product Development Engineer @ ORG_7611a65f → category channel (1 total channels)
[2026-01-21T05:17:22.125Z] [BOT] 💾 BEFORE ARCHIVING: 3086 jobs in database
[2026-01-21T05:17:22.127Z] [BOT] ✅ No jobs to archive (all 3086 jobs within 7-day window)
[2026-01-21T05:17:22.146Z] [BOT] 💾 Saved posted_jobs.json: 3086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:24.011Z] [BOT] ✅ Posted message: Sales and Product Development Engineer @ ORG_7611a65f in #JID_ead674af
[2026-01-21T05:17:24.011Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T05:17:24.012Z] [BOT] 💾 Added channel posting: Sales and Product Development Engineer @ ORG_7611a65f → location channel (2 total channels)
[2026-01-21T05:17:24.012Z] [BOT] 💾 BEFORE ARCHIVING: 3086 jobs in database
[2026-01-21T05:17:24.014Z] [BOT] ✅ No jobs to archive (all 3086 jobs within 7-day window)
[2026-01-21T05:17:24.031Z] [BOT] 💾 Saved posted_jobs.json: 3086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:25.533Z] [BOT] 💾 Marked as posted: Sales and Product Development Engineer @ ORG_7611a65f (instance #1)
[2026-01-21T05:17:25.534Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-21T05:17:25.536Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-21T05:17:25.556Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:28.556Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T05:17:28.557Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_44ebd2cb
[2026-01-21T05:17:28.557Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T05:17:28.963Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_44ebd2cb in #ai-jobs
[2026-01-21T05:17:28.963Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_44ebd2cb
[2026-01-21T05:17:28.964Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_44ebd2cb → category channel (1 total channels)
[2026-01-21T05:17:28.964Z] [BOT] 💾 BEFORE ARCHIVING: 3088 jobs in database
[2026-01-21T05:17:28.966Z] [BOT] ✅ No jobs to archive (all 3088 jobs within 7-day window)
[2026-01-21T05:17:28.986Z] [BOT] 💾 Saved posted_jobs.json: 3088 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:30.488Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_44ebd2cb (instance #1)
[2026-01-21T05:17:30.488Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-21T05:17:30.489Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-21T05:17:30.509Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:30.509Z] [BOT] 📍 [ROUTING] "Junior Data Engineer" @ ORG_7a9c8205
[2026-01-21T05:17:30.509Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T05:17:30.709Z] [BOT] ✅ Posted message: Junior Data Engineer @ ORG_7a9c8205 in #ai-jobs
[2026-01-21T05:17:30.709Z] [BOT] ✅ Industry: Junior Data Engineer @ ORG_7a9c8205
[2026-01-21T05:17:30.710Z] [BOT] 💾 Added channel posting: Junior Data Engineer @ ORG_7a9c8205 → category channel (1 total channels)
[2026-01-21T05:17:30.710Z] [BOT] 💾 BEFORE ARCHIVING: 3090 jobs in database
[2026-01-21T05:17:30.712Z] [BOT] ✅ No jobs to archive (all 3090 jobs within 7-day window)
[2026-01-21T05:17:30.730Z] [BOT] 💾 Saved posted_jobs.json: 3090 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:32.700Z] [BOT] ✅ Posted message: Junior Data Engineer @ ORG_7a9c8205 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T05:17:32.701Z] [BOT] 💾 Added channel posting: Junior Data Engineer @ ORG_7a9c8205 → location channel (2 total channels)
[2026-01-21T05:17:32.701Z] [BOT] 💾 BEFORE ARCHIVING: 3090 jobs in database
[2026-01-21T05:17:32.703Z] [BOT] ✅ No jobs to archive (all 3090 jobs within 7-day window)
[2026-01-21T05:17:32.723Z] [BOT] 💾 Saved posted_jobs.json: 3090 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:34.225Z] [BOT] 💾 Marked as posted: Junior Data Engineer @ ORG_7a9c8205 (instance #1)
[2026-01-21T05:17:34.225Z] [BOT] 💾 BEFORE ARCHIVING: 3091 jobs in database
[2026-01-21T05:17:34.227Z] [BOT] ✅ No jobs to archive (all 3091 jobs within 7-day window)
[2026-01-21T05:17:34.247Z] [BOT] 💾 Saved posted_jobs.json: 3091 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:34.247Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_180876eb
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T05:17:34.532Z] [BOT] ✅ Posted message: Software Engineer @ ORG_180876eb in #ai-jobs
[2026-01-21T05:17:34.533Z] [BOT] ✅ Industry: Software Engineer @ ORG_180876eb
[2026-01-21T05:17:34.533Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_180876eb → category channel (1 total channels)
[2026-01-21T05:17:34.533Z] [BOT] 💾 BEFORE ARCHIVING: 3092 jobs in database
[2026-01-21T05:17:34.535Z] [BOT] ✅ No jobs to archive (all 3092 jobs within 7-day window)
[2026-01-21T05:17:34.555Z] [BOT] 💾 Saved posted_jobs.json: 3092 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:36.383Z] [BOT] ✅ Posted message: Software Engineer @ ORG_180876eb in #JID_ead674af
[2026-01-21T05:17:36.384Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T05:17:36.384Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_180876eb → location channel (2 total channels)
[2026-01-21T05:17:36.384Z] [BOT] 💾 BEFORE ARCHIVING: 3092 jobs in database
[2026-01-21T05:17:36.386Z] [BOT] ✅ No jobs to archive (all 3092 jobs within 7-day window)
[2026-01-21T05:17:36.407Z] [BOT] 💾 Saved posted_jobs.json: 3092 active jobs
[2026-01-21T05:17:36.407Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:37.909Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_180876eb (instance #1)
[2026-01-21T05:17:37.909Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-21T05:17:37.911Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-21T05:17:37.930Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:37.930Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Research Scientist/Engineer" @ ORG_72fd3ae0
[2026-01-21T05:17:37.930Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T05:17:38.120Z] [BOT] ✅ Posted message: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #ai-jobs
  ✅ Industry: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0
[2026-01-21T05:17:38.121Z] [BOT] 💾 Added channel posting: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-01-21T05:17:38.121Z] [BOT] 💾 BEFORE ARCHIVING: 3094 jobs in database
[2026-01-21T05:17:38.123Z] [BOT] ✅ No jobs to archive (all 3094 jobs within 7-day window)
[2026-01-21T05:17:38.142Z] [BOT] 💾 Saved posted_jobs.json: 3094 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:39.644Z] [BOT] 💾 Marked as posted: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-21T05:17:39.645Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-21T05:17:39.646Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-21T05:17:39.665Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:17:42.667Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T05:17:42.667Z] [BOT] ⏭️  Skipping duplicate: JID_f3e2390a (posted within 7 days)
[2026-01-21T05:17:42.668Z] [BOT] ⏭️  Skipping duplicate: JID_0b7b19a5 (posted within 7 days)
[2026-01-21T05:17:42.668Z] [BOT] ⏭️  Skipping duplicate: JID_404c57a4 (posted within 7 days)
[2026-01-21T05:17:42.668Z] [BOT] ⏭️  Skipping duplicate: JID_9d3fd4cc (posted within 7 days)
[2026-01-21T05:17:42.668Z] [BOT] ⏭️  Skipping duplicate: JID_f0befb2a (posted within 7 days)
[2026-01-21T05:17:42.668Z] [BOT] ⏭️  Skipping duplicate: JID_6accfd5f (posted within 7 days)
[2026-01-21T05:17:42.669Z] [BOT] ⏭️  Skipping duplicate: JID_eae91a50 (posted within 7 days)
[2026-01-21T05:17:42.669Z] [BOT] ⏭️  Skipping duplicate: JID_39e50ca8 (posted within 7 days)
[2026-01-21T05:17:42.669Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r158869 (posted within 7 days)
[2026-01-21T05:17:42.669Z] [BOT] ⏭️  Skipping duplicate: JID_914a3e4e-cx_1001-job-2021718 (posted within 7 days)
[2026-01-21T05:17:42.774Z] [BOT] ✅ Loaded pending queue: 2741 total (2721 pending, 20 enriched, 0 posted)
[2026-01-21T05:17:42.962Z] [BOT] ✅ Saved pending queue: 2741 total (2721 pending, 10 enriched, 10 posted)
[2026-01-21T05:17:42.962Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T05:17:43.026Z] [BOT] 📂 Loaded 5655 existing routing entries
[2026-01-21T05:17:43.102Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5665
   Timestamp: 2026-01-21T05:17:43.077Z
[2026-01-21T05:17:43.103Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T05:17:43.103Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-21T05:17:43.103Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-21T05:17:43.103Z] [BOT] Total posts: 14
   Channels used: 4
   Top channels:
[2026-01-21T05:17:43.103Z] [BOT] 1. #tech-jobs: 6 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 1 posts
[2026-01-21T05:17:43.103Z] [BOT] [STATS] Channel stats saved
[2026-01-21T05:17:45.131Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2798) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*