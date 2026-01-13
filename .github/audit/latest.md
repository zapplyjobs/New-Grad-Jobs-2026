# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T08:27:56.530Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T08:27:01.698Z] ========================================
[2026-01-13T08:27:01.700Z] Discord Bot Execution Log
[2026-01-13T08:27:01.700Z] Environment: GitHub Actions
[2026-01-13T08:27:01.700Z] Node Version: v20.19.6
[2026-01-13T08:27:01.700Z] ========================================
[2026-01-13T08:27:01.700Z] Environment Variables Check:
[2026-01-13T08:27:01.700Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T08:27:01.700Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T08:27:01.701Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T08:27:01.701Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T08:27:01.701Z] 
Multi-Channel Configuration:
[2026-01-13T08:27:01.701Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T08:27:01.701Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T08:27:01.701Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T08:27:01.701Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T08:27:01.701Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T08:27:01.701Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T08:27:01.701Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T08:27:01.701Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T08:27:01.701Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T08:27:01.702Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T08:27:01.702Z] 
Data Files Check:
[2026-01-13T08:27:01.702Z] .github/data/new_jobs.json: ✅ Exists (10 items, 60830 bytes)
[2026-01-13T08:27:01.706Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 463797 bytes)
[2026-01-13T08:27:01.706Z] 
========================================
[2026-01-13T08:27:01.706Z] Starting Enhanced Discord Bot...
[2026-01-13T08:27:01.706Z] ========================================
[2026-01-13T08:27:02.259Z] [BOT] ✅ Loaded V2 database: 878 jobs
[2026-01-13T08:27:03.137Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T08:27:03.137Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T08:27:03.137Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T08:27:03.247Z] [BOT] ✅ Loaded pending queue: 2697 total (2677 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Machine Learning Engineer at Microsoft
[2026-01-13T08:27:03.249Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T08:27:03.249Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T08:27:03.250Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T08:27:03.250Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T08:27:03.251Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-13T08:27:03.251Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T08:27:03.255Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-13T08:27:03.255Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ ORG_c7bac469
[2026-01-13T08:27:03.256Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T08:27:03.260Z] [BOT ERROR] (node:2438) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T08:27:03.486Z] [BOT] ✅ Created forum post: 🟦 Machine Learning Engineer @ ORG_c7bac469 in #🤖・ai-jobs
[2026-01-13T08:27:03.486Z] [BOT] ✅ Industry: Machine Learning Engineer @ ORG_c7bac469
[2026-01-13T08:27:05.132Z] [BOT] ✅ Created forum post: 🟦 Machine Learning Engineer @ ORG_c7bac469 in #🖥️・redmond
[2026-01-13T08:27:05.132Z] [BOT] ✅ Location: 🖥️・redmond
[2026-01-13T08:27:06.634Z] [BOT] 💾 Marked as posted: Machine Learning Engineer @ ORG_c7bac469 (instance #1)
[2026-01-13T08:27:06.634Z] [BOT] 💾 BEFORE ARCHIVING: 879 jobs in database
[2026-01-13T08:27:06.635Z] [BOT] ✅ No jobs to archive (all 879 jobs within 7-day window)
[2026-01-13T08:27:06.645Z] [BOT] 💾 Saved posted_jobs.json: 879 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:27:06.646Z] [BOT] 📍 [ROUTING] "GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering" @ ORG_36b77757
[2026-01-13T08:27:06.646Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T08:27:06.999Z] [BOT] ✅ Created forum post: 📱 GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering @ ORG_ba40a97d in #🤖・ai-jobs
[2026-01-13T08:27:07.000Z] [BOT] ✅ Industry: GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering @ ORG_36b77757
[2026-01-13T08:27:08.712Z] [BOT] ✅ Created forum post: 📱 GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering @ ORG_ba40a97d in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-13T08:27:10.212Z] [BOT] 💾 Marked as posted: GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering @ ORG_36b77757 (instance #1)
💾 BEFORE ARCHIVING: 880 jobs in database
[2026-01-13T08:27:10.213Z] [BOT] ✅ No jobs to archive (all 880 jobs within 7-day window)
[2026-01-13T08:27:10.219Z] [BOT] 💾 Saved posted_jobs.json: 880 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:27:10.220Z] [BOT] 📍 [ROUTING] "Associate C++ Engineer" @ ORG_0f5d983d Trading Company
[2026-01-13T08:27:10.220Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T08:27:10.220Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T08:27:10.386Z] [BOT] ✅ Created forum post: 🏢 Associate C++ Engineer @ ORG_0f5d983d Trading Company in #🤖・ai-jobs
  ✅ Industry: Associate C++ Engineer @ ORG_0f5d983d Trading Company
[2026-01-13T08:27:12.234Z] [BOT] ✅ Created forum post: 🏢 Associate C++ Engineer @ ORG_0f5d983d Trading Company in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-13T08:27:13.735Z] [BOT] 💾 Marked as posted: Associate C++ Engineer @ ORG_0f5d983d Trading Company (instance #1)
[2026-01-13T08:27:13.735Z] [BOT] 💾 BEFORE ARCHIVING: 881 jobs in database
[2026-01-13T08:27:13.736Z] [BOT] ✅ No jobs to archive (all 881 jobs within 7-day window)
[2026-01-13T08:27:13.744Z] [BOT] 💾 Saved posted_jobs.json: 881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:27:16.746Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-13T08:27:16.747Z] [BOT] 📍 [ROUTING] "Senior Software Engineer" @ ORG_dc7620eb
   Category: TECH (matched: "software")
