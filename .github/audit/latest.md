# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T00:49:29.327Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T00:48:49.055Z] ========================================
[2026-01-14T00:48:49.057Z] Discord Bot Execution Log
[2026-01-14T00:48:49.057Z] Environment: GitHub Actions
[2026-01-14T00:48:49.057Z] Node Version: v20.19.6
[2026-01-14T00:48:49.057Z] ========================================
[2026-01-14T00:48:49.057Z] Environment Variables Check:
[2026-01-14T00:48:49.057Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T00:48:49.058Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T00:48:49.058Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T00:48:49.058Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T00:48:49.058Z] 
Multi-Channel Configuration:
[2026-01-14T00:48:49.058Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T00:48:49.058Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T00:48:49.058Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T00:48:49.058Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T00:48:49.058Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T00:48:49.058Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T00:48:49.059Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T00:48:49.059Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T00:48:49.059Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T00:48:49.059Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T00:48:49.059Z] 
Data Files Check:
[2026-01-14T00:48:49.060Z] .github/data/new_jobs.json: ✅ Exists (10 items, 195907 bytes)
[2026-01-14T00:48:49.064Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 581957 bytes)
[2026-01-14T00:48:49.064Z] 
========================================
[2026-01-14T00:48:49.065Z] Starting Enhanced Discord Bot...
[2026-01-14T00:48:49.065Z] ========================================
[2026-01-14T00:48:49.590Z] [BOT] ✅ Loaded V2 database: 1093 jobs
[2026-01-14T00:48:50.408Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T00:48:50.408Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T00:48:50.408Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T00:48:50.516Z] [BOT] ✅ Loaded pending queue: 2716 total (2696 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior AML Investigations Trainer at coinbase
[2026-01-14T00:48:50.518Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T00:48:50.518Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T00:48:50.518Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T00:48:50.519Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-14T00:48:50.519Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer I, Frontend @ Twitch: san francisco, irvine
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-14T00:48:50.520Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T00:48:50.521Z] [BOT] 📌 Posting 8 jobs to #🤖・ai-jobs
[2026-01-14T00:48:50.523Z] [BOT] 📍 [ROUTING] "Senior AML Investigations Trainer" @ coinbase
[2026-01-14T00:48:50.523Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:48:50.541Z] [BOT ERROR] (node:3366) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T00:48:50.974Z] [BOT] ✅ Created forum post: 🏢 Senior AML Investigations Trainer @ coinbase in #🤖・ai-jobs
[2026-01-14T00:48:50.974Z] [BOT] ✅ Industry: Senior AML Investigations Trainer @ coinbase
[2026-01-14T00:48:52.477Z] [BOT] 💾 Marked as posted: Senior AML Investigations Trainer @ coinbase (instance #1)
[2026-01-14T00:48:52.477Z] [BOT] 💾 BEFORE ARCHIVING: 1094 jobs in database
[2026-01-14T00:48:52.478Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T00:48:52.484Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-14T00:48:52.484Z] [BOT] ✅ Archiving complete: 6 archived, 1088 active
[2026-01-14T00:48:52.492Z] [BOT] 💾 Saved posted_jobs.json: 1088 active jobs
[2026-01-14T00:48:52.492Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T00:48:52.493Z] [BOT] 📍 [ROUTING] "Senior Client Strategist, Coinbase Asset Management (Capital Formation)" @ coinbase
[2026-01-14T00:48:52.493Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:48:52.706Z] [BOT] ✅ Created forum post: 🏢 Senior Client Strategist, Coinbase Asset Management (Capital Formation) @ coinbase in #🤖・ai-jobs
  ✅ Industry: Senior Client Strategist, Coinbase Asset Management (Capital Formation) @ coinbase
[2026-01-14T00:48:54.527Z] [BOT] ✅ Created forum post: 🏢 Senior Client Strategist, Coinbase Asset Management (Capital Formation) @ coinbase in #🗽・new-york
[2026-01-14T00:48:54.527Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T00:48:56.028Z] [BOT] 💾 Marked as posted: Senior Client Strategist, Coinbase Asset Management (Capital Formation) @ coinbase (instance #1)
[2026-01-14T00:48:56.028Z] [BOT] 💾 BEFORE ARCHIVING: 1089 jobs in database
[2026-01-14T00:48:56.029Z] [BOT] ✅ No jobs to archive (all 1089 jobs within 7-day window)
[2026-01-14T00:48:56.036Z] [BOT] 💾 Saved posted_jobs.json: 1089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T00:48:56.037Z] [BOT] 📍 [ROUTING] "Supervisor, Customer Success Team" @ coinbase
[2026-01-14T00:48:56.037Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:48:56.512Z] [BOT] ✅ Created forum post: 🏢 Supervisor, Customer Success Team @ coinbase in #🤖・ai-jobs
  ✅ Industry: Supervisor, Customer Success Team @ coinbase
[2026-01-14T00:48:58.014Z] [BOT] 💾 Marked as posted: Supervisor, Customer Success Team @ coinbase (instance #1)
💾 BEFORE ARCHIVING: 1090 jobs in database
[2026-01-14T00:48:58.015Z] [BOT] ✅ No jobs to archive (all 1090 jobs within 7-day window)
[2026-01-14T00:48:58.022Z] [BOT] 💾 Saved posted_jobs.json: 1090 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T00:48:58.022Z] [BOT] 📍 [ROUTING] "Tax Information Reporting Intern" @ coinbase
[2026-01-14T00:48:58.023Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:48:58.429Z] [BOT] ✅ Created forum post: 🏢 Tax Information Reporting Intern @ coinbase in #🤖・ai-jobs
[2026-01-14T00:48:58.429Z] [BOT] ✅ Industry: Tax Information Reporting Intern @ coinbase
[2026-01-14T00:49:00.281Z] [BOT] ✅ Created forum post: 🏢 Tax Information Reporting Intern @ coinbase in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T00:49:01.782Z] [BOT] 💾 Marked as posted: Tax Information Reporting Intern @ coinbase (instance #1)
[2026-01-14T00:49:01.782Z] [BOT] 💾 BEFORE ARCHIVING: 1091 jobs in database
[2026-01-14T00:49:01.783Z] [BOT] ✅ No jobs to archive (all 1091 jobs within 7-day window)
[2026-01-14T00:49:01.792Z] [BOT] 💾 Saved posted_jobs.json: 1091 active jobs
[2026-01-14T00:49:01.792Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T00:49:01.794Z] [BOT] 📍 [ROUTING] "Tax Operations Intern" @ coinbase
[2026-01-14T00:49:01.794Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:49:02.122Z] [BOT] ✅ Created forum post: 🏢 Tax Operations Intern @ coinbase in #🤖・ai-jobs
[2026-01-14T00:49:02.122Z] [BOT] ✅ Industry: Tax Operations Intern @ coinbase
[2026-01-14T00:49:03.844Z] [BOT] ✅ Created forum post: 🏢 Tax Operations Intern @ coinbase in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T00:49:05.344Z] [BOT] 💾 Marked as posted: Tax Operations Intern @ coinbase (instance #1)
[2026-01-14T00:49:05.344Z] [BOT] 💾 BEFORE ARCHIVING: 1092 jobs in database
[2026-01-14T00:49:05.345Z] [BOT] ✅ No jobs to archive (all 1092 jobs within 7-day window)
[2026-01-14T00:49:05.353Z] [BOT] 💾 Saved posted_jobs.json: 1092 active jobs
[2026-01-14T00:49:05.354Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T00:49:05.354Z] [BOT] 📍 [ROUTING] "TMS Compliance Analyst III" @ coinbase
[2026-01-14T00:49:05.355Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:49:05.568Z] [BOT] ✅ Created forum post: 🏢 TMS Compliance Analyst III @ coinbase in #🤖・ai-jobs
  ✅ Industry: TMS Compliance Analyst III @ coinbase
[2026-01-14T00:49:07.069Z] [BOT] 💾 Marked as posted: TMS Compliance Analyst III @ coinbase (instance #1)
[2026-01-14T00:49:07.069Z] [BOT] 💾 BEFORE ARCHIVING: 1093 jobs in database
[2026-01-14T00:49:07.070Z] [BOT] ✅ No jobs to archive (all 1093 jobs within 7-day window)
[2026-01-14T00:49:07.079Z] [BOT] 💾 Saved posted_jobs.json: 1093 active jobs
[2026-01-14T00:49:07.079Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T00:49:07.079Z] [BOT] 📍 [ROUTING] "TMS Quality Compliance Analyst III" @ coinbase
[2026-01-14T00:49:07.079Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:49:07.395Z] [BOT] ✅ Created forum post: 🏢 TMS Quality Compliance Analyst III @ coinbase in #🤖・ai-jobs
  ✅ Industry: TMS Quality Compliance Analyst III @ coinbase
[2026-01-14T00:49:08.897Z] [BOT] 💾 Marked as posted: TMS Quality Compliance Analyst III @ coinbase (instance #1)
[2026-01-14T00:49:08.897Z] [BOT] 💾 BEFORE ARCHIVING: 1094 jobs in database
[2026-01-14T00:49:08.898Z] [BOT] ✅ No jobs to archive (all 1094 jobs within 7-day window)
[2026-01-14T00:49:08.906Z] [BOT] 💾 Saved posted_jobs.json: 1094 active jobs
[2026-01-14T00:49:08.906Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T00:49:08.906Z] [BOT] 📍 [ROUTING] "User Researcher Intern" @ coinbase
[2026-01-14T00:49:08.906Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:49:09.315Z] [BOT] ✅ Created forum post: 🏢 User Researcher Intern @ coinbase in #🤖・ai-jobs
[2026-01-14T00:49:09.315Z] [BOT] ✅ Industry: User Researcher Intern @ coinbase
[2026-01-14T00:49:11.066Z] [BOT] ✅ Created forum post: 🏢 User Researcher Intern @ coinbase in #🌉・san-francisco
[2026-01-14T00:49:11.066Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T00:49:12.567Z] [BOT] 💾 Marked as posted: User Researcher Intern @ coinbase (instance #1)
[2026-01-14T00:49:12.568Z] [BOT] 💾 BEFORE ARCHIVING: 1095 jobs in database
[2026-01-14T00:49:12.568Z] [BOT] ✅ No jobs to archive (all 1095 jobs within 7-day window)
[2026-01-14T00:49:12.576Z] [BOT] 💾 Saved posted_jobs.json: 1095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T00:49:15.577Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-14T00:49:15.577Z] [BOT] 📍 [ROUTING] "Market Risk Analytics Associate, Stress Testing and AI Integration" @ ORG_02281b3b Stanley
[2026-01-14T00:49:15.577Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T00:49:15.863Z] [BOT] ✅ Created forum post: 🏢 Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-14T00:49:15.864Z] [BOT] ✅ Industry: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley
[2026-01-14T00:49:17.605Z] [BOT] ✅ Created forum post: 🏢 Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley in #🗽・new-york
[2026-01-14T00:49:17.605Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T00:49:19.106Z] [BOT] 💾 Marked as posted: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley (instance #1)
[2026-01-14T00:49:19.106Z] [BOT] 💾 BEFORE ARCHIVING: 1096 jobs in database
[2026-01-14T00:49:19.107Z] [BOT] ✅ No jobs to archive (all 1096 jobs within 7-day window)
[2026-01-14T00:49:19.115Z] [BOT] 💾 Saved posted_jobs.json: 1096 active jobs
[2026-01-14T00:49:19.115Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T00:49:19.116Z] [BOT] 📍 [ROUTING] "Applied Scientist - AI & Robotics (PhD) - Early Career" @ ORG_c910d474 Motors
[2026-01-14T00:49:19.116Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T00:49:19.368Z] [BOT] ✅ Created forum post: 🏢 Applied Scientist - AI & Robotics (PhD) - Early Career @ ORG_c910d474 Motors in #💻・tech-jobs
[2026-01-14T00:49:19.368Z] [BOT] ✅ Industry: Applied Scientist - AI & Robotics (PhD) - Early Career @ ORG_c910d474 Motors
[2026-01-14T00:49:21.083Z] [BOT] ✅ Created forum post: 🏢 Applied Scientist - AI & Robotics (PhD) - Early Career @ ORG_c910d474 Motors in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-14T00:49:22.585Z] [BOT] 💾 Marked as posted: Applied Scientist - AI & Robotics (PhD) - Early Career @ ORG_c910d474 Motors (instance #1)
[2026-01-14T00:49:22.585Z] [BOT] 💾 BEFORE ARCHIVING: 1097 jobs in database
[2026-01-14T00:49:22.586Z] [BOT] ✅ No jobs to archive (all 1097 jobs within 7-day window)
[2026-01-14T00:49:22.595Z] [BOT] 💾 Saved posted_jobs.json: 1097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T00:49:25.596Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T00:49:25.596Z] [BOT] ⏭️  Skipping duplicate: JID_be918f08 (posted within 7 days)
[2026-01-14T00:49:25.596Z] [BOT] ⏭️  Skipping duplicate: JID_5c36de74 (posted within 7 days)
[2026-01-14T00:49:25.596Z] [BOT] ⏭️  Skipping duplicate: JID_7bf34ecb (posted within 7 days)
[2026-01-14T00:49:25.596Z] [BOT] ⏭️  Skipping duplicate: JID_1ed2c5a5 (posted within 7 days)
[2026-01-14T00:49:25.597Z] [BOT] ⏭️  Skipping duplicate: JID_111e4b9c (posted within 7 days)
[2026-01-14T00:49:25.597Z] [BOT] ⏭️  Skipping duplicate: JID_75495f4b (posted within 7 days)
[2026-01-14T00:49:25.597Z] [BOT] ⏭️  Skipping duplicate: JID_e4b7e01a (posted within 7 days)
[2026-01-14T00:49:25.597Z] [BOT] ⏭️  Skipping duplicate: JID_d8c1abef (posted within 7 days)
[2026-01-14T00:49:25.597Z] [BOT] ⏭️  Skipping duplicate: JID_6804755e-integration_pt-jr025318 (posted within 7 days)
[2026-01-14T00:49:25.598Z] [BOT] ⏭️  Skipping duplicate: JID_a5ada689-careers_gm-JID_c402ef7f-career_jr-202523975 (posted within 7 days)
[2026-01-14T00:49:25.713Z] [BOT] ✅ Loaded pending queue: 2716 total (2696 pending, 20 enriched, 0 posted)
[2026-01-14T00:49:25.880Z] [BOT] ✅ Saved pending queue: 2716 total (2696 pending, 10 enriched, 10 posted)
[2026-01-14T00:49:25.880Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T00:49:25.934Z] [BOT] 📂 Loaded 3255 existing routing entries
[2026-01-14T00:49:25.993Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-14T00:49:25.993Z] [BOT] Total entries: 3265
   Timestamp: 2026-01-14T00:49:25.979Z
[2026-01-14T00:49:25.994Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T00:49:25.994Z] [BOT] Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-14T00:49:25.994Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T00:49:25.994Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 5
   Top channels:
[2026-01-14T00:49:25.994Z] [BOT] 1. #🤖・ai-jobs: 8 posts
     2. #🗽・new-york: 4 posts
     3. #💻・tech-jobs: 2 posts
     4. #🌉・san-francisco: 1 posts
     5. #🌄・mountain-view: 1 posts
[2026-01-14T00:49:25.994Z] [BOT] [STATS] Channel stats saved
[2026-01-14T00:49:28.021Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3366) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*