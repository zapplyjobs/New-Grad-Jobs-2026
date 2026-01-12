# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T19:39:06.594Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T19:38:14.952Z] ========================================
[2026-01-12T19:38:14.954Z] Discord Bot Execution Log
[2026-01-12T19:38:14.954Z] Environment: GitHub Actions
[2026-01-12T19:38:14.954Z] Node Version: v20.19.6
[2026-01-12T19:38:14.954Z] ========================================
[2026-01-12T19:38:14.954Z] Environment Variables Check:
[2026-01-12T19:38:14.954Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T19:38:14.954Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T19:38:14.954Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T19:38:14.955Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T19:38:14.955Z] 
Multi-Channel Configuration:
[2026-01-12T19:38:14.955Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T19:38:14.955Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T19:38:14.955Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T19:38:14.955Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T19:38:14.955Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T19:38:14.955Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T19:38:14.955Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T19:38:14.955Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T19:38:14.955Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T19:38:14.955Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T19:38:14.956Z] 
Data Files Check:
[2026-01-12T19:38:14.957Z] .github/data/new_jobs.json: ✅ Exists (10 items, 159084 bytes)
[2026-01-12T19:38:14.959Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 239453 bytes)
[2026-01-12T19:38:14.959Z] 
========================================
[2026-01-12T19:38:14.959Z] Starting Enhanced Discord Bot...
[2026-01-12T19:38:14.959Z] ========================================
[2026-01-12T19:38:15.513Z] [BOT] ✅ Loaded V2 database: 426 jobs
[2026-01-12T19:38:16.098Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T19:38:16.099Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T19:38:16.099Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T19:38:16.221Z] [BOT] ✅ Loaded pending queue: 2654 total (2634 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Commercial Account Executive (Boston) at datadog
[2026-01-12T19:38:16.223Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T19:38:16.224Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T19:38:16.224Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T19:38:16.225Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-12T19:38:16.225Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Deal Desk Analyst @ datadog: boston, massachusetts, usa; new york, new york, usa, denver, colorado, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T19:38:16.230Z] [BOT] 📌 Posting 8 jobs to #💲・sales-jobs
[2026-01-12T19:38:16.230Z] [BOT] 📍 [ROUTING] "Commercial Account Executive (Boston)" @ datadog
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:38:16.235Z] [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T19:38:16.660Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive (Boston) @ datadog in #💲・sales-jobs
  ✅ Industry: Commercial Account Executive (Boston) @ datadog
[2026-01-12T19:38:18.598Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive (Boston) @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-12T19:38:20.098Z] [BOT] 💾 Marked as posted: Commercial Account Executive (Boston) @ datadog (instance #1)
[2026-01-12T19:38:20.098Z] [BOT] 💾 BEFORE ARCHIVING: 427 jobs in database
[2026-01-12T19:38:20.099Z] [BOT] ✅ No jobs to archive (all 427 jobs within 7-day window)
[2026-01-12T19:38:20.108Z] [BOT] 💾 Saved posted_jobs.json: 427 active jobs
[2026-01-12T19:38:20.108Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Commercial Account Executive - LATAM (Spanish Speaking) - Boston" @ datadog
   Category: SALES (matched: "sales")
[2026-01-12T19:38:20.108Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:38:20.670Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive - LATAM (Spanish Speaking) - Boston @ datadog in #💲・sales-jobs
  ✅ Industry: Commercial Account Executive - LATAM (Spanish Speaking) - Boston @ datadog
[2026-01-12T19:38:22.529Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive - LATAM (Spanish Speaking) - Boston @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-12T19:38:24.029Z] [BOT] 💾 Marked as posted: Commercial Account Executive - LATAM (Spanish Speaking) - Boston @ datadog (instance #1)
[2026-01-12T19:38:24.029Z] [BOT] 💾 BEFORE ARCHIVING: 428 jobs in database
[2026-01-12T19:38:24.029Z] [BOT] ✅ No jobs to archive (all 428 jobs within 7-day window)
[2026-01-12T19:38:24.034Z] [BOT] 💾 Saved posted_jobs.json: 428 active jobs
[2026-01-12T19:38:24.034Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:38:24.034Z] [BOT] 📍 [ROUTING] "Commercial Sales Engineer (East)" @ datadog
[2026-01-12T19:38:24.035Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:38:24.315Z] [BOT] ✅ Created forum post: 🏢 Commercial Sales Engineer (East) @ datadog in #💲・sales-jobs
  ✅ Industry: Commercial Sales Engineer (East) @ datadog
[2026-01-12T19:38:26.790Z] [BOT] ✅ Created forum post: 🏢 Commercial Sales Engineer (East) @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-12T19:38:28.291Z] [BOT] 💾 Marked as posted: Commercial Sales Engineer (East) @ datadog (instance #1)
[2026-01-12T19:38:28.292Z] [BOT] 💾 BEFORE ARCHIVING: 429 jobs in database
[2026-01-12T19:38:28.292Z] [BOT] ✅ No jobs to archive (all 429 jobs within 7-day window)
[2026-01-12T19:38:28.298Z] [BOT] 💾 Saved posted_jobs.json: 429 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:38:28.299Z] [BOT] 📍 [ROUTING] "Commercial Sales Engineer - NYC" @ datadog
[2026-01-12T19:38:28.299Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:38:28.449Z] [BOT] ✅ Created forum post: 🏢 Commercial Sales Engineer - NYC @ datadog in #💲・sales-jobs
  ✅ Industry: Commercial Sales Engineer - NYC @ datadog
[2026-01-12T19:38:30.482Z] [BOT] ✅ Created forum post: 🏢 Commercial Sales Engineer - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T19:38:31.983Z] [BOT] 💾 Marked as posted: Commercial Sales Engineer - NYC @ datadog (instance #1)
[2026-01-12T19:38:31.984Z] [BOT] 💾 BEFORE ARCHIVING: 430 jobs in database
[2026-01-12T19:38:31.984Z] [BOT] ✅ No jobs to archive (all 430 jobs within 7-day window)
[2026-01-12T19:38:31.989Z] [BOT] 💾 Saved posted_jobs.json: 430 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:38:31.989Z] [BOT] 📍 [ROUTING] "Customer Success Associate - Boston (Portuguese-speaking)" @ datadog
[2026-01-12T19:38:31.989Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:38:32.164Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate - Boston (Portuguese-speaking) @ datadog in #💲・sales-jobs
  ✅ Industry: Customer Success Associate - Boston (Portuguese-speaking) @ datadog
[2026-01-12T19:38:34.217Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate - Boston (Portuguese-speaking) @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-12T19:38:35.718Z] [BOT] 💾 Marked as posted: Customer Success Associate - Boston (Portuguese-speaking) @ datadog (instance #1)
[2026-01-12T19:38:35.719Z] [BOT] 💾 BEFORE ARCHIVING: 431 jobs in database
[2026-01-12T19:38:35.719Z] [BOT] ✅ No jobs to archive (all 431 jobs within 7-day window)
[2026-01-12T19:38:35.724Z] [BOT] 💾 Saved posted_jobs.json: 431 active jobs
[2026-01-12T19:38:35.724Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:38:35.724Z] [BOT] 📍 [ROUTING] "Customer Success Manager - Boston" @ datadog
[2026-01-12T19:38:35.724Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:38:36.049Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager - Boston @ datadog in #💲・sales-jobs
  ✅ Industry: Customer Success Manager - Boston @ datadog
[2026-01-12T19:38:37.740Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager - Boston @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-12T19:38:39.242Z] [BOT] 💾 Marked as posted: Customer Success Manager - Boston @ datadog (instance #1)
[2026-01-12T19:38:39.242Z] [BOT] 💾 BEFORE ARCHIVING: 432 jobs in database
[2026-01-12T19:38:39.243Z] [BOT] ✅ No jobs to archive (all 432 jobs within 7-day window)
[2026-01-12T19:38:39.247Z] [BOT] 💾 Saved posted_jobs.json: 432 active jobs
[2026-01-12T19:38:39.247Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:38:39.248Z] [BOT] 📍 [ROUTING] "Customer Success Manager - Boston (Portuguese-speaking)" @ datadog
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:38:39.549Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager - Boston (Portuguese-speaking) @ datadog in #💲・sales-jobs
  ✅ Industry: Customer Success Manager - Boston (Portuguese-speaking) @ datadog
[2026-01-12T19:38:41.247Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager - Boston (Portuguese-speaking) @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-12T19:38:42.748Z] [BOT] 💾 Marked as posted: Customer Success Manager - Boston (Portuguese-speaking) @ datadog (instance #1)
[2026-01-12T19:38:42.749Z] [BOT] 💾 BEFORE ARCHIVING: 433 jobs in database
[2026-01-12T19:38:42.749Z] [BOT] ✅ No jobs to archive (all 433 jobs within 7-day window)
[2026-01-12T19:38:42.754Z] [BOT] 💾 Saved posted_jobs.json: 433 active jobs
[2026-01-12T19:38:42.754Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:38:42.754Z] [BOT] 📍 [ROUTING] "Datadog for Startups Lead" @ datadog
[2026-01-12T19:38:42.754Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:38:43.381Z] [BOT] ✅ Created forum post: 🏢 Datadog for Startups Lead @ datadog in #💲・sales-jobs
  ✅ Industry: Datadog for Startups Lead @ datadog
[2026-01-12T19:38:45.069Z] [BOT] ✅ Created forum post: 🏢 Datadog for Startups Lead @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T19:38:46.571Z] [BOT] 💾 Marked as posted: Datadog for Startups Lead @ datadog (instance #1)
[2026-01-12T19:38:46.571Z] [BOT] 💾 BEFORE ARCHIVING: 434 jobs in database
[2026-01-12T19:38:46.571Z] [BOT] ✅ No jobs to archive (all 434 jobs within 7-day window)
[2026-01-12T19:38:46.577Z] [BOT] 💾 Saved posted_jobs.json: 434 active jobs
[2026-01-12T19:38:46.577Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:38:49.578Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-12T19:38:49.578Z] [BOT] 📍 [ROUTING] "Container Runtime Engineer" @ datadog
[2026-01-12T19:38:49.578Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T19:38:50.080Z] [BOT] ✅ Created forum post: 🏢 Container Runtime Engineer @ datadog in #💻・tech-jobs
  ✅ Industry: Container Runtime Engineer @ datadog
[2026-01-12T19:38:51.767Z] [BOT] ✅ Created forum post: 🏢 Container Runtime Engineer @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T19:38:53.268Z] [BOT] 💾 Marked as posted: Container Runtime Engineer @ datadog (instance #1)
[2026-01-12T19:38:53.268Z] [BOT] 💾 BEFORE ARCHIVING: 435 jobs in database
[2026-01-12T19:38:53.268Z] [BOT] ✅ No jobs to archive (all 435 jobs within 7-day window)
[2026-01-12T19:38:53.272Z] [BOT] 💾 Saved posted_jobs.json: 435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:38:56.274Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-12T19:38:56.274Z] [BOT] 📍 [ROUTING] "Coordinator, Business Recruiting - Contract" @ datadog
   Category: MARKETING (matched: "growth")
[2026-01-12T19:38:56.274Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T19:38:56.523Z] [BOT] ✅ Created forum post: 🏢 Coordinator, Business Recruiting - Contract @ datadog in #📣・marketing-jobs
  ✅ Industry: Coordinator, Business Recruiting - Contract @ datadog
[2026-01-12T19:38:58.837Z] [BOT] ✅ Created forum post: 🏢 Coordinator, Business Recruiting - Contract @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T19:39:00.338Z] [BOT] 💾 Marked as posted: Coordinator, Business Recruiting - Contract @ datadog (instance #1)
[2026-01-12T19:39:00.338Z] [BOT] 💾 BEFORE ARCHIVING: 436 jobs in database
[2026-01-12T19:39:00.338Z] [BOT] ✅ No jobs to archive (all 436 jobs within 7-day window)
[2026-01-12T19:39:00.343Z] [BOT] 💾 Saved posted_jobs.json: 436 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:39:03.344Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T19:39:03.344Z] [BOT] ⏭️  Skipping duplicate: JID_658f6006 (posted within 7 days)
[2026-01-12T19:39:03.344Z] [BOT] ⏭️  Skipping duplicate: JID_aabfb282 (posted within 7 days)
[2026-01-12T19:39:03.344Z] [BOT] ⏭️  Skipping duplicate: JID_2cfa1f86 (posted within 7 days)
[2026-01-12T19:39:03.344Z] [BOT] ⏭️  Skipping duplicate: JID_50a40467 (posted within 7 days)
[2026-01-12T19:39:03.344Z] [BOT] ⏭️  Skipping duplicate: JID_8e57d643 (posted within 7 days)
[2026-01-12T19:39:03.344Z] [BOT] ⏭️  Skipping duplicate: JID_304f6b44 (posted within 7 days)
[2026-01-12T19:39:03.345Z] [BOT] ⏭️  Skipping duplicate: JID_61aeb04f (posted within 7 days)
[2026-01-12T19:39:03.345Z] [BOT] ⏭️  Skipping duplicate: JID_92a27594 (posted within 7 days)
[2026-01-12T19:39:03.345Z] [BOT] ⏭️  Skipping duplicate: JID_a65e0bad (posted within 7 days)
[2026-01-12T19:39:03.345Z] [BOT] ⏭️  Skipping duplicate: JID_6084715e (posted within 7 days)
[2026-01-12T19:39:03.479Z] [BOT] ✅ Loaded pending queue: 2654 total (2634 pending, 20 enriched, 0 posted)
[2026-01-12T19:39:03.640Z] [BOT] ✅ Saved pending queue: 2654 total (2634 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-12T19:39:03.640Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T19:39:03.693Z] [BOT] 📂 Loaded 2622 existing routing entries
[2026-01-12T19:39:03.749Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-12T19:39:03.749Z] [BOT] Total entries: 2632
   Timestamp: 2026-01-12T19:39:03.738Z
[2026-01-12T19:39:03.749Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 20
[2026-01-12T19:39:03.750Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-12T19:39:03.750Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T19:39:03.750Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
     1. #💲・sales-jobs: 8 posts
[2026-01-12T19:39:03.750Z] [BOT] 2. #🚌・boston: 6 posts
     3. #🗽・new-york: 3 posts
     4. #🌉・san-francisco: 1 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-12T19:39:03.750Z] [BOT] [STATS] Channel stats saved
[2026-01-12T19:39:05.775Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*