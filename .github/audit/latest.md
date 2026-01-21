# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T08:04:02.582Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T08:03:25.832Z] ========================================
[2026-01-21T08:03:25.834Z] Discord Bot Execution Log
[2026-01-21T08:03:25.834Z] Environment: GitHub Actions
[2026-01-21T08:03:25.834Z] Node Version: v20.19.6
[2026-01-21T08:03:25.834Z] ========================================
[2026-01-21T08:03:25.834Z] Environment Variables Check:
[2026-01-21T08:03:25.834Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T08:03:25.835Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T08:03:25.835Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T08:03:25.835Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T08:03:25.835Z] 
Multi-Channel Configuration:
[2026-01-21T08:03:25.835Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T08:03:25.835Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T08:03:25.835Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T08:03:25.835Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T08:03:25.835Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T08:03:25.835Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T08:03:25.835Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T08:03:25.835Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T08:03:25.835Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T08:03:25.835Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T08:03:25.835Z] 
Data Files Check:
[2026-01-21T08:03:25.837Z] .github/data/new_jobs.json: ✅ Exists (10 items, 172099 bytes)
[2026-01-21T08:03:25.850Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1801278 bytes)
[2026-01-21T08:03:25.850Z] 
========================================
[2026-01-21T08:03:25.850Z] Starting Enhanced Discord Bot...
[2026-01-21T08:03:25.850Z] ========================================
[2026-01-21T08:03:26.319Z] [BOT] ✅ Loaded V2 database: 3168 jobs
[2026-01-21T08:03:26.870Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T08:03:26.871Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T08:03:26.871Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T08:03:27.021Z] [BOT] ✅ Loaded pending queue: 2743 total (2723 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Manager, IT Support & Operations at anthropic
[2026-01-21T08:03:27.024Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T08:03:27.025Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T08:03:27.025Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T08:03:27.026Z] [BOT] 📋 After multi-location grouping: 13 unique jobs to post
   (7 grouped as same job with different locations)
[2026-01-21T08:03:27.026Z] [BOT] 📍 4 jobs with multiple locations:
   - Android Software Engineer, Ad Formats @ reddit: san francisco, new york, chicago
   - iOS Software Engineer, Ad Formats @ reddit: new york, chicago
   - Senior Android Engineer, Apps Platform (Performance) @ reddit: new york, chicago
[2026-01-21T08:03:27.026Z] [BOT] - Senior iOS Software Engineer, iOS Platform @ reddit: los angeles, new york, san francisco
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T08:03:27.030Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T08:03:27.030Z] [BOT] 📍 [ROUTING] "Manager, IT Support & Operations" @ anthropic
   Category: FINANCE (matched: "investment")
