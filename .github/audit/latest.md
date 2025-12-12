# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T06:59:01.034Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 5
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T06:58:33.694Z] ========================================
[2025-12-12T06:58:33.695Z] Discord Bot Execution Log
[2025-12-12T06:58:33.695Z] Environment: GitHub Actions
[2025-12-12T06:58:33.696Z] Node Version: v20.19.6
[2025-12-12T06:58:33.696Z] ========================================
[2025-12-12T06:58:33.696Z] Environment Variables Check:
[2025-12-12T06:58:33.696Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T06:58:33.696Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T06:58:33.696Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T06:58:33.696Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T06:58:33.696Z] 
Multi-Channel Configuration:
[2025-12-12T06:58:33.696Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T06:58:33.696Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T06:58:33.697Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T06:58:33.697Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T06:58:33.697Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T06:58:33.697Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T06:58:33.697Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T06:58:33.697Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T06:58:33.697Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T06:58:33.697Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T06:58:33.697Z] 
Data Files Check:
[2025-12-12T06:58:33.698Z] .github/data/new_jobs.json: ✅ Exists (10 items, 159789 bytes)
[2025-12-12T06:58:33.699Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 56023 bytes)
[2025-12-12T06:58:33.699Z] 
========================================
[2025-12-12T06:58:33.699Z] Starting Enhanced Discord Bot...
[2025-12-12T06:58:33.699Z] ========================================
[2025-12-12T06:58:34.279Z] [BOT] ✅ Loaded V2 database: 86 jobs
[2025-12-12T06:58:34.824Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T06:58:34.824Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T06:58:34.825Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T06:58:34.826Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T06:58:34.945Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 193
[2025-12-12T06:58:34.946Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-12T06:58:34.946Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
[2025-12-12T06:58:34.946Z] [BOT] ⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
⏭️  Skipping duplicate: JID_54b586ca (posted within 7 days)
[2025-12-12T06:58:34.946Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Intuit
⏭️  Skipping duplicate: JID_3345e37e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer I, Frontend at Twitch
⏭️  Skipping duplicate: JID_abad3e00 (posted within 7 days)
⏭️ Skipping already posted: SAP Developer - Level 1 at Cintas
[2025-12-12T06:58:34.947Z] [BOT] 📬 Found 5 new jobs (5 already posted)...
[2025-12-12T06:58:34.947Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
📋 After data quality filter: 5 jobs (0 invalid)
[2025-12-12T06:58:34.948Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2025-12-12T06:58:34.948Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T06:58:34.950Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-12T06:58:34.950Z] [BOT] 📍 [ROUTING] "Application Engineer" @ ORG_316d43c0 Design Systems
[2025-12-12T06:58:34.950Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T06:58:34.954Z] [BOT ERROR] (node:2768) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T06:58:35.181Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_316d43c0 Design Systems in #💻・tech-jobs
  ✅ Industry: Application Engineer @ ORG_316d43c0 Design Systems
[2025-12-12T06:58:36.853Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_316d43c0 Design Systems in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-12T06:58:38.354Z] [BOT] 💾 Marked as posted: Application Engineer @ ORG_316d43c0 Design Systems (instance #1)
[2025-12-12T06:58:38.355Z] [BOT] 💾 BEFORE ARCHIVING: 87 jobs in database
[2025-12-12T06:58:38.355Z] [BOT] ✅ No jobs to archive (all 87 jobs within 7-day window)
[2025-12-12T06:58:38.367Z] [BOT] 💾 Saved posted_jobs.json: 87 active jobs
[2025-12-12T06:58:38.367Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Product Data Management Specialist – Associate or Mid-Level" @ ORG_b344d80e Boeing Company
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T06:58:38.515Z] [BOT] ✅ Created forum post: 🏢 Product Data Management Specialist – Associate or Mid-Level @ ORG_b344d80e Boeing Company in #💻・tech-jobs
[2025-12-12T06:58:38.516Z] [BOT] ✅ Industry: Product Data Management Specialist – Associate or Mid-Level @ ORG_b344d80e Boeing Company
[2025-12-12T06:58:40.164Z] [BOT] ✅ Created forum post: 🏢 Product Data Management Specialist – Associate or Mid-Level @ ORG_b344d80e Boeing Company in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-12T06:58:41.664Z] [BOT] 💾 Marked as posted: Product Data Management Specialist – Associate or Mid-Level @ ORG_b344d80e Boeing Company (instance #1)
[2025-12-12T06:58:41.665Z] [BOT] 💾 BEFORE ARCHIVING: 88 jobs in database
✅ No jobs to archive (all 88 jobs within 7-day window)
[2025-12-12T06:58:41.666Z] [BOT] 💾 Saved posted_jobs.json: 88 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T06:58:44.666Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-12T06:58:44.667Z] [BOT] 📍 [ROUTING] "Entry-Level AI/ML Software Engineer" @ ORG_1954b120
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T06:58:44.898Z] [BOT] ✅ Created forum post: 🏢 Entry-Level AI/ML Software Engineer @ ORG_1954b120 in #🤖・ai-jobs
[2025-12-12T06:58:44.898Z] [BOT] ✅ Industry: Entry-Level AI/ML Software Engineer @ ORG_1954b120
[2025-12-12T06:58:46.540Z] [BOT] ✅ Created forum post: 🏢 Entry-Level AI/ML Software Engineer @ ORG_1954b120 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T06:58:48.042Z] [BOT] 💾 Marked as posted: Entry-Level AI/ML Software Engineer @ ORG_1954b120 (instance #1)
[2025-12-12T06:58:48.042Z] [BOT] 💾 BEFORE ARCHIVING: 89 jobs in database
✅ No jobs to archive (all 89 jobs within 7-day window)
[2025-12-12T06:58:48.044Z] [BOT] 💾 Saved posted_jobs.json: 89 active jobs
[2025-12-12T06:58:48.044Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "AI Engineer 2" @ ORG_37856574 Health
   Category: AI (matched: "machine learning")
[2025-12-12T06:58:48.044Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T06:58:48.387Z] [BOT] ✅ Created forum post: 🏢 AI Engineer 2 @ ORG_37856574 Health in #🤖・ai-jobs
[2025-12-12T06:58:48.387Z] [BOT] ✅ Industry: AI Engineer 2 @ ORG_37856574 Health
[2025-12-12T06:58:50.013Z] [BOT] ✅ Created forum post: 🏢 AI Engineer 2 @ ORG_37856574 Health in #🌧️・seattle
[2025-12-12T06:58:50.013Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-12T06:58:51.514Z] [BOT] 💾 Marked as posted: AI Engineer 2 @ ORG_37856574 Health (instance #1)
[2025-12-12T06:58:51.514Z] [BOT] 💾 BEFORE ARCHIVING: 90 jobs in database
[2025-12-12T06:58:51.514Z] [BOT] ✅ No jobs to archive (all 90 jobs within 7-day window)
[2025-12-12T06:58:51.516Z] [BOT] 💾 Saved posted_jobs.json: 90 active jobs
[2025-12-12T06:58:51.516Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer" @ ORG_5132f94c
   Category: AI (matched: "AI/ML")
[2025-12-12T06:58:51.516Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T06:58:52.149Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_5132f94c in #🤖・ai-jobs
  ✅ Industry: Software Engineer @ ORG_5132f94c
[2025-12-12T06:58:53.819Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_5132f94c in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-12T06:58:55.319Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_5132f94c (instance #1)
[2025-12-12T06:58:55.319Z] [BOT] 💾 BEFORE ARCHIVING: 91 jobs in database
✅ No jobs to archive (all 91 jobs within 7-day window)
[2025-12-12T06:58:55.320Z] [BOT] 💾 Saved posted_jobs.json: 91 active jobs
[2025-12-12T06:58:55.321Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T06:58:58.321Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-12-12T06:58:58.321Z] [BOT] ⏭️  Skipping duplicate: JID_1980d06d-external_careers-JID_62bb63d8-engineer_r52105 (posted within 7 days)
[2025-12-12T06:58:58.322Z] [BOT] ⏭️  Skipping duplicate: JID_8701db74-engineer_320317 (posted within 7 days)
⏭️  Skipping duplicate: JID_0c2d9b4d-vcuhealth_careers-JID_c8a25921-ii_r40510 (posted within 7 days)
⏭️  Skipping duplicate: JID_011c0f58-engineer_r58789 (posted within 7 days)
[2025-12-12T06:58:58.322Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ef1edd14-_jr2025485608-1 (posted within 7 days)
[2025-12-12T06:58:58.327Z] [BOT] ✅ Loaded pending queue: 863 total (853 pending, 10 enriched, 0 posted)
[2025-12-12T06:58:58.340Z] [BOT] ✅ Saved pending queue: 863 total (793 pending, 5 enriched, 65 posted)
📋 Updated queue: marked 65 jobs as posted
[2025-12-12T06:58:58.341Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-12T06:58:58.379Z] [BOT] 📂 Loaded 81 existing routing entries
[2025-12-12T06:58:58.415Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 86
[2025-12-12T06:58:58.415Z] [BOT] Timestamp: 2025-12-12T06:58:58.415Z
[2025-12-12T06:59:00.428Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2768) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*