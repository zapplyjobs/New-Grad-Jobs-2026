# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T10:05:46.710Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T10:05:00.720Z] ========================================
[2026-01-03T10:05:00.722Z] Discord Bot Execution Log
[2026-01-03T10:05:00.722Z] Environment: GitHub Actions
[2026-01-03T10:05:00.722Z] Node Version: v20.19.6
[2026-01-03T10:05:00.722Z] ========================================
[2026-01-03T10:05:00.722Z] Environment Variables Check:
[2026-01-03T10:05:00.722Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T10:05:00.723Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T10:05:00.723Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T10:05:00.723Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T10:05:00.723Z] 
Multi-Channel Configuration:
[2026-01-03T10:05:00.723Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T10:05:00.723Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T10:05:00.723Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T10:05:00.723Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T10:05:00.723Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T10:05:00.723Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T10:05:00.723Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T10:05:00.723Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T10:05:00.724Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T10:05:00.724Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T10:05:00.724Z] 
Data Files Check:
[2026-01-03T10:05:00.725Z] .github/data/new_jobs.json: ✅ Exists (10 items, 181547 bytes)
[2026-01-03T10:05:00.727Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 196990 bytes)
[2026-01-03T10:05:00.727Z] 
========================================
[2026-01-03T10:05:00.727Z] Starting Enhanced Discord Bot...
[2026-01-03T10:05:00.727Z] ========================================
[2026-01-03T10:05:01.256Z] [BOT] ✅ Loaded V2 database: 364 jobs
[2026-01-03T10:05:02.034Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T10:05:02.034Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T10:05:02.035Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T10:05:02.036Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T10:05:02.105Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T10:05:02.200Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T10:05:02.202Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T10:05:02.202Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T10:05:02.202Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T10:05:02.203Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T10:05:02.203Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T10:05:02.207Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-03T10:05:02.207Z] [BOT] 📍 [ROUTING] "Sales Engineer (Customer Success) - Boston" @ datadog
[2026-01-03T10:05:02.208Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:05:02.212Z] [BOT ERROR] (node:2326) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T10:05:02.367Z] [BOT] ✅ Created forum post: 🏢 Sales Engineer (Customer Success) - Boston @ datadog in #💲・sales-jobs
[2026-01-03T10:05:02.367Z] [BOT] ✅ Industry: Sales Engineer (Customer Success) - Boston @ datadog
[2026-01-03T10:05:04.176Z] [BOT] ✅ Created forum post: 🏢 Sales Engineer (Customer Success) - Boston @ datadog in #🚌・boston
[2026-01-03T10:05:04.176Z] [BOT] ✅ Location: 🚌・boston
[2026-01-03T10:05:05.677Z] [BOT] 💾 Marked as posted: Sales Engineer (Customer Success) - Boston @ datadog (instance #1)
[2026-01-03T10:05:05.677Z] [BOT] 💾 BEFORE ARCHIVING: 365 jobs in database
[2026-01-03T10:05:05.677Z] [BOT] ✅ No jobs to archive (all 365 jobs within 7-day window)
[2026-01-03T10:05:05.684Z] [BOT] 💾 Saved posted_jobs.json: 365 active jobs
[2026-01-03T10:05:05.685Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:05:05.688Z] [BOT] 📍 [ROUTING] "Commercial Sales Engineer - NYC" @ datadog
[2026-01-03T10:05:05.689Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:05:06.065Z] [BOT] ✅ Created forum post: 🏢 Commercial Sales Engineer - NYC @ datadog in #💲・sales-jobs
[2026-01-03T10:05:06.065Z] [BOT] ✅ Industry: Commercial Sales Engineer - NYC @ datadog
[2026-01-03T10:05:07.776Z] [BOT] ✅ Created forum post: 🏢 Commercial Sales Engineer - NYC @ datadog in #🗽・new-york
[2026-01-03T10:05:07.777Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T10:05:09.278Z] [BOT] 💾 Marked as posted: Commercial Sales Engineer - NYC @ datadog (instance #1)
[2026-01-03T10:05:09.278Z] [BOT] 💾 BEFORE ARCHIVING: 366 jobs in database
[2026-01-03T10:05:09.278Z] [BOT] ✅ No jobs to archive (all 366 jobs within 7-day window)
[2026-01-03T10:05:09.282Z] [BOT] 💾 Saved posted_jobs.json: 366 active jobs
[2026-01-03T10:05:09.282Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:05:09.283Z] [BOT] 📍 [ROUTING] "Manager, Customer Success - Denver" @ datadog
[2026-01-03T10:05:09.283Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:05:09.494Z] [BOT] ✅ Created forum post: 🏢 Manager, Customer Success - Denver @ datadog in #💲・sales-jobs
[2026-01-03T10:05:09.494Z] [BOT] ✅ Industry: Manager, Customer Success - Denver @ datadog
[2026-01-03T10:05:10.996Z] [BOT] 💾 Marked as posted: Manager, Customer Success - Denver @ datadog (instance #1)
[2026-01-03T10:05:10.996Z] [BOT] 💾 BEFORE ARCHIVING: 367 jobs in database
[2026-01-03T10:05:10.996Z] [BOT] ✅ No jobs to archive (all 367 jobs within 7-day window)
[2026-01-03T10:05:10.999Z] [BOT] 💾 Saved posted_jobs.json: 367 active jobs
[2026-01-03T10:05:11.000Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:05:11.000Z] [BOT] 📍 [ROUTING] "Major Account Manager" @ datadog
[2026-01-03T10:05:11.000Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:05:11.219Z] [BOT] ✅ Created forum post: 🏢 Major Account Manager @ datadog in #💲・sales-jobs
[2026-01-03T10:05:11.219Z] [BOT] ✅ Industry: Major Account Manager @ datadog
[2026-01-03T10:05:13.199Z] [BOT] ✅ Created forum post: 🏢 Major Account Manager @ datadog in #💻・remote-usa
[2026-01-03T10:05:13.199Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-03T10:05:14.700Z] [BOT] 💾 Marked as posted: Major Account Manager @ datadog (instance #1)
[2026-01-03T10:05:14.700Z] [BOT] 💾 BEFORE ARCHIVING: 368 jobs in database
[2026-01-03T10:05:14.701Z] [BOT] ✅ No jobs to archive (all 368 jobs within 7-day window)
[2026-01-03T10:05:14.704Z] [BOT] 💾 Saved posted_jobs.json: 368 active jobs
[2026-01-03T10:05:14.705Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:05:17.705Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-03T10:05:17.705Z] [BOT] 📍 [ROUTING] "Manager, On-Site Executive IT Support (Residential Operations)" @ coinbase
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T10:05:17.950Z] [BOT] ✅ Created forum post: 🏢 Manager, On-Site Executive IT Support (Residential Operations) @ coinbase in #🤖・ai-jobs
[2026-01-03T10:05:17.950Z] [BOT] ✅ Industry: Manager, On-Site Executive IT Support (Residential Operations) @ coinbase
[2026-01-03T10:05:19.753Z] [BOT] ✅ Created forum post: 🏢 Manager, On-Site Executive IT Support (Residential Operations) @ coinbase in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-03T10:05:21.255Z] [BOT] 💾 Marked as posted: Manager, On-Site Executive IT Support (Residential Operations) @ coinbase (instance #1)
[2026-01-03T10:05:21.255Z] [BOT] 💾 BEFORE ARCHIVING: 369 jobs in database
[2026-01-03T10:05:21.255Z] [BOT] ✅ No jobs to archive (all 369 jobs within 7-day window)
[2026-01-03T10:05:21.259Z] [BOT] 💾 Saved posted_jobs.json: 369 active jobs
[2026-01-03T10:05:21.259Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:05:21.260Z] [BOT] 📍 [ROUTING] "On‑Site IT Support Engineer (Residential Operations)" @ coinbase
[2026-01-03T10:05:21.261Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T10:05:21.508Z] [BOT] ✅ Created forum post: 🏢 On‑Site IT Support Engineer (Residential Operations) @ coinbase in #🤖・ai-jobs
[2026-01-03T10:05:21.509Z] [BOT] ✅ Industry: On‑Site IT Support Engineer (Residential Operations) @ coinbase
[2026-01-03T10:05:23.255Z] [BOT] ✅ Created forum post: 🏢 On‑Site IT Support Engineer (Residential Operations) @ coinbase in #🦢・los-angeles
[2026-01-03T10:05:23.255Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-03T10:05:24.755Z] [BOT] 💾 Marked as posted: On‑Site IT Support Engineer (Residential Operations) @ coinbase (instance #1)
[2026-01-03T10:05:24.756Z] [BOT] 💾 BEFORE ARCHIVING: 370 jobs in database
[2026-01-03T10:05:24.756Z] [BOT] ✅ No jobs to archive (all 370 jobs within 7-day window)
[2026-01-03T10:05:24.760Z] [BOT] 💾 Saved posted_jobs.json: 370 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T10:05:24.760Z] [BOT] 📍 [ROUTING] "Senior Contracts Manager, Procurement and AI" @ airtable
[2026-01-03T10:05:24.760Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T10:05:24.999Z] [BOT] ✅ Created forum post: 🏢 Senior Contracts Manager, Procurement and AI @ airtable in #🤖・ai-jobs
[2026-01-03T10:05:24.999Z] [BOT] ✅ Industry: Senior Contracts Manager, Procurement and AI @ airtable
[2026-01-03T10:05:26.748Z] [BOT] ✅ Created forum post: 🏢 Senior Contracts Manager, Procurement and AI @ airtable in #🌉・san-francisco
[2026-01-03T10:05:26.748Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T10:05:28.248Z] [BOT] 💾 Marked as posted: Senior Contracts Manager, Procurement and AI @ airtable (instance #1)
[2026-01-03T10:05:28.249Z] [BOT] 💾 BEFORE ARCHIVING: 371 jobs in database
[2026-01-03T10:05:28.249Z] [BOT] ✅ No jobs to archive (all 371 jobs within 7-day window)
[2026-01-03T10:05:28.253Z] [BOT] 💾 Saved posted_jobs.json: 371 active jobs
[2026-01-03T10:05:28.253Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:05:28.253Z] [BOT] 📍 [ROUTING] "Director of Sales, Scaled Vendor Sales" @ spotify
[2026-01-03T10:05:28.253Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T10:05:28.663Z] [BOT] ✅ Created forum post: 🏢 Director of Sales, Scaled Vendor Sales @ spotify in #🤖・ai-jobs
[2026-01-03T10:05:28.663Z] [BOT] ✅ Industry: Director of Sales, Scaled Vendor Sales @ spotify
[2026-01-03T10:05:30.390Z] [BOT] ✅ Created forum post: 🏢 Director of Sales, Scaled Vendor Sales @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T10:05:31.890Z] [BOT] 💾 Marked as posted: Director of Sales, Scaled Vendor Sales @ spotify (instance #1)
[2026-01-03T10:05:31.891Z] [BOT] 💾 BEFORE ARCHIVING: 372 jobs in database
[2026-01-03T10:05:31.891Z] [BOT] ✅ No jobs to archive (all 372 jobs within 7-day window)
[2026-01-03T10:05:31.894Z] [BOT] 💾 Saved posted_jobs.json: 372 active jobs
[2026-01-03T10:05:31.894Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:05:31.895Z] [BOT] 📍 [ROUTING] "AI Research Engineer – Datadog AI Research (DAIR)" @ datadog
[2026-01-03T10:05:31.895Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T10:05:32.074Z] [BOT] ✅ Created forum post: 🏢 AI Research Engineer – Datadog AI Research (DAIR) @ datadog in #🤖・ai-jobs
[2026-01-03T10:05:32.074Z] [BOT] ✅ Industry: AI Research Engineer – Datadog AI Research (DAIR) @ datadog
[2026-01-03T10:05:34.041Z] [BOT] ✅ Created forum post: 🏢 AI Research Engineer – Datadog AI Research (DAIR) @ datadog in #🗽・new-york
[2026-01-03T10:05:34.041Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T10:05:35.541Z] [BOT] 💾 Marked as posted: AI Research Engineer – Datadog AI Research (DAIR) @ datadog (instance #1)
[2026-01-03T10:05:35.542Z] [BOT] 💾 BEFORE ARCHIVING: 373 jobs in database
[2026-01-03T10:05:35.542Z] [BOT] ✅ No jobs to archive (all 373 jobs within 7-day window)
[2026-01-03T10:05:35.547Z] [BOT] 💾 Saved posted_jobs.json: 373 active jobs
[2026-01-03T10:05:35.547Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:05:38.548Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T10:05:38.548Z] [BOT] 📍 [ROUTING] "Senior Product Design Manager, Growth & Safety" @ discord
[2026-01-03T10:05:38.548Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-03T10:05:38.850Z] [BOT] ✅ Created forum post: 🏢 Senior Product Design Manager, Growth & Safety @ discord in #📈・JID_fb739488
[2026-01-03T10:05:38.850Z] [BOT] ✅ Industry: Senior Product Design Manager, Growth & Safety @ discord
[2026-01-03T10:05:40.352Z] [BOT] 💾 Marked as posted: Senior Product Design Manager, Growth & Safety @ discord (instance #1)
[2026-01-03T10:05:40.352Z] [BOT] 💾 BEFORE ARCHIVING: 374 jobs in database
[2026-01-03T10:05:40.353Z] [BOT] ✅ No jobs to archive (all 374 jobs within 7-day window)
[2026-01-03T10:05:40.356Z] [BOT] 💾 Saved posted_jobs.json: 374 active jobs
[2026-01-03T10:05:40.357Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:05:43.357Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T10:05:43.358Z] [BOT] ⏭️  Skipping duplicate: JID_594f09b2 (posted within 7 days)
[2026-01-03T10:05:43.358Z] [BOT] ⏭️  Skipping duplicate: JID_50a40467 (posted within 7 days)
⏭️  Skipping duplicate: JID_a7ad74f4 (posted within 7 days)
[2026-01-03T10:05:43.358Z] [BOT] ⏭️  Skipping duplicate: JID_e60d9b4f (posted within 7 days)
[2026-01-03T10:05:43.358Z] [BOT] ⏭️  Skipping duplicate: JID_f0618e51 (posted within 7 days)
[2026-01-03T10:05:43.358Z] [BOT] ⏭️  Skipping duplicate: JID_df37ce36 (posted within 7 days)
[2026-01-03T10:05:43.358Z] [BOT] ⏭️  Skipping duplicate: JID_652438ef (posted within 7 days)
⏭️  Skipping duplicate: JID_b66c3f15 (posted within 7 days)
[2026-01-03T10:05:43.359Z] [BOT] ⏭️  Skipping duplicate: JID_d03a4142 (posted within 7 days)
[2026-01-03T10:05:43.359Z] [BOT] ⏭️  Skipping duplicate: JID_dcc2a209 (posted within 7 days)
[2026-01-03T10:05:43.434Z] [BOT] ✅ Loaded pending queue: 925 total (905 pending, 20 enriched, 0 posted)
[2026-01-03T10:05:43.549Z] [BOT] ✅ Saved pending queue: 925 total (905 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T10:05:43.549Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T10:05:43.595Z] [BOT] 📂 Loaded 1368 existing routing entries
[2026-01-03T10:05:43.641Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-03T10:05:43.641Z] [BOT] Total entries: 1378
   Timestamp: 2026-01-03T10:05:43.635Z
[2026-01-03T10:05:43.641Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-03T10:05:43.641Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T10:05:43.642Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 8
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-03T10:05:43.642Z] [BOT] 2. #💲・sales-jobs: 4 posts
     3. #🗽・new-york: 3 posts
     4. #🦢・los-angeles: 2 posts
     5. #🚌・boston: 1 posts
[2026-01-03T10:05:43.642Z] [BOT] [STATS] Channel stats saved
[2026-01-03T10:05:45.662Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2326) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*