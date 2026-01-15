# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T00:13:22.735Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T00:12:25.450Z] ========================================
[2026-01-15T00:12:25.452Z] Discord Bot Execution Log
[2026-01-15T00:12:25.452Z] Environment: GitHub Actions
[2026-01-15T00:12:25.452Z] Node Version: v20.19.6
[2026-01-15T00:12:25.452Z] ========================================
[2026-01-15T00:12:25.452Z] Environment Variables Check:
[2026-01-15T00:12:25.452Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T00:12:25.452Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T00:12:25.452Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T00:12:25.453Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T00:12:25.453Z] 
Multi-Channel Configuration:
[2026-01-15T00:12:25.453Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T00:12:25.453Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T00:12:25.453Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T00:12:25.453Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T00:12:25.453Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T00:12:25.453Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T00:12:25.453Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T00:12:25.453Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T00:12:25.453Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T00:12:25.453Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T00:12:25.453Z] 
Data Files Check:
[2026-01-15T00:12:25.455Z] .github/data/new_jobs.json: ✅ Exists (10 items, 180076 bytes)
[2026-01-15T00:12:25.461Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 815933 bytes)
[2026-01-15T00:12:25.461Z] 
========================================
[2026-01-15T00:12:25.461Z] Starting Enhanced Discord Bot...
[2026-01-15T00:12:25.461Z] ========================================
[2026-01-15T00:12:25.921Z] [BOT] ✅ Loaded V2 database: 1534 jobs
[2026-01-15T00:12:26.624Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T00:12:26.625Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T00:12:26.625Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T00:12:26.773Z] [BOT] ✅ Loaded pending queue: 2732 total (2712 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-15T00:12:26.775Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer, Growth & Monetization at figma
[2026-01-15T00:12:26.777Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T00:12:26.778Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T00:12:26.778Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T00:12:26.779Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T00:12:26.779Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T00:12:26.782Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-15T00:12:26.783Z] [BOT] 📍 [ROUTING] "Software Engineer, Growth & Monetization" @ figma
[2026-01-15T00:12:26.783Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T00:12:26.800Z] [BOT ERROR] (node:2638) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T00:12:27.244Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Growth & Monetization @ figma in #📈・JID_fb739488
  ✅ Industry: Software Engineer, Growth & Monetization @ figma
[2026-01-15T00:12:28.969Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Growth & Monetization @ figma in #🌉・san-francisco
[2026-01-15T00:12:28.970Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T00:12:30.470Z] [BOT] 💾 Marked as posted: Software Engineer, Growth & Monetization @ figma (instance #1)
[2026-01-15T00:12:30.471Z] [BOT] 💾 BEFORE ARCHIVING: 1535 jobs in database
[2026-01-15T00:12:30.472Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T00:12:30.473Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-15T00:12:30.474Z] [BOT] ✅ Archiving complete: 9 archived, 1526 active
[2026-01-15T00:12:30.483Z] [BOT] 💾 Saved posted_jobs.json: 1526 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:12:30.483Z] [BOT] 📍 [ROUTING] "Data Engineer" @ figma
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-15T00:12:30.483Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T00:12:30.772Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ figma in #📈・JID_fb739488
[2026-01-15T00:12:30.772Z] [BOT] ✅ Industry: Data Engineer @ figma
[2026-01-15T00:12:32.564Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T00:12:34.064Z] [BOT] 💾 Marked as posted: Data Engineer @ figma (instance #1)
[2026-01-15T00:12:34.065Z] [BOT] 💾 BEFORE ARCHIVING: 1527 jobs in database
[2026-01-15T00:12:34.066Z] [BOT] ✅ No jobs to archive (all 1527 jobs within 7-day window)
[2026-01-15T00:12:34.075Z] [BOT] 💾 Saved posted_jobs.json: 1527 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:12:37.077Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T00:12:37.078Z] [BOT] 📍 [ROUTING] "Software Engineer, AI Product" @ figma
   Category: AI (matched: "machine learning")
[2026-01-15T00:12:37.078Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T00:12:37.483Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, AI Product @ figma in #🤖・ai-jobs
  ✅ Industry: Software Engineer, AI Product @ figma
[2026-01-15T00:12:39.184Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, AI Product @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T00:12:40.686Z] [BOT] 💾 Marked as posted: Software Engineer, AI Product @ figma (instance #1)
💾 BEFORE ARCHIVING: 1528 jobs in database
[2026-01-15T00:12:40.687Z] [BOT] ✅ No jobs to archive (all 1528 jobs within 7-day window)
[2026-01-15T00:12:40.699Z] [BOT] 💾 Saved posted_jobs.json: 1528 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:12:40.699Z] [BOT] 📍 [ROUTING] "Software Engineer, Data Infrastructure" @ figma
   Category: AI (matched: "machine learning")
[2026-01-15T00:12:40.699Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T00:12:40.959Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Data Infrastructure @ figma in #🤖・ai-jobs
[2026-01-15T00:12:40.959Z] [BOT] ✅ Industry: Software Engineer, Data Infrastructure @ figma
[2026-01-15T00:12:42.808Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Data Infrastructure @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T00:12:44.309Z] [BOT] 💾 Marked as posted: Software Engineer, Data Infrastructure @ figma (instance #1)
[2026-01-15T00:12:44.310Z] [BOT] 💾 BEFORE ARCHIVING: 1529 jobs in database
[2026-01-15T00:12:44.311Z] [BOT] ✅ No jobs to archive (all 1529 jobs within 7-day window)
[2026-01-15T00:12:44.322Z] [BOT] 💾 Saved posted_jobs.json: 1529 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:12:44.322Z] [BOT] 📍 [ROUTING] "Software Engineer, Machine Learning" @ figma
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T00:12:44.323Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T00:12:44.535Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Machine Learning @ figma in #🤖・ai-jobs
[2026-01-15T00:12:44.535Z] [BOT] ✅ Industry: Software Engineer, Machine Learning @ figma
[2026-01-15T00:12:46.560Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Machine Learning @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T00:12:48.062Z] [BOT] 💾 Marked as posted: Software Engineer, Machine Learning @ figma (instance #1)
[2026-01-15T00:12:48.062Z] [BOT] 💾 BEFORE ARCHIVING: 1530 jobs in database
[2026-01-15T00:12:48.063Z] [BOT] ✅ No jobs to archive (all 1530 jobs within 7-day window)
[2026-01-15T00:12:48.077Z] [BOT] 💾 Saved posted_jobs.json: 1530 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:12:51.077Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-15T00:12:51.077Z] [BOT] 📍 [ROUTING] "Software Engineer, Production Engineering" @ figma
   Category: TECH (matched: "software")
[2026-01-15T00:12:51.078Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T00:12:52.379Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Production Engineering @ figma in #💻・tech-jobs
[2026-01-15T00:12:52.380Z] [BOT] ✅ Industry: Software Engineer, Production Engineering @ figma
[2026-01-15T00:12:54.165Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Production Engineering @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T00:12:55.666Z] [BOT] 💾 Marked as posted: Software Engineer, Production Engineering @ figma (instance #1)
💾 BEFORE ARCHIVING: 1531 jobs in database
[2026-01-15T00:12:55.667Z] [BOT] ✅ No jobs to archive (all 1531 jobs within 7-day window)
[2026-01-15T00:12:55.679Z] [BOT] 💾 Saved posted_jobs.json: 1531 active jobs
[2026-01-15T00:12:55.679Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T00:12:55.679Z] [BOT] 📍 [ROUTING] "Security Engineer" @ figma
[2026-01-15T00:12:55.680Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T00:12:55.929Z] [BOT] ✅ Created forum post: 🏢 Security Engineer @ figma in #💻・tech-jobs
  ✅ Industry: Security Engineer @ figma
[2026-01-15T00:12:57.691Z] [BOT] ✅ Created forum post: 🏢 Security Engineer @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T00:12:59.193Z] [BOT] 💾 Marked as posted: Security Engineer @ figma (instance #1)
💾 BEFORE ARCHIVING: 1532 jobs in database
[2026-01-15T00:12:59.194Z] [BOT] ✅ No jobs to archive (all 1532 jobs within 7-day window)
[2026-01-15T00:12:59.205Z] [BOT] 💾 Saved posted_jobs.json: 1532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:13:02.206Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-15T00:13:02.207Z] [BOT] 📍 [ROUTING] "Product Manager, Design Tools" @ figma
[2026-01-15T00:13:02.207Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-15T00:13:02.505Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Design Tools @ figma in #📦・product-jobs
  ✅ Industry: Product Manager, Design Tools @ figma
[2026-01-15T00:13:04.517Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Design Tools @ figma in #🌉・san-francisco
[2026-01-15T00:13:04.517Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T00:13:06.018Z] [BOT] 💾 Marked as posted: Product Manager, Design Tools @ figma (instance #1)
[2026-01-15T00:13:06.018Z] [BOT] 💾 BEFORE ARCHIVING: 1533 jobs in database
[2026-01-15T00:13:06.019Z] [BOT] ✅ No jobs to archive (all 1533 jobs within 7-day window)
[2026-01-15T00:13:06.029Z] [BOT] 💾 Saved posted_jobs.json: 1533 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:13:09.030Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-15T00:13:09.030Z] [BOT] 📍 [ROUTING] "Account Executive, Federal" @ figma
[2026-01-15T00:13:09.030Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T00:13:09.594Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Federal @ figma in #💲・sales-jobs
  ✅ Industry: Account Executive, Federal @ figma
[2026-01-15T00:13:11.302Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Federal @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T00:13:12.802Z] [BOT] 💾 Marked as posted: Account Executive, Federal @ figma (instance #1)
[2026-01-15T00:13:12.802Z] [BOT] 💾 BEFORE ARCHIVING: 1534 jobs in database
[2026-01-15T00:13:12.803Z] [BOT] ✅ No jobs to archive (all 1534 jobs within 7-day window)
[2026-01-15T00:13:12.815Z] [BOT] 💾 Saved posted_jobs.json: 1534 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:13:12.815Z] [BOT] 📍 [ROUTING] "Account Executive, Mid-Market" @ figma
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T00:13:12.988Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid-Market @ figma in #💲・sales-jobs
  ✅ Industry: Account Executive, Mid-Market @ figma
[2026-01-15T00:13:14.722Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid-Market @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T00:13:16.223Z] [BOT] 💾 Marked as posted: Account Executive, Mid-Market @ figma (instance #1)
[2026-01-15T00:13:16.223Z] [BOT] 💾 BEFORE ARCHIVING: 1535 jobs in database
[2026-01-15T00:13:16.224Z] [BOT] ✅ No jobs to archive (all 1535 jobs within 7-day window)
[2026-01-15T00:13:16.237Z] [BOT] 💾 Saved posted_jobs.json: 1535 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:13:19.237Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T00:13:19.238Z] [BOT] ⏭️  Skipping duplicate: JID_706f4ec3 (posted within 7 days)
[2026-01-15T00:13:19.238Z] [BOT] ⏭️  Skipping duplicate: JID_9f11100b (posted within 7 days)
[2026-01-15T00:13:19.238Z] [BOT] ⏭️  Skipping duplicate: JID_7da35187 (posted within 7 days)
[2026-01-15T00:13:19.238Z] [BOT] ⏭️  Skipping duplicate: JID_d1705dde (posted within 7 days)
⏭️  Skipping duplicate: JID_b3ffe9c8 (posted within 7 days)
[2026-01-15T00:13:19.238Z] [BOT] ⏭️  Skipping duplicate: JID_c9eca1fb (posted within 7 days)
[2026-01-15T00:13:19.238Z] [BOT] ⏭️  Skipping duplicate: JID_069bd987 (posted within 7 days)
[2026-01-15T00:13:19.239Z] [BOT] ⏭️  Skipping duplicate: JID_fc4f97d1 (posted within 7 days)
[2026-01-15T00:13:19.239Z] [BOT] ⏭️  Skipping duplicate: JID_64794b1b (posted within 7 days)
[2026-01-15T00:13:19.239Z] [BOT] ⏭️  Skipping duplicate: JID_c3b4db6b (posted within 7 days)
[2026-01-15T00:13:19.391Z] [BOT] ✅ Loaded pending queue: 2732 total (2712 pending, 20 enriched, 0 posted)
[2026-01-15T00:13:19.557Z] [BOT] ✅ Saved pending queue: 2732 total (2712 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-15T00:13:19.557Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-15T00:13:19.615Z] [BOT] 📂 Loaded 3675 existing routing entries
[2026-01-15T00:13:19.674Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3685
[2026-01-15T00:13:19.674Z] [BOT] Timestamp: 2026-01-15T00:13:19.662Z
[2026-01-15T00:13:19.675Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 20
[2026-01-15T00:13:19.675Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-15T00:13:19.675Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
[2026-01-15T00:13:19.675Z] [BOT] Channels used: 6
   Top channels:
[2026-01-15T00:13:19.675Z] [BOT] 1. #🌉・san-francisco: 10 posts
[2026-01-15T00:13:19.675Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #📈・JID_fb739488: 2 posts
     4. #💻・tech-jobs: 2 posts
     5. #💲・sales-jobs: 2 posts
[2026-01-15T00:13:19.676Z] [BOT] [STATS] Channel stats saved
[2026-01-15T00:13:21.694Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2638) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*