# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T23:36:58.869Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T23:36:11.250Z] ========================================
[2026-01-12T23:36:11.252Z] Discord Bot Execution Log
[2026-01-12T23:36:11.252Z] Environment: GitHub Actions
[2026-01-12T23:36:11.252Z] Node Version: v20.19.6
[2026-01-12T23:36:11.252Z] ========================================
[2026-01-12T23:36:11.252Z] Environment Variables Check:
[2026-01-12T23:36:11.252Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T23:36:11.252Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T23:36:11.252Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T23:36:11.253Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T23:36:11.253Z] 
Multi-Channel Configuration:
[2026-01-12T23:36:11.253Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T23:36:11.253Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T23:36:11.253Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T23:36:11.253Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T23:36:11.253Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T23:36:11.253Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T23:36:11.253Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T23:36:11.253Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T23:36:11.253Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T23:36:11.253Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T23:36:11.253Z] 
Data Files Check:
[2026-01-12T23:36:11.254Z] .github/data/new_jobs.json: ✅ Exists (10 items, 141938 bytes)
[2026-01-12T23:36:11.257Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 329951 bytes)
[2026-01-12T23:36:11.257Z] 
========================================
[2026-01-12T23:36:11.257Z] Starting Enhanced Discord Bot...
[2026-01-12T23:36:11.257Z] ========================================
[2026-01-12T23:36:11.783Z] [BOT] ✅ Loaded V2 database: 616 jobs
[2026-01-12T23:36:12.599Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T23:36:12.600Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T23:36:12.600Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T23:36:12.708Z] [BOT] ✅ Loaded pending queue: 2663 total (2643 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Startup Account Executive at vercel
[2026-01-12T23:36:12.711Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T23:36:12.711Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T23:36:12.711Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T23:36:12.712Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-01-12T23:36:12.712Z] [BOT] (6 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   -  Mid-Market Account Executive - PubSec @ samsara: boston, charleston, denver, baltimore, louisville, chicago, dallas
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-12T23:36:12.713Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T23:36:12.716Z] [BOT] 📌 Posting 7 jobs to #💲・sales-jobs
[2026-01-12T23:36:12.716Z] [BOT] 📍 [ROUTING] "Startup Account Executive" @ vercel
[2026-01-12T23:36:12.717Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T23:36:12.721Z] [BOT ERROR] (node:2348) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T23:36:12.920Z] [BOT] ✅ Created forum post: 🏢 Startup Account Executive @ vercel in #💲・sales-jobs
[2026-01-12T23:36:12.920Z] [BOT] ✅ Industry: Startup Account Executive @ vercel
[2026-01-12T23:36:14.704Z] [BOT] ✅ Created forum post: 🏢 Startup Account Executive @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T23:36:16.204Z] [BOT] 💾 Marked as posted: Startup Account Executive @ vercel (instance #1)
[2026-01-12T23:36:16.205Z] [BOT] 💾 BEFORE ARCHIVING: 617 jobs in database
[2026-01-12T23:36:16.206Z] [BOT] ✅ No jobs to archive (all 617 jobs within 7-day window)
[2026-01-12T23:36:16.211Z] [BOT] 💾 Saved posted_jobs.json: 617 active jobs
[2026-01-12T23:36:16.211Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:36:16.212Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
   Category: SALES (matched: "sales")
[2026-01-12T23:36:16.212Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T23:36:16.491Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Territory (Mid-Market) @ verkada in #💲・sales-jobs
  ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-01-12T23:36:17.993Z] [BOT] 💾 Marked as posted: Account Executive, Territory (Mid-Market) @ verkada (instance #1)
[2026-01-12T23:36:17.993Z] [BOT] 💾 BEFORE ARCHIVING: 618 jobs in database
[2026-01-12T23:36:17.993Z] [BOT] ✅ No jobs to archive (all 618 jobs within 7-day window)
[2026-01-12T23:36:17.998Z] [BOT] 💾 Saved posted_jobs.json: 618 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T23:36:17.998Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Startups" @ anthropic
[2026-01-12T23:36:17.998Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T23:36:18.169Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Startups @ anthropic in #💲・sales-jobs
[2026-01-12T23:36:18.169Z] [BOT] ✅ Industry: Strategic Account Executive, Startups @ anthropic
[2026-01-12T23:36:19.948Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Startups @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T23:36:21.448Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Startups @ anthropic (instance #1)
[2026-01-12T23:36:21.448Z] [BOT] 💾 BEFORE ARCHIVING: 619 jobs in database
[2026-01-12T23:36:21.449Z] [BOT] ✅ No jobs to archive (all 619 jobs within 7-day window)
[2026-01-12T23:36:21.454Z] [BOT] 💾 Saved posted_jobs.json: 619 active jobs
[2026-01-12T23:36:21.454Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:36:21.455Z] [BOT] 📍 [ROUTING] "Startup Account Executive" @ anthropic
[2026-01-12T23:36:21.455Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T23:36:21.748Z] [BOT] ✅ Created forum post: 🏢 Startup Account Executive @ anthropic in #💲・sales-jobs
  ✅ Industry: Startup Account Executive @ anthropic
[2026-01-12T23:36:23.480Z] [BOT] ✅ Created forum post: 🏢 Startup Account Executive @ anthropic in #🌉・san-francisco
[2026-01-12T23:36:23.480Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T23:36:24.981Z] [BOT] 💾 Marked as posted: Startup Account Executive @ anthropic (instance #1)
[2026-01-12T23:36:24.981Z] [BOT] 💾 BEFORE ARCHIVING: 620 jobs in database
[2026-01-12T23:36:24.982Z] [BOT] ✅ No jobs to archive (all 620 jobs within 7-day window)
[2026-01-12T23:36:24.987Z] [BOT] 💾 Saved posted_jobs.json: 620 active jobs
[2026-01-12T23:36:24.987Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:36:24.988Z] [BOT] 📍 [ROUTING] "Manager, Startup Account Executive" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-12T23:36:24.988Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T23:36:25.259Z] [BOT] ✅ Created forum post: 🏢 Manager, Startup Account Executive @ anthropic in #💲・sales-jobs
  ✅ Industry: Manager, Startup Account Executive @ anthropic
[2026-01-12T23:36:27.006Z] [BOT] ✅ Created forum post: 🏢 Manager, Startup Account Executive @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T23:36:28.506Z] [BOT] 💾 Marked as posted: Manager, Startup Account Executive @ anthropic (instance #1)
[2026-01-12T23:36:28.507Z] [BOT] 💾 BEFORE ARCHIVING: 621 jobs in database
[2026-01-12T23:36:28.507Z] [BOT] ✅ No jobs to archive (all 621 jobs within 7-day window)
[2026-01-12T23:36:28.512Z] [BOT] 💾 Saved posted_jobs.json: 621 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T23:36:28.513Z] [BOT] 📍 [ROUTING] "Growth Account Executive" @ anthropic
[2026-01-12T23:36:28.513Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T23:36:28.692Z] [BOT] ✅ Created forum post: 🏢 Growth Account Executive @ anthropic in #💲・sales-jobs
[2026-01-12T23:36:28.692Z] [BOT] ✅ Industry: Growth Account Executive @ anthropic
[2026-01-12T23:36:30.638Z] [BOT] ✅ Created forum post: 🏢 Growth Account Executive @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T23:36:32.139Z] [BOT] 💾 Marked as posted: Growth Account Executive @ anthropic (instance #1)
[2026-01-12T23:36:32.139Z] [BOT] 💾 BEFORE ARCHIVING: 622 jobs in database
[2026-01-12T23:36:32.139Z] [BOT] ✅ No jobs to archive (all 622 jobs within 7-day window)
[2026-01-12T23:36:32.145Z] [BOT] 💾 Saved posted_jobs.json: 622 active jobs
[2026-01-12T23:36:32.145Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:36:32.145Z] [BOT] 📍 [ROUTING] "Manager, Growth Account Executive" @ anthropic
[2026-01-12T23:36:32.145Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T23:36:32.397Z] [BOT] ✅ Created forum post: 🏢 Manager, Growth Account Executive @ anthropic in #💲・sales-jobs
  ✅ Industry: Manager, Growth Account Executive @ anthropic
[2026-01-12T23:36:34.089Z] [BOT] ✅ Created forum post: 🏢 Manager, Growth Account Executive @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T23:36:35.590Z] [BOT] 💾 Marked as posted: Manager, Growth Account Executive @ anthropic (instance #1)
[2026-01-12T23:36:35.590Z] [BOT] 💾 BEFORE ARCHIVING: 623 jobs in database
[2026-01-12T23:36:35.591Z] [BOT] ✅ No jobs to archive (all 623 jobs within 7-day window)
[2026-01-12T23:36:35.596Z] [BOT] 💾 Saved posted_jobs.json: 623 active jobs
[2026-01-12T23:36:35.596Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:36:38.597Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-12T23:36:38.598Z] [BOT] 📍 [ROUTING] "BI Developer" @ ORG_c7953dfe
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-12T23:36:38.598Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-12T23:36:38.860Z] [BOT] ✅ Created forum post: 🏢 BI Developer @ ORG_c7953dfe in #📈・JID_fb739488
  ✅ Industry: BI Developer @ ORG_c7953dfe
[2026-01-12T23:36:40.657Z] [BOT] ✅ Created forum post: 🏢 BI Developer @ ORG_c7953dfe in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-12T23:36:42.157Z] [BOT] 💾 Marked as posted: BI Developer @ ORG_c7953dfe (instance #1)
[2026-01-12T23:36:42.157Z] [BOT] 💾 BEFORE ARCHIVING: 624 jobs in database
[2026-01-12T23:36:42.158Z] [BOT] ✅ No jobs to archive (all 624 jobs within 7-day window)
[2026-01-12T23:36:42.164Z] [BOT] 💾 Saved posted_jobs.json: 624 active jobs
[2026-01-12T23:36:42.164Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:36:42.165Z] [BOT] 📍 [ROUTING] "Product Designer, Notifications" @ discord
[2026-01-12T23:36:42.165Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-12T23:36:42.622Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Notifications @ discord in #📈・JID_fb739488
[2026-01-12T23:36:42.622Z] [BOT] ✅ Industry: Product Designer, Notifications @ discord
[2026-01-12T23:36:44.338Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Notifications @ discord in #🌉・san-francisco
[2026-01-12T23:36:44.338Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T23:36:45.839Z] [BOT] 💾 Marked as posted: Product Designer, Notifications @ discord (instance #1)
[2026-01-12T23:36:45.839Z] [BOT] 💾 BEFORE ARCHIVING: 625 jobs in database
[2026-01-12T23:36:45.840Z] [BOT] ✅ No jobs to archive (all 625 jobs within 7-day window)
[2026-01-12T23:36:45.845Z] [BOT] 💾 Saved posted_jobs.json: 625 active jobs
[2026-01-12T23:36:45.845Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:36:48.845Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-12T23:36:48.846Z] [BOT] 📍 [ROUTING] "Software Engineer II, Frontend Platform " @ brex
[2026-01-12T23:36:48.846Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T23:36:49.147Z] [BOT] ✅ Created forum post: 🏢 Software Engineer II, Frontend Platform  @ brex in #💻・tech-jobs
  ✅ Industry: Software Engineer II, Frontend Platform  @ brex
[2026-01-12T23:36:50.889Z] [BOT] ✅ Created forum post: 🏢 Software Engineer II, Frontend Platform  @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T23:36:52.390Z] [BOT] 💾 Marked as posted: Software Engineer II, Frontend Platform  @ brex (instance #1)
[2026-01-12T23:36:52.390Z] [BOT] 💾 BEFORE ARCHIVING: 626 jobs in database
[2026-01-12T23:36:52.390Z] [BOT] ✅ No jobs to archive (all 626 jobs within 7-day window)
[2026-01-12T23:36:52.396Z] [BOT] 💾 Saved posted_jobs.json: 626 active jobs
[2026-01-12T23:36:52.396Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:36:55.397Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T23:36:55.397Z] [BOT] ⏭️  Skipping duplicate: JID_1ea2d8a3 (posted within 7 days)
[2026-01-12T23:36:55.398Z] [BOT] ⏭️  Skipping duplicate: JID_17d3945c (posted within 7 days)
[2026-01-12T23:36:55.398Z] [BOT] ⏭️  Skipping duplicate: JID_074cb95b (posted within 7 days)
[2026-01-12T23:36:55.398Z] [BOT] ⏭️  Skipping duplicate: JID_3f9ff301 (posted within 7 days)
[2026-01-12T23:36:55.398Z] [BOT] ⏭️  Skipping duplicate: JID_4d42ce78 (posted within 7 days)
[2026-01-12T23:36:55.398Z] [BOT] ⏭️  Skipping duplicate: JID_efbb0ec7 (posted within 7 days)
[2026-01-12T23:36:55.398Z] [BOT] ⏭️  Skipping duplicate: JID_240785c7 (posted within 7 days)
⏭️  Skipping duplicate: JID_7a1af65d (posted within 7 days)
[2026-01-12T23:36:55.398Z] [BOT] ⏭️  Skipping duplicate: JID_78316e95 (posted within 7 days)
[2026-01-12T23:36:55.398Z] [BOT] ⏭️  Skipping duplicate: JID_ad2ee979 (posted within 7 days)
[2026-01-12T23:36:55.526Z] [BOT] ✅ Loaded pending queue: 2663 total (2643 pending, 20 enriched, 0 posted)
[2026-01-12T23:36:55.679Z] [BOT] ✅ Saved pending queue: 2663 total (2643 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-12T23:36:55.680Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T23:36:55.730Z] [BOT] 📂 Loaded 2780 existing routing entries
[2026-01-12T23:36:55.784Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-12T23:36:55.784Z] [BOT] New entries: 10
   Total entries: 2790
   Timestamp: 2026-01-12T23:36:55.772Z
[2026-01-12T23:36:55.784Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T23:36:55.784Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-12T23:36:55.784Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-12T23:36:55.785Z] [BOT] Total posts: 19
   Channels used: 6
   Top channels:
[2026-01-12T23:36:55.785Z] [BOT] 1. #💲・sales-jobs: 7 posts
     2. #🌉・san-francisco: 7 posts
     3. #📈・JID_fb739488: 2 posts
     4. #💻・remote-usa: 1 posts
[2026-01-12T23:36:55.785Z] [BOT] 5. #💻・tech-jobs: 1 posts
[2026-01-12T23:36:55.785Z] [BOT] [STATS] Channel stats saved
[2026-01-12T23:36:57.809Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2348) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*