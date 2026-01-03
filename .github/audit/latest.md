# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T19:49:42.678Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T19:49:06.693Z] ========================================
[2026-01-03T19:49:06.695Z] Discord Bot Execution Log
[2026-01-03T19:49:06.695Z] Environment: GitHub Actions
[2026-01-03T19:49:06.695Z] Node Version: v20.19.6
[2026-01-03T19:49:06.695Z] ========================================
[2026-01-03T19:49:06.695Z] Environment Variables Check:
[2026-01-03T19:49:06.695Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T19:49:06.695Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T19:49:06.695Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T19:49:06.695Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T19:49:06.695Z] 
Multi-Channel Configuration:
[2026-01-03T19:49:06.695Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T19:49:06.696Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T19:49:06.696Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T19:49:06.696Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T19:49:06.696Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T19:49:06.696Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T19:49:06.696Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T19:49:06.696Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T19:49:06.696Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T19:49:06.696Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T19:49:06.696Z] 
Data Files Check:
[2026-01-03T19:49:06.698Z] .github/data/new_jobs.json: ✅ Exists (10 items, 217113 bytes)
[2026-01-03T19:49:06.700Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 381144 bytes)
[2026-01-03T19:49:06.701Z] 
========================================
[2026-01-03T19:49:06.701Z] Starting Enhanced Discord Bot...
[2026-01-03T19:49:06.701Z] ========================================
[2026-01-03T19:49:07.208Z] [BOT] ✅ Loaded V2 database: 743 jobs
[2026-01-03T19:49:08.154Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T19:49:08.154Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T19:49:08.155Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T19:49:08.156Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T19:49:08.225Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T19:49:08.316Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T19:49:08.318Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T19:49:08.318Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T19:49:08.319Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T19:49:08.319Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-03T19:49:08.320Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T19:49:08.321Z] [BOT] 📌 Posting 8 jobs to #🤖・ai-jobs
[2026-01-03T19:49:08.323Z] [BOT] 📍 [ROUTING] "Senior AML Investigations Trainer" @ coinbase
[2026-01-03T19:49:08.323Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:49:08.328Z] [BOT ERROR] (node:2534) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T19:49:08.598Z] [BOT] ✅ Created forum post: 🏢 Senior AML Investigations Trainer @ coinbase in #🤖・ai-jobs
  ✅ Industry: Senior AML Investigations Trainer @ coinbase
