# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T06:07:40.751Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T06:07:06.826Z] ========================================
[2025-12-12T06:07:06.828Z] Discord Bot Execution Log
[2025-12-12T06:07:06.828Z] Environment: GitHub Actions
[2025-12-12T06:07:06.828Z] Node Version: v20.19.6
[2025-12-12T06:07:06.828Z] ========================================
[2025-12-12T06:07:06.828Z] Environment Variables Check:
[2025-12-12T06:07:06.828Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T06:07:06.828Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T06:07:06.828Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T06:07:06.829Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T06:07:06.829Z] 
Multi-Channel Configuration:
[2025-12-12T06:07:06.829Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T06:07:06.829Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T06:07:06.829Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T06:07:06.829Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T06:07:06.829Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T06:07:06.829Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T06:07:06.829Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T06:07:06.829Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T06:07:06.829Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T06:07:06.829Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T06:07:06.829Z] 
Data Files Check:
[2025-12-12T06:07:06.830Z] .github/data/new_jobs.json: ✅ Exists (10 items, 154682 bytes)
[2025-12-12T06:07:06.831Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 44419 bytes)
[2025-12-12T06:07:06.831Z] 
========================================
[2025-12-12T06:07:06.831Z] Starting Enhanced Discord Bot...
[2025-12-12T06:07:06.831Z] ========================================
[2025-12-12T06:07:07.328Z] [BOT] ✅ Loaded V2 database: 69 jobs
[2025-12-12T06:07:08.064Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T06:07:08.064Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T06:07:08.065Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T06:07:08.066Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T06:07:08.189Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 177
[2025-12-12T06:07:08.190Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-12T06:07:08.190Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
[2025-12-12T06:07:08.190Z] [BOT] ⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
[2025-12-12T06:07:08.190Z] [BOT] ⏭️  Skipping duplicate: JID_54b586ca (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
⏭️  Skipping duplicate: JID_3345e37e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer I, Frontend at Twitch
[2025-12-12T06:07:08.191Z] [BOT] 📬 Found 6 new jobs (4 already posted)...
[2025-12-12T06:07:08.191Z] [BOT] 📋 After blacklist filter: 6 jobs (0 blacklisted)
📋 After data quality filter: 6 jobs (0 invalid)
[2025-12-12T06:07:08.192Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2025-12-12T06:07:08.192Z] [BOT] 📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T06:07:08.195Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-12T06:07:08.195Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate - Physics" @ ORG_f5f75c9b U
   Category: AI (matched: "machine learning")
[2025-12-12T06:07:08.195Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T06:07:08.199Z] [BOT ERROR] (node:2877) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T06:07:08.465Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Physics @ ORG_f5f75c9b U in #🤖・ai-jobs
[2025-12-12T06:07:08.466Z] [BOT] ✅ Industry: Postdoctoral Research Associate - Physics @ ORG_f5f75c9b U
[2025-12-12T06:07:10.209Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Physics @ ORG_f5f75c9b U in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T06:07:11.710Z] [BOT] 💾 Marked as posted: Postdoctoral Research Associate - Physics @ ORG_f5f75c9b U (instance #1)
[2025-12-12T06:07:11.710Z] [BOT] 💾 BEFORE ARCHIVING: 70 jobs in database
[2025-12-12T06:07:11.710Z] [BOT] ✅ No jobs to archive (all 70 jobs within 7-day window)
[2025-12-12T06:07:11.717Z] [BOT] 💾 Saved posted_jobs.json: 70 active jobs
[2025-12-12T06:07:11.717Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T06:07:11.717Z] [BOT] 📍 [ROUTING] "Junior Business & Technology Analyst" @ ORG_dac437fc Bank
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T06:07:11.928Z] [BOT] ✅ Created forum post: 🏢 Junior Business & Technology Analyst @ ORG_dac437fc Bank in #🤖・ai-jobs
  ✅ Industry: Junior Business & Technology Analyst @ ORG_dac437fc Bank
[2025-12-12T06:07:13.641Z] [BOT] ✅ Created forum post: 🏢 Junior Business & Technology Analyst @ ORG_dac437fc Bank in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-12T06:07:15.142Z] [BOT] 💾 Marked as posted: Junior Business & Technology Analyst @ ORG_dac437fc Bank (instance #1)
[2025-12-12T06:07:15.142Z] [BOT] 💾 BEFORE ARCHIVING: 71 jobs in database
✅ No jobs to archive (all 71 jobs within 7-day window)
[2025-12-12T06:07:15.143Z] [BOT] 💾 Saved posted_jobs.json: 71 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T06:07:18.144Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-12T06:07:18.144Z] [BOT] 📍 [ROUTING] "Associate-Data Strategy & Standards" @ ORG_c63fa9c8
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-12T06:07:18.339Z] [BOT] ✅ Created forum post: 🏢 Associate-Data Strategy & Standards @ ORG_c63fa9c8 in #📈・JID_fb739488
  ✅ Industry: Associate-Data Strategy & Standards @ ORG_c63fa9c8
[2025-12-12T06:07:20.026Z] [BOT] ✅ Created forum post: 🏢 Associate-Data Strategy & Standards @ ORG_c63fa9c8 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T06:07:21.527Z] [BOT] 💾 Marked as posted: Associate-Data Strategy & Standards @ ORG_c63fa9c8 (instance #1)
💾 BEFORE ARCHIVING: 72 jobs in database
✅ No jobs to archive (all 72 jobs within 7-day window)
[2025-12-12T06:07:21.528Z] [BOT] 💾 Saved posted_jobs.json: 72 active jobs
[2025-12-12T06:07:21.528Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T06:07:24.530Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-12T06:07:24.530Z] [BOT] 📍 [ROUTING] "Scientist – Akron Technical Center" @ ORG_907ed49e
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T06:07:24.691Z] [BOT] ✅ Created forum post: 🏢 Scientist – Akron Technical Center @ ORG_907ed49e in #💻・tech-jobs
  ✅ Industry: Scientist – Akron Technical Center @ ORG_907ed49e
