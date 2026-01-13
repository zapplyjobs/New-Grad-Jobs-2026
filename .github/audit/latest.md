# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T04:51:54.821Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T04:51:14.153Z] ========================================
[2026-01-13T04:51:14.155Z] Discord Bot Execution Log
[2026-01-13T04:51:14.155Z] Environment: GitHub Actions
[2026-01-13T04:51:14.155Z] Node Version: v20.19.6
[2026-01-13T04:51:14.155Z] ========================================
[2026-01-13T04:51:14.155Z] Environment Variables Check:
[2026-01-13T04:51:14.155Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T04:51:14.155Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T04:51:14.155Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T04:51:14.156Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T04:51:14.156Z] 
Multi-Channel Configuration:
[2026-01-13T04:51:14.156Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T04:51:14.156Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T04:51:14.156Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T04:51:14.156Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T04:51:14.156Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T04:51:14.156Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T04:51:14.156Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T04:51:14.156Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T04:51:14.156Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T04:51:14.156Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T04:51:14.156Z] 
Data Files Check:
[2026-01-13T04:51:14.158Z] .github/data/new_jobs.json: ✅ Exists (10 items, 172248 bytes)
[2026-01-13T04:51:14.161Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 368277 bytes)
[2026-01-13T04:51:14.161Z] 
========================================
[2026-01-13T04:51:14.161Z] Starting Enhanced Discord Bot...
[2026-01-13T04:51:14.161Z] ========================================
[2026-01-13T04:51:14.610Z] [BOT] ✅ Loaded V2 database: 699 jobs
[2026-01-13T04:51:17.083Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T04:51:17.084Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T04:51:17.084Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T04:51:17.229Z] [BOT] ✅ Loaded pending queue: 2702 total (2682 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Executive Assistant, Go to Market at samsara
[2026-01-13T04:51:17.230Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T04:51:17.231Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T04:51:17.231Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T04:51:17.231Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-13T04:51:17.232Z] [BOT] (12 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Mid-Market Account Development Representative - Outbound @ samsara: atlanta, phoenix
   - Select Major Account Executive EST/CST @ samsara: milwaukee, chicago, atlanta, austin, baltimore, boston, charlotte, columbia, dallas
⏸️ Limiting to 10 jobs this run, 12 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T04:51:17.237Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-13T04:51:17.238Z] [BOT] 📍 [ROUTING] "Executive Assistant, Go to Market" @ samsara
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-13T04:51:17.242Z] [BOT ERROR] (node:2418) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T04:51:17.904Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant, Go to Market @ samsara in #📁・JID_e938df7b
  ✅ Industry: Executive Assistant, Go to Market @ samsara
