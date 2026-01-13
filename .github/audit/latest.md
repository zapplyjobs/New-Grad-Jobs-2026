# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T05:29:55.915Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T05:29:02.772Z] ========================================
[2026-01-13T05:29:02.774Z] Discord Bot Execution Log
[2026-01-13T05:29:02.774Z] Environment: GitHub Actions
[2026-01-13T05:29:02.774Z] Node Version: v20.19.6
[2026-01-13T05:29:02.774Z] ========================================
[2026-01-13T05:29:02.774Z] Environment Variables Check:
[2026-01-13T05:29:02.775Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T05:29:02.775Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T05:29:02.775Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T05:29:02.775Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T05:29:02.775Z] 
Multi-Channel Configuration:
[2026-01-13T05:29:02.775Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T05:29:02.775Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T05:29:02.775Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T05:29:02.775Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T05:29:02.775Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T05:29:02.775Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T05:29:02.775Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T05:29:02.775Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T05:29:02.776Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T05:29:02.776Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T05:29:02.776Z] 
Data Files Check:
[2026-01-13T05:29:02.777Z] .github/data/new_jobs.json: ✅ Exists (10 items, 85932 bytes)
[2026-01-13T05:29:02.780Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 393125 bytes)
[2026-01-13T05:29:02.780Z] 
========================================
[2026-01-13T05:29:02.780Z] Starting Enhanced Discord Bot...
[2026-01-13T05:29:02.780Z] ========================================
[2026-01-13T05:29:03.297Z] [BOT] ✅ Loaded V2 database: 748 jobs
[2026-01-13T05:29:04.272Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T05:29:04.272Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T05:29:04.272Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T05:29:04.381Z] [BOT] ✅ Loaded pending queue: 2702 total (2682 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer at The Job Sauce
[2026-01-13T05:29:04.383Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T05:29:04.384Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T05:29:04.384Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T05:29:04.385Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-13T05:29:04.385Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-13T05:29:04.385Z] [BOT] - National Channel Sales Manager, Convergint (East) @ verkada: atlanta, ga united states, jacksonville, fl united states, philadelphia, pa united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T05:29:04.390Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-13T05:29:04.391Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_b344d80e Job Sauce
[2026-01-13T05:29:04.391Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:29:04.395Z] [BOT ERROR] (node:2858) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T05:29:04.823Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_b344d80e Job Sauce in #💻・tech-jobs
[2026-01-13T05:29:04.824Z] [BOT] ✅ Industry: Software Engineer @ ORG_b344d80e Job Sauce
[2026-01-13T05:29:06.508Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_b344d80e Job Sauce in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T05:29:08.008Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_b344d80e Job Sauce (instance #1)
[2026-01-13T05:29:08.009Z] [BOT] 💾 BEFORE ARCHIVING: 749 jobs in database
[2026-01-13T05:29:08.009Z] [BOT] ✅ No jobs to archive (all 749 jobs within 7-day window)
[2026-01-13T05:29:08.019Z] [BOT] 💾 Saved posted_jobs.json: 749 active jobs
[2026-01-13T05:29:08.019Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:29:08.019Z] [BOT] 📍 [ROUTING] "Applications Development Intermediate Programmer Analyst" @ ORG_e9591c52
[2026-01-13T05:29:08.019Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:29:08.161Z] [BOT] ✅ Created forum post: 🏢 Applications Development Intermediate Programmer Analyst @ ORG_e9591c52 in #💻・tech-jobs
[2026-01-13T05:29:08.161Z] [BOT] ✅ Industry: Applications Development Intermediate Programmer Analyst @ ORG_e9591c52
[2026-01-13T05:29:09.937Z] [BOT] ✅ Created forum post: 🏢 Applications Development Intermediate Programmer Analyst @ ORG_e9591c52 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T05:29:11.437Z] [BOT] 💾 Marked as posted: Applications Development Intermediate Programmer Analyst @ ORG_e9591c52 (instance #1)
💾 BEFORE ARCHIVING: 750 jobs in database
[2026-01-13T05:29:11.438Z] [BOT] ✅ No jobs to archive (all 750 jobs within 7-day window)
[2026-01-13T05:29:11.444Z] [BOT] 💾 Saved posted_jobs.json: 750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:29:11.444Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Backend" @ ORG_b18a8c08
[2026-01-13T05:29:11.444Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:29:11.568Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Backend @ ORG_b18a8c08 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Backend @ ORG_b18a8c08
[2026-01-13T05:29:13.236Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Backend @ ORG_b18a8c08 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T05:29:14.737Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Backend @ ORG_b18a8c08 (instance #1)
[2026-01-13T05:29:14.737Z] [BOT] 💾 BEFORE ARCHIVING: 751 jobs in database
[2026-01-13T05:29:14.737Z] [BOT] ✅ No jobs to archive (all 751 jobs within 7-day window)
[2026-01-13T05:29:14.744Z] [BOT] 💾 Saved posted_jobs.json: 751 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:29:14.745Z] [BOT] 📍 [ROUTING] "Junior RUST Embedded Software Engineer (cleared)" @ ORG_c910d474 Dynamics Mission Systems
[2026-01-13T05:29:14.745Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:29:15.018Z] [BOT] ✅ Created forum post: 🏢 Junior RUST Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
  ✅ Industry: Junior RUST Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems
[2026-01-13T05:29:16.816Z] [BOT] ✅ Created forum post: 🏢 Junior RUST Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-13T05:29:18.317Z] [BOT] 💾 Marked as posted: Junior RUST Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2026-01-13T05:29:18.317Z] [BOT] 💾 BEFORE ARCHIVING: 752 jobs in database
[2026-01-13T05:29:18.318Z] [BOT] ✅ No jobs to archive (all 752 jobs within 7-day window)
[2026-01-13T05:29:18.323Z] [BOT] 💾 Saved posted_jobs.json: 752 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:29:21.324Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-13T05:29:21.325Z] [BOT] 📍 [ROUTING] "Early Career Talent - Applications Engineer - Data Science/Automation" @ ORG_d7d2f0ff Digital
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T05:29:21.325Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T05:29:21.693Z] [BOT] ✅ Created forum post: 🏢 Early Career Talent - Applications Engineer - Data Science/Automation @ ORG_d7d2f0ff Digital in #🤖・ai-jobs
  ✅ Industry: Early Career Talent - Applications Engineer - Data Science/Automation @ ORG_d7d2f0ff Digital
[2026-01-13T05:29:23.689Z] [BOT] ✅ Created forum post: 🏢 Early Career Talent - Applications Engineer - Data Science/Automation @ ORG_d7d2f0ff Digital in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T05:29:25.190Z] [BOT] 💾 Marked as posted: Early Career Talent - Applications Engineer - Data Science/Automation @ ORG_d7d2f0ff Digital (instance #1)
[2026-01-13T05:29:25.190Z] [BOT] 💾 BEFORE ARCHIVING: 753 jobs in database
[2026-01-13T05:29:25.191Z] [BOT] ✅ No jobs to archive (all 753 jobs within 7-day window)
[2026-01-13T05:29:25.197Z] [BOT] 💾 Saved posted_jobs.json: 753 active jobs
[2026-01-13T05:29:25.197Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:29:25.198Z] [BOT] 📍 [ROUTING] "Business Data Analyst" @ ORG_d31dc978
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T05:29:25.198Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T05:29:25.391Z] [BOT] ✅ Created forum post: 🏢 Business Data Analyst @ ORG_d31dc978 in #🤖・ai-jobs
  ✅ Industry: Business Data Analyst @ ORG_d31dc978
