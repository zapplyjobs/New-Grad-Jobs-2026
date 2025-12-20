# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T21:05:11.567Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T21:04:29.508Z] ========================================
[2025-12-20T21:04:29.509Z] Discord Bot Execution Log
[2025-12-20T21:04:29.509Z] Environment: GitHub Actions
[2025-12-20T21:04:29.510Z] Node Version: v20.19.6
[2025-12-20T21:04:29.510Z] ========================================
[2025-12-20T21:04:29.510Z] Environment Variables Check:
[2025-12-20T21:04:29.510Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T21:04:29.510Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T21:04:29.510Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T21:04:29.510Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T21:04:29.510Z] 
Multi-Channel Configuration:
[2025-12-20T21:04:29.510Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T21:04:29.510Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T21:04:29.510Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T21:04:29.511Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T21:04:29.511Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T21:04:29.511Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T21:04:29.511Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T21:04:29.511Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T21:04:29.511Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T21:04:29.511Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T21:04:29.511Z] 
Data Files Check:
[2025-12-20T21:04:29.511Z] .github/data/new_jobs.json: ✅ Exists (10 items, 31946 bytes)
[2025-12-20T21:04:29.515Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 418166 bytes)
[2025-12-20T21:04:29.515Z] 
========================================
[2025-12-20T21:04:29.515Z] Starting Enhanced Discord Bot...
[2025-12-20T21:04:29.515Z] ========================================
[2025-12-20T21:04:30.034Z] [BOT] ✅ Loaded V2 database: 717 jobs
[2025-12-20T21:04:30.784Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T21:04:30.785Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T21:04:30.785Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T21:04:30.785Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T21:04:30.828Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-20T21:04:30.872Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 47
[2025-12-20T21:04:30.874Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T21:04:30.874Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T21:04:30.875Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T21:04:30.875Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2025-12-20T21:04:30.876Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T21:04:30.879Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-20T21:04:30.880Z] [BOT] 📍 [ROUTING] "Software Engineer - Full-Stack" @ ORG_e09a2b12
[2025-12-20T21:04:30.880Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T21:04:30.897Z] [BOT ERROR] (node:2765) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T21:04:31.105Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Full-Stack @ ORG_e09a2b12 in #🤖・ai-jobs
[2025-12-20T21:04:31.105Z] [BOT] ✅ Industry: Software Engineer - Full-Stack @ ORG_e09a2b12
[2025-12-20T21:04:32.826Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Full-Stack @ ORG_e09a2b12 in #💻・remote-usa
[2025-12-20T21:04:32.826Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T21:04:34.327Z] [BOT] 💾 Marked as posted: Software Engineer - Full-Stack @ ORG_e09a2b12 (instance #1)
[2025-12-20T21:04:34.327Z] [BOT] 💾 BEFORE ARCHIVING: 718 jobs in database
[2025-12-20T21:04:34.328Z] [BOT] ✅ No jobs to archive (all 718 jobs within 7-day window)
[2025-12-20T21:04:34.338Z] [BOT] 💾 Saved posted_jobs.json: 718 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:04:34.339Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - E-Commerce Governance - PhD" @ ORG_08c9a13c
[2025-12-20T21:04:34.339Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T21:04:34.589Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-20T21:04:34.589Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c
[2025-12-20T21:04:36.303Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-20T21:04:37.804Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c (instance #1)
💾 BEFORE ARCHIVING: 719 jobs in database
[2025-12-20T21:04:37.805Z] [BOT] ✅ No jobs to archive (all 719 jobs within 7-day window)
[2025-12-20T21:04:37.810Z] [BOT] 💾 Saved posted_jobs.json: 719 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:04:37.811Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c (instance #1)
[2025-12-20T21:04:37.811Z] [BOT] 💾 BEFORE ARCHIVING: 720 jobs in database
[2025-12-20T21:04:37.811Z] [BOT] ✅ No jobs to archive (all 720 jobs within 7-day window)
[2025-12-20T21:04:37.817Z] [BOT] 💾 Saved posted_jobs.json: 720 active jobs
[2025-12-20T21:04:37.817Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T21:04:37.817Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM" @ ORG_08c9a13c
[2025-12-20T21:04:37.817Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T21:04:37.817Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T21:04:38.007Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM @ ORG_08c9a13c
[2025-12-20T21:04:39.700Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T21:04:41.201Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM @ ORG_08c9a13c (instance #1)
[2025-12-20T21:04:41.201Z] [BOT] 💾 BEFORE ARCHIVING: 721 jobs in database
[2025-12-20T21:04:41.202Z] [BOT] ✅ No jobs to archive (all 721 jobs within 7-day window)
[2025-12-20T21:04:41.209Z] [BOT] 💾 Saved posted_jobs.json: 721 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:04:44.209Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-20T21:04:44.211Z] [BOT] 📍 [ROUTING] "EGSE Software Engineer - Labview Specialist" @ ORG_7265ce52 Space Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:04:44.453Z] [BOT] ✅ Created forum post: 🏢 EGSE Software Engineer - Labview Specialist @ ORG_7265ce52 Space Systems in #💻・tech-jobs
[2025-12-20T21:04:44.453Z] [BOT] ✅ Industry: EGSE Software Engineer - Labview Specialist @ ORG_7265ce52 Space Systems
[2025-12-20T21:04:46.253Z] [BOT] ✅ Created forum post: 🏢 EGSE Software Engineer - Labview Specialist @ ORG_7265ce52 Space Systems in #🦢・los-angeles
[2025-12-20T21:04:46.253Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-20T21:04:47.753Z] [BOT] 💾 Marked as posted: EGSE Software Engineer - Labview Specialist @ ORG_7265ce52 Space Systems (instance #1)
[2025-12-20T21:04:47.753Z] [BOT] 💾 BEFORE ARCHIVING: 722 jobs in database
[2025-12-20T21:04:47.754Z] [BOT] ✅ No jobs to archive (all 722 jobs within 7-day window)
[2025-12-20T21:04:47.760Z] [BOT] 💾 Saved posted_jobs.json: 722 active jobs
[2025-12-20T21:04:47.761Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T21:04:47.761Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_c6cfe6e4 Canyon Consulting
[2025-12-20T21:04:47.761Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:04:48.111Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_c6cfe6e4 Canyon Consulting in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_c6cfe6e4 Canyon Consulting
[2025-12-20T21:04:49.871Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_c6cfe6e4 Canyon Consulting in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T21:04:51.371Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_c6cfe6e4 Canyon Consulting (instance #1)
[2025-12-20T21:04:51.372Z] [BOT] 💾 BEFORE ARCHIVING: 723 jobs in database
[2025-12-20T21:04:51.372Z] [BOT] ✅ No jobs to archive (all 723 jobs within 7-day window)
[2025-12-20T21:04:51.379Z] [BOT] 💾 Saved posted_jobs.json: 723 active jobs
[2025-12-20T21:04:51.379Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T21:04:51.380Z] [BOT] 📍 [ROUTING] "Linux Engineer" @ ORG_4f23798d Street
[2025-12-20T21:04:51.380Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:04:51.659Z] [BOT] ✅ Created forum post: 🏢 Linux Engineer @ ORG_4f23798d Street in #💻・tech-jobs
[2025-12-20T21:04:51.660Z] [BOT] ✅ Industry: Linux Engineer @ ORG_4f23798d Street
[2025-12-20T21:04:53.622Z] [BOT] ✅ Created forum post: 🏢 Linux Engineer @ ORG_4f23798d Street in #🗽・new-york
[2025-12-20T21:04:53.622Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-20T21:04:55.123Z] [BOT] 💾 Marked as posted: Linux Engineer @ ORG_4f23798d Street (instance #1)
[2025-12-20T21:04:55.123Z] [BOT] 💾 BEFORE ARCHIVING: 724 jobs in database
[2025-12-20T21:04:55.124Z] [BOT] ✅ No jobs to archive (all 724 jobs within 7-day window)
[2025-12-20T21:04:55.131Z] [BOT] 💾 Saved posted_jobs.json: 724 active jobs
[2025-12-20T21:04:55.131Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T21:04:55.131Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_313e7c50
   Category: TECH (matched: "software")
[2025-12-20T21:04:55.131Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:04:55.370Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_313e7c50 in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_313e7c50
[2025-12-20T21:04:57.256Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_313e7c50 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-20T21:04:58.757Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_313e7c50 (instance #1)
[2025-12-20T21:04:58.757Z] [BOT] 💾 BEFORE ARCHIVING: 725 jobs in database
[2025-12-20T21:04:58.758Z] [BOT] ✅ No jobs to archive (all 725 jobs within 7-day window)
[2025-12-20T21:04:58.764Z] [BOT] 💾 Saved posted_jobs.json: 725 active jobs
[2025-12-20T21:04:58.765Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T21:05:01.765Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-20T21:05:01.766Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar - Experimental Condensed Matter Physics" @ ORG_478e100e University
   Category: MARKETING (matched: "growth")
[2025-12-20T21:05:01.766Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2025-12-20T21:05:02.114Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Experimental Condensed Matter Physics @ ORG_478e100e University in #📣・marketing-jobs
[2025-12-20T21:05:02.114Z] [BOT] ✅ Industry: Postdoctoral Scholar - Experimental Condensed Matter Physics @ ORG_478e100e University
[2025-12-20T21:05:03.855Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Experimental Condensed Matter Physics @ ORG_478e100e University in #💻・remote-usa
[2025-12-20T21:05:03.856Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T21:05:05.357Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar - Experimental Condensed Matter Physics @ ORG_478e100e University (instance #1)
💾 BEFORE ARCHIVING: 726 jobs in database
[2025-12-20T21:05:05.358Z] [BOT] ✅ No jobs to archive (all 726 jobs within 7-day window)
[2025-12-20T21:05:05.365Z] [BOT] 💾 Saved posted_jobs.json: 726 active jobs
[2025-12-20T21:05:05.365Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T21:05:05.366Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar - Experimental Condensed Matter Physics @ ORG_478e100e University (instance #1)
[2025-12-20T21:05:05.366Z] [BOT] 💾 BEFORE ARCHIVING: 727 jobs in database
[2025-12-20T21:05:05.366Z] [BOT] ✅ No jobs to archive (all 727 jobs within 7-day window)
[2025-12-20T21:05:05.372Z] [BOT] 💾 Saved posted_jobs.json: 727 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:05:08.372Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2025-12-20T21:05:08.373Z] [BOT] ⏭️  Skipping duplicate: JID_9885820d (posted within 7 days)
[2025-12-20T21:05:08.373Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_00f38d20-detail (posted within 7 days)
[2025-12-20T21:05:08.373Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_9d605b95-detail (posted within 7 days)
[2025-12-20T21:05:08.373Z] [BOT] ⏭️  Skipping duplicate: JID_b50d4f71 (posted within 7 days)
[2025-12-20T21:05:08.373Z] [BOT] ⏭️  Skipping duplicate: JID_2c61fe83 (posted within 7 days)
[2025-12-20T21:05:08.373Z] [BOT] ⏭️  Skipping duplicate: JID_71787af8 (posted within 7 days)
[2025-12-20T21:05:08.373Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_42a3249f-_req_0000050105 (posted within 7 days)
[2025-12-20T21:05:08.373Z] [BOT] ⏭️  Skipping duplicate: JID_ec15ff8a (posted within 7 days)
[2025-12-20T21:05:08.376Z] [BOT] ✅ Loaded pending queue: 223 total (203 pending, 20 enriched, 0 posted)
[2025-12-20T21:05:08.379Z] [BOT] ✅ Saved pending queue: 223 total (203 pending, 12 enriched, 8 posted)
[2025-12-20T21:05:08.379Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T21:05:08.421Z] [BOT] 📂 Loaded 792 existing routing entries
[2025-12-20T21:05:08.469Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 800
   Timestamp: 2025-12-20T21:05:08.462Z
📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
   Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 16
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #🤖・ai-jobs: 3 posts
     3. #💻・remote-usa: 3 posts
     4. #🌧️・seattle: 1 posts
     5. #🌉・san-francisco: 1 posts
[STATS] Channel stats saved
[2025-12-20T21:05:10.479Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2765) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*