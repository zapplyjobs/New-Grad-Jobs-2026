# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T14:05:42.942Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T14:04:50.939Z] ========================================
[2026-01-03T14:04:50.941Z] Discord Bot Execution Log
[2026-01-03T14:04:50.941Z] Environment: GitHub Actions
[2026-01-03T14:04:50.941Z] Node Version: v20.19.6
[2026-01-03T14:04:50.941Z] ========================================
[2026-01-03T14:04:50.941Z] Environment Variables Check:
[2026-01-03T14:04:50.941Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T14:04:50.941Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T14:04:50.941Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T14:04:50.941Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T14:04:50.941Z] 
Multi-Channel Configuration:
[2026-01-03T14:04:50.942Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T14:04:50.942Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T14:04:50.942Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T14:04:50.942Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T14:04:50.942Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T14:04:50.942Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T14:04:50.942Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T14:04:50.942Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T14:04:50.942Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T14:04:50.942Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T14:04:50.942Z] 
Data Files Check:
[2026-01-03T14:04:50.944Z] .github/data/new_jobs.json: ✅ Exists (10 items, 167021 bytes)
[2026-01-03T14:04:50.946Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 267688 bytes)
[2026-01-03T14:04:50.946Z] 
========================================
[2026-01-03T14:04:50.946Z] Starting Enhanced Discord Bot...
[2026-01-03T14:04:50.946Z] ========================================
[2026-01-03T14:04:51.478Z] [BOT] ✅ Loaded V2 database: 513 jobs
[2026-01-03T14:04:52.144Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T14:04:52.144Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T14:04:52.145Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T14:04:52.148Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T14:04:52.218Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T14:04:52.314Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T14:04:52.316Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T14:04:52.317Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T14:04:52.317Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T14:04:52.318Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T14:04:52.318Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T14:04:52.323Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-03T14:04:52.323Z] [BOT] 📍 [ROUTING] "Protocol Sales Associate" @ coinbase
[2026-01-03T14:04:52.324Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T14:04:52.329Z] [BOT ERROR] (node:2317) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T14:04:52.499Z] [BOT] ✅ Created forum post: 🏢 Protocol Sales Associate @ coinbase in #🤖・ai-jobs
[2026-01-03T14:04:52.499Z] [BOT] ✅ Industry: Protocol Sales Associate @ coinbase
[2026-01-03T14:04:54.201Z] [BOT] ✅ Created forum post: 🏢 Protocol Sales Associate @ coinbase in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T14:04:55.702Z] [BOT] 💾 Marked as posted: Protocol Sales Associate @ coinbase (instance #1)
[2026-01-03T14:04:55.702Z] [BOT] 💾 BEFORE ARCHIVING: 514 jobs in database
[2026-01-03T14:04:55.702Z] [BOT] ✅ No jobs to archive (all 514 jobs within 7-day window)
[2026-01-03T14:04:55.716Z] [BOT] 💾 Saved posted_jobs.json: 514 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T14:04:55.717Z] [BOT] 📍 [ROUTING] "Senior Client Partner, Large Customer Sales (Retail Beauty)" @ reddit
[2026-01-03T14:04:55.717Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T14:04:55.903Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (Retail Beauty) @ reddit in #🤖・ai-jobs
  ✅ Industry: Senior Client Partner, Large Customer Sales (Retail Beauty) @ reddit
[2026-01-03T14:04:57.620Z] [BOT] ✅ Created forum post: 🏢 Senior Client Partner, Large Customer Sales (Retail Beauty) @ reddit in #🗽・new-york
[2026-01-03T14:04:57.620Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T14:04:59.120Z] [BOT] 💾 Marked as posted: Senior Client Partner, Large Customer Sales (Retail Beauty) @ reddit (instance #1)
[2026-01-03T14:04:59.121Z] [BOT] 💾 BEFORE ARCHIVING: 515 jobs in database
[2026-01-03T14:04:59.121Z] [BOT] ✅ No jobs to archive (all 515 jobs within 7-day window)
[2026-01-03T14:04:59.126Z] [BOT] 💾 Saved posted_jobs.json: 515 active jobs
[2026-01-03T14:04:59.126Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:04:59.126Z] [BOT] 📍 [ROUTING] "FP&A Analyst, Strategic Planning" @ spotify
[2026-01-03T14:04:59.127Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T14:04:59.386Z] [BOT] ✅ Created forum post: 🏢 FP&A Analyst, Strategic Planning @ spotify in #🤖・ai-jobs
[2026-01-03T14:04:59.386Z] [BOT] ✅ Industry: FP&A Analyst, Strategic Planning @ spotify
[2026-01-03T14:05:01.120Z] [BOT] ✅ Created forum post: 🏢 FP&A Analyst, Strategic Planning @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T14:05:02.620Z] [BOT] 💾 Marked as posted: FP&A Analyst, Strategic Planning @ spotify (instance #1)
[2026-01-03T14:05:02.621Z] [BOT] 💾 BEFORE ARCHIVING: 516 jobs in database
[2026-01-03T14:05:02.621Z] [BOT] ✅ No jobs to archive (all 516 jobs within 7-day window)
[2026-01-03T14:05:02.626Z] [BOT] 💾 Saved posted_jobs.json: 516 active jobs
[2026-01-03T14:05:02.626Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:05:05.627Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-03T14:05:05.627Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, New Gaming Features" @ discord
   Category: TECH (matched: "software")
[2026-01-03T14:05:05.627Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T14:05:06.027Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, New Gaming Features @ discord in #💻・tech-jobs
  ✅ Industry: Staff Software Engineer, New Gaming Features @ discord
[2026-01-03T14:05:07.833Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, New Gaming Features @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:05:09.333Z] [BOT] 💾 Marked as posted: Staff Software Engineer, New Gaming Features @ discord (instance #1)
[2026-01-03T14:05:09.333Z] [BOT] 💾 BEFORE ARCHIVING: 517 jobs in database
[2026-01-03T14:05:09.334Z] [BOT] ✅ No jobs to archive (all 517 jobs within 7-day window)
[2026-01-03T14:05:09.338Z] [BOT] 💾 Saved posted_jobs.json: 517 active jobs
[2026-01-03T14:05:09.339Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:05:09.339Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Player Experience" @ discord
[2026-01-03T14:05:09.339Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T14:05:09.557Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Player Experience @ discord in #💻・tech-jobs
  ✅ Industry: Staff Software Engineer, Player Experience @ discord
[2026-01-03T14:05:11.264Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Player Experience @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:05:12.764Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Player Experience @ discord (instance #1)
[2026-01-03T14:05:12.765Z] [BOT] 💾 BEFORE ARCHIVING: 518 jobs in database
[2026-01-03T14:05:12.765Z] [BOT] ✅ No jobs to archive (all 518 jobs within 7-day window)
[2026-01-03T14:05:12.770Z] [BOT] 💾 Saved posted_jobs.json: 518 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T14:05:15.770Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T14:05:15.770Z] [BOT] 📍 [ROUTING] "Partner Development Manager, Build Partners" @ anthropic
[2026-01-03T14:05:15.770Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T14:05:15.977Z] [BOT] ✅ Created forum post: 🏢 Partner Development Manager, Build Partners @ anthropic in #💲・sales-jobs
  ✅ Industry: Partner Development Manager, Build Partners @ anthropic
[2026-01-03T14:05:17.862Z] [BOT] ✅ Created forum post: 🏢 Partner Development Manager, Build Partners @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:05:19.364Z] [BOT] 💾 Marked as posted: Partner Development Manager, Build Partners @ anthropic (instance #1)
[2026-01-03T14:05:19.364Z] [BOT] 💾 BEFORE ARCHIVING: 519 jobs in database
[2026-01-03T14:05:19.364Z] [BOT] ✅ No jobs to archive (all 519 jobs within 7-day window)
[2026-01-03T14:05:19.369Z] [BOT] 💾 Saved posted_jobs.json: 519 active jobs
[2026-01-03T14:05:19.369Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:05:19.370Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Compute & Infrastructure" @ anthropic
[2026-01-03T14:05:19.370Z] [BOT] Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T14:05:19.656Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Compute & Infrastructure @ anthropic in #💲・sales-jobs
  ✅ Industry: Commercial Counsel, Compute & Infrastructure @ anthropic
[2026-01-03T14:05:21.465Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Compute & Infrastructure @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:05:22.967Z] [BOT] 💾 Marked as posted: Commercial Counsel, Compute & Infrastructure @ anthropic (instance #1)
[2026-01-03T14:05:22.967Z] [BOT] 💾 BEFORE ARCHIVING: 520 jobs in database
[2026-01-03T14:05:22.967Z] [BOT] ✅ No jobs to archive (all 520 jobs within 7-day window)
[2026-01-03T14:05:22.972Z] [BOT] 💾 Saved posted_jobs.json: 520 active jobs
[2026-01-03T14:05:22.972Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:05:22.973Z] [BOT] 📍 [ROUTING] "Head of Global Reseller Partnerships" @ anthropic
[2026-01-03T14:05:22.973Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T14:05:23.167Z] [BOT] ✅ Created forum post: 🏢 Head of Global Reseller Partnerships @ anthropic in #💲・sales-jobs
[2026-01-03T14:05:23.167Z] [BOT] ✅ Industry: Head of Global Reseller Partnerships @ anthropic
[2026-01-03T14:05:24.955Z] [BOT] ✅ Created forum post: 🏢 Head of Global Reseller Partnerships @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:05:26.456Z] [BOT] 💾 Marked as posted: Head of Global Reseller Partnerships @ anthropic (instance #1)
[2026-01-03T14:05:26.456Z] [BOT] 💾 BEFORE ARCHIVING: 521 jobs in database
[2026-01-03T14:05:26.456Z] [BOT] ✅ No jobs to archive (all 521 jobs within 7-day window)
[2026-01-03T14:05:26.461Z] [BOT] 💾 Saved posted_jobs.json: 521 active jobs
[2026-01-03T14:05:26.461Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:05:29.461Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-03T14:05:29.462Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Colo & Networks" @ anthropic
[2026-01-03T14:05:29.462Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T14:05:29.888Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Colo & Networks @ anthropic in #💰・finance-jobs
  ✅ Industry: Commercial Counsel, Colo & Networks @ anthropic
[2026-01-03T14:05:31.943Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Colo & Networks @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:05:33.443Z] [BOT] 💾 Marked as posted: Commercial Counsel, Colo & Networks @ anthropic (instance #1)
[2026-01-03T14:05:33.443Z] [BOT] 💾 BEFORE ARCHIVING: 522 jobs in database
[2026-01-03T14:05:33.444Z] [BOT] ✅ No jobs to archive (all 522 jobs within 7-day window)
[2026-01-03T14:05:33.448Z] [BOT] 💾 Saved posted_jobs.json: 522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T14:05:33.449Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Datacenters & Construction" @ anthropic
[2026-01-03T14:05:33.449Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T14:05:33.723Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Datacenters & Construction @ anthropic in #💰・finance-jobs
  ✅ Industry: Commercial Counsel, Datacenters & Construction @ anthropic
[2026-01-03T14:05:35.425Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Datacenters & Construction @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T14:05:36.926Z] [BOT] 💾 Marked as posted: Commercial Counsel, Datacenters & Construction @ anthropic (instance #1)
[2026-01-03T14:05:36.926Z] [BOT] 💾 BEFORE ARCHIVING: 523 jobs in database
[2026-01-03T14:05:36.926Z] [BOT] ✅ No jobs to archive (all 523 jobs within 7-day window)
[2026-01-03T14:05:36.931Z] [BOT] 💾 Saved posted_jobs.json: 523 active jobs
[2026-01-03T14:05:36.931Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T14:05:39.931Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T14:05:39.931Z] [BOT] ⏭️  Skipping duplicate: JID_f40b49ed (posted within 7 days)
[2026-01-03T14:05:39.931Z] [BOT] ⏭️  Skipping duplicate: JID_8f7b81a6 (posted within 7 days)
⏭️  Skipping duplicate: JID_d9a2c64b (posted within 7 days)
[2026-01-03T14:05:39.931Z] [BOT] ⏭️  Skipping duplicate: JID_7a5477b6 (posted within 7 days)
[2026-01-03T14:05:39.931Z] [BOT] ⏭️  Skipping duplicate: JID_c9e10682 (posted within 7 days)
⏭️  Skipping duplicate: JID_8d505e85 (posted within 7 days)
[2026-01-03T14:05:39.932Z] [BOT] ⏭️  Skipping duplicate: JID_179ab7ca (posted within 7 days)
[2026-01-03T14:05:39.932Z] [BOT] ⏭️  Skipping duplicate: JID_dd670afe (posted within 7 days)
[2026-01-03T14:05:39.932Z] [BOT] ⏭️  Skipping duplicate: JID_61d9ceb5 (posted within 7 days)
[2026-01-03T14:05:39.932Z] [BOT] ⏭️  Skipping duplicate: JID_3e9d0ef2 (posted within 7 days)
[2026-01-03T14:05:39.996Z] [BOT] ✅ Loaded pending queue: 776 total (756 pending, 20 enriched, 0 posted)
[2026-01-03T14:05:40.087Z] [BOT] ✅ Saved pending queue: 776 total (756 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T14:05:40.087Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T14:05:40.132Z] [BOT] 📂 Loaded 1488 existing routing entries
[2026-01-03T14:05:40.179Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1498
   Timestamp: 2026-01-03T14:05:40.172Z
[2026-01-03T14:05:40.180Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T14:05:40.180Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-03T14:05:40.180Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T14:05:40.180Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 7 posts
[2026-01-03T14:05:40.180Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #🗽・new-york: 3 posts
     4. #💲・sales-jobs: 3 posts
     5. #💻・tech-jobs: 2 posts
[2026-01-03T14:05:40.180Z] [BOT] [STATS] Channel stats saved
[2026-01-03T14:05:42.194Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2317) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*