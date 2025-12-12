# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T06:46:17.266Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 5
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T06:45:48.684Z] ========================================
[2025-12-12T06:45:48.686Z] Discord Bot Execution Log
[2025-12-12T06:45:48.686Z] Environment: GitHub Actions
[2025-12-12T06:45:48.686Z] Node Version: v20.19.6
[2025-12-12T06:45:48.687Z] ========================================
[2025-12-12T06:45:48.687Z] Environment Variables Check:
[2025-12-12T06:45:48.687Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T06:45:48.687Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T06:45:48.687Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T06:45:48.687Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T06:45:48.687Z] 
Multi-Channel Configuration:
[2025-12-12T06:45:48.687Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T06:45:48.687Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T06:45:48.687Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T06:45:48.688Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T06:45:48.688Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T06:45:48.688Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T06:45:48.688Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T06:45:48.688Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T06:45:48.688Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T06:45:48.688Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T06:45:48.688Z] 
Data Files Check:
[2025-12-12T06:45:48.689Z] .github/data/new_jobs.json: ✅ Exists (10 items, 151020 bytes)
[2025-12-12T06:45:48.690Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 52714 bytes)
[2025-12-12T06:45:48.690Z] 
========================================
[2025-12-12T06:45:48.690Z] Starting Enhanced Discord Bot...
[2025-12-12T06:45:48.690Z] ========================================
[2025-12-12T06:45:49.257Z] [BOT] ✅ Loaded V2 database: 81 jobs
[2025-12-12T06:45:49.731Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T06:45:49.732Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T06:45:49.732Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T06:45:49.733Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T06:45:49.880Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 188
[2025-12-12T06:45:49.881Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-12T06:45:49.881Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
[2025-12-12T06:45:49.881Z] [BOT] ⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
⏭️  Skipping duplicate: JID_54b586ca (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
⏭️  Skipping duplicate: JID_3345e37e (posted within 7 days)
[2025-12-12T06:45:49.881Z] [BOT] ⏭️ Skipping already posted: Software Engineer I, Frontend at Twitch
⏭️  Skipping duplicate: JID_abad3e00 (posted within 7 days)
⏭️ Skipping already posted: SAP Developer - Level 1 at Cintas
[2025-12-12T06:45:49.884Z] [BOT] 📬 Found 5 new jobs (5 already posted)...
📋 After blacklist filter: 5 jobs (0 blacklisted)
📋 After data quality filter: 5 jobs (0 invalid)
📋 After multi-location grouping: 5 unique jobs to post
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T06:45:49.884Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-12T06:45:49.885Z] [BOT] 📍 [ROUTING] "Product Analyst - Data Analytics" @ O'Reilly Auto Parts
[2025-12-12T06:45:49.885Z] [BOT] Category: TECH (matched: "data")
[2025-12-12T06:45:49.885Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T06:45:49.890Z] [BOT ERROR] (node:2810) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T06:45:50.224Z] [BOT] ✅ Created forum post: 🏢 Product Analyst - Data Analytics @ O'Reilly Auto Parts in #💻・tech-jobs
[2025-12-12T06:45:50.224Z] [BOT] ✅ Industry: Product Analyst - Data Analytics @ O'Reilly Auto Parts
[2025-12-12T06:45:51.727Z] [BOT] 💾 Marked as posted: Product Analyst - Data Analytics @ O'Reilly Auto Parts (instance #1)
[2025-12-12T06:45:51.727Z] [BOT] 💾 BEFORE ARCHIVING: 82 jobs in database
[2025-12-12T06:45:51.727Z] [BOT] ✅ No jobs to archive (all 82 jobs within 7-day window)
[2025-12-12T06:45:51.733Z] [BOT] 💾 Saved posted_jobs.json: 82 active jobs
[2025-12-12T06:45:51.733Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineering Specialist" @ ORG_e8760198 Vernova
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T06:45:51.993Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Specialist @ ORG_e8760198 Vernova in #💻・tech-jobs
[2025-12-12T06:45:51.993Z] [BOT] ✅ Industry: Software Engineering Specialist @ ORG_e8760198 Vernova
[2025-12-12T06:45:53.658Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Specialist @ ORG_e8760198 Vernova in #🌧️・seattle
[2025-12-12T06:45:53.659Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-12T06:45:55.159Z] [BOT] 💾 Marked as posted: Software Engineering Specialist @ ORG_e8760198 Vernova (instance #1)
[2025-12-12T06:45:55.160Z] [BOT] 💾 BEFORE ARCHIVING: 83 jobs in database
✅ No jobs to archive (all 83 jobs within 7-day window)
[2025-12-12T06:45:55.162Z] [BOT] 💾 Saved posted_jobs.json: 83 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T06:45:55.162Z] [BOT] 📍 [ROUTING] "Data Analysis Coordinator" @ ORG_f43ca867
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T06:45:55.335Z] [BOT] ✅ Created forum post: 🏢 Data Analysis Coordinator @ ORG_f43ca867 in #💻・tech-jobs
  ✅ Industry: Data Analysis Coordinator @ ORG_f43ca867
[2025-12-12T06:45:57.030Z] [BOT] ✅ Created forum post: 🏢 Data Analysis Coordinator @ ORG_f43ca867 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-12T06:45:58.531Z] [BOT] 💾 Marked as posted: Data Analysis Coordinator @ ORG_f43ca867 (instance #1)
[2025-12-12T06:45:58.532Z] [BOT] 💾 BEFORE ARCHIVING: 84 jobs in database
✅ No jobs to archive (all 84 jobs within 7-day window)
[2025-12-12T06:45:58.533Z] [BOT] 💾 Saved posted_jobs.json: 84 active jobs
[2025-12-12T06:45:58.533Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T06:46:01.534Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-12T06:46:01.535Z] [BOT] 📍 [ROUTING] "Business Intelligence Analyst" @ ORG_f931030b
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T06:46:01.939Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst @ ORG_f931030b in #📈・JID_fb739488
[2025-12-12T06:46:01.939Z] [BOT] ✅ Industry: Business Intelligence Analyst @ ORG_f931030b
[2025-12-12T06:46:03.621Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst @ ORG_f931030b in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T06:46:05.122Z] [BOT] 💾 Marked as posted: Business Intelligence Analyst @ ORG_f931030b (instance #1)
[2025-12-12T06:46:05.123Z] [BOT] 💾 BEFORE ARCHIVING: 85 jobs in database
✅ No jobs to archive (all 85 jobs within 7-day window)
[2025-12-12T06:46:05.125Z] [BOT] 💾 Saved posted_jobs.json: 85 active jobs
[2025-12-12T06:46:05.125Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T06:46:08.126Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-12T06:46:08.126Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Nsrl" @ ORG_cd5b7b9f
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T06:46:08.285Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Nsrl @ ORG_cd5b7b9f in #🤖・ai-jobs
[2025-12-12T06:46:08.285Z] [BOT] ✅ Industry: Software Engineer 1 - Nsrl @ ORG_cd5b7b9f
[2025-12-12T06:46:09.918Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Nsrl @ ORG_cd5b7b9f in #💻・remote-usa
[2025-12-12T06:46:09.919Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T06:46:11.420Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Nsrl @ ORG_cd5b7b9f (instance #1)
[2025-12-12T06:46:11.420Z] [BOT] 💾 BEFORE ARCHIVING: 86 jobs in database
✅ No jobs to archive (all 86 jobs within 7-day window)
[2025-12-12T06:46:11.422Z] [BOT] 💾 Saved posted_jobs.json: 86 active jobs
[2025-12-12T06:46:11.422Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T06:46:14.423Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-12-12T06:46:14.423Z] [BOT] ⏭️  Skipping duplicate: JID_155c0908-analytics_r146913 (posted within 7 days)
⏭️  Skipping duplicate: JID_20575f82-analyst_r233902 (posted within 7 days)
[2025-12-12T06:46:14.423Z] [BOT] ⏭️  Skipping duplicate: JID_457168e7-only_confidential_executive_recruiting-JID_c08be40b-specialist_r5024513-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_1cf4fc55-nsrl_r-75893 (posted within 7 days)
[2025-12-12T06:46:14.423Z] [BOT] ⏭️  Skipping duplicate: JID_e4b8847e-coordinator_jr7544 (posted within 7 days)
[2025-12-12T06:46:14.428Z] [BOT] ✅ Loaded pending queue: 820 total (810 pending, 10 enriched, 0 posted)
[2025-12-12T06:46:14.440Z] [BOT] ✅ Saved pending queue: 820 total (755 pending, 5 enriched, 60 posted)
[2025-12-12T06:46:14.440Z] [BOT] 📋 Updated queue: marked 60 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-12T06:46:14.477Z] [BOT] 📂 Loaded 76 existing routing entries
[2025-12-12T06:46:14.513Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2025-12-12T06:46:14.513Z] [BOT] Total entries: 81
   Timestamp: 2025-12-12T06:46:14.512Z
[2025-12-12T06:46:16.524Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2810) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*