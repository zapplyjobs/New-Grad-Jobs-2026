# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T12:06:05.585Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T12:05:15.581Z] ========================================
[2026-01-03T12:05:15.583Z] Discord Bot Execution Log
[2026-01-03T12:05:15.583Z] Environment: GitHub Actions
[2026-01-03T12:05:15.583Z] Node Version: v20.19.6
[2026-01-03T12:05:15.583Z] ========================================
[2026-01-03T12:05:15.583Z] Environment Variables Check:
[2026-01-03T12:05:15.583Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T12:05:15.583Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T12:05:15.583Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T12:05:15.583Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T12:05:15.584Z] 
Multi-Channel Configuration:
[2026-01-03T12:05:15.584Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T12:05:15.584Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T12:05:15.584Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T12:05:15.584Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T12:05:15.584Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T12:05:15.584Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T12:05:15.584Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T12:05:15.584Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T12:05:15.584Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T12:05:15.584Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T12:05:15.584Z] 
Data Files Check:
[2026-01-03T12:05:15.586Z] .github/data/new_jobs.json: ✅ Exists (10 items, 167800 bytes)
[2026-01-03T12:05:15.588Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 234477 bytes)
[2026-01-03T12:05:15.588Z] 
========================================
[2026-01-03T12:05:15.588Z] Starting Enhanced Discord Bot...
[2026-01-03T12:05:15.588Z] ========================================
[2026-01-03T12:05:16.117Z] [BOT] ✅ Loaded V2 database: 443 jobs
[2026-01-03T12:05:16.652Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T12:05:16.653Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T12:05:16.653Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T12:05:16.654Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T12:05:16.726Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T12:05:16.823Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T12:05:16.825Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T12:05:16.825Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T12:05:16.825Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T12:05:16.826Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-03T12:05:16.826Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T12:05:16.831Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-03T12:05:16.831Z] [BOT] 📍 [ROUTING] "Principal Partner Manager - Cloud Alliances" @ datadog
[2026-01-03T12:05:16.831Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T12:05:16.836Z] [BOT ERROR] (node:2344) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T12:05:17.140Z] [BOT] ✅ Created forum post: 🏢 Principal Partner Manager - Cloud Alliances @ datadog in #💻・tech-jobs
  ✅ Industry: Principal Partner Manager - Cloud Alliances @ datadog
