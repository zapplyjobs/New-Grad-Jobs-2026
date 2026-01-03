# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T21:36:20.635Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T21:35:57.124Z] ========================================
[2026-01-03T21:35:57.126Z] Discord Bot Execution Log
[2026-01-03T21:35:57.126Z] Environment: GitHub Actions
[2026-01-03T21:35:57.126Z] Node Version: v20.19.6
[2026-01-03T21:35:57.126Z] ========================================
[2026-01-03T21:35:57.126Z] Environment Variables Check:
[2026-01-03T21:35:57.126Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T21:35:57.127Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T21:35:57.127Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T21:35:57.127Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T21:35:57.127Z] 
Multi-Channel Configuration:
[2026-01-03T21:35:57.127Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T21:35:57.127Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T21:35:57.127Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T21:35:57.127Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T21:35:57.127Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T21:35:57.127Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T21:35:57.127Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T21:35:57.128Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T21:35:57.128Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T21:35:57.128Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T21:35:57.128Z] 
Data Files Check:
[2026-01-03T21:35:57.129Z] .github/data/new_jobs.json: ✅ Exists (10 items, 151258 bytes)
[2026-01-03T21:35:57.132Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 413094 bytes)
[2026-01-03T21:35:57.132Z] 
========================================
[2026-01-03T21:35:57.132Z] Starting Enhanced Discord Bot...
[2026-01-03T21:35:57.132Z] ========================================
[2026-01-03T21:35:57.682Z] [BOT] ✅ Loaded V2 database: 813 jobs
[2026-01-03T21:35:58.177Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T21:35:58.177Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T21:35:58.178Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T21:35:58.178Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T21:35:58.248Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T21:35:58.337Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T21:35:58.340Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T21:35:58.340Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T21:35:58.340Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T21:35:58.341Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-03T21:35:58.341Z] [BOT] (7 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Sales Recruiter (12-month contract) @ brex: salt lake city, utah, united states, san francisco, california, united states, new york, new york, united states
   - Senior Accountant @ brex: new york, new york, united states, san francisco, california, united states, seattle, washington, united states, salt lake city, utah, united states
   - Senior Application Security Engineer @ brex: san francisco, california, united states, seattle, washington, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 7 deferred for next run
📤 Posting 3 jobs...
[2026-01-03T21:35:58.341Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T21:35:58.345Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-03T21:35:58.345Z] [BOT] 📍 [ROUTING] "Sales Recruiter (12-month contract)" @ brex
[2026-01-03T21:35:58.345Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-03T21:35:58.350Z] [BOT ERROR] (node:2320) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T21:35:58.505Z] [BOT] ✅ Created forum post: 🏢 Sales Recruiter (12-month contract) @ brex in #📁・JID_e938df7b
[2026-01-03T21:35:58.505Z] [BOT] ✅ Industry: Sales Recruiter (12-month contract) @ brex
[2026-01-03T21:36:00.246Z] [BOT] ✅ Created forum post: 🏢 Sales Recruiter (12-month contract) @ brex in #💻・remote-usa
[2026-01-03T21:36:00.247Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-03T21:36:01.748Z] [BOT] 💾 Marked as posted: Sales Recruiter (12-month contract) @ brex (instance #1)
[2026-01-03T21:36:01.748Z] [BOT] 💾 BEFORE ARCHIVING: 814 jobs in database
[2026-01-03T21:36:01.749Z] [BOT] ✅ No jobs to archive (all 814 jobs within 7-day window)
[2026-01-03T21:36:01.758Z] [BOT] 💾 Saved posted_jobs.json: 814 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:36:01.759Z] [BOT] 💾 Marked as posted: Sales Recruiter (12-month contract) @ brex (instance #1)
[2026-01-03T21:36:01.759Z] [BOT] 💾 BEFORE ARCHIVING: 815 jobs in database
[2026-01-03T21:36:01.760Z] [BOT] ✅ No jobs to archive (all 815 jobs within 7-day window)
[2026-01-03T21:36:01.765Z] [BOT] 💾 Saved posted_jobs.json: 815 active jobs
[2026-01-03T21:36:01.766Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Sales Recruiter (12-month contract) @ brex (instance #1)
[2026-01-03T21:36:01.766Z] [BOT] 💾 BEFORE ARCHIVING: 816 jobs in database
[2026-01-03T21:36:01.766Z] [BOT] ✅ No jobs to archive (all 816 jobs within 7-day window)
[2026-01-03T21:36:01.772Z] [BOT] 💾 Saved posted_jobs.json: 816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:36:04.773Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-03T21:36:04.775Z] [BOT] 📍 [ROUTING] "Senior Accountant" @ brex
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T21:36:05.013Z] [BOT] ✅ Created forum post: 🏢 Senior Accountant @ brex in #💰・finance-jobs
  ✅ Industry: Senior Accountant @ brex
[2026-01-03T21:36:06.661Z] [BOT] ✅ Created forum post: 🏢 Senior Accountant @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T21:36:08.162Z] [BOT] 💾 Marked as posted: Senior Accountant @ brex (instance #1)
[2026-01-03T21:36:08.162Z] [BOT] 💾 BEFORE ARCHIVING: 817 jobs in database
[2026-01-03T21:36:08.163Z] [BOT] ✅ No jobs to archive (all 817 jobs within 7-day window)
[2026-01-03T21:36:08.169Z] [BOT] 💾 Saved posted_jobs.json: 817 active jobs
[2026-01-03T21:36:08.169Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T21:36:08.169Z] [BOT] 💾 Marked as posted: Senior Accountant @ brex (instance #1)
💾 BEFORE ARCHIVING: 818 jobs in database
[2026-01-03T21:36:08.170Z] [BOT] ✅ No jobs to archive (all 818 jobs within 7-day window)
[2026-01-03T21:36:08.176Z] [BOT] 💾 Saved posted_jobs.json: 818 active jobs
[2026-01-03T21:36:08.176Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Accountant @ brex (instance #1)
[2026-01-03T21:36:08.176Z] [BOT] 💾 BEFORE ARCHIVING: 819 jobs in database
[2026-01-03T21:36:08.176Z] [BOT] ✅ No jobs to archive (all 819 jobs within 7-day window)
[2026-01-03T21:36:08.182Z] [BOT] 💾 Saved posted_jobs.json: 819 active jobs
[2026-01-03T21:36:08.182Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T21:36:08.182Z] [BOT] 💾 Marked as posted: Senior Accountant @ brex (instance #1)
💾 BEFORE ARCHIVING: 820 jobs in database
[2026-01-03T21:36:08.183Z] [BOT] ✅ No jobs to archive (all 820 jobs within 7-day window)
[2026-01-03T21:36:08.189Z] [BOT] 💾 Saved posted_jobs.json: 820 active jobs
[2026-01-03T21:36:08.189Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T21:36:11.190Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T21:36:11.192Z] [BOT] 📍 [ROUTING] "Senior Application Security Engineer" @ brex
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T21:36:11.403Z] [BOT] ✅ Created forum post: 🏢 Senior Application Security Engineer @ brex in #💻・tech-jobs
  ✅ Industry: Senior Application Security Engineer @ brex
[2026-01-03T21:36:13.309Z] [BOT] ✅ Created forum post: 🏢 Senior Application Security Engineer @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T21:36:14.810Z] [BOT] 💾 Marked as posted: Senior Application Security Engineer @ brex (instance #1)
[2026-01-03T21:36:14.810Z] [BOT] 💾 BEFORE ARCHIVING: 821 jobs in database
[2026-01-03T21:36:14.811Z] [BOT] ✅ No jobs to archive (all 821 jobs within 7-day window)
[2026-01-03T21:36:14.817Z] [BOT] 💾 Saved posted_jobs.json: 821 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:36:14.817Z] [BOT] 💾 Marked as posted: Senior Application Security Engineer @ brex (instance #1)
[2026-01-03T21:36:14.817Z] [BOT] 💾 BEFORE ARCHIVING: 822 jobs in database
[2026-01-03T21:36:14.818Z] [BOT] ✅ No jobs to archive (all 822 jobs within 7-day window)
[2026-01-03T21:36:14.824Z] [BOT] 💾 Saved posted_jobs.json: 822 active jobs
[2026-01-03T21:36:14.824Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T21:36:14.824Z] [BOT] 💾 Marked as posted: Senior Application Security Engineer @ brex (instance #1)
💾 BEFORE ARCHIVING: 823 jobs in database
[2026-01-03T21:36:14.825Z] [BOT] ✅ No jobs to archive (all 823 jobs within 7-day window)
[2026-01-03T21:36:14.831Z] [BOT] 💾 Saved posted_jobs.json: 823 active jobs
[2026-01-03T21:36:14.831Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T21:36:17.831Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-03T21:36:17.832Z] [BOT] ⏭️  Skipping duplicate: JID_588f7f3b (posted within 7 days)
⏭️  Skipping duplicate: JID_c2e1ffd5 (posted within 7 days)
[2026-01-03T21:36:17.832Z] [BOT] ⏭️  Skipping duplicate: JID_3835fba6 (posted within 7 days)
[2026-01-03T21:36:17.873Z] [BOT] ✅ Loaded pending queue: 476 total (456 pending, 20 enriched, 0 posted)
[2026-01-03T21:36:17.919Z] [BOT] ✅ Saved pending queue: 476 total (456 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-01-03T21:36:17.919Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T21:36:17.968Z] [BOT] 📂 Loaded 1734 existing routing entries
[2026-01-03T21:36:18.017Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-01-03T21:36:18.017Z] [BOT] Total entries: 1737
   Timestamp: 2026-01-03T21:36:18.010Z
[2026-01-03T21:36:18.018Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 6
   Successful: 6
   Failed: 0
   Skipped: 0
[2026-01-03T21:36:18.018Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T21:36:18.018Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 6
   Top channels:
     1. #📁・JID_e938df7b: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-03T21:36:18.018Z] [BOT] 3. #💰・finance-jobs: 1 posts
     4. #🗽・new-york: 1 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-03T21:36:18.019Z] [BOT] [STATS] Channel stats saved
[2026-01-03T21:36:20.033Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2320) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*