# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T23:11:46.382Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T23:11:25.862Z] ========================================
[2026-01-20T23:11:25.864Z] Discord Bot Execution Log
[2026-01-20T23:11:25.864Z] Environment: GitHub Actions
[2026-01-20T23:11:25.864Z] Node Version: v20.19.6
[2026-01-20T23:11:25.864Z] ========================================
[2026-01-20T23:11:25.864Z] Environment Variables Check:
[2026-01-20T23:11:25.864Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T23:11:25.864Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T23:11:25.864Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T23:11:25.864Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T23:11:25.864Z] 
Multi-Channel Configuration:
[2026-01-20T23:11:25.865Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T23:11:25.865Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T23:11:25.865Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T23:11:25.865Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T23:11:25.865Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T23:11:25.865Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T23:11:25.865Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T23:11:25.865Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T23:11:25.865Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T23:11:25.865Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T23:11:25.865Z] 
Data Files Check:
[2026-01-20T23:11:25.867Z] .github/data/new_jobs.json: ✅ Exists (10 items, 177925 bytes)
[2026-01-20T23:11:25.878Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1693087 bytes)
[2026-01-20T23:11:25.878Z] 
========================================
[2026-01-20T23:11:25.878Z] Starting Enhanced Discord Bot...
[2026-01-20T23:11:25.878Z] ========================================
[2026-01-20T23:11:26.427Z] [BOT] ✅ Loaded V2 database: 3020 jobs
[2026-01-20T23:11:27.088Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T23:11:27.088Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T23:11:27.088Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T23:11:27.206Z] [BOT] ✅ Loaded pending queue: 2749 total (2729 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Manager of Account Development at samsara
[2026-01-20T23:11:27.210Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T23:11:27.210Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T23:11:27.211Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T23:11:27.211Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
   (16 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-20T23:11:27.212Z] [BOT] - Mid-Market Account Development Representative - Outbound @ samsara: phoenix, atlanta
   - Select Major Account Executive EST/CST @ samsara: milwaukee, chicago, atlanta, austin, baltimore, boston, charlotte, columbia, dallas, hartford, houston, texas, jacksonville, miami, nashville, orlando
⏸️ Limiting to 10 jobs this run, 16 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T23:11:27.215Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-20T23:11:27.216Z] [BOT] 📍 [ROUTING] "Manager of Account Development" @ samsara
[2026-01-20T23:11:27.216Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T23:11:27.220Z] [BOT ERROR] (node:3098) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T23:11:27.423Z] [BOT] ✅ Posted message: Manager of Account Development @ samsara in #tech-jobs
[2026-01-20T23:11:27.423Z] [BOT] ✅ Industry: Manager of Account Development @ samsara
[2026-01-20T23:11:27.424Z] [BOT] 💾 Added channel posting: Manager of Account Development @ samsara → category channel (1 total channels)
[2026-01-20T23:11:27.424Z] [BOT] 💾 BEFORE ARCHIVING: 3021 jobs in database
[2026-01-20T23:11:27.427Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T23:11:27.432Z] [BOT] 📦 Archived 13 jobs to 2026-01.json (13 total in archive)
[2026-01-20T23:11:27.432Z] [BOT] ✅ Archiving complete: 13 archived, 3008 active
[2026-01-20T23:11:27.455Z] [BOT] 💾 Saved posted_jobs.json: 3008 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:29.229Z] [BOT] ✅ Posted message: Manager of Account Development @ samsara in #JID_ead674af
[2026-01-20T23:11:29.229Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T23:11:29.230Z] [BOT] 💾 Added channel posting: Manager of Account Development @ samsara → location channel (2 total channels)
[2026-01-20T23:11:29.230Z] [BOT] 💾 BEFORE ARCHIVING: 3008 jobs in database
[2026-01-20T23:11:29.232Z] [BOT] ✅ No jobs to archive (all 3008 jobs within 7-day window)
[2026-01-20T23:11:29.250Z] [BOT] 💾 Saved posted_jobs.json: 3008 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:30.752Z] [BOT] 💾 Marked as posted: Manager of Account Development @ samsara (instance #1)
[2026-01-20T23:11:30.752Z] [BOT] 💾 BEFORE ARCHIVING: 3009 jobs in database
[2026-01-20T23:11:30.754Z] [BOT] ✅ No jobs to archive (all 3009 jobs within 7-day window)
[2026-01-20T23:11:30.774Z] [BOT] 💾 Saved posted_jobs.json: 3009 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:30.774Z] [BOT] 📍 [ROUTING] "Mid-Market Account Development Representative - Outbound" @ samsara
   Category: TECH (default)
