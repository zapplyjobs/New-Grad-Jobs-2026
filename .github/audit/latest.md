# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T02:36:16.841Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T02:35:27.607Z] ========================================
[2025-12-16T02:35:27.609Z] Discord Bot Execution Log
[2025-12-16T02:35:27.609Z] Environment: GitHub Actions
[2025-12-16T02:35:27.609Z] Node Version: v20.19.6
[2025-12-16T02:35:27.609Z] ========================================
[2025-12-16T02:35:27.609Z] Environment Variables Check:
[2025-12-16T02:35:27.609Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T02:35:27.609Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T02:35:27.609Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T02:35:27.610Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T02:35:27.610Z] 
Multi-Channel Configuration:
[2025-12-16T02:35:27.610Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T02:35:27.610Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T02:35:27.610Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T02:35:27.610Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T02:35:27.610Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T02:35:27.610Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T02:35:27.610Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T02:35:27.610Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T02:35:27.610Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T02:35:27.610Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T02:35:27.610Z] 
Data Files Check:
[2025-12-16T02:35:27.611Z] .github/data/new_jobs.json: ✅ Exists (10 items, 55848 bytes)
[2025-12-16T02:35:27.612Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 117259 bytes)
[2025-12-16T02:35:27.612Z] 
========================================
[2025-12-16T02:35:27.612Z] Starting Enhanced Discord Bot...
[2025-12-16T02:35:27.612Z] ========================================
[2025-12-16T02:35:28.126Z] [BOT] ✅ Loaded V2 database: 185 jobs
[2025-12-16T02:35:29.158Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T02:35:29.159Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T02:35:29.159Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T02:35:29.162Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T02:35:29.215Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2025-12-16T02:35:29.283Z] [BOT] ✅ Export complete: Added 2, Skipped 8, Total 191
[2025-12-16T02:35:29.285Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T02:35:29.285Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T02:35:29.285Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T02:35:29.286Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T02:35:29.286Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T02:35:29.288Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-16T02:35:29.289Z] [BOT] 📍 [ROUTING] "Junior Software Engineer, AI" @ ORG_307b6d84
[2025-12-16T02:35:29.289Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T02:35:29.293Z] [BOT ERROR] (node:2407) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T02:35:29.503Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer, AI @ ORG_307b6d84 in #💻・tech-jobs
[2025-12-16T02:35:29.503Z] [BOT] ✅ Industry: Junior Software Engineer, AI @ ORG_307b6d84
[2025-12-16T02:35:31.315Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer, AI @ ORG_307b6d84 in #🌉・san-francisco
[2025-12-16T02:35:31.315Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T02:35:32.815Z] [BOT] 💾 Marked as posted: Junior Software Engineer, AI @ ORG_307b6d84 (instance #1)
[2025-12-16T02:35:32.815Z] [BOT] 💾 BEFORE ARCHIVING: 186 jobs in database
[2025-12-16T02:35:32.816Z] [BOT] ✅ No jobs to archive (all 186 jobs within 7-day window)
[2025-12-16T02:35:32.825Z] [BOT] 💾 Saved posted_jobs.json: 186 active jobs
[2025-12-16T02:35:32.825Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T02:35:32.826Z] [BOT] 📍 [ROUTING] "Senior Backend Engineer" @ ORG_81885e17
[2025-12-16T02:35:32.826Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T02:35:33.017Z] [BOT] ✅ Created forum post: 🏢 Senior Backend Engineer @ ORG_81885e17 in #💻・tech-jobs
[2025-12-16T02:35:33.017Z] [BOT] ✅ Industry: Senior Backend Engineer @ ORG_81885e17
[2025-12-16T02:35:34.817Z] [BOT] ✅ Created forum post: 🏢 Senior Backend Engineer @ ORG_81885e17 in #🌉・san-francisco
[2025-12-16T02:35:34.817Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T02:35:36.317Z] [BOT] 💾 Marked as posted: Senior Backend Engineer @ ORG_81885e17 (instance #1)
[2025-12-16T02:35:36.317Z] [BOT] 💾 BEFORE ARCHIVING: 187 jobs in database
[2025-12-16T02:35:36.318Z] [BOT] ✅ No jobs to archive (all 187 jobs within 7-day window)
[2025-12-16T02:35:36.320Z] [BOT] 💾 Saved posted_jobs.json: 187 active jobs
[2025-12-16T02:35:36.321Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T02:35:36.322Z] [BOT] 📍 [ROUTING] "2026 Full-time - Software Engineer I - Onsite/CO" @ ORG_75f04b84
[2025-12-16T02:35:36.322Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T02:35:36.500Z] [BOT] ✅ Created forum post: 🏢 2026 Full-time - Software Engineer I - Onsite/CO @ ORG_75f04b84 in #💻・tech-jobs
[2025-12-16T02:35:36.500Z] [BOT] ✅ Industry: 2026 Full-time - Software Engineer I - Onsite/CO @ ORG_75f04b84
[2025-12-16T02:35:38.169Z] [BOT] ✅ Created forum post: 🏢 2026 Full-time - Software Engineer I - Onsite/CO @ ORG_75f04b84 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-16T02:35:39.670Z] [BOT] 💾 Marked as posted: 2026 Full-time - Software Engineer I - Onsite/CO @ ORG_75f04b84 (instance #1)
[2025-12-16T02:35:39.670Z] [BOT] 💾 BEFORE ARCHIVING: 188 jobs in database
✅ No jobs to archive (all 188 jobs within 7-day window)
[2025-12-16T02:35:39.672Z] [BOT] 💾 Saved posted_jobs.json: 188 active jobs
[2025-12-16T02:35:39.673Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T02:35:39.674Z] [BOT] 📍 [ROUTING] "Software Engineering Associate" @ ORG_c3f8f1e2 Insurance
[2025-12-16T02:35:39.674Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T02:35:39.923Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Associate @ ORG_c3f8f1e2 Insurance in #💻・tech-jobs
  ✅ Industry: Software Engineering Associate @ ORG_c3f8f1e2 Insurance
[2025-12-16T02:35:41.636Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Associate @ ORG_c3f8f1e2 Insurance in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T02:35:43.137Z] [BOT] 💾 Marked as posted: Software Engineering Associate @ ORG_c3f8f1e2 Insurance (instance #1)
[2025-12-16T02:35:43.137Z] [BOT] 💾 BEFORE ARCHIVING: 189 jobs in database
[2025-12-16T02:35:43.137Z] [BOT] ✅ No jobs to archive (all 189 jobs within 7-day window)
[2025-12-16T02:35:43.140Z] [BOT] 💾 Saved posted_jobs.json: 189 active jobs
[2025-12-16T02:35:43.140Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T02:35:43.141Z] [BOT] 📍 [ROUTING] "Appian Application Developer" @ ORG_36b7cbc3
[2025-12-16T02:35:43.141Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T02:35:43.332Z] [BOT] ✅ Created forum post: 🏢 Appian Application Developer @ ORG_36b7cbc3 in #💻・tech-jobs
  ✅ Industry: Appian Application Developer @ ORG_36b7cbc3
[2025-12-16T02:35:45.034Z] [BOT] ✅ Created forum post: 🏢 Appian Application Developer @ ORG_36b7cbc3 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-16T02:35:46.534Z] [BOT] 💾 Marked as posted: Appian Application Developer @ ORG_36b7cbc3 (instance #1)
[2025-12-16T02:35:46.534Z] [BOT] 💾 BEFORE ARCHIVING: 190 jobs in database
[2025-12-16T02:35:46.534Z] [BOT] ✅ No jobs to archive (all 190 jobs within 7-day window)
[2025-12-16T02:35:46.537Z] [BOT] 💾 Saved posted_jobs.json: 190 active jobs
[2025-12-16T02:35:46.537Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T02:35:49.537Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2025-12-16T02:35:49.538Z] [BOT] 📍 [ROUTING] "Associate Data Science" @ ORG_ae835968 media
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T02:35:49.538Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-16T02:35:49.907Z] [BOT] ✅ Created forum post: 🏢 Associate Data Science @ ORG_ae835968 media in #🤖・ai-jobs
  ✅ Industry: Associate Data Science @ ORG_ae835968 media
[2025-12-16T02:35:51.655Z] [BOT] ✅ Created forum post: 🏢 Associate Data Science @ ORG_ae835968 media in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-16T02:35:53.156Z] [BOT] 💾 Marked as posted: Associate Data Science @ ORG_ae835968 media (instance #1)
[2025-12-16T02:35:53.156Z] [BOT] 💾 BEFORE ARCHIVING: 191 jobs in database
[2025-12-16T02:35:53.156Z] [BOT] ✅ No jobs to archive (all 191 jobs within 7-day window)
[2025-12-16T02:35:53.158Z] [BOT] 💾 Saved posted_jobs.json: 191 active jobs
[2025-12-16T02:35:53.158Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T02:35:53.159Z] [BOT] 📍 [ROUTING] "Compact Muon Solenoid Postdoctoral Research Associate" @ ORG_af10f363
[2025-12-16T02:35:53.159Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T02:35:53.347Z] [BOT] ✅ Created forum post: 🏢 Compact Muon Solenoid Postdoctoral Research Associate @ ORG_af10f363 in #🤖・ai-jobs
  ✅ Industry: Compact Muon Solenoid Postdoctoral Research Associate @ ORG_af10f363
[2025-12-16T02:35:55.049Z] [BOT] ✅ Created forum post: 🏢 Compact Muon Solenoid Postdoctoral Research Associate @ ORG_af10f363 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-16T02:35:56.549Z] [BOT] 💾 Marked as posted: Compact Muon Solenoid Postdoctoral Research Associate @ ORG_af10f363 (instance #1)
[2025-12-16T02:35:56.550Z] [BOT] 💾 BEFORE ARCHIVING: 192 jobs in database
[2025-12-16T02:35:56.550Z] [BOT] ✅ No jobs to archive (all 192 jobs within 7-day window)
[2025-12-16T02:35:56.553Z] [BOT] 💾 Saved posted_jobs.json: 192 active jobs
[2025-12-16T02:35:56.553Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T02:35:56.553Z] [BOT] 📍 [ROUTING] "Senior Systems Engineer - Corporate Systems" @ ORG_9379ad87 International
[2025-12-16T02:35:56.553Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T02:35:56.799Z] [BOT] ✅ Created forum post: 🏢 Senior Systems Engineer - Corporate Systems @ ORG_9379ad87 International in #🤖・ai-jobs
[2025-12-16T02:35:56.800Z] [BOT] ✅ Industry: Senior Systems Engineer - Corporate Systems @ ORG_9379ad87 International
[2025-12-16T02:35:58.468Z] [BOT] ✅ Created forum post: 🏢 Senior Systems Engineer - Corporate Systems @ ORG_9379ad87 International in #💻・remote-usa
[2025-12-16T02:35:58.468Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T02:35:59.968Z] [BOT] 💾 Marked as posted: Senior Systems Engineer - Corporate Systems @ ORG_9379ad87 International (instance #1)
[2025-12-16T02:35:59.968Z] [BOT] 💾 BEFORE ARCHIVING: 193 jobs in database
[2025-12-16T02:35:59.969Z] [BOT] ✅ No jobs to archive (all 193 jobs within 7-day window)
[2025-12-16T02:35:59.972Z] [BOT] 💾 Saved posted_jobs.json: 193 active jobs
[2025-12-16T02:35:59.972Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T02:35:59.972Z] [BOT] 📍 [ROUTING] "AI Developer" @ ORG_8fc44164 Consulting
[2025-12-16T02:35:59.973Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T02:36:00.221Z] [BOT] ✅ Created forum post: 🏢 AI Developer @ ORG_8fc44164 Consulting in #🤖・ai-jobs
  ✅ Industry: AI Developer @ ORG_8fc44164 Consulting
[2025-12-16T02:36:02.656Z] [BOT] ✅ Created forum post: 🏢 AI Developer @ ORG_8fc44164 Consulting in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-16T02:36:04.157Z] [BOT] 💾 Marked as posted: AI Developer @ ORG_8fc44164 Consulting (instance #1)
[2025-12-16T02:36:04.157Z] [BOT] 💾 BEFORE ARCHIVING: 194 jobs in database
[2025-12-16T02:36:04.157Z] [BOT] ✅ No jobs to archive (all 194 jobs within 7-day window)
[2025-12-16T02:36:04.160Z] [BOT] 💾 Saved posted_jobs.json: 194 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T02:36:07.161Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-16T02:36:07.161Z] [BOT] 📍 [ROUTING] "Data Analyst and AI Specialist" @ ORG_15a5b314 Mellon University
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-16T02:36:07.161Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T02:36:07.418Z] [BOT] ✅ Created forum post: 🏢 Data Analyst and AI Specialist @ ORG_15a5b314 Mellon University in #📈・JID_fb739488
  ✅ Industry: Data Analyst and AI Specialist @ ORG_15a5b314 Mellon University
[2025-12-16T02:36:09.210Z] [BOT] ✅ Created forum post: 🏢 Data Analyst and AI Specialist @ ORG_15a5b314 Mellon University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T02:36:10.712Z] [BOT] 💾 Marked as posted: Data Analyst and AI Specialist @ ORG_15a5b314 Mellon University (instance #1)
[2025-12-16T02:36:10.712Z] [BOT] 💾 BEFORE ARCHIVING: 195 jobs in database
✅ No jobs to archive (all 195 jobs within 7-day window)
[2025-12-16T02:36:10.715Z] [BOT] 💾 Saved posted_jobs.json: 195 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T02:36:13.715Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T02:36:13.716Z] [BOT] ⏭️  Skipping duplicate: JID_3dd93fa8 (posted within 7 days)
[2025-12-16T02:36:13.716Z] [BOT] ⏭️  Skipping duplicate: JID_a215e590 (posted within 7 days)
[2025-12-16T02:36:13.716Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_f5e19171-_01810840 (posted within 7 days)
⏭️  Skipping duplicate: JID_aa958bc9-science_r0016354 (posted within 7 days)
[2025-12-16T02:36:13.716Z] [BOT] ⏭️  Skipping duplicate: JID_773e7b6d-associate_347265 (posted within 7 days)
[2025-12-16T02:36:13.716Z] [BOT] ⏭️  Skipping duplicate: JID_0f53aa3f-_r_009151 (posted within 7 days)
⏭️  Skipping duplicate: JID_29f774a7-provost_2023933-1 (posted within 7 days)
[2025-12-16T02:36:13.716Z] [BOT] ⏭️  Skipping duplicate: JID_add73b68-analyst_r20060159-1 (posted within 7 days)
[2025-12-16T02:36:13.716Z] [BOT] ⏭️  Skipping duplicate: JID_25436736 (posted within 7 days)
[2025-12-16T02:36:13.716Z] [BOT] ⏭️  Skipping duplicate: JID_e3e16e88 (posted within 7 days)
[2025-12-16T02:36:13.722Z] [BOT] ✅ Loaded pending queue: 678 total (658 pending, 20 enriched, 0 posted)
[2025-12-16T02:36:13.732Z] [BOT] ✅ Saved pending queue: 678 total (658 pending, 10 enriched, 10 posted)
[2025-12-16T02:36:13.732Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T02:36:13.769Z] [BOT] 📂 Loaded 178 existing routing entries
[2025-12-16T02:36:13.805Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2025-12-16T02:36:13.806Z] [BOT] Total entries: 188
   Timestamp: 2025-12-16T02:36:13.804Z
[2025-12-16T02:36:13.806Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T02:36:13.806Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T02:36:15.817Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2407) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*