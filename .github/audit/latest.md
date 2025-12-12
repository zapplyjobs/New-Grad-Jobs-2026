# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T04:01:56.310Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T03:58:37.517Z] ========================================
[2025-12-12T03:58:37.519Z] Discord Bot Execution Log
[2025-12-12T03:58:37.519Z] Environment: GitHub Actions
[2025-12-12T03:58:37.519Z] Node Version: v20.19.6
[2025-12-12T03:58:37.519Z] ========================================
[2025-12-12T03:58:37.519Z] Environment Variables Check:
[2025-12-12T03:58:37.519Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T03:58:37.519Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T03:58:37.519Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T03:58:37.519Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T03:58:37.519Z] 
Multi-Channel Configuration:
[2025-12-12T03:58:37.520Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T03:58:37.520Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T03:58:37.520Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T03:58:37.520Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T03:58:37.520Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T03:58:37.520Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T03:58:37.520Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T03:58:37.520Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T03:58:37.520Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T03:58:37.520Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T03:58:37.520Z] 
Data Files Check:
[2025-12-12T03:58:37.521Z] .github/data/new_jobs.json: ✅ Exists (10 items, 137639 bytes)
[2025-12-12T03:58:37.522Z] .github/data/posted_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-12T03:58:37.522Z] 
========================================
[2025-12-12T03:58:37.522Z] Starting Enhanced Discord Bot...
[2025-12-12T03:58:37.522Z] ========================================
[2025-12-12T03:58:38.081Z] [BOT] 🔄 Migrating V1 format to V2...
[2025-12-12T03:58:38.081Z] [BOT] ✅ Migrated 0 V1 jobs to V2 format
   All migrated jobs will be archived on next save (>7 days old)
[2025-12-12T03:58:38.478Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T03:58:38.478Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T03:58:38.478Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T03:58:38.479Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T03:58:38.584Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 112
[2025-12-12T03:58:38.585Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-12T03:58:38.586Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-12T03:58:38.586Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-12T03:58:38.586Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T03:58:38.589Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-12T03:58:38.589Z] [BOT] 📍 [ROUTING] "Data Science Engineer - New College Grad-Master's/PhD" @ ORG_0c79a9c2 Materials
[2025-12-12T03:58:38.589Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T03:58:38.593Z] [BOT ERROR] (node:3226) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T04:01:11.507Z] [BOT] ✅ Created forum post: 🏢 Data Science Engineer - New College Grad-Master's/PhD @ ORG_0c79a9c2 Materials in #🤖・ai-jobs
[2025-12-12T04:01:11.508Z] [BOT] ✅ Industry: Data Science Engineer - New College Grad-Master's/PhD @ ORG_0c79a9c2 Materials
[2025-12-12T04:01:13.418Z] [BOT] ✅ Created forum post: 🏢 Data Science Engineer - New College Grad-Master's/PhD @ ORG_0c79a9c2 Materials in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-12T04:01:14.920Z] [BOT] 💾 Marked as posted: Data Science Engineer - New College Grad-Master's/PhD @ ORG_0c79a9c2 Materials (instance #1)
[2025-12-12T04:01:14.920Z] [BOT] 💾 BEFORE ARCHIVING: 1 jobs in database
[2025-12-12T04:01:14.920Z] [BOT] ✅ No jobs to archive (all 1 jobs within 7-day window)
[2025-12-12T04:01:14.922Z] [BOT] 💾 Saved posted_jobs.json: 1 active jobs
[2025-12-12T04:01:14.922Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "GPU and SoC Modelling Architect – New College Grad" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T04:01:15.211Z] [BOT] ✅ Created forum post: 🏢 GPU and SoC Modelling Architect – New College Grad @ ORG_0890f456 in #🤖・ai-jobs
[2025-12-12T04:01:15.212Z] [BOT] ✅ Industry: GPU and SoC Modelling Architect – New College Grad @ ORG_0890f456
[2025-12-12T04:01:17.022Z] [BOT] ✅ Created forum post: 🏢 GPU and SoC Modelling Architect – New College Grad @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-12T04:01:18.524Z] [BOT] 💾 Marked as posted: GPU and SoC Modelling Architect – New College Grad @ ORG_0890f456 (instance #1)
[2025-12-12T04:01:18.524Z] [BOT] 💾 BEFORE ARCHIVING: 2 jobs in database
✅ No jobs to archive (all 2 jobs within 7-day window)
[2025-12-12T04:01:18.525Z] [BOT] 💾 Saved posted_jobs.json: 2 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T04:01:18.525Z] [BOT] 📍 [ROUTING] "AI Software Engineer-Enterprise AI" @ ORG_2965600f Trust
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T04:01:20.089Z] [BOT] ✅ Created forum post: 🏢 AI Software Engineer-Enterprise AI @ ORG_2965600f Trust in #🤖・ai-jobs
  ✅ Industry: AI Software Engineer-Enterprise AI @ ORG_2965600f Trust
