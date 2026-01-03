# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T12:47:15.629Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T12:46:24.995Z] ========================================
[2026-01-03T12:46:24.997Z] Discord Bot Execution Log
[2026-01-03T12:46:24.997Z] Environment: GitHub Actions
[2026-01-03T12:46:24.997Z] Node Version: v20.19.6
[2026-01-03T12:46:24.997Z] ========================================
[2026-01-03T12:46:24.997Z] Environment Variables Check:
[2026-01-03T12:46:24.997Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T12:46:24.997Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T12:46:24.997Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T12:46:24.997Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T12:46:24.998Z] 
Multi-Channel Configuration:
[2026-01-03T12:46:24.998Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T12:46:24.998Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T12:46:24.998Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T12:46:24.998Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T12:46:24.998Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T12:46:24.998Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T12:46:24.998Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T12:46:24.998Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T12:46:24.998Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T12:46:24.998Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T12:46:24.998Z] 
Data Files Check:
[2026-01-03T12:46:25.000Z] .github/data/new_jobs.json: ✅ Exists (10 items, 171689 bytes)
[2026-01-03T12:46:25.002Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 244034 bytes)
[2026-01-03T12:46:25.002Z] 
========================================
[2026-01-03T12:46:25.002Z] Starting Enhanced Discord Bot...
[2026-01-03T12:46:25.002Z] ========================================
[2026-01-03T12:46:25.543Z] [BOT] ✅ Loaded V2 database: 463 jobs
[2026-01-03T12:46:26.118Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T12:46:26.118Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T12:46:26.118Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T12:46:26.119Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T12:46:26.192Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T12:46:26.292Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T12:46:26.294Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T12:46:26.294Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T12:46:26.294Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T12:46:26.295Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-03T12:46:26.295Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Partner Solutions Architect (Security - NAMER) @ datadog: boston, massachusetts, usa; denver, colorado, usa; new york, new york, usa; san francisco, california, usa, remote
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T12:46:26.299Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-03T12:46:26.300Z] [BOT] 📍 [ROUTING] "Senior Partner Solutions Architect (Security - NAMER)" @ datadog
[2026-01-03T12:46:26.300Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T12:46:26.305Z] [BOT ERROR] (node:2327) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T12:46:26.574Z] [BOT] ✅ Created forum post: 🏢 Senior Partner Solutions Architect (Security - NAMER) @ datadog in #💻・tech-jobs
[2026-01-03T12:46:26.574Z] [BOT] ✅ Industry: Senior Partner Solutions Architect (Security - NAMER) @ datadog
[2026-01-03T12:46:28.245Z] [BOT] ✅ Created forum post: 🏢 Senior Partner Solutions Architect (Security - NAMER) @ datadog in #🌉・san-francisco
[2026-01-03T12:46:28.245Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T12:46:29.746Z] [BOT] 💾 Marked as posted: Senior Partner Solutions Architect (Security - NAMER) @ datadog (instance #1)
[2026-01-03T12:46:29.746Z] [BOT] 💾 BEFORE ARCHIVING: 464 jobs in database
[2026-01-03T12:46:29.747Z] [BOT] ✅ No jobs to archive (all 464 jobs within 7-day window)
[2026-01-03T12:46:29.756Z] [BOT] 💾 Saved posted_jobs.json: 464 active jobs
[2026-01-03T12:46:29.756Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:46:29.756Z] [BOT] 💾 Marked as posted: Senior Partner Solutions Architect (Security - NAMER) @ datadog (instance #1)
💾 BEFORE ARCHIVING: 465 jobs in database
[2026-01-03T12:46:29.756Z] [BOT] ✅ No jobs to archive (all 465 jobs within 7-day window)
[2026-01-03T12:46:29.761Z] [BOT] 💾 Saved posted_jobs.json: 465 active jobs
[2026-01-03T12:46:29.761Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:46:29.762Z] [BOT] 📍 [ROUTING] "Senior Product Marketing Manager (AI Security)" @ datadog
   Category: TECH (matched: "machine learning")
[2026-01-03T12:46:29.762Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-03T12:46:30.020Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager (AI Security) @ datadog in #💻・tech-jobs
  ✅ Industry: Senior Product Marketing Manager (AI Security) @ datadog
[2026-01-03T12:46:31.920Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager (AI Security) @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T12:46:33.420Z] [BOT] 💾 Marked as posted: Senior Product Marketing Manager (AI Security) @ datadog (instance #1)
[2026-01-03T12:46:33.421Z] [BOT] 💾 BEFORE ARCHIVING: 466 jobs in database
[2026-01-03T12:46:33.421Z] [BOT] ✅ No jobs to archive (all 466 jobs within 7-day window)
[2026-01-03T12:46:33.426Z] [BOT] 💾 Saved posted_jobs.json: 466 active jobs
[2026-01-03T12:46:33.426Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:46:33.426Z] [BOT] 📍 [ROUTING] "Senior Product Marketing Manager (Cloud Cost Management)" @ datadog
[2026-01-03T12:46:33.426Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-03T12:46:33.611Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager (Cloud Cost Management) @ datadog in #💻・tech-jobs
[2026-01-03T12:46:33.611Z] [BOT] ✅ Industry: Senior Product Marketing Manager (Cloud Cost Management) @ datadog
[2026-01-03T12:46:35.499Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager (Cloud Cost Management) @ datadog in #🌉・san-francisco
[2026-01-03T12:46:35.499Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T12:46:37.001Z] [BOT] 💾 Marked as posted: Senior Product Marketing Manager (Cloud Cost Management) @ datadog (instance #1)
[2026-01-03T12:46:37.001Z] [BOT] 💾 BEFORE ARCHIVING: 467 jobs in database
[2026-01-03T12:46:37.002Z] [BOT] ✅ No jobs to archive (all 467 jobs within 7-day window)
[2026-01-03T12:46:37.005Z] [BOT] 💾 Saved posted_jobs.json: 467 active jobs
[2026-01-03T12:46:37.005Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:46:40.006Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T12:46:40.007Z] [BOT] 📍 [ROUTING] "Senior Product Designer" @ datadog
[2026-01-03T12:46:40.007Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T12:46:40.238Z] [BOT] ✅ Created forum post: 🏢 Senior Product Designer @ datadog in #📣・marketing-jobs
  ✅ Industry: Senior Product Designer @ datadog
[2026-01-03T12:46:42.094Z] [BOT] ✅ Created forum post: 🏢 Senior Product Designer @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T12:46:43.594Z] [BOT] 💾 Marked as posted: Senior Product Designer @ datadog (instance #1)
[2026-01-03T12:46:43.595Z] [BOT] 💾 BEFORE ARCHIVING: 468 jobs in database
[2026-01-03T12:46:43.595Z] [BOT] ✅ No jobs to archive (all 468 jobs within 7-day window)
[2026-01-03T12:46:43.599Z] [BOT] 💾 Saved posted_jobs.json: 468 active jobs
[2026-01-03T12:46:43.599Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:46:46.599Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-03T12:46:46.601Z] [BOT] 📍 [ROUTING] "Senior Product Manager - Cost and Usage Experience" @ datadog
[2026-01-03T12:46:46.601Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-03T12:46:46.953Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager - Cost and Usage Experience @ datadog in #📦・product-jobs
[2026-01-03T12:46:46.953Z] [BOT] ✅ Industry: Senior Product Manager - Cost and Usage Experience @ datadog
[2026-01-03T12:46:48.668Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager - Cost and Usage Experience @ datadog in #🗽・new-york
[2026-01-03T12:46:48.668Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T12:46:50.170Z] [BOT] 💾 Marked as posted: Senior Product Manager - Cost and Usage Experience @ datadog (instance #1)
[2026-01-03T12:46:50.170Z] [BOT] 💾 BEFORE ARCHIVING: 469 jobs in database
[2026-01-03T12:46:50.170Z] [BOT] ✅ No jobs to archive (all 469 jobs within 7-day window)
[2026-01-03T12:46:50.175Z] [BOT] 💾 Saved posted_jobs.json: 469 active jobs
[2026-01-03T12:46:50.175Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:46:50.175Z] [BOT] 💾 Marked as posted: Senior Product Manager - Database Monitoring @ datadog (instance #1)
💾 BEFORE ARCHIVING: 470 jobs in database
[2026-01-03T12:46:50.176Z] [BOT] ✅ No jobs to archive (all 470 jobs within 7-day window)
[2026-01-03T12:46:50.180Z] [BOT] 💾 Saved posted_jobs.json: 470 active jobs
[2026-01-03T12:46:50.180Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:46:53.181Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T12:46:53.181Z] [BOT] 📍 [ROUTING] "Senior Product Marketing Manager (AI)" @ datadog
[2026-01-03T12:46:53.181Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch, nonTechMatch (using ai)
[2026-01-03T12:46:53.484Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager (AI) @ datadog in #🤖・ai-jobs
  ✅ Industry: Senior Product Marketing Manager (AI) @ datadog
[2026-01-03T12:46:55.149Z] [BOT] ✅ Created forum post: 🏢 Senior Product Marketing Manager (AI) @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T12:46:56.650Z] [BOT] 💾 Marked as posted: Senior Product Marketing Manager (AI) @ datadog (instance #1)
[2026-01-03T12:46:56.650Z] [BOT] 💾 BEFORE ARCHIVING: 471 jobs in database
[2026-01-03T12:46:56.650Z] [BOT] ✅ No jobs to archive (all 471 jobs within 7-day window)
[2026-01-03T12:46:56.655Z] [BOT] 💾 Saved posted_jobs.json: 471 active jobs
[2026-01-03T12:46:56.655Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:46:59.655Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-03T12:46:59.656Z] [BOT] 📍 [ROUTING] "Senior Sales Engineer - Majors Northeast" @ datadog
[2026-01-03T12:46:59.656Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T12:46:59.952Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Engineer - Majors Northeast @ datadog in #💲・sales-jobs
[2026-01-03T12:46:59.952Z] [BOT] ✅ Industry: Senior Sales Engineer - Majors Northeast @ datadog
[2026-01-03T12:47:01.705Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Engineer - Majors Northeast @ datadog in #💻・remote-usa
[2026-01-03T12:47:01.705Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-03T12:47:03.206Z] [BOT] 💾 Marked as posted: Senior Sales Engineer - Majors Northeast @ datadog (instance #1)
[2026-01-03T12:47:03.206Z] [BOT] 💾 BEFORE ARCHIVING: 472 jobs in database
[2026-01-03T12:47:03.207Z] [BOT] ✅ No jobs to archive (all 472 jobs within 7-day window)
[2026-01-03T12:47:03.211Z] [BOT] 💾 Saved posted_jobs.json: 472 active jobs
[2026-01-03T12:47:03.211Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:47:06.211Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T12:47:06.212Z] [BOT] 📍 [ROUTING] "Senior Security Engineer, Data Security" @ datadog
[2026-01-03T12:47:06.212Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T12:47:06.384Z] [BOT] ✅ Created forum post: 🏢 Senior Security Engineer, Data Security @ datadog in #📈・JID_fb739488
[2026-01-03T12:47:06.384Z] [BOT] ✅ Industry: Senior Security Engineer, Data Security @ datadog
[2026-01-03T12:47:08.097Z] [BOT] ✅ Created forum post: 🏢 Senior Security Engineer, Data Security @ datadog in #🗽・new-york
[2026-01-03T12:47:08.097Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T12:47:09.598Z] [BOT] 💾 Marked as posted: Senior Security Engineer, Data Security @ datadog (instance #1)
[2026-01-03T12:47:09.598Z] [BOT] 💾 BEFORE ARCHIVING: 473 jobs in database
[2026-01-03T12:47:09.599Z] [BOT] ✅ No jobs to archive (all 473 jobs within 7-day window)
[2026-01-03T12:47:09.603Z] [BOT] 💾 Saved posted_jobs.json: 473 active jobs
[2026-01-03T12:47:09.603Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T12:47:12.603Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-03T12:47:12.603Z] [BOT] ⏭️  Skipping duplicate: JID_30c2c713 (posted within 7 days)
[2026-01-03T12:47:12.604Z] [BOT] ⏭️  Skipping duplicate: JID_0b600350 (posted within 7 days)
⏭️  Skipping duplicate: JID_22b239dd (posted within 7 days)
[2026-01-03T12:47:12.604Z] [BOT] ⏭️  Skipping duplicate: JID_33b8c7b0 (posted within 7 days)
⏭️  Skipping duplicate: JID_8d88551f (posted within 7 days)
[2026-01-03T12:47:12.604Z] [BOT] ⏭️  Skipping duplicate: JID_8ae984e3 (posted within 7 days)
⏭️  Skipping duplicate: JID_2e035db0 (posted within 7 days)
[2026-01-03T12:47:12.604Z] [BOT] ⏭️  Skipping duplicate: JID_2fe4cc9c (posted within 7 days)
[2026-01-03T12:47:12.671Z] [BOT] ✅ Loaded pending queue: 825 total (805 pending, 20 enriched, 0 posted)
[2026-01-03T12:47:12.768Z] [BOT] ✅ Saved pending queue: 825 total (805 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
[2026-01-03T12:47:12.768Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T12:47:12.813Z] [BOT] 📂 Loaded 1454 existing routing entries
[2026-01-03T12:47:12.859Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 1462
   Timestamp: 2026-01-03T12:47:12.853Z
[2026-01-03T12:47:12.860Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-03T12:47:12.860Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T12:47:12.860Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 9
   Top channels:
     1. #🌉・san-francisco: 4 posts
     2. #💻・tech-jobs: 3 posts
     3. #🗽・new-york: 3 posts
[2026-01-03T12:47:12.861Z] [BOT] 4. #📣・marketing-jobs: 1 posts
     5. #📦・product-jobs: 1 posts
[2026-01-03T12:47:12.861Z] [BOT] [STATS] Channel stats saved
[2026-01-03T12:47:14.877Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2327) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*