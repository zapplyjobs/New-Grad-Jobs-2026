# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T22:04:55.901Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T22:04:08.434Z] ========================================
[2025-12-20T22:04:08.436Z] Discord Bot Execution Log
[2025-12-20T22:04:08.436Z] Environment: GitHub Actions
[2025-12-20T22:04:08.436Z] Node Version: v20.19.6
[2025-12-20T22:04:08.436Z] ========================================
[2025-12-20T22:04:08.436Z] Environment Variables Check:
[2025-12-20T22:04:08.436Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T22:04:08.437Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T22:04:08.437Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T22:04:08.437Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T22:04:08.437Z] 
Multi-Channel Configuration:
[2025-12-20T22:04:08.437Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T22:04:08.437Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T22:04:08.437Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T22:04:08.437Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T22:04:08.437Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T22:04:08.437Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T22:04:08.437Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T22:04:08.437Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T22:04:08.437Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T22:04:08.437Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T22:04:08.438Z] 
Data Files Check:
[2025-12-20T22:04:08.438Z] .github/data/new_jobs.json: ✅ Exists (10 items, 40437 bytes)
[2025-12-20T22:04:08.441Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 440459 bytes)
[2025-12-20T22:04:08.441Z] 
========================================
[2025-12-20T22:04:08.441Z] Starting Enhanced Discord Bot...
[2025-12-20T22:04:08.441Z] ========================================
[2025-12-20T22:04:08.958Z] [BOT] ✅ Loaded V2 database: 757 jobs
[2025-12-20T22:04:09.541Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T22:04:09.542Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T22:04:09.542Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T22:04:09.542Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T22:04:09.584Z] [BOT] 🧹 Cleaned up 6 jobs older than 7 days
[2025-12-20T22:04:09.628Z] [BOT] ✅ Export complete: Added 6, Skipped 4, Total 47
[2025-12-20T22:04:09.630Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T22:04:09.630Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T22:04:09.630Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T22:04:09.631Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-20T22:04:09.631Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T22:04:09.635Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-20T22:04:09.636Z] [BOT] 📍 [ROUTING] "Datacenter Resiliency Architect – New College Grad 2025" @ ORG_0890f456
[2025-12-20T22:04:09.636Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T22:04:09.641Z] [BOT ERROR] (node:2353) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T22:04:09.820Z] [BOT] ✅ Created forum post: 🏢 Datacenter Resiliency Architect – New College Grad 2025 @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Datacenter Resiliency Architect – New College Grad 2025 @ ORG_0890f456
[2025-12-20T22:04:11.865Z] [BOT] ✅ Created forum post: 🏢 Datacenter Resiliency Architect – New College Grad 2025 @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T22:04:13.365Z] [BOT] 💾 Marked as posted: Datacenter Resiliency Architect – New College Grad 2025 @ ORG_0890f456 (instance #1)
[2025-12-20T22:04:13.366Z] [BOT] 💾 BEFORE ARCHIVING: 758 jobs in database
[2025-12-20T22:04:13.367Z] [BOT] ✅ No jobs to archive (all 758 jobs within 7-day window)
[2025-12-20T22:04:13.378Z] [BOT] 💾 Saved posted_jobs.json: 758 active jobs
[2025-12-20T22:04:13.378Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:04:16.379Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-12-20T22:04:16.380Z] [BOT] 📍 [ROUTING] "Lidar – Quicklook Data Verification Technician" @ NV5 Global
   Category: TECH (matched: "data")
[2025-12-20T22:04:16.380Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:04:16.596Z] [BOT] ✅ Created forum post: 🏢 Lidar – Quicklook Data Verification Technician @ NV5 Global in #💻・tech-jobs
[2025-12-20T22:04:16.596Z] [BOT] ✅ Industry: Lidar – Quicklook Data Verification Technician @ NV5 Global
[2025-12-20T22:04:18.272Z] [BOT] ✅ Created forum post: 🏢 Lidar – Quicklook Data Verification Technician @ NV5 Global in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T22:04:19.772Z] [BOT] 💾 Marked as posted: Lidar – Quicklook Data Verification Technician @ NV5 Global (instance #1)
[2025-12-20T22:04:19.772Z] [BOT] 💾 BEFORE ARCHIVING: 759 jobs in database
[2025-12-20T22:04:19.773Z] [BOT] ✅ No jobs to archive (all 759 jobs within 7-day window)
[2025-12-20T22:04:19.780Z] [BOT] 💾 Saved posted_jobs.json: 759 active jobs
[2025-12-20T22:04:19.780Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:04:19.781Z] [BOT] 📍 [ROUTING] "Salesforce Database Administrator" @ ORG_3aa5abc7 Research Corporation
[2025-12-20T22:04:19.781Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:04:19.944Z] [BOT] ✅ Created forum post: 🏢 Salesforce Database Administrator @ ORG_3aa5abc7 Research Corporation in #💻・tech-jobs
  ✅ Industry: Salesforce Database Administrator @ ORG_3aa5abc7 Research Corporation
[2025-12-20T22:04:21.580Z] [BOT] ✅ Created forum post: 🏢 Salesforce Database Administrator @ ORG_3aa5abc7 Research Corporation in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T22:04:23.081Z] [BOT] 💾 Marked as posted: Salesforce Database Administrator @ ORG_3aa5abc7 Research Corporation (instance #1)
[2025-12-20T22:04:23.081Z] [BOT] 💾 BEFORE ARCHIVING: 760 jobs in database
[2025-12-20T22:04:23.082Z] [BOT] ✅ No jobs to archive (all 760 jobs within 7-day window)
[2025-12-20T22:04:23.088Z] [BOT] 💾 Saved posted_jobs.json: 760 active jobs
[2025-12-20T22:04:23.088Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:04:23.089Z] [BOT] 📍 [ROUTING] "Java Software Engineer 1" @ ORG_75f04b84
[2025-12-20T22:04:23.089Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:04:23.240Z] [BOT] ✅ Created forum post: 🏢 Java Software Engineer 1 @ ORG_75f04b84 in #💻・tech-jobs
[2025-12-20T22:04:23.241Z] [BOT] ✅ Industry: Java Software Engineer 1 @ ORG_75f04b84
[2025-12-20T22:04:24.961Z] [BOT] ✅ Created forum post: 🏢 Java Software Engineer 1 @ ORG_75f04b84 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T22:04:26.463Z] [BOT] 💾 Marked as posted: Java Software Engineer 1 @ ORG_75f04b84 (instance #1)
[2025-12-20T22:04:26.463Z] [BOT] 💾 BEFORE ARCHIVING: 761 jobs in database
[2025-12-20T22:04:26.464Z] [BOT] ✅ No jobs to archive (all 761 jobs within 7-day window)
[2025-12-20T22:04:26.471Z] [BOT] 💾 Saved posted_jobs.json: 761 active jobs
[2025-12-20T22:04:26.471Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:04:26.471Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:04:26.584Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-20T22:04:28.337Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-20T22:04:29.839Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-20T22:04:29.839Z] [BOT] 💾 BEFORE ARCHIVING: 762 jobs in database
[2025-12-20T22:04:29.840Z] [BOT] ✅ No jobs to archive (all 762 jobs within 7-day window)
[2025-12-20T22:04:29.847Z] [BOT] 💾 Saved posted_jobs.json: 762 active jobs
[2025-12-20T22:04:29.848Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:04:29.848Z] [BOT] 💾 Marked as posted: Software Engineer 1 - AI Foundation @ ORG_0bbe3cb1 (instance #1)
💾 BEFORE ARCHIVING: 763 jobs in database
[2025-12-20T22:04:29.849Z] [BOT] ✅ No jobs to archive (all 763 jobs within 7-day window)
[2025-12-20T22:04:29.854Z] [BOT] 💾 Saved posted_jobs.json: 763 active jobs
[2025-12-20T22:04:29.854Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:04:29.855Z] [BOT] 📍 [ROUTING] "ServiceNow Junior Developer" @ ORG_82bce10b State University
[2025-12-20T22:04:29.855Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:04:30.158Z] [BOT] ✅ Created forum post: 🏢 ServiceNow Junior Developer @ ORG_82bce10b State University in #💻・tech-jobs
  ✅ Industry: ServiceNow Junior Developer @ ORG_82bce10b State University
[2025-12-20T22:04:32.086Z] [BOT] ✅ Created forum post: 🏢 ServiceNow Junior Developer @ ORG_82bce10b State University in #💻・remote-usa
[2025-12-20T22:04:32.086Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T22:04:33.587Z] [BOT] 💾 Marked as posted: ServiceNow Junior Developer @ ORG_82bce10b State University (instance #1)
[2025-12-20T22:04:33.587Z] [BOT] 💾 BEFORE ARCHIVING: 764 jobs in database
[2025-12-20T22:04:33.588Z] [BOT] ✅ No jobs to archive (all 764 jobs within 7-day window)
[2025-12-20T22:04:33.594Z] [BOT] 💾 Saved posted_jobs.json: 764 active jobs
[2025-12-20T22:04:33.594Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:04:33.594Z] [BOT] 📍 [ROUTING] "Configuration and Data Management Analyst" @ Sev1Tech
   Category: TECH (matched: "data")
[2025-12-20T22:04:33.595Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:04:33.970Z] [BOT] ✅ Created forum post: 🏢 Configuration and Data Management Analyst @ Sev1Tech in #💻・tech-jobs
[2025-12-20T22:04:33.970Z] [BOT] ✅ Industry: Configuration and Data Management Analyst @ Sev1Tech
[2025-12-20T22:04:35.605Z] [BOT] ✅ Created forum post: 🏢 Configuration and Data Management Analyst @ Sev1Tech in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T22:04:37.106Z] [BOT] 💾 Marked as posted: Configuration and Data Management Analyst @ Sev1Tech (instance #1)
[2025-12-20T22:04:37.107Z] [BOT] 💾 BEFORE ARCHIVING: 765 jobs in database
[2025-12-20T22:04:37.107Z] [BOT] ✅ No jobs to archive (all 765 jobs within 7-day window)
[2025-12-20T22:04:37.113Z] [BOT] 💾 Saved posted_jobs.json: 765 active jobs
[2025-12-20T22:04:37.113Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:04:40.114Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-20T22:04:40.115Z] [BOT] 📍 [ROUTING] "Entry Level Draftsman-Learners" @ ORG_c910d474 Dynamics
   Category: FINANCE (matched: "investment")
   Channel: 💰・finance-jobs (1391...2941)
[2025-12-20T22:04:40.458Z] [BOT] ✅ Created forum post: 🏢 Entry Level Draftsman-Learners @ ORG_c910d474 Dynamics in #💰・finance-jobs
  ✅ Industry: Entry Level Draftsman-Learners @ ORG_c910d474 Dynamics
[2025-12-20T22:04:42.309Z] [BOT] ✅ Created forum post: 🏢 Entry Level Draftsman-Learners @ ORG_c910d474 Dynamics in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T22:04:43.810Z] [BOT] 💾 Marked as posted: Entry Level Draftsman-Learners @ ORG_c910d474 Dynamics (instance #1)
[2025-12-20T22:04:43.811Z] [BOT] 💾 BEFORE ARCHIVING: 766 jobs in database
[2025-12-20T22:04:43.811Z] [BOT] ✅ No jobs to archive (all 766 jobs within 7-day window)
[2025-12-20T22:04:43.819Z] [BOT] 💾 Saved posted_jobs.json: 766 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:04:46.820Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-20T22:04:46.820Z] [BOT] 📍 [ROUTING] "Field Data Analyst" @ ORG_074a3f54 Engineers
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-20T22:04:47.052Z] [BOT] ✅ Created forum post: 🏢 Field Data Analyst @ ORG_074a3f54 Engineers in #📈・JID_fb739488
  ✅ Industry: Field Data Analyst @ ORG_074a3f54 Engineers
[2025-12-20T22:04:48.691Z] [BOT] ✅ Created forum post: 🏢 Field Data Analyst @ ORG_074a3f54 Engineers in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-20T22:04:50.192Z] [BOT] 💾 Marked as posted: Field Data Analyst @ ORG_074a3f54 Engineers (instance #1)
[2025-12-20T22:04:50.192Z] [BOT] 💾 BEFORE ARCHIVING: 767 jobs in database
[2025-12-20T22:04:50.193Z] [BOT] ✅ No jobs to archive (all 767 jobs within 7-day window)
[2025-12-20T22:04:50.200Z] [BOT] 💾 Saved posted_jobs.json: 767 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:04:53.201Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-20T22:04:53.201Z] [BOT] ⏭️  Skipping duplicate: JID_85f40a4c-2025_jr1997786 (posted within 7 days)
[2025-12-20T22:04:53.201Z] [BOT] ⏭️  Skipping duplicate: JID_520a1186 (posted within 7 days)
[2025-12-20T22:04:53.201Z] [BOT] ⏭️  Skipping duplicate: JID_37acd7f5 (posted within 7 days)
⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_f14eeeef-_01812452 (posted within 7 days)
[2025-12-20T22:04:53.202Z] [BOT] ⏭️  Skipping duplicate: JID_54948590 (posted within 7 days)
[2025-12-20T22:04:53.202Z] [BOT] ⏭️  Skipping duplicate: JID_bcdf9d12 (posted within 7 days)
[2025-12-20T22:04:53.202Z] [BOT] ⏭️  Skipping duplicate: JID_05ea5959 (posted within 7 days)
⏭️  Skipping duplicate: JID_e0841338 (posted within 7 days)
[2025-12-20T22:04:53.202Z] [BOT] ⏭️  Skipping duplicate: JID_c3a25800 (posted within 7 days)
[2025-12-20T22:04:53.204Z] [BOT] ✅ Loaded pending queue: 183 total (163 pending, 20 enriched, 0 posted)
[2025-12-20T22:04:53.207Z] [BOT] ✅ Saved pending queue: 183 total (163 pending, 11 enriched, 9 posted)
[2025-12-20T22:04:53.207Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T22:04:53.250Z] [BOT] 📂 Loaded 826 existing routing entries
[2025-12-20T22:04:53.294Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2025-12-20T22:04:53.294Z] [BOT] Total entries: 835
   Timestamp: 2025-12-20T22:04:53.290Z
[2025-12-20T22:04:53.294Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
[2025-12-20T22:04:53.295Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2025-12-20T22:04:53.295Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-20T22:04:53.295Z] [BOT] Last cleanup: Never
   Total posts: 18
[2025-12-20T22:04:53.295Z] [BOT] Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #💻・remote-usa: 6 posts
     3. #🤖・ai-jobs: 1 posts
[2025-12-20T22:04:53.295Z] [BOT] 4. #🌉・san-francisco: 1 posts
     5. #🌄・mountain-view: 1 posts
[2025-12-20T22:04:53.295Z] [BOT] [STATS] Channel stats saved
[2025-12-20T22:04:55.307Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2353) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*