[2026-01-03T19:49:10.101Z] [BOT] 💾 Marked as posted: Senior AML Investigations Trainer @ coinbase (instance #1)
[2026-01-03T19:49:10.101Z] [BOT] 💾 BEFORE ARCHIVING: 744 jobs in database
[2026-01-03T19:49:10.102Z] [BOT] ✅ No jobs to archive (all 744 jobs within 7-day window)
[2026-01-03T19:49:10.110Z] [BOT] 💾 Saved posted_jobs.json: 744 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:49:10.112Z] [BOT] 📍 [ROUTING] "Senior Client Strategist, Coinbase Asset Management (Capital Formation)" @ coinbase
[2026-01-03T19:49:10.112Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:49:10.292Z] [BOT] ✅ Created forum post: 🏢 Senior Client Strategist, Coinbase Asset Management (Capital Formation) @ coinbase in #🤖・ai-jobs
[2026-01-03T19:49:10.292Z] [BOT] ✅ Industry: Senior Client Strategist, Coinbase Asset Management (Capital Formation) @ coinbase
[2026-01-03T19:49:12.131Z] [BOT] ✅ Created forum post: 🏢 Senior Client Strategist, Coinbase Asset Management (Capital Formation) @ coinbase in #🗽・new-york
[2026-01-03T19:49:12.131Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T19:49:13.632Z] [BOT] 💾 Marked as posted: Senior Client Strategist, Coinbase Asset Management (Capital Formation) @ coinbase (instance #1)
[2026-01-03T19:49:13.632Z] [BOT] 💾 BEFORE ARCHIVING: 745 jobs in database
[2026-01-03T19:49:13.632Z] [BOT] ✅ No jobs to archive (all 745 jobs within 7-day window)
[2026-01-03T19:49:13.637Z] [BOT] 💾 Saved posted_jobs.json: 745 active jobs
[2026-01-03T19:49:13.638Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:49:13.638Z] [BOT] 📍 [ROUTING] "Supervisor, Customer Success Team" @ coinbase
[2026-01-03T19:49:13.639Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:49:13.846Z] [BOT] ✅ Created forum post: 🏢 Supervisor, Customer Success Team @ coinbase in #🤖・ai-jobs
  ✅ Industry: Supervisor, Customer Success Team @ coinbase
[2026-01-03T19:49:15.346Z] [BOT] 💾 Marked as posted: Supervisor, Customer Success Team @ coinbase (instance #1)
[2026-01-03T19:49:15.347Z] [BOT] 💾 BEFORE ARCHIVING: 746 jobs in database
[2026-01-03T19:49:15.347Z] [BOT] ✅ No jobs to archive (all 746 jobs within 7-day window)
[2026-01-03T19:49:15.352Z] [BOT] 💾 Saved posted_jobs.json: 746 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:49:15.353Z] [BOT] 💾 Marked as posted: Supervisor, Customer Success Team @ coinbase (instance #1)
[2026-01-03T19:49:15.353Z] [BOT] 💾 BEFORE ARCHIVING: 747 jobs in database
[2026-01-03T19:49:15.353Z] [BOT] ✅ No jobs to archive (all 747 jobs within 7-day window)
[2026-01-03T19:49:15.358Z] [BOT] 💾 Saved posted_jobs.json: 747 active jobs
[2026-01-03T19:49:15.358Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:49:15.359Z] [BOT] 📍 [ROUTING] "Tax Information Reporting Intern" @ coinbase
[2026-01-03T19:49:15.359Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:49:15.563Z] [BOT] ✅ Created forum post: 🏢 Tax Information Reporting Intern @ coinbase in #🤖・ai-jobs
  ✅ Industry: Tax Information Reporting Intern @ coinbase
[2026-01-03T19:49:17.271Z] [BOT] ✅ Created forum post: 🏢 Tax Information Reporting Intern @ coinbase in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T19:49:18.773Z] [BOT] 💾 Marked as posted: Tax Information Reporting Intern @ coinbase (instance #1)
[2026-01-03T19:49:18.773Z] [BOT] 💾 BEFORE ARCHIVING: 748 jobs in database
[2026-01-03T19:49:18.774Z] [BOT] ✅ No jobs to archive (all 748 jobs within 7-day window)
[2026-01-03T19:49:18.780Z] [BOT] 💾 Saved posted_jobs.json: 748 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:49:18.782Z] [BOT] 📍 [ROUTING] "Tax Operations Intern" @ coinbase
[2026-01-03T19:49:18.782Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:49:19.017Z] [BOT] ✅ Created forum post: 🏢 Tax Operations Intern @ coinbase in #🤖・ai-jobs
  ✅ Industry: Tax Operations Intern @ coinbase
[2026-01-03T19:49:20.803Z] [BOT] ✅ Created forum post: 🏢 Tax Operations Intern @ coinbase in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T19:49:22.305Z] [BOT] 💾 Marked as posted: Tax Operations Intern @ coinbase (instance #1)
[2026-01-03T19:49:22.305Z] [BOT] 💾 BEFORE ARCHIVING: 749 jobs in database
[2026-01-03T19:49:22.306Z] [BOT] ✅ No jobs to archive (all 749 jobs within 7-day window)
[2026-01-03T19:49:22.311Z] [BOT] 💾 Saved posted_jobs.json: 749 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:49:22.313Z] [BOT] 📍 [ROUTING] "TMS Compliance Analyst III" @ coinbase
[2026-01-03T19:49:22.313Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:49:22.852Z] [BOT] ✅ Created forum post: 🏢 TMS Compliance Analyst III @ coinbase in #🤖・ai-jobs
  ✅ Industry: TMS Compliance Analyst III @ coinbase
[2026-01-03T19:49:24.353Z] [BOT] 💾 Marked as posted: TMS Compliance Analyst III @ coinbase (instance #1)
[2026-01-03T19:49:24.353Z] [BOT] 💾 BEFORE ARCHIVING: 750 jobs in database
[2026-01-03T19:49:24.354Z] [BOT] ✅ No jobs to archive (all 750 jobs within 7-day window)
[2026-01-03T19:49:24.360Z] [BOT] 💾 Saved posted_jobs.json: 750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:49:24.360Z] [BOT] 📍 [ROUTING] "TMS Quality Compliance Analyst III" @ coinbase
[2026-01-03T19:49:24.361Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:49:24.621Z] [BOT] ✅ Created forum post: 🏢 TMS Quality Compliance Analyst III @ coinbase in #🤖・ai-jobs
  ✅ Industry: TMS Quality Compliance Analyst III @ coinbase