[2026-01-21T08:03:27.030Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T08:03:27.034Z] [BOT ERROR] (node:2424) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T08:03:27.235Z] [BOT] ✅ Posted message: Manager, IT Support & Operations @ anthropic in #finance-jobs
[2026-01-21T08:03:27.235Z] [BOT] ✅ Industry: Manager, IT Support & Operations @ anthropic
[2026-01-21T08:03:27.236Z] [BOT] 💾 Added channel posting: Manager, IT Support & Operations @ anthropic → category channel (1 total channels)
[2026-01-21T08:03:27.236Z] [BOT] 💾 BEFORE ARCHIVING: 3169 jobs in database
[2026-01-21T08:03:27.238Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T08:03:27.241Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-21T08:03:27.241Z] [BOT] ✅ Archiving complete: 20 archived, 3149 active
[2026-01-21T08:03:27.260Z] [BOT] 💾 Saved posted_jobs.json: 3149 active jobs
[2026-01-21T08:03:27.261Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:28.762Z] [BOT] 💾 Marked as posted: Manager, IT Support & Operations @ anthropic (instance #1)
[2026-01-21T08:03:28.762Z] [BOT] 💾 BEFORE ARCHIVING: 3150 jobs in database
[2026-01-21T08:03:28.764Z] [BOT] ✅ No jobs to archive (all 3150 jobs within 7-day window)
[2026-01-21T08:03:28.782Z] [BOT] 💾 Saved posted_jobs.json: 3150 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:31.782Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-21T08:03:31.782Z] [BOT] 📍 [ROUTING] "Microsoft GTM Partnerships Manager, Digital Natives & Startups" @ anthropic
[2026-01-21T08:03:31.783Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T08:03:32.053Z] [BOT] ✅ Posted message: Microsoft GTM Partnerships Manager, Digital Natives & Startups @ anthropic in #tech-jobs
[2026-01-21T08:03:32.053Z] [BOT] ✅ Industry: Microsoft GTM Partnerships Manager, Digital Natives & Startups @ anthropic
[2026-01-21T08:03:32.054Z] [BOT] 💾 Added channel posting: Microsoft GTM Partnerships Manager, Digital Natives & Startups @ anthropic → category channel (1 total channels)
[2026-01-21T08:03:32.054Z] [BOT] 💾 BEFORE ARCHIVING: 3151 jobs in database
[2026-01-21T08:03:32.056Z] [BOT] ✅ No jobs to archive (all 3151 jobs within 7-day window)
[2026-01-21T08:03:32.077Z] [BOT] 💾 Saved posted_jobs.json: 3151 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:33.579Z] [BOT] 💾 Marked as posted: Microsoft GTM Partnerships Manager, Digital Natives & Startups @ anthropic (instance #1)
[2026-01-21T08:03:33.579Z] [BOT] 💾 BEFORE ARCHIVING: 3152 jobs in database
[2026-01-21T08:03:33.581Z] [BOT] ✅ No jobs to archive (all 3152 jobs within 7-day window)
[2026-01-21T08:03:33.601Z] [BOT] 💾 Saved posted_jobs.json: 3152 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:33.601Z] [BOT] 📍 [ROUTING] "Nonprofit Account Executive" @ anthropic
   Category: TECH (default)
[2026-01-21T08:03:33.602Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T08:03:33.741Z] [BOT] ✅ Posted message: Nonprofit Account Executive @ anthropic in #tech-jobs
[2026-01-21T08:03:33.742Z] [BOT] ✅ Industry: Nonprofit Account Executive @ anthropic
[2026-01-21T08:03:33.742Z] [BOT] 💾 Added channel posting: Nonprofit Account Executive @ anthropic → category channel (1 total channels)
[2026-01-21T08:03:33.742Z] [BOT] 💾 BEFORE ARCHIVING: 3153 jobs in database
[2026-01-21T08:03:33.744Z] [BOT] ✅ No jobs to archive (all 3153 jobs within 7-day window)
[2026-01-21T08:03:33.764Z] [BOT] 💾 Saved posted_jobs.json: 3153 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:35.264Z] [BOT] 💾 Marked as posted: Nonprofit Account Executive @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 3154 jobs in database
[2026-01-21T08:03:35.267Z] [BOT] ✅ No jobs to archive (all 3154 jobs within 7-day window)
[2026-01-21T08:03:35.289Z] [BOT] 💾 Saved posted_jobs.json: 3154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:35.289Z] [BOT] 📍 [ROUTING] "Software Engineer, Growth" @ anthropic
[2026-01-21T08:03:35.289Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T08:03:35.520Z] [BOT] ✅ Posted message: Software Engineer, Growth @ anthropic in #tech-jobs
  ✅ Industry: Software Engineer, Growth @ anthropic
[2026-01-21T08:03:35.521Z] [BOT] 💾 Added channel posting: Software Engineer, Growth @ anthropic → category channel (1 total channels)
[2026-01-21T08:03:35.521Z] [BOT] 💾 BEFORE ARCHIVING: 3155 jobs in database
[2026-01-21T08:03:35.523Z] [BOT] ✅ No jobs to archive (all 3155 jobs within 7-day window)
[2026-01-21T08:03:35.544Z] [BOT] 💾 Saved posted_jobs.json: 3155 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:37.045Z] [BOT] 💾 Marked as posted: Software Engineer, Growth @ anthropic (instance #1)
[2026-01-21T08:03:37.046Z] [BOT] 💾 BEFORE ARCHIVING: 3156 jobs in database
[2026-01-21T08:03:37.047Z] [BOT] ✅ No jobs to archive (all 3156 jobs within 7-day window)
[2026-01-21T08:03:37.067Z] [BOT] 💾 Saved posted_jobs.json: 3156 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:40.068Z] [BOT] 📌 Posting 6 jobs to #ai-jobs
[2026-01-21T08:03:40.069Z] [BOT] 📍 [ROUTING] "Research Engineer, Reward Models Training" @ anthropic
[2026-01-21T08:03:40.069Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T08:03:40.373Z] [BOT] ✅ Posted message: Research Engineer, Reward Models Training @ anthropic in #ai-jobs
  ✅ Industry: Research Engineer, Reward Models Training @ anthropic
