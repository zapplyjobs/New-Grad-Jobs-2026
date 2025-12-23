# Discord Bot Execution Audit
**Timestamp:** 2025-12-23T00:09:46.081Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-23T00:09:13.954Z] ========================================
[2025-12-23T00:09:13.956Z] Discord Bot Execution Log
[2025-12-23T00:09:13.956Z] Environment: GitHub Actions
[2025-12-23T00:09:13.956Z] Node Version: v20.19.6
[2025-12-23T00:09:13.956Z] ========================================
[2025-12-23T00:09:13.957Z] Environment Variables Check:
[2025-12-23T00:09:13.957Z] DISCORD_TOKEN: ✅ Set
[2025-12-23T00:09:13.957Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-23T00:09:13.957Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-23T00:09:13.957Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-23T00:09:13.957Z] 
Multi-Channel Configuration:
[2025-12-23T00:09:13.957Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-23T00:09:13.957Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-23T00:09:13.957Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-23T00:09:13.957Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-23T00:09:13.957Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-23T00:09:13.957Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-23T00:09:13.958Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-23T00:09:13.958Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-23T00:09:13.958Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-23T00:09:13.958Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-23T00:09:13.958Z] 
Data Files Check:
[2025-12-23T00:09:13.958Z] .github/data/new_jobs.json: ✅ Exists (8 items, 42931 bytes)
[2025-12-23T00:09:13.962Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 534641 bytes)
[2025-12-23T00:09:13.962Z] 
========================================
[2025-12-23T00:09:13.962Z] Starting Enhanced Discord Bot...
[2025-12-23T00:09:13.963Z] ========================================
[2025-12-23T00:09:14.516Z] [BOT] ✅ Loaded V2 database: 913 jobs
[2025-12-23T00:09:15.057Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-23T00:09:15.058Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-23T00:09:15.058Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-23T00:09:15.058Z] [BOT] 📦 Exporting 8 jobs to encrypted JSON...
[2025-12-23T00:09:15.113Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-23T00:09:15.172Z] [BOT] ✅ Export complete: Added 1, Skipped 7, Total 157
[2025-12-23T00:09:15.174Z] [BOT] 📬 Found 8 new jobs (0 already posted)...
[2025-12-23T00:09:15.174Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-23T00:09:15.175Z] [BOT] 📋 After blacklist filter: 7 jobs (1 blacklisted)
[2025-12-23T00:09:15.175Z] [BOT] 📋 After data quality filter: 7 jobs (0 invalid)
[2025-12-23T00:09:15.175Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2025-12-23T00:09:15.175Z] [BOT] (1 grouped as same job with different locations)
[2025-12-23T00:09:15.176Z] [BOT] 📍 1 jobs with multiple locations:
   - Android Sales Expert @ 2020 Companies: sf, alameda
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-23T00:09:15.179Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-23T00:09:15.180Z] [BOT] 📍 [ROUTING] "Engineer Data & Analytics" @ ORG_a35c6c02
[2025-12-23T00:09:15.180Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-23T00:09:15.185Z] [BOT ERROR] (node:2878) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-23T00:09:15.337Z] [BOT] ✅ Created forum post: 🏢 Engineer Data & Analytics @ ORG_a35c6c02 in #🤖・ai-jobs
  ✅ Industry: Engineer Data & Analytics @ ORG_a35c6c02
