# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T05:40:16.246Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T05:39:37.251Z] ========================================
[2025-12-12T05:39:37.253Z] Discord Bot Execution Log
[2025-12-12T05:39:37.253Z] Environment: GitHub Actions
[2025-12-12T05:39:37.253Z] Node Version: v20.19.6
[2025-12-12T05:39:37.253Z] ========================================
[2025-12-12T05:39:37.253Z] Environment Variables Check:
[2025-12-12T05:39:37.253Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T05:39:37.253Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T05:39:37.253Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T05:39:37.253Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T05:39:37.253Z] 
Multi-Channel Configuration:
[2025-12-12T05:39:37.254Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T05:39:37.254Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T05:39:37.254Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T05:39:37.254Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T05:39:37.254Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T05:39:37.254Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T05:39:37.254Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T05:39:37.254Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T05:39:37.254Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T05:39:37.254Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T05:39:37.254Z] 
Data Files Check:
[2025-12-12T05:39:37.256Z] .github/data/new_jobs.json: ✅ Exists (10 items, 153061 bytes)
[2025-12-12T05:39:37.256Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 34937 bytes)
[2025-12-12T05:39:37.256Z] 
========================================
[2025-12-12T05:39:37.256Z] Starting Enhanced Discord Bot...
[2025-12-12T05:39:37.256Z] ========================================
[2025-12-12T05:39:37.843Z] [BOT] ✅ Loaded V2 database: 55 jobs
[2025-12-12T05:39:38.596Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T05:39:38.597Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T05:39:38.597Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T05:39:38.598Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T05:39:38.713Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 164
[2025-12-12T05:39:38.714Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-12T05:39:38.714Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
[2025-12-12T05:39:38.714Z] [BOT] ⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
⏭️  Skipping duplicate: JID_54b586ca (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2025-12-12T05:39:38.715Z] [BOT] 📬 Found 7 new jobs (3 already posted)...
[2025-12-12T05:39:38.715Z] [BOT] 📋 After blacklist filter: 7 jobs (0 blacklisted)
[2025-12-12T05:39:38.715Z] [BOT] 📋 After data quality filter: 7 jobs (0 invalid)
[2025-12-12T05:39:38.716Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2025-12-12T05:39:38.716Z] [BOT] 📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T05:39:38.718Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-12T05:39:38.718Z] [BOT] 📍 [ROUTING] "Nuclear Analysis Technician C / Engineering Technicians" @ ORG_41a6741einghouse Electric Company
[2025-12-12T05:39:38.718Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:39:38.723Z] [BOT ERROR] (node:2993) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T05:39:38.950Z] [BOT] ✅ Created forum post: 🏢 Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
  ✅ Industry: Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company
