# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T10:24:55.383Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T10:24:08.176Z] ========================================
[2026-01-03T10:24:08.178Z] Discord Bot Execution Log
[2026-01-03T10:24:08.178Z] Environment: GitHub Actions
[2026-01-03T10:24:08.179Z] Node Version: v20.19.6
[2026-01-03T10:24:08.179Z] ========================================
[2026-01-03T10:24:08.179Z] Environment Variables Check:
[2026-01-03T10:24:08.179Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T10:24:08.179Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T10:24:08.179Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T10:24:08.179Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T10:24:08.179Z] 
Multi-Channel Configuration:
[2026-01-03T10:24:08.179Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T10:24:08.179Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T10:24:08.180Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T10:24:08.180Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T10:24:08.180Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T10:24:08.180Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T10:24:08.180Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T10:24:08.180Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T10:24:08.180Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T10:24:08.180Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T10:24:08.180Z] 
Data Files Check:
[2026-01-03T10:24:08.182Z] .github/data/new_jobs.json: ✅ Exists (10 items, 166851 bytes)
[2026-01-03T10:24:08.184Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 201932 bytes)
[2026-01-03T10:24:08.184Z] 
========================================
[2026-01-03T10:24:08.184Z] Starting Enhanced Discord Bot...
[2026-01-03T10:24:08.184Z] ========================================
[2026-01-03T10:24:08.734Z] [BOT] ✅ Loaded V2 database: 374 jobs
[2026-01-03T10:24:09.652Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T10:24:09.653Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T10:24:09.653Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T10:24:09.654Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T10:24:09.725Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T10:24:09.820Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T10:24:09.822Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T10:24:09.822Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T10:24:09.823Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T10:24:09.823Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-03T10:24:09.824Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T10:24:09.828Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T10:24:09.829Z] [BOT] 📍 [ROUTING] "AI Research Scientist – Datadog AI Research (DAIR)" @ datadog
[2026-01-03T10:24:09.829Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T10:24:09.834Z] [BOT ERROR] (node:2319) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T10:24:10.045Z] [BOT] ✅ Created forum post: 🏢 AI Research Scientist – Datadog AI Research (DAIR) @ datadog in #🤖・ai-jobs
[2026-01-03T10:24:10.046Z] [BOT] ✅ Industry: AI Research Scientist – Datadog AI Research (DAIR) @ datadog
[2026-01-03T10:24:11.743Z] [BOT] ✅ Created forum post: 🏢 AI Research Scientist – Datadog AI Research (DAIR) @ datadog in #🗽・new-york
[2026-01-03T10:24:11.744Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T10:24:13.244Z] [BOT] 💾 Marked as posted: AI Research Scientist – Datadog AI Research (DAIR) @ datadog (instance #1)
[2026-01-03T10:24:13.244Z] [BOT] 💾 BEFORE ARCHIVING: 375 jobs in database
[2026-01-03T10:24:13.245Z] [BOT] ✅ No jobs to archive (all 375 jobs within 7-day window)
[2026-01-03T10:24:13.249Z] [BOT] 💾 Saved posted_jobs.json: 375 active jobs
[2026-01-03T10:24:13.249Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:24:16.250Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T10:24:16.250Z] [BOT] 📍 [ROUTING] "Associate Event Marketing Manager (New York)" @ datadog
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T10:24:16.455Z] [BOT] ✅ Created forum post: 🏢 Associate Event Marketing Manager (New York) @ datadog in #📣・marketing-jobs
[2026-01-03T10:24:16.455Z] [BOT] ✅ Industry: Associate Event Marketing Manager (New York) @ datadog
[2026-01-03T10:24:18.339Z] [BOT] ✅ Created forum post: 🏢 Associate Event Marketing Manager (New York) @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T10:24:19.840Z] [BOT] 💾 Marked as posted: Associate Event Marketing Manager (New York) @ datadog (instance #1)
[2026-01-03T10:24:19.840Z] [BOT] 💾 BEFORE ARCHIVING: 376 jobs in database
[2026-01-03T10:24:19.841Z] [BOT] ✅ No jobs to archive (all 376 jobs within 7-day window)
[2026-01-03T10:24:19.845Z] [BOT] 💾 Saved posted_jobs.json: 376 active jobs
[2026-01-03T10:24:19.845Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:24:22.845Z] [BOT] 📌 Posting 6 jobs to #💲・sales-jobs
[2026-01-03T10:24:22.846Z] [BOT] 📍 [ROUTING] "Business Value Manager - Enterprise East" @ datadog
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:24:23.123Z] [BOT] ✅ Created forum post: 🏢 Business Value Manager - Enterprise East @ datadog in #💲・sales-jobs
  ✅ Industry: Business Value Manager - Enterprise East @ datadog