[2026-01-20T23:11:30.774Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T23:11:31.084Z] [BOT] ✅ Posted message: Mid-Market Account Development Representative - Outbound @ samsara in #tech-jobs
  ✅ Industry: Mid-Market Account Development Representative - Outbound @ samsara
[2026-01-20T23:11:31.085Z] [BOT] 💾 Added channel posting: Mid-Market Account Development Representative - Outbound @ samsara → category channel (1 total channels)
[2026-01-20T23:11:31.085Z] [BOT] 💾 BEFORE ARCHIVING: 3010 jobs in database
[2026-01-20T23:11:31.087Z] [BOT] ✅ No jobs to archive (all 3010 jobs within 7-day window)
[2026-01-20T23:11:31.106Z] [BOT] 💾 Saved posted_jobs.json: 3010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:32.609Z] [BOT] 💾 Marked as posted: Mid-Market Account Development Representative - Outbound @ samsara (instance #1)
[2026-01-20T23:11:32.609Z] [BOT] 💾 BEFORE ARCHIVING: 3011 jobs in database
[2026-01-20T23:11:32.611Z] [BOT] ✅ No jobs to archive (all 3011 jobs within 7-day window)
[2026-01-20T23:11:32.631Z] [BOT] 💾 Saved posted_jobs.json: 3011 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:32.632Z] [BOT] 💾 Marked as posted: Mid-Market Account Development Representative - Outbound @ samsara (instance #1)
[2026-01-20T23:11:32.632Z] [BOT] 💾 BEFORE ARCHIVING: 3012 jobs in database
[2026-01-20T23:11:32.634Z] [BOT] ✅ No jobs to archive (all 3012 jobs within 7-day window)
[2026-01-20T23:11:32.650Z] [BOT] 💾 Saved posted_jobs.json: 3012 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:32.651Z] [BOT] 📍 [ROUTING] "Public Sector Major Account Executive" @ samsara
[2026-01-20T23:11:32.651Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T23:11:32.961Z] [BOT] ✅ Posted message: Public Sector Major Account Executive @ samsara in #tech-jobs
[2026-01-20T23:11:32.961Z] [BOT] ✅ Industry: Public Sector Major Account Executive @ samsara
[2026-01-20T23:11:32.962Z] [BOT] 💾 Added channel posting: Public Sector Major Account Executive @ samsara → category channel (1 total channels)
[2026-01-20T23:11:32.962Z] [BOT] 💾 BEFORE ARCHIVING: 3013 jobs in database
[2026-01-20T23:11:32.964Z] [BOT] ✅ No jobs to archive (all 3013 jobs within 7-day window)
[2026-01-20T23:11:32.981Z] [BOT] 💾 Saved posted_jobs.json: 3013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:34.483Z] [BOT] 💾 Marked as posted: Public Sector Major Account Executive @ samsara (instance #1)
[2026-01-20T23:11:34.483Z] [BOT] 💾 BEFORE ARCHIVING: 3014 jobs in database
[2026-01-20T23:11:34.485Z] [BOT] ✅ No jobs to archive (all 3014 jobs within 7-day window)
[2026-01-20T23:11:34.505Z] [BOT] 💾 Saved posted_jobs.json: 3014 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:37.506Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-20T23:11:37.507Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST" @ samsara
[2026-01-20T23:11:37.507Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T23:11:37.862Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST @ samsara in #finance-jobs
[2026-01-20T23:11:37.862Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST @ samsara
[2026-01-20T23:11:37.863Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST @ samsara → category channel (1 total channels)
[2026-01-20T23:11:37.863Z] [BOT] 💾 BEFORE ARCHIVING: 3015 jobs in database
[2026-01-20T23:11:37.865Z] [BOT] ✅ No jobs to archive (all 3015 jobs within 7-day window)
[2026-01-20T23:11:37.890Z] [BOT] 💾 Saved posted_jobs.json: 3015 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.393Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST @ samsara (instance #1)
[2026-01-20T23:11:39.393Z] [BOT] 💾 BEFORE ARCHIVING: 3016 jobs in database
[2026-01-20T23:11:39.395Z] [BOT] ✅ No jobs to archive (all 3016 jobs within 7-day window)
[2026-01-20T23:11:39.417Z] [BOT] 💾 Saved posted_jobs.json: 3016 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.417Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST @ samsara (instance #1)
[2026-01-20T23:11:39.418Z] [BOT] 💾 BEFORE ARCHIVING: 3017 jobs in database
[2026-01-20T23:11:39.419Z] [BOT] ✅ No jobs to archive (all 3017 jobs within 7-day window)
[2026-01-20T23:11:39.440Z] [BOT] 💾 Saved posted_jobs.json: 3017 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.441Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Atlanta, GA @ samsara (instance #1)
[2026-01-20T23:11:39.441Z] [BOT] 💾 BEFORE ARCHIVING: 3018 jobs in database
[2026-01-20T23:11:39.443Z] [BOT] ✅ No jobs to archive (all 3018 jobs within 7-day window)
[2026-01-20T23:11:39.461Z] [BOT] 💾 Saved posted_jobs.json: 3018 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.461Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Austin, TX @ samsara (instance #1)
[2026-01-20T23:11:39.461Z] [BOT] 💾 BEFORE ARCHIVING: 3019 jobs in database
[2026-01-20T23:11:39.463Z] [BOT] ✅ No jobs to archive (all 3019 jobs within 7-day window)
[2026-01-20T23:11:39.488Z] [BOT] 💾 Saved posted_jobs.json: 3019 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.488Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Baltimore, MD @ samsara (instance #1)
[2026-01-20T23:11:39.488Z] [BOT] 💾 BEFORE ARCHIVING: 3020 jobs in database
[2026-01-20T23:11:39.495Z] [BOT] ✅ No jobs to archive (all 3020 jobs within 7-day window)
[2026-01-20T23:11:39.513Z] [BOT] 💾 Saved posted_jobs.json: 3020 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.513Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Boston, MA @ samsara (instance #1)
[2026-01-20T23:11:39.513Z] [BOT] 💾 BEFORE ARCHIVING: 3021 jobs in database
[2026-01-20T23:11:39.515Z] [BOT] ✅ No jobs to archive (all 3021 jobs within 7-day window)
[2026-01-20T23:11:39.535Z] [BOT] 💾 Saved posted_jobs.json: 3021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.535Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Charlotte, NC @ samsara (instance #1)
[2026-01-20T23:11:39.535Z] [BOT] 💾 BEFORE ARCHIVING: 3022 jobs in database
[2026-01-20T23:11:39.538Z] [BOT] ✅ No jobs to archive (all 3022 jobs within 7-day window)
[2026-01-20T23:11:39.559Z] [BOT] 💾 Saved posted_jobs.json: 3022 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.560Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Columbia, SC @ samsara (instance #1)
[2026-01-20T23:11:39.560Z] [BOT] 💾 BEFORE ARCHIVING: 3023 jobs in database
[2026-01-20T23:11:39.562Z] [BOT] ✅ No jobs to archive (all 3023 jobs within 7-day window)
[2026-01-20T23:11:39.581Z] [BOT] 💾 Saved posted_jobs.json: 3023 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.582Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Dallas, TX @ samsara (instance #1)
[2026-01-20T23:11:39.582Z] [BOT] 💾 BEFORE ARCHIVING: 3024 jobs in database
[2026-01-20T23:11:39.584Z] [BOT] ✅ No jobs to archive (all 3024 jobs within 7-day window)
[2026-01-20T23:11:39.605Z] [BOT] 💾 Saved posted_jobs.json: 3024 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.606Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Hartford, CT @ samsara (instance #1)
💾 BEFORE ARCHIVING: 3025 jobs in database
[2026-01-20T23:11:39.608Z] [BOT] ✅ No jobs to archive (all 3025 jobs within 7-day window)
[2026-01-20T23:11:39.625Z] [BOT] 💾 Saved posted_jobs.json: 3025 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.626Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Houston, TX @ samsara (instance #1)
[2026-01-20T23:11:39.626Z] [BOT] 💾 BEFORE ARCHIVING: 3026 jobs in database
[2026-01-20T23:11:39.628Z] [BOT] ✅ No jobs to archive (all 3026 jobs within 7-day window)
[2026-01-20T23:11:39.647Z] [BOT] 💾 Saved posted_jobs.json: 3026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.647Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Jacksonville, FL @ samsara (instance #1)
[2026-01-20T23:11:39.648Z] [BOT] 💾 BEFORE ARCHIVING: 3027 jobs in database
[2026-01-20T23:11:39.649Z] [BOT] ✅ No jobs to archive (all 3027 jobs within 7-day window)
[2026-01-20T23:11:39.667Z] [BOT] 💾 Saved posted_jobs.json: 3027 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.668Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Miami, FL @ samsara (instance #1)
[2026-01-20T23:11:39.668Z] [BOT] 💾 BEFORE ARCHIVING: 3028 jobs in database
[2026-01-20T23:11:39.670Z] [BOT] ✅ No jobs to archive (all 3028 jobs within 7-day window)
[2026-01-20T23:11:39.689Z] [BOT] 💾 Saved posted_jobs.json: 3028 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.689Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Miami, FL @ samsara (instance #1)
[2026-01-20T23:11:39.690Z] [BOT] 💾 BEFORE ARCHIVING: 3029 jobs in database
[2026-01-20T23:11:39.691Z] [BOT] ✅ No jobs to archive (all 3029 jobs within 7-day window)
[2026-01-20T23:11:39.710Z] [BOT] 💾 Saved posted_jobs.json: 3029 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.710Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Nashville, TN @ samsara (instance #1)
[2026-01-20T23:11:39.710Z] [BOT] 💾 BEFORE ARCHIVING: 3030 jobs in database
[2026-01-20T23:11:39.712Z] [BOT] ✅ No jobs to archive (all 3030 jobs within 7-day window)
[2026-01-20T23:11:39.732Z] [BOT] 💾 Saved posted_jobs.json: 3030 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:39.732Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Orlando, FL @ samsara (instance #1)
[2026-01-20T23:11:39.733Z] [BOT] 💾 BEFORE ARCHIVING: 3031 jobs in database
[2026-01-20T23:11:39.734Z] [BOT] ✅ No jobs to archive (all 3031 jobs within 7-day window)
[2026-01-20T23:11:39.752Z] [BOT] 💾 Saved posted_jobs.json: 3031 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T23:11:42.753Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-20T23:11:42.754Z] [BOT] ⏭️  Skipping duplicate: JID_15826a9c (posted within 7 days)
[2026-01-20T23:11:42.754Z] [BOT] ⏭️  Skipping duplicate: JID_79ed2142 (posted within 7 days)
[2026-01-20T23:11:42.754Z] [BOT] ⏭️  Skipping duplicate: JID_b84897e7 (posted within 7 days)
[2026-01-20T23:11:42.754Z] [BOT] ⏭️  Skipping duplicate: JID_3e169f30 (posted within 7 days)
[2026-01-20T23:11:42.865Z] [BOT] ✅ Loaded pending queue: 2749 total (2729 pending, 20 enriched, 0 posted)
[2026-01-20T23:11:43.026Z] [BOT] ✅ Saved pending queue: 2749 total (2729 pending, 16 enriched, 4 posted)
[2026-01-20T23:11:43.026Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T23:11:43.090Z] [BOT] 📂 Loaded 5551 existing routing entries
[2026-01-20T23:11:43.165Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-20T23:11:43.165Z] [BOT] Total entries: 5555
   Timestamp: 2026-01-20T23:11:43.142Z
[2026-01-20T23:11:43.166Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T23:11:43.166Z] [BOT] Total attempts: 5
   Successful: 5
   Failed: 0
   Skipped: 0
[2026-01-20T23:11:43.166Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-20T23:11:43.166Z] [BOT] Last cleanup: Never
   Total posts: 5
   Channels used: 3
   Top channels:
     1. #tech-jobs: 3 posts
     2. #JID_ead674af: 1 posts
     3. #finance-jobs: 1 posts
[2026-01-20T23:11:43.167Z] [BOT] [STATS] Channel stats saved
[2026-01-20T23:11:45.193Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3098) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*