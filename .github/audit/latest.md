# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T18:08:47.506Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T18:08:04.802Z] ========================================
[2026-01-05T18:08:04.804Z] Discord Bot Execution Log
[2026-01-05T18:08:04.804Z] Environment: GitHub Actions
[2026-01-05T18:08:04.804Z] Node Version: v20.19.6
[2026-01-05T18:08:04.804Z] ========================================
[2026-01-05T18:08:04.804Z] Environment Variables Check:
[2026-01-05T18:08:04.804Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T18:08:04.804Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T18:08:04.804Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T18:08:04.804Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T18:08:04.805Z] 
Multi-Channel Configuration:
[2026-01-05T18:08:04.805Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T18:08:04.805Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T18:08:04.805Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T18:08:04.805Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T18:08:04.805Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T18:08:04.805Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T18:08:04.805Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T18:08:04.805Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T18:08:04.805Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T18:08:04.805Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T18:08:04.805Z] 
Data Files Check:
[2026-01-05T18:08:04.806Z] .github/data/new_jobs.json: ✅ Exists (10 items, 14453 bytes)
[2026-01-05T18:08:04.811Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 662530 bytes)
[2026-01-05T18:08:04.811Z] 
========================================
[2026-01-05T18:08:04.811Z] Starting Enhanced Discord Bot...
[2026-01-05T18:08:04.811Z] ========================================
[2026-01-05T18:08:05.351Z] [BOT] ✅ Loaded V2 database: 1301 jobs
[2026-01-05T18:08:06.123Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T18:08:06.124Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T18:08:06.124Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T18:08:06.124Z] [BOT] ✅ Loaded pending queue: 11 total (0 pending, 11 enriched, 0 posted)
[2026-01-05T18:08:06.124Z] [BOT] [BOT] 📬 Found 11 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Agentic AI Teacher - AGI Data Services at Amazon
[2026-01-05T18:08:06.126Z] [BOT] ⏭️  Skipping duplicate: JID_cea08a83 (posted within 7 days)
[2026-01-05T18:08:06.126Z] [BOT] ⏭️ Skipping already posted: Associate – Data Cloud Solutions at Zeta Global
[2026-01-05T18:08:06.127Z] [BOT] 📬 Found 10 new jobs (1 already posted)...
[2026-01-05T18:08:06.127Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2026-01-05T18:08:06.128Z] [BOT] ✅ Loaded pending queue: 11 total (0 pending, 11 enriched, 0 posted)
[2026-01-05T18:08:06.129Z] [BOT] ✅ Saved pending queue: 9 total (0 pending, 9 enriched, 0 posted)
[2026-01-05T18:08:06.129Z] [BOT] 🗑️ Removed 2 blacklisted jobs from pending queue
📋 After blacklist filter: 8 jobs (2 blacklisted)
[2026-01-05T18:08:06.129Z] [BOT] 📋 After data quality filter: 8 jobs (0 invalid)
[2026-01-05T18:08:06.130Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-05T18:08:06.130Z] [BOT] ⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T18:08:06.134Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-05T18:08:06.134Z] [BOT] 📍 [ROUTING] "Software Development" @ ORG_509c517e
[2026-01-05T18:08:06.134Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T18:08:06.152Z] [BOT ERROR] (node:3328) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T18:08:06.555Z] [BOT] ✅ Created forum post: 📹 Software Development @ ORG_509c517e in #💻・tech-jobs
  ✅ Industry: Software Development @ ORG_509c517e