[2025-12-12T05:39:40.686Z] [BOT] ✅ Created forum post: 🏢 Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T05:39:42.186Z] [BOT] 💾 Marked as posted: Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company (instance #1)
[2025-12-12T05:39:42.186Z] [BOT] 💾 BEFORE ARCHIVING: 56 jobs in database
[2025-12-12T05:39:42.187Z] [BOT] ✅ No jobs to archive (all 56 jobs within 7-day window)
[2025-12-12T05:39:42.193Z] [BOT] 💾 Saved posted_jobs.json: 56 active jobs
[2025-12-12T05:39:42.193Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Associate Mobile App Developer" @ ORG_8658065e Health
[2025-12-12T05:39:42.193Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:39:42.382Z] [BOT] ✅ Created forum post: 🏢 Associate Mobile App Developer @ ORG_8658065e Health in #💻・tech-jobs
[2025-12-12T05:39:42.382Z] [BOT] ✅ Industry: Associate Mobile App Developer @ ORG_8658065e Health
[2025-12-12T05:39:43.883Z] [BOT] 💾 Marked as posted: Associate Mobile App Developer @ ORG_8658065e Health (instance #1)
[2025-12-12T05:39:43.884Z] [BOT] 💾 BEFORE ARCHIVING: 57 jobs in database
✅ No jobs to archive (all 57 jobs within 7-day window)
[2025-12-12T05:39:43.885Z] [BOT] 💾 Saved posted_jobs.json: 57 active jobs
[2025-12-12T05:39:43.885Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer 1 - Backend - Healthcare" @ ORG_3acb0a4a
   Category: TECH (matched: "software")
[2025-12-12T05:39:43.885Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:39:44.056Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Backend - Healthcare @ ORG_3acb0a4a in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Backend - Healthcare @ ORG_3acb0a4a
[2025-12-12T05:39:45.766Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Backend - Healthcare @ ORG_3acb0a4a in #🚌・boston
[2025-12-12T05:39:45.766Z] [BOT] ✅ Location: 🚌・boston
[2025-12-12T05:39:47.267Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Backend - Healthcare @ ORG_3acb0a4a (instance #1)
[2025-12-12T05:39:47.267Z] [BOT] 💾 BEFORE ARCHIVING: 58 jobs in database
✅ No jobs to archive (all 58 jobs within 7-day window)
[2025-12-12T05:39:47.268Z] [BOT] 💾 Saved posted_jobs.json: 58 active jobs
[2025-12-12T05:39:47.268Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Market Risk Analytics Associate, Stress Testing and AI Integration" @ ORG_02281b3b Stanley
   Category: TECH (matched: "analytics")
[2025-12-12T05:39:47.268Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:39:47.450Z] [BOT] ✅ Created forum post: 🏢 Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley in #💻・tech-jobs
[2025-12-12T05:39:47.450Z] [BOT] ✅ Industry: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley
[2025-12-12T05:39:49.214Z] [BOT] ✅ Created forum post: 🏢 Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-12T05:39:50.716Z] [BOT] 💾 Marked as posted: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley (instance #1)
[2025-12-12T05:39:50.716Z] [BOT] 💾 BEFORE ARCHIVING: 59 jobs in database
✅ No jobs to archive (all 59 jobs within 7-day window)
[2025-12-12T05:39:50.717Z] [BOT] 💾 Saved posted_jobs.json: 59 active jobs
[2025-12-12T05:39:50.718Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Applied Scientist - AI & Robotics (PhD) - Early Career" @ ORG_c910d474 Motors
   Category: TECH (matched: "machine learning")
[2025-12-12T05:39:50.718Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T05:39:50.878Z] [BOT] ✅ Created forum post: 🏢 Applied Scientist - AI & Robotics (PhD) - Early Career @ ORG_c910d474 Motors in #💻・tech-jobs
  ✅ Industry: Applied Scientist - AI & Robotics (PhD) - Early Career @ ORG_c910d474 Motors
[2025-12-12T05:39:52.801Z] [BOT] ✅ Created forum post: 🏢 Applied Scientist - AI & Robotics (PhD) - Early Career @ ORG_c910d474 Motors in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-12T05:39:54.302Z] [BOT] 💾 Marked as posted: Applied Scientist - AI & Robotics (PhD) - Early Career @ ORG_c910d474 Motors (instance #1)
[2025-12-12T05:39:54.302Z] [BOT] 💾 BEFORE ARCHIVING: 60 jobs in database
✅ No jobs to archive (all 60 jobs within 7-day window)
[2025-12-12T05:39:54.304Z] [BOT] 💾 Saved posted_jobs.json: 60 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T05:39:57.305Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-12T05:39:57.305Z] [BOT] 📍 [ROUTING] "Junior Transportation Data Scientist" @ ORG_d51736fa
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T05:39:57.929Z] [BOT] ✅ Created forum post: 🏢 Junior Transportation Data Scientist @ ORG_d51736fa in #🤖・ai-jobs
  ✅ Industry: Junior Transportation Data Scientist @ ORG_d51736fa
[2025-12-12T05:39:59.649Z] [BOT] ✅ Created forum post: 🏢 Junior Transportation Data Scientist @ ORG_d51736fa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T05:40:01.150Z] [BOT] 💾 Marked as posted: Junior Transportation Data Scientist @ ORG_d51736fa (instance #1)
[2025-12-12T05:40:01.150Z] [BOT] 💾 BEFORE ARCHIVING: 61 jobs in database
✅ No jobs to archive (all 61 jobs within 7-day window)
[2025-12-12T05:40:01.152Z] [BOT] 💾 Saved posted_jobs.json: 61 active jobs
[2025-12-12T05:40:01.152Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T05:40:04.152Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-12T05:40:04.152Z] [BOT] 📍 [ROUTING] "Associate Data Engineer/ Data Engineer" @ ORG_f3f2248d Grumman
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T05:40:06.913Z] [BOT] ✅ Created forum post: 🏢 Associate Data Engineer/ Data Engineer @ ORG_f3f2248d Grumman in #📈・JID_fb739488
  ✅ Industry: Associate Data Engineer/ Data Engineer @ ORG_f3f2248d Grumman
[2025-12-12T05:40:08.592Z] [BOT] ✅ Created forum post: 🏢 Associate Data Engineer/ Data Engineer @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T05:40:10.093Z] [BOT] 💾 Marked as posted: Associate Data Engineer/ Data Engineer @ ORG_f3f2248d Grumman (instance #1)
[2025-12-12T05:40:10.093Z] [BOT] 💾 BEFORE ARCHIVING: 62 jobs in database
✅ No jobs to archive (all 62 jobs within 7-day window)
[2025-12-12T05:40:10.095Z] [BOT] 💾 Saved posted_jobs.json: 62 active jobs
[2025-12-12T05:40:10.095Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T05:40:13.096Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2025-12-12T05:40:13.096Z] [BOT] ⏭️  Skipping duplicate: JID_b003e995 (posted within 7 days)
[2025-12-12T05:40:13.096Z] [BOT] ⏭️  Skipping duplicate: JID_7ec9de17-developer_r402 (posted within 7 days)
⏭️  Skipping duplicate: JID_35ed794f (posted within 7 days)
⏭️  Skipping duplicate: JID_6804755e-integration_pt-jr025318 (posted within 7 days)
[2025-12-12T05:40:13.096Z] [BOT] ⏭️  Skipping duplicate: JID_6997f556-scientist_r-00171849 (posted within 7 days)
[2025-12-12T05:40:13.096Z] [BOT] ⏭️  Skipping duplicate: JID_a5ada689-careers_gm-JID_c402ef7f-career_jr-202523975 (posted within 7 days)
⏭️  Skipping duplicate: JID_d93ab0bf-northrop_grumman_external_site-JID_d8293941-engineer_r10213226 (posted within 7 days)
[2025-12-12T05:40:13.101Z] [BOT] ✅ Loaded pending queue: 633 total (623 pending, 10 enriched, 0 posted)
[2025-12-12T05:40:13.111Z] [BOT] ✅ Saved pending queue: 633 total (574 pending, 3 enriched, 56 posted)
📋 Updated queue: marked 56 jobs as posted
[2025-12-12T05:40:13.111Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-12T05:40:13.148Z] [BOT] 📂 Loaded 52 existing routing entries
[2025-12-12T05:40:13.184Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
[2025-12-12T05:40:13.184Z] [BOT] Total entries: 59
   Timestamp: 2025-12-12T05:40:13.184Z
[2025-12-12T05:40:15.197Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2993) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*