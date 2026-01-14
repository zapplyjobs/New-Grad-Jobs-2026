# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T21:54:17.026Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T21:53:25.252Z] ========================================
[2026-01-14T21:53:25.254Z] Discord Bot Execution Log
[2026-01-14T21:53:25.254Z] Environment: GitHub Actions
[2026-01-14T21:53:25.254Z] Node Version: v20.19.6
[2026-01-14T21:53:25.254Z] ========================================
[2026-01-14T21:53:25.254Z] Environment Variables Check:
[2026-01-14T21:53:25.254Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T21:53:25.254Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T21:53:25.254Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T21:53:25.255Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T21:53:25.255Z] 
Multi-Channel Configuration:
[2026-01-14T21:53:25.255Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T21:53:25.255Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T21:53:25.255Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T21:53:25.255Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T21:53:25.255Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T21:53:25.255Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T21:53:25.255Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T21:53:25.255Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T21:53:25.255Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T21:53:25.255Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T21:53:25.255Z] 
Data Files Check:
[2026-01-14T21:53:25.256Z] .github/data/new_jobs.json: ✅ Exists (10 items, 68042 bytes)
[2026-01-14T21:53:25.262Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 770750 bytes)
[2026-01-14T21:53:25.262Z] 
========================================
[2026-01-14T21:53:25.262Z] Starting Enhanced Discord Bot...
[2026-01-14T21:53:25.262Z] ========================================
[2026-01-14T21:53:25.774Z] [BOT] ✅ Loaded V2 database: 1447 jobs
[2026-01-14T21:53:26.299Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T21:53:26.300Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T21:53:26.300Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T21:53:26.412Z] [BOT] ✅ Loaded pending queue: 2735 total (2715 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Entry Level Software Engineer at Amentum
[2026-01-14T21:53:26.414Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T21:53:26.414Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T21:53:26.414Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T21:53:26.415Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-14T21:53:26.415Z] [BOT] (2 grouped as same job with different locations)
[2026-01-14T21:53:26.416Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T21:53:26.421Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-14T21:53:26.422Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_f7a2cae4
[2026-01-14T21:53:26.422Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T21:53:26.438Z] [BOT ERROR] (node:2698) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T21:53:26.618Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・tech-jobs
[2026-01-14T21:53:26.618Z] [BOT] ✅ Industry: Entry Level Software Engineer @ ORG_f7a2cae4
[2026-01-14T21:53:28.471Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T21:53:29.971Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_f7a2cae4 (instance #1)
[2026-01-14T21:53:29.971Z] [BOT] 💾 BEFORE ARCHIVING: 1448 jobs in database
[2026-01-14T21:53:29.973Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T21:53:29.977Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-14T21:53:29.977Z] [BOT] ✅ Archiving complete: 1 archived, 1447 active
[2026-01-14T21:53:29.988Z] [BOT] 💾 Saved posted_jobs.json: 1447 active jobs
[2026-01-14T21:53:29.988Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T21:53:29.988Z] [BOT] 📍 [ROUTING] "Mandarin Language Specialist (USA-based)" @ ORG_0f2833f9
[2026-01-14T21:53:29.988Z] [BOT] Category: TECH (default)
[2026-01-14T21:53:29.988Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T21:53:30.161Z] [BOT] ✅ Created forum post: 🏢 Mandarin Language Specialist (USA-based) @ ORG_0f2833f9 in #💻・tech-jobs
[2026-01-14T21:53:30.162Z] [BOT] ✅ Industry: Mandarin Language Specialist (USA-based) @ ORG_0f2833f9
[2026-01-14T21:53:32.079Z] [BOT] ✅ Created forum post: 🏢 Mandarin Language Specialist (USA-based) @ ORG_0f2833f9 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T21:53:33.580Z] [BOT] 💾 Marked as posted: Mandarin Language Specialist (USA-based) @ ORG_0f2833f9 (instance #1)
[2026-01-14T21:53:33.580Z] [BOT] 💾 BEFORE ARCHIVING: 1448 jobs in database
[2026-01-14T21:53:33.581Z] [BOT] ✅ No jobs to archive (all 1448 jobs within 7-day window)
[2026-01-14T21:53:33.589Z] [BOT] 💾 Saved posted_jobs.json: 1448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:53:33.590Z] [BOT] 📍 [ROUTING] "Farsi Language Specialist" @ ORG_0f2833f9
[2026-01-14T21:53:33.590Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T21:53:33.867Z] [BOT] ✅ Created forum post: 🏢 Farsi Language Specialist @ ORG_0f2833f9 in #💻・tech-jobs
  ✅ Industry: Farsi Language Specialist @ ORG_0f2833f9
[2026-01-14T21:53:35.650Z] [BOT] ✅ Created forum post: 🏢 Farsi Language Specialist @ ORG_0f2833f9 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T21:53:37.151Z] [BOT] 💾 Marked as posted: Farsi Language Specialist @ ORG_0f2833f9 (instance #1)
[2026-01-14T21:53:37.151Z] [BOT] 💾 BEFORE ARCHIVING: 1449 jobs in database
[2026-01-14T21:53:37.152Z] [BOT] ✅ No jobs to archive (all 1449 jobs within 7-day window)
[2026-01-14T21:53:37.163Z] [BOT] 💾 Saved posted_jobs.json: 1449 active jobs
[2026-01-14T21:53:37.163Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T21:53:37.163Z] [BOT] 📍 [ROUTING] "Search Quality Rater - English" @ ORG_f3ae3598
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T21:53:37.388Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater - English @ ORG_f3ae3598 in #💻・tech-jobs
[2026-01-14T21:53:37.388Z] [BOT] ✅ Industry: Search Quality Rater - English @ ORG_f3ae3598
[2026-01-14T21:53:39.191Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater - English @ ORG_f3ae3598 in #💻・remote-usa
[2026-01-14T21:53:39.191Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T21:53:40.692Z] [BOT] 💾 Marked as posted: Search Quality Rater - English @ ORG_f3ae3598 (instance #1)
[2026-01-14T21:53:40.692Z] [BOT] 💾 BEFORE ARCHIVING: 1450 jobs in database
[2026-01-14T21:53:40.693Z] [BOT] ✅ No jobs to archive (all 1450 jobs within 7-day window)
[2026-01-14T21:53:40.703Z] [BOT] 💾 Saved posted_jobs.json: 1450 active jobs
[2026-01-14T21:53:40.703Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T21:53:40.703Z] [BOT] 📍 [ROUTING] "AV Engineer (Contractor)" @ instacart
[2026-01-14T21:53:40.704Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T21:53:40.900Z] [BOT] ✅ Created forum post: 🏢 AV Engineer (Contractor) @ instacart in #💻・tech-jobs
  ✅ Industry: AV Engineer (Contractor) @ instacart
[2026-01-14T21:53:42.966Z] [BOT] ✅ Created forum post: 🏢 AV Engineer (Contractor) @ instacart in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T21:53:44.467Z] [BOT] 💾 Marked as posted: AV Engineer (Contractor) @ instacart (instance #1)
[2026-01-14T21:53:44.467Z] [BOT] 💾 BEFORE ARCHIVING: 1451 jobs in database
[2026-01-14T21:53:44.468Z] [BOT] ✅ No jobs to archive (all 1451 jobs within 7-day window)
[2026-01-14T21:53:44.478Z] [BOT] 💾 Saved posted_jobs.json: 1451 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:53:44.478Z] [BOT] 📍 [ROUTING] "Product Designer, AI Models" @ figma
[2026-01-14T21:53:44.478Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T21:53:44.654Z] [BOT] ✅ Created forum post: 🏢 Product Designer, AI Models @ figma in #💻・tech-jobs
  ✅ Industry: Product Designer, AI Models @ figma
[2026-01-14T21:53:46.354Z] [BOT] ✅ Created forum post: 🏢 Product Designer, AI Models @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T21:53:47.855Z] [BOT] 💾 Marked as posted: Product Designer, AI Models @ figma (instance #1)
[2026-01-14T21:53:47.855Z] [BOT] 💾 BEFORE ARCHIVING: 1452 jobs in database
[2026-01-14T21:53:47.856Z] [BOT] ✅ No jobs to archive (all 1452 jobs within 7-day window)
[2026-01-14T21:53:47.866Z] [BOT] 💾 Saved posted_jobs.json: 1452 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:53:50.867Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-14T21:53:50.867Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Cosmology - Spherex Galaxy Clusters" @ ORG_a867f63f National Laboratory
[2026-01-14T21:53:50.867Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-14T21:53:51.193Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Cosmology - Spherex Galaxy Clusters @ ORG_a867f63f National Laboratory in #📈・JID_fb739488
[2026-01-14T21:53:51.194Z] [BOT] ✅ Industry: Postdoctoral Appointee - Cosmology - Spherex Galaxy Clusters @ ORG_a867f63f National Laboratory
[2026-01-14T21:53:52.963Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Cosmology - Spherex Galaxy Clusters @ ORG_a867f63f National Laboratory in #🌆・chicago
[2026-01-14T21:53:52.963Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-14T21:53:54.464Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Cosmology - Spherex Galaxy Clusters @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-14T21:53:54.464Z] [BOT] 💾 BEFORE ARCHIVING: 1453 jobs in database
[2026-01-14T21:53:54.465Z] [BOT] ✅ No jobs to archive (all 1453 jobs within 7-day window)
[2026-01-14T21:53:54.474Z] [BOT] 💾 Saved posted_jobs.json: 1453 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:53:54.475Z] [BOT] 📍 [ROUTING] "Data Science Associate" @ ORG_2ed8b806
[2026-01-14T21:53:54.475Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T21:53:54.728Z] [BOT] ✅ Created forum post: 🏢 Data Science Associate @ ORG_2ed8b806 in #📈・JID_fb739488
[2026-01-14T21:53:54.728Z] [BOT] ✅ Industry: Data Science Associate @ ORG_2ed8b806
[2026-01-14T21:53:56.397Z] [BOT] ✅ Created forum post: 🏢 Data Science Associate @ ORG_2ed8b806 in #🗽・new-york
[2026-01-14T21:53:56.398Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T21:53:57.898Z] [BOT] 💾 Marked as posted: Data Science Associate @ ORG_2ed8b806 (instance #1)
[2026-01-14T21:53:57.898Z] [BOT] 💾 BEFORE ARCHIVING: 1454 jobs in database
[2026-01-14T21:53:57.899Z] [BOT] ✅ No jobs to archive (all 1454 jobs within 7-day window)
[2026-01-14T21:53:57.909Z] [BOT] 💾 Saved posted_jobs.json: 1454 active jobs
[2026-01-14T21:53:57.909Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T21:54:00.910Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-14T21:54:00.910Z] [BOT] 📍 [ROUTING] "Security Engineer" @ nominal
[2026-01-14T21:54:00.911Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T21:54:01.211Z] [BOT] ✅ Created forum post: 🏢 Security Engineer @ nominal in #🤖・ai-jobs
  ✅ Industry: Security Engineer @ nominal
[2026-01-14T21:54:02.901Z] [BOT] ✅ Created forum post: 🏢 Security Engineer @ nominal in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T21:54:04.402Z] [BOT] 💾 Marked as posted: Security Engineer @ nominal (instance #1)
[2026-01-14T21:54:04.402Z] [BOT] 💾 BEFORE ARCHIVING: 1455 jobs in database
[2026-01-14T21:54:04.403Z] [BOT] ✅ No jobs to archive (all 1455 jobs within 7-day window)
[2026-01-14T21:54:04.415Z] [BOT] 💾 Saved posted_jobs.json: 1455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:54:07.415Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-14T21:54:07.415Z] [BOT] 📍 [ROUTING] "Executive Assistant, Marketing & Communications" @ figma
[2026-01-14T21:54:07.416Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T21:54:07.608Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant, Marketing & Communications @ figma in #💲・sales-jobs
  ✅ Industry: Executive Assistant, Marketing & Communications @ figma
[2026-01-14T21:54:09.504Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant, Marketing & Communications @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T21:54:11.005Z] [BOT] 💾 Marked as posted: Executive Assistant, Marketing & Communications @ figma (instance #1)
[2026-01-14T21:54:11.005Z] [BOT] 💾 BEFORE ARCHIVING: 1456 jobs in database
[2026-01-14T21:54:11.007Z] [BOT] ✅ No jobs to archive (all 1456 jobs within 7-day window)
[2026-01-14T21:54:11.018Z] [BOT] 💾 Saved posted_jobs.json: 1456 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T21:54:14.018Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T21:54:14.018Z] [BOT] ⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_075f104c-1_r0149307 (posted within 7 days)
[2026-01-14T21:54:14.019Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_28e98feb-_421458-1 (posted within 7 days)
[2026-01-14T21:54:14.019Z] [BOT] ⏭️  Skipping duplicate: JID_c10b686b (posted within 7 days)
[2026-01-14T21:54:14.019Z] [BOT] ⏭️  Skipping duplicate: JID_85302569 (posted within 7 days)
[2026-01-14T21:54:14.019Z] [BOT] ⏭️  Skipping duplicate: JID_4ae9a1c4 (posted within 7 days)
[2026-01-14T21:54:14.019Z] [BOT] ⏭️  Skipping duplicate: JID_d8cb55fd (posted within 7 days)
⏭️  Skipping duplicate: JID_83cd810e (posted within 7 days)
[2026-01-14T21:54:14.019Z] [BOT] ⏭️  Skipping duplicate: JID_305597dd (posted within 7 days)
⏭️  Skipping duplicate: JID_ca830686 (posted within 7 days)
[2026-01-14T21:54:14.019Z] [BOT] ⏭️  Skipping duplicate: JID_731a6fae (posted within 7 days)
[2026-01-14T21:54:14.135Z] [BOT] ✅ Loaded pending queue: 2735 total (2715 pending, 20 enriched, 0 posted)
[2026-01-14T21:54:14.302Z] [BOT] ✅ Saved pending queue: 2735 total (2715 pending, 10 enriched, 10 posted)
[2026-01-14T21:54:14.302Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T21:54:14.356Z] [BOT] 📂 Loaded 3585 existing routing entries
[2026-01-14T21:54:14.417Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3595
[2026-01-14T21:54:14.417Z] [BOT] Timestamp: 2026-01-14T21:54:14.402Z
[2026-01-14T21:54:14.417Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 20
[2026-01-14T21:54:14.417Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T21:54:14.418Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
[2026-01-14T21:54:14.418Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #💻・remote-usa: 4 posts
     3. #🌉・san-francisco: 3 posts
[2026-01-14T21:54:14.418Z] [BOT] 4. #📈・JID_fb739488: 2 posts
     5. #🗽・new-york: 2 posts
[STATS] Channel stats saved
[2026-01-14T21:54:16.443Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2698) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*