# Discord Bot Execution Audit
**Timestamp:** 2025-12-21T18:43:08.945Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-21T18:42:19.744Z] ========================================
[2025-12-21T18:42:19.746Z] Discord Bot Execution Log
[2025-12-21T18:42:19.746Z] Environment: GitHub Actions
[2025-12-21T18:42:19.746Z] Node Version: v20.19.6
[2025-12-21T18:42:19.746Z] ========================================
[2025-12-21T18:42:19.746Z] Environment Variables Check:
[2025-12-21T18:42:19.746Z] DISCORD_TOKEN: ✅ Set
[2025-12-21T18:42:19.746Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-21T18:42:19.746Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-21T18:42:19.746Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-21T18:42:19.746Z] 
Multi-Channel Configuration:
[2025-12-21T18:42:19.747Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-21T18:42:19.747Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-21T18:42:19.747Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-21T18:42:19.747Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-21T18:42:19.747Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-21T18:42:19.747Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-21T18:42:19.747Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-21T18:42:19.747Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-21T18:42:19.747Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-21T18:42:19.747Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-21T18:42:19.747Z] 
Data Files Check:
[2025-12-21T18:42:19.748Z] .github/data/new_jobs.json: ✅ Exists (10 items, 34944 bytes)
[2025-12-21T18:42:19.752Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 500129 bytes)
[2025-12-21T18:42:19.752Z] 
========================================
[2025-12-21T18:42:19.752Z] Starting Enhanced Discord Bot...
[2025-12-21T18:42:19.752Z] ========================================
[2025-12-21T18:42:20.278Z] [BOT] ✅ Loaded V2 database: 853 jobs
[2025-12-21T18:42:20.803Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-21T18:42:20.803Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-21T18:42:20.803Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-21T18:42:20.804Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-21T18:42:20.856Z] [BOT] 🧹 Cleaned up 8 jobs older than 7 days
[2025-12-21T18:42:20.909Z] [BOT] ✅ Export complete: Added 8, Skipped 2, Total 121
[2025-12-21T18:42:20.912Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-21T18:42:20.912Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-21T18:42:20.912Z] [BOT] 📋 After blacklist filter: 9 jobs (1 blacklisted)
[2025-12-21T18:42:20.912Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2025-12-21T18:42:20.913Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-21T18:42:20.913Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-21T18:42:20.913Z] [BOT] 📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-21T18:42:20.918Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-21T18:42:20.918Z] [BOT] 📍 [ROUTING] "Fiber Network Mapping Specialist 3" @ ORG_8d0003a5
[2025-12-21T18:42:20.918Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-21T18:42:20.923Z] [BOT ERROR] (node:2908) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-21T18:42:21.121Z] [BOT] ✅ Created forum post: 🏢 Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 in #📣・marketing-jobs
  ✅ Industry: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5
