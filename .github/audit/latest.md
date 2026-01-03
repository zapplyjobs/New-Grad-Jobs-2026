# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T15:37:25.501Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T15:36:29.694Z] ========================================
[2026-01-03T15:36:29.696Z] Discord Bot Execution Log
[2026-01-03T15:36:29.696Z] Environment: GitHub Actions
[2026-01-03T15:36:29.696Z] Node Version: v20.19.6
[2026-01-03T15:36:29.696Z] ========================================
[2026-01-03T15:36:29.696Z] Environment Variables Check:
[2026-01-03T15:36:29.696Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T15:36:29.696Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T15:36:29.696Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T15:36:29.696Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T15:36:29.696Z] 
Multi-Channel Configuration:
[2026-01-03T15:36:29.697Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T15:36:29.697Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T15:36:29.697Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T15:36:29.697Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T15:36:29.697Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T15:36:29.697Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T15:36:29.697Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T15:36:29.697Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T15:36:29.697Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T15:36:29.697Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T15:36:29.697Z] 
Data Files Check:
[2026-01-03T15:36:29.699Z] .github/data/new_jobs.json: ✅ Exists (10 items, 193881 bytes)
[2026-01-03T15:36:29.701Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 297540 bytes)
[2026-01-03T15:36:29.701Z] 
========================================
[2026-01-03T15:36:29.701Z] Starting Enhanced Discord Bot...
[2026-01-03T15:36:29.701Z] ========================================
[2026-01-03T15:36:30.216Z] [BOT] ✅ Loaded V2 database: 573 jobs
[2026-01-03T15:36:30.955Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T15:36:30.955Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T15:36:30.955Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T15:36:30.956Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T15:36:31.024Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T15:36:31.113Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T15:36:31.115Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T15:36:31.116Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T15:36:31.116Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T15:36:31.116Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T15:36:31.117Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T15:36:31.121Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T15:36:31.122Z] [BOT] 📍 [ROUTING] "Product Security Engineer" @ airtable
[2026-01-03T15:36:31.122Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T15:36:31.127Z] [BOT ERROR] (node:2323) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T15:36:31.462Z] [BOT] ✅ Created forum post: 🏢 Product Security Engineer @ airtable in #🤖・ai-jobs
[2026-01-03T15:36:31.463Z] [BOT] ✅ Industry: Product Security Engineer @ airtable
[2026-01-03T15:36:33.119Z] [BOT] ✅ Created forum post: 🏢 Product Security Engineer @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:36:34.620Z] [BOT] 💾 Marked as posted: Product Security Engineer @ airtable (instance #1)
[2026-01-03T15:36:34.620Z] [BOT] 💾 BEFORE ARCHIVING: 574 jobs in database
[2026-01-03T15:36:34.621Z] [BOT] ✅ No jobs to archive (all 574 jobs within 7-day window)
[2026-01-03T15:36:34.632Z] [BOT] 💾 Saved posted_jobs.json: 574 active jobs
[2026-01-03T15:36:34.632Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:36:37.633Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T15:36:37.633Z] [BOT] 📍 [ROUTING] "Renewals Associate" @ airtable
[2026-01-03T15:36:37.634Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T15:36:37.857Z] [BOT] ✅ Created forum post: 🏢 Renewals Associate @ airtable in #💲・sales-jobs
[2026-01-03T15:36:37.857Z] [BOT] ✅ Industry: Renewals Associate @ airtable
[2026-01-03T15:36:39.597Z] [BOT] ✅ Created forum post: 🏢 Renewals Associate @ airtable in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-03T15:36:41.099Z] [BOT] 💾 Marked as posted: Renewals Associate @ airtable (instance #1)
[2026-01-03T15:36:41.099Z] [BOT] 💾 BEFORE ARCHIVING: 575 jobs in database
[2026-01-03T15:36:41.099Z] [BOT] ✅ No jobs to archive (all 575 jobs within 7-day window)
[2026-01-03T15:36:41.104Z] [BOT] 💾 Saved posted_jobs.json: 575 active jobs
[2026-01-03T15:36:41.104Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:36:41.105Z] [BOT] 📍 [ROUTING] "Scaled Customer Success Manager" @ airtable
[2026-01-03T15:36:41.105Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T15:36:41.289Z] [BOT] ✅ Created forum post: 🏢 Scaled Customer Success Manager @ airtable in #💲・sales-jobs
[2026-01-03T15:36:41.289Z] [BOT] ✅ Industry: Scaled Customer Success Manager @ airtable
[2026-01-03T15:36:43.073Z] [BOT] ✅ Created forum post: 🏢 Scaled Customer Success Manager @ airtable in #🌉・san-francisco
[2026-01-03T15:36:43.073Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T15:36:44.574Z] [BOT] 💾 Marked as posted: Scaled Customer Success Manager @ airtable (instance #1)
[2026-01-03T15:36:44.574Z] [BOT] 💾 BEFORE ARCHIVING: 576 jobs in database
[2026-01-03T15:36:44.575Z] [BOT] ✅ No jobs to archive (all 576 jobs within 7-day window)
[2026-01-03T15:36:44.580Z] [BOT] 💾 Saved posted_jobs.json: 576 active jobs
[2026-01-03T15:36:44.580Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:36:44.580Z] [BOT] 📍 [ROUTING] "Senior Manager, Finance Systems" @ airtable
[2026-01-03T15:36:44.580Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T15:36:44.778Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Finance Systems @ airtable in #💲・sales-jobs
[2026-01-03T15:36:44.778Z] [BOT] ✅ Industry: Senior Manager, Finance Systems @ airtable
[2026-01-03T15:36:46.694Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Finance Systems @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:36:48.196Z] [BOT] 💾 Marked as posted: Senior Manager, Finance Systems @ airtable (instance #1)
[2026-01-03T15:36:48.196Z] [BOT] 💾 BEFORE ARCHIVING: 577 jobs in database
[2026-01-03T15:36:48.197Z] [BOT] ✅ No jobs to archive (all 577 jobs within 7-day window)
[2026-01-03T15:36:48.201Z] [BOT] 💾 Saved posted_jobs.json: 577 active jobs
[2026-01-03T15:36:48.202Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:36:51.203Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-03T15:36:51.203Z] [BOT] 📍 [ROUTING] "Risk Specialist, GRCP" @ airtable
   Category: FINANCE (matched: "finance")
[2026-01-03T15:36:51.203Z] [BOT] Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T15:36:51.652Z] [BOT] ✅ Created forum post: 🏢 Risk Specialist, GRCP @ airtable in #💰・finance-jobs
  ✅ Industry: Risk Specialist, GRCP @ airtable
[2026-01-03T15:36:53.448Z] [BOT] ✅ Created forum post: 🏢 Risk Specialist, GRCP @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:36:54.950Z] [BOT] 💾 Marked as posted: Risk Specialist, GRCP @ airtable (instance #1)
[2026-01-03T15:36:54.951Z] [BOT] 💾 BEFORE ARCHIVING: 578 jobs in database
[2026-01-03T15:36:54.951Z] [BOT] ✅ No jobs to archive (all 578 jobs within 7-day window)
[2026-01-03T15:36:54.956Z] [BOT] 💾 Saved posted_jobs.json: 578 active jobs
[2026-01-03T15:36:54.956Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:36:57.957Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T15:36:57.957Z] [BOT] 📍 [ROUTING] "Senior Developer Support Engineer-West Coast" @ airtable
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T15:36:58.397Z] [BOT] ✅ Created forum post: 🏢 Senior Developer Support Engineer-West Coast @ airtable in #💻・tech-jobs
[2026-01-03T15:36:58.397Z] [BOT] ✅ Industry: Senior Developer Support Engineer-West Coast @ airtable
[2026-01-03T15:37:00.181Z] [BOT] ✅ Created forum post: 🏢 Senior Developer Support Engineer-West Coast @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:37:01.682Z] [BOT] 💾 Marked as posted: Senior Developer Support Engineer-West Coast @ airtable (instance #1)
[2026-01-03T15:37:01.682Z] [BOT] 💾 BEFORE ARCHIVING: 579 jobs in database
[2026-01-03T15:37:01.682Z] [BOT] ✅ No jobs to archive (all 579 jobs within 7-day window)
[2026-01-03T15:37:01.688Z] [BOT] 💾 Saved posted_jobs.json: 579 active jobs
[2026-01-03T15:37:01.688Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:37:04.688Z] [BOT] 📌 Posting 4 jobs to #📣・marketing-jobs
[2026-01-03T15:37:04.688Z] [BOT] 📍 [ROUTING] "Senior Enterprise Marketing Manager" @ airtable
   Category: MARKETING (matched: "marketing")
[2026-01-03T15:37:04.688Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T15:37:05.030Z] [BOT] ✅ Created forum post: 🏢 Senior Enterprise Marketing Manager @ airtable in #📣・marketing-jobs
  ✅ Industry: Senior Enterprise Marketing Manager @ airtable
[2026-01-03T15:37:06.751Z] [BOT] ✅ Created forum post: 🏢 Senior Enterprise Marketing Manager @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:37:08.252Z] [BOT] 💾 Marked as posted: Senior Enterprise Marketing Manager @ airtable (instance #1)
[2026-01-03T15:37:08.253Z] [BOT] 💾 BEFORE ARCHIVING: 580 jobs in database
[2026-01-03T15:37:08.253Z] [BOT] ✅ No jobs to archive (all 580 jobs within 7-day window)
[2026-01-03T15:37:08.260Z] [BOT] 💾 Saved posted_jobs.json: 580 active jobs
[2026-01-03T15:37:08.260Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:37:08.260Z] [BOT] 📍 [ROUTING] "Senior Growth Marketing Manager, Builders" @ airtable
[2026-01-03T15:37:08.260Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T15:37:08.462Z] [BOT] ✅ Created forum post: 🏢 Senior Growth Marketing Manager, Builders @ airtable in #📣・marketing-jobs
  ✅ Industry: Senior Growth Marketing Manager, Builders @ airtable
[2026-01-03T15:37:10.237Z] [BOT] ✅ Created forum post: 🏢 Senior Growth Marketing Manager, Builders @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:37:11.738Z] [BOT] 💾 Marked as posted: Senior Growth Marketing Manager, Builders @ airtable (instance #1)
[2026-01-03T15:37:11.738Z] [BOT] 💾 BEFORE ARCHIVING: 581 jobs in database
[2026-01-03T15:37:11.739Z] [BOT] ✅ No jobs to archive (all 581 jobs within 7-day window)
[2026-01-03T15:37:11.744Z] [BOT] 💾 Saved posted_jobs.json: 581 active jobs
[2026-01-03T15:37:11.744Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:37:11.744Z] [BOT] 📍 [ROUTING] "Senior Manager, People Systems" @ airtable
[2026-01-03T15:37:11.744Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T15:37:11.986Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, People Systems @ airtable in #📣・marketing-jobs
[2026-01-03T15:37:11.986Z] [BOT] ✅ Industry: Senior Manager, People Systems @ airtable
[2026-01-03T15:37:13.787Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, People Systems @ airtable in #🌉・san-francisco
[2026-01-03T15:37:13.787Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T15:37:15.288Z] [BOT] 💾 Marked as posted: Senior Manager, People Systems @ airtable (instance #1)
[2026-01-03T15:37:15.289Z] [BOT] 💾 BEFORE ARCHIVING: 582 jobs in database
[2026-01-03T15:37:15.289Z] [BOT] ✅ No jobs to archive (all 582 jobs within 7-day window)
[2026-01-03T15:37:15.294Z] [BOT] 💾 Saved posted_jobs.json: 582 active jobs
[2026-01-03T15:37:15.294Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:37:15.295Z] [BOT] 📍 [ROUTING] "Senior Paralegal" @ airtable
[2026-01-03T15:37:15.295Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T15:37:15.649Z] [BOT] ✅ Created forum post: 🏢 Senior Paralegal @ airtable in #📣・marketing-jobs
  ✅ Industry: Senior Paralegal @ airtable
[2026-01-03T15:37:17.700Z] [BOT] ✅ Created forum post: 🏢 Senior Paralegal @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:37:19.201Z] [BOT] 💾 Marked as posted: Senior Paralegal @ airtable (instance #1)
[2026-01-03T15:37:19.201Z] [BOT] 💾 BEFORE ARCHIVING: 583 jobs in database
[2026-01-03T15:37:19.202Z] [BOT] ✅ No jobs to archive (all 583 jobs within 7-day window)
[2026-01-03T15:37:19.207Z] [BOT] 💾 Saved posted_jobs.json: 583 active jobs
[2026-01-03T15:37:19.207Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:37:22.208Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T15:37:22.208Z] [BOT] ⏭️  Skipping duplicate: JID_4bba1742 (posted within 7 days)
[2026-01-03T15:37:22.208Z] [BOT] ⏭️  Skipping duplicate: JID_4b569989 (posted within 7 days)
[2026-01-03T15:37:22.209Z] [BOT] ⏭️  Skipping duplicate: JID_3579e77b (posted within 7 days)
⏭️  Skipping duplicate: JID_0f66f7f5 (posted within 7 days)
[2026-01-03T15:37:22.209Z] [BOT] ⏭️  Skipping duplicate: JID_1a0e44d8 (posted within 7 days)
[2026-01-03T15:37:22.209Z] [BOT] ⏭️  Skipping duplicate: JID_06554dac (posted within 7 days)
[2026-01-03T15:37:22.209Z] [BOT] ⏭️  Skipping duplicate: JID_2fbb5b06 (posted within 7 days)
[2026-01-03T15:37:22.209Z] [BOT] ⏭️  Skipping duplicate: JID_69728141 (posted within 7 days)
[2026-01-03T15:37:22.209Z] [BOT] ⏭️  Skipping duplicate: JID_35040d7a (posted within 7 days)
[2026-01-03T15:37:22.209Z] [BOT] ⏭️  Skipping duplicate: JID_6045abb3 (posted within 7 days)
[2026-01-03T15:37:22.270Z] [BOT] ✅ Loaded pending queue: 716 total (696 pending, 20 enriched, 0 posted)
[2026-01-03T15:37:22.336Z] [BOT] ✅ Saved pending queue: 716 total (696 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T15:37:22.380Z] [BOT] 📂 Loaded 1547 existing routing entries
[2026-01-03T15:37:22.427Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-03T15:37:22.427Z] [BOT] New entries: 10
   Total entries: 1557
   Timestamp: 2026-01-03T15:37:22.420Z
[2026-01-03T15:37:22.428Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T15:37:22.428Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-03T15:37:22.428Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T15:37:22.428Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
[2026-01-03T15:37:22.428Z] [BOT] 1. #🌉・san-francisco: 9 posts
     2. #📣・marketing-jobs: 4 posts
     3. #💲・sales-jobs: 3 posts
     4. #🤖・ai-jobs: 1 posts
     5. #🤠・austin: 1 posts
[2026-01-03T15:37:22.428Z] [BOT] [STATS] Channel stats saved
[2026-01-03T15:37:24.444Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2323) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*