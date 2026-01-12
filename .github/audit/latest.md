# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T20:11:18.510Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T20:10:33.450Z] ========================================
[2026-01-12T20:10:33.452Z] Discord Bot Execution Log
[2026-01-12T20:10:33.452Z] Environment: GitHub Actions
[2026-01-12T20:10:33.452Z] Node Version: v20.19.6
[2026-01-12T20:10:33.452Z] ========================================
[2026-01-12T20:10:33.453Z] Environment Variables Check:
[2026-01-12T20:10:33.453Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T20:10:33.453Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T20:10:33.453Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T20:10:33.453Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T20:10:33.453Z] 
Multi-Channel Configuration:
[2026-01-12T20:10:33.453Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T20:10:33.453Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T20:10:33.453Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T20:10:33.453Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T20:10:33.453Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T20:10:33.453Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T20:10:33.453Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T20:10:33.453Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T20:10:33.453Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T20:10:33.454Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T20:10:33.454Z] 
Data Files Check:
[2026-01-12T20:10:33.455Z] .github/data/new_jobs.json: ✅ Exists (10 items, 150819 bytes)
[2026-01-12T20:10:33.457Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 250382 bytes)
[2026-01-12T20:10:33.457Z] 
========================================
[2026-01-12T20:10:33.457Z] Starting Enhanced Discord Bot...
[2026-01-12T20:10:33.457Z] ========================================
[2026-01-12T20:10:33.979Z] [BOT] ✅ Loaded V2 database: 449 jobs
[2026-01-12T20:10:34.676Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T20:10:34.676Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T20:10:34.676Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T20:10:34.782Z] [BOT] ✅ Loaded pending queue: 2653 total (2633 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Sales Executive at datadog
[2026-01-12T20:10:34.783Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T20:10:34.784Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T20:10:34.784Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T20:10:34.784Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-01-12T20:10:34.785Z] [BOT] (6 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Enterprise Sales Executive @ datadog: boston, massachusetts, usa, remote, washington, district of columbia, usa
   - Enterprise Sales Executive (FED) @ datadog: washington, district of columbia, usa, remote
   - Enterprise Security Sales Specialist @ datadog: chicago, illinois, usa; san francisco, california, usa, remote
[2026-01-12T20:10:34.785Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T20:10:34.790Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-12T20:10:34.790Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive" @ datadog
[2026-01-12T20:10:34.790Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T20:10:34.795Z] [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T20:10:35.024Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive @ datadog in #💲・sales-jobs
[2026-01-12T20:10:35.024Z] [BOT] ✅ Industry: Enterprise Sales Executive @ datadog
[2026-01-12T20:10:36.882Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-12T20:10:38.382Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
[2026-01-12T20:10:38.382Z] [BOT] 💾 BEFORE ARCHIVING: 450 jobs in database
[2026-01-12T20:10:38.383Z] [BOT] ✅ No jobs to archive (all 450 jobs within 7-day window)
[2026-01-12T20:10:38.390Z] [BOT] 💾 Saved posted_jobs.json: 450 active jobs
[2026-01-12T20:10:38.391Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:10:38.391Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
[2026-01-12T20:10:38.391Z] [BOT] 💾 BEFORE ARCHIVING: 451 jobs in database
[2026-01-12T20:10:38.391Z] [BOT] ✅ No jobs to archive (all 451 jobs within 7-day window)
[2026-01-12T20:10:38.397Z] [BOT] 💾 Saved posted_jobs.json: 451 active jobs
[2026-01-12T20:10:38.397Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:10:38.397Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 452 jobs in database
[2026-01-12T20:10:38.398Z] [BOT] ✅ No jobs to archive (all 452 jobs within 7-day window)
[2026-01-12T20:10:38.403Z] [BOT] 💾 Saved posted_jobs.json: 452 active jobs
[2026-01-12T20:10:38.403Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:10:38.403Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 453 jobs in database
[2026-01-12T20:10:38.403Z] [BOT] ✅ No jobs to archive (all 453 jobs within 7-day window)
[2026-01-12T20:10:38.407Z] [BOT] 💾 Saved posted_jobs.json: 453 active jobs
[2026-01-12T20:10:38.407Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
[2026-01-12T20:10:38.408Z] [BOT] 💾 BEFORE ARCHIVING: 454 jobs in database
[2026-01-12T20:10:38.408Z] [BOT] ✅ No jobs to archive (all 454 jobs within 7-day window)
[2026-01-12T20:10:38.412Z] [BOT] 💾 Saved posted_jobs.json: 454 active jobs
[2026-01-12T20:10:38.412Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:10:38.412Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive (FED)" @ datadog
   Category: SALES (matched: "sales")
[2026-01-12T20:10:38.413Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T20:10:38.863Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive (FED) @ datadog in #💲・sales-jobs
[2026-01-12T20:10:38.864Z] [BOT] ✅ Industry: Enterprise Sales Executive (FED) @ datadog
[2026-01-12T20:10:40.364Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive (FED) @ datadog (instance #1)
[2026-01-12T20:10:40.365Z] [BOT] 💾 BEFORE ARCHIVING: 455 jobs in database
[2026-01-12T20:10:40.365Z] [BOT] ✅ No jobs to archive (all 455 jobs within 7-day window)
[2026-01-12T20:10:40.368Z] [BOT] 💾 Saved posted_jobs.json: 455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T20:10:40.368Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive (FED) @ datadog (instance #1)
[2026-01-12T20:10:40.368Z] [BOT] 💾 BEFORE ARCHIVING: 456 jobs in database
[2026-01-12T20:10:40.369Z] [BOT] ✅ No jobs to archive (all 456 jobs within 7-day window)
[2026-01-12T20:10:40.372Z] [BOT] 💾 Saved posted_jobs.json: 456 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T20:10:40.372Z] [BOT] 📍 [ROUTING] " Enterprise Sales Executive (SLED)" @ datadog
[2026-01-12T20:10:40.372Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T20:10:40.589Z] [BOT] ✅ Created forum post: 🏢  Enterprise Sales Executive (SLED) @ datadog in #💲・sales-jobs
[2026-01-12T20:10:40.589Z] [BOT] ✅ Industry:  Enterprise Sales Executive (SLED) @ datadog
[2026-01-12T20:10:42.293Z] [BOT] ✅ Created forum post: 🏢  Enterprise Sales Executive (SLED) @ datadog in #💻・remote-usa
[2026-01-12T20:10:42.293Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-12T20:10:43.794Z] [BOT] 💾 Marked as posted:  Enterprise Sales Executive (SLED) @ datadog (instance #1)
[2026-01-12T20:10:43.794Z] [BOT] 💾 BEFORE ARCHIVING: 457 jobs in database
[2026-01-12T20:10:43.794Z] [BOT] ✅ No jobs to archive (all 457 jobs within 7-day window)
[2026-01-12T20:10:43.798Z] [BOT] 💾 Saved posted_jobs.json: 457 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T20:10:43.799Z] [BOT] 📍 [ROUTING] "Field CISO" @ datadog
[2026-01-12T20:10:43.799Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T20:10:44.117Z] [BOT] ✅ Created forum post: 🏢 Field CISO @ datadog in #💲・sales-jobs
  ✅ Industry: Field CISO @ datadog
[2026-01-12T20:10:45.824Z] [BOT] ✅ Created forum post: 🏢 Field CISO @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T20:10:47.324Z] [BOT] 💾 Marked as posted: Field CISO @ datadog (instance #1)
[2026-01-12T20:10:47.325Z] [BOT] 💾 BEFORE ARCHIVING: 458 jobs in database
[2026-01-12T20:10:47.325Z] [BOT] ✅ No jobs to archive (all 458 jobs within 7-day window)
[2026-01-12T20:10:47.329Z] [BOT] 💾 Saved posted_jobs.json: 458 active jobs
[2026-01-12T20:10:47.329Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:10:47.329Z] [BOT] 📍 [ROUTING] "Field CTO - Media & Entertainment" @ datadog
[2026-01-12T20:10:47.329Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T20:10:47.700Z] [BOT] ✅ Created forum post: 🏢 Field CTO - Media & Entertainment @ datadog in #💲・sales-jobs
  ✅ Industry: Field CTO - Media & Entertainment @ datadog
[2026-01-12T20:10:49.403Z] [BOT] ✅ Created forum post: 🏢 Field CTO - Media & Entertainment @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T20:10:50.904Z] [BOT] 💾 Marked as posted: Field CTO - Media & Entertainment @ datadog (instance #1)
[2026-01-12T20:10:50.904Z] [BOT] 💾 BEFORE ARCHIVING: 459 jobs in database
[2026-01-12T20:10:50.904Z] [BOT] ✅ No jobs to archive (all 459 jobs within 7-day window)
[2026-01-12T20:10:50.908Z] [BOT] 💾 Saved posted_jobs.json: 459 active jobs
[2026-01-12T20:10:50.908Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:10:53.909Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-12T20:10:53.909Z] [BOT] 📍 [ROUTING] "Enterprise Security Sales Specialist" @ datadog
[2026-01-12T20:10:53.910Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T20:10:54.167Z] [BOT] ✅ Created forum post: 🏢 Enterprise Security Sales Specialist @ datadog in #💻・tech-jobs
  ✅ Industry: Enterprise Security Sales Specialist @ datadog
[2026-01-12T20:10:55.915Z] [BOT] ✅ Created forum post: 🏢 Enterprise Security Sales Specialist @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T20:10:57.416Z] [BOT] 💾 Marked as posted: Enterprise Security Sales Specialist @ datadog (instance #1)
[2026-01-12T20:10:57.417Z] [BOT] 💾 BEFORE ARCHIVING: 460 jobs in database
[2026-01-12T20:10:57.417Z] [BOT] ✅ No jobs to archive (all 460 jobs within 7-day window)
[2026-01-12T20:10:57.421Z] [BOT] 💾 Saved posted_jobs.json: 460 active jobs
[2026-01-12T20:10:57.421Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:10:57.422Z] [BOT] 💾 Marked as posted: Enterprise Security Sales Specialist @ datadog (instance #1)
💾 BEFORE ARCHIVING: 461 jobs in database
[2026-01-12T20:10:57.422Z] [BOT] ✅ No jobs to archive (all 461 jobs within 7-day window)
[2026-01-12T20:10:57.426Z] [BOT] 💾 Saved posted_jobs.json: 461 active jobs
[2026-01-12T20:10:57.426Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:10:57.426Z] [BOT] 📍 [ROUTING] "Federal Support Engineer 2 - Denver" @ datadog
[2026-01-12T20:10:57.427Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T20:10:57.660Z] [BOT] ✅ Created forum post: 🏢 Federal Support Engineer 2 - Denver @ datadog in #💻・tech-jobs
[2026-01-12T20:10:57.660Z] [BOT] ✅ Industry: Federal Support Engineer 2 - Denver @ datadog
[2026-01-12T20:10:59.161Z] [BOT] 💾 Marked as posted: Federal Support Engineer 2 - Denver @ datadog (instance #1)
[2026-01-12T20:10:59.162Z] [BOT] 💾 BEFORE ARCHIVING: 462 jobs in database
[2026-01-12T20:10:59.162Z] [BOT] ✅ No jobs to archive (all 462 jobs within 7-day window)
[2026-01-12T20:10:59.166Z] [BOT] 💾 Saved posted_jobs.json: 462 active jobs
[2026-01-12T20:10:59.166Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:11:02.166Z] [BOT] 📌 Posting 3 jobs to #📣・marketing-jobs
[2026-01-12T20:11:02.167Z] [BOT] 📍 [ROUTING] "Executive Assistant II - San Francisco" @ datadog
[2026-01-12T20:11:02.167Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T20:11:02.492Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant II - San Francisco @ datadog in #📣・marketing-jobs
[2026-01-12T20:11:02.493Z] [BOT] ✅ Industry: Executive Assistant II - San Francisco @ datadog
[2026-01-12T20:11:05.120Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant II - San Francisco @ datadog in #🌉・san-francisco
[2026-01-12T20:11:05.120Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T20:11:06.620Z] [BOT] 💾 Marked as posted: Executive Assistant II - San Francisco @ datadog (instance #1)
[2026-01-12T20:11:06.620Z] [BOT] 💾 BEFORE ARCHIVING: 463 jobs in database
[2026-01-12T20:11:06.621Z] [BOT] ✅ No jobs to archive (all 463 jobs within 7-day window)
[2026-01-12T20:11:06.625Z] [BOT] 💾 Saved posted_jobs.json: 463 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T20:11:06.626Z] [BOT] 📍 [ROUTING] "Executive Assistant I - NYC" @ datadog
[2026-01-12T20:11:06.626Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T20:11:06.802Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant I - NYC @ datadog in #📣・marketing-jobs
[2026-01-12T20:11:06.802Z] [BOT] ✅ Industry: Executive Assistant I - NYC @ datadog
[2026-01-12T20:11:08.733Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant I - NYC @ datadog in #🗽・new-york
[2026-01-12T20:11:08.733Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T20:11:10.234Z] [BOT] 💾 Marked as posted: Executive Assistant I - NYC @ datadog (instance #1)
[2026-01-12T20:11:10.234Z] [BOT] 💾 BEFORE ARCHIVING: 464 jobs in database
[2026-01-12T20:11:10.235Z] [BOT] ✅ No jobs to archive (all 464 jobs within 7-day window)
[2026-01-12T20:11:10.239Z] [BOT] 💾 Saved posted_jobs.json: 464 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T20:11:10.239Z] [BOT] 📍 [ROUTING] "Field Marketing Manager (LATAM South)" @ datadog
[2026-01-12T20:11:10.240Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T20:11:10.418Z] [BOT] ✅ Created forum post: 🏢 Field Marketing Manager (LATAM South) @ datadog in #📣・marketing-jobs
  ✅ Industry: Field Marketing Manager (LATAM South) @ datadog
[2026-01-12T20:11:11.919Z] [BOT] 💾 Marked as posted: Field Marketing Manager (LATAM South) @ datadog (instance #1)
[2026-01-12T20:11:11.919Z] [BOT] 💾 BEFORE ARCHIVING: 465 jobs in database
[2026-01-12T20:11:11.920Z] [BOT] ✅ No jobs to archive (all 465 jobs within 7-day window)
[2026-01-12T20:11:11.924Z] [BOT] 💾 Saved posted_jobs.json: 465 active jobs
[2026-01-12T20:11:11.924Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T20:11:14.925Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T20:11:14.925Z] [BOT] ⏭️  Skipping duplicate: JID_4a5cf546 (posted within 7 days)
[2026-01-12T20:11:14.925Z] [BOT] ⏭️  Skipping duplicate: JID_f16f7e01 (posted within 7 days)
[2026-01-12T20:11:14.926Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
[2026-01-12T20:11:14.926Z] [BOT] ⏭️  Skipping duplicate: JID_29b543dd (posted within 7 days)
[2026-01-12T20:11:14.926Z] [BOT] ⏭️  Skipping duplicate: JID_84d2607c (posted within 7 days)
[2026-01-12T20:11:14.926Z] [BOT] ⏭️  Skipping duplicate: JID_03d6c806 (posted within 7 days)
[2026-01-12T20:11:14.926Z] [BOT] ⏭️  Skipping duplicate: JID_9271b02d (posted within 7 days)
[2026-01-12T20:11:14.926Z] [BOT] ⏭️  Skipping duplicate: JID_7de3b3fa (posted within 7 days)
[2026-01-12T20:11:14.926Z] [BOT] ⏭️  Skipping duplicate: JID_96b2c378 (posted within 7 days)
[2026-01-12T20:11:14.926Z] [BOT] ⏭️  Skipping duplicate: JID_2b763968 (posted within 7 days)
[2026-01-12T20:11:15.055Z] [BOT] ✅ Loaded pending queue: 2653 total (2633 pending, 20 enriched, 0 posted)
[2026-01-12T20:11:15.206Z] [BOT] ✅ Saved pending queue: 2653 total (2633 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-12T20:11:15.206Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T20:11:15.257Z] [BOT] 📂 Loaded 2642 existing routing entries
[2026-01-12T20:11:15.312Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2652
   Timestamp: 2026-01-12T20:11:15.300Z
[2026-01-12T20:11:15.312Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 17
[2026-01-12T20:11:15.313Z] [BOT] Successful: 17
   Failed: 0
   Skipped: 0
[2026-01-12T20:11:15.313Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 7
   Top channels:
     1. #💲・sales-jobs: 5 posts
     2. #🌉・san-francisco: 4 posts
     3. #📣・marketing-jobs: 3 posts
     4. #💻・tech-jobs: 2 posts
     5. #🚌・boston: 1 posts
[2026-01-12T20:11:15.313Z] [BOT] [STATS] Channel stats saved
[2026-01-12T20:11:17.339Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*