[2026-01-13T05:29:27.177Z] [BOT] ✅ Created forum post: 🏢 Business Data Analyst @ ORG_d31dc978 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T05:29:28.678Z] [BOT] 💾 Marked as posted: Business Data Analyst @ ORG_d31dc978 (instance #1)
[2026-01-13T05:29:28.678Z] [BOT] 💾 BEFORE ARCHIVING: 754 jobs in database
[2026-01-13T05:29:28.678Z] [BOT] ✅ No jobs to archive (all 754 jobs within 7-day window)
[2026-01-13T05:29:28.685Z] [BOT] 💾 Saved posted_jobs.json: 754 active jobs
[2026-01-13T05:29:28.685Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:29:28.685Z] [BOT] 📍 [ROUTING] "Senior Backend Developer" @ ORG_976dbfca
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T05:29:28.685Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T05:29:28.817Z] [BOT] ✅ Created forum post: 🏢 Senior Backend Developer @ ORG_976dbfca in #🤖・ai-jobs
  ✅ Industry: Senior Backend Developer @ ORG_976dbfca
[2026-01-13T05:29:30.455Z] [BOT] ✅ Created forum post: 🏢 Senior Backend Developer @ ORG_976dbfca in #💻・remote-usa
[2026-01-13T05:29:30.455Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T05:29:31.956Z] [BOT] 💾 Marked as posted: Senior Backend Developer @ ORG_976dbfca (instance #1)
[2026-01-13T05:29:31.956Z] [BOT] 💾 BEFORE ARCHIVING: 755 jobs in database
[2026-01-13T05:29:31.957Z] [BOT] ✅ No jobs to archive (all 755 jobs within 7-day window)
[2026-01-13T05:29:31.964Z] [BOT] 💾 Saved posted_jobs.json: 755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:29:34.965Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-13T05:29:34.965Z] [BOT] 📍 [ROUTING] "Senior Manager, Stock Administration" @ discord
[2026-01-13T05:29:34.965Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-13T05:29:35.201Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Stock Administration @ discord in #💰・finance-jobs
  ✅ Industry: Senior Manager, Stock Administration @ discord
[2026-01-13T05:29:36.889Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Stock Administration @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T05:29:38.390Z] [BOT] 💾 Marked as posted: Senior Manager, Stock Administration @ discord (instance #1)
[2026-01-13T05:29:38.390Z] [BOT] 💾 BEFORE ARCHIVING: 756 jobs in database
[2026-01-13T05:29:38.390Z] [BOT] ✅ No jobs to archive (all 756 jobs within 7-day window)
[2026-01-13T05:29:38.397Z] [BOT] 💾 Saved posted_jobs.json: 756 active jobs
[2026-01-13T05:29:38.397Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:29:41.397Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-13T05:29:41.398Z] [BOT] 📍 [ROUTING] "Sales Development Representative (AAE), Salt Lake City" @ verkada
[2026-01-13T05:29:41.398Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T05:29:41.550Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative (AAE), Salt Lake City @ verkada in #💲・sales-jobs
  ✅ Industry: Sales Development Representative (AAE), Salt Lake City @ verkada
[2026-01-13T05:29:43.051Z] [BOT] 💾 Marked as posted: Sales Development Representative (AAE), Salt Lake City @ verkada (instance #1)
[2026-01-13T05:29:43.051Z] [BOT] 💾 BEFORE ARCHIVING: 757 jobs in database
[2026-01-13T05:29:43.052Z] [BOT] ✅ No jobs to archive (all 757 jobs within 7-day window)
[2026-01-13T05:29:43.065Z] [BOT] 💾 Saved posted_jobs.json: 757 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:29:46.065Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-13T05:29:46.066Z] [BOT] 📍 [ROUTING] "People Program Manager" @ anthropic
   Category: PROJECT-MANAGEMENT (matched: "project-management")
[2026-01-13T05:29:46.066Z] [BOT] Channel: 📊・JID_9910249a (1391...1276)
[2026-01-13T05:29:46.340Z] [BOT] ✅ Created forum post: 🏢 People Program Manager @ anthropic in #📊・JID_9910249a
  ✅ Industry: People Program Manager @ anthropic
[2026-01-13T05:29:48.394Z] [BOT] ✅ Created forum post: 🏢 People Program Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T05:29:49.895Z] [BOT] 💾 Marked as posted: People Program Manager @ anthropic (instance #1)
[2026-01-13T05:29:49.895Z] [BOT] 💾 BEFORE ARCHIVING: 758 jobs in database
[2026-01-13T05:29:49.896Z] [BOT] ✅ No jobs to archive (all 758 jobs within 7-day window)
[2026-01-13T05:29:49.902Z] [BOT] 💾 Saved posted_jobs.json: 758 active jobs
[2026-01-13T05:29:49.902Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:29:52.903Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T05:29:52.903Z] [BOT] ⏭️  Skipping duplicate: JID_1bb13100 (posted within 7 days)
[2026-01-13T05:29:52.903Z] [BOT] ⏭️  Skipping duplicate: JID_a74c4f3b (posted within 7 days)
[2026-01-13T05:29:52.903Z] [BOT] ⏭️  Skipping duplicate: JID_ff11a902 (posted within 7 days)
[2026-01-13T05:29:52.903Z] [BOT] ⏭️  Skipping duplicate: JID_f3eebe33 (posted within 7 days)
[2026-01-13T05:29:52.904Z] [BOT] ⏭️  Skipping duplicate: JID_5982c0f1-officer_25926282 (posted within 7 days)
⏭️  Skipping duplicate: JID_069a63de (posted within 7 days)
[2026-01-13T05:29:52.904Z] [BOT] ⏭️  Skipping duplicate: JID_46fb8f73-cx_1-job-25910 (posted within 7 days)
⏭️  Skipping duplicate: JID_6c5ec1fe (posted within 7 days)
[2026-01-13T05:29:52.904Z] [BOT] ⏭️  Skipping duplicate: JID_15f49163 (posted within 7 days)
[2026-01-13T05:29:52.905Z] [BOT] ⏭️  Skipping duplicate: JID_0b329593 (posted within 7 days)
[2026-01-13T05:29:53.019Z] [BOT] ✅ Loaded pending queue: 2702 total (2682 pending, 20 enriched, 0 posted)
[2026-01-13T05:29:53.184Z] [BOT] ✅ Saved pending queue: 2702 total (2682 pending, 10 enriched, 10 posted)
[2026-01-13T05:29:53.184Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T05:29:53.235Z] [BOT] 📂 Loaded 2895 existing routing entries
[2026-01-13T05:29:53.291Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2905
   Timestamp: 2026-01-13T05:29:53.278Z
[2026-01-13T05:29:53.292Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T05:29:53.292Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-13T05:29:53.292Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T05:29:53.292Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #🌉・san-francisco: 4 posts
     3. #💻・remote-usa: 3 posts
[2026-01-13T05:29:53.292Z] [BOT] 4. #🤖・ai-jobs: 3 posts
     5. #🚌・boston: 1 posts
[2026-01-13T05:29:53.292Z] [BOT] [STATS] Channel stats saved
[2026-01-13T05:29:55.318Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2858) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*