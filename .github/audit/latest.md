# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T19:51:28.347Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T19:50:39.974Z] ========================================
[2026-01-12T19:50:39.976Z] Discord Bot Execution Log
[2026-01-12T19:50:39.976Z] Environment: GitHub Actions
[2026-01-12T19:50:39.976Z] Node Version: v20.19.6
[2026-01-12T19:50:39.976Z] ========================================
[2026-01-12T19:50:39.976Z] Environment Variables Check:
[2026-01-12T19:50:39.976Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T19:50:39.976Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T19:50:39.977Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T19:50:39.977Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T19:50:39.977Z] 
Multi-Channel Configuration:
[2026-01-12T19:50:39.977Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T19:50:39.977Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T19:50:39.977Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T19:50:39.977Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T19:50:39.977Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T19:50:39.977Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T19:50:39.977Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T19:50:39.977Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T19:50:39.977Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T19:50:39.977Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T19:50:39.978Z] 
Data Files Check:
[2026-01-12T19:50:39.979Z] .github/data/new_jobs.json: ✅ Exists (10 items, 162542 bytes)
[2026-01-12T19:50:39.981Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 244246 bytes)
[2026-01-12T19:50:39.981Z] 
========================================
[2026-01-12T19:50:39.981Z] Starting Enhanced Discord Bot...
[2026-01-12T19:50:39.981Z] ========================================
[2026-01-12T19:50:40.503Z] [BOT] ✅ Loaded V2 database: 436 jobs
[2026-01-12T19:50:41.217Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T19:50:41.217Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T19:50:41.217Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T19:50:41.335Z] [BOT] ✅ Loaded pending queue: 2654 total (2634 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Deal Desk Analyst at datadog
[2026-01-12T19:50:41.336Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T19:50:41.337Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T19:50:41.337Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T19:50:41.338Z] [BOT] 📋 After multi-location grouping: 12 unique jobs to post
[2026-01-12T19:50:41.338Z] [BOT] (8 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Deal Desk Analyst @ datadog: boston, massachusetts, usa; new york, new york, usa, denver, colorado, usa
   - Enterprise Customer Success Manager - Denver @ datadog: denver, colorado, usa, boston, massachusetts, usa; new york, new york, usa
   - Enterprise Sales Executive @ datadog: boston, massachusetts, usa, remote, washington, district of columbia, usa
[2026-01-12T19:50:41.338Z] [BOT] - Enterprise Sales Executive (FED) @ datadog: washington, district of columbia, usa, remote
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T19:50:41.343Z] [BOT] 📌 Posting 7 jobs to #💲・sales-jobs
[2026-01-12T19:50:41.343Z] [BOT] 📍 [ROUTING] "Deal Desk Analyst" @ datadog
[2026-01-12T19:50:41.343Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:50:41.348Z] [BOT ERROR] (node:2356) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T19:50:41.559Z] [BOT] ✅ Created forum post: 🏢 Deal Desk Analyst @ datadog in #💲・sales-jobs
[2026-01-12T19:50:41.559Z] [BOT] ✅ Industry: Deal Desk Analyst @ datadog
[2026-01-12T19:50:43.407Z] [BOT] ✅ Created forum post: 🏢 Deal Desk Analyst @ datadog in #🗽・new-york
[2026-01-12T19:50:43.407Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T19:50:44.907Z] [BOT] 💾 Marked as posted: Deal Desk Analyst @ datadog (instance #1)
[2026-01-12T19:50:44.907Z] [BOT] 💾 BEFORE ARCHIVING: 437 jobs in database
[2026-01-12T19:50:44.908Z] [BOT] ✅ No jobs to archive (all 437 jobs within 7-day window)
[2026-01-12T19:50:44.916Z] [BOT] 💾 Saved posted_jobs.json: 437 active jobs
[2026-01-12T19:50:44.916Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:50:44.916Z] [BOT] 💾 Marked as posted: Deal Desk Analyst - Denver @ datadog (instance #1)
💾 BEFORE ARCHIVING: 438 jobs in database
[2026-01-12T19:50:44.916Z] [BOT] ✅ No jobs to archive (all 438 jobs within 7-day window)
[2026-01-12T19:50:44.920Z] [BOT] 💾 Saved posted_jobs.json: 438 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:50:44.921Z] [BOT] 📍 [ROUTING] "Director, Enterprise Sales (SLED)" @ datadog
[2026-01-12T19:50:44.921Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:50:45.239Z] [BOT] ✅ Created forum post: 🏢 Director, Enterprise Sales (SLED) @ datadog in #💲・sales-jobs
[2026-01-12T19:50:45.239Z] [BOT] ✅ Industry: Director, Enterprise Sales (SLED) @ datadog
[2026-01-12T19:50:47.060Z] [BOT] ✅ Created forum post: 🏢 Director, Enterprise Sales (SLED) @ datadog in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-12T19:50:48.562Z] [BOT] 💾 Marked as posted: Director, Enterprise Sales (SLED) @ datadog (instance #1)
[2026-01-12T19:50:48.562Z] [BOT] 💾 BEFORE ARCHIVING: 439 jobs in database
[2026-01-12T19:50:48.562Z] [BOT] ✅ No jobs to archive (all 439 jobs within 7-day window)
[2026-01-12T19:50:48.567Z] [BOT] 💾 Saved posted_jobs.json: 439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:50:48.567Z] [BOT] 📍 [ROUTING] "Director, Pricing and Monetization" @ datadog
[2026-01-12T19:50:48.567Z] [BOT] Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:50:48.968Z] [BOT] ✅ Created forum post: 🏢 Director, Pricing and Monetization @ datadog in #💲・sales-jobs
  ✅ Industry: Director, Pricing and Monetization @ datadog