[2026-01-21T08:03:40.374Z] [BOT] 💾 Added channel posting: Research Engineer, Reward Models Training @ anthropic → category channel (1 total channels)
[2026-01-21T08:03:40.374Z] [BOT] 💾 BEFORE ARCHIVING: 3157 jobs in database
[2026-01-21T08:03:40.376Z] [BOT] ✅ No jobs to archive (all 3157 jobs within 7-day window)
[2026-01-21T08:03:40.395Z] [BOT] 💾 Saved posted_jobs.json: 3157 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:41.897Z] [BOT] 💾 Marked as posted: Research Engineer, Reward Models Training @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 3158 jobs in database
[2026-01-21T08:03:41.899Z] [BOT] ✅ No jobs to archive (all 3158 jobs within 7-day window)
[2026-01-21T08:03:41.918Z] [BOT] 💾 Saved posted_jobs.json: 3158 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:41.918Z] [BOT] 📍 [ROUTING] "Android Software Engineer, Ad Formats" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-21T08:03:41.918Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T08:03:42.107Z] [BOT] ✅ Posted message: Android Software Engineer, Ad Formats @ reddit in #ai-jobs
  ✅ Industry: Android Software Engineer, Ad Formats @ reddit
[2026-01-21T08:03:42.108Z] [BOT] 💾 Added channel posting: Android Software Engineer, Ad Formats @ reddit → category channel (1 total channels)
[2026-01-21T08:03:42.108Z] [BOT] 💾 BEFORE ARCHIVING: 3159 jobs in database
[2026-01-21T08:03:42.109Z] [BOT] ✅ No jobs to archive (all 3159 jobs within 7-day window)
[2026-01-21T08:03:42.129Z] [BOT] 💾 Saved posted_jobs.json: 3159 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:43.631Z] [BOT] 💾 Marked as posted: Android Software Engineer, Ad Formats @ reddit (instance #1)
[2026-01-21T08:03:43.631Z] [BOT] 💾 BEFORE ARCHIVING: 3160 jobs in database
[2026-01-21T08:03:43.633Z] [BOT] ✅ No jobs to archive (all 3160 jobs within 7-day window)
[2026-01-21T08:03:43.652Z] [BOT] 💾 Saved posted_jobs.json: 3160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:43.652Z] [BOT] 💾 Marked as posted: Android Software Engineer, Ad Formats @ reddit (instance #1)
[2026-01-21T08:03:43.652Z] [BOT] 💾 BEFORE ARCHIVING: 3161 jobs in database
[2026-01-21T08:03:43.654Z] [BOT] ✅ No jobs to archive (all 3161 jobs within 7-day window)
[2026-01-21T08:03:43.673Z] [BOT] 💾 Saved posted_jobs.json: 3161 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:43.674Z] [BOT] 💾 Marked as posted: Android Software Engineer, Ad Formats @ reddit (instance #1)
[2026-01-21T08:03:43.674Z] [BOT] 💾 BEFORE ARCHIVING: 3162 jobs in database
[2026-01-21T08:03:43.676Z] [BOT] ✅ No jobs to archive (all 3162 jobs within 7-day window)
[2026-01-21T08:03:43.696Z] [BOT] 💾 Saved posted_jobs.json: 3162 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:43.696Z] [BOT] 📍 [ROUTING] "iOS Software Engineer, Ad Formats" @ reddit
[2026-01-21T08:03:43.696Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T08:03:43.855Z] [BOT] ✅ Posted message: iOS Software Engineer, Ad Formats @ reddit in #ai-jobs
[2026-01-21T08:03:43.856Z] [BOT] ✅ Industry: iOS Software Engineer, Ad Formats @ reddit
[2026-01-21T08:03:43.856Z] [BOT] 💾 Added channel posting: iOS Software Engineer, Ad Formats @ reddit → category channel (1 total channels)
[2026-01-21T08:03:43.856Z] [BOT] 💾 BEFORE ARCHIVING: 3163 jobs in database
[2026-01-21T08:03:43.858Z] [BOT] ✅ No jobs to archive (all 3163 jobs within 7-day window)
[2026-01-21T08:03:43.881Z] [BOT] 💾 Saved posted_jobs.json: 3163 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:45.678Z] [BOT] ✅ Posted message: iOS Software Engineer, Ad Formats @ reddit in #JID_98d4f0de
[2026-01-21T08:03:45.678Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T08:03:45.679Z] [BOT] 💾 Added channel posting: iOS Software Engineer, Ad Formats @ reddit → location channel (2 total channels)
[2026-01-21T08:03:45.679Z] [BOT] 💾 BEFORE ARCHIVING: 3163 jobs in database
[2026-01-21T08:03:45.681Z] [BOT] ✅ No jobs to archive (all 3163 jobs within 7-day window)
[2026-01-21T08:03:45.701Z] [BOT] 💾 Saved posted_jobs.json: 3163 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:47.203Z] [BOT] 💾 Marked as posted: iOS Software Engineer, Ad Formats @ reddit (instance #1)
[2026-01-21T08:03:47.203Z] [BOT] 💾 BEFORE ARCHIVING: 3164 jobs in database
[2026-01-21T08:03:47.205Z] [BOT] ✅ No jobs to archive (all 3164 jobs within 7-day window)
[2026-01-21T08:03:47.224Z] [BOT] 💾 Saved posted_jobs.json: 3164 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:47.225Z] [BOT] 💾 Marked as posted: iOS Software Engineer, Ad Formats @ reddit (instance #1)
[2026-01-21T08:03:47.225Z] [BOT] 💾 BEFORE ARCHIVING: 3165 jobs in database
[2026-01-21T08:03:47.227Z] [BOT] ✅ No jobs to archive (all 3165 jobs within 7-day window)
[2026-01-21T08:03:47.246Z] [BOT] 💾 Saved posted_jobs.json: 3165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:47.246Z] [BOT] 📍 [ROUTING] "Senior Android Engineer, Apps Platform (Performance)" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-21T08:03:47.247Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T08:03:47.397Z] [BOT] ✅ Posted message: Senior Android Engineer, Apps Platform (Performance) @ reddit in #ai-jobs
  ✅ Industry: Senior Android Engineer, Apps Platform (Performance) @ reddit