[2025-12-12T06:07:26.380Z] [BOT] ✅ Created forum post: 🏢 Scientist – Akron Technical Center @ ORG_907ed49e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T06:07:27.881Z] [BOT] 💾 Marked as posted: Scientist – Akron Technical Center @ ORG_907ed49e (instance #1)
💾 BEFORE ARCHIVING: 73 jobs in database
[2025-12-12T06:07:27.881Z] [BOT] ✅ No jobs to archive (all 73 jobs within 7-day window)
[2025-12-12T06:07:27.883Z] [BOT] 💾 Saved posted_jobs.json: 73 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T06:07:27.883Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_75f04b84
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T06:07:28.220Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_75f04b84
[2025-12-12T06:07:30.014Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_75f04b84 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-12T06:07:31.516Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_75f04b84 (instance #1)
[2025-12-12T06:07:31.516Z] [BOT] 💾 BEFORE ARCHIVING: 74 jobs in database
✅ No jobs to archive (all 74 jobs within 7-day window)
[2025-12-12T06:07:31.518Z] [BOT] 💾 Saved posted_jobs.json: 74 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T06:07:31.518Z] [BOT] 📍 [ROUTING] "Associate Salesforce Developer" @ ORG_629eab16
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T06:07:31.703Z] [BOT] ✅ Created forum post: 🏢 Associate Salesforce Developer @ ORG_629eab16 in #💻・tech-jobs
  ✅ Industry: Associate Salesforce Developer @ ORG_629eab16
[2025-12-12T06:07:33.459Z] [BOT] ✅ Created forum post: 🏢 Associate Salesforce Developer @ ORG_629eab16 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T06:07:34.961Z] [BOT] 💾 Marked as posted: Associate Salesforce Developer @ ORG_629eab16 (instance #1)
[2025-12-12T06:07:34.961Z] [BOT] 💾 BEFORE ARCHIVING: 75 jobs in database
✅ No jobs to archive (all 75 jobs within 7-day window)
[2025-12-12T06:07:34.962Z] [BOT] 💾 Saved posted_jobs.json: 75 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T06:07:37.962Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2025-12-12T06:07:37.963Z] [BOT] ⏭️  Skipping duplicate: JID_fc72070d-physics_jr91660 (posted within 7 days)
⏭️  Skipping duplicate: JID_9c704571-external_career-JID_ab9c7001-standards_r0024043 (posted within 7 days)
⏭️  Skipping duplicate: JID_51162df5-engineer_jr3704 (posted within 7 days)
⏭️  Skipping duplicate: JID_189c953b-onsite_r6616 (posted within 7 days)
[2025-12-12T06:07:37.963Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_3826236e-_01811717 (posted within 7 days)
⏭️  Skipping duplicate: JID_f63b7867-developer_2530652 (posted within 7 days)
[2025-12-12T06:07:37.968Z] [BOT] ✅ Loaded pending queue: 729 total (719 pending, 10 enriched, 0 posted)
[2025-12-12T06:07:37.978Z] [BOT] ✅ Saved pending queue: 729 total (665 pending, 4 enriched, 60 posted)
[2025-12-12T06:07:37.978Z] [BOT] 📋 Updated queue: marked 60 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-12T06:07:38.016Z] [BOT] 📂 Loaded 65 existing routing entries
[2025-12-12T06:07:38.052Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 71
   Timestamp: 2025-12-12T06:07:38.051Z
[2025-12-12T06:07:40.061Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2877) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*