# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T23:06:47.654Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T23:06:00.126Z] ========================================
[2026-01-12T23:06:00.128Z] Discord Bot Execution Log
[2026-01-12T23:06:00.128Z] Environment: GitHub Actions
[2026-01-12T23:06:00.128Z] Node Version: v20.19.6
[2026-01-12T23:06:00.128Z] ========================================
[2026-01-12T23:06:00.128Z] Environment Variables Check:
[2026-01-12T23:06:00.129Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T23:06:00.129Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T23:06:00.129Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T23:06:00.129Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T23:06:00.129Z] 
Multi-Channel Configuration:
[2026-01-12T23:06:00.129Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T23:06:00.129Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T23:06:00.129Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T23:06:00.129Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T23:06:00.129Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T23:06:00.129Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T23:06:00.129Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T23:06:00.129Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T23:06:00.130Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T23:06:00.130Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T23:06:00.130Z] 
Data Files Check:
[2026-01-12T23:06:00.131Z] .github/data/new_jobs.json: ✅ Exists (10 items, 94679 bytes)
[2026-01-12T23:06:00.133Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 319967 bytes)
[2026-01-12T23:06:00.133Z] 
========================================
[2026-01-12T23:06:00.133Z] Starting Enhanced Discord Bot...
[2026-01-12T23:06:00.133Z] ========================================
[2026-01-12T23:06:00.663Z] [BOT] ✅ Loaded V2 database: 595 jobs
[2026-01-12T23:06:01.150Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T23:06:01.150Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T23:06:01.150Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T23:06:01.257Z] [BOT] ✅ Loaded pending queue: 2655 total (2635 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Head of Brand Campaigns at duolingo
[2026-01-12T23:06:01.259Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T23:06:01.260Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T23:06:01.260Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T23:06:01.261Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-12T23:06:01.261Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Product Manager, Math @ duolingo: new york, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-12T23:06:01.261Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T23:06:01.265Z] [BOT] 📌 Posting 3 jobs to #📣・marketing-jobs
[2026-01-12T23:06:01.265Z] [BOT] 📍 [ROUTING] "Head of Brand Campaigns" @ duolingo
[2026-01-12T23:06:01.266Z] [BOT] Category: MARKETING (matched: "brand")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T23:06:01.270Z] [BOT ERROR] (node:2390) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T23:06:01.499Z] [BOT] ✅ Created forum post: 🏢 Head of Brand Campaigns @ duolingo in #📣・marketing-jobs
  ✅ Industry: Head of Brand Campaigns @ duolingo
