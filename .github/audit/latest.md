# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T06:37:31.984Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T06:37:00.044Z] ========================================
[2026-01-20T06:37:00.046Z] Discord Bot Execution Log
[2026-01-20T06:37:00.046Z] Environment: GitHub Actions
[2026-01-20T06:37:00.046Z] Node Version: v20.19.6
[2026-01-20T06:37:00.046Z] ========================================
[2026-01-20T06:37:00.046Z] Environment Variables Check:
[2026-01-20T06:37:00.046Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T06:37:00.046Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T06:37:00.046Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T06:37:00.046Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T06:37:00.046Z] 
Multi-Channel Configuration:
[2026-01-20T06:37:00.046Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T06:37:00.047Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T06:37:00.047Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T06:37:00.047Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T06:37:00.047Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T06:37:00.047Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T06:37:00.047Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T06:37:00.047Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T06:37:00.047Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T06:37:00.047Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T06:37:00.047Z] 
Data Files Check:
[2026-01-20T06:37:00.049Z] .github/data/new_jobs.json: ✅ Exists (10 items, 175639 bytes)
[2026-01-20T06:37:00.060Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1553713 bytes)
[2026-01-20T06:37:00.060Z] 
========================================
[2026-01-20T06:37:00.060Z] Starting Enhanced Discord Bot...
[2026-01-20T06:37:00.060Z] ========================================
[2026-01-20T06:37:00.573Z] [BOT] ✅ Loaded V2 database: 2806 jobs
[2026-01-20T06:37:01.207Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T06:37:01.208Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T06:37:01.208Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T06:37:01.327Z] [BOT] ✅ Loaded pending queue: 2806 total (2786 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T06:37:01.331Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T06:37:01.331Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T06:37:01.332Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T06:37:01.333Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-20T06:37:01.333Z] [BOT] (3 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Major Account Manager @ datadog: boston, massachusetts, usa; new york, new york, usa, remote
   - Manager 1, Technical Account Management - Denver @ datadog: denver, colorado, usa, new york, new york, usa
   - Manager 2, Premier Support Engineering -  Boston @ datadog: boston, massachusetts, usa, new york, new york, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-20T06:37:01.333Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T06:37:01.335Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T06:37:01.337Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T06:37:01.337Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-20T06:37:01.338Z] [BOT] 📍 [ROUTING] "Executive Assistant I - NYC" @ datadog
[2026-01-20T06:37:01.338Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T06:37:01.342Z] [BOT ERROR] (node:2382) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T06:37:01.788Z] [BOT] ✅ Posted message: Executive Assistant I - NYC @ datadog in #tech-jobs
[2026-01-20T06:37:01.788Z] [BOT] ✅ Industry: Executive Assistant I - NYC @ datadog
[2026-01-20T06:37:01.789Z] [BOT] 💾 Added channel posting: Executive Assistant I - NYC @ datadog → category channel (1 total channels)
[2026-01-20T06:37:01.789Z] [BOT] 💾 BEFORE ARCHIVING: 2807 jobs in database
[2026-01-20T06:37:01.791Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T06:37:01.796Z] [BOT] 📦 Archived 15 jobs to 2026-01.json (15 total in archive)
[2026-01-20T06:37:01.796Z] [BOT] ✅ Archiving complete: 15 archived, 2792 active
[2026-01-20T06:37:01.813Z] [BOT] 💾 Saved posted_jobs.json: 2792 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:03.546Z] [BOT] ✅ Posted message: Executive Assistant I - NYC @ datadog in #JID_98d4f0de
[2026-01-20T06:37:03.547Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T06:37:03.547Z] [BOT] 💾 Added channel posting: Executive Assistant I - NYC @ datadog → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2792 jobs in database
[2026-01-20T06:37:03.549Z] [BOT] ✅ No jobs to archive (all 2792 jobs within 7-day window)
[2026-01-20T06:37:03.566Z] [BOT] 💾 Saved posted_jobs.json: 2792 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:05.068Z] [BOT] 💾 Marked as posted: Executive Assistant I - NYC @ datadog (instance #1)
[2026-01-20T06:37:05.068Z] [BOT] 💾 BEFORE ARCHIVING: 2793 jobs in database
[2026-01-20T06:37:05.070Z] [BOT] ✅ No jobs to archive (all 2793 jobs within 7-day window)
[2026-01-20T06:37:05.090Z] [BOT] 💾 Saved posted_jobs.json: 2793 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:05.091Z] [BOT] 📍 [ROUTING] "Federal Support Engineer 2 - Denver" @ datadog
   Category: TECH (matched: "engineer/engineering")
