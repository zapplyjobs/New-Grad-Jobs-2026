# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T00:56:24.361Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T00:55:50.487Z] ========================================
[2026-01-21T00:55:50.489Z] Discord Bot Execution Log
[2026-01-21T00:55:50.489Z] Environment: GitHub Actions
[2026-01-21T00:55:50.489Z] Node Version: v20.19.6
[2026-01-21T00:55:50.489Z] ========================================
[2026-01-21T00:55:50.489Z] Environment Variables Check:
[2026-01-21T00:55:50.489Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T00:55:50.489Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T00:55:50.489Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T00:55:50.489Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T00:55:50.489Z] 
Multi-Channel Configuration:
[2026-01-21T00:55:50.490Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T00:55:50.490Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T00:55:50.490Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T00:55:50.490Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T00:55:50.490Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T00:55:50.490Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T00:55:50.490Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T00:55:50.490Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T00:55:50.490Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T00:55:50.490Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T00:55:50.490Z] 
Data Files Check:
[2026-01-21T00:55:50.491Z] .github/data/new_jobs.json: ✅ Exists (10 items, 172769 bytes)
[2026-01-21T00:55:50.503Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1726853 bytes)
[2026-01-21T00:55:50.503Z] 
========================================
[2026-01-21T00:55:50.503Z] Starting Enhanced Discord Bot...
[2026-01-21T00:55:50.503Z] ========================================
[2026-01-21T00:55:50.954Z] [BOT] ✅ Loaded V2 database: 3075 jobs
[2026-01-21T00:55:51.537Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T00:55:51.537Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T00:55:51.538Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T00:55:51.689Z] [BOT] ✅ Loaded pending queue: 2743 total (2723 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Atc – Software and Platform Analyst at Accenture
[2026-01-21T00:55:51.692Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T00:55:51.692Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T00:55:51.693Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T00:55:51.693Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T00:55:51.694Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T00:55:51.698Z] [BOT] 📌 Posting 2 jobs to #tech-jobs
[2026-01-21T00:55:51.699Z] [BOT] 📍 [ROUTING] "Atc – Software and Platform Analyst" @ ORG_6cd9e83c
   Category: TECH (matched: "software")
[2026-01-21T00:55:51.699Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T00:55:51.702Z] [BOT ERROR] (node:2437) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T00:55:51.897Z] [BOT] ✅ Posted message: Atc – Software and Platform Analyst @ ORG_6cd9e83c in #tech-jobs
[2026-01-21T00:55:51.897Z] [BOT] ✅ Industry: Atc – Software and Platform Analyst @ ORG_6cd9e83c
[2026-01-21T00:55:51.898Z] [BOT] 💾 Added channel posting: Atc – Software and Platform Analyst @ ORG_6cd9e83c → category channel (1 total channels)
[2026-01-21T00:55:51.898Z] [BOT] 💾 BEFORE ARCHIVING: 3076 jobs in database
[2026-01-21T00:55:51.900Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T00:55:51.904Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-21T00:55:51.904Z] [BOT] ✅ Archiving complete: 20 archived, 3056 active
[2026-01-21T00:55:51.925Z] [BOT] 💾 Saved posted_jobs.json: 3056 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:55:53.659Z] [BOT] ✅ Posted message: Atc – Software and Platform Analyst @ ORG_6cd9e83c in #JID_98d4f0de
[2026-01-21T00:55:53.659Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T00:55:53.659Z] [BOT] 💾 Added channel posting: Atc – Software and Platform Analyst @ ORG_6cd9e83c → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3056 jobs in database
[2026-01-21T00:55:53.662Z] [BOT] ✅ No jobs to archive (all 3056 jobs within 7-day window)
[2026-01-21T00:55:53.679Z] [BOT] 💾 Saved posted_jobs.json: 3056 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:55:55.179Z] [BOT] 💾 Marked as posted: Atc – Software and Platform Analyst @ ORG_6cd9e83c (instance #1)
💾 BEFORE ARCHIVING: 3057 jobs in database
[2026-01-21T00:55:55.182Z] [BOT] ✅ No jobs to archive (all 3057 jobs within 7-day window)
[2026-01-21T00:55:55.202Z] [BOT] 💾 Saved posted_jobs.json: 3057 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:55:55.203Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - 3D/4D Generation - 2026 Start" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T00:55:55.440Z] [BOT] ✅ Posted message: Research Scientist Graduate - 3D/4D Generation - 2026 Start @ ORG_08c9a13c in #tech-jobs
  ✅ Industry: Research Scientist Graduate - 3D/4D Generation - 2026 Start @ ORG_08c9a13c
[2026-01-21T00:55:55.441Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - 3D/4D Generation - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-21T00:55:55.441Z] [BOT] 💾 BEFORE ARCHIVING: 3058 jobs in database
[2026-01-21T00:55:55.443Z] [BOT] ✅ No jobs to archive (all 3058 jobs within 7-day window)
[2026-01-21T00:55:55.461Z] [BOT] 💾 Saved posted_jobs.json: 3058 active jobs
[2026-01-21T00:55:55.461Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T00:55:56.962Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - 3D/4D Generation - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-21T00:55:56.963Z] [BOT] 💾 BEFORE ARCHIVING: 3059 jobs in database
[2026-01-21T00:55:56.965Z] [BOT] ✅ No jobs to archive (all 3059 jobs within 7-day window)
[2026-01-21T00:55:56.984Z] [BOT] 💾 Saved posted_jobs.json: 3059 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:55:59.985Z] [BOT] 📌 Posting 8 jobs to #finance-jobs
[2026-01-21T00:55:59.985Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Southern California - Local, Higher Education)" @ verkada
[2026-01-21T00:55:59.985Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-21T00:56:00.170Z] [BOT] ✅ Posted message: Enterprise Account Executive (Southern California - Local, Higher Education) @ verkada in #finance-jobs
[2026-01-21T00:56:00.170Z] [BOT] ✅ Industry: Enterprise Account Executive (Southern California - Local, Higher Education) @ verkada
[2026-01-21T00:56:00.171Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Southern California - Local, Higher Education) @ verkada → category channel (1 total channels)
[2026-01-21T00:56:00.171Z] [BOT] 💾 BEFORE ARCHIVING: 3060 jobs in database
[2026-01-21T00:56:00.173Z] [BOT] ✅ No jobs to archive (all 3060 jobs within 7-day window)
[2026-01-21T00:56:00.193Z] [BOT] 💾 Saved posted_jobs.json: 3060 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:01.694Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Southern California - Local, Higher Education) @ verkada (instance #1)
[2026-01-21T00:56:01.694Z] [BOT] 💾 BEFORE ARCHIVING: 3061 jobs in database
[2026-01-21T00:56:01.697Z] [BOT] ✅ No jobs to archive (all 3061 jobs within 7-day window)
[2026-01-21T00:56:01.717Z] [BOT] 💾 Saved posted_jobs.json: 3061 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:01.717Z] [BOT] 📍 [ROUTING] "Channel Marketing Associate (Remote)" @ verkada
[2026-01-21T00:56:01.717Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-21T00:56:02.088Z] [BOT] ✅ Posted message: Channel Marketing Associate (Remote) @ verkada in #finance-jobs
[2026-01-21T00:56:02.088Z] [BOT] ✅ Industry: Channel Marketing Associate (Remote) @ verkada
[2026-01-21T00:56:02.089Z] [BOT] 💾 Added channel posting: Channel Marketing Associate (Remote) @ verkada → category channel (1 total channels)
[2026-01-21T00:56:02.089Z] [BOT] 💾 BEFORE ARCHIVING: 3062 jobs in database
[2026-01-21T00:56:02.091Z] [BOT] ✅ No jobs to archive (all 3062 jobs within 7-day window)
[2026-01-21T00:56:02.111Z] [BOT] 💾 Saved posted_jobs.json: 3062 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:03.959Z] [BOT] ✅ Posted message: Channel Marketing Associate (Remote) @ verkada in #JID_98d4f0de
[2026-01-21T00:56:03.960Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T00:56:03.960Z] [BOT] 💾 Added channel posting: Channel Marketing Associate (Remote) @ verkada → location channel (2 total channels)
[2026-01-21T00:56:03.960Z] [BOT] 💾 BEFORE ARCHIVING: 3062 jobs in database
[2026-01-21T00:56:03.962Z] [BOT] ✅ No jobs to archive (all 3062 jobs within 7-day window)
[2026-01-21T00:56:03.982Z] [BOT] 💾 Saved posted_jobs.json: 3062 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:05.484Z] [BOT] 💾 Marked as posted: Channel Marketing Associate (Remote) @ verkada (instance #1)
[2026-01-21T00:56:05.484Z] [BOT] 💾 BEFORE ARCHIVING: 3063 jobs in database
[2026-01-21T00:56:05.487Z] [BOT] ✅ No jobs to archive (all 3063 jobs within 7-day window)
[2026-01-21T00:56:05.504Z] [BOT] 💾 Saved posted_jobs.json: 3063 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:05.504Z] [BOT] 📍 [ROUTING] "Communications Manager" @ verkada
[2026-01-21T00:56:05.504Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-21T00:56:05.755Z] [BOT] ✅ Posted message: Communications Manager @ verkada in #finance-jobs
  ✅ Industry: Communications Manager @ verkada