[2026-01-12T23:06:03.130Z] [BOT] ✅ Created forum post: 🏢 Head of Brand Campaigns @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T23:06:04.632Z] [BOT] 💾 Marked as posted: Head of Brand Campaigns @ duolingo (instance #1)
[2026-01-12T23:06:04.633Z] [BOT] 💾 BEFORE ARCHIVING: 596 jobs in database
[2026-01-12T23:06:04.633Z] [BOT] ✅ No jobs to archive (all 596 jobs within 7-day window)
[2026-01-12T23:06:04.642Z] [BOT] 💾 Saved posted_jobs.json: 596 active jobs
[2026-01-12T23:06:04.642Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:06:04.642Z] [BOT] 📍 [ROUTING] "Influencer Marketing, Intern" @ duolingo
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T23:06:04.850Z] [BOT] ✅ Created forum post: 🏢 Influencer Marketing, Intern @ duolingo in #📣・marketing-jobs
[2026-01-12T23:06:04.850Z] [BOT] ✅ Industry: Influencer Marketing, Intern @ duolingo
[2026-01-12T23:06:06.552Z] [BOT] ✅ Created forum post: 🏢 Influencer Marketing, Intern @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T23:06:08.053Z] [BOT] 💾 Marked as posted: Influencer Marketing, Intern @ duolingo (instance #1)
[2026-01-12T23:06:08.053Z] [BOT] 💾 BEFORE ARCHIVING: 597 jobs in database
[2026-01-12T23:06:08.054Z] [BOT] ✅ No jobs to archive (all 597 jobs within 7-day window)
[2026-01-12T23:06:08.059Z] [BOT] 💾 Saved posted_jobs.json: 597 active jobs
[2026-01-12T23:06:08.059Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:06:08.059Z] [BOT] 📍 [ROUTING] "Product Marketing Manager, Duolingo Chess" @ duolingo
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T23:06:08.195Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Duolingo Chess @ duolingo in #📣・marketing-jobs
[2026-01-12T23:06:08.195Z] [BOT] ✅ Industry: Product Marketing Manager, Duolingo Chess @ duolingo
[2026-01-12T23:06:09.860Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Manager, Duolingo Chess @ duolingo in #🗽・new-york
[2026-01-12T23:06:09.860Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T23:06:11.362Z] [BOT] 💾 Marked as posted: Product Marketing Manager, Duolingo Chess @ duolingo (instance #1)
[2026-01-12T23:06:11.362Z] [BOT] 💾 BEFORE ARCHIVING: 598 jobs in database
[2026-01-12T23:06:11.363Z] [BOT] ✅ No jobs to archive (all 598 jobs within 7-day window)
[2026-01-12T23:06:11.370Z] [BOT] 💾 Saved posted_jobs.json: 598 active jobs
[2026-01-12T23:06:11.370Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:06:14.371Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-12T23:06:14.371Z] [BOT] 📍 [ROUTING] "Senior AI Engineering Manager" @ duolingo
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T23:06:14.508Z] [BOT] ✅ Created forum post: 🏢 Senior AI Engineering Manager @ duolingo in #💻・tech-jobs
[2026-01-12T23:06:14.508Z] [BOT] ✅ Industry: Senior AI Engineering Manager @ duolingo
[2026-01-12T23:06:16.369Z] [BOT] ✅ Created forum post: 🏢 Senior AI Engineering Manager @ duolingo in #🗽・new-york
[2026-01-12T23:06:16.369Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T23:06:17.871Z] [BOT] 💾 Marked as posted: Senior AI Engineering Manager @ duolingo (instance #1)
[2026-01-12T23:06:17.871Z] [BOT] 💾 BEFORE ARCHIVING: 599 jobs in database
[2026-01-12T23:06:17.872Z] [BOT] ✅ No jobs to archive (all 599 jobs within 7-day window)
[2026-01-12T23:06:17.877Z] [BOT] 💾 Saved posted_jobs.json: 599 active jobs
[2026-01-12T23:06:17.877Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:06:17.877Z] [BOT] 📍 [ROUTING] "Senior Android Engineer" @ duolingo
[2026-01-12T23:06:17.877Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T23:06:18.080Z] [BOT] ✅ Created forum post: 🏢 Senior Android Engineer @ duolingo in #💻・tech-jobs
  ✅ Industry: Senior Android Engineer @ duolingo
[2026-01-12T23:06:19.706Z] [BOT] ✅ Created forum post: 🏢 Senior Android Engineer @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T23:06:21.208Z] [BOT] 💾 Marked as posted: Senior Android Engineer @ duolingo (instance #1)
[2026-01-12T23:06:21.208Z] [BOT] 💾 BEFORE ARCHIVING: 600 jobs in database
[2026-01-12T23:06:21.208Z] [BOT] ✅ No jobs to archive (all 600 jobs within 7-day window)
[2026-01-12T23:06:21.214Z] [BOT] 💾 Saved posted_jobs.json: 600 active jobs
[2026-01-12T23:06:21.214Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:06:21.214Z] [BOT] 📍 [ROUTING] "Senior iOS Engineer, App Builds" @ duolingo
[2026-01-12T23:06:21.214Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T23:06:21.401Z] [BOT] ✅ Created forum post: 🏢 Senior iOS Engineer, App Builds @ duolingo in #💻・tech-jobs
  ✅ Industry: Senior iOS Engineer, App Builds @ duolingo
[2026-01-12T23:06:23.075Z] [BOT] ✅ Created forum post: 🏢 Senior iOS Engineer, App Builds @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T23:06:24.577Z] [BOT] 💾 Marked as posted: Senior iOS Engineer, App Builds @ duolingo (instance #1)
[2026-01-12T23:06:24.577Z] [BOT] 💾 BEFORE ARCHIVING: 601 jobs in database
[2026-01-12T23:06:24.577Z] [BOT] ✅ No jobs to archive (all 601 jobs within 7-day window)
[2026-01-12T23:06:24.583Z] [BOT] 💾 Saved posted_jobs.json: 601 active jobs
[2026-01-12T23:06:24.583Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Senior iOS Software Engineer" @ duolingo
[2026-01-12T23:06:24.583Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T23:06:24.888Z] [BOT] ✅ Created forum post: 🏢 Senior iOS Software Engineer @ duolingo in #💻・tech-jobs
  ✅ Industry: Senior iOS Software Engineer @ duolingo
[2026-01-12T23:06:26.514Z] [BOT] ✅ Created forum post: 🏢 Senior iOS Software Engineer @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T23:06:28.015Z] [BOT] 💾 Marked as posted: Senior iOS Software Engineer @ duolingo (instance #1)
[2026-01-12T23:06:28.015Z] [BOT] 💾 BEFORE ARCHIVING: 602 jobs in database
[2026-01-12T23:06:28.016Z] [BOT] ✅ No jobs to archive (all 602 jobs within 7-day window)
[2026-01-12T23:06:28.021Z] [BOT] 💾 Saved posted_jobs.json: 602 active jobs
[2026-01-12T23:06:28.021Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:06:31.022Z] [BOT] 📌 Posting 3 jobs to #📦・product-jobs
[2026-01-12T23:06:31.022Z] [BOT] 📍 [ROUTING] "Senior Product Manager, Ads" @ duolingo
   Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-12T23:06:31.236Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Ads @ duolingo in #📦・product-jobs
  ✅ Industry: Senior Product Manager, Ads @ duolingo
[2026-01-12T23:06:33.090Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Ads @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T23:06:34.591Z] [BOT] 💾 Marked as posted: Senior Product Manager, Ads @ duolingo (instance #1)
[2026-01-12T23:06:34.591Z] [BOT] 💾 BEFORE ARCHIVING: 603 jobs in database
[2026-01-12T23:06:34.592Z] [BOT] ✅ No jobs to archive (all 603 jobs within 7-day window)
[2026-01-12T23:06:34.598Z] [BOT] 💾 Saved posted_jobs.json: 603 active jobs
[2026-01-12T23:06:34.598Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:06:34.598Z] [BOT] 📍 [ROUTING] "Senior Product Manager, Math" @ duolingo
   Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-12T23:06:34.798Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Math @ duolingo in #📦・product-jobs
  ✅ Industry: Senior Product Manager, Math @ duolingo
[2026-01-12T23:06:36.702Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Math @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T23:06:38.203Z] [BOT] 💾 Marked as posted: Senior Product Manager, Math @ duolingo (instance #1)
[2026-01-12T23:06:38.203Z] [BOT] 💾 BEFORE ARCHIVING: 604 jobs in database
[2026-01-12T23:06:38.204Z] [BOT] ✅ No jobs to archive (all 604 jobs within 7-day window)
[2026-01-12T23:06:38.209Z] [BOT] 💾 Saved posted_jobs.json: 604 active jobs
[2026-01-12T23:06:38.209Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:06:38.210Z] [BOT] 💾 Marked as posted: Senior Product Manager, Math @ duolingo (instance #1)
[2026-01-12T23:06:38.210Z] [BOT] 💾 BEFORE ARCHIVING: 605 jobs in database
[2026-01-12T23:06:38.210Z] [BOT] ✅ No jobs to archive (all 605 jobs within 7-day window)
[2026-01-12T23:06:38.215Z] [BOT] 💾 Saved posted_jobs.json: 605 active jobs
[2026-01-12T23:06:38.215Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:06:38.216Z] [BOT] 📍 [ROUTING] "Senior Product Manager, Monetization" @ duolingo
   Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-12T23:06:38.426Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Monetization @ duolingo in #📦・product-jobs
  ✅ Industry: Senior Product Manager, Monetization @ duolingo
[2026-01-12T23:06:40.114Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Monetization @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T23:06:41.616Z] [BOT] 💾 Marked as posted: Senior Product Manager, Monetization @ duolingo (instance #1)
[2026-01-12T23:06:41.616Z] [BOT] 💾 BEFORE ARCHIVING: 606 jobs in database
[2026-01-12T23:06:41.616Z] [BOT] ✅ No jobs to archive (all 606 jobs within 7-day window)
[2026-01-12T23:06:41.622Z] [BOT] 💾 Saved posted_jobs.json: 606 active jobs
[2026-01-12T23:06:41.622Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T23:06:44.622Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T23:06:44.622Z] [BOT] ⏭️  Skipping duplicate: JID_838eee4a (posted within 7 days)
[2026-01-12T23:06:44.622Z] [BOT] ⏭️  Skipping duplicate: JID_e0290d68 (posted within 7 days)
[2026-01-12T23:06:44.623Z] [BOT] ⏭️  Skipping duplicate: JID_0f51fd8b (posted within 7 days)
⏭️  Skipping duplicate: JID_b2e8be7b (posted within 7 days)
[2026-01-12T23:06:44.623Z] [BOT] ⏭️  Skipping duplicate: JID_a01fd1b4 (posted within 7 days)
[2026-01-12T23:06:44.623Z] [BOT] ⏭️  Skipping duplicate: JID_6006fee5 (posted within 7 days)
[2026-01-12T23:06:44.623Z] [BOT] ⏭️  Skipping duplicate: JID_787e4aa1 (posted within 7 days)
⏭️  Skipping duplicate: JID_cff2e5a7 (posted within 7 days)
⏭️  Skipping duplicate: JID_00abb0d2 (posted within 7 days)
⏭️  Skipping duplicate: JID_b0c0d61c (posted within 7 days)
[2026-01-12T23:06:44.740Z] [BOT] ✅ Loaded pending queue: 2655 total (2635 pending, 20 enriched, 0 posted)
[2026-01-12T23:06:44.901Z] [BOT] ✅ Saved pending queue: 2655 total (2635 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-12T23:06:44.901Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T23:06:44.953Z] [BOT] 📂 Loaded 2760 existing routing entries
[2026-01-12T23:06:45.009Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-12T23:06:45.009Z] [BOT] Total entries: 2770
   Timestamp: 2026-01-12T23:06:44.997Z
[2026-01-12T23:06:45.010Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T23:06:45.010Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 4
   Top channels:
     1. #🗽・new-york: 10 posts
[2026-01-12T23:06:45.010Z] [BOT] 2. #💻・tech-jobs: 4 posts
[2026-01-12T23:06:45.010Z] [BOT] 3. #📣・marketing-jobs: 3 posts
     4. #📦・product-jobs: 3 posts
[2026-01-12T23:06:45.010Z] [BOT] [STATS] Channel stats saved
[2026-01-12T23:06:47.035Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2390) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*