[2026-01-13T08:27:16.747Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T08:27:17.151Z] [BOT] ✅ Created forum post: 🔴 Senior Software Engineer @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Senior Software Engineer @ ORG_dc7620eb
[2026-01-13T08:27:18.897Z] [BOT] ✅ Created forum post: 🔴 Senior Software Engineer @ ORG_dc7620eb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-13T08:27:20.398Z] [BOT] 💾 Marked as posted: Senior Software Engineer @ ORG_dc7620eb (instance #1)
[2026-01-13T08:27:20.398Z] [BOT] 💾 BEFORE ARCHIVING: 882 jobs in database
[2026-01-13T08:27:20.399Z] [BOT] ✅ No jobs to archive (all 882 jobs within 7-day window)
[2026-01-13T08:27:20.408Z] [BOT] 💾 Saved posted_jobs.json: 882 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:27:20.408Z] [BOT] 📍 [ROUTING] "Analyst – Analytics" @ ORG_db84132b Group
[2026-01-13T08:27:20.408Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T08:27:20.592Z] [BOT] ✅ Created forum post: 🏢 Analyst – Analytics @ ORG_db84132b Group in #💻・tech-jobs
  ✅ Industry: Analyst – Analytics @ ORG_db84132b Group
[2026-01-13T08:27:22.359Z] [BOT] ✅ Created forum post: 🏢 Analyst – Analytics @ ORG_db84132b Group in #🦢・los-angeles
[2026-01-13T08:27:22.359Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-13T08:27:23.861Z] [BOT] 💾 Marked as posted: Analyst – Analytics @ ORG_db84132b Group (instance #1)
[2026-01-13T08:27:23.861Z] [BOT] 💾 BEFORE ARCHIVING: 883 jobs in database
[2026-01-13T08:27:23.862Z] [BOT] ✅ No jobs to archive (all 883 jobs within 7-day window)
[2026-01-13T08:27:23.869Z] [BOT] 💾 Saved posted_jobs.json: 883 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:27:23.870Z] [BOT] 📍 [ROUTING] "Helix Data Creator" @ ORG_1f5be668
[2026-01-13T08:27:23.870Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T08:27:24.058Z] [BOT] ✅ Created forum post: 🏢 Helix Data Creator @ ORG_1f5be668 in #💻・tech-jobs
  ✅ Industry: Helix Data Creator @ ORG_1f5be668
[2026-01-13T08:27:25.738Z] [BOT] ✅ Created forum post: 🏢 Helix Data Creator @ ORG_1f5be668 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T08:27:27.239Z] [BOT] 💾 Marked as posted: Helix Data Creator @ ORG_1f5be668 (instance #1)
[2026-01-13T08:27:27.240Z] [BOT] 💾 BEFORE ARCHIVING: 884 jobs in database
[2026-01-13T08:27:27.240Z] [BOT] ✅ No jobs to archive (all 884 jobs within 7-day window)
[2026-01-13T08:27:27.248Z] [BOT] 💾 Saved posted_jobs.json: 884 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:27:27.248Z] [BOT] 📍 [ROUTING] "Engineer 1 - AI Business Engineer" @ ORG_d7d2f0ff Alliance
   Category: TECH (matched: "machine learning")
[2026-01-13T08:27:27.249Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T08:27:27.531Z] [BOT] ✅ Created forum post: 🏢 Engineer 1 - AI Business Engineer @ ORG_d7d2f0ff Alliance in #💻・tech-jobs
[2026-01-13T08:27:27.532Z] [BOT] ✅ Industry: Engineer 1 - AI Business Engineer @ ORG_d7d2f0ff Alliance
[2026-01-13T08:27:29.192Z] [BOT] ✅ Created forum post: 🏢 Engineer 1 - AI Business Engineer @ ORG_d7d2f0ff Alliance in #💻・remote-usa
[2026-01-13T08:27:29.193Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T08:27:30.694Z] [BOT] 💾 Marked as posted: Engineer 1 - AI Business Engineer @ ORG_d7d2f0ff Alliance (instance #1)
[2026-01-13T08:27:30.694Z] [BOT] 💾 BEFORE ARCHIVING: 885 jobs in database
[2026-01-13T08:27:30.695Z] [BOT] ✅ No jobs to archive (all 885 jobs within 7-day window)
[2026-01-13T08:27:30.701Z] [BOT] 💾 Saved posted_jobs.json: 885 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:27:33.703Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-13T08:27:33.703Z] [BOT] 📍 [ROUTING] "Product Lead, Consumer" @ anthropic
[2026-01-13T08:27:33.703Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-13T08:27:34.014Z] [BOT] ✅ Created forum post: 🏢 Product Lead, Consumer @ anthropic in #📦・product-jobs
  ✅ Industry: Product Lead, Consumer @ anthropic
