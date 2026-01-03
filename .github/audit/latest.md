# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T08:53:35.402Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T08:53:00.114Z] ========================================
[2026-01-03T08:53:00.116Z] Discord Bot Execution Log
[2026-01-03T08:53:00.116Z] Environment: GitHub Actions
[2026-01-03T08:53:00.116Z] Node Version: v20.19.6
[2026-01-03T08:53:00.116Z] ========================================
[2026-01-03T08:53:00.116Z] Environment Variables Check:
[2026-01-03T08:53:00.116Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T08:53:00.116Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T08:53:00.116Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T08:53:00.116Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T08:53:00.116Z] 
Multi-Channel Configuration:
[2026-01-03T08:53:00.117Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T08:53:00.117Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T08:53:00.117Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T08:53:00.117Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T08:53:00.117Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T08:53:00.117Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T08:53:00.117Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T08:53:00.117Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T08:53:00.117Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T08:53:00.117Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T08:53:00.117Z] 
Data Files Check:
[2026-01-03T08:53:00.119Z] .github/data/new_jobs.json: ✅ Exists (10 items, 191779 bytes)
[2026-01-03T08:53:00.120Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 172117 bytes)
[2026-01-03T08:53:00.120Z] 
========================================
[2026-01-03T08:53:00.120Z] Starting Enhanced Discord Bot...
[2026-01-03T08:53:00.120Z] ========================================
[2026-01-03T08:53:00.639Z] [BOT] ✅ Loaded V2 database: 314 jobs
[2026-01-03T08:53:01.445Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T08:53:01.445Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T08:53:01.446Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T08:53:01.447Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T08:53:01.516Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T08:53:01.609Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T08:53:01.612Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T08:53:01.612Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T08:53:01.612Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T08:53:01.613Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T08:53:01.613Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T08:53:01.617Z] [BOT] 📌 Posting 10 jobs to #💲・sales-jobs
[2026-01-03T08:53:01.618Z] [BOT] 📍 [ROUTING] "Channel Development Representative, West (Salt Lake City)" @ verkada
   Category: SALES (matched: "sales")
