# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T10:39:26.865Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T10:38:48.506Z] ========================================
[2026-01-03T10:38:48.508Z] Discord Bot Execution Log
[2026-01-03T10:38:48.508Z] Environment: GitHub Actions
[2026-01-03T10:38:48.508Z] Node Version: v20.19.6
[2026-01-03T10:38:48.508Z] ========================================
[2026-01-03T10:38:48.508Z] Environment Variables Check:
[2026-01-03T10:38:48.508Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T10:38:48.509Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T10:38:48.509Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T10:38:48.509Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T10:38:48.509Z] 
Multi-Channel Configuration:
[2026-01-03T10:38:48.509Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T10:38:48.509Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T10:38:48.509Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T10:38:48.509Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T10:38:48.509Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T10:38:48.509Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T10:38:48.510Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T10:38:48.510Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T10:38:48.510Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T10:38:48.510Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T10:38:48.510Z] 
Data Files Check:
[2026-01-03T10:38:48.511Z] .github/data/new_jobs.json: ✅ Exists (10 items, 161519 bytes)
[2026-01-03T10:38:48.513Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 206721 bytes)
[2026-01-03T10:38:48.513Z] 
========================================
[2026-01-03T10:38:48.513Z] Starting Enhanced Discord Bot...
[2026-01-03T10:38:48.513Z] ========================================
[2026-01-03T10:38:49.044Z] [BOT] ✅ Loaded V2 database: 384 jobs
[2026-01-03T10:38:49.544Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T10:38:49.545Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T10:38:49.545Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T10:38:49.546Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T10:38:49.616Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T10:38:49.711Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T10:38:49.713Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T10:38:49.713Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T10:38:49.714Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T10:38:49.714Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-03T10:38:49.714Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Customer Success Manager - Boston @ datadog: boston, massachusetts, usa, denver, colorado, usa
   - Deal Desk Analyst @ datadog: boston, massachusetts, usa; new york, new york, usa, denver, colorado, usa
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
[2026-01-03T10:38:49.715Z] [BOT] 📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T10:38:49.719Z] [BOT] 📌 Posting 7 jobs to #💲・sales-jobs
[2026-01-03T10:38:49.719Z] [BOT] 📍 [ROUTING] "Customer Success Manager - Boston" @ datadog
[2026-01-03T10:38:49.720Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:38:49.724Z] [BOT ERROR] (node:2375) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T10:38:50.168Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager - Boston @ datadog in #💲・sales-jobs
  ✅ Industry: Customer Success Manager - Boston @ datadog
