# Discord Bot Execution Audit
**Timestamp:** 2025-12-14T18:43:08.536Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-14T18:42:17.264Z] ========================================
[2025-12-14T18:42:17.266Z] Discord Bot Execution Log
[2025-12-14T18:42:17.266Z] Environment: GitHub Actions
[2025-12-14T18:42:17.266Z] Node Version: v20.19.6
[2025-12-14T18:42:17.266Z] ========================================
[2025-12-14T18:42:17.266Z] Environment Variables Check:
[2025-12-14T18:42:17.266Z] DISCORD_TOKEN: ✅ Set
[2025-12-14T18:42:17.266Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-14T18:42:17.266Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-14T18:42:17.266Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-14T18:42:17.267Z] 
Multi-Channel Configuration:
[2025-12-14T18:42:17.267Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-14T18:42:17.267Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-14T18:42:17.267Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-14T18:42:17.267Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-14T18:42:17.267Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-14T18:42:17.267Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-14T18:42:17.267Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-14T18:42:17.267Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-14T18:42:17.267Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-14T18:42:17.267Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-14T18:42:17.267Z] 
Data Files Check:
[2025-12-14T18:42:17.268Z] .github/data/new_jobs.json: ✅ Exists (10 items, 114508 bytes)
[2025-12-14T18:42:17.269Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 74839 bytes)
[2025-12-14T18:42:17.269Z] 
========================================
[2025-12-14T18:42:17.269Z] Starting Enhanced Discord Bot...
[2025-12-14T18:42:17.269Z] ========================================
[2025-12-14T18:42:17.836Z] [BOT] ✅ Loaded V2 database: 116 jobs
[2025-12-14T18:42:18.506Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-14T18:42:18.507Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-14T18:42:18.507Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-14T18:42:18.507Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-14T18:42:18.614Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 126
[2025-12-14T18:42:18.615Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-14T18:42:18.615Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-14T18:42:18.616Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-14T18:42:18.616Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-14T18:42:18.620Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-14T18:42:18.621Z] [BOT] 📍 [ROUTING] "Americas Delivery Center Technology Experienced Analyst" @ ORG_cdfa0c05
[2025-12-14T18:42:18.621Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1391...2941)
[2025-12-14T18:42:18.625Z] [BOT ERROR] (node:2888) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-14T18:42:18.855Z] [BOT] ✅ Created forum post: 🏢 Americas Delivery Center Technology Experienced Analyst @ ORG_cdfa0c05 in #💰・finance-jobs
  ✅ Industry: Americas Delivery Center Technology Experienced Analyst @ ORG_cdfa0c05