[2026-01-20T06:37:05.091Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T06:37:05.221Z] [BOT] ✅ Posted message: Federal Support Engineer 2 - Denver @ datadog in #tech-jobs
[2026-01-20T06:37:05.221Z] [BOT] ✅ Industry: Federal Support Engineer 2 - Denver @ datadog
[2026-01-20T06:37:05.222Z] [BOT] 💾 Added channel posting: Federal Support Engineer 2 - Denver @ datadog → category channel (1 total channels)
[2026-01-20T06:37:05.222Z] [BOT] 💾 BEFORE ARCHIVING: 2794 jobs in database
[2026-01-20T06:37:05.224Z] [BOT] ✅ No jobs to archive (all 2794 jobs within 7-day window)
[2026-01-20T06:37:05.242Z] [BOT] 💾 Saved posted_jobs.json: 2794 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:06.745Z] [BOT] 💾 Marked as posted: Federal Support Engineer 2 - Denver @ datadog (instance #1)
[2026-01-20T06:37:06.745Z] [BOT] 💾 BEFORE ARCHIVING: 2795 jobs in database
[2026-01-20T06:37:06.747Z] [BOT] ✅ No jobs to archive (all 2795 jobs within 7-day window)
[2026-01-20T06:37:06.765Z] [BOT] 💾 Saved posted_jobs.json: 2795 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:06.765Z] [BOT] 📍 [ROUTING] "Field Marketing Manager (LATAM South)" @ datadog
   Category: TECH (default)
[2026-01-20T06:37:06.765Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T06:37:06.905Z] [BOT] ✅ Posted message: Field Marketing Manager (LATAM South) @ datadog in #tech-jobs
  ✅ Industry: Field Marketing Manager (LATAM South) @ datadog
[2026-01-20T06:37:06.905Z] [BOT] 💾 Added channel posting: Field Marketing Manager (LATAM South) @ datadog → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2796 jobs in database
[2026-01-20T06:37:06.907Z] [BOT] ✅ No jobs to archive (all 2796 jobs within 7-day window)
[2026-01-20T06:37:06.924Z] [BOT] 💾 Saved posted_jobs.json: 2796 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:08.425Z] [BOT] 💾 Marked as posted: Field Marketing Manager (LATAM South) @ datadog (instance #1)
💾 BEFORE ARCHIVING: 2797 jobs in database
[2026-01-20T06:37:08.427Z] [BOT] ✅ No jobs to archive (all 2797 jobs within 7-day window)
[2026-01-20T06:37:08.442Z] [BOT] 💾 Saved posted_jobs.json: 2797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:08.442Z] [BOT] 📍 [ROUTING] "Lead UX Designer - New York" @ datadog
   Category: TECH (default)
[2026-01-20T06:37:08.442Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T06:37:08.620Z] [BOT] ✅ Posted message: Lead UX Designer - New York @ datadog in #tech-jobs
  ✅ Industry: Lead UX Designer - New York @ datadog
[2026-01-20T06:37:08.621Z] [BOT] 💾 Added channel posting: Lead UX Designer - New York @ datadog → category channel (1 total channels)
[2026-01-20T06:37:08.621Z] [BOT] 💾 BEFORE ARCHIVING: 2798 jobs in database
[2026-01-20T06:37:08.623Z] [BOT] ✅ No jobs to archive (all 2798 jobs within 7-day window)
[2026-01-20T06:37:08.638Z] [BOT] 💾 Saved posted_jobs.json: 2798 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:10.674Z] [BOT] ✅ Posted message: Lead UX Designer - New York @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T06:37:10.674Z] [BOT] 💾 Added channel posting: Lead UX Designer - New York @ datadog → location channel (2 total channels)
[2026-01-20T06:37:10.674Z] [BOT] 💾 BEFORE ARCHIVING: 2798 jobs in database
[2026-01-20T06:37:10.677Z] [BOT] ✅ No jobs to archive (all 2798 jobs within 7-day window)
[2026-01-20T06:37:10.696Z] [BOT] 💾 Saved posted_jobs.json: 2798 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:12.197Z] [BOT] 💾 Marked as posted: Lead UX Designer - New York @ datadog (instance #1)
[2026-01-20T06:37:12.197Z] [BOT] 💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-20T06:37:12.199Z] [BOT] ✅ No jobs to archive (all 2799 jobs within 7-day window)
[2026-01-20T06:37:12.219Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:12.219Z] [BOT] 📍 [ROUTING] "Global Safety & Security Senior Manager - NYC" @ datadog
   Category: TECH (matched: "security")