[2026-01-21T00:56:05.755Z] [BOT] 💾 Added channel posting: Communications Manager @ verkada → category channel (1 total channels)
[2026-01-21T00:56:05.756Z] [BOT] 💾 BEFORE ARCHIVING: 3064 jobs in database
[2026-01-21T00:56:05.757Z] [BOT] ✅ No jobs to archive (all 3064 jobs within 7-day window)
[2026-01-21T00:56:05.776Z] [BOT] 💾 Saved posted_jobs.json: 3064 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:07.561Z] [BOT] ✅ Posted message: Communications Manager @ verkada in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T00:56:07.561Z] [BOT] 💾 Added channel posting: Communications Manager @ verkada → location channel (2 total channels)
[2026-01-21T00:56:07.561Z] [BOT] 💾 BEFORE ARCHIVING: 3064 jobs in database
[2026-01-21T00:56:07.563Z] [BOT] ✅ No jobs to archive (all 3064 jobs within 7-day window)
[2026-01-21T00:56:07.582Z] [BOT] 💾 Saved posted_jobs.json: 3064 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:09.083Z] [BOT] 💾 Marked as posted: Communications Manager @ verkada (instance #1)
💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-21T00:56:09.085Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-21T00:56:09.105Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:09.105Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Chicago - SLED)" @ verkada
[2026-01-21T00:56:09.105Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-21T00:56:09.477Z] [BOT] ✅ Posted message: Enterprise Account Executive (Chicago - SLED) @ verkada in #finance-jobs
  ✅ Industry: Enterprise Account Executive (Chicago - SLED) @ verkada