[2026-01-21T08:03:47.398Z] [BOT] 💾 Added channel posting: Senior Android Engineer, Apps Platform (Performance) @ reddit → category channel (1 total channels)
[2026-01-21T08:03:47.398Z] [BOT] 💾 BEFORE ARCHIVING: 3166 jobs in database
[2026-01-21T08:03:47.400Z] [BOT] ✅ No jobs to archive (all 3166 jobs within 7-day window)
[2026-01-21T08:03:47.419Z] [BOT] 💾 Saved posted_jobs.json: 3166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:49.334Z] [BOT] ✅ Posted message: Senior Android Engineer, Apps Platform (Performance) @ reddit in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T08:03:49.335Z] [BOT] 💾 Added channel posting: Senior Android Engineer, Apps Platform (Performance) @ reddit → location channel (2 total channels)
[2026-01-21T08:03:49.335Z] [BOT] 💾 BEFORE ARCHIVING: 3166 jobs in database
[2026-01-21T08:03:49.337Z] [BOT] ✅ No jobs to archive (all 3166 jobs within 7-day window)
[2026-01-21T08:03:49.356Z] [BOT] 💾 Saved posted_jobs.json: 3166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:50.857Z] [BOT] 💾 Marked as posted: Senior Android Engineer, Apps Platform (Performance) @ reddit (instance #1)
💾 BEFORE ARCHIVING: 3167 jobs in database
[2026-01-21T08:03:50.859Z] [BOT] ✅ No jobs to archive (all 3167 jobs within 7-day window)
[2026-01-21T08:03:50.878Z] [BOT] 💾 Saved posted_jobs.json: 3167 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:50.878Z] [BOT] 💾 Marked as posted: Senior Android Engineer, Apps Platform (Performance) @ reddit (instance #1)
[2026-01-21T08:03:50.878Z] [BOT] 💾 BEFORE ARCHIVING: 3168 jobs in database
[2026-01-21T08:03:50.880Z] [BOT] ✅ No jobs to archive (all 3168 jobs within 7-day window)
[2026-01-21T08:03:50.898Z] [BOT] 💾 Saved posted_jobs.json: 3168 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:50.899Z] [BOT] 📍 [ROUTING] "Senior Client Account Manager, Large Customer Sales (B2B Tech)" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-21T08:03:50.899Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T08:03:51.225Z] [BOT] ✅ Posted message: Senior Client Account Manager, Large Customer Sales (B2B Tech) @ reddit in #ai-jobs
  ✅ Industry: Senior Client Account Manager, Large Customer Sales (B2B Tech) @ reddit