[2026-01-20T06:37:12.220Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T06:37:12.644Z] [BOT] ✅ Posted message: Global Safety & Security Senior Manager - NYC @ datadog in #tech-jobs
  ✅ Industry: Global Safety & Security Senior Manager - NYC @ datadog
[2026-01-20T06:37:12.645Z] [BOT] 💾 Added channel posting: Global Safety & Security Senior Manager - NYC @ datadog → category channel (1 total channels)
[2026-01-20T06:37:12.645Z] [BOT] 💾 BEFORE ARCHIVING: 2800 jobs in database
[2026-01-20T06:37:12.647Z] [BOT] ✅ No jobs to archive (all 2800 jobs within 7-day window)
[2026-01-20T06:37:12.664Z] [BOT] 💾 Saved posted_jobs.json: 2800 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:14.385Z] [BOT] ✅ Posted message: Global Safety & Security Senior Manager - NYC @ datadog in #JID_98d4f0de
[2026-01-20T06:37:14.386Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T06:37:14.386Z] [BOT] 💾 Added channel posting: Global Safety & Security Senior Manager - NYC @ datadog → location channel (2 total channels)
[2026-01-20T06:37:14.386Z] [BOT] 💾 BEFORE ARCHIVING: 2800 jobs in database
[2026-01-20T06:37:14.388Z] [BOT] ✅ No jobs to archive (all 2800 jobs within 7-day window)
[2026-01-20T06:37:14.405Z] [BOT] 💾 Saved posted_jobs.json: 2800 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:15.906Z] [BOT] 💾 Marked as posted: Global Safety & Security Senior Manager - NYC @ datadog (instance #1)
[2026-01-20T06:37:15.906Z] [BOT] 💾 BEFORE ARCHIVING: 2801 jobs in database
[2026-01-20T06:37:15.908Z] [BOT] ✅ No jobs to archive (all 2801 jobs within 7-day window)
[2026-01-20T06:37:15.926Z] [BOT] 💾 Saved posted_jobs.json: 2801 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:18.927Z] [BOT] 📌 Posting 3 jobs to #finance-jobs
[2026-01-20T06:37:18.928Z] [BOT] 📍 [ROUTING] "Field CISO" @ datadog
   Category: FINANCE (matched: "finance")
[2026-01-20T06:37:18.928Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-20T06:37:19.184Z] [BOT] ✅ Posted message: Field CISO @ datadog in #finance-jobs
  ✅ Industry: Field CISO @ datadog
[2026-01-20T06:37:19.184Z] [BOT] 💾 Added channel posting: Field CISO @ datadog → category channel (1 total channels)
[2026-01-20T06:37:19.184Z] [BOT] 💾 BEFORE ARCHIVING: 2802 jobs in database
[2026-01-20T06:37:19.186Z] [BOT] ✅ No jobs to archive (all 2802 jobs within 7-day window)
[2026-01-20T06:37:19.203Z] [BOT] 💾 Saved posted_jobs.json: 2802 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:20.705Z] [BOT] 💾 Marked as posted: Field CISO @ datadog (instance #1)
[2026-01-20T06:37:20.705Z] [BOT] 💾 BEFORE ARCHIVING: 2803 jobs in database
[2026-01-20T06:37:20.706Z] [BOT] ✅ No jobs to archive (all 2803 jobs within 7-day window)
[2026-01-20T06:37:20.725Z] [BOT] 💾 Saved posted_jobs.json: 2803 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:20.725Z] [BOT] 📍 [ROUTING] "Field CTO - Media & Entertainment" @ datadog
   Category: FINANCE (matched: "finance")