[2025-12-21T18:42:22.854Z] [BOT] ✅ Created forum post: 🏢 Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T18:42:24.355Z] [BOT] 💾 Marked as posted: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 (instance #1)
[2025-12-21T18:42:24.355Z] [BOT] 💾 BEFORE ARCHIVING: 854 jobs in database
[2025-12-21T18:42:24.356Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-21T18:42:24.361Z] [BOT] 📦 Archived 11 jobs to 2025-12.json (11 total in archive)
[2025-12-21T18:42:24.361Z] [BOT] ✅ Archiving complete: 11 archived, 843 active
[2025-12-21T18:42:24.367Z] [BOT] 💾 Saved posted_jobs.json: 843 active jobs
[2025-12-21T18:42:24.368Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:42:27.368Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-21T18:42:27.368Z] [BOT] 📍 [ROUTING] "Software Engineer – IS&T Early Career - Sap" @ ORG_f223faa9
[2025-12-21T18:42:27.369Z] [BOT] Category: TECH (matched: "software")
[2025-12-21T18:42:27.369Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:42:27.584Z] [BOT] ✅ Created forum post: 🍎 Software Engineer – IS&T Early Career - Sap @ ORG_f223faa9 in #💻・tech-jobs
[2025-12-21T18:42:27.584Z] [BOT] ✅ Industry: Software Engineer – IS&T Early Career - Sap @ ORG_f223faa9
[2025-12-21T18:42:29.262Z] [BOT] ✅ Created forum post: 🍎 Software Engineer – IS&T Early Career - Sap @ ORG_f223faa9 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-21T18:42:30.763Z] [BOT] 💾 Marked as posted: Software Engineer – IS&T Early Career - Sap @ ORG_f223faa9 (instance #1)
[2025-12-21T18:42:30.763Z] [BOT] 💾 BEFORE ARCHIVING: 844 jobs in database
[2025-12-21T18:42:30.765Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (12 total in archive)
[2025-12-21T18:42:30.765Z] [BOT] ✅ Archiving complete: 1 archived, 843 active
[2025-12-21T18:42:30.773Z] [BOT] 💾 Saved posted_jobs.json: 843 active jobs
[2025-12-21T18:42:30.773Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:42:30.774Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_1ac7a9e0
[2025-12-21T18:42:30.774Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:42:31.325Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_1ac7a9e0 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_1ac7a9e0
[2025-12-21T18:42:33.153Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_1ac7a9e0 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T18:42:34.654Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_1ac7a9e0 (instance #1)
[2025-12-21T18:42:34.654Z] [BOT] 💾 BEFORE ARCHIVING: 844 jobs in database
[2025-12-21T18:42:34.656Z] [BOT] 📦 Archived 2 jobs to 2025-12.json (14 total in archive)
[2025-12-21T18:42:34.656Z] [BOT] ✅ Archiving complete: 2 archived, 842 active
[2025-12-21T18:42:34.663Z] [BOT] 💾 Saved posted_jobs.json: 842 active jobs
[2025-12-21T18:42:34.663Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:42:34.664Z] [BOT] 📍 [ROUTING] "Entry Level Specialist - AI Trainer" @ ORG_4ee447c5 Technologies
[2025-12-21T18:42:34.664Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:42:34.847Z] [BOT] ✅ Created forum post: 🏢 Entry Level Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #💻・tech-jobs
  ✅ Industry: Entry Level Specialist - AI Trainer @ ORG_4ee447c5 Technologies
[2025-12-21T18:42:36.477Z] [BOT] ✅ Created forum post: 🏢 Entry Level Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T18:42:37.979Z] [BOT] 💾 Marked as posted: Entry Level Specialist - AI Trainer @ ORG_4ee447c5 Technologies (instance #1)
[2025-12-21T18:42:37.979Z] [BOT] 💾 BEFORE ARCHIVING: 843 jobs in database
[2025-12-21T18:42:37.980Z] [BOT] ✅ No jobs to archive (all 843 jobs within 7-day window)
[2025-12-21T18:42:37.986Z] [BOT] 💾 Saved posted_jobs.json: 843 active jobs
[2025-12-21T18:42:37.986Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:42:37.987Z] [BOT] 📍 [ROUTING] "Support Engineer" @ ORG_fe61828f
[2025-12-21T18:42:37.987Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:42:38.684Z] [BOT] ✅ Created forum post: 🏢 Support Engineer @ ORG_fe61828f in #💻・tech-jobs
[2025-12-21T18:42:38.684Z] [BOT] ✅ Industry: Support Engineer @ ORG_fe61828f
[2025-12-21T18:42:40.391Z] [BOT] ✅ Created forum post: 🏢 Support Engineer @ ORG_fe61828f in #🌉・san-francisco
[2025-12-21T18:42:40.392Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-21T18:42:41.893Z] [BOT] 💾 Marked as posted: Support Engineer @ ORG_fe61828f (instance #1)
[2025-12-21T18:42:41.893Z] [BOT] 💾 BEFORE ARCHIVING: 844 jobs in database
[2025-12-21T18:42:41.896Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (15 total in archive)
[2025-12-21T18:42:41.896Z] [BOT] ✅ Archiving complete: 1 archived, 843 active
[2025-12-21T18:42:41.903Z] [BOT] 💾 Saved posted_jobs.json: 843 active jobs
[2025-12-21T18:42:41.903Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:42:44.904Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-21T18:42:44.905Z] [BOT] 📍 [ROUTING] "Report Customization Specialist - Temporary Assignment" @ ORG_a032d230 Medical Corporation
[2025-12-21T18:42:44.905Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-21T18:42:45.174Z] [BOT] ✅ Created forum post: 🏢 Report Customization Specialist - Temporary Assignment @ ORG_a032d230 Medical Corporation in #🩺・healthcare-jobs
  ✅ Industry: Report Customization Specialist - Temporary Assignment @ ORG_a032d230 Medical Corporation
[2025-12-21T18:42:46.989Z] [BOT] ✅ Created forum post: 🏢 Report Customization Specialist - Temporary Assignment @ ORG_a032d230 Medical Corporation in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T18:42:48.490Z] [BOT] 💾 Marked as posted: Report Customization Specialist - Temporary Assignment @ ORG_a032d230 Medical Corporation (instance #1)
[2025-12-21T18:42:48.490Z] [BOT] 💾 BEFORE ARCHIVING: 844 jobs in database
[2025-12-21T18:42:48.492Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (16 total in archive)
[2025-12-21T18:42:48.492Z] [BOT] ✅ Archiving complete: 1 archived, 843 active
[2025-12-21T18:42:48.500Z] [BOT] 💾 Saved posted_jobs.json: 843 active jobs
[2025-12-21T18:42:48.500Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:42:51.501Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-21T18:42:51.501Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_29bc579d
[2025-12-21T18:42:51.501Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-21T18:42:51.801Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_29bc579d in #🤖・ai-jobs
[2025-12-21T18:42:51.801Z] [BOT] ✅ Industry: Software Engineer @ ORG_29bc579d
[2025-12-21T18:42:53.457Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_29bc579d in #🌉・san-francisco
[2025-12-21T18:42:53.457Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-21T18:42:54.958Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_29bc579d (instance #1)
[2025-12-21T18:42:54.959Z] [BOT] 💾 BEFORE ARCHIVING: 844 jobs in database
[2025-12-21T18:42:54.961Z] [BOT] 📦 Archived 2 jobs to 2025-12.json (18 total in archive)
[2025-12-21T18:42:54.961Z] [BOT] ✅ Archiving complete: 2 archived, 842 active
[2025-12-21T18:42:54.969Z] [BOT] 💾 Saved posted_jobs.json: 842 active jobs
[2025-12-21T18:42:54.969Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:42:54.969Z] [BOT] 📍 [ROUTING] "Mercury Ignite Data Science Graduate Development Program" @ ORG_6a7367ef Insurance
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-21T18:42:55.117Z] [BOT] ✅ Created forum post: 🏢 Mercury Ignite Data Science Graduate Development Program @ ORG_6a7367ef Insurance in #🤖・ai-jobs
[2025-12-21T18:42:55.117Z] [BOT] ✅ Industry: Mercury Ignite Data Science Graduate Development Program @ ORG_6a7367ef Insurance
[2025-12-21T18:42:56.619Z] [BOT] 💾 Marked as posted: Mercury Ignite Data Science Graduate Development Program @ ORG_6a7367ef Insurance (instance #1)
[2025-12-21T18:42:56.619Z] [BOT] 💾 BEFORE ARCHIVING: 843 jobs in database
[2025-12-21T18:42:56.621Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (19 total in archive)
[2025-12-21T18:42:56.621Z] [BOT] ✅ Archiving complete: 1 archived, 842 active
[2025-12-21T18:42:56.628Z] [BOT] 💾 Saved posted_jobs.json: 842 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T18:42:59.629Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-12-21T18:42:59.630Z] [BOT] 📍 [ROUTING] "Early-Career Subsurface Modeler" @ ORG_77d789fe Consultants
[2025-12-21T18:42:59.630Z] [BOT] Category: SALES (matched: "business development")
   Channel: 💲・sales-jobs (1391...3632)
[2025-12-21T18:43:00.024Z] [BOT] ✅ Created forum post: 🏢 Early-Career Subsurface Modeler @ ORG_77d789fe Consultants in #💲・sales-jobs
  ✅ Industry: Early-Career Subsurface Modeler @ ORG_77d789fe Consultants
[2025-12-21T18:43:01.709Z] [BOT] ✅ Created forum post: 🏢 Early-Career Subsurface Modeler @ ORG_77d789fe Consultants in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-21T18:43:03.210Z] [BOT] 💾 Marked as posted: Early-Career Subsurface Modeler @ ORG_77d789fe Consultants (instance #1)
[2025-12-21T18:43:03.210Z] [BOT] 💾 BEFORE ARCHIVING: 843 jobs in database
[2025-12-21T18:43:03.212Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (20 total in archive)
[2025-12-21T18:43:03.212Z] [BOT] ✅ Archiving complete: 1 archived, 842 active
[2025-12-21T18:43:03.219Z] [BOT] 💾 Saved posted_jobs.json: 842 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T18:43:06.220Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-21T18:43:06.221Z] [BOT] ⏭️  Skipping duplicate: JID_c7109edb-iii_r0014033 (posted within 7 days)
[2025-12-21T18:43:06.221Z] [BOT] ⏭️  Skipping duplicate: JID_3d13ead8 (posted within 7 days)
⏭️  Skipping duplicate: JID_c385d046-assignment_r17168 (posted within 7 days)
[2025-12-21T18:43:06.221Z] [BOT] ⏭️  Skipping duplicate: JID_4f61eafd (posted within 7 days)
⏭️  Skipping duplicate: JID_16c06c08 (posted within 7 days)
[2025-12-21T18:43:06.221Z] [BOT] ⏭️  Skipping duplicate: JID_c50ff87e (posted within 7 days)
⏭️  Skipping duplicate: JID_2d34bf8f (posted within 7 days)
⏭️  Skipping duplicate: JID_1f72d909 (posted within 7 days)
⏭️  Skipping duplicate: JID_7f8ffc9a (posted within 7 days)
[2025-12-21T18:43:06.223Z] [BOT] ✅ Loaded pending queue: 89 total (69 pending, 20 enriched, 0 posted)
[2025-12-21T18:43:06.225Z] [BOT] ✅ Saved pending queue: 89 total (69 pending, 11 enriched, 9 posted)
[2025-12-21T18:43:06.225Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-21T18:43:06.269Z] [BOT] 📂 Loaded 914 existing routing entries
[2025-12-21T18:43:06.315Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2025-12-21T18:43:06.315Z] [BOT] Total entries: 923
   Timestamp: 2025-12-21T18:43:06.311Z
[2025-12-21T18:43:06.316Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e38d000c.jsonl
[2025-12-21T18:43:06.316Z] [BOT] Total attempts: 18
   Successful: 17
   Failed: 0
   Skipped: 1
[2025-12-21T18:43:06.316Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 9
[2025-12-21T18:43:06.316Z] [BOT] Top channels:
     1. #💻・remote-usa: 4 posts
     2. #💻・tech-jobs: 4 posts
     3. #🌉・san-francisco: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #📣・marketing-jobs: 1 posts
[2025-12-21T18:43:06.317Z] [BOT] [STATS] Channel stats saved
[2025-12-21T18:43:08.328Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2908) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*