[2026-01-21T08:03:51.226Z] [BOT] 💾 Added channel posting: Senior Client Account Manager, Large Customer Sales (B2B Tech) @ reddit → category channel (1 total channels)
[2026-01-21T08:03:51.226Z] [BOT] 💾 BEFORE ARCHIVING: 3169 jobs in database
[2026-01-21T08:03:51.228Z] [BOT] ✅ No jobs to archive (all 3169 jobs within 7-day window)
[2026-01-21T08:03:51.248Z] [BOT] 💾 Saved posted_jobs.json: 3169 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:53.027Z] [BOT] ✅ Posted message: Senior Client Account Manager, Large Customer Sales (B2B Tech) @ reddit in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T08:03:53.028Z] [BOT] 💾 Added channel posting: Senior Client Account Manager, Large Customer Sales (B2B Tech) @ reddit → location channel (2 total channels)
[2026-01-21T08:03:53.028Z] [BOT] 💾 BEFORE ARCHIVING: 3169 jobs in database
[2026-01-21T08:03:53.030Z] [BOT] ✅ No jobs to archive (all 3169 jobs within 7-day window)
[2026-01-21T08:03:53.049Z] [BOT] 💾 Saved posted_jobs.json: 3169 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:54.549Z] [BOT] 💾 Marked as posted: Senior Client Account Manager, Large Customer Sales (B2B Tech) @ reddit (instance #1)
[2026-01-21T08:03:54.549Z] [BOT] 💾 BEFORE ARCHIVING: 3170 jobs in database
[2026-01-21T08:03:54.551Z] [BOT] ✅ No jobs to archive (all 3170 jobs within 7-day window)
[2026-01-21T08:03:54.570Z] [BOT] 💾 Saved posted_jobs.json: 3170 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:54.571Z] [BOT] 📍 [ROUTING] "Senior iOS Software Engineer, iOS Platform" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-21T08:03:54.571Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T08:03:54.716Z] [BOT] ✅ Posted message: Senior iOS Software Engineer, iOS Platform @ reddit in #ai-jobs
  ✅ Industry: Senior iOS Software Engineer, iOS Platform @ reddit