[2026-01-20T06:37:20.726Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-20T06:37:20.950Z] [BOT] ✅ Posted message: Field CTO - Media & Entertainment @ datadog in #finance-jobs
[2026-01-20T06:37:20.950Z] [BOT] ✅ Industry: Field CTO - Media & Entertainment @ datadog
[2026-01-20T06:37:20.950Z] [BOT] 💾 Added channel posting: Field CTO - Media & Entertainment @ datadog → category channel (1 total channels)
[2026-01-20T06:37:20.950Z] [BOT] 💾 BEFORE ARCHIVING: 2804 jobs in database
[2026-01-20T06:37:20.952Z] [BOT] ✅ No jobs to archive (all 2804 jobs within 7-day window)
[2026-01-20T06:37:20.967Z] [BOT] 💾 Saved posted_jobs.json: 2804 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:22.469Z] [BOT] 💾 Marked as posted: Field CTO - Media & Entertainment @ datadog (instance #1)
💾 BEFORE ARCHIVING: 2805 jobs in database
[2026-01-20T06:37:22.471Z] [BOT] ✅ No jobs to archive (all 2805 jobs within 7-day window)
[2026-01-20T06:37:22.488Z] [BOT] 💾 Saved posted_jobs.json: 2805 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:22.489Z] [BOT] 📍 [ROUTING] "GTM Strategy and Operations Analyst - Channels & Alliances" @ datadog
   Category: FINANCE (matched: "investment")
[2026-01-20T06:37:22.489Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-20T06:37:22.722Z] [BOT] ✅ Posted message: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog in #finance-jobs
  ✅ Industry: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog
[2026-01-20T06:37:22.723Z] [BOT] 💾 Added channel posting: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog → category channel (1 total channels)
[2026-01-20T06:37:22.723Z] [BOT] 💾 BEFORE ARCHIVING: 2806 jobs in database
[2026-01-20T06:37:22.725Z] [BOT] ✅ No jobs to archive (all 2806 jobs within 7-day window)
[2026-01-20T06:37:22.744Z] [BOT] 💾 Saved posted_jobs.json: 2806 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:24.385Z] [BOT] ✅ Posted message: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T06:37:24.385Z] [BOT] 💾 Added channel posting: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog → location channel (2 total channels)
[2026-01-20T06:37:24.385Z] [BOT] 💾 BEFORE ARCHIVING: 2806 jobs in database
[2026-01-20T06:37:24.387Z] [BOT] ✅ No jobs to archive (all 2806 jobs within 7-day window)
[2026-01-20T06:37:24.403Z] [BOT] 💾 Saved posted_jobs.json: 2806 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:25.905Z] [BOT] 💾 Marked as posted: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog (instance #1)
[2026-01-20T06:37:25.905Z] [BOT] 💾 BEFORE ARCHIVING: 2807 jobs in database
[2026-01-20T06:37:25.907Z] [BOT] ✅ No jobs to archive (all 2807 jobs within 7-day window)
[2026-01-20T06:37:25.925Z] [BOT] 💾 Saved posted_jobs.json: 2807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T06:37:28.925Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-20T06:37:28.926Z] [BOT] ⏭️  Skipping duplicate: JID_03d6c806 (posted within 7 days)
[2026-01-20T06:37:28.926Z] [BOT] ⏭️  Skipping duplicate: JID_9271b02d (posted within 7 days)
[2026-01-20T06:37:28.927Z] [BOT] ⏭️  Skipping duplicate: JID_7de3b3fa (posted within 7 days)
[2026-01-20T06:37:28.927Z] [BOT] ⏭️  Skipping duplicate: JID_96b2c378 (posted within 7 days)
[2026-01-20T06:37:28.927Z] [BOT] ⏭️  Skipping duplicate: JID_2b763968 (posted within 7 days)
[2026-01-20T06:37:28.927Z] [BOT] ⏭️  Skipping duplicate: JID_78a569be (posted within 7 days)
[2026-01-20T06:37:28.927Z] [BOT] ⏭️  Skipping duplicate: JID_d1b38d6c (posted within 7 days)
[2026-01-20T06:37:28.927Z] [BOT] ⏭️  Skipping duplicate: JID_d9e3e533 (posted within 7 days)
[2026-01-20T06:37:29.040Z] [BOT] ✅ Loaded pending queue: 2806 total (2786 pending, 20 enriched, 0 posted)
[2026-01-20T06:37:29.210Z] [BOT] ✅ Saved pending queue: 2806 total (2786 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T06:37:29.278Z] [BOT] 📂 Loaded 5328 existing routing entries
[2026-01-20T06:37:29.349Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 5336
[2026-01-20T06:37:29.349Z] [BOT] Timestamp: 2026-01-20T06:37:29.332Z
[2026-01-20T06:37:29.351Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 3
   Top channels:
     1. #tech-jobs: 5 posts
     2. #JID_98d4f0de: 4 posts
     3. #finance-jobs: 3 posts
[STATS] Channel stats saved
[2026-01-20T06:37:31.372Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
- [BOT ERROR] (node:2382) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*