[2026-01-05T18:08:08.294Z] [BOT] ✅ Created forum post: 📹 Software Development @ ORG_509c517e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-05T18:08:09.795Z] [BOT] 💾 Marked as posted: Software Development @ ORG_509c517e (instance #1)
[2026-01-05T18:08:09.796Z] [BOT] 💾 BEFORE ARCHIVING: 1302 jobs in database
[2026-01-05T18:08:09.797Z] [BOT] ✅ No jobs to archive (all 1302 jobs within 7-day window)
[2026-01-05T18:08:09.813Z] [BOT] 💾 Saved posted_jobs.json: 1302 active jobs
[2026-01-05T18:08:09.814Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T18:08:09.814Z] [BOT] 📍 [ROUTING] "Fullstack Software Engineer" @ ORG_60cbfc1e Health
[2026-01-05T18:08:09.814Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T18:08:10.151Z] [BOT] ✅ Created forum post: 🏢 Fullstack Software Engineer @ ORG_60cbfc1e Health in #💻・tech-jobs
[2026-01-05T18:08:10.151Z] [BOT] ✅ Industry: Fullstack Software Engineer @ ORG_60cbfc1e Health
[2026-01-05T18:08:11.952Z] [BOT] ✅ Created forum post: 🏢 Fullstack Software Engineer @ ORG_60cbfc1e Health in #🗽・new-york
[2026-01-05T18:08:11.952Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-05T18:08:13.454Z] [BOT] 💾 Marked as posted: Fullstack Software Engineer @ ORG_60cbfc1e Health (instance #1)
[2026-01-05T18:08:13.454Z] [BOT] 💾 BEFORE ARCHIVING: 1303 jobs in database
[2026-01-05T18:08:13.455Z] [BOT] ✅ No jobs to archive (all 1303 jobs within 7-day window)
[2026-01-05T18:08:13.463Z] [BOT] 💾 Saved posted_jobs.json: 1303 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T18:08:13.463Z] [BOT] 📍 [ROUTING] "Design Engineer" @ ORG_60cbfc1e Health
[2026-01-05T18:08:13.464Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T18:08:14.083Z] [BOT] ✅ Created forum post: 🏢 Design Engineer @ ORG_60cbfc1e Health in #💻・tech-jobs
[2026-01-05T18:08:14.084Z] [BOT] ✅ Industry: Design Engineer @ ORG_60cbfc1e Health
[2026-01-05T18:08:15.819Z] [BOT] ✅ Created forum post: 🏢 Design Engineer @ ORG_60cbfc1e Health in #🗽・new-york
[2026-01-05T18:08:15.819Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-05T18:08:17.319Z] [BOT] 💾 Marked as posted: Design Engineer @ ORG_60cbfc1e Health (instance #1)
[2026-01-05T18:08:17.320Z] [BOT] 💾 BEFORE ARCHIVING: 1304 jobs in database
[2026-01-05T18:08:17.321Z] [BOT] ✅ No jobs to archive (all 1304 jobs within 7-day window)
[2026-01-05T18:08:17.330Z] [BOT] 💾 Saved posted_jobs.json: 1304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T18:08:17.331Z] [BOT] 📍 [ROUTING] "Pricing Engineer" @ ORG_60cbfc1e Health
[2026-01-05T18:08:17.331Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T18:08:17.514Z] [BOT] ✅ Created forum post: 🏢 Pricing Engineer @ ORG_60cbfc1e Health in #💻・tech-jobs
[2026-01-05T18:08:17.514Z] [BOT] ✅ Industry: Pricing Engineer @ ORG_60cbfc1e Health
[2026-01-05T18:08:19.351Z] [BOT] ✅ Created forum post: 🏢 Pricing Engineer @ ORG_60cbfc1e Health in #🗽・new-york
[2026-01-05T18:08:19.351Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-05T18:08:20.853Z] [BOT] 💾 Marked as posted: Pricing Engineer @ ORG_60cbfc1e Health (instance #1)
[2026-01-05T18:08:20.853Z] [BOT] 💾 BEFORE ARCHIVING: 1305 jobs in database
[2026-01-05T18:08:20.854Z] [BOT] ✅ No jobs to archive (all 1305 jobs within 7-day window)
[2026-01-05T18:08:20.864Z] [BOT] 💾 Saved posted_jobs.json: 1305 active jobs
[2026-01-05T18:08:20.864Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T18:08:20.864Z] [BOT] 📍 [ROUTING] "Product Engineer" @ ORG_60cbfc1e Health
[2026-01-05T18:08:20.864Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T18:08:21.105Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ ORG_60cbfc1e Health in #💻・tech-jobs
  ✅ Industry: Product Engineer @ ORG_60cbfc1e Health
[2026-01-05T18:08:23.040Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ ORG_60cbfc1e Health in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-05T18:08:24.542Z] [BOT] 💾 Marked as posted: Product Engineer @ ORG_60cbfc1e Health (instance #1)
[2026-01-05T18:08:24.542Z] [BOT] 💾 BEFORE ARCHIVING: 1306 jobs in database
[2026-01-05T18:08:24.543Z] [BOT] ✅ No jobs to archive (all 1306 jobs within 7-day window)
[2026-01-05T18:08:24.551Z] [BOT] 💾 Saved posted_jobs.json: 1306 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T18:08:24.552Z] [BOT] 📍 [ROUTING] "Software Engineer I - Embedded Devices" @ ORG_aea5fbb0
[2026-01-05T18:08:24.552Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T18:08:27.723Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I - Embedded Devices @ ORG_aea5fbb0 in #💻・tech-jobs
  ✅ Industry: Software Engineer I - Embedded Devices @ ORG_aea5fbb0
[2026-01-05T18:08:29.436Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I - Embedded Devices @ ORG_aea5fbb0 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-05T18:08:30.938Z] [BOT] 💾 Marked as posted: Software Engineer I - Embedded Devices @ ORG_aea5fbb0 (instance #1)
[2026-01-05T18:08:30.938Z] [BOT] 💾 BEFORE ARCHIVING: 1307 jobs in database
[2026-01-05T18:08:30.939Z] [BOT] ✅ No jobs to archive (all 1307 jobs within 7-day window)
[2026-01-05T18:08:30.949Z] [BOT] 💾 Saved posted_jobs.json: 1307 active jobs
[2026-01-05T18:08:30.949Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T18:08:30.949Z] [BOT] 📍 [ROUTING] "Application Engineer" @ ORG_86554b90
[2026-01-05T18:08:30.949Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T18:08:31.149Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_86554b90 in #💻・tech-jobs
[2026-01-05T18:08:31.149Z] [BOT] ✅ Industry: Application Engineer @ ORG_86554b90
[2026-01-05T18:08:32.901Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_86554b90 in #💻・remote-usa
[2026-01-05T18:08:32.901Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-05T18:08:34.401Z] [BOT] 💾 Marked as posted: Application Engineer @ ORG_86554b90 (instance #1)
[2026-01-05T18:08:34.402Z] [BOT] 💾 BEFORE ARCHIVING: 1308 jobs in database
[2026-01-05T18:08:34.402Z] [BOT] ✅ No jobs to archive (all 1308 jobs within 7-day window)
[2026-01-05T18:08:34.411Z] [BOT] 💾 Saved posted_jobs.json: 1308 active jobs
[2026-01-05T18:08:34.411Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T18:08:37.413Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-05T18:08:37.413Z] [BOT] 📍 [ROUTING] "Report Customization Specialist - Temporary Assignment" @ ORG_a032d230 Medical Corporation
   Category: HEALTHCARE (matched: "healthcare")
[2026-01-05T18:08:37.413Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-05T18:08:37.762Z] [BOT] ✅ Created forum post: 🏢 Report Customization Specialist - Temporary Assignment @ ORG_a032d230 Medical Corporation in #🩺・healthcare-jobs
  ✅ Industry: Report Customization Specialist - Temporary Assignment @ ORG_a032d230 Medical Corporation
[2026-01-05T18:08:39.474Z] [BOT] ✅ Created forum post: 🏢 Report Customization Specialist - Temporary Assignment @ ORG_a032d230 Medical Corporation in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-05T18:08:40.975Z] [BOT] 💾 Marked as posted: Report Customization Specialist - Temporary Assignment @ ORG_a032d230 Medical Corporation (instance #1)
[2026-01-05T18:08:40.975Z] [BOT] 💾 BEFORE ARCHIVING: 1309 jobs in database
[2026-01-05T18:08:40.976Z] [BOT] ✅ No jobs to archive (all 1309 jobs within 7-day window)
[2026-01-05T18:08:40.985Z] [BOT] 💾 Saved posted_jobs.json: 1309 active jobs
[2026-01-05T18:08:40.985Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T18:08:43.986Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-05T18:08:43.987Z] [BOT] ⏭️  Skipping duplicate: JID_116264ce-development_r17786-1 (posted within 7 days)
[2026-01-05T18:08:43.987Z] [BOT] ⏭️  Skipping duplicate: JID_c385d046-assignment_r17168 (posted within 7 days)
[2026-01-05T18:08:43.987Z] [BOT] ⏭️  Skipping duplicate: JID_f7ac97f2 (posted within 7 days)
[2026-01-05T18:08:43.987Z] [BOT] ⏭️  Skipping duplicate: JID_fdb28f9e (posted within 7 days)
⏭️  Skipping duplicate: JID_dbc5ca0f (posted within 7 days)
[2026-01-05T18:08:43.987Z] [BOT] ⏭️  Skipping duplicate: JID_811bbf1a (posted within 7 days)
[2026-01-05T18:08:43.987Z] [BOT] ⏭️  Skipping duplicate: JID_e34c8ab9-devices_r16418 (posted within 7 days)
⏭️  Skipping duplicate: JID_cb308957-engineer_jr_1042522 (posted within 7 days)
[2026-01-05T18:08:43.988Z] [BOT] ✅ Loaded pending queue: 9 total (0 pending, 9 enriched, 0 posted)
[2026-01-05T18:08:43.988Z] [BOT] ✅ Saved pending queue: 9 total (0 pending, 1 enriched, 8 posted)
[2026-01-05T18:08:43.988Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T18:08:44.044Z] [BOT] 📂 Loaded 2208 existing routing entries
[2026-01-05T18:08:44.101Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 2216
[2026-01-05T18:08:44.102Z] [BOT] Timestamp: 2026-01-05T18:08:44.091Z
[2026-01-05T18:08:44.102Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T18:08:44.102Z] [BOT] Total attempts: 19
   Successful: 16
   Failed: 0
   Skipped: 3
[2026-01-05T18:08:44.103Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-05T18:08:44.103Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 5
   Top channels:
[2026-01-05T18:08:44.103Z] [BOT] 1. #💻・tech-jobs: 7 posts
     2. #🗽・new-york: 4 posts
     3. #💻・remote-usa: 3 posts
     4. #🚌・boston: 1 posts
     5. #🩺・healthcare-jobs: 1 posts
[2026-01-05T18:08:44.103Z] [BOT] [STATS] Channel stats saved
[2026-01-05T18:08:46.115Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3328) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*