[2026-01-21T08:03:54.717Z] [BOT] 💾 Added channel posting: Senior iOS Software Engineer, iOS Platform @ reddit → category channel (1 total channels)
[2026-01-21T08:03:54.717Z] [BOT] 💾 BEFORE ARCHIVING: 3171 jobs in database
[2026-01-21T08:03:54.718Z] [BOT] ✅ No jobs to archive (all 3171 jobs within 7-day window)
[2026-01-21T08:03:54.739Z] [BOT] 💾 Saved posted_jobs.json: 3171 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:56.241Z] [BOT] 💾 Marked as posted: Senior iOS Software Engineer, iOS Platform @ reddit (instance #1)
[2026-01-21T08:03:56.241Z] [BOT] 💾 BEFORE ARCHIVING: 3172 jobs in database
[2026-01-21T08:03:56.243Z] [BOT] ✅ No jobs to archive (all 3172 jobs within 7-day window)
[2026-01-21T08:03:56.262Z] [BOT] 💾 Saved posted_jobs.json: 3172 active jobs
[2026-01-21T08:03:56.262Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:56.262Z] [BOT] 💾 Marked as posted: Senior iOS Software Engineer, iOS Platform @ reddit (instance #1)
[2026-01-21T08:03:56.262Z] [BOT] 💾 BEFORE ARCHIVING: 3173 jobs in database
[2026-01-21T08:03:56.264Z] [BOT] ✅ No jobs to archive (all 3173 jobs within 7-day window)
[2026-01-21T08:03:56.284Z] [BOT] 💾 Saved posted_jobs.json: 3173 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:56.284Z] [BOT] 💾 Marked as posted: Senior iOS Software Engineer, iOS Platform @ reddit (instance #1)
[2026-01-21T08:03:56.284Z] [BOT] 💾 BEFORE ARCHIVING: 3174 jobs in database
[2026-01-21T08:03:56.286Z] [BOT] ✅ No jobs to archive (all 3174 jobs within 7-day window)
[2026-01-21T08:03:56.304Z] [BOT] 💾 Saved posted_jobs.json: 3174 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T08:03:59.305Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T08:03:59.306Z] [BOT] ⏭️  Skipping duplicate: JID_438870e0 (posted within 7 days)
[2026-01-21T08:03:59.307Z] [BOT] ⏭️  Skipping duplicate: JID_623a891c (posted within 7 days)
[2026-01-21T08:03:59.307Z] [BOT] ⏭️  Skipping duplicate: JID_bd579612 (posted within 7 days)
[2026-01-21T08:03:59.307Z] [BOT] ⏭️  Skipping duplicate: JID_aa3e041f (posted within 7 days)
[2026-01-21T08:03:59.307Z] [BOT] ⏭️  Skipping duplicate: JID_f718e68a (posted within 7 days)
[2026-01-21T08:03:59.307Z] [BOT] ⏭️  Skipping duplicate: JID_4cf4e6fa (posted within 7 days)
[2026-01-21T08:03:59.307Z] [BOT] ⏭️  Skipping duplicate: JID_93d99d6b (posted within 7 days)
[2026-01-21T08:03:59.307Z] [BOT] ⏭️  Skipping duplicate: JID_b0508a8e (posted within 7 days)
[2026-01-21T08:03:59.308Z] [BOT] ⏭️  Skipping duplicate: JID_70f48c09 (posted within 7 days)
[2026-01-21T08:03:59.308Z] [BOT] ⏭️  Skipping duplicate: JID_30ee4c4d (posted within 7 days)
[2026-01-21T08:03:59.449Z] [BOT] ✅ Loaded pending queue: 2743 total (2723 pending, 20 enriched, 0 posted)
[2026-01-21T08:03:59.633Z] [BOT] ✅ Saved pending queue: 2743 total (2723 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-21T08:03:59.634Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T08:03:59.701Z] [BOT] 📂 Loaded 5745 existing routing entries
[2026-01-21T08:03:59.773Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5755
   Timestamp: 2026-01-21T08:03:59.752Z
[2026-01-21T08:03:59.774Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 13
[2026-01-21T08:03:59.774Z] [BOT] Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-21T08:03:59.774Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 4
   Top channels:
[2026-01-21T08:03:59.774Z] [BOT] 1. #ai-jobs: 6 posts
     2. #tech-jobs: 3 posts
     3. #JID_98d4f0de: 3 posts
[2026-01-21T08:03:59.774Z] [BOT] 4. #finance-jobs: 1 posts
[2026-01-21T08:03:59.774Z] [BOT] [STATS] Channel stats saved
[2026-01-21T08:04:01.793Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2424) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*