[2026-01-13T08:27:35.928Z] [BOT] ✅ Created forum post: 🏢 Product Lead, Consumer @ anthropic in #🌉・san-francisco
[2026-01-13T08:27:35.928Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T08:27:37.431Z] [BOT] 💾 Marked as posted: Product Lead, Consumer @ anthropic (instance #1)
[2026-01-13T08:27:37.431Z] [BOT] 💾 BEFORE ARCHIVING: 886 jobs in database
[2026-01-13T08:27:37.432Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T08:27:37.434Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-13T08:27:37.434Z] [BOT] ✅ Archiving complete: 1 archived, 885 active
[2026-01-13T08:27:37.441Z] [BOT] 💾 Saved posted_jobs.json: 885 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:27:40.442Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-13T08:27:40.442Z] [BOT] 📍 [ROUTING] "Mining Application Specialist" @ ORG_85937e82 Inc.
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T08:27:40.598Z] [BOT] ✅ Created forum post: 🏢 Mining Application Specialist @ ORG_85937e82 Inc. in #📣・marketing-jobs
  ✅ Industry: Mining Application Specialist @ ORG_85937e82 Inc.
[2026-01-13T08:27:42.415Z] [BOT] ✅ Created forum post: 🏢 Mining Application Specialist @ ORG_85937e82 Inc. in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T08:27:43.917Z] [BOT] 💾 Marked as posted: Mining Application Specialist @ ORG_85937e82 Inc. (instance #1)
[2026-01-13T08:27:43.917Z] [BOT] 💾 BEFORE ARCHIVING: 886 jobs in database
[2026-01-13T08:27:43.918Z] [BOT] ✅ No jobs to archive (all 886 jobs within 7-day window)
[2026-01-13T08:27:43.925Z] [BOT] 💾 Saved posted_jobs.json: 886 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:27:46.927Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T08:27:46.927Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_eead3632
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-13T08:27:46.927Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T08:27:47.227Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_eead3632 in #📈・JID_fb739488
  ✅ Industry: Software Engineer @ ORG_eead3632
[2026-01-13T08:27:48.893Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_eead3632 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T08:27:50.394Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_eead3632 (instance #1)
[2026-01-13T08:27:50.394Z] [BOT] 💾 BEFORE ARCHIVING: 887 jobs in database
[2026-01-13T08:27:50.395Z] [BOT] ✅ No jobs to archive (all 887 jobs within 7-day window)
[2026-01-13T08:27:50.403Z] [BOT] 💾 Saved posted_jobs.json: 887 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T08:27:53.405Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T08:27:53.405Z] [BOT] ⏭️  Skipping duplicate: JID_66fc9bc9 (posted within 7 days)
⏭️  Skipping duplicate: JID_a669bb44 (posted within 7 days)
⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-320808 (posted within 7 days)
[2026-01-13T08:27:53.406Z] [BOT] ⏭️  Skipping duplicate: JID_d512e010-analytics_jr27759-1 (posted within 7 days)
[2026-01-13T08:27:53.406Z] [BOT] ⏭️  Skipping duplicate: JID_e7aa0831 (posted within 7 days)
[2026-01-13T08:27:53.406Z] [BOT] ⏭️  Skipping duplicate: JID_19e9684f (posted within 7 days)
[2026-01-13T08:27:53.406Z] [BOT] ⏭️  Skipping duplicate: JID_a3a25f58-engineer_r11957 (posted within 7 days)
[2026-01-13T08:27:53.406Z] [BOT] ⏭️  Skipping duplicate: JID_cce64a94-career_r0000341182 (posted within 7 days)
[2026-01-13T08:27:53.406Z] [BOT] ⏭️  Skipping duplicate: JID_0445e805 (posted within 7 days)
[2026-01-13T08:27:53.407Z] [BOT] ⏭️  Skipping duplicate: JID_8475a274 (posted within 7 days)
[2026-01-13T08:27:53.527Z] [BOT] ✅ Loaded pending queue: 2697 total (2677 pending, 20 enriched, 0 posted)
[2026-01-13T08:27:53.697Z] [BOT] ✅ Saved pending queue: 2697 total (2677 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-13T08:27:53.697Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-13T08:27:53.750Z] [BOT] 📂 Loaded 3015 existing routing entries
[2026-01-13T08:27:53.809Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T08:27:53.809Z] [BOT] Total entries: 3025
   Timestamp: 2026-01-13T08:27:53.796Z
[2026-01-13T08:27:53.810Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T08:27:53.810Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-13T08:27:53.810Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 11
[2026-01-13T08:27:53.810Z] [BOT] Top channels:
     1. #💻・tech-jobs: 4 posts
[2026-01-13T08:27:53.811Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #💻・remote-usa: 3 posts
     4. #🦢・los-angeles: 2 posts
     5. #🌉・san-francisco: 2 posts
[2026-01-13T08:27:53.811Z] [BOT] [STATS] Channel stats saved
[2026-01-13T08:27:55.836Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2438) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*