[2026-01-03T12:05:18.818Z] [BOT] ✅ Created forum post: 🏢 Principal Partner Manager - Cloud Alliances @ datadog in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T12:05:20.320Z] [BOT] 💾 Marked as posted: Principal Partner Manager - Cloud Alliances @ datadog (instance #1)
[2026-01-03T12:05:20.320Z] [BOT] 💾 BEFORE ARCHIVING: 444 jobs in database
[2026-01-03T12:05:20.321Z] [BOT] ✅ No jobs to archive (all 444 jobs within 7-day window)
[2026-01-03T12:05:20.328Z] [BOT] 💾 Saved posted_jobs.json: 444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T12:05:20.329Z] [BOT] 📍 [ROUTING] "Product Marketing Manager (Product Analytics)" @ datadog
[2026-01-03T12:05:20.329Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-03T12:05:20.500Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager (Product Analytics) @ datadog in #💻・tech-jobs
[2026-01-03T12:05:20.500Z] [BOT] ✅ Industry: Product Marketing Manager (Product Analytics) @ datadog
[2026-01-03T12:05:22.183Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager (Product Analytics) @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T12:05:23.684Z] [BOT] 💾 Marked as posted: Product Marketing Manager (Product Analytics) @ datadog (instance #1)
[2026-01-03T12:05:23.684Z] [BOT] 💾 BEFORE ARCHIVING: 445 jobs in database
[2026-01-03T12:05:23.685Z] [BOT] ✅ No jobs to archive (all 445 jobs within 7-day window)
[2026-01-03T12:05:23.690Z] [BOT] 💾 Saved posted_jobs.json: 445 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T12:05:23.691Z] [BOT] 📍 [ROUTING] "Security Engineer II - Cloud Security" @ datadog
[2026-01-03T12:05:23.691Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T12:05:23.894Z] [BOT] ✅ Created forum post: 🏢 Security Engineer II - Cloud Security @ datadog in #💻・tech-jobs
  ✅ Industry: Security Engineer II - Cloud Security @ datadog
[2026-01-03T12:05:25.682Z] [BOT] ✅ Created forum post: 🏢 Security Engineer II - Cloud Security @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T12:05:27.183Z] [BOT] 💾 Marked as posted: Security Engineer II - Cloud Security @ datadog (instance #1)
[2026-01-03T12:05:27.183Z] [BOT] 💾 BEFORE ARCHIVING: 446 jobs in database
[2026-01-03T12:05:27.184Z] [BOT] ✅ No jobs to archive (all 446 jobs within 7-day window)
[2026-01-03T12:05:27.187Z] [BOT] 💾 Saved posted_jobs.json: 446 active jobs
[2026-01-03T12:05:27.187Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:05:27.188Z] [BOT] 📍 [ROUTING] "Security Engineer II, Risk Engineering" @ datadog
[2026-01-03T12:05:27.188Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T12:05:27.454Z] [BOT] ✅ Created forum post: 🏢 Security Engineer II, Risk Engineering @ datadog in #💻・tech-jobs
[2026-01-03T12:05:27.454Z] [BOT] ✅ Industry: Security Engineer II, Risk Engineering @ datadog
[2026-01-03T12:05:29.132Z] [BOT] ✅ Created forum post: 🏢 Security Engineer II, Risk Engineering @ datadog in #🗽・new-york
[2026-01-03T12:05:29.132Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T12:05:30.633Z] [BOT] 💾 Marked as posted: Security Engineer II, Risk Engineering @ datadog (instance #1)
[2026-01-03T12:05:30.633Z] [BOT] 💾 BEFORE ARCHIVING: 447 jobs in database
[2026-01-03T12:05:30.634Z] [BOT] ✅ No jobs to archive (all 447 jobs within 7-day window)
[2026-01-03T12:05:30.637Z] [BOT] 💾 Saved posted_jobs.json: 447 active jobs
[2026-01-03T12:05:30.638Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:05:30.638Z] [BOT] 📍 [ROUTING] "Security Engineering Intern " @ datadog
   Category: TECH (matched: "engineer/engineering")
[2026-01-03T12:05:30.638Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T12:05:31.066Z] [BOT] ✅ Created forum post: 🏢 Security Engineering Intern  @ datadog in #💻・tech-jobs
  ✅ Industry: Security Engineering Intern  @ datadog
[2026-01-03T12:05:32.834Z] [BOT] ✅ Created forum post: 🏢 Security Engineering Intern  @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T12:05:34.335Z] [BOT] 💾 Marked as posted: Security Engineering Intern  @ datadog (instance #1)
[2026-01-03T12:05:34.335Z] [BOT] 💾 BEFORE ARCHIVING: 448 jobs in database
[2026-01-03T12:05:34.335Z] [BOT] ✅ No jobs to archive (all 448 jobs within 7-day window)
[2026-01-03T12:05:34.339Z] [BOT] 💾 Saved posted_jobs.json: 448 active jobs
[2026-01-03T12:05:34.339Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:05:37.339Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-03T12:05:37.340Z] [BOT] 📍 [ROUTING] "Product Manager II - Incident Management" @ datadog
   Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-03T12:05:38.358Z] [BOT] ✅ Created forum post: 🏢 Product Manager II - Incident Management @ datadog in #📦・product-jobs
[2026-01-03T12:05:38.358Z] [BOT] ✅ Industry: Product Manager II - Incident Management @ datadog
[2026-01-03T12:05:40.241Z] [BOT] ✅ Created forum post: 🏢 Product Manager II - Incident Management @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T12:05:41.742Z] [BOT] 💾 Marked as posted: Product Manager II - Incident Management @ datadog (instance #1)
[2026-01-03T12:05:41.743Z] [BOT] 💾 BEFORE ARCHIVING: 449 jobs in database
[2026-01-03T12:05:41.743Z] [BOT] ✅ No jobs to archive (all 449 jobs within 7-day window)
[2026-01-03T12:05:41.747Z] [BOT] 💾 Saved posted_jobs.json: 449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T12:05:41.747Z] [BOT] 💾 Marked as posted: Product Manager II - Software Delivery Suite @ datadog (instance #1)
[2026-01-03T12:05:41.747Z] [BOT] 💾 BEFORE ARCHIVING: 450 jobs in database
[2026-01-03T12:05:41.747Z] [BOT] ✅ No jobs to archive (all 450 jobs within 7-day window)
[2026-01-03T12:05:41.751Z] [BOT] 💾 Saved posted_jobs.json: 450 active jobs
[2026-01-03T12:05:41.751Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:05:44.752Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-03T12:05:44.753Z] [BOT] 📍 [ROUTING] "Recruiter II, Business Recruiting" @ datadog
[2026-01-03T12:05:44.753Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-03T12:05:44.974Z] [BOT] ✅ Created forum post: 🏢 Recruiter II, Business Recruiting @ datadog in #📁・JID_e938df7b
  ✅ Industry: Recruiter II, Business Recruiting @ datadog
[2026-01-03T12:05:46.775Z] [BOT] ✅ Created forum post: 🏢 Recruiter II, Business Recruiting @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T12:05:48.276Z] [BOT] 💾 Marked as posted: Recruiter II, Business Recruiting @ datadog (instance #1)
[2026-01-03T12:05:48.276Z] [BOT] 💾 BEFORE ARCHIVING: 451 jobs in database
[2026-01-03T12:05:48.276Z] [BOT] ✅ No jobs to archive (all 451 jobs within 7-day window)
[2026-01-03T12:05:48.282Z] [BOT] 💾 Saved posted_jobs.json: 451 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T12:05:51.282Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T12:05:51.283Z] [BOT] 📍 [ROUTING] "SaaS Administrator 2 - IT Operations" @ datadog
[2026-01-03T12:05:51.283Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T12:05:51.567Z] [BOT] ✅ Created forum post: 🏢 SaaS Administrator 2 - IT Operations @ datadog in #📣・marketing-jobs
[2026-01-03T12:05:51.567Z] [BOT] ✅ Industry: SaaS Administrator 2 - IT Operations @ datadog
[2026-01-03T12:05:53.254Z] [BOT] ✅ Created forum post: 🏢 SaaS Administrator 2 - IT Operations @ datadog in #🗽・new-york
[2026-01-03T12:05:53.254Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T12:05:54.754Z] [BOT] 💾 Marked as posted: SaaS Administrator 2 - IT Operations @ datadog (instance #1)
[2026-01-03T12:05:54.754Z] [BOT] 💾 BEFORE ARCHIVING: 452 jobs in database
[2026-01-03T12:05:54.755Z] [BOT] ✅ No jobs to archive (all 452 jobs within 7-day window)
[2026-01-03T12:05:54.759Z] [BOT] 💾 Saved posted_jobs.json: 452 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T12:05:57.759Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-03T12:05:57.760Z] [BOT] 📍 [ROUTING] "Sales Engineer (Customer Success) - Denver" @ datadog
   Category: SALES (matched: "sales")
