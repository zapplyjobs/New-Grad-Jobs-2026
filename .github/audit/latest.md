# Discord Bot Execution Audit
**Timestamp:** 2025-12-14T18:52:26.061Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-14T18:51:40.911Z] ========================================
[2025-12-14T18:51:40.913Z] Discord Bot Execution Log
[2025-12-14T18:51:40.913Z] Environment: GitHub Actions
[2025-12-14T18:51:40.913Z] Node Version: v20.19.6
[2025-12-14T18:51:40.913Z] ========================================
[2025-12-14T18:51:40.913Z] Environment Variables Check:
[2025-12-14T18:51:40.913Z] DISCORD_TOKEN: ✅ Set
[2025-12-14T18:51:40.914Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-14T18:51:40.914Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-14T18:51:40.914Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-14T18:51:40.914Z] 
Multi-Channel Configuration:
[2025-12-14T18:51:40.914Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-14T18:51:40.914Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-14T18:51:40.914Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-14T18:51:40.914Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-14T18:51:40.914Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-14T18:51:40.914Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-14T18:51:40.914Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-14T18:51:40.914Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-14T18:51:40.915Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-14T18:51:40.915Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-14T18:51:40.915Z] 
Data Files Check:
[2025-12-14T18:51:40.916Z] .github/data/new_jobs.json: ✅ Exists (8 items, 76922 bytes)
[2025-12-14T18:51:40.916Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 80763 bytes)
[2025-12-14T18:51:40.916Z] 
========================================
[2025-12-14T18:51:40.916Z] Starting Enhanced Discord Bot...
[2025-12-14T18:51:40.916Z] ========================================
[2025-12-14T18:51:41.479Z] [BOT] ✅ Loaded V2 database: 126 jobs
[2025-12-14T18:51:42.520Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-14T18:51:42.520Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-14T18:51:42.520Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-14T18:51:42.521Z] [BOT] 📦 Exporting 8 jobs to encrypted JSON...
[2025-12-14T18:51:42.625Z] [BOT] ✅ Export complete: Added 0, Skipped 8, Total 132
[2025-12-14T18:51:42.627Z] [BOT] 📬 Found 8 new jobs (0 already posted)...
[2025-12-14T18:51:42.627Z] [BOT] 📋 After blacklist filter: 8 jobs (0 blacklisted)
[2025-12-14T18:51:42.627Z] [BOT] 📋 After data quality filter: 8 jobs (0 invalid)
[2025-12-14T18:51:42.628Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2025-12-14T18:51:42.628Z] [BOT] 📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-14T18:51:42.631Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-14T18:51:42.632Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
[2025-12-14T18:51:42.632Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-14T18:51:42.636Z] [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-14T18:51:42.816Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🤖・ai-jobs
[2025-12-14T18:51:42.816Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-14T18:51:44.656Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🗽・new-york
[2025-12-14T18:51:44.656Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-14T18:51:46.156Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-14T18:51:46.156Z] [BOT] 💾 BEFORE ARCHIVING: 127 jobs in database
[2025-12-14T18:51:46.156Z] [BOT] ✅ No jobs to archive (all 127 jobs within 7-day window)
[2025-12-14T18:51:46.165Z] [BOT] 💾 Saved posted_jobs.json: 127 active jobs
[2025-12-14T18:51:46.165Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Operations Engineer 1" @ ORG_fa31032b
   Category: AI (matched: "AI/ML")
[2025-12-14T18:51:46.165Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2025-12-14T18:51:46.382Z] [BOT] ✅ Created forum post: 🏢 Software Operations Engineer 1 @ ORG_fa31032b in #🤖・ai-jobs
[2025-12-14T18:51:46.382Z] [BOT] ✅ Industry: Software Operations Engineer 1 @ ORG_fa31032b
[2025-12-14T18:51:48.054Z] [BOT] ✅ Created forum post: 🏢 Software Operations Engineer 1 @ ORG_fa31032b in #💻・remote-usa
[2025-12-14T18:51:48.054Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-14T18:51:49.555Z] [BOT] 💾 Marked as posted: Software Operations Engineer 1 @ ORG_fa31032b (instance #1)
[2025-12-14T18:51:49.555Z] [BOT] 💾 BEFORE ARCHIVING: 128 jobs in database
✅ No jobs to archive (all 128 jobs within 7-day window)
[2025-12-14T18:51:49.558Z] [BOT] 💾 Saved posted_jobs.json: 128 active jobs
[2025-12-14T18:51:49.558Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer – New College Graduate 2026" @ ORG_26b253fc
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-14T18:51:49.880Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Graduate 2026 @ ORG_26b253fc in #🤖・ai-jobs
  ✅ Industry: Software Engineer – New College Graduate 2026 @ ORG_26b253fc
[2025-12-14T18:51:51.586Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Graduate 2026 @ ORG_26b253fc in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-14T18:51:53.086Z] [BOT] 💾 Marked as posted: Software Engineer – New College Graduate 2026 @ ORG_26b253fc (instance #1)
[2025-12-14T18:51:53.087Z] [BOT] 💾 BEFORE ARCHIVING: 129 jobs in database
✅ No jobs to archive (all 129 jobs within 7-day window)
[2025-12-14T18:51:53.089Z] [BOT] 💾 Saved posted_jobs.json: 129 active jobs
[2025-12-14T18:51:53.089Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-14T18:51:56.090Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-14T18:51:56.090Z] [BOT] 📍 [ROUTING] "Product Analyst - Digital Advertising" @ ORG_162cc64c Tower
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-14T18:51:56.403Z] [BOT] ✅ Created forum post: 🏢 Product Analyst - Digital Advertising @ ORG_162cc64c Tower in #💻・tech-jobs
  ✅ Industry: Product Analyst - Digital Advertising @ ORG_162cc64c Tower
[2025-12-14T18:51:58.305Z] [BOT] ✅ Created forum post: 🏢 Product Analyst - Digital Advertising @ ORG_162cc64c Tower in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-14T18:51:59.806Z] [BOT] 💾 Marked as posted: Product Analyst - Digital Advertising @ ORG_162cc64c Tower (instance #1)
[2025-12-14T18:51:59.806Z] [BOT] 💾 BEFORE ARCHIVING: 130 jobs in database
✅ No jobs to archive (all 130 jobs within 7-day window)
[2025-12-14T18:51:59.808Z] [BOT] 💾 Saved posted_jobs.json: 130 active jobs
[2025-12-14T18:51:59.808Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-14T18:52:02.809Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-14T18:52:02.809Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-14T18:52:03.199Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
  ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-14T18:52:04.885Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-14T18:52:06.387Z] [BOT] 💾 Marked as posted: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares (instance #1)
[2025-12-14T18:52:06.387Z] [BOT] 💾 BEFORE ARCHIVING: 131 jobs in database
[2025-12-14T18:52:06.387Z] [BOT] ✅ No jobs to archive (all 131 jobs within 7-day window)
[2025-12-14T18:52:06.751Z] [BOT] 💾 Saved posted_jobs.json: 131 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-14T18:52:09.752Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2025-12-14T18:52:09.752Z] [BOT] 📍 [ROUTING] "Data Scientist – Sr - Mid - TRANSMISSION Systems & Asset Health" @ ORG_0baaf6f2 Electric Power
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-14T18:52:10.032Z] [BOT] ✅ Created forum post: 🏢 Data Scientist – Sr - Mid - TRANSMISSION Systems & Asset Health @ ORG_0baaf6f2 Electric Power in #📈・JID_fb739488
  ✅ Industry: Data Scientist – Sr - Mid - TRANSMISSION Systems & Asset Health @ ORG_0baaf6f2 Electric Power
[2025-12-14T18:52:11.937Z] [BOT] ✅ Created forum post: 🏢 Data Scientist – Sr - Mid - TRANSMISSION Systems & Asset Health @ ORG_0baaf6f2 Electric Power in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-14T18:52:13.437Z] [BOT] 💾 Marked as posted: Data Scientist – Sr - Mid - TRANSMISSION Systems & Asset Health @ ORG_0baaf6f2 Electric Power (instance #1)
[2025-12-14T18:52:13.438Z] [BOT] 💾 BEFORE ARCHIVING: 132 jobs in database
✅ No jobs to archive (all 132 jobs within 7-day window)
[2025-12-14T18:52:13.441Z] [BOT] 💾 Saved posted_jobs.json: 132 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-14T18:52:13.441Z] [BOT] 📍 [ROUTING] "2026 Software Engineering Boost Fellowship - Arizona State University" @ ORG_3cfbdbc3
   Category: DATA-SCIENCE (matched: "data science")
[2025-12-14T18:52:13.441Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-14T18:52:13.707Z] [BOT] ✅ Created forum post: 🏢 2026 Software Engineering Boost Fellowship - Arizona State University @ ORG_3cfbdbc3 in #📈・JID_fb739488
[2025-12-14T18:52:13.707Z] [BOT] ✅ Industry: 2026 Software Engineering Boost Fellowship - Arizona State University @ ORG_3cfbdbc3
[2025-12-14T18:52:15.427Z] [BOT] ✅ Created forum post: 🏢 2026 Software Engineering Boost Fellowship - Arizona State University @ ORG_3cfbdbc3 in #🌉・san-francisco
[2025-12-14T18:52:15.427Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-14T18:52:16.928Z] [BOT] 💾 Marked as posted: 2026 Software Engineering Boost Fellowship - Arizona State University @ ORG_3cfbdbc3 (instance #1)
[2025-12-14T18:52:16.928Z] [BOT] 💾 BEFORE ARCHIVING: 133 jobs in database
[2025-12-14T18:52:16.929Z] [BOT] ✅ No jobs to archive (all 133 jobs within 7-day window)
[2025-12-14T18:52:16.931Z] [BOT] 💾 Saved posted_jobs.json: 133 active jobs
[2025-12-14T18:52:16.932Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Junior Data Scientist" @ blend360
[2025-12-14T18:52:16.932Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-14T18:52:17.122Z] [BOT] ✅ Created forum post: 🏢 Junior Data Scientist @ blend360 in #📈・JID_fb739488
[2025-12-14T18:52:17.123Z] [BOT] ✅ Industry: Junior Data Scientist @ blend360
[2025-12-14T18:52:18.784Z] [BOT] ✅ Created forum post: 🏢 Junior Data Scientist @ blend360 in #💻・remote-usa
[2025-12-14T18:52:18.784Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-14T18:52:20.284Z] [BOT] 💾 Marked as posted: Junior Data Scientist @ blend360 (instance #1)
[2025-12-14T18:52:20.285Z] [BOT] 💾 BEFORE ARCHIVING: 134 jobs in database
[2025-12-14T18:52:20.285Z] [BOT] ✅ No jobs to archive (all 134 jobs within 7-day window)
[2025-12-14T18:52:20.287Z] [BOT] 💾 Saved posted_jobs.json: 134 active jobs
[2025-12-14T18:52:20.287Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-14T18:52:23.287Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2025-12-14T18:52:23.288Z] [BOT] ⏭️  Skipping duplicate: JID_c3046257 (posted within 7 days)
[2025-12-14T18:52:23.288Z] [BOT] ⏭️  Skipping duplicate: JID_aed7440b (posted within 7 days)
⏭️  Skipping duplicate: JID_6ff5df0b-_r0067565 (posted within 7 days)
[2025-12-14T18:52:23.288Z] [BOT] ⏭️  Skipping duplicate: JID_537f4c08-health_r12729 (posted within 7 days)
⏭️  Skipping duplicate: JID_316cdba7-i_r46476 (posted within 7 days)
[2025-12-14T18:52:23.288Z] [BOT] ⏭️  Skipping duplicate: JID_df71904f (posted within 7 days)
[2025-12-14T18:52:23.288Z] [BOT] ⏭️  Skipping duplicate: JID_de23e265 (posted within 7 days)
⏭️  Skipping duplicate: JID_8a7cf5ef (posted within 7 days)
[2025-12-14T18:52:23.289Z] [BOT] ✅ Loaded pending queue: 8 total (0 pending, 8 enriched, 0 posted)
[2025-12-14T18:52:23.290Z] [BOT] ✅ Saved pending queue: 8 total (0 pending, 0 enriched, 8 posted)
[2025-12-14T18:52:23.290Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-14T18:52:23.327Z] [BOT] 📂 Loaded 120 existing routing entries
[2025-12-14T18:52:23.364Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-14T18:52:23.364Z] [BOT] New entries: 8
   Total entries: 128
   Timestamp: 2025-12-14T18:52:23.363Z
[2025-12-14T18:52:25.375Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*