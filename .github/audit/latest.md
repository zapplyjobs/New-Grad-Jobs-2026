# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T17:07:58.197Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T17:07:32.253Z] ========================================
[2026-01-05T17:07:32.255Z] Discord Bot Execution Log
[2026-01-05T17:07:32.255Z] Environment: GitHub Actions
[2026-01-05T17:07:32.255Z] Node Version: v20.19.6
[2026-01-05T17:07:32.255Z] ========================================
[2026-01-05T17:07:32.255Z] Environment Variables Check:
[2026-01-05T17:07:32.256Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T17:07:32.256Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T17:07:32.256Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T17:07:32.256Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T17:07:32.256Z] 
Multi-Channel Configuration:
[2026-01-05T17:07:32.256Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T17:07:32.256Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T17:07:32.256Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T17:07:32.256Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T17:07:32.256Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T17:07:32.257Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T17:07:32.257Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T17:07:32.257Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T17:07:32.257Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T17:07:32.257Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T17:07:32.257Z] 
Data Files Check:
[2026-01-05T17:07:32.257Z] .github/data/new_jobs.json: ✅ Exists (10 items, 33549 bytes)
[2026-01-05T17:07:32.262Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 656773 bytes)
[2026-01-05T17:07:32.262Z] 
========================================
[2026-01-05T17:07:32.262Z] Starting Enhanced Discord Bot...
[2026-01-05T17:07:32.262Z] ========================================
[2026-01-05T17:07:32.796Z] [BOT] ✅ Loaded V2 database: 1290 jobs
[2026-01-05T17:07:33.700Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T17:07:33.700Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T17:07:33.700Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T17:07:33.701Z] [BOT] ✅ Loaded pending queue: 54 total (34 pending, 20 enriched, 0 posted)
[2026-01-05T17:07:33.701Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-05T17:07:33.702Z] [BOT] [BOT] 🔍 Sample enriched job: AI Engineer at Health Plan One
[2026-01-05T17:07:33.704Z] [BOT] ⏭️  Skipping duplicate: JID_28f307b7-naelfy26_r00304885 (posted within 7 days)
[2026-01-05T17:07:33.704Z] [BOT] ⏭️ Skipping already posted: Atc – Software and Platform Analyst at Accenture
[2026-01-05T17:07:33.704Z] [BOT] ⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_aabf8ae3-expert_req_096760 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f8acd2a at 2020 Companies
⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_5605df93-expert_req_096762-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f8acd2a at 2020 Companies
[2026-01-05T17:07:33.704Z] [BOT] 📬 Found 17 new jobs (3 already posted)...
[2026-01-05T17:07:33.705Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:07:33.705Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:07:33.705Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:07:33.705Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:07:33.705Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T17:07:33.706Z] [BOT] ✅ Loaded pending queue: 54 total (34 pending, 20 enriched, 0 posted)
[2026-01-05T17:07:33.708Z] [BOT] ✅ Saved pending queue: 42 total (34 pending, 8 enriched, 0 posted)
[2026-01-05T17:07:33.708Z] [BOT] 🗑️ Removed 12 blacklisted jobs from pending queue
📋 After blacklist filter: 5 jobs (12 blacklisted)
[2026-01-05T17:07:33.708Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-01-05T17:07:33.709Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
   (1 grouped as same job with different locations)
[2026-01-05T17:07:33.709Z] [BOT] ⏸️ Limiting to 10 jobs this run, 13 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T17:07:33.712Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-05T17:07:33.712Z] [BOT] 📍 [ROUTING] "AI Engineer" @ ORG_55898449 Plan One
[2026-01-05T17:07:33.712Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-05T17:07:33.713Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-05T17:07:33.717Z] [BOT ERROR] (node:2830) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T17:07:34.006Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ ORG_55898449 Plan One in #🤖・ai-jobs
[2026-01-05T17:07:34.007Z] [BOT] ✅ Industry: AI Engineer @ ORG_55898449 Plan One
[2026-01-05T17:07:35.508Z] [BOT] 💾 Marked as posted: AI Engineer @ ORG_55898449 Plan One (instance #1)
[2026-01-05T17:07:35.508Z] [BOT] 💾 BEFORE ARCHIVING: 1291 jobs in database
[2026-01-05T17:07:35.510Z] [BOT] ✅ No jobs to archive (all 1291 jobs within 7-day window)
[2026-01-05T17:07:35.522Z] [BOT] 💾 Saved posted_jobs.json: 1291 active jobs
[2026-01-05T17:07:35.522Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T17:07:35.522Z] [BOT] 📍 [ROUTING] "Software Engineer - Java/AI/ML/Kubernetes" @ ORG_530743c3
   Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-05T17:07:35.687Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Java/AI/ML/Kubernetes @ ORG_530743c3 in #🤖・ai-jobs
[2026-01-05T17:07:35.687Z] [BOT] ✅ Industry: Software Engineer - Java/AI/ML/Kubernetes @ ORG_530743c3
[2026-01-05T17:07:37.488Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Java/AI/ML/Kubernetes @ ORG_530743c3 in #💻・remote-usa
[2026-01-05T17:07:37.488Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-05T17:07:38.989Z] [BOT] 💾 Marked as posted: Software Engineer - Java/AI/ML/Kubernetes @ ORG_530743c3 (instance #1)
[2026-01-05T17:07:38.989Z] [BOT] 💾 BEFORE ARCHIVING: 1292 jobs in database
[2026-01-05T17:07:38.991Z] [BOT] ✅ No jobs to archive (all 1292 jobs within 7-day window)
[2026-01-05T17:07:39.000Z] [BOT] 💾 Saved posted_jobs.json: 1292 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T17:07:42.001Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-05T17:07:42.003Z] [BOT] 📍 [ROUTING] "NetSuite Implementation Consultant" @ ORG_efa4a8df
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-05T17:07:42.241Z] [BOT] ✅ Created forum post: 🏢 NetSuite Implementation Consultant @ ORG_efa4a8df in #📣・marketing-jobs
  ✅ Industry: NetSuite Implementation Consultant @ ORG_efa4a8df
[2026-01-05T17:07:43.915Z] [BOT] ✅ Created forum post: 🏢 NetSuite Implementation Consultant @ ORG_efa4a8df in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-05T17:07:45.417Z] [BOT] 💾 Marked as posted: NetSuite Implementation Consultant @ ORG_efa4a8df (instance #1)
[2026-01-05T17:07:45.417Z] [BOT] 💾 BEFORE ARCHIVING: 1293 jobs in database
[2026-01-05T17:07:45.418Z] [BOT] ✅ No jobs to archive (all 1293 jobs within 7-day window)
[2026-01-05T17:07:45.427Z] [BOT] 💾 Saved posted_jobs.json: 1293 active jobs
[2026-01-05T17:07:45.427Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T17:07:48.428Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-05T17:07:48.429Z] [BOT] 📍 [ROUTING] "Graduate 2026 Software Engineer 1 - US" @ ORG_3cfbdbc3
[2026-01-05T17:07:48.429Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-05T17:07:48.735Z] [BOT] ✅ Created forum post: 🏢 Graduate 2026 Software Engineer 1 - US @ ORG_3cfbdbc3 in #📈・JID_fb739488
[2026-01-05T17:07:48.735Z] [BOT] ✅ Industry: Graduate 2026 Software Engineer 1 - US @ ORG_3cfbdbc3
[2026-01-05T17:07:50.423Z] [BOT] ✅ Created forum post: 🏢 Graduate 2026 Software Engineer 1 - US @ ORG_3cfbdbc3 in #🌧️・seattle
[2026-01-05T17:07:50.423Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-05T17:07:51.924Z] [BOT] 💾 Marked as posted: Graduate 2026 Software Engineer 1 - US @ ORG_3cfbdbc3 (instance #1)
[2026-01-05T17:07:51.924Z] [BOT] 💾 BEFORE ARCHIVING: 1294 jobs in database
[2026-01-05T17:07:51.925Z] [BOT] ✅ No jobs to archive (all 1294 jobs within 7-day window)
[2026-01-05T17:07:51.934Z] [BOT] 💾 Saved posted_jobs.json: 1294 active jobs
[2026-01-05T17:07:51.934Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T17:07:51.934Z] [BOT] 💾 Marked as posted: Graduate 2026 Software Engineer 1 - Mobile @ ORG_3cfbdbc3 (instance #1)
[2026-01-05T17:07:51.935Z] [BOT] 💾 BEFORE ARCHIVING: 1295 jobs in database
[2026-01-05T17:07:51.935Z] [BOT] ✅ No jobs to archive (all 1295 jobs within 7-day window)
[2026-01-05T17:07:51.944Z] [BOT] 💾 Saved posted_jobs.json: 1295 active jobs
[2026-01-05T17:07:51.944Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T17:07:54.944Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-05T17:07:54.944Z] [BOT] ⏭️  Skipping duplicate: JID_eb400183-engineer_jr1412-1 (posted within 7 days)
[2026-01-05T17:07:54.944Z] [BOT] ⏭️  Skipping duplicate: JID_51a4bf73-external_careers-JID_e041c4ce-consultant_r-50086 (posted within 7 days)
[2026-01-05T17:07:54.944Z] [BOT] ⏭️  Skipping duplicate: JID_9d40eb8e (posted within 7 days)
[2026-01-05T17:07:54.944Z] [BOT] ⏭️  Skipping duplicate: JID_56b300dd (posted within 7 days)
[2026-01-05T17:07:54.945Z] [BOT] ✅ Loaded pending queue: 42 total (34 pending, 8 enriched, 0 posted)
[2026-01-05T17:07:54.946Z] [BOT] ✅ Saved pending queue: 42 total (34 pending, 4 enriched, 4 posted)
[2026-01-05T17:07:54.947Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T17:07:55.014Z] [BOT] 📂 Loaded 2199 existing routing entries
[2026-01-05T17:07:55.073Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-05T17:07:55.073Z] [BOT] Total entries: 2203
   Timestamp: 2026-01-05T17:07:55.062Z
[2026-01-05T17:07:55.074Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T17:07:55.074Z] [BOT] Total attempts: 22
   Successful: 7
   Failed: 0
   Skipped: 15
[2026-01-05T17:07:55.075Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 7
   Channels used: 6
   Top channels:
     1. #🤖・ai-jobs: 2 posts
     2. #💻・remote-usa: 1 posts
     3. #📣・marketing-jobs: 1 posts
     4. #🤠・austin: 1 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-05T17:07:55.075Z] [BOT] [STATS] Channel stats saved
[2026-01-05T17:07:57.087Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2830) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*