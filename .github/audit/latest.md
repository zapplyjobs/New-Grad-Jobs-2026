# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T05:54:32.579Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T05:53:54.054Z] ========================================
[2026-01-13T05:53:54.056Z] Discord Bot Execution Log
[2026-01-13T05:53:54.056Z] Environment: GitHub Actions
[2026-01-13T05:53:54.056Z] Node Version: v20.19.6
[2026-01-13T05:53:54.056Z] ========================================
[2026-01-13T05:53:54.056Z] Environment Variables Check:
[2026-01-13T05:53:54.057Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T05:53:54.057Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T05:53:54.057Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T05:53:54.057Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T05:53:54.057Z] 
Multi-Channel Configuration:
[2026-01-13T05:53:54.057Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T05:53:54.057Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T05:53:54.057Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T05:53:54.057Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T05:53:54.057Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T05:53:54.057Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T05:53:54.057Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T05:53:54.058Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T05:53:54.058Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T05:53:54.058Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T05:53:54.058Z] 
Data Files Check:
[2026-01-13T05:53:54.059Z] .github/data/new_jobs.json: ✅ Exists (10 items, 200137 bytes)
[2026-01-13T05:53:54.062Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 406902 bytes)
[2026-01-13T05:53:54.062Z] 
========================================
[2026-01-13T05:53:54.062Z] Starting Enhanced Discord Bot...
[2026-01-13T05:53:54.062Z] ========================================
[2026-01-13T05:53:54.570Z] [BOT] ✅ Loaded V2 database: 773 jobs
[2026-01-13T05:53:55.176Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T05:53:55.176Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T05:53:55.176Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T05:53:55.286Z] [BOT] ✅ Loaded pending queue: 2700 total (2680 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Channel Marketing Associate (Remote) at verkada
[2026-01-13T05:53:55.288Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T05:53:55.288Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T05:53:55.288Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T05:53:55.289Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T05:53:55.289Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T05:53:55.294Z] [BOT] 📌 Posting 10 jobs to #💲・sales-jobs
[2026-01-13T05:53:55.294Z] [BOT] 📍 [ROUTING] "Channel Marketing Associate (Remote)" @ verkada
[2026-01-13T05:53:55.294Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:53:55.299Z] [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T05:53:55.418Z] [BOT] ✅ Created forum post: 🏢 Channel Marketing Associate (Remote) @ verkada in #💲・sales-jobs
[2026-01-13T05:53:55.418Z] [BOT] ✅ Industry: Channel Marketing Associate (Remote) @ verkada
[2026-01-13T05:53:57.085Z] [BOT] ✅ Created forum post: 🏢 Channel Marketing Associate (Remote) @ verkada in #🗽・new-york
[2026-01-13T05:53:57.085Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T05:53:58.586Z] [BOT] 💾 Marked as posted: Channel Marketing Associate (Remote) @ verkada (instance #1)
[2026-01-13T05:53:58.586Z] [BOT] 💾 BEFORE ARCHIVING: 774 jobs in database
[2026-01-13T05:53:58.587Z] [BOT] ✅ No jobs to archive (all 774 jobs within 7-day window)
[2026-01-13T05:53:58.597Z] [BOT] 💾 Saved posted_jobs.json: 774 active jobs
[2026-01-13T05:53:58.597Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Communications Manager" @ verkada
[2026-01-13T05:53:58.597Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:53:58.884Z] [BOT] ✅ Created forum post: 🏢 Communications Manager @ verkada in #💲・sales-jobs
[2026-01-13T05:53:58.885Z] [BOT] ✅ Industry: Communications Manager @ verkada
[2026-01-13T05:54:02.761Z] [BOT] ✅ Created forum post: 🏢 Communications Manager @ verkada in #🗽・new-york
[2026-01-13T05:54:02.761Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T05:54:04.261Z] [BOT] 💾 Marked as posted: Communications Manager @ verkada (instance #1)
[2026-01-13T05:54:04.262Z] [BOT] 💾 BEFORE ARCHIVING: 775 jobs in database
[2026-01-13T05:54:04.262Z] [BOT] ✅ No jobs to archive (all 775 jobs within 7-day window)
[2026-01-13T05:54:04.270Z] [BOT] 💾 Saved posted_jobs.json: 775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:54:04.270Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Chicago - SLED)" @ verkada
   Category: SALES (matched: "sales")
[2026-01-13T05:54:04.270Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:54:04.426Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Chicago - SLED) @ verkada in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive (Chicago - SLED) @ verkada
[2026-01-13T05:54:06.241Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Chicago - SLED) @ verkada in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-13T05:54:07.741Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Chicago - SLED) @ verkada (instance #1)
💾 BEFORE ARCHIVING: 776 jobs in database
[2026-01-13T05:54:07.742Z] [BOT] ✅ No jobs to archive (all 776 jobs within 7-day window)
[2026-01-13T05:54:07.748Z] [BOT] 💾 Saved posted_jobs.json: 776 active jobs
[2026-01-13T05:54:07.749Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:54:07.749Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Colorado - SLED)" @ verkada
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:54:08.048Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Colorado - SLED) @ verkada in #💲・sales-jobs
[2026-01-13T05:54:08.048Z] [BOT] ✅ Industry: Enterprise Account Executive (Colorado - SLED) @ verkada
[2026-01-13T05:54:09.548Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Colorado - SLED) @ verkada (instance #1)
[2026-01-13T05:54:09.548Z] [BOT] 💾 BEFORE ARCHIVING: 777 jobs in database
[2026-01-13T05:54:09.549Z] [BOT] ✅ No jobs to archive (all 777 jobs within 7-day window)
[2026-01-13T05:54:09.555Z] [BOT] 💾 Saved posted_jobs.json: 777 active jobs
[2026-01-13T05:54:09.555Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:54:09.555Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Corporate/Manufacturing - East)" @ verkada
   Category: SALES (matched: "sales")
[2026-01-13T05:54:09.555Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:54:09.672Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Corporate/Manufacturing - East) @ verkada in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive (Corporate/Manufacturing - East) @ verkada
[2026-01-13T05:54:11.357Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Corporate/Manufacturing - East) @ verkada in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-13T05:54:12.858Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Corporate/Manufacturing - East) @ verkada (instance #1)
[2026-01-13T05:54:12.858Z] [BOT] 💾 BEFORE ARCHIVING: 778 jobs in database
[2026-01-13T05:54:12.859Z] [BOT] ✅ No jobs to archive (all 778 jobs within 7-day window)
[2026-01-13T05:54:12.865Z] [BOT] 💾 Saved posted_jobs.json: 778 active jobs
[2026-01-13T05:54:12.865Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:54:12.865Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Houston - SLED)" @ verkada
[2026-01-13T05:54:12.865Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:54:13.009Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Houston - SLED) @ verkada in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive (Houston - SLED) @ verkada
[2026-01-13T05:54:14.510Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Houston - SLED) @ verkada (instance #1)
💾 BEFORE ARCHIVING: 779 jobs in database
[2026-01-13T05:54:14.510Z] [BOT] ✅ No jobs to archive (all 779 jobs within 7-day window)
[2026-01-13T05:54:14.516Z] [BOT] 💾 Saved posted_jobs.json: 779 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:54:14.516Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Kansas - SLED)" @ verkada
[2026-01-13T05:54:14.516Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:54:14.849Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Kansas - SLED) @ verkada in #💲・sales-jobs
[2026-01-13T05:54:14.849Z] [BOT] ✅ Industry: Enterprise Account Executive (Kansas - SLED) @ verkada
[2026-01-13T05:54:16.350Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Kansas - SLED) @ verkada (instance #1)
[2026-01-13T05:54:16.350Z] [BOT] 💾 BEFORE ARCHIVING: 780 jobs in database
[2026-01-13T05:54:16.351Z] [BOT] ✅ No jobs to archive (all 780 jobs within 7-day window)
[2026-01-13T05:54:16.356Z] [BOT] 💾 Saved posted_jobs.json: 780 active jobs
[2026-01-13T05:54:16.356Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:54:16.356Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (New York State  - SLED)" @ verkada
[2026-01-13T05:54:16.356Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:54:16.701Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (New York State  - SLED) @ verkada in #💲・sales-jobs
[2026-01-13T05:54:16.701Z] [BOT] ✅ Industry: Enterprise Account Executive (New York State  - SLED) @ verkada
[2026-01-13T05:54:18.409Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (New York State  - SLED) @ verkada in #🗽・new-york
[2026-01-13T05:54:18.409Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T05:54:19.910Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (New York State  - SLED) @ verkada (instance #1)
[2026-01-13T05:54:19.910Z] [BOT] 💾 BEFORE ARCHIVING: 781 jobs in database
[2026-01-13T05:54:19.911Z] [BOT] ✅ No jobs to archive (all 781 jobs within 7-day window)
[2026-01-13T05:54:19.917Z] [BOT] 💾 Saved posted_jobs.json: 781 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:54:19.917Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (SoCal - Corporate)" @ verkada
[2026-01-13T05:54:19.917Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:54:20.067Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (SoCal - Corporate) @ verkada in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive (SoCal - Corporate) @ verkada
[2026-01-13T05:54:21.761Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (SoCal - Corporate) @ verkada in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-13T05:54:23.262Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (SoCal - Corporate) @ verkada (instance #1)
[2026-01-13T05:54:23.262Z] [BOT] 💾 BEFORE ARCHIVING: 782 jobs in database
[2026-01-13T05:54:23.263Z] [BOT] ✅ No jobs to archive (all 782 jobs within 7-day window)
[2026-01-13T05:54:23.269Z] [BOT] 💾 Saved posted_jobs.json: 782 active jobs
[2026-01-13T05:54:23.269Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:54:23.269Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Southern California - Local, Higher Education)" @ verkada
[2026-01-13T05:54:23.269Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:54:23.417Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Southern California - Local, Higher Education) @ verkada in #💲・sales-jobs
[2026-01-13T05:54:23.417Z] [BOT] ✅ Industry: Enterprise Account Executive (Southern California - Local, Higher Education) @ verkada
[2026-01-13T05:54:25.034Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Southern California - Local, Higher Education) @ verkada in #🦢・los-angeles
[2026-01-13T05:54:25.034Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-13T05:54:26.534Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Southern California - Local, Higher Education) @ verkada (instance #1)
[2026-01-13T05:54:26.534Z] [BOT] 💾 BEFORE ARCHIVING: 783 jobs in database
[2026-01-13T05:54:26.535Z] [BOT] ✅ No jobs to archive (all 783 jobs within 7-day window)
[2026-01-13T05:54:26.541Z] [BOT] 💾 Saved posted_jobs.json: 783 active jobs
[2026-01-13T05:54:26.541Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:54:29.542Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T05:54:29.543Z] [BOT] ⏭️  Skipping duplicate: JID_39c31ac9 (posted within 7 days)
[2026-01-13T05:54:29.543Z] [BOT] ⏭️  Skipping duplicate: JID_a02b2616 (posted within 7 days)
[2026-01-13T05:54:29.543Z] [BOT] ⏭️  Skipping duplicate: JID_a73599fa (posted within 7 days)
[2026-01-13T05:54:29.543Z] [BOT] ⏭️  Skipping duplicate: JID_639c4656 (posted within 7 days)
⏭️  Skipping duplicate: JID_f9f2534f (posted within 7 days)
[2026-01-13T05:54:29.544Z] [BOT] ⏭️  Skipping duplicate: JID_52f3e750 (posted within 7 days)
⏭️  Skipping duplicate: JID_9b390ef8 (posted within 7 days)
⏭️  Skipping duplicate: JID_b0b83342 (posted within 7 days)
⏭️  Skipping duplicate: JID_a3d19ba5 (posted within 7 days)
⏭️  Skipping duplicate: JID_2de00e78 (posted within 7 days)
[2026-01-13T05:54:29.655Z] [BOT] ✅ Loaded pending queue: 2700 total (2680 pending, 20 enriched, 0 posted)
[2026-01-13T05:54:29.820Z] [BOT] ✅ Saved pending queue: 2700 total (2680 pending, 10 enriched, 10 posted)
[2026-01-13T05:54:29.820Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T05:54:29.870Z] [BOT] 📂 Loaded 2915 existing routing entries
[2026-01-13T05:54:29.925Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T05:54:29.925Z] [BOT] Total entries: 2925
   Timestamp: 2026-01-13T05:54:29.914Z
[2026-01-13T05:54:29.926Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T05:54:29.926Z] [BOT] Total attempts: 17
   Successful: 17
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 5
   Top channels:
     1. #💲・sales-jobs: 10 posts
     2. #🗽・new-york: 3 posts
     3. #🦢・los-angeles: 2 posts
     4. #🌆・chicago: 1 posts
     5. #🚌・boston: 1 posts
[2026-01-13T05:54:29.927Z] [BOT] [STATS] Channel stats saved
[2026-01-13T05:54:31.951Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*