[2026-01-03T08:53:01.618Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:53:01.622Z] [BOT ERROR] (node:2343) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T08:53:01.822Z] [BOT] ✅ Created forum post: 🏢 Channel Development Representative, West (Salt Lake City) @ verkada in #💲・sales-jobs
[2026-01-03T08:53:01.822Z] [BOT] ✅ Industry: Channel Development Representative, West (Salt Lake City) @ verkada
[2026-01-03T08:53:03.323Z] [BOT] 💾 Marked as posted: Channel Development Representative, West (Salt Lake City) @ verkada (instance #1)
[2026-01-03T08:53:03.323Z] [BOT] 💾 BEFORE ARCHIVING: 315 jobs in database
[2026-01-03T08:53:03.324Z] [BOT] ✅ No jobs to archive (all 315 jobs within 7-day window)
[2026-01-03T08:53:03.331Z] [BOT] 💾 Saved posted_jobs.json: 315 active jobs
[2026-01-03T08:53:03.331Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:53:03.332Z] [BOT] 📍 [ROUTING] "Channel Marketing Associate (Remote)" @ verkada
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:53:03.513Z] [BOT] ✅ Created forum post: 🏢 Channel Marketing Associate (Remote) @ verkada in #💲・sales-jobs
[2026-01-03T08:53:03.513Z] [BOT] ✅ Industry: Channel Marketing Associate (Remote) @ verkada
[2026-01-03T08:53:05.267Z] [BOT] ✅ Created forum post: 🏢 Channel Marketing Associate (Remote) @ verkada in #🗽・new-york
[2026-01-03T08:53:05.268Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T08:53:06.768Z] [BOT] 💾 Marked as posted: Channel Marketing Associate (Remote) @ verkada (instance #1)
[2026-01-03T08:53:06.769Z] [BOT] 💾 BEFORE ARCHIVING: 316 jobs in database
[2026-01-03T08:53:06.769Z] [BOT] ✅ No jobs to archive (all 316 jobs within 7-day window)
[2026-01-03T08:53:06.772Z] [BOT] 💾 Saved posted_jobs.json: 316 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T08:53:06.773Z] [BOT] 📍 [ROUTING] "Communications Manager" @ verkada
[2026-01-03T08:53:06.773Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:53:06.988Z] [BOT] ✅ Created forum post: 🏢 Communications Manager @ verkada in #💲・sales-jobs
[2026-01-03T08:53:06.988Z] [BOT] ✅ Industry: Communications Manager @ verkada
[2026-01-03T08:53:08.669Z] [BOT] ✅ Created forum post: 🏢 Communications Manager @ verkada in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T08:53:10.170Z] [BOT] 💾 Marked as posted: Communications Manager @ verkada (instance #1)
[2026-01-03T08:53:10.170Z] [BOT] 💾 BEFORE ARCHIVING: 317 jobs in database
[2026-01-03T08:53:10.171Z] [BOT] ✅ No jobs to archive (all 317 jobs within 7-day window)
[2026-01-03T08:53:10.173Z] [BOT] 💾 Saved posted_jobs.json: 317 active jobs
[2026-01-03T08:53:10.173Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:53:10.174Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Chicago - SLED)" @ verkada
[2026-01-03T08:53:10.174Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:53:10.374Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Chicago - SLED) @ verkada in #💲・sales-jobs
[2026-01-03T08:53:10.374Z] [BOT] ✅ Industry: Enterprise Account Executive (Chicago - SLED) @ verkada
[2026-01-03T08:53:12.323Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Chicago - SLED) @ verkada in #🌆・chicago
[2026-01-03T08:53:12.324Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-03T08:53:13.824Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Chicago - SLED) @ verkada (instance #1)
[2026-01-03T08:53:13.824Z] [BOT] 💾 BEFORE ARCHIVING: 318 jobs in database
[2026-01-03T08:53:13.824Z] [BOT] ✅ No jobs to archive (all 318 jobs within 7-day window)
[2026-01-03T08:53:13.828Z] [BOT] 💾 Saved posted_jobs.json: 318 active jobs
[2026-01-03T08:53:13.828Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:53:13.828Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Colorado - SLED)" @ verkada
[2026-01-03T08:53:13.829Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:53:14.019Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Colorado - SLED) @ verkada in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive (Colorado - SLED) @ verkada
[2026-01-03T08:53:15.520Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Colorado - SLED) @ verkada (instance #1)
💾 BEFORE ARCHIVING: 319 jobs in database
[2026-01-03T08:53:15.521Z] [BOT] ✅ No jobs to archive (all 319 jobs within 7-day window)
[2026-01-03T08:53:15.524Z] [BOT] 💾 Saved posted_jobs.json: 319 active jobs
[2026-01-03T08:53:15.524Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:53:15.524Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Corporate/Manufacturing - East)" @ verkada
[2026-01-03T08:53:15.524Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:53:15.740Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Corporate/Manufacturing - East) @ verkada in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive (Corporate/Manufacturing - East) @ verkada
[2026-01-03T08:53:17.419Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Corporate/Manufacturing - East) @ verkada in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-03T08:53:18.920Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Corporate/Manufacturing - East) @ verkada (instance #1)
[2026-01-03T08:53:18.920Z] [BOT] 💾 BEFORE ARCHIVING: 320 jobs in database
[2026-01-03T08:53:18.920Z] [BOT] ✅ No jobs to archive (all 320 jobs within 7-day window)
[2026-01-03T08:53:18.923Z] [BOT] 💾 Saved posted_jobs.json: 320 active jobs
[2026-01-03T08:53:18.924Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:53:18.924Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Houston - SLED)" @ verkada
[2026-01-03T08:53:18.924Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:53:19.068Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Houston - SLED) @ verkada in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive (Houston - SLED) @ verkada
[2026-01-03T08:53:20.570Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Houston - SLED) @ verkada (instance #1)
[2026-01-03T08:53:20.570Z] [BOT] 💾 BEFORE ARCHIVING: 321 jobs in database
[2026-01-03T08:53:20.570Z] [BOT] ✅ No jobs to archive (all 321 jobs within 7-day window)
[2026-01-03T08:53:20.573Z] [BOT] 💾 Saved posted_jobs.json: 321 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T08:53:20.574Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Kansas - SLED)" @ verkada
   Category: SALES (matched: "sales")
[2026-01-03T08:53:20.574Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:53:20.973Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Kansas - SLED) @ verkada in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive (Kansas - SLED) @ verkada
[2026-01-03T08:53:22.474Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Kansas - SLED) @ verkada (instance #1)
[2026-01-03T08:53:22.474Z] [BOT] 💾 BEFORE ARCHIVING: 322 jobs in database
[2026-01-03T08:53:22.474Z] [BOT] ✅ No jobs to archive (all 322 jobs within 7-day window)
[2026-01-03T08:53:22.478Z] [BOT] 💾 Saved posted_jobs.json: 322 active jobs
[2026-01-03T08:53:22.478Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:53:22.478Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (New York State  - SLED)" @ verkada
[2026-01-03T08:53:22.478Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:53:22.646Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (New York State  - SLED) @ verkada in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive (New York State  - SLED) @ verkada
[2026-01-03T08:53:24.359Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (New York State  - SLED) @ verkada in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T08:53:25.861Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (New York State  - SLED) @ verkada (instance #1)
[2026-01-03T08:53:25.861Z] [BOT] 💾 BEFORE ARCHIVING: 323 jobs in database
[2026-01-03T08:53:25.862Z] [BOT] ✅ No jobs to archive (all 323 jobs within 7-day window)
[2026-01-03T08:53:25.864Z] [BOT] 💾 Saved posted_jobs.json: 323 active jobs
[2026-01-03T08:53:25.864Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:53:25.865Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Northeast - Corporate)" @ verkada
   Category: SALES (matched: "sales")
[2026-01-03T08:53:25.865Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:53:26.027Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Northeast - Corporate) @ verkada in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive (Northeast - Corporate) @ verkada
[2026-01-03T08:53:27.693Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Northeast - Corporate) @ verkada in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T08:53:29.194Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Northeast - Corporate) @ verkada (instance #1)
[2026-01-03T08:53:29.194Z] [BOT] 💾 BEFORE ARCHIVING: 324 jobs in database
[2026-01-03T08:53:29.194Z] [BOT] ✅ No jobs to archive (all 324 jobs within 7-day window)
[2026-01-03T08:53:29.198Z] [BOT] 💾 Saved posted_jobs.json: 324 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T08:53:32.199Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T08:53:32.199Z] [BOT] ⏭️  Skipping duplicate: JID_1c4bcafd (posted within 7 days)
[2026-01-03T08:53:32.199Z] [BOT] ⏭️  Skipping duplicate: JID_39c31ac9 (posted within 7 days)
⏭️  Skipping duplicate: JID_a02b2616 (posted within 7 days)
[2026-01-03T08:53:32.200Z] [BOT] ⏭️  Skipping duplicate: JID_a73599fa (posted within 7 days)
⏭️  Skipping duplicate: JID_639c4656 (posted within 7 days)
⏭️  Skipping duplicate: JID_f9f2534f (posted within 7 days)
[2026-01-03T08:53:32.200Z] [BOT] ⏭️  Skipping duplicate: JID_52f3e750 (posted within 7 days)
⏭️  Skipping duplicate: JID_9b390ef8 (posted within 7 days)
⏭️  Skipping duplicate: JID_b0b83342 (posted within 7 days)
[2026-01-03T08:53:32.200Z] [BOT] ⏭️  Skipping duplicate: JID_5b3f9c27 (posted within 7 days)
[2026-01-03T08:53:32.278Z] [BOT] ✅ Loaded pending queue: 975 total (955 pending, 20 enriched, 0 posted)
[2026-01-03T08:53:32.391Z] [BOT] ✅ Saved pending queue: 975 total (955 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T08:53:32.392Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T08:53:32.435Z] [BOT] 📂 Loaded 1323 existing routing entries
[2026-01-03T08:53:32.480Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1333
   Timestamp: 2026-01-03T08:53:32.475Z
[2026-01-03T08:53:32.481Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T08:53:32.481Z] [BOT] Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-03T08:53:32.481Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T08:53:32.481Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 4
   Top channels:
[2026-01-03T08:53:32.481Z] [BOT] 1. #💲・sales-jobs: 10 posts
     2. #🗽・new-york: 4 posts
     3. #🌆・chicago: 1 posts
     4. #🚌・boston: 1 posts
[2026-01-03T08:53:32.482Z] [BOT] [STATS] Channel stats saved
[2026-01-03T08:53:34.498Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2343) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*