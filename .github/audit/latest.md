# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T07:17:08.542Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T07:16:13.094Z] ========================================
[2026-01-13T07:16:13.096Z] Discord Bot Execution Log
[2026-01-13T07:16:13.096Z] Environment: GitHub Actions
[2026-01-13T07:16:13.096Z] Node Version: v20.19.6
[2026-01-13T07:16:13.096Z] ========================================
[2026-01-13T07:16:13.096Z] Environment Variables Check:
[2026-01-13T07:16:13.096Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T07:16:13.096Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T07:16:13.096Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T07:16:13.096Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T07:16:13.096Z] 
Multi-Channel Configuration:
[2026-01-13T07:16:13.097Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T07:16:13.097Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T07:16:13.097Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T07:16:13.097Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T07:16:13.097Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T07:16:13.097Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T07:16:13.097Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T07:16:13.097Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T07:16:13.097Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T07:16:13.097Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T07:16:13.097Z] 
Data Files Check:
[2026-01-13T07:16:13.098Z] .github/data/new_jobs.json: ✅ Exists (10 items, 140244 bytes)
[2026-01-13T07:16:13.101Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 436357 bytes)
[2026-01-13T07:16:13.101Z] 
========================================
[2026-01-13T07:16:13.102Z] Starting Enhanced Discord Bot...
[2026-01-13T07:16:13.102Z] ========================================
[2026-01-13T07:16:13.611Z] [BOT] ✅ Loaded V2 database: 829 jobs
[2026-01-13T07:16:14.508Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T07:16:14.509Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T07:16:14.509Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T07:16:14.621Z] [BOT] ✅ Loaded pending queue: 2697 total (2677 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist at CACI
[2026-01-13T07:16:14.624Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T07:16:14.624Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T07:16:14.624Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T07:16:14.625Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T07:16:14.625Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T07:16:14.630Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T07:16:14.631Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_1954b120
[2026-01-13T07:16:14.631Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T07:16:14.635Z] [BOT ERROR] (node:3340) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T07:16:14.823Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_1954b120 in #📈・JID_fb739488
[2026-01-13T07:16:14.823Z] [BOT] ✅ Industry: Data Scientist @ ORG_1954b120
[2026-01-13T07:16:16.646Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_1954b120 in #💻・remote-usa
[2026-01-13T07:16:16.646Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T07:16:18.147Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_1954b120 (instance #1)
[2026-01-13T07:16:18.147Z] [BOT] 💾 BEFORE ARCHIVING: 830 jobs in database
[2026-01-13T07:16:18.148Z] [BOT] ✅ No jobs to archive (all 830 jobs within 7-day window)
[2026-01-13T07:16:18.157Z] [BOT] 💾 Saved posted_jobs.json: 830 active jobs
[2026-01-13T07:16:18.157Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:16:21.157Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-13T07:16:21.158Z] [BOT] 📍 [ROUTING] "Director of Sales, Scaled Vendor Sales" @ spotify
[2026-01-13T07:16:21.158Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T07:16:21.386Z] [BOT] ✅ Created forum post: 🏢 Director of Sales, Scaled Vendor Sales @ spotify in #🤖・ai-jobs
[2026-01-13T07:16:21.386Z] [BOT] ✅ Industry: Director of Sales, Scaled Vendor Sales @ spotify
[2026-01-13T07:16:23.140Z] [BOT] ✅ Created forum post: 🏢 Director of Sales, Scaled Vendor Sales @ spotify in #🗽・new-york
[2026-01-13T07:16:23.140Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T07:16:24.641Z] [BOT] 💾 Marked as posted: Director of Sales, Scaled Vendor Sales @ spotify (instance #1)
[2026-01-13T07:16:24.641Z] [BOT] 💾 BEFORE ARCHIVING: 831 jobs in database
[2026-01-13T07:16:24.642Z] [BOT] ✅ No jobs to archive (all 831 jobs within 7-day window)
[2026-01-13T07:16:24.649Z] [BOT] 💾 Saved posted_jobs.json: 831 active jobs
[2026-01-13T07:16:24.649Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:16:27.650Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-13T07:16:27.650Z] [BOT] 📍 [ROUTING] "Senior Director, Corporate Development" @ discord
[2026-01-13T07:16:27.650Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T07:16:27.938Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Corporate Development @ discord in #📣・marketing-jobs
  ✅ Industry: Senior Director, Corporate Development @ discord
[2026-01-13T07:16:29.619Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Corporate Development @ discord in #🌉・san-francisco
[2026-01-13T07:16:29.619Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T07:16:31.120Z] [BOT] 💾 Marked as posted: Senior Director, Corporate Development @ discord (instance #1)
[2026-01-13T07:16:31.120Z] [BOT] 💾 BEFORE ARCHIVING: 832 jobs in database
[2026-01-13T07:16:31.121Z] [BOT] ✅ No jobs to archive (all 832 jobs within 7-day window)
[2026-01-13T07:16:31.128Z] [BOT] 💾 Saved posted_jobs.json: 832 active jobs
[2026-01-13T07:16:31.128Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:16:34.128Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-13T07:16:34.128Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, New Gaming Features" @ discord
   Category: TECH (matched: "software")
[2026-01-13T07:16:34.128Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:16:34.452Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, New Gaming Features @ discord in #💻・tech-jobs
[2026-01-13T07:16:34.452Z] [BOT] ✅ Industry: Staff Software Engineer, New Gaming Features @ discord
[2026-01-13T07:16:36.395Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, New Gaming Features @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T07:16:37.895Z] [BOT] 💾 Marked as posted: Staff Software Engineer, New Gaming Features @ discord (instance #1)
[2026-01-13T07:16:37.895Z] [BOT] 💾 BEFORE ARCHIVING: 833 jobs in database
[2026-01-13T07:16:37.896Z] [BOT] ✅ No jobs to archive (all 833 jobs within 7-day window)
[2026-01-13T07:16:37.903Z] [BOT] 💾 Saved posted_jobs.json: 833 active jobs
[2026-01-13T07:16:37.903Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:16:37.903Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Player Experience" @ discord
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:16:38.101Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Player Experience @ discord in #💻・tech-jobs
[2026-01-13T07:16:38.101Z] [BOT] ✅ Industry: Staff Software Engineer, Player Experience @ discord
[2026-01-13T07:16:39.850Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Player Experience @ discord in #🌉・san-francisco
[2026-01-13T07:16:39.850Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T07:16:41.350Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Player Experience @ discord (instance #1)
[2026-01-13T07:16:41.350Z] [BOT] 💾 BEFORE ARCHIVING: 834 jobs in database
[2026-01-13T07:16:41.351Z] [BOT] ✅ No jobs to archive (all 834 jobs within 7-day window)
[2026-01-13T07:16:41.357Z] [BOT] 💾 Saved posted_jobs.json: 834 active jobs
[2026-01-13T07:16:41.358Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:16:41.358Z] [BOT] 📍 [ROUTING] "Associate – Application Engineer" @ ORG_86a62f4a
   Category: TECH (matched: "engineer/engineering")
[2026-01-13T07:16:41.358Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T07:16:41.590Z] [BOT] ✅ Created forum post: 🏢 Associate – Application Engineer @ ORG_86a62f4a in #💻・tech-jobs
  ✅ Industry: Associate – Application Engineer @ ORG_86a62f4a
[2026-01-13T07:16:43.364Z] [BOT] ✅ Created forum post: 🏢 Associate – Application Engineer @ ORG_86a62f4a in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T07:16:44.864Z] [BOT] 💾 Marked as posted: Associate – Application Engineer @ ORG_86a62f4a (instance #1)
[2026-01-13T07:16:44.864Z] [BOT] 💾 BEFORE ARCHIVING: 835 jobs in database
[2026-01-13T07:16:44.865Z] [BOT] ✅ No jobs to archive (all 835 jobs within 7-day window)
[2026-01-13T07:16:44.871Z] [BOT] 💾 Saved posted_jobs.json: 835 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:16:47.871Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-13T07:16:47.871Z] [BOT] 📍 [ROUTING] "Partner Development Manager, Build Partners" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-13T07:16:47.871Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T07:16:48.274Z] [BOT] ✅ Created forum post: 🏢 Partner Development Manager, Build Partners @ anthropic in #💲・sales-jobs
  ✅ Industry: Partner Development Manager, Build Partners @ anthropic
[2026-01-13T07:16:49.985Z] [BOT] ✅ Created forum post: 🏢 Partner Development Manager, Build Partners @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T07:16:51.486Z] [BOT] 💾 Marked as posted: Partner Development Manager, Build Partners @ anthropic (instance #1)
[2026-01-13T07:16:51.486Z] [BOT] 💾 BEFORE ARCHIVING: 836 jobs in database
[2026-01-13T07:16:51.487Z] [BOT] ✅ No jobs to archive (all 836 jobs within 7-day window)
[2026-01-13T07:16:51.494Z] [BOT] 💾 Saved posted_jobs.json: 836 active jobs
[2026-01-13T07:16:51.494Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:16:51.495Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Colo & Networks" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-13T07:16:51.495Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T07:16:51.688Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Colo & Networks @ anthropic in #💲・sales-jobs
[2026-01-13T07:16:51.688Z] [BOT] ✅ Industry: Commercial Counsel, Colo & Networks @ anthropic
[2026-01-13T07:16:53.455Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Colo & Networks @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T07:16:54.956Z] [BOT] 💾 Marked as posted: Commercial Counsel, Colo & Networks @ anthropic (instance #1)
[2026-01-13T07:16:54.956Z] [BOT] 💾 BEFORE ARCHIVING: 837 jobs in database
[2026-01-13T07:16:54.957Z] [BOT] ✅ No jobs to archive (all 837 jobs within 7-day window)
[2026-01-13T07:16:54.964Z] [BOT] 💾 Saved posted_jobs.json: 837 active jobs
[2026-01-13T07:16:54.964Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:16:54.964Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Compute & Infrastructure" @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T07:16:55.271Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Compute & Infrastructure @ anthropic in #💲・sales-jobs
  ✅ Industry: Commercial Counsel, Compute & Infrastructure @ anthropic
[2026-01-13T07:16:57.016Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Compute & Infrastructure @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T07:16:58.516Z] [BOT] 💾 Marked as posted: Commercial Counsel, Compute & Infrastructure @ anthropic (instance #1)
[2026-01-13T07:16:58.516Z] [BOT] 💾 BEFORE ARCHIVING: 838 jobs in database
[2026-01-13T07:16:58.516Z] [BOT] ✅ No jobs to archive (all 838 jobs within 7-day window)
[2026-01-13T07:16:58.523Z] [BOT] 💾 Saved posted_jobs.json: 838 active jobs
[2026-01-13T07:16:58.523Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T07:16:58.523Z] [BOT] 📍 [ROUTING] "Commercial Counsel, Datacenters & Construction" @ anthropic
[2026-01-13T07:16:58.523Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T07:16:58.746Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Datacenters & Construction @ anthropic in #💲・sales-jobs
  ✅ Industry: Commercial Counsel, Datacenters & Construction @ anthropic
[2026-01-13T07:17:00.449Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, Datacenters & Construction @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T07:17:01.949Z] [BOT] 💾 Marked as posted: Commercial Counsel, Datacenters & Construction @ anthropic (instance #1)
[2026-01-13T07:17:01.950Z] [BOT] 💾 BEFORE ARCHIVING: 839 jobs in database
[2026-01-13T07:17:01.950Z] [BOT] ✅ No jobs to archive (all 839 jobs within 7-day window)
[2026-01-13T07:17:01.957Z] [BOT] 💾 Saved posted_jobs.json: 839 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T07:17:04.957Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T07:17:04.957Z] [BOT] ⏭️  Skipping duplicate: JID_f5db701e-scientist_320662 (posted within 7 days)
[2026-01-13T07:17:04.957Z] [BOT] ⏭️  Skipping duplicate: JID_d03a4142 (posted within 7 days)
[2026-01-13T07:17:04.957Z] [BOT] ⏭️  Skipping duplicate: JID_015a83de (posted within 7 days)
[2026-01-13T07:17:04.958Z] [BOT] ⏭️  Skipping duplicate: JID_8f7b81a6 (posted within 7 days)
⏭️  Skipping duplicate: JID_d9a2c64b (posted within 7 days)
[2026-01-13T07:17:04.958Z] [BOT] ⏭️  Skipping duplicate: JID_7a5477b6 (posted within 7 days)
[2026-01-13T07:17:04.958Z] [BOT] ⏭️  Skipping duplicate: JID_d761c3b9-blackrock_professional-JID_dd388114-engineer_r258341-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_c9e10682 (posted within 7 days)
[2026-01-13T07:17:04.958Z] [BOT] ⏭️  Skipping duplicate: JID_8d505e85 (posted within 7 days)
[2026-01-13T07:17:04.958Z] [BOT] ⏭️  Skipping duplicate: JID_dd670afe (posted within 7 days)
[2026-01-13T07:17:05.075Z] [BOT] ✅ Loaded pending queue: 2697 total (2677 pending, 20 enriched, 0 posted)
[2026-01-13T07:17:05.245Z] [BOT] ✅ Saved pending queue: 2697 total (2677 pending, 10 enriched, 10 posted)
[2026-01-13T07:17:05.245Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T07:17:05.295Z] [BOT] 📂 Loaded 2965 existing routing entries
[2026-01-13T07:17:05.352Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2975
   Timestamp: 2026-01-13T07:17:05.339Z
[2026-01-13T07:17:05.352Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T07:17:05.352Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-13T07:17:05.353Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-13T07:17:05.353Z] [BOT] Total posts: 20
   Channels used: 8
   Top channels:
     1. #🌉・san-francisco: 7 posts
     2. #💲・sales-jobs: 4 posts
     3. #💻・tech-jobs: 3 posts
[2026-01-13T07:17:05.353Z] [BOT] 4. #🗽・new-york: 2 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-13T07:17:05.353Z] [BOT] [STATS] Channel stats saved
[2026-01-13T07:17:07.379Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3340) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*