[2026-01-13T04:51:19.794Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant, Go to Market @ samsara in #🌉・san-francisco
[2026-01-13T04:51:19.794Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T04:51:21.296Z] [BOT] 💾 Marked as posted: Executive Assistant, Go to Market @ samsara (instance #1)
[2026-01-13T04:51:21.296Z] [BOT] 💾 BEFORE ARCHIVING: 700 jobs in database
[2026-01-13T04:51:21.297Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T04:51:21.300Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-13T04:51:21.301Z] [BOT] ✅ Archiving complete: 1 archived, 699 active
[2026-01-13T04:51:21.307Z] [BOT] 💾 Saved posted_jobs.json: 699 active jobs
[2026-01-13T04:51:21.307Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:24.308Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-13T04:51:24.308Z] [BOT] 📍 [ROUTING] "Hardware Solutions Firmware Engineer" @ samsara
   Category: TECH (matched: "engineer/engineering")
[2026-01-13T04:51:24.308Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T04:51:24.869Z] [BOT] ✅ Created forum post: 🏢 Hardware Solutions Firmware Engineer @ samsara in #💻・tech-jobs
[2026-01-13T04:51:24.869Z] [BOT] ✅ Industry: Hardware Solutions Firmware Engineer @ samsara
[2026-01-13T04:51:26.645Z] [BOT] ✅ Created forum post: 🏢 Hardware Solutions Firmware Engineer @ samsara in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T04:51:28.147Z] [BOT] 💾 Marked as posted: Hardware Solutions Firmware Engineer @ samsara (instance #1)
💾 BEFORE ARCHIVING: 700 jobs in database
[2026-01-13T04:51:28.147Z] [BOT] ✅ No jobs to archive (all 700 jobs within 7-day window)
[2026-01-13T04:51:28.153Z] [BOT] 💾 Saved posted_jobs.json: 700 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:31.154Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-13T04:51:31.154Z] [BOT] 📍 [ROUTING] "Manager Account Development, Relocation to Atlanta" @ samsara
   Category: SALES (matched: "sales")
[2026-01-13T04:51:31.155Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T04:51:31.404Z] [BOT] ✅ Created forum post: 🏢 Manager Account Development, Relocation to Atlanta @ samsara in #💲・sales-jobs
[2026-01-13T04:51:31.404Z] [BOT] ✅ Industry: Manager Account Development, Relocation to Atlanta @ samsara
[2026-01-13T04:51:32.907Z] [BOT] 💾 Marked as posted: Manager Account Development, Relocation to Atlanta @ samsara (instance #1)
[2026-01-13T04:51:32.907Z] [BOT] 💾 BEFORE ARCHIVING: 701 jobs in database
[2026-01-13T04:51:32.908Z] [BOT] ✅ No jobs to archive (all 701 jobs within 7-day window)
[2026-01-13T04:51:32.914Z] [BOT] 💾 Saved posted_jobs.json: 701 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:32.914Z] [BOT] 💾 Marked as posted: Manager Account Development, Relocation to Atlanta @ samsara (instance #1)
[2026-01-13T04:51:32.914Z] [BOT] 💾 BEFORE ARCHIVING: 702 jobs in database
[2026-01-13T04:51:32.914Z] [BOT] ✅ No jobs to archive (all 702 jobs within 7-day window)
[2026-01-13T04:51:32.920Z] [BOT] 💾 Saved posted_jobs.json: 702 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:32.920Z] [BOT] 💾 Marked as posted: Manager Account Development, Relocation to Atlanta @ samsara (instance #1)
[2026-01-13T04:51:32.920Z] [BOT] 💾 BEFORE ARCHIVING: 703 jobs in database
[2026-01-13T04:51:32.920Z] [BOT] ✅ No jobs to archive (all 703 jobs within 7-day window)
[2026-01-13T04:51:32.925Z] [BOT] 💾 Saved posted_jobs.json: 703 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:32.926Z] [BOT] 💾 Marked as posted: Manager Account Development, Relocation to Atlanta @ samsara (instance #1)
💾 BEFORE ARCHIVING: 704 jobs in database
[2026-01-13T04:51:32.926Z] [BOT] ✅ No jobs to archive (all 704 jobs within 7-day window)
[2026-01-13T04:51:32.930Z] [BOT] 💾 Saved posted_jobs.json: 704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:32.931Z] [BOT] 📍 [ROUTING] "Manager of Account Development" @ samsara
[2026-01-13T04:51:32.931Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T04:51:33.137Z] [BOT] ✅ Created forum post: 🏢 Manager of Account Development @ samsara in #💲・sales-jobs
  ✅ Industry: Manager of Account Development @ samsara
[2026-01-13T04:51:35.013Z] [BOT] ✅ Created forum post: 🏢 Manager of Account Development @ samsara in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T04:51:36.514Z] [BOT] 💾 Marked as posted: Manager of Account Development @ samsara (instance #1)
[2026-01-13T04:51:36.514Z] [BOT] 💾 BEFORE ARCHIVING: 705 jobs in database
[2026-01-13T04:51:36.515Z] [BOT] ✅ No jobs to archive (all 705 jobs within 7-day window)
[2026-01-13T04:51:36.520Z] [BOT] 💾 Saved posted_jobs.json: 705 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:36.520Z] [BOT] 📍 [ROUTING] "Mid-Market Account Development Representative - Outbound" @ samsara
   Category: SALES (matched: "sales")