[2026-01-03T19:49:26.123Z] [BOT] 💾 Marked as posted: TMS Quality Compliance Analyst III @ coinbase (instance #1)
[2026-01-03T19:49:26.123Z] [BOT] 💾 BEFORE ARCHIVING: 751 jobs in database
[2026-01-03T19:49:26.124Z] [BOT] ✅ No jobs to archive (all 751 jobs within 7-day window)
[2026-01-03T19:49:26.130Z] [BOT] 💾 Saved posted_jobs.json: 751 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:49:26.130Z] [BOT] 📍 [ROUTING] "User Researcher Intern" @ coinbase
   Category: AI (matched: "machine learning")
[2026-01-03T19:49:26.130Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:49:26.351Z] [BOT] ✅ Created forum post: 🏢 User Researcher Intern @ coinbase in #🤖・ai-jobs
  ✅ Industry: User Researcher Intern @ coinbase
[2026-01-03T19:49:28.366Z] [BOT] ✅ Created forum post: 🏢 User Researcher Intern @ coinbase in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T19:49:29.868Z] [BOT] 💾 Marked as posted: User Researcher Intern @ coinbase (instance #1)
[2026-01-03T19:49:29.868Z] [BOT] 💾 BEFORE ARCHIVING: 752 jobs in database
[2026-01-03T19:49:29.868Z] [BOT] ✅ No jobs to archive (all 752 jobs within 7-day window)
[2026-01-03T19:49:29.874Z] [BOT] 💾 Saved posted_jobs.json: 752 active jobs
[2026-01-03T19:49:29.874Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:49:32.875Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T19:49:32.875Z] [BOT] 📍 [ROUTING] "Software Engineer, Healthcare & Financial Services" @ anthropic
[2026-01-03T19:49:32.875Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T19:49:33.151Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Healthcare & Financial Services @ anthropic in #💻・tech-jobs
[2026-01-03T19:49:33.151Z] [BOT] ✅ Industry: Software Engineer, Healthcare & Financial Services @ anthropic
[2026-01-03T19:49:34.917Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Healthcare & Financial Services @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T19:49:36.417Z] [BOT] 💾 Marked as posted: Software Engineer, Healthcare & Financial Services @ anthropic (instance #1)
[2026-01-03T19:49:36.418Z] [BOT] 💾 BEFORE ARCHIVING: 753 jobs in database
[2026-01-03T19:49:36.418Z] [BOT] ✅ No jobs to archive (all 753 jobs within 7-day window)
[2026-01-03T19:49:36.425Z] [BOT] 💾 Saved posted_jobs.json: 753 active jobs
[2026-01-03T19:49:36.425Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:49:39.426Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-03T19:49:39.426Z] [BOT] ⏭️  Skipping duplicate: JID_be918f08 (posted within 7 days)
[2026-01-03T19:49:39.426Z] [BOT] ⏭️  Skipping duplicate: JID_5c36de74 (posted within 7 days)
⏭️  Skipping duplicate: JID_7bf34ecb (posted within 7 days)
[2026-01-03T19:49:39.426Z] [BOT] ⏭️  Skipping duplicate: JID_1ed2c5a5 (posted within 7 days)
[2026-01-03T19:49:39.426Z] [BOT] ⏭️  Skipping duplicate: JID_111e4b9c (posted within 7 days)
⏭️  Skipping duplicate: JID_75495f4b (posted within 7 days)
[2026-01-03T19:49:39.427Z] [BOT] ⏭️  Skipping duplicate: JID_e4b7e01a (posted within 7 days)
[2026-01-03T19:49:39.427Z] [BOT] ⏭️  Skipping duplicate: JID_d8c1abef (posted within 7 days)
[2026-01-03T19:49:39.427Z] [BOT] ⏭️  Skipping duplicate: JID_2a6e2437 (posted within 7 days)
[2026-01-03T19:49:39.471Z] [BOT] ✅ Loaded pending queue: 546 total (526 pending, 20 enriched, 0 posted)
[2026-01-03T19:49:39.531Z] [BOT] ✅ Saved pending queue: 546 total (526 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2026-01-03T19:49:39.531Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T19:49:39.577Z] [BOT] 📂 Loaded 1697 existing routing entries
[2026-01-03T19:49:39.626Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 1706
   Timestamp: 2026-01-03T19:49:39.618Z
[2026-01-03T19:49:39.627Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T19:49:39.627Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-03T19:49:39.627Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T19:49:39.627Z] [BOT] Last cleanup: Never
   Total posts: 14
   Channels used: 4
   Top channels:
     1. #🤖・ai-jobs: 8 posts
[2026-01-03T19:49:39.627Z] [BOT] 2. #🗽・new-york: 3 posts
     3. #🌉・san-francisco: 2 posts
     4. #💻・tech-jobs: 1 posts
[2026-01-03T19:49:39.627Z] [BOT] [STATS] Channel stats saved
[2026-01-03T19:49:41.644Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2534) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*