[2025-12-14T18:42:20.561Z] [BOT] ✅ Created forum post: 🏢 Americas Delivery Center Technology Experienced Analyst @ ORG_cdfa0c05 in #💻・remote-usa
[2025-12-14T18:42:20.561Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-14T18:42:22.061Z] [BOT] 💾 Marked as posted: Americas Delivery Center Technology Experienced Analyst @ ORG_cdfa0c05 (instance #1)
[2025-12-14T18:42:22.061Z] [BOT] 💾 BEFORE ARCHIVING: 117 jobs in database
[2025-12-14T18:42:22.062Z] [BOT] ✅ No jobs to archive (all 117 jobs within 7-day window)
[2025-12-14T18:42:22.067Z] [BOT] 💾 Saved posted_jobs.json: 117 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-14T18:42:25.069Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-14T18:42:25.069Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-14T18:42:25.283Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🤖・ai-jobs
[2025-12-14T18:42:25.283Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-14T18:42:27.078Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-14T18:42:28.579Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-14T18:42:28.579Z] [BOT] 💾 BEFORE ARCHIVING: 118 jobs in database
[2025-12-14T18:42:28.579Z] [BOT] ✅ No jobs to archive (all 118 jobs within 7-day window)
[2025-12-14T18:42:28.582Z] [BOT] 💾 Saved posted_jobs.json: 118 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-14T18:42:28.582Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_7b717950
   Category: AI (matched: "machine learning")
[2025-12-14T18:42:28.582Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2025-12-14T18:42:28.799Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_7b717950
[2025-12-14T18:42:30.636Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-14T18:42:32.136Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_7b717950 (instance #1)
[2025-12-14T18:42:32.136Z] [BOT] 💾 BEFORE ARCHIVING: 119 jobs in database
✅ No jobs to archive (all 119 jobs within 7-day window)
[2025-12-14T18:42:32.138Z] [BOT] 💾 Saved posted_jobs.json: 119 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-14T18:42:32.139Z] [BOT] 📍 [ROUTING] "Post-Doctoral Fellow - Noaa" @ ORG_4ae62bf4 School of Mines
   Category: AI (matched: "machine learning")
[2025-12-14T18:42:32.139Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2025-12-14T18:42:32.448Z] [BOT] ✅ Created forum post: 🏢 Post-Doctoral Fellow - Noaa @ ORG_4ae62bf4 School of Mines in #🤖・ai-jobs
  ✅ Industry: Post-Doctoral Fellow - Noaa @ ORG_4ae62bf4 School of Mines
[2025-12-14T18:42:33.949Z] [BOT] 💾 Marked as posted: Post-Doctoral Fellow - Noaa @ ORG_4ae62bf4 School of Mines (instance #1)
[2025-12-14T18:42:33.949Z] [BOT] 💾 BEFORE ARCHIVING: 120 jobs in database
✅ No jobs to archive (all 120 jobs within 7-day window)
[2025-12-14T18:42:33.952Z] [BOT] 💾 Saved posted_jobs.json: 120 active jobs
[2025-12-14T18:42:33.952Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-14T18:42:36.953Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-14T18:42:36.953Z] [BOT] 📍 [ROUTING] "Cantonese Language Specialist" @ ORG_0f2833f9
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-14T18:42:37.200Z] [BOT] ✅ Created forum post: 🏢 Cantonese Language Specialist @ ORG_0f2833f9 in #💻・tech-jobs
[2025-12-14T18:42:37.200Z] [BOT] ✅ Industry: Cantonese Language Specialist @ ORG_0f2833f9
[2025-12-14T18:42:38.995Z] [BOT] ✅ Created forum post: 🏢 Cantonese Language Specialist @ ORG_0f2833f9 in #💻・remote-usa
[2025-12-14T18:42:38.995Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-14T18:42:40.495Z] [BOT] 💾 Marked as posted: Cantonese Language Specialist @ ORG_0f2833f9 (instance #1)
[2025-12-14T18:42:40.495Z] [BOT] 💾 BEFORE ARCHIVING: 121 jobs in database
✅ No jobs to archive (all 121 jobs within 7-day window)
[2025-12-14T18:42:40.498Z] [BOT] 💾 Saved posted_jobs.json: 121 active jobs
[2025-12-14T18:42:40.498Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer 1" @ ORG_1b91b475 Automation
[2025-12-14T18:42:40.498Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-14T18:42:41.187Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_1b91b475 Automation in #💻・tech-jobs
[2025-12-14T18:42:41.188Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_1b91b475 Automation
[2025-12-14T18:42:43.333Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_1b91b475 Automation in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-14T18:42:44.834Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_1b91b475 Automation (instance #1)
[2025-12-14T18:42:44.834Z] [BOT] 💾 BEFORE ARCHIVING: 122 jobs in database
[2025-12-14T18:42:44.834Z] [BOT] ✅ No jobs to archive (all 122 jobs within 7-day window)
[2025-12-14T18:42:44.836Z] [BOT] 💾 Saved posted_jobs.json: 122 active jobs
[2025-12-14T18:42:44.836Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer - Full Stack" @ ORG_c7bac469
[2025-12-14T18:42:44.836Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-14T18:42:45.190Z] [BOT] ✅ Created forum post: 🟦 Software Engineer - Full Stack @ ORG_c7bac469 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Full Stack @ ORG_c7bac469
[2025-12-14T18:42:47.011Z] [BOT] ✅ Created forum post: 🟦 Software Engineer - Full Stack @ ORG_c7bac469 in #🖥️・redmond
  ✅ Location: 🖥️・redmond
[2025-12-14T18:42:48.511Z] [BOT] 💾 Marked as posted: Software Engineer - Full Stack @ ORG_c7bac469 (instance #1)
[2025-12-14T18:42:48.511Z] [BOT] 💾 BEFORE ARCHIVING: 123 jobs in database
✅ No jobs to archive (all 123 jobs within 7-day window)
[2025-12-14T18:42:48.514Z] [BOT] 💾 Saved posted_jobs.json: 123 active jobs
[2025-12-14T18:42:48.514Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer 2" @ ORG_c7bac469
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-14T18:42:48.753Z] [BOT] ✅ Created forum post: 🟦 Software Engineer 2 @ ORG_c7bac469 in #💻・tech-jobs
  ✅ Industry: Software Engineer 2 @ ORG_c7bac469
[2025-12-14T18:42:50.755Z] [BOT] ✅ Created forum post: 🟦 Software Engineer 2 @ ORG_c7bac469 in #🖥️・redmond
  ✅ Location: 🖥️・redmond
[2025-12-14T18:42:52.255Z] [BOT] 💾 Marked as posted: Software Engineer 2 @ ORG_c7bac469 (instance #1)
[2025-12-14T18:42:52.255Z] [BOT] 💾 BEFORE ARCHIVING: 124 jobs in database
✅ No jobs to archive (all 124 jobs within 7-day window)
[2025-12-14T18:42:52.258Z] [BOT] 💾 Saved posted_jobs.json: 124 active jobs
[2025-12-14T18:42:52.258Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer 1 - Web Frameworks - Officer" @ ORG_a3b50c47 Street
[2025-12-14T18:42:52.258Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-14T18:42:52.481Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Web Frameworks - Officer @ ORG_a3b50c47 Street in #💻・tech-jobs
[2025-12-14T18:42:52.481Z] [BOT] ✅ Industry: Software Engineer 1 - Web Frameworks - Officer @ ORG_a3b50c47 Street
[2025-12-14T18:42:54.211Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Web Frameworks - Officer @ ORG_a3b50c47 Street in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-14T18:42:55.712Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Web Frameworks - Officer @ ORG_a3b50c47 Street (instance #1)
[2025-12-14T18:42:55.713Z] [BOT] 💾 BEFORE ARCHIVING: 125 jobs in database
✅ No jobs to archive (all 125 jobs within 7-day window)
[2025-12-14T18:42:55.716Z] [BOT] 💾 Saved posted_jobs.json: 125 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-14T18:42:58.717Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-14T18:42:58.718Z] [BOT] 📍 [ROUTING] "Data Scientist 2 - Growth" @ ORG_534e1fbb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-14T18:42:59.108Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 2 - Growth @ ORG_534e1fbb in #📈・JID_fb739488
  ✅ Industry: Data Scientist 2 - Growth @ ORG_534e1fbb
[2025-12-14T18:43:00.790Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 2 - Growth @ ORG_534e1fbb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-14T18:43:02.290Z] [BOT] 💾 Marked as posted: Data Scientist 2 - Growth @ ORG_534e1fbb (instance #1)
[2025-12-14T18:43:02.290Z] [BOT] 💾 BEFORE ARCHIVING: 126 jobs in database
✅ No jobs to archive (all 126 jobs within 7-day window)
[2025-12-14T18:43:02.292Z] [BOT] 💾 Saved posted_jobs.json: 126 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-14T18:43:05.292Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-14T18:43:05.292Z] [BOT] ⏭️  Skipping duplicate: JID_7a3179d1-analyst_jr-259121-1 (posted within 7 days)
[2025-12-14T18:43:05.292Z] [BOT] ⏭️  Skipping duplicate: JID_1817c581 (posted within 7 days)
⏭️  Skipping duplicate: JID_2cd30a66 (posted within 7 days)
⏭️  Skipping duplicate: JID_dc57e2a8-mines_careers-JID_3a7bc902-noaa_jr107952 (posted within 7 days)
[2025-12-14T18:43:05.292Z] [BOT] ⏭️  Skipping duplicate: JID_a9d7df3a (posted within 7 days)
⏭️  Skipping duplicate: JID_8029cc3c (posted within 7 days)
⏭️  Skipping duplicate: JID_2883b741 (posted within 7 days)
[2025-12-14T18:43:05.292Z] [BOT] ⏭️  Skipping duplicate: JID_54e49402 (posted within 7 days)
⏭️  Skipping duplicate: JID_a3d95a6d (posted within 7 days)
⏭️  Skipping duplicate: JID_cc999bf9-officer_r-779734-1 (posted within 7 days)
[2025-12-14T18:43:05.294Z] [BOT] ✅ Loaded pending queue: 18 total (0 pending, 18 enriched, 0 posted)
[2025-12-14T18:43:05.296Z] [BOT] ✅ Saved pending queue: 18 total (0 pending, 8 enriched, 10 posted)
[2025-12-14T18:43:05.297Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-14T18:43:05.335Z] [BOT] 📂 Loaded 110 existing routing entries
[2025-12-14T18:43:05.372Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 120
   Timestamp: 2025-12-14T18:43:05.371Z
[2025-12-14T18:43:07.384Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2888) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*