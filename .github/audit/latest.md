# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T20:25:04.069Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T20:24:35.541Z] ========================================
[2026-01-03T20:24:35.543Z] Discord Bot Execution Log
[2026-01-03T20:24:35.543Z] Environment: GitHub Actions
[2026-01-03T20:24:35.543Z] Node Version: v20.19.6
[2026-01-03T20:24:35.543Z] ========================================
[2026-01-03T20:24:35.543Z] Environment Variables Check:
[2026-01-03T20:24:35.543Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T20:24:35.544Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T20:24:35.544Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T20:24:35.544Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T20:24:35.544Z] 
Multi-Channel Configuration:
[2026-01-03T20:24:35.544Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T20:24:35.544Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T20:24:35.544Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T20:24:35.544Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T20:24:35.544Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T20:24:35.544Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T20:24:35.544Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T20:24:35.544Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T20:24:35.545Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T20:24:35.545Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T20:24:35.545Z] 
Data Files Check:
[2026-01-03T20:24:35.546Z] .github/data/new_jobs.json: ✅ Exists (10 items, 146096 bytes)
[2026-01-03T20:24:35.549Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 390766 bytes)
[2026-01-03T20:24:35.549Z] 
========================================
[2026-01-03T20:24:35.549Z] Starting Enhanced Discord Bot...
[2026-01-03T20:24:35.549Z] ========================================
[2026-01-03T20:24:36.067Z] [BOT] ✅ Loaded V2 database: 763 jobs
[2026-01-03T20:24:36.770Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T20:24:36.770Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T20:24:36.770Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T20:24:36.771Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T20:24:36.839Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T20:24:36.932Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T20:24:36.935Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T20:24:36.935Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T20:24:36.935Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T20:24:36.936Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-01-03T20:24:36.936Z] [BOT] (5 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Banking Specialist @ brex: san francisco, california, united states, new york, new york, united states
   - Commercial Account Executive @ brex: san francisco, california, united states, new york, new york, united states, salt lake city, utah, united states, seattle, washington, united states
   - Compliance Manager (Card & Rewards) @ brex: new york, new york, united states, salt lake city, utah, united states
⏸️ Limiting to 10 jobs this run, 5 deferred for next run
[2026-01-03T20:24:36.936Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T20:24:36.940Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T20:24:36.941Z] [BOT] 📍 [ROUTING] "Accounting Manager, Legal Entity Controllership" @ brex
[2026-01-03T20:24:36.941Z] [BOT] Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T20:24:36.946Z] [BOT ERROR] (node:2338) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T20:24:37.250Z] [BOT] ✅ Created forum post: 🏢 Accounting Manager, Legal Entity Controllership @ brex in #💲・sales-jobs
  ✅ Industry: Accounting Manager, Legal Entity Controllership @ brex
[2026-01-03T20:24:39.005Z] [BOT] ✅ Created forum post: 🏢 Accounting Manager, Legal Entity Controllership @ brex in #🌉・san-francisco
[2026-01-03T20:24:39.005Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T20:24:40.505Z] [BOT] 💾 Marked as posted: Accounting Manager, Legal Entity Controllership @ brex (instance #1)
[2026-01-03T20:24:40.505Z] [BOT] 💾 BEFORE ARCHIVING: 764 jobs in database
[2026-01-03T20:24:40.506Z] [BOT] ✅ No jobs to archive (all 764 jobs within 7-day window)
[2026-01-03T20:24:40.515Z] [BOT] 💾 Saved posted_jobs.json: 764 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:24:40.516Z] [BOT] 📍 [ROUTING] "Banking Specialist" @ brex
[2026-01-03T20:24:40.516Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T20:24:40.770Z] [BOT] ✅ Created forum post: 🏢 Banking Specialist @ brex in #💲・sales-jobs
  ✅ Industry: Banking Specialist @ brex