[2026-01-03T10:24:24.820Z] [BOT] ✅ Created forum post: 🏢 Business Value Manager - Enterprise East @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T10:24:26.322Z] [BOT] 💾 Marked as posted: Business Value Manager - Enterprise East @ datadog (instance #1)
[2026-01-03T10:24:26.322Z] [BOT] 💾 BEFORE ARCHIVING: 377 jobs in database
[2026-01-03T10:24:26.322Z] [BOT] ✅ No jobs to archive (all 377 jobs within 7-day window)
[2026-01-03T10:24:26.327Z] [BOT] 💾 Saved posted_jobs.json: 377 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T10:24:26.327Z] [BOT] 📍 [ROUTING] "Commercial Account Executive" @ datadog
[2026-01-03T10:24:26.327Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:24:26.544Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive @ datadog in #💲・sales-jobs
  ✅ Industry: Commercial Account Executive @ datadog
[2026-01-03T10:24:28.046Z] [BOT] 💾 Marked as posted: Commercial Account Executive @ datadog (instance #1)
[2026-01-03T10:24:28.046Z] [BOT] 💾 BEFORE ARCHIVING: 378 jobs in database
[2026-01-03T10:24:28.046Z] [BOT] ✅ No jobs to archive (all 378 jobs within 7-day window)
[2026-01-03T10:24:28.053Z] [BOT] 💾 Saved posted_jobs.json: 378 active jobs
[2026-01-03T10:24:28.053Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:24:28.053Z] [BOT] 💾 Marked as posted: Commercial Account Executive - LATAM (Portuguese Speaking) @ datadog (instance #1)
[2026-01-03T10:24:28.053Z] [BOT] 💾 BEFORE ARCHIVING: 379 jobs in database
[2026-01-03T10:24:28.054Z] [BOT] ✅ No jobs to archive (all 379 jobs within 7-day window)
[2026-01-03T10:24:28.057Z] [BOT] 💾 Saved posted_jobs.json: 379 active jobs
[2026-01-03T10:24:28.057Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:24:28.057Z] [BOT] 📍 [ROUTING] "Commercial Account Executive (Boston)" @ datadog
   Category: SALES (matched: "sales")
[2026-01-03T10:24:28.057Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:24:28.469Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive (Boston) @ datadog in #💲・sales-jobs
[2026-01-03T10:24:28.469Z] [BOT] ✅ Industry: Commercial Account Executive (Boston) @ datadog
[2026-01-03T10:24:30.415Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive (Boston) @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-03T10:24:31.917Z] [BOT] 💾 Marked as posted: Commercial Account Executive (Boston) @ datadog (instance #1)
[2026-01-03T10:24:31.917Z] [BOT] 💾 BEFORE ARCHIVING: 380 jobs in database
[2026-01-03T10:24:31.917Z] [BOT] ✅ No jobs to archive (all 380 jobs within 7-day window)
[2026-01-03T10:24:31.921Z] [BOT] 💾 Saved posted_jobs.json: 380 active jobs
[2026-01-03T10:24:31.922Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:24:31.922Z] [BOT] 📍 [ROUTING] "Commercial Account Executive - LATAM (Spanish Speaking) - Boston" @ datadog
[2026-01-03T10:24:31.922Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:24:32.163Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive - LATAM (Spanish Speaking) - Boston @ datadog in #💲・sales-jobs
  ✅ Industry: Commercial Account Executive - LATAM (Spanish Speaking) - Boston @ datadog
[2026-01-03T10:24:33.905Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive - LATAM (Spanish Speaking) - Boston @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-03T10:24:35.405Z] [BOT] 💾 Marked as posted: Commercial Account Executive - LATAM (Spanish Speaking) - Boston @ datadog (instance #1)
[2026-01-03T10:24:35.406Z] [BOT] 💾 BEFORE ARCHIVING: 381 jobs in database
[2026-01-03T10:24:35.406Z] [BOT] ✅ No jobs to archive (all 381 jobs within 7-day window)
[2026-01-03T10:24:35.410Z] [BOT] 💾 Saved posted_jobs.json: 381 active jobs
[2026-01-03T10:24:35.410Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:24:35.411Z] [BOT] 📍 [ROUTING] "Commercial Sales Engineer (East)" @ datadog
[2026-01-03T10:24:35.411Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:24:35.651Z] [BOT] ✅ Created forum post: 🏢 Commercial Sales Engineer (East) @ datadog in #💲・sales-jobs
[2026-01-03T10:24:35.651Z] [BOT] ✅ Industry: Commercial Sales Engineer (East) @ datadog
[2026-01-03T10:24:37.366Z] [BOT] ✅ Created forum post: 🏢 Commercial Sales Engineer (East) @ datadog in #🚌・boston
[2026-01-03T10:24:37.366Z] [BOT] ✅ Location: 🚌・boston
[2026-01-03T10:24:38.868Z] [BOT] 💾 Marked as posted: Commercial Sales Engineer (East) @ datadog (instance #1)
[2026-01-03T10:24:38.868Z] [BOT] 💾 BEFORE ARCHIVING: 382 jobs in database
[2026-01-03T10:24:38.868Z] [BOT] ✅ No jobs to archive (all 382 jobs within 7-day window)
[2026-01-03T10:24:38.872Z] [BOT] 💾 Saved posted_jobs.json: 382 active jobs
[2026-01-03T10:24:38.872Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:24:38.873Z] [BOT] 📍 [ROUTING] "Customer Success Associate - Boston" @ datadog
[2026-01-03T10:24:38.873Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:24:39.181Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate - Boston @ datadog in #💲・sales-jobs
[2026-01-03T10:24:39.181Z] [BOT] ✅ Industry: Customer Success Associate - Boston @ datadog
[2026-01-03T10:24:40.891Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate - Boston @ datadog in #🚌・boston
[2026-01-03T10:24:40.892Z] [BOT] ✅ Location: 🚌・boston
[2026-01-03T10:24:42.392Z] [BOT] 💾 Marked as posted: Customer Success Associate - Boston @ datadog (instance #1)
[2026-01-03T10:24:42.392Z] [BOT] 💾 BEFORE ARCHIVING: 383 jobs in database
[2026-01-03T10:24:42.392Z] [BOT] ✅ No jobs to archive (all 383 jobs within 7-day window)
[2026-01-03T10:24:42.396Z] [BOT] 💾 Saved posted_jobs.json: 383 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T10:24:45.397Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T10:24:45.398Z] [BOT] 📍 [ROUTING] "Container Runtime Engineer" @ datadog
[2026-01-03T10:24:45.398Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T10:24:45.603Z] [BOT] ✅ Created forum post: 🏢 Container Runtime Engineer @ datadog in #💻・tech-jobs
[2026-01-03T10:24:45.603Z] [BOT] ✅ Industry: Container Runtime Engineer @ datadog
[2026-01-03T10:24:47.332Z] [BOT] ✅ Created forum post: 🏢 Container Runtime Engineer @ datadog in #🗽・new-york
[2026-01-03T10:24:47.332Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T10:24:48.832Z] [BOT] 💾 Marked as posted: Container Runtime Engineer @ datadog (instance #1)
[2026-01-03T10:24:48.832Z] [BOT] 💾 BEFORE ARCHIVING: 384 jobs in database
[2026-01-03T10:24:48.832Z] [BOT] ✅ No jobs to archive (all 384 jobs within 7-day window)
[2026-01-03T10:24:48.836Z] [BOT] 💾 Saved posted_jobs.json: 384 active jobs
[2026-01-03T10:24:48.836Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:24:51.837Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-03T10:24:51.838Z] [BOT] ⏭️  Skipping duplicate: JID_3f5157b7 (posted within 7 days)
[2026-01-03T10:24:51.838Z] [BOT] ⏭️  Skipping duplicate: JID_0bc4e4da (posted within 7 days)
[2026-01-03T10:24:51.838Z] [BOT] ⏭️  Skipping duplicate: JID_f786896a (posted within 7 days)
[2026-01-03T10:24:51.838Z] [BOT] ⏭️  Skipping duplicate: JID_05c70ebf (posted within 7 days)
[2026-01-03T10:24:51.838Z] [BOT] ⏭️  Skipping duplicate: JID_658f6006 (posted within 7 days)
[2026-01-03T10:24:51.838Z] [BOT] ⏭️  Skipping duplicate: JID_aabfb282 (posted within 7 days)
[2026-01-03T10:24:51.838Z] [BOT] ⏭️  Skipping duplicate: JID_2cfa1f86 (posted within 7 days)
[2026-01-03T10:24:51.838Z] [BOT] ⏭️  Skipping duplicate: JID_8e57d643 (posted within 7 days)
[2026-01-03T10:24:51.838Z] [BOT] ⏭️  Skipping duplicate: JID_d57147e5 (posted within 7 days)
[2026-01-03T10:24:51.912Z] [BOT] ✅ Loaded pending queue: 915 total (895 pending, 20 enriched, 0 posted)
[2026-01-03T10:24:52.015Z] [BOT] ✅ Saved pending queue: 915 total (895 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-03T10:24:52.015Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T10:24:52.059Z] [BOT] 📂 Loaded 1378 existing routing entries
[2026-01-03T10:24:52.105Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 1387
   Timestamp: 2026-01-03T10:24:52.099Z
[2026-01-03T10:24:52.105Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 17
   Successful: 17
[2026-01-03T10:24:52.106Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-03T10:24:52.106Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 6
   Top channels:
     1. #💲・sales-jobs: 6 posts
     2. #🗽・new-york: 4 posts
     3. #🚌・boston: 4 posts
     4. #🤖・ai-jobs: 1 posts
     5. #📣・marketing-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-03T10:24:54.123Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2319) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*