[2026-01-03T12:05:57.760Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T12:05:58.042Z] [BOT] ✅ Created forum post: 🏢 Sales Engineer (Customer Success) - Denver @ datadog in #💲・sales-jobs
  ✅ Industry: Sales Engineer (Customer Success) - Denver @ datadog
[2026-01-03T12:05:59.543Z] [BOT] 💾 Marked as posted: Sales Engineer (Customer Success) - Denver @ datadog (instance #1)
[2026-01-03T12:05:59.543Z] [BOT] 💾 BEFORE ARCHIVING: 453 jobs in database
[2026-01-03T12:05:59.544Z] [BOT] ✅ No jobs to archive (all 453 jobs within 7-day window)
[2026-01-03T12:05:59.548Z] [BOT] 💾 Saved posted_jobs.json: 453 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T12:06:02.549Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-03T12:06:02.550Z] [BOT] ⏭️  Skipping duplicate: JID_7d7c548c (posted within 7 days)
[2026-01-03T12:06:02.550Z] [BOT] ⏭️  Skipping duplicate: JID_15c89ab7 (posted within 7 days)
[2026-01-03T12:06:02.550Z] [BOT] ⏭️  Skipping duplicate: JID_46a204a3 (posted within 7 days)
[2026-01-03T12:06:02.550Z] [BOT] ⏭️  Skipping duplicate: JID_984d2cad (posted within 7 days)
[2026-01-03T12:06:02.550Z] [BOT] ⏭️  Skipping duplicate: JID_c315115e (posted within 7 days)
[2026-01-03T12:06:02.550Z] [BOT] ⏭️  Skipping duplicate: JID_48cfd3c5 (posted within 7 days)
[2026-01-03T12:06:02.550Z] [BOT] ⏭️  Skipping duplicate: JID_5ea92ce0 (posted within 7 days)
[2026-01-03T12:06:02.550Z] [BOT] ⏭️  Skipping duplicate: JID_3c74a7c8 (posted within 7 days)
[2026-01-03T12:06:02.550Z] [BOT] ⏭️  Skipping duplicate: JID_074aa38f (posted within 7 days)
[2026-01-03T12:06:02.620Z] [BOT] ✅ Loaded pending queue: 845 total (825 pending, 20 enriched, 0 posted)
[2026-01-03T12:06:02.717Z] [BOT] ✅ Saved pending queue: 845 total (825 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T12:06:02.761Z] [BOT] 📂 Loaded 1435 existing routing entries
[2026-01-03T12:06:02.808Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2026-01-03T12:06:02.808Z] [BOT] Total entries: 1444
   Timestamp: 2026-01-03T12:06:02.802Z
[2026-01-03T12:06:02.809Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 17
   Successful: 17
   Failed: 0
   Skipped: 0
[2026-01-03T12:06:02.809Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T12:06:02.809Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 7
   Top channels:
[2026-01-03T12:06:02.809Z] [BOT] 1. #🗽・new-york: 7 posts
     2. #💻・tech-jobs: 5 posts
     3. #💻・remote-usa: 1 posts
     4. #📦・product-jobs: 1 posts
     5. #📁・JID_e938df7b: 1 posts
[2026-01-03T12:06:02.809Z] [BOT] [STATS] Channel stats saved
[2026-01-03T12:06:04.829Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2344) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*