[2026-01-13T04:51:36.520Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T04:51:36.767Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Development Representative - Outbound @ samsara in #💲・sales-jobs
  ✅ Industry: Mid-Market Account Development Representative - Outbound @ samsara
[2026-01-13T04:51:38.269Z] [BOT] 💾 Marked as posted: Mid-Market Account Development Representative - Outbound @ samsara (instance #1)
[2026-01-13T04:51:38.269Z] [BOT] 💾 BEFORE ARCHIVING: 706 jobs in database
[2026-01-13T04:51:38.270Z] [BOT] ✅ No jobs to archive (all 706 jobs within 7-day window)
[2026-01-13T04:51:38.275Z] [BOT] 💾 Saved posted_jobs.json: 706 active jobs
[2026-01-13T04:51:38.275Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:38.275Z] [BOT] 💾 Marked as posted: Mid-Market Account Development Representative - Outbound @ samsara (instance #1)
💾 BEFORE ARCHIVING: 707 jobs in database
[2026-01-13T04:51:38.275Z] [BOT] ✅ No jobs to archive (all 707 jobs within 7-day window)
[2026-01-13T04:51:38.280Z] [BOT] 💾 Saved posted_jobs.json: 707 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:38.281Z] [BOT] 📍 [ROUTING] "Public Sector Major Account Executive" @ samsara
   Category: SALES (matched: "sales")
[2026-01-13T04:51:38.281Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T04:51:38.537Z] [BOT] ✅ Created forum post: 🏢 Public Sector Major Account Executive @ samsara in #💲・sales-jobs
  ✅ Industry: Public Sector Major Account Executive @ samsara
[2026-01-13T04:51:40.040Z] [BOT] 💾 Marked as posted: Public Sector Major Account Executive @ samsara (instance #1)
💾 BEFORE ARCHIVING: 708 jobs in database
[2026-01-13T04:51:40.040Z] [BOT] ✅ No jobs to archive (all 708 jobs within 7-day window)
[2026-01-13T04:51:40.045Z] [BOT] 💾 Saved posted_jobs.json: 708 active jobs
[2026-01-13T04:51:40.045Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:40.046Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST" @ samsara
   Category: SALES (matched: "sales")
[2026-01-13T04:51:40.046Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T04:51:40.273Z] [BOT] ✅ Created forum post: 🏢 Select Major Account Executive EST/CST @ samsara in #💲・sales-jobs
  ✅ Industry: Select Major Account Executive EST/CST @ samsara
[2026-01-13T04:51:41.775Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST @ samsara (instance #1)
[2026-01-13T04:51:41.775Z] [BOT] 💾 BEFORE ARCHIVING: 709 jobs in database
[2026-01-13T04:51:41.776Z] [BOT] ✅ No jobs to archive (all 709 jobs within 7-day window)
[2026-01-13T04:51:41.780Z] [BOT] 💾 Saved posted_jobs.json: 709 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:41.780Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST @ samsara (instance #1)
[2026-01-13T04:51:41.780Z] [BOT] 💾 BEFORE ARCHIVING: 710 jobs in database
[2026-01-13T04:51:41.781Z] [BOT] ✅ No jobs to archive (all 710 jobs within 7-day window)
[2026-01-13T04:51:41.786Z] [BOT] 💾 Saved posted_jobs.json: 710 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:41.786Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Atlanta, GA @ samsara (instance #1)
💾 BEFORE ARCHIVING: 711 jobs in database
[2026-01-13T04:51:41.786Z] [BOT] ✅ No jobs to archive (all 711 jobs within 7-day window)
[2026-01-13T04:51:41.792Z] [BOT] 💾 Saved posted_jobs.json: 711 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:41.792Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Austin, TX @ samsara (instance #1)
[2026-01-13T04:51:41.792Z] [BOT] 💾 BEFORE ARCHIVING: 712 jobs in database
[2026-01-13T04:51:41.793Z] [BOT] ✅ No jobs to archive (all 712 jobs within 7-day window)
[2026-01-13T04:51:41.798Z] [BOT] 💾 Saved posted_jobs.json: 712 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:41.798Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Baltimore, MD @ samsara (instance #1)
💾 BEFORE ARCHIVING: 713 jobs in database
[2026-01-13T04:51:41.798Z] [BOT] ✅ No jobs to archive (all 713 jobs within 7-day window)
[2026-01-13T04:51:41.803Z] [BOT] 💾 Saved posted_jobs.json: 713 active jobs
[2026-01-13T04:51:41.803Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Select Major Account Executive EST/CST - Boston, MA @ samsara (instance #1)
[2026-01-13T04:51:41.803Z] [BOT] 💾 BEFORE ARCHIVING: 714 jobs in database
[2026-01-13T04:51:41.804Z] [BOT] ✅ No jobs to archive (all 714 jobs within 7-day window)
[2026-01-13T04:51:41.809Z] [BOT] 💾 Saved posted_jobs.json: 714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:41.809Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Charlotte, NC @ samsara (instance #1)
💾 BEFORE ARCHIVING: 715 jobs in database
[2026-01-13T04:51:41.810Z] [BOT] ✅ No jobs to archive (all 715 jobs within 7-day window)
[2026-01-13T04:51:41.814Z] [BOT] 💾 Saved posted_jobs.json: 715 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:41.814Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Columbia, SC @ samsara (instance #1)
💾 BEFORE ARCHIVING: 716 jobs in database
[2026-01-13T04:51:41.815Z] [BOT] ✅ No jobs to archive (all 716 jobs within 7-day window)
[2026-01-13T04:51:41.820Z] [BOT] 💾 Saved posted_jobs.json: 716 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:41.820Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Dallas, TX @ samsara (instance #1)
💾 BEFORE ARCHIVING: 717 jobs in database
[2026-01-13T04:51:41.821Z] [BOT] ✅ No jobs to archive (all 717 jobs within 7-day window)
[2026-01-13T04:51:41.825Z] [BOT] 💾 Saved posted_jobs.json: 717 active jobs
[2026-01-13T04:51:41.825Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:44.827Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2026-01-13T04:51:44.827Z] [BOT] 📍 [ROUTING] "Manager II, Shipping and Receiving Logistics" @ samsara
   Category: SUPPLY-CHAIN (matched: "logistics")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2026-01-13T04:51:45.063Z] [BOT] ✅ Created forum post: 🏢 Manager II, Shipping and Receiving Logistics @ samsara in #🏗️・JID_b7c6683f
  ✅ Industry: Manager II, Shipping and Receiving Logistics @ samsara
[2026-01-13T04:51:46.870Z] [BOT] ✅ Created forum post: 🏢 Manager II, Shipping and Receiving Logistics @ samsara in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T04:51:48.370Z] [BOT] 💾 Marked as posted: Manager II, Shipping and Receiving Logistics @ samsara (instance #1)
[2026-01-13T04:51:48.371Z] [BOT] 💾 BEFORE ARCHIVING: 718 jobs in database
[2026-01-13T04:51:48.371Z] [BOT] ✅ No jobs to archive (all 718 jobs within 7-day window)
[2026-01-13T04:51:48.377Z] [BOT] 💾 Saved posted_jobs.json: 718 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T04:51:51.378Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-13T04:51:51.378Z] [BOT] ⏭️  Skipping duplicate: JID_26334b8f (posted within 7 days)
⏭️  Skipping duplicate: JID_b46f8a25 (posted within 7 days)
[2026-01-13T04:51:51.379Z] [BOT] ⏭️  Skipping duplicate: JID_388792bf (posted within 7 days)
[2026-01-13T04:51:51.379Z] [BOT] ⏭️  Skipping duplicate: JID_28280aa3 (posted within 7 days)
[2026-01-13T04:51:51.379Z] [BOT] ⏭️  Skipping duplicate: JID_15826a9c (posted within 7 days)
[2026-01-13T04:51:51.379Z] [BOT] ⏭️  Skipping duplicate: JID_cd31e500 (posted within 7 days)
[2026-01-13T04:51:51.379Z] [BOT] ⏭️  Skipping duplicate: JID_b84897e7 (posted within 7 days)
[2026-01-13T04:51:51.379Z] [BOT] ⏭️  Skipping duplicate: JID_3e169f30 (posted within 7 days)
[2026-01-13T04:51:51.527Z] [BOT] ✅ Loaded pending queue: 2702 total (2682 pending, 20 enriched, 0 posted)
[2026-01-13T04:51:51.693Z] [BOT] ✅ Saved pending queue: 2702 total (2682 pending, 12 enriched, 8 posted)
[2026-01-13T04:51:51.693Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T04:51:51.747Z] [BOT] 📂 Loaded 2873 existing routing entries
[2026-01-13T04:51:51.802Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 2881
   Timestamp: 2026-01-13T04:51:51.792Z
[2026-01-13T04:51:51.803Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 12
   Successful: 12
[2026-01-13T04:51:51.803Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-13T04:51:51.803Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T04:51:51.803Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 6
   Top channels:
[2026-01-13T04:51:51.804Z] [BOT] 1. #💲・sales-jobs: 5 posts
     2. #🌉・san-francisco: 3 posts
     3. #📁・JID_e938df7b: 1 posts
     4. #💻・tech-jobs: 1 posts
     5. #💻・remote-usa: 1 posts
[2026-01-13T04:51:51.804Z] [BOT] [STATS] Channel stats saved
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2418) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*