[2026-01-12T19:50:50.685Z] [BOT] ✅ Created forum post: 🏢 Director, Pricing and Monetization @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T19:50:52.186Z] [BOT] 💾 Marked as posted: Director, Pricing and Monetization @ datadog (instance #1)
[2026-01-12T19:50:52.186Z] [BOT] 💾 BEFORE ARCHIVING: 440 jobs in database
[2026-01-12T19:50:52.187Z] [BOT] ✅ No jobs to archive (all 440 jobs within 7-day window)
[2026-01-12T19:50:52.191Z] [BOT] 💾 Saved posted_jobs.json: 440 active jobs
[2026-01-12T19:50:52.191Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:50:52.191Z] [BOT] 📍 [ROUTING] "Director, Sales Field Enablement - NYC" @ datadog
[2026-01-12T19:50:52.192Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:50:52.482Z] [BOT] ✅ Created forum post: 🏢 Director, Sales Field Enablement - NYC @ datadog in #💲・sales-jobs
  ✅ Industry: Director, Sales Field Enablement - NYC @ datadog
[2026-01-12T19:50:54.265Z] [BOT] ✅ Created forum post: 🏢 Director, Sales Field Enablement - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T19:50:55.766Z] [BOT] 💾 Marked as posted: Director, Sales Field Enablement - NYC @ datadog (instance #1)
[2026-01-12T19:50:55.766Z] [BOT] 💾 BEFORE ARCHIVING: 441 jobs in database
[2026-01-12T19:50:55.767Z] [BOT] ✅ No jobs to archive (all 441 jobs within 7-day window)
[2026-01-12T19:50:55.771Z] [BOT] 💾 Saved posted_jobs.json: 441 active jobs
[2026-01-12T19:50:55.771Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:50:55.772Z] [BOT] 📍 [ROUTING] "Director, Technical Product Partnerships" @ datadog
[2026-01-12T19:50:55.772Z] [BOT] Category: SALES (matched: "business development")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:50:56.117Z] [BOT] ✅ Created forum post: 🏢 Director, Technical Product Partnerships @ datadog in #💲・sales-jobs
  ✅ Industry: Director, Technical Product Partnerships @ datadog
[2026-01-12T19:50:57.837Z] [BOT] ✅ Created forum post: 🏢 Director, Technical Product Partnerships @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T19:50:59.338Z] [BOT] 💾 Marked as posted: Director, Technical Product Partnerships @ datadog (instance #1)
[2026-01-12T19:50:59.338Z] [BOT] 💾 BEFORE ARCHIVING: 442 jobs in database
[2026-01-12T19:50:59.339Z] [BOT] ✅ No jobs to archive (all 442 jobs within 7-day window)
[2026-01-12T19:50:59.343Z] [BOT] 💾 Saved posted_jobs.json: 442 active jobs
[2026-01-12T19:50:59.343Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:50:59.344Z] [BOT] 📍 [ROUTING] "Enterprise Customer Success Manager - Denver" @ datadog
[2026-01-12T19:50:59.344Z] [BOT] Category: SALES (matched: "customer success")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:50:59.642Z] [BOT] ✅ Created forum post: 🏢 Enterprise Customer Success Manager - Denver @ datadog in #💲・sales-jobs
  ✅ Industry: Enterprise Customer Success Manager - Denver @ datadog