[2026-01-21T00:56:09.478Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Chicago - SLED) @ verkada → category channel (1 total channels)
[2026-01-21T00:56:09.478Z] [BOT] 💾 BEFORE ARCHIVING: 3066 jobs in database
[2026-01-21T00:56:09.481Z] [BOT] ✅ No jobs to archive (all 3066 jobs within 7-day window)
[2026-01-21T00:56:09.498Z] [BOT] 💾 Saved posted_jobs.json: 3066 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:11.000Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Chicago - SLED) @ verkada (instance #1)
💾 BEFORE ARCHIVING: 3067 jobs in database
[2026-01-21T00:56:11.002Z] [BOT] ✅ No jobs to archive (all 3067 jobs within 7-day window)
[2026-01-21T00:56:11.020Z] [BOT] 💾 Saved posted_jobs.json: 3067 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:11.020Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Colorado - SLED)" @ verkada
[2026-01-21T00:56:11.020Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-21T00:56:11.171Z] [BOT] ✅ Posted message: Enterprise Account Executive (Colorado - SLED) @ verkada in #finance-jobs
  ✅ Industry: Enterprise Account Executive (Colorado - SLED) @ verkada
[2026-01-21T00:56:11.172Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Colorado - SLED) @ verkada → category channel (1 total channels)
[2026-01-21T00:56:11.172Z] [BOT] 💾 BEFORE ARCHIVING: 3068 jobs in database
[2026-01-21T00:56:11.174Z] [BOT] ✅ No jobs to archive (all 3068 jobs within 7-day window)
[2026-01-21T00:56:11.194Z] [BOT] 💾 Saved posted_jobs.json: 3068 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:12.697Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Colorado - SLED) @ verkada (instance #1)
[2026-01-21T00:56:12.697Z] [BOT] 💾 BEFORE ARCHIVING: 3069 jobs in database
[2026-01-21T00:56:12.699Z] [BOT] ✅ No jobs to archive (all 3069 jobs within 7-day window)
[2026-01-21T00:56:12.717Z] [BOT] 💾 Saved posted_jobs.json: 3069 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:12.718Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Corporate/Manufacturing - East)" @ verkada
[2026-01-21T00:56:12.718Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-21T00:56:12.925Z] [BOT] ✅ Posted message: Enterprise Account Executive (Corporate/Manufacturing - East) @ verkada in #finance-jobs
[2026-01-21T00:56:12.925Z] [BOT] ✅ Industry: Enterprise Account Executive (Corporate/Manufacturing - East) @ verkada
[2026-01-21T00:56:12.925Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Corporate/Manufacturing - East) @ verkada → category channel (1 total channels)
[2026-01-21T00:56:12.925Z] [BOT] 💾 BEFORE ARCHIVING: 3070 jobs in database
[2026-01-21T00:56:12.927Z] [BOT] ✅ No jobs to archive (all 3070 jobs within 7-day window)
[2026-01-21T00:56:12.947Z] [BOT] 💾 Saved posted_jobs.json: 3070 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:14.449Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Corporate/Manufacturing - East) @ verkada (instance #1)
[2026-01-21T00:56:14.449Z] [BOT] 💾 BEFORE ARCHIVING: 3071 jobs in database
[2026-01-21T00:56:14.451Z] [BOT] ✅ No jobs to archive (all 3071 jobs within 7-day window)
[2026-01-21T00:56:14.469Z] [BOT] 💾 Saved posted_jobs.json: 3071 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:14.469Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Houston - SLED)" @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-21T00:56:14.469Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T00:56:14.718Z] [BOT] ✅ Posted message: Enterprise Account Executive (Houston - SLED) @ verkada in #finance-jobs
  ✅ Industry: Enterprise Account Executive (Houston - SLED) @ verkada
