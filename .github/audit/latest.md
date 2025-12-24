# Discord Bot Execution Audit
**Timestamp:** 2025-12-24T00:10:02.695Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-24T00:09:28.983Z] ========================================
[2025-12-24T00:09:28.985Z] Discord Bot Execution Log
[2025-12-24T00:09:28.985Z] Environment: GitHub Actions
[2025-12-24T00:09:28.985Z] Node Version: v20.19.6
[2025-12-24T00:09:28.985Z] ========================================
[2025-12-24T00:09:28.985Z] Environment Variables Check:
[2025-12-24T00:09:28.985Z] DISCORD_TOKEN: ✅ Set
[2025-12-24T00:09:28.985Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-24T00:09:28.985Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-24T00:09:28.985Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-24T00:09:28.985Z] 
Multi-Channel Configuration:
[2025-12-24T00:09:28.986Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-24T00:09:28.986Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-24T00:09:28.986Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-24T00:09:28.986Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-24T00:09:28.986Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-24T00:09:28.986Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-24T00:09:28.986Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-24T00:09:28.986Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-24T00:09:28.986Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-24T00:09:28.986Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-24T00:09:28.986Z] 
Data Files Check:
[2025-12-24T00:09:28.987Z] .github/data/new_jobs.json: ✅ Exists (6 items, 30451 bytes)
[2025-12-24T00:09:28.990Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 375178 bytes)
[2025-12-24T00:09:28.990Z] 
========================================
[2025-12-24T00:09:28.990Z] Starting Enhanced Discord Bot...
[2025-12-24T00:09:28.990Z] ========================================
[2025-12-24T00:09:29.506Z] [BOT] ✅ Loaded V2 database: 649 jobs
[2025-12-24T00:09:30.143Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-24T00:09:30.144Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-24T00:09:30.144Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-24T00:09:30.144Z] [BOT] 📦 Exporting 6 jobs to encrypted JSON...
[2025-12-24T00:09:30.255Z] [BOT] ✅ Export complete: Added 0, Skipped 6, Total 149
[2025-12-24T00:09:30.257Z] [BOT] 📬 Found 6 new jobs (0 already posted)...
[2025-12-24T00:09:30.257Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-24T00:09:30.257Z] [BOT] 📋 After blacklist filter: 5 jobs (1 blacklisted)
[2025-12-24T00:09:30.257Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2025-12-24T00:09:30.258Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2025-12-24T00:09:30.258Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-24T00:09:30.262Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-24T00:09:30.263Z] [BOT] 📍 [ROUTING] "Systems Analyst 1" @ ORG_ba93edf5 Corporation
[2025-12-24T00:09:30.263Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-24T00:09:30.267Z] [BOT ERROR] (node:2850) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-24T00:09:30.432Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst 1 @ ORG_ba93edf5 Corporation in #📣・marketing-jobs
[2025-12-24T00:09:30.432Z] [BOT] ✅ Industry: Systems Analyst 1 @ ORG_ba93edf5 Corporation
[2025-12-24T00:09:32.081Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst 1 @ ORG_ba93edf5 Corporation in #🤠・austin
[2025-12-24T00:09:32.082Z] [BOT] ✅ Location: 🤠・austin
[2025-12-24T00:09:33.583Z] [BOT] 💾 Marked as posted: Systems Analyst 1 @ ORG_ba93edf5 Corporation (instance #1)
[2025-12-24T00:09:33.583Z] [BOT] 💾 BEFORE ARCHIVING: 650 jobs in database
[2025-12-24T00:09:33.584Z] [BOT] ✅ No jobs to archive (all 650 jobs within 7-day window)
[2025-12-24T00:09:34.136Z] [BOT] 💾 Saved posted_jobs.json: 650 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-24T00:09:37.139Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-24T00:09:37.139Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_b344d80e Aerospace Corporation
[2025-12-24T00:09:37.139Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-24T00:09:37.550Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_b344d80e Aerospace Corporation in #🤖・ai-jobs
  ✅ Industry: Data Scientist @ ORG_b344d80e Aerospace Corporation
[2025-12-24T00:09:39.202Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_b344d80e Aerospace Corporation in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-24T00:09:40.702Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_b344d80e Aerospace Corporation (instance #1)
[2025-12-24T00:09:40.702Z] [BOT] 💾 BEFORE ARCHIVING: 651 jobs in database
[2025-12-24T00:09:40.703Z] [BOT] ✅ No jobs to archive (all 651 jobs within 7-day window)
[2025-12-24T00:09:40.709Z] [BOT] 💾 Saved posted_jobs.json: 651 active jobs
[2025-12-24T00:09:40.709Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T00:09:40.711Z] [BOT] 📍 [ROUTING] "Research Chemist - Autonomous Discovery of Organic Materials" @ ORG_d01167bb
[2025-12-24T00:09:40.711Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-24T00:09:40.875Z] [BOT] ✅ Created forum post: 🏢 Research Chemist - Autonomous Discovery of Organic Materials @ ORG_d01167bb in #🤖・ai-jobs
  ✅ Industry: Research Chemist - Autonomous Discovery of Organic Materials @ ORG_d01167bb
[2025-12-24T00:09:42.622Z] [BOT] ✅ Created forum post: 🏢 Research Chemist - Autonomous Discovery of Organic Materials @ ORG_d01167bb in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-24T00:09:44.122Z] [BOT] 💾 Marked as posted: Research Chemist - Autonomous Discovery of Organic Materials @ ORG_d01167bb (instance #1)
[2025-12-24T00:09:44.122Z] [BOT] 💾 BEFORE ARCHIVING: 652 jobs in database
[2025-12-24T00:09:44.123Z] [BOT] ✅ No jobs to archive (all 652 jobs within 7-day window)
[2025-12-24T00:09:44.129Z] [BOT] 💾 Saved posted_jobs.json: 652 active jobs
[2025-12-24T00:09:44.129Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T00:09:47.129Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-24T00:09:47.130Z] [BOT] 📍 [ROUTING] "Research Scientist - 2D Polymer Chemist" @ ORG_d01167bb
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-24T00:09:47.339Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - 2D Polymer Chemist @ ORG_d01167bb in #🩺・healthcare-jobs
  ✅ Industry: Research Scientist - 2D Polymer Chemist @ ORG_d01167bb
[2025-12-24T00:09:48.999Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - 2D Polymer Chemist @ ORG_d01167bb in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-24T00:09:50.499Z] [BOT] 💾 Marked as posted: Research Scientist - 2D Polymer Chemist @ ORG_d01167bb (instance #1)
[2025-12-24T00:09:50.499Z] [BOT] 💾 BEFORE ARCHIVING: 653 jobs in database
[2025-12-24T00:09:50.500Z] [BOT] ✅ No jobs to archive (all 653 jobs within 7-day window)
[2025-12-24T00:09:50.506Z] [BOT] 💾 Saved posted_jobs.json: 653 active jobs
[2025-12-24T00:09:50.506Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T00:09:53.506Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2025-12-24T00:09:53.506Z] [BOT] 📍 [ROUTING] "Operations Systems Lead" @ ORG_fb25d5e8
[2025-12-24T00:09:53.507Z] [BOT] Category: SUPPLY-CHAIN (matched: "procurement")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2025-12-24T00:09:53.775Z] [BOT] ✅ Created forum post: 🏢 Operations Systems Lead @ ORG_fb25d5e8 in #🏗️・JID_b7c6683f
  ✅ Industry: Operations Systems Lead @ ORG_fb25d5e8
[2025-12-24T00:09:55.456Z] [BOT] ✅ Created forum post: 🏢 Operations Systems Lead @ ORG_fb25d5e8 in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-24T00:09:56.956Z] [BOT] 💾 Marked as posted: Operations Systems Lead @ ORG_fb25d5e8 (instance #1)
[2025-12-24T00:09:56.957Z] [BOT] 💾 BEFORE ARCHIVING: 654 jobs in database
[2025-12-24T00:09:56.957Z] [BOT] ✅ No jobs to archive (all 654 jobs within 7-day window)
[2025-12-24T00:09:56.963Z] [BOT] 💾 Saved posted_jobs.json: 654 active jobs
[2025-12-24T00:09:56.963Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T00:09:59.963Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-12-24T00:09:59.964Z] [BOT] ⏭️  Skipping duplicate: JID_b5e96c5b-lennar_jobs-JID_bdbf37f7-i_r25_0000005022 (posted within 7 days)
[2025-12-24T00:09:59.964Z] [BOT] ⏭️  Skipping duplicate: JID_b1d43095-scientist_r014106 (posted within 7 days)
[2025-12-24T00:09:59.964Z] [BOT] ⏭️  Skipping duplicate: JID_ab66f118-chemist_7081 (posted within 7 days)
[2025-12-24T00:09:59.964Z] [BOT] ⏭️  Skipping duplicate: JID_a588667d-materials_7076 (posted within 7 days)
⏭️  Skipping duplicate: JID_62892e65 (posted within 7 days)
[2025-12-24T00:09:59.965Z] [BOT] ✅ Loaded pending queue: 6 total (0 pending, 6 enriched, 0 posted)
[2025-12-24T00:09:59.966Z] [BOT] ✅ Saved pending queue: 6 total (0 pending, 1 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-24T00:10:00.008Z] [BOT] 📂 Loaded 1042 existing routing entries
[2025-12-24T00:10:00.056Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 1047
   Timestamp: 2025-12-24T00:10:00.050Z
[2025-12-24T00:10:00.056Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_1a414558.jsonl
[2025-12-24T00:10:00.057Z] [BOT] Total attempts: 11
   Successful: 10
   Failed: 0
   Skipped: 1
[2025-12-24T00:10:00.057Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 8
[2025-12-24T00:10:00.057Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 2 posts
     2. #💻・remote-usa: 2 posts
     3. #📣・marketing-jobs: 1 posts
     4. #🤠・austin: 1 posts
     5. #🦢・los-angeles: 1 posts
[2025-12-24T00:10:00.057Z] [BOT] [STATS] Channel stats saved
[2025-12-24T00:10:02.068Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2850) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*