[2026-01-12T19:51:01.144Z] [BOT] 💾 Marked as posted: Enterprise Customer Success Manager - Denver @ datadog (instance #1)
[2026-01-12T19:51:01.144Z] [BOT] 💾 BEFORE ARCHIVING: 443 jobs in database
[2026-01-12T19:51:01.144Z] [BOT] ✅ No jobs to archive (all 443 jobs within 7-day window)
[2026-01-12T19:51:01.148Z] [BOT] 💾 Saved posted_jobs.json: 443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:51:01.148Z] [BOT] 💾 Marked as posted: Enterprise Customer Success Manager - East Coast @ datadog (instance #1)
💾 BEFORE ARCHIVING: 444 jobs in database
[2026-01-12T19:51:01.149Z] [BOT] ✅ No jobs to archive (all 444 jobs within 7-day window)
[2026-01-12T19:51:01.153Z] [BOT] 💾 Saved posted_jobs.json: 444 active jobs
[2026-01-12T19:51:01.153Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:51:01.153Z] [BOT] 📍 [ROUTING] "Enterprise Sales Engineer" @ datadog
[2026-01-12T19:51:01.153Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T19:51:01.407Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Engineer @ datadog in #💲・sales-jobs
  ✅ Industry: Enterprise Sales Engineer @ datadog
[2026-01-12T19:51:03.120Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Engineer @ datadog in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-12T19:51:04.621Z] [BOT] 💾 Marked as posted: Enterprise Sales Engineer @ datadog (instance #1)
[2026-01-12T19:51:04.621Z] [BOT] 💾 BEFORE ARCHIVING: 445 jobs in database
[2026-01-12T19:51:04.621Z] [BOT] ✅ No jobs to archive (all 445 jobs within 7-day window)
[2026-01-12T19:51:04.625Z] [BOT] 💾 Saved posted_jobs.json: 445 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T19:51:04.625Z] [BOT] 💾 Marked as posted: Enterprise Sales Engineer - South Africa @ datadog (instance #1)
[2026-01-12T19:51:04.625Z] [BOT] 💾 BEFORE ARCHIVING: 446 jobs in database
[2026-01-12T19:51:04.626Z] [BOT] ✅ No jobs to archive (all 446 jobs within 7-day window)
[2026-01-12T19:51:04.629Z] [BOT] 💾 Saved posted_jobs.json: 446 active jobs
[2026-01-12T19:51:04.629Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:51:07.631Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-12T19:51:07.631Z] [BOT] 📍 [ROUTING] "Developer Advocate - Community" @ datadog
[2026-01-12T19:51:07.631Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T19:51:08.008Z] [BOT] ✅ Created forum post: 🏢 Developer Advocate - Community @ datadog in #💻・tech-jobs
  ✅ Industry: Developer Advocate - Community @ datadog
[2026-01-12T19:51:09.775Z] [BOT] ✅ Created forum post: 🏢 Developer Advocate - Community @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T19:51:11.275Z] [BOT] 💾 Marked as posted: Developer Advocate - Community @ datadog (instance #1)
[2026-01-12T19:51:11.276Z] [BOT] 💾 BEFORE ARCHIVING: 447 jobs in database
[2026-01-12T19:51:11.276Z] [BOT] ✅ No jobs to archive (all 447 jobs within 7-day window)
[2026-01-12T19:51:11.280Z] [BOT] 💾 Saved posted_jobs.json: 447 active jobs
[2026-01-12T19:51:11.280Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:51:11.281Z] [BOT] 📍 [ROUTING] "Engineering Manager, Application Security Platform" @ datadog
[2026-01-12T19:51:11.281Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T19:51:11.578Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Application Security Platform @ datadog in #💻・tech-jobs
  ✅ Industry: Engineering Manager, Application Security Platform @ datadog
[2026-01-12T19:51:13.443Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Application Security Platform @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T19:51:14.944Z] [BOT] 💾 Marked as posted: Engineering Manager, Application Security Platform @ datadog (instance #1)
[2026-01-12T19:51:14.944Z] [BOT] 💾 BEFORE ARCHIVING: 448 jobs in database
[2026-01-12T19:51:14.945Z] [BOT] ✅ No jobs to archive (all 448 jobs within 7-day window)
[2026-01-12T19:51:14.950Z] [BOT] 💾 Saved posted_jobs.json: 448 active jobs
[2026-01-12T19:51:14.950Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:51:17.951Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-12T19:51:17.951Z] [BOT] 📍 [ROUTING] "Employee Relation Specialist - Workplace Investigations" @ datadog
[2026-01-12T19:51:17.951Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T19:51:18.219Z] [BOT] ✅ Created forum post: 🏢 Employee Relation Specialist - Workplace Investigations @ datadog in #📣・marketing-jobs
  ✅ Industry: Employee Relation Specialist - Workplace Investigations @ datadog
[2026-01-12T19:51:20.029Z] [BOT] ✅ Created forum post: 🏢 Employee Relation Specialist - Workplace Investigations @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T19:51:21.530Z] [BOT] 💾 Marked as posted: Employee Relation Specialist - Workplace Investigations @ datadog (instance #1)
[2026-01-12T19:51:21.530Z] [BOT] 💾 BEFORE ARCHIVING: 449 jobs in database
[2026-01-12T19:51:21.530Z] [BOT] ✅ No jobs to archive (all 449 jobs within 7-day window)
[2026-01-12T19:51:21.534Z] [BOT] 💾 Saved posted_jobs.json: 449 active jobs
[2026-01-12T19:51:21.535Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T19:51:24.536Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T19:51:24.536Z] [BOT] ⏭️  Skipping duplicate: JID_2f2f0401 (posted within 7 days)
[2026-01-12T19:51:24.536Z] [BOT] ⏭️  Skipping duplicate: JID_1f442e76 (posted within 7 days)
[2026-01-12T19:51:24.537Z] [BOT] ⏭️  Skipping duplicate: JID_6329e6d2 (posted within 7 days)
[2026-01-12T19:51:24.537Z] [BOT] ⏭️  Skipping duplicate: JID_27a15fea (posted within 7 days)
[2026-01-12T19:51:24.537Z] [BOT] ⏭️  Skipping duplicate: JID_298aa8b5 (posted within 7 days)
[2026-01-12T19:51:24.537Z] [BOT] ⏭️  Skipping duplicate: JID_5d6f1e71 (posted within 7 days)
[2026-01-12T19:51:24.537Z] [BOT] ⏭️  Skipping duplicate: JID_5c406f64 (posted within 7 days)
[2026-01-12T19:51:24.537Z] [BOT] ⏭️  Skipping duplicate: JID_54d6023b (posted within 7 days)
[2026-01-12T19:51:24.537Z] [BOT] ⏭️  Skipping duplicate: JID_6da9444c (posted within 7 days)
[2026-01-12T19:51:24.537Z] [BOT] ⏭️  Skipping duplicate: JID_20b447ad (posted within 7 days)
[2026-01-12T19:51:24.665Z] [BOT] ✅ Loaded pending queue: 2654 total (2634 pending, 20 enriched, 0 posted)
[2026-01-12T19:51:24.828Z] [BOT] ✅ Saved pending queue: 2654 total (2634 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-12T19:51:24.828Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T19:51:24.880Z] [BOT] 📂 Loaded 2632 existing routing entries
[2026-01-12T19:51:24.938Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-12T19:51:24.938Z] [BOT] Total entries: 2642
   Timestamp: 2026-01-12T19:51:24.926Z
[2026-01-12T19:51:24.939Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-12T19:51:24.939Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T19:51:24.939Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 5
   Top channels:
     1. #💲・sales-jobs: 7 posts
     2. #🗽・new-york: 7 posts
     3. #💻・remote-usa: 2 posts
[2026-01-12T19:51:24.939Z] [BOT] 4. #💻・tech-jobs: 2 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-12T19:51:24.939Z] [BOT] [STATS] Channel stats saved
[2026-01-12T19:51:26.964Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2356) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*