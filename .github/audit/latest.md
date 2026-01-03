# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T00:42:30.995Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T00:41:45.862Z] ========================================
[2026-01-03T00:41:45.864Z] Discord Bot Execution Log
[2026-01-03T00:41:45.864Z] Environment: GitHub Actions
[2026-01-03T00:41:45.864Z] Node Version: v20.19.6
[2026-01-03T00:41:45.864Z] ========================================
[2026-01-03T00:41:45.864Z] Environment Variables Check:
[2026-01-03T00:41:45.864Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T00:41:45.864Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T00:41:45.864Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T00:41:45.864Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T00:41:45.864Z] 
Multi-Channel Configuration:
[2026-01-03T00:41:45.865Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T00:41:45.865Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T00:41:45.865Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T00:41:45.865Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T00:41:45.865Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T00:41:45.865Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T00:41:45.865Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T00:41:45.865Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T00:41:45.865Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T00:41:45.865Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T00:41:45.865Z] 
Data Files Check:
[2026-01-03T00:41:45.866Z] .github/data/new_jobs.json: ✅ Exists (9 items, 43497 bytes)
[2026-01-03T00:41:45.867Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 83681 bytes)
[2026-01-03T00:41:45.867Z] 
========================================
[2026-01-03T00:41:45.867Z] Starting Enhanced Discord Bot...
[2026-01-03T00:41:45.867Z] ========================================
[2026-01-03T00:41:46.381Z] [BOT] ✅ Loaded V2 database: 137 jobs
[2026-01-03T00:41:47.011Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T00:41:47.011Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T00:41:47.012Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T00:41:47.012Z] [BOT] 📦 Exporting 9 jobs to encrypted JSON...
[2026-01-03T00:41:47.104Z] [BOT] ✅ Export complete: Added 0, Skipped 9, Total 56
[2026-01-03T00:41:47.105Z] [BOT] 📬 Found 9 new jobs (0 already posted)...
[2026-01-03T00:41:47.106Z] [BOT] 📋 After blacklist filter: 9 jobs (0 blacklisted)
[2026-01-03T00:41:47.106Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2026-01-03T00:41:47.107Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-03T00:41:47.107Z] [BOT] 📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T00:41:47.111Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-03T00:41:47.112Z] [BOT] 📍 [ROUTING] "MFG System Implementations Engineer 1" @ ORG_3a7d2c6a Bottling
[2026-01-03T00:41:47.112Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T00:41:47.116Z] [BOT ERROR] (node:3000) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T00:41:47.339Z] [BOT] ✅ Created forum post: 🏢 MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling in #💻・tech-jobs
[2026-01-03T00:41:47.340Z] [BOT] ✅ Industry: MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling
[2026-01-03T00:41:49.055Z] [BOT] ✅ Created forum post: 🏢 MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling in #🦢・los-angeles
[2026-01-03T00:41:49.056Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-03T00:41:50.556Z] [BOT] 💾 Marked as posted: MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling (instance #1)
[2026-01-03T00:41:50.556Z] [BOT] 💾 BEFORE ARCHIVING: 138 jobs in database
[2026-01-03T00:41:50.557Z] [BOT] ✅ No jobs to archive (all 138 jobs within 7-day window)
[2026-01-03T00:41:50.562Z] [BOT] 💾 Saved posted_jobs.json: 138 active jobs
[2026-01-03T00:41:50.562Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T00:41:50.563Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - BMS Software Engineer 1 - IN" @ ORG_75f04b84
[2026-01-03T00:41:50.563Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T00:41:50.734Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - BMS Software Engineer 1 - IN @ ORG_75f04b84 in #💻・tech-jobs
[2026-01-03T00:41:50.734Z] [BOT] ✅ Industry: Software Engineer 1 - BMS Software Engineer 1 - IN @ ORG_75f04b84
[2026-01-03T00:41:52.535Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - BMS Software Engineer 1 - IN @ ORG_75f04b84 in #💻・remote-usa
[2026-01-03T00:41:52.535Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-03T00:41:54.035Z] [BOT] 💾 Marked as posted: Software Engineer 1 - BMS Software Engineer 1 - IN @ ORG_75f04b84 (instance #1)
[2026-01-03T00:41:54.035Z] [BOT] 💾 BEFORE ARCHIVING: 139 jobs in database
✅ No jobs to archive (all 139 jobs within 7-day window)
[2026-01-03T00:41:54.038Z] [BOT] 💾 Saved posted_jobs.json: 139 active jobs
[2026-01-03T00:41:54.038Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T00:41:54.038Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_e7345cd4
[2026-01-03T00:41:54.038Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T00:41:54.230Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_e7345cd4 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_e7345cd4
[2026-01-03T00:41:55.999Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_e7345cd4 in #🗽・new-york
[2026-01-03T00:41:55.999Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T00:41:57.500Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_e7345cd4 (instance #1)
[2026-01-03T00:41:57.500Z] [BOT] 💾 BEFORE ARCHIVING: 140 jobs in database
✅ No jobs to archive (all 140 jobs within 7-day window)
[2026-01-03T00:41:57.502Z] [BOT] 💾 Saved posted_jobs.json: 140 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T00:41:57.503Z] [BOT] 📍 [ROUTING] "Software Engineer Associate" @ ORG_be6c1969 Financial Services
[2026-01-03T00:41:57.504Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T00:41:57.779Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Associate @ ORG_be6c1969 Financial Services in #💻・tech-jobs
  ✅ Industry: Software Engineer Associate @ ORG_be6c1969 Financial Services
[2026-01-03T00:41:59.512Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Associate @ ORG_be6c1969 Financial Services in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-03T00:42:01.013Z] [BOT] 💾 Marked as posted: Software Engineer Associate @ ORG_be6c1969 Financial Services (instance #1)
[2026-01-03T00:42:01.013Z] [BOT] 💾 BEFORE ARCHIVING: 141 jobs in database
✅ No jobs to archive (all 141 jobs within 7-day window)
[2026-01-03T00:42:01.016Z] [BOT] 💾 Saved posted_jobs.json: 141 active jobs
[2026-01-03T00:42:01.016Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T00:42:01.016Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_05d2f9ea Electric
[2026-01-03T00:42:01.016Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T00:42:01.281Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_05d2f9ea Electric in #💻・tech-jobs
[2026-01-03T00:42:01.281Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_05d2f9ea Electric
[2026-01-03T00:42:03.029Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_05d2f9ea Electric in #💻・remote-usa
[2026-01-03T00:42:03.029Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-03T00:42:04.529Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_05d2f9ea Electric (instance #1)
[2026-01-03T00:42:04.529Z] [BOT] 💾 BEFORE ARCHIVING: 142 jobs in database
✅ No jobs to archive (all 142 jobs within 7-day window)
[2026-01-03T00:42:04.532Z] [BOT] 💾 Saved posted_jobs.json: 142 active jobs
[2026-01-03T00:42:04.532Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T00:42:04.532Z] [BOT] 📍 [ROUTING] "Search Quality Rater" @ ORG_f3ae3598
[2026-01-03T00:42:04.532Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T00:42:04.761Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater @ ORG_f3ae3598 in #💻・tech-jobs
  ✅ Industry: Search Quality Rater @ ORG_f3ae3598
[2026-01-03T00:42:06.475Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater @ ORG_f3ae3598 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T00:42:07.976Z] [BOT] 💾 Marked as posted: Search Quality Rater @ ORG_f3ae3598 (instance #1)
[2026-01-03T00:42:07.977Z] [BOT] 💾 BEFORE ARCHIVING: 143 jobs in database
✅ No jobs to archive (all 143 jobs within 7-day window)
[2026-01-03T00:42:07.979Z] [BOT] 💾 Saved posted_jobs.json: 143 active jobs
[2026-01-03T00:42:07.979Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T00:42:10.980Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-03T00:42:10.980Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_06fec48a Health
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T00:42:11.260Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_06fec48a Health in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_06fec48a Health
[2026-01-03T00:42:12.967Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_06fec48a Health in #💻・remote-usa
[2026-01-03T00:42:12.967Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-03T00:42:14.468Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_06fec48a Health (instance #1)
[2026-01-03T00:42:14.468Z] [BOT] 💾 BEFORE ARCHIVING: 144 jobs in database
✅ No jobs to archive (all 144 jobs within 7-day window)
[2026-01-03T00:42:14.471Z] [BOT] 💾 Saved posted_jobs.json: 144 active jobs
[2026-01-03T00:42:14.471Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T00:42:14.472Z] [BOT] 📍 [ROUTING] "Data Processing Technician" @ ORG_39417f32 Allen
[2026-01-03T00:42:14.472Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T00:42:14.858Z] [BOT] ✅ Created forum post: 🏢 Data Processing Technician @ ORG_39417f32 Allen in #📈・JID_fb739488
[2026-01-03T00:42:14.859Z] [BOT] ✅ Industry: Data Processing Technician @ ORG_39417f32 Allen
[2026-01-03T00:42:16.579Z] [BOT] ✅ Created forum post: 🏢 Data Processing Technician @ ORG_39417f32 Allen in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-03T00:42:18.080Z] [BOT] 💾 Marked as posted: Data Processing Technician @ ORG_39417f32 Allen (instance #1)
[2026-01-03T00:42:18.081Z] [BOT] 💾 BEFORE ARCHIVING: 145 jobs in database
✅ No jobs to archive (all 145 jobs within 7-day window)
[2026-01-03T00:42:18.084Z] [BOT] 💾 Saved posted_jobs.json: 145 active jobs
[2026-01-03T00:42:18.084Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T00:42:21.084Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T00:42:21.085Z] [BOT] 📍 [ROUTING] "Research Scientist in Large Language Model Graduate - Seed-LLM" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T00:42:21.297Z] [BOT] ✅ Created forum post: 🏢 Research Scientist in Large Language Model Graduate - Seed-LLM @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Research Scientist in Large Language Model Graduate - Seed-LLM @ ORG_08c9a13c
[2026-01-03T00:42:23.151Z] [BOT] ✅ Created forum post: 🏢 Research Scientist in Large Language Model Graduate - Seed-LLM @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T00:42:24.651Z] [BOT] 💾 Marked as posted: Research Scientist in Large Language Model Graduate - Seed-LLM @ ORG_08c9a13c (instance #1)
[2026-01-03T00:42:24.651Z] [BOT] 💾 BEFORE ARCHIVING: 146 jobs in database
[2026-01-03T00:42:24.651Z] [BOT] ✅ No jobs to archive (all 146 jobs within 7-day window)
[2026-01-03T00:42:24.655Z] [BOT] 💾 Saved posted_jobs.json: 146 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T00:42:27.655Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-03T00:42:27.655Z] [BOT] ⏭️  Skipping duplicate: JID_d918151e-i_r52026 (posted within 7 days)
[2026-01-03T00:42:27.655Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_77e1139c-_01812916 (posted within 7 days)
[2026-01-03T00:42:27.655Z] [BOT] ⏭️  Skipping duplicate: JID_2d682113-i_r30307 (posted within 7 days)
⏭️  Skipping duplicate: JID_2a91c054-associate_r200033-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_b02011d1-cx_1-job-25029655 (posted within 7 days)
[2026-01-03T00:42:27.655Z] [BOT] ⏭️  Skipping duplicate: JID_7546d0b1 (posted within 7 days)
[2026-01-03T00:42:27.655Z] [BOT] ⏭️  Skipping duplicate: JID_59128a5e (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_6deadf27-detail (posted within 7 days)
[2026-01-03T00:42:27.655Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_5851cc87-technician_r0231593 (posted within 7 days)
[2026-01-03T00:42:27.656Z] [BOT] ✅ Loaded pending queue: 9 total (0 pending, 9 enriched, 0 posted)
[2026-01-03T00:42:27.657Z] [BOT] ✅ Saved pending queue: 9 total (0 pending, 0 enriched, 9 posted)
[2026-01-03T00:42:27.657Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T00:42:27.701Z] [BOT] 📂 Loaded 1215 existing routing entries
[2026-01-03T00:42:27.749Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 1224
[2026-01-03T00:42:27.749Z] [BOT] Timestamp: 2026-01-03T00:42:27.742Z
[2026-01-03T00:42:27.750Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T00:42:27.750Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-03T00:42:27.750Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T00:42:27.751Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #💻・remote-usa: 4 posts
     3. #📈・JID_fb739488: 2 posts
     4. #🦢・los-angeles: 1 posts
     5. #🗽・new-york: 1 posts
[STATS] Channel stats saved
[2026-01-03T00:42:29.762Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3000) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*