[2026-01-03T20:24:42.473Z] [BOT] ✅ Created forum post: 🏢 Banking Specialist @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T20:24:43.974Z] [BOT] 💾 Marked as posted: Banking Specialist @ brex (instance #1)
[2026-01-03T20:24:43.974Z] [BOT] 💾 BEFORE ARCHIVING: 765 jobs in database
[2026-01-03T20:24:43.975Z] [BOT] ✅ No jobs to archive (all 765 jobs within 7-day window)
[2026-01-03T20:24:43.981Z] [BOT] 💾 Saved posted_jobs.json: 765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:24:43.981Z] [BOT] 💾 Marked as posted: Banking Specialist @ brex (instance #1)
[2026-01-03T20:24:43.981Z] [BOT] 💾 BEFORE ARCHIVING: 766 jobs in database
[2026-01-03T20:24:43.982Z] [BOT] ✅ No jobs to archive (all 766 jobs within 7-day window)
[2026-01-03T20:24:43.987Z] [BOT] 💾 Saved posted_jobs.json: 766 active jobs
[2026-01-03T20:24:43.987Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T20:24:43.987Z] [BOT] 📍 [ROUTING] "Commercial Account Executive" @ brex
[2026-01-03T20:24:43.987Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T20:24:44.224Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive @ brex in #💲・sales-jobs
  ✅ Industry: Commercial Account Executive @ brex
[2026-01-03T20:24:45.962Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T20:24:47.462Z] [BOT] 💾 Marked as posted: Commercial Account Executive @ brex (instance #1)
[2026-01-03T20:24:47.462Z] [BOT] 💾 BEFORE ARCHIVING: 767 jobs in database
[2026-01-03T20:24:47.463Z] [BOT] ✅ No jobs to archive (all 767 jobs within 7-day window)
[2026-01-03T20:24:47.470Z] [BOT] 💾 Saved posted_jobs.json: 767 active jobs
[2026-01-03T20:24:47.470Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T20:24:47.470Z] [BOT] 💾 Marked as posted: Commercial Account Executive @ brex (instance #1)
💾 BEFORE ARCHIVING: 768 jobs in database
[2026-01-03T20:24:47.470Z] [BOT] ✅ No jobs to archive (all 768 jobs within 7-day window)
[2026-01-03T20:24:47.476Z] [BOT] 💾 Saved posted_jobs.json: 768 active jobs
[2026-01-03T20:24:47.476Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Commercial Account Executive @ brex (instance #1)
[2026-01-03T20:24:47.476Z] [BOT] 💾 BEFORE ARCHIVING: 769 jobs in database
[2026-01-03T20:24:47.477Z] [BOT] ✅ No jobs to archive (all 769 jobs within 7-day window)
[2026-01-03T20:24:47.482Z] [BOT] 💾 Saved posted_jobs.json: 769 active jobs
[2026-01-03T20:24:47.482Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T20:24:47.482Z] [BOT] 💾 Marked as posted: Commercial Account Executive @ brex (instance #1)
💾 BEFORE ARCHIVING: 770 jobs in database
[2026-01-03T20:24:47.483Z] [BOT] ✅ No jobs to archive (all 770 jobs within 7-day window)
[2026-01-03T20:24:47.488Z] [BOT] 💾 Saved posted_jobs.json: 770 active jobs
[2026-01-03T20:24:47.488Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T20:24:50.488Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-03T20:24:50.489Z] [BOT] 📍 [ROUTING] "Associate Technical Consultant" @ brex
[2026-01-03T20:24:50.489Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T20:24:50.797Z] [BOT] ✅ Created forum post: 🏢 Associate Technical Consultant @ brex in #💰・finance-jobs
[2026-01-03T20:24:50.798Z] [BOT] ✅ Industry: Associate Technical Consultant @ brex
[2026-01-03T20:24:52.533Z] [BOT] ✅ Created forum post: 🏢 Associate Technical Consultant @ brex in #🌧️・seattle
[2026-01-03T20:24:52.533Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-03T20:24:54.035Z] [BOT] 💾 Marked as posted: Associate Technical Consultant @ brex (instance #1)
[2026-01-03T20:24:54.035Z] [BOT] 💾 BEFORE ARCHIVING: 771 jobs in database
[2026-01-03T20:24:54.036Z] [BOT] ✅ No jobs to archive (all 771 jobs within 7-day window)
[2026-01-03T20:24:54.041Z] [BOT] 💾 Saved posted_jobs.json: 771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:24:54.041Z] [BOT] 📍 [ROUTING] "Compliance Manager (Card & Rewards)" @ brex
[2026-01-03T20:24:54.041Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T20:24:54.219Z] [BOT] ✅ Created forum post: 🏢 Compliance Manager (Card & Rewards) @ brex in #💰・finance-jobs
[2026-01-03T20:24:54.219Z] [BOT] ✅ Industry: Compliance Manager (Card & Rewards) @ brex
[2026-01-03T20:24:56.133Z] [BOT] ✅ Created forum post: 🏢 Compliance Manager (Card & Rewards) @ brex in #🗽・new-york
[2026-01-03T20:24:56.134Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T20:24:57.635Z] [BOT] 💾 Marked as posted: Compliance Manager (Card & Rewards) @ brex (instance #1)
[2026-01-03T20:24:57.635Z] [BOT] 💾 BEFORE ARCHIVING: 772 jobs in database
[2026-01-03T20:24:57.636Z] [BOT] ✅ No jobs to archive (all 772 jobs within 7-day window)
[2026-01-03T20:24:57.642Z] [BOT] 💾 Saved posted_jobs.json: 772 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T20:24:57.642Z] [BOT] 💾 Marked as posted: Compliance Manager (Card & Rewards) @ brex (instance #1)
[2026-01-03T20:24:57.642Z] [BOT] 💾 BEFORE ARCHIVING: 773 jobs in database
[2026-01-03T20:24:57.643Z] [BOT] ✅ No jobs to archive (all 773 jobs within 7-day window)
[2026-01-03T20:24:57.648Z] [BOT] 💾 Saved posted_jobs.json: 773 active jobs
[2026-01-03T20:24:57.648Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T20:25:00.649Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-01-03T20:25:00.650Z] [BOT] ⏭️  Skipping duplicate: JID_1345a361 (posted within 7 days)
[2026-01-03T20:25:00.650Z] [BOT] ⏭️  Skipping duplicate: JID_994d5763 (posted within 7 days)
⏭️  Skipping duplicate: JID_2bca827b (posted within 7 days)
[2026-01-03T20:25:00.650Z] [BOT] ⏭️  Skipping duplicate: JID_630a219c (posted within 7 days)
[2026-01-03T20:25:00.650Z] [BOT] ⏭️  Skipping duplicate: JID_2bd266da (posted within 7 days)
[2026-01-03T20:25:00.693Z] [BOT] ✅ Loaded pending queue: 526 total (506 pending, 20 enriched, 0 posted)
[2026-01-03T20:25:00.743Z] [BOT] ✅ Saved pending queue: 526 total (506 pending, 15 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T20:25:00.790Z] [BOT] 📂 Loaded 1712 existing routing entries
[2026-01-03T20:25:00.838Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-01-03T20:25:00.838Z] [BOT] Total entries: 1717
   Timestamp: 2026-01-03T20:25:00.831Z
[2026-01-03T20:25:00.839Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 10
[2026-01-03T20:25:00.839Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-03T20:25:00.839Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T20:25:00.839Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 5
   Top channels:
[2026-01-03T20:25:00.840Z] [BOT] 1. #💲・sales-jobs: 3 posts
     2. #🌉・san-francisco: 3 posts
     3. #💰・finance-jobs: 2 posts
     4. #🌧️・seattle: 1 posts
     5. #🗽・new-york: 1 posts
[STATS] Channel stats saved
[2026-01-03T20:25:02.855Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2338) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*