[2026-01-03T10:38:51.876Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager - Boston @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-03T10:38:53.375Z] [BOT] 💾 Marked as posted: Customer Success Manager - Boston @ datadog (instance #1)
[2026-01-03T10:38:53.376Z] [BOT] 💾 BEFORE ARCHIVING: 385 jobs in database
[2026-01-03T10:38:53.377Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-03T10:38:53.382Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2026-01-03T10:38:53.382Z] [BOT] ✅ Archiving complete: 1 archived, 384 active
[2026-01-03T10:38:53.387Z] [BOT] 💾 Saved posted_jobs.json: 384 active jobs
[2026-01-03T10:38:53.387Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:38:53.387Z] [BOT] 💾 Marked as posted: Customer Success Manager - Denver @ datadog (instance #1)
[2026-01-03T10:38:53.387Z] [BOT] 💾 BEFORE ARCHIVING: 385 jobs in database
[2026-01-03T10:38:53.388Z] [BOT] ✅ No jobs to archive (all 385 jobs within 7-day window)
[2026-01-03T10:38:53.391Z] [BOT] 💾 Saved posted_jobs.json: 385 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T10:38:53.391Z] [BOT] 📍 [ROUTING] "Datadog for Startups Lead" @ datadog
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:38:53.581Z] [BOT] ✅ Created forum post: 🏢 Datadog for Startups Lead @ datadog in #💲・sales-jobs
[2026-01-03T10:38:53.581Z] [BOT] ✅ Industry: Datadog for Startups Lead @ datadog
[2026-01-03T10:38:55.377Z] [BOT] ✅ Created forum post: 🏢 Datadog for Startups Lead @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T10:38:56.879Z] [BOT] 💾 Marked as posted: Datadog for Startups Lead @ datadog (instance #1)
[2026-01-03T10:38:56.879Z] [BOT] 💾 BEFORE ARCHIVING: 386 jobs in database
[2026-01-03T10:38:56.879Z] [BOT] ✅ No jobs to archive (all 386 jobs within 7-day window)
[2026-01-03T10:38:56.882Z] [BOT] 💾 Saved posted_jobs.json: 386 active jobs
[2026-01-03T10:38:56.883Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:38:56.883Z] [BOT] 📍 [ROUTING] "Deal Desk Analyst" @ datadog
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:38:57.074Z] [BOT] ✅ Created forum post: 🏢 Deal Desk Analyst @ datadog in #💲・sales-jobs
[2026-01-03T10:38:57.074Z] [BOT] ✅ Industry: Deal Desk Analyst @ datadog
[2026-01-03T10:38:58.746Z] [BOT] ✅ Created forum post: 🏢 Deal Desk Analyst @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T10:39:00.247Z] [BOT] 💾 Marked as posted: Deal Desk Analyst @ datadog (instance #1)
[2026-01-03T10:39:00.248Z] [BOT] 💾 BEFORE ARCHIVING: 387 jobs in database
[2026-01-03T10:39:00.248Z] [BOT] ✅ No jobs to archive (all 387 jobs within 7-day window)
[2026-01-03T10:39:00.251Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T10:39:00.251Z] [BOT] 💾 Marked as posted: Deal Desk Analyst - Denver @ datadog (instance #1)
[2026-01-03T10:39:00.251Z] [BOT] 💾 BEFORE ARCHIVING: 388 jobs in database
[2026-01-03T10:39:00.252Z] [BOT] ✅ No jobs to archive (all 388 jobs within 7-day window)
[2026-01-03T10:39:00.254Z] [BOT] 💾 Saved posted_jobs.json: 388 active jobs
[2026-01-03T10:39:00.255Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:39:00.255Z] [BOT] 📍 [ROUTING] "Director, Enterpise Sales" @ datadog
[2026-01-03T10:39:00.255Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:39:00.473Z] [BOT] ✅ Created forum post: 🏢 Director, Enterpise Sales @ datadog in #💲・sales-jobs
  ✅ Industry: Director, Enterpise Sales @ datadog
[2026-01-03T10:39:02.158Z] [BOT] ✅ Created forum post: 🏢 Director, Enterpise Sales @ datadog in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T10:39:03.658Z] [BOT] 💾 Marked as posted: Director, Enterpise Sales @ datadog (instance #1)
[2026-01-03T10:39:03.658Z] [BOT] 💾 BEFORE ARCHIVING: 389 jobs in database
[2026-01-03T10:39:03.658Z] [BOT] ✅ No jobs to archive (all 389 jobs within 7-day window)
[2026-01-03T10:39:03.662Z] [BOT] 💾 Saved posted_jobs.json: 389 active jobs
[2026-01-03T10:39:03.662Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:39:03.662Z] [BOT] 📍 [ROUTING] "Director, Enterprise Sales (SLED)" @ datadog
[2026-01-03T10:39:03.662Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:39:03.868Z] [BOT] ✅ Created forum post: 🏢 Director, Enterprise Sales (SLED) @ datadog in #💲・sales-jobs
[2026-01-03T10:39:03.868Z] [BOT] ✅ Industry: Director, Enterprise Sales (SLED) @ datadog
[2026-01-03T10:39:05.536Z] [BOT] ✅ Created forum post: 🏢 Director, Enterprise Sales (SLED) @ datadog in #💻・remote-usa
[2026-01-03T10:39:05.536Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-03T10:39:07.036Z] [BOT] 💾 Marked as posted: Director, Enterprise Sales (SLED) @ datadog (instance #1)
[2026-01-03T10:39:07.036Z] [BOT] 💾 BEFORE ARCHIVING: 390 jobs in database
[2026-01-03T10:39:07.037Z] [BOT] ✅ No jobs to archive (all 390 jobs within 7-day window)
[2026-01-03T10:39:07.040Z] [BOT] 💾 Saved posted_jobs.json: 390 active jobs
[2026-01-03T10:39:07.040Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:39:07.040Z] [BOT] 📍 [ROUTING] "Director, Pricing and Monetization" @ datadog
[2026-01-03T10:39:07.041Z] [BOT] Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:39:07.221Z] [BOT] ✅ Created forum post: 🏢 Director, Pricing and Monetization @ datadog in #💲・sales-jobs
[2026-01-03T10:39:07.221Z] [BOT] ✅ Industry: Director, Pricing and Monetization @ datadog
[2026-01-03T10:39:09.090Z] [BOT] ✅ Created forum post: 🏢 Director, Pricing and Monetization @ datadog in #🗽・new-york
[2026-01-03T10:39:09.090Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T10:39:10.590Z] [BOT] 💾 Marked as posted: Director, Pricing and Monetization @ datadog (instance #1)
[2026-01-03T10:39:10.590Z] [BOT] 💾 BEFORE ARCHIVING: 391 jobs in database
[2026-01-03T10:39:10.591Z] [BOT] ✅ No jobs to archive (all 391 jobs within 7-day window)
[2026-01-03T10:39:10.595Z] [BOT] 💾 Saved posted_jobs.json: 391 active jobs
[2026-01-03T10:39:10.595Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:39:10.595Z] [BOT] 📍 [ROUTING] "Director, Sales Field Enablement - NYC" @ datadog
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:39:10.877Z] [BOT] ✅ Created forum post: 🏢 Director, Sales Field Enablement - NYC @ datadog in #💲・sales-jobs
  ✅ Industry: Director, Sales Field Enablement - NYC @ datadog
[2026-01-03T10:39:12.570Z] [BOT] ✅ Created forum post: 🏢 Director, Sales Field Enablement - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T10:39:14.071Z] [BOT] 💾 Marked as posted: Director, Sales Field Enablement - NYC @ datadog (instance #1)
[2026-01-03T10:39:14.072Z] [BOT] 💾 BEFORE ARCHIVING: 392 jobs in database
[2026-01-03T10:39:14.072Z] [BOT] ✅ No jobs to archive (all 392 jobs within 7-day window)
[2026-01-03T10:39:14.076Z] [BOT] 💾 Saved posted_jobs.json: 392 active jobs
[2026-01-03T10:39:14.076Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:39:17.077Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T10:39:17.078Z] [BOT] 📍 [ROUTING] "Developer Advocate - Community" @ datadog
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T10:39:17.463Z] [BOT] ✅ Created forum post: 🏢 Developer Advocate - Community @ datadog in #💻・tech-jobs
[2026-01-03T10:39:17.463Z] [BOT] ✅ Industry: Developer Advocate - Community @ datadog
[2026-01-03T10:39:19.239Z] [BOT] ✅ Created forum post: 🏢 Developer Advocate - Community @ datadog in #🗽・new-york
[2026-01-03T10:39:19.239Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T10:39:20.740Z] [BOT] 💾 Marked as posted: Developer Advocate - Community @ datadog (instance #1)
[2026-01-03T10:39:20.741Z] [BOT] 💾 BEFORE ARCHIVING: 393 jobs in database
[2026-01-03T10:39:20.741Z] [BOT] ✅ No jobs to archive (all 393 jobs within 7-day window)
[2026-01-03T10:39:20.745Z] [BOT] 💾 Saved posted_jobs.json: 393 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T10:39:23.746Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-03T10:39:23.747Z] [BOT] ⏭️  Skipping duplicate: JID_92a27594 (posted within 7 days)
[2026-01-03T10:39:23.747Z] [BOT] ⏭️  Skipping duplicate: JID_6084715e (posted within 7 days)
[2026-01-03T10:39:23.747Z] [BOT] ⏭️  Skipping duplicate: JID_2f2f0401 (posted within 7 days)
⏭️  Skipping duplicate: JID_1f442e76 (posted within 7 days)
[2026-01-03T10:39:23.747Z] [BOT] ⏭️  Skipping duplicate: JID_4f1e148a (posted within 7 days)
[2026-01-03T10:39:23.747Z] [BOT] ⏭️  Skipping duplicate: JID_6329e6d2 (posted within 7 days)
⏭️  Skipping duplicate: JID_27a15fea (posted within 7 days)
[2026-01-03T10:39:23.747Z] [BOT] ⏭️  Skipping duplicate: JID_298aa8b5 (posted within 7 days)
[2026-01-03T10:39:23.823Z] [BOT] ✅ Loaded pending queue: 905 total (885 pending, 20 enriched, 0 posted)
[2026-01-03T10:39:23.935Z] [BOT] ✅ Saved pending queue: 905 total (885 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T10:39:23.981Z] [BOT] 📂 Loaded 1387 existing routing entries
[2026-01-03T10:39:24.028Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
[2026-01-03T10:39:24.028Z] [BOT] Total entries: 1395
   Timestamp: 2026-01-03T10:39:24.022Z
[2026-01-03T10:39:24.029Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T10:39:24.029Z] [BOT] Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-03T10:39:24.029Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T10:39:24.029Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 6
   Top channels:
     1. #💲・sales-jobs: 7 posts
     2. #🗽・new-york: 4 posts
[2026-01-03T10:39:24.029Z] [BOT] 3. #💻・remote-usa: 2 posts
     4. #🚌・boston: 1 posts
     5. #🌉・san-francisco: 1 posts
[2026-01-03T10:39:24.030Z] [BOT] [STATS] Channel stats saved
[2026-01-03T10:39:26.047Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2375) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*