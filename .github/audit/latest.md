# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T05:25:02.641Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T05:24:27.619Z] ========================================
[2025-12-12T05:24:27.621Z] Discord Bot Execution Log
[2025-12-12T05:24:27.621Z] Environment: GitHub Actions
[2025-12-12T05:24:27.621Z] Node Version: v20.19.6
[2025-12-12T05:24:27.621Z] ========================================
[2025-12-12T05:24:27.621Z] Environment Variables Check:
[2025-12-12T05:24:27.621Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T05:24:27.621Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T05:24:27.621Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T05:24:27.622Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T05:24:27.622Z] 
Multi-Channel Configuration:
[2025-12-12T05:24:27.622Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T05:24:27.622Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T05:24:27.622Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T05:24:27.622Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T05:24:27.622Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T05:24:27.622Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T05:24:27.622Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T05:24:27.622Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T05:24:27.622Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T05:24:27.622Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T05:24:27.622Z] 
Data Files Check:
[2025-12-12T05:24:27.623Z] .github/data/new_jobs.json: ✅ Exists (10 items, 116423 bytes)
[2025-12-12T05:24:27.624Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 30792 bytes)
[2025-12-12T05:24:27.624Z] 
========================================
[2025-12-12T05:24:27.624Z] Starting Enhanced Discord Bot...
[2025-12-12T05:24:27.624Z] ========================================
[2025-12-12T05:24:28.221Z] [BOT] ✅ Loaded V2 database: 48 jobs
[2025-12-12T05:24:28.935Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T05:24:28.936Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T05:24:28.936Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T05:24:28.937Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T05:24:29.052Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 157
[2025-12-12T05:24:29.053Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-12T05:24:29.053Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
[2025-12-12T05:24:29.053Z] [BOT] ⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
⏭️  Skipping duplicate: JID_54b586ca (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2025-12-12T05:24:29.054Z] [BOT] 📬 Found 7 new jobs (3 already posted)...
[2025-12-12T05:24:29.054Z] [BOT] 📋 After blacklist filter: 7 jobs (0 blacklisted)
[2025-12-12T05:24:29.055Z] [BOT] 📋 After data quality filter: 7 jobs (0 invalid)
[2025-12-12T05:24:29.055Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2025-12-12T05:24:29.055Z] [BOT] 📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T05:24:29.058Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-12-12T05:24:29.058Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_3812004b Capital Group
[2025-12-12T05:24:29.058Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:24:29.064Z] [BOT ERROR] (node:2718) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T05:24:29.240Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_3812004b Capital Group in #💻・tech-jobs
[2025-12-12T05:24:29.241Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_3812004b Capital Group
[2025-12-12T05:24:30.908Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_3812004b Capital Group in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-12T05:24:32.408Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_3812004b Capital Group (instance #1)
[2025-12-12T05:24:32.409Z] [BOT] 💾 BEFORE ARCHIVING: 49 jobs in database
[2025-12-12T05:24:32.409Z] [BOT] ✅ No jobs to archive (all 49 jobs within 7-day window)
[2025-12-12T05:24:32.415Z] [BOT] 💾 Saved posted_jobs.json: 49 active jobs
[2025-12-12T05:24:32.415Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Systems Engineer – Entry Level" @ ORG_c910d474 Dynamics Mission Systems
[2025-12-12T05:24:32.415Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:24:32.572Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
  ✅ Industry: Systems Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems
[2025-12-12T05:24:34.470Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T05:24:35.971Z] [BOT] 💾 Marked as posted: Systems Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2025-12-12T05:24:35.971Z] [BOT] 💾 BEFORE ARCHIVING: 50 jobs in database
✅ No jobs to archive (all 50 jobs within 7-day window)
[2025-12-12T05:24:35.972Z] [BOT] 💾 Saved posted_jobs.json: 50 active jobs
[2025-12-12T05:24:35.973Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Criticality Safety Engineer" @ ORG_41a6741einghouse Electric Company
   Category: TECH (matched: "engineer/engineering")
[2025-12-12T05:24:35.973Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:24:36.194Z] [BOT] ✅ Created forum post: 🏢 Criticality Safety Engineer @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
  ✅ Industry: Criticality Safety Engineer @ ORG_41a6741einghouse Electric Company
[2025-12-12T05:24:38.190Z] [BOT] ✅ Created forum post: 🏢 Criticality Safety Engineer @ ORG_41a6741einghouse Electric Company in #💻・remote-usa
[2025-12-12T05:24:38.190Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T05:24:39.691Z] [BOT] 💾 Marked as posted: Criticality Safety Engineer @ ORG_41a6741einghouse Electric Company (instance #1)
[2025-12-12T05:24:39.691Z] [BOT] 💾 BEFORE ARCHIVING: 51 jobs in database
✅ No jobs to archive (all 51 jobs within 7-day window)
[2025-12-12T05:24:39.692Z] [BOT] 💾 Saved posted_jobs.json: 51 active jobs
[2025-12-12T05:24:39.692Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Applied Research Engineer 1" @ ORG_438a7d59 State University
   Category: TECH (matched: "engineer/engineering")
[2025-12-12T05:24:39.692Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:24:39.859Z] [BOT] ✅ Created forum post: 🏢 Applied Research Engineer 1 @ ORG_438a7d59 State University in #💻・tech-jobs
[2025-12-12T05:24:39.859Z] [BOT] ✅ Industry: Applied Research Engineer 1 @ ORG_438a7d59 State University
[2025-12-12T05:24:41.606Z] [BOT] ✅ Created forum post: 🏢 Applied Research Engineer 1 @ ORG_438a7d59 State University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T05:24:43.107Z] [BOT] 💾 Marked as posted: Applied Research Engineer 1 @ ORG_438a7d59 State University (instance #1)
[2025-12-12T05:24:43.108Z] [BOT] 💾 BEFORE ARCHIVING: 52 jobs in database
✅ No jobs to archive (all 52 jobs within 7-day window)
[2025-12-12T05:24:43.110Z] [BOT] 💾 Saved posted_jobs.json: 52 active jobs
[2025-12-12T05:24:43.110Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Energy Storage Application Engineer" @ ORG_74da6415
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:24:43.538Z] [BOT] ✅ Created forum post: 🏢 Energy Storage Application Engineer @ ORG_74da6415 in #💻・tech-jobs
  ✅ Industry: Energy Storage Application Engineer @ ORG_74da6415
[2025-12-12T05:24:45.316Z] [BOT] ✅ Created forum post: 🏢 Energy Storage Application Engineer @ ORG_74da6415 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T05:24:46.816Z] [BOT] 💾 Marked as posted: Energy Storage Application Engineer @ ORG_74da6415 (instance #1)
[2025-12-12T05:24:46.816Z] [BOT] 💾 BEFORE ARCHIVING: 53 jobs in database
✅ No jobs to archive (all 53 jobs within 7-day window)
[2025-12-12T05:24:46.818Z] [BOT] 💾 Saved posted_jobs.json: 53 active jobs
[2025-12-12T05:24:46.818Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer" @ ORG_02d7a0e6 Group
   Category: TECH (matched: "software")
[2025-12-12T05:24:46.818Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:24:46.993Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_02d7a0e6 Group in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_02d7a0e6 Group
[2025-12-12T05:24:48.794Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_02d7a0e6 Group in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T05:24:50.294Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_02d7a0e6 Group (instance #1)
[2025-12-12T05:24:50.294Z] [BOT] 💾 BEFORE ARCHIVING: 54 jobs in database
✅ No jobs to archive (all 54 jobs within 7-day window)
[2025-12-12T05:24:50.296Z] [BOT] 💾 Saved posted_jobs.json: 54 active jobs
[2025-12-12T05:24:50.296Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T05:24:53.296Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-12T05:24:53.297Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_dec6f66e Risk Solutions
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T05:24:53.539Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_dec6f66e Risk Solutions in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_dec6f66e Risk Solutions
[2025-12-12T05:24:55.197Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_dec6f66e Risk Solutions in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T05:24:56.699Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_dec6f66e Risk Solutions (instance #1)
[2025-12-12T05:24:56.699Z] [BOT] 💾 BEFORE ARCHIVING: 55 jobs in database
✅ No jobs to archive (all 55 jobs within 7-day window)
[2025-12-12T05:24:56.700Z] [BOT] 💾 Saved posted_jobs.json: 55 active jobs
[2025-12-12T05:24:56.700Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T05:24:59.701Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2025-12-12T05:24:59.701Z] [BOT] ⏭️  Skipping duplicate: JID_fa6d7d6b-engineer_hr-19575 (posted within 7 days)
[2025-12-12T05:24:59.702Z] [BOT] ⏭️  Skipping duplicate: JID_5628d2bb (posted within 7 days)
⏭️  Skipping duplicate: JID_f29f3243 (posted within 7 days)
⏭️  Skipping duplicate: JID_2b443769-1_r141828 (posted within 7 days)
[2025-12-12T05:24:59.702Z] [BOT] ⏭️  Skipping duplicate: JID_1834e261 (posted within 7 days)
[2025-12-12T05:24:59.702Z] [BOT] ⏭️  Skipping duplicate: JID_20f53a1e-analyst_r104140 (posted within 7 days)
⏭️  Skipping duplicate: JID_19ab8473 (posted within 7 days)
[2025-12-12T05:24:59.706Z] [BOT] ✅ Loaded pending queue: 579 total (569 pending, 10 enriched, 0 posted)
[2025-12-12T05:24:59.716Z] [BOT] ✅ Saved pending queue: 579 total (527 pending, 3 enriched, 49 posted)
[2025-12-12T05:24:59.716Z] [BOT] 📋 Updated queue: marked 49 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-12T05:24:59.754Z] [BOT] 📂 Loaded 45 existing routing entries
[2025-12-12T05:24:59.791Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
   Total entries: 52
   Timestamp: 2025-12-12T05:24:59.790Z
[2025-12-12T05:25:01.802Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2718) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*