[2025-12-12T04:01:21.795Z] [BOT] ✅ Created forum post: 🏢 AI Software Engineer-Enterprise AI @ ORG_2965600f Trust in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-12T04:01:23.296Z] [BOT] 💾 Marked as posted: AI Software Engineer-Enterprise AI @ ORG_2965600f Trust (instance #1)
[2025-12-12T04:01:23.297Z] [BOT] 💾 BEFORE ARCHIVING: 3 jobs in database
✅ No jobs to archive (all 3 jobs within 7-day window)
[2025-12-12T04:01:23.298Z] [BOT] 💾 Saved posted_jobs.json: 3 active jobs
[2025-12-12T04:01:23.298Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T04:01:26.299Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-12T04:01:26.299Z] [BOT] 📍 [ROUTING] "Backend Software Engineer" @ ORG_d7f4ec4a
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:01:26.594Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer @ ORG_d7f4ec4a in #💻・tech-jobs
  ✅ Industry: Backend Software Engineer @ ORG_d7f4ec4a
[2025-12-12T04:01:28.332Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer @ ORG_d7f4ec4a in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-12T04:01:29.833Z] [BOT] 💾 Marked as posted: Backend Software Engineer @ ORG_d7f4ec4a (instance #1)
[2025-12-12T04:01:29.833Z] [BOT] 💾 BEFORE ARCHIVING: 4 jobs in database
✅ No jobs to archive (all 4 jobs within 7-day window)
[2025-12-12T04:01:29.835Z] [BOT] 💾 Saved posted_jobs.json: 4 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T04:01:29.835Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:01:29.993Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-12T04:01:31.640Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-12T04:01:33.141Z] [BOT] 💾 Marked as posted: Software Development Engineer @ ORG_72fd3ae0 (instance #1)
[2025-12-12T04:01:33.141Z] [BOT] 💾 BEFORE ARCHIVING: 5 jobs in database
✅ No jobs to archive (all 5 jobs within 7-day window)
[2025-12-12T04:01:33.142Z] [BOT] 💾 Saved posted_jobs.json: 5 active jobs
[2025-12-12T04:01:33.142Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer 1 - 2" @ ORG_f3dce276
[2025-12-12T04:01:33.142Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:01:34.330Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - 2 @ ORG_f3dce276 in #💻・tech-jobs
[2025-12-12T04:01:34.331Z] [BOT] ✅ Industry: Software Engineer 1 - 2 @ ORG_f3dce276
[2025-12-12T04:01:36.004Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - 2 @ ORG_f3dce276 in #💻・remote-usa
[2025-12-12T04:01:36.004Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T04:01:37.505Z] [BOT] 💾 Marked as posted: Software Engineer 1 - 2 @ ORG_f3dce276 (instance #1)
[2025-12-12T04:01:37.505Z] [BOT] 💾 BEFORE ARCHIVING: 6 jobs in database
✅ No jobs to archive (all 6 jobs within 7-day window)
[2025-12-12T04:01:37.506Z] [BOT] 💾 Saved posted_jobs.json: 6 active jobs
[2025-12-12T04:01:37.507Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T04:01:37.507Z] [BOT] 💾 Marked as posted: Software Engineer 1 - 1 @ ORG_f3dce276 (instance #1)
[2025-12-12T04:01:37.507Z] [BOT] 💾 BEFORE ARCHIVING: 7 jobs in database
✅ No jobs to archive (all 7 jobs within 7-day window)
[2025-12-12T04:01:37.508Z] [BOT] 💾 Saved posted_jobs.json: 7 active jobs
[2025-12-12T04:01:37.508Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Associate GIS Model Engineer" @ ORG_df6ef51e
[2025-12-12T04:01:37.508Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:01:37.664Z] [BOT] ✅ Created forum post: 🏢 Associate GIS Model Engineer @ ORG_df6ef51e in #💻・tech-jobs
[2025-12-12T04:01:37.665Z] [BOT] ✅ Industry: Associate GIS Model Engineer @ ORG_df6ef51e
[2025-12-12T04:01:39.277Z] [BOT] ✅ Created forum post: 🏢 Associate GIS Model Engineer @ ORG_df6ef51e in #💻・remote-usa
[2025-12-12T04:01:39.278Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T04:01:40.780Z] [BOT] 💾 Marked as posted: Associate GIS Model Engineer @ ORG_df6ef51e (instance #1)
[2025-12-12T04:01:40.780Z] [BOT] 💾 BEFORE ARCHIVING: 8 jobs in database
✅ No jobs to archive (all 8 jobs within 7-day window)
[2025-12-12T04:01:40.781Z] [BOT] 💾 Saved posted_jobs.json: 8 active jobs
[2025-12-12T04:01:40.781Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T04:01:43.782Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-12T04:01:43.782Z] [BOT] 📍 [ROUTING] "Data Analytics Engineer" @ ORG_1292a8d0
   Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T04:01:44.002Z] [BOT] ✅ Created forum post: 🏢 Data Analytics Engineer @ ORG_1292a8d0 in #📈・JID_fb739488
[2025-12-12T04:01:44.002Z] [BOT] ✅ Industry: Data Analytics Engineer @ ORG_1292a8d0
[2025-12-12T04:01:45.855Z] [BOT] ✅ Created forum post: 🏢 Data Analytics Engineer @ ORG_1292a8d0 in #🦢・los-angeles
[2025-12-12T04:01:45.855Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-12T04:01:47.356Z] [BOT] 💾 Marked as posted: Data Analytics Engineer @ ORG_1292a8d0 (instance #1)
[2025-12-12T04:01:47.356Z] [BOT] 💾 BEFORE ARCHIVING: 9 jobs in database
✅ No jobs to archive (all 9 jobs within 7-day window)
[2025-12-12T04:01:47.358Z] [BOT] 💾 Saved posted_jobs.json: 9 active jobs
[2025-12-12T04:01:47.358Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Associate Enterprise Data Analyst" @ ORG_ec7d56a0 Cross and Blue Shield of Minnesota
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-12T04:01:47.358Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T04:01:47.499Z] [BOT] ✅ Created forum post: 🏢 Associate Enterprise Data Analyst @ ORG_ec7d56a0 Cross and Blue Shield of Minnesota in #📈・JID_fb739488
  ✅ Industry: Associate Enterprise Data Analyst @ ORG_ec7d56a0 Cross and Blue Shield of Minnesota
[2025-12-12T04:01:49.139Z] [BOT] ✅ Created forum post: 🏢 Associate Enterprise Data Analyst @ ORG_ec7d56a0 Cross and Blue Shield of Minnesota in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T04:01:50.640Z] [BOT] 💾 Marked as posted: Associate Enterprise Data Analyst @ ORG_ec7d56a0 Cross and Blue Shield of Minnesota (instance #1)
[2025-12-12T04:01:50.640Z] [BOT] 💾 BEFORE ARCHIVING: 10 jobs in database
✅ No jobs to archive (all 10 jobs within 7-day window)
[2025-12-12T04:01:50.642Z] [BOT] 💾 Saved posted_jobs.json: 10 active jobs
[2025-12-12T04:01:50.642Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T04:01:53.643Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-12T04:01:53.643Z] [BOT] ⏭️  Skipping duplicate: JID_d864ec9b-_r2519402 (posted within 7 days)
[2025-12-12T04:01:53.643Z] [BOT] ⏭️  Skipping duplicate: JID_2f317ae4-2026_jr2009934 (posted within 7 days)
⏭️  Skipping duplicate: JID_19f24911 (posted within 7 days)
[2025-12-12T04:01:53.643Z] [BOT] ⏭️  Skipping duplicate: JID_3826ac21 (posted within 7 days)
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_098be064-engineer_r160351-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_f9bb03c4-2_r-266544 (posted within 7 days)
[2025-12-12T04:01:53.643Z] [BOT] ⏭️  Skipping duplicate: JID_0a831e92-ai_r148468 (posted within 7 days)
⏭️  Skipping duplicate: JID_7efebfaf-analyst_r0006011-1 (posted within 7 days)
[2025-12-12T04:01:53.644Z] [BOT] ⏭️  Skipping duplicate: JID_7499e29d-engineer_r8192 (posted within 7 days)
[2025-12-12T04:01:53.646Z] [BOT] ✅ Loaded pending queue: 106 total (96 pending, 10 enriched, 0 posted)
[2025-12-12T04:01:53.649Z] [BOT] ✅ Saved pending queue: 106 total (96 pending, 1 enriched, 9 posted)
[2025-12-12T04:01:53.649Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-12T04:01:53.685Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2025-12-12T04:01:53.685Z] [BOT] Total entries: 9
   Timestamp: 2025-12-12T04:01:53.685Z
[2025-12-12T04:01:55.696Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3226) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*