[2025-12-23T00:09:17.018Z] [BOT] ✅ Created forum post: 🏢 Engineer Data & Analytics @ ORG_a35c6c02 in #💻・remote-usa
[2025-12-23T00:09:17.018Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-23T00:09:18.520Z] [BOT] 💾 Marked as posted: Engineer Data & Analytics @ ORG_a35c6c02 (instance #1)
[2025-12-23T00:09:18.520Z] [BOT] 💾 BEFORE ARCHIVING: 914 jobs in database
[2025-12-23T00:09:18.521Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-23T00:09:18.535Z] [BOT] 📦 Archived 10 jobs to 2025-12.json (10 total in archive)
[2025-12-23T00:09:18.535Z] [BOT] ✅ Archiving complete: 10 archived, 904 active
[2025-12-23T00:09:18.542Z] [BOT] 💾 Saved posted_jobs.json: 904 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T00:09:18.543Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Product Development" @ ORG_9f75058b
[2025-12-23T00:09:18.543Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-23T00:09:18.663Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Product Development @ ORG_9f75058b in #🤖・ai-jobs
[2025-12-23T00:09:18.663Z] [BOT] ✅ Industry: Software Engineer 1 - Product Development @ ORG_9f75058b
[2025-12-23T00:09:20.331Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Product Development @ ORG_9f75058b in #🌉・san-francisco
[2025-12-23T00:09:20.331Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-23T00:09:21.832Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Product Development @ ORG_9f75058b (instance #1)
[2025-12-23T00:09:21.833Z] [BOT] 💾 BEFORE ARCHIVING: 905 jobs in database
[2025-12-23T00:09:21.833Z] [BOT] ✅ No jobs to archive (all 905 jobs within 7-day window)
[2025-12-23T00:09:21.840Z] [BOT] 💾 Saved posted_jobs.json: 905 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T00:09:24.840Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-23T00:09:24.841Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_76ed42d2 Services
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-23T00:09:25.317Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_76ed42d2 Services in #💻・tech-jobs
[2025-12-23T00:09:25.317Z] [BOT] ✅ Industry: Software Engineer @ ORG_76ed42d2 Services
[2025-12-23T00:09:26.971Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_76ed42d2 Services in #💻・remote-usa
[2025-12-23T00:09:26.971Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-23T00:09:28.471Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_76ed42d2 Services (instance #1)
[2025-12-23T00:09:28.471Z] [BOT] 💾 BEFORE ARCHIVING: 906 jobs in database
[2025-12-23T00:09:28.472Z] [BOT] ✅ No jobs to archive (all 906 jobs within 7-day window)
[2025-12-23T00:09:28.480Z] [BOT] 💾 Saved posted_jobs.json: 906 active jobs
[2025-12-23T00:09:28.480Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-23T00:09:28.482Z] [BOT] 📍 [ROUTING] "Android Sales Expert" @ 2020 Companies
[2025-12-23T00:09:28.482Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-23T00:09:28.865Z] [BOT] ✅ Created forum post: 🏢 Android Sales Expert @ 2020 Companies in #💻・tech-jobs
[2025-12-23T00:09:28.865Z] [BOT] ✅ Industry: Android Sales Expert @ 2020 Companies
[2025-12-23T00:09:30.563Z] [BOT] ✅ Created forum post: 🏢 Android Sales Expert @ 2020 Companies in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-23T00:09:32.064Z] [BOT] 💾 Marked as posted: Android Sales Expert @ 2020 Companies (instance #1)
[2025-12-23T00:09:32.064Z] [BOT] 💾 BEFORE ARCHIVING: 907 jobs in database
[2025-12-23T00:09:32.066Z] [BOT] ✅ No jobs to archive (all 907 jobs within 7-day window)
[2025-12-23T00:09:32.074Z] [BOT] 💾 Saved posted_jobs.json: 907 active jobs
[2025-12-23T00:09:32.074Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-23T00:09:32.074Z] [BOT] 💾 Marked as posted: Android Sales Expert @ 2020 Companies (instance #1)
[2025-12-23T00:09:32.074Z] [BOT] 💾 BEFORE ARCHIVING: 908 jobs in database
[2025-12-23T00:09:32.075Z] [BOT] ✅ No jobs to archive (all 908 jobs within 7-day window)
[2025-12-23T00:09:32.083Z] [BOT] 💾 Saved posted_jobs.json: 908 active jobs
[2025-12-23T00:09:32.083Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-23T00:09:32.084Z] [BOT] 📍 [ROUTING] "Appian Associate Technical Consultant" @ ORG_60d01372
[2025-12-23T00:09:32.084Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-23T00:09:32.448Z] [BOT] ✅ Created forum post: 🏢 Appian Associate Technical Consultant @ ORG_60d01372 in #💻・tech-jobs
  ✅ Industry: Appian Associate Technical Consultant @ ORG_60d01372
[2025-12-23T00:09:34.114Z] [BOT] ✅ Created forum post: 🏢 Appian Associate Technical Consultant @ ORG_60d01372 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-23T00:09:35.614Z] [BOT] 💾 Marked as posted: Appian Associate Technical Consultant @ ORG_60d01372 (instance #1)
[2025-12-23T00:09:35.614Z] [BOT] 💾 BEFORE ARCHIVING: 909 jobs in database
[2025-12-23T00:09:35.615Z] [BOT] ✅ No jobs to archive (all 909 jobs within 7-day window)
[2025-12-23T00:09:35.622Z] [BOT] 💾 Saved posted_jobs.json: 909 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T00:09:38.622Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-23T00:09:38.622Z] [BOT] 📍 [ROUTING] "Assistant Professor of Mathematics - Statistics and Data Science" @ ORG_a2a83ee2 Marymount University
[2025-12-23T00:09:38.623Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-23T00:09:38.850Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor of Mathematics - Statistics and Data Science @ ORG_a2a83ee2 Marymount University in #📈・JID_fb739488
  ✅ Industry: Assistant Professor of Mathematics - Statistics and Data Science @ ORG_a2a83ee2 Marymount University
[2025-12-23T00:09:40.351Z] [BOT] 💾 Marked as posted: Assistant Professor of Mathematics - Statistics and Data Science @ ORG_a2a83ee2 Marymount University (instance #1)
💾 BEFORE ARCHIVING: 910 jobs in database
[2025-12-23T00:09:40.352Z] [BOT] ✅ No jobs to archive (all 910 jobs within 7-day window)
[2025-12-23T00:09:40.361Z] [BOT] 💾 Saved posted_jobs.json: 910 active jobs
[2025-12-23T00:09:40.361Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-23T00:09:43.361Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2025-12-23T00:09:43.361Z] [BOT] ⏭️  Skipping duplicate: JID_e573726c-comcast_careers-JID_5100cb4a-analytics_r427045-1 (posted within 7 days)
[2025-12-23T00:09:43.361Z] [BOT] ⏭️  Skipping duplicate: JID_e43f8699-csi_careers-JID_ca166876-engineer_r-100400 (posted within 7 days)
[2025-12-23T00:09:43.362Z] [BOT] ⏭️  Skipping duplicate: JID_83f6c242 (posted within 7 days)
[2025-12-23T00:09:43.362Z] [BOT] ⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_aabf8ae3-expert_req_096760 (posted within 7 days)
[2025-12-23T00:09:43.362Z] [BOT] ⏭️  Skipping duplicate: JID_cbd01f26-cx_1-job-2025003734 (posted within 7 days)
[2025-12-23T00:09:43.362Z] [BOT] ⏭️  Skipping duplicate: JID_a3a7647e-science_r11535 (posted within 7 days)
[2025-12-23T00:09:43.363Z] [BOT] ✅ Loaded pending queue: 8 total (0 pending, 8 enriched, 0 posted)
[2025-12-23T00:09:43.364Z] [BOT] ✅ Saved pending queue: 8 total (0 pending, 2 enriched, 6 posted)
[2025-12-23T00:09:43.364Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-23T00:09:43.406Z] [BOT] 📂 Loaded 1014 existing routing entries
[2025-12-23T00:09:43.454Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-23T00:09:43.457Z] [BOT] New entries: 6
   Total entries: 1020
   Timestamp: 2025-12-23T00:09:43.448Z
📝 Discord posting log saved: .github/logs/JID_805c58df.jsonl
   Total attempts: 12
   Successful: 11
   Failed: 0
   Skipped: 1
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 3 posts
     2. #🤖・ai-jobs: 2 posts
     3. #💻・remote-usa: 2 posts
     4. #🌉・san-francisco: 2 posts
     5. #🤠・austin: 1 posts
[STATS] Channel stats saved
[2025-12-23T00:09:45.466Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2878) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*