[2026-01-21T00:56:14.719Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Houston - SLED) @ verkada → category channel (1 total channels)
[2026-01-21T00:56:14.719Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-21T00:56:14.721Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-21T00:56:14.740Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:16.242Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Houston - SLED) @ verkada (instance #1)
💾 BEFORE ARCHIVING: 3073 jobs in database
[2026-01-21T00:56:16.244Z] [BOT] ✅ No jobs to archive (all 3073 jobs within 7-day window)
[2026-01-21T00:56:16.261Z] [BOT] 💾 Saved posted_jobs.json: 3073 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:16.261Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Kansas - SLED)" @ verkada
[2026-01-21T00:56:16.261Z] [BOT] Category: FINANCE (matched: "tax")
[2026-01-21T00:56:16.261Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T00:56:16.557Z] [BOT] ✅ Posted message: Enterprise Account Executive (Kansas - SLED) @ verkada in #finance-jobs
  ✅ Industry: Enterprise Account Executive (Kansas - SLED) @ verkada
[2026-01-21T00:56:16.557Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Kansas - SLED) @ verkada → category channel (1 total channels)
[2026-01-21T00:56:16.557Z] [BOT] 💾 BEFORE ARCHIVING: 3074 jobs in database
[2026-01-21T00:56:16.559Z] [BOT] ✅ No jobs to archive (all 3074 jobs within 7-day window)
[2026-01-21T00:56:16.577Z] [BOT] 💾 Saved posted_jobs.json: 3074 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:18.079Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Kansas - SLED) @ verkada (instance #1)
[2026-01-21T00:56:18.080Z] [BOT] 💾 BEFORE ARCHIVING: 3075 jobs in database
[2026-01-21T00:56:18.081Z] [BOT] ✅ No jobs to archive (all 3075 jobs within 7-day window)
[2026-01-21T00:56:18.099Z] [BOT] 💾 Saved posted_jobs.json: 3075 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T00:56:21.100Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T00:56:21.100Z] [BOT] ⏭️  Skipping duplicate: JID_28f307b7-naelfy26_r00304885 (posted within 7 days)
[2026-01-21T00:56:21.101Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_5b3b53e8-detail (posted within 7 days)
[2026-01-21T00:56:21.101Z] [BOT] ⏭️  Skipping duplicate: JID_2de00e78 (posted within 7 days)
[2026-01-21T00:56:21.101Z] [BOT] ⏭️  Skipping duplicate: JID_39c31ac9 (posted within 7 days)
[2026-01-21T00:56:21.101Z] [BOT] ⏭️  Skipping duplicate: JID_a02b2616 (posted within 7 days)
[2026-01-21T00:56:21.101Z] [BOT] ⏭️  Skipping duplicate: JID_a73599fa (posted within 7 days)
[2026-01-21T00:56:21.102Z] [BOT] ⏭️  Skipping duplicate: JID_639c4656 (posted within 7 days)
[2026-01-21T00:56:21.102Z] [BOT] ⏭️  Skipping duplicate: JID_f9f2534f (posted within 7 days)
[2026-01-21T00:56:21.102Z] [BOT] ⏭️  Skipping duplicate: JID_52f3e750 (posted within 7 days)
[2026-01-21T00:56:21.102Z] [BOT] ⏭️  Skipping duplicate: JID_9b390ef8 (posted within 7 days)
[2026-01-21T00:56:21.241Z] [BOT] ✅ Loaded pending queue: 2743 total (2723 pending, 20 enriched, 0 posted)
[2026-01-21T00:56:21.409Z] [BOT] ✅ Saved pending queue: 2743 total (2723 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T00:56:21.491Z] [BOT] 📂 Loaded 5585 existing routing entries
[2026-01-21T00:56:21.560Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5595
   Timestamp: 2026-01-21T00:56:21.541Z
[2026-01-21T00:56:21.561Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 13
[2026-01-21T00:56:21.561Z] [BOT] Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-21T00:56:21.561Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 3
[2026-01-21T00:56:21.561Z] [BOT] Top channels:
     1. #finance-jobs: 8 posts
     2. #JID_98d4f0de: 3 posts
     3. #tech-jobs: 2 posts
[2026-01-21T00:56:21.561Z] [BOT] [STATS] Channel stats saved
[2026-01-21T00:56:23.578Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2437) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*