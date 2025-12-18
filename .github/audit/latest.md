# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T18:57:36.997Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T18:56:38.471Z] ========================================
[2025-12-18T18:56:38.473Z] Discord Bot Execution Log
[2025-12-18T18:56:38.473Z] Environment: GitHub Actions
[2025-12-18T18:56:38.473Z] Node Version: v20.19.6
[2025-12-18T18:56:38.473Z] ========================================
[2025-12-18T18:56:38.473Z] Environment Variables Check:
[2025-12-18T18:56:38.473Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T18:56:38.473Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T18:56:38.473Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T18:56:38.473Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T18:56:38.473Z] 
Multi-Channel Configuration:
[2025-12-18T18:56:38.473Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T18:56:38.474Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T18:56:38.474Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T18:56:38.474Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T18:56:38.474Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T18:56:38.474Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T18:56:38.474Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T18:56:38.474Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T18:56:38.474Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T18:56:38.474Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T18:56:38.474Z] 
Data Files Check:
[2025-12-18T18:56:38.475Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66361 bytes)
[2025-12-18T18:56:38.477Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 274550 bytes)
[2025-12-18T18:56:38.477Z] 
========================================
[2025-12-18T18:56:38.477Z] Starting Enhanced Discord Bot...
[2025-12-18T18:56:38.477Z] ========================================
[2025-12-18T18:56:39.014Z] [BOT] ✅ Loaded V2 database: 445 jobs
[2025-12-18T18:56:39.677Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T18:56:39.678Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T18:56:39.678Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T18:56:39.679Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T18:56:39.730Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T18:56:39.784Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 106
[2025-12-18T18:56:39.786Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T18:56:39.786Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T18:56:39.786Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T18:56:39.787Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-18T18:56:39.787Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T18:56:39.792Z] [BOT] 📌 Posting 5 jobs to #📈・JID_fb739488
[2025-12-18T18:56:39.792Z] [BOT] 📍 [ROUTING] "Healthcare Analyst" @ ORG_a212407d Health Care
[2025-12-18T18:56:39.792Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-18T18:56:39.810Z] [BOT ERROR] (node:2524) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T18:56:40.139Z] [BOT] ✅ Created forum post: 🏢 Healthcare Analyst @ ORG_a212407d Health Care in #📈・JID_fb739488
  ✅ Industry: Healthcare Analyst @ ORG_a212407d Health Care
[2025-12-18T18:56:43.201Z] [BOT] ✅ Created forum post: 🏢 Healthcare Analyst @ ORG_a212407d Health Care in #🗽・new-york
[2025-12-18T18:56:43.201Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-18T18:56:44.702Z] [BOT] 💾 Marked as posted: Healthcare Analyst @ ORG_a212407d Health Care (instance #1)
[2025-12-18T18:56:44.702Z] [BOT] 💾 BEFORE ARCHIVING: 446 jobs in database
[2025-12-18T18:56:44.702Z] [BOT] ✅ No jobs to archive (all 446 jobs within 7-day window)
[2025-12-18T18:56:44.708Z] [BOT] 💾 Saved posted_jobs.json: 446 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T18:56:44.708Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_8af17c2e
[2025-12-18T18:56:44.708Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T18:56:44.957Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_8af17c2e in #📈・JID_fb739488
[2025-12-18T18:56:44.957Z] [BOT] ✅ Industry: Data Scientist @ ORG_8af17c2e
[2025-12-18T18:56:46.630Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_8af17c2e in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-18T18:56:48.130Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_8af17c2e (instance #1)
[2025-12-18T18:56:48.130Z] [BOT] 💾 BEFORE ARCHIVING: 447 jobs in database
[2025-12-18T18:56:48.131Z] [BOT] ✅ No jobs to archive (all 447 jobs within 7-day window)
[2025-12-18T18:56:48.136Z] [BOT] 💾 Saved posted_jobs.json: 447 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T18:56:48.137Z] [BOT] 📍 [ROUTING] "Deployment Engineer" @ ORG_0e771a5f
[2025-12-18T18:56:48.138Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-18T18:56:48.138Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T18:56:49.095Z] [BOT] ✅ Created forum post: 🏢 Deployment Engineer @ ORG_0e771a5f in #📈・JID_fb739488
  ✅ Industry: Deployment Engineer @ ORG_0e771a5f
[2025-12-18T18:56:50.876Z] [BOT] ✅ Created forum post: 🏢 Deployment Engineer @ ORG_0e771a5f in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T18:56:52.376Z] [BOT] 💾 Marked as posted: Deployment Engineer @ ORG_0e771a5f (instance #1)
[2025-12-18T18:56:52.377Z] [BOT] 💾 BEFORE ARCHIVING: 448 jobs in database
[2025-12-18T18:56:52.377Z] [BOT] ✅ No jobs to archive (all 448 jobs within 7-day window)
[2025-12-18T18:56:52.381Z] [BOT] 💾 Saved posted_jobs.json: 448 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T18:56:52.382Z] [BOT] 📍 [ROUTING] "C# Backend Development Engineer "C2C"" @ ORG_0e771a5f
[2025-12-18T18:56:52.382Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T18:56:52.658Z] [BOT] ✅ Created forum post: 🏢 C# Backend Development Engineer "C2C" @ ORG_0e771a5f in #📈・JID_fb739488
  ✅ Industry: C# Backend Development Engineer "C2C" @ ORG_0e771a5f
[2025-12-18T18:56:54.462Z] [BOT] ✅ Created forum post: 🏢 C# Backend Development Engineer "C2C" @ ORG_0e771a5f in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T18:56:55.962Z] [BOT] 💾 Marked as posted: C# Backend Development Engineer "C2C" @ ORG_0e771a5f (instance #1)
[2025-12-18T18:56:55.963Z] [BOT] 💾 BEFORE ARCHIVING: 449 jobs in database
[2025-12-18T18:56:55.963Z] [BOT] ✅ No jobs to archive (all 449 jobs within 7-day window)
[2025-12-18T18:56:55.967Z] [BOT] 💾 Saved posted_jobs.json: 449 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T18:56:55.968Z] [BOT] 📍 [ROUTING] "Associate Data Science Product Manager" @ ORG_ba19e9c3 Ventures
[2025-12-18T18:56:55.968Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch, nonTechMatch (using data-science)
[2025-12-18T18:56:56.150Z] [BOT] ✅ Created forum post: 🏢 Associate Data Science Product Manager @ ORG_ba19e9c3 Ventures in #📈・JID_fb739488
  ✅ Industry: Associate Data Science Product Manager @ ORG_ba19e9c3 Ventures
[2025-12-18T18:56:58.429Z] [BOT] ✅ Created forum post: 🏢 Associate Data Science Product Manager @ ORG_ba19e9c3 Ventures in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T18:56:59.931Z] [BOT] 💾 Marked as posted: Associate Data Science Product Manager @ ORG_ba19e9c3 Ventures (instance #1)
[2025-12-18T18:56:59.931Z] [BOT] 💾 BEFORE ARCHIVING: 450 jobs in database
[2025-12-18T18:56:59.931Z] [BOT] ✅ No jobs to archive (all 450 jobs within 7-day window)
[2025-12-18T18:56:59.936Z] [BOT] 💾 Saved posted_jobs.json: 450 active jobs
[2025-12-18T18:56:59.936Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T18:57:02.936Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-18T18:57:02.937Z] [BOT] 📍 [ROUTING] "Baseball Technology Fellow" @ ORG_2bc58fcc League Baseball
   Category: MARKETING (matched: "growth")
[2025-12-18T18:57:02.937Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2025-12-18T18:57:03.217Z] [BOT] ✅ Created forum post: 🏢 Baseball Technology Fellow @ ORG_2bc58fcc League Baseball in #📣・marketing-jobs
  ✅ Industry: Baseball Technology Fellow @ ORG_2bc58fcc League Baseball
[2025-12-18T18:57:05.025Z] [BOT] ✅ Created forum post: 🏢 Baseball Technology Fellow @ ORG_2bc58fcc League Baseball in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T18:57:06.525Z] [BOT] 💾 Marked as posted: Baseball Technology Fellow @ ORG_2bc58fcc League Baseball (instance #1)
[2025-12-18T18:57:06.525Z] [BOT] 💾 BEFORE ARCHIVING: 451 jobs in database
[2025-12-18T18:57:06.526Z] [BOT] ✅ No jobs to archive (all 451 jobs within 7-day window)
[2025-12-18T18:57:06.531Z] [BOT] 💾 Saved posted_jobs.json: 451 active jobs
[2025-12-18T18:57:06.531Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T18:57:09.531Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-18T18:57:09.531Z] [BOT] 📍 [ROUTING] "Software Engineer - 2026 start dates - In person" @ ORG_b6cb1069
[2025-12-18T18:57:09.532Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T18:57:09.898Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - 2026 start dates - In person @ ORG_b6cb1069 in #💻・tech-jobs
  ✅ Industry: Software Engineer - 2026 start dates - In person @ ORG_b6cb1069
[2025-12-18T18:57:11.998Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - 2026 start dates - In person @ ORG_b6cb1069 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T18:57:13.500Z] [BOT] 💾 Marked as posted: Software Engineer - 2026 start dates - In person @ ORG_b6cb1069 (instance #1)
[2025-12-18T18:57:13.500Z] [BOT] 💾 BEFORE ARCHIVING: 452 jobs in database
[2025-12-18T18:57:13.500Z] [BOT] ✅ No jobs to archive (all 452 jobs within 7-day window)
[2025-12-18T18:57:13.506Z] [BOT] 💾 Saved posted_jobs.json: 452 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T18:57:13.506Z] [BOT] 📍 [ROUTING] "Forward-Deployed Engineer" @ ORG_bbe057c5
[2025-12-18T18:57:13.506Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T18:57:13.718Z] [BOT] ✅ Created forum post: 🏢 Forward-Deployed Engineer @ ORG_bbe057c5 in #💻・tech-jobs
  ✅ Industry: Forward-Deployed Engineer @ ORG_bbe057c5
[2025-12-18T18:57:15.709Z] [BOT] ✅ Created forum post: 🏢 Forward-Deployed Engineer @ ORG_bbe057c5 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T18:57:17.211Z] [BOT] 💾 Marked as posted: Forward-Deployed Engineer @ ORG_bbe057c5 (instance #1)
[2025-12-18T18:57:17.211Z] [BOT] 💾 BEFORE ARCHIVING: 453 jobs in database
[2025-12-18T18:57:17.211Z] [BOT] ✅ No jobs to archive (all 453 jobs within 7-day window)
[2025-12-18T18:57:17.216Z] [BOT] 💾 Saved posted_jobs.json: 453 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T18:57:20.217Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-18T18:57:20.218Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher - Multiple Levels" @ ORG_0aa5052d State University (LSU)
   Category: FINANCE (matched: "tax")
[2025-12-18T18:57:20.218Z] [BOT] Channel: 💰・finance-jobs (1391...2941)
[2025-12-18T18:57:20.637Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Multiple Levels @ ORG_0aa5052d State University (LSU) in #💰・finance-jobs
[2025-12-18T18:57:20.637Z] [BOT] ✅ Industry: Postdoctoral Researcher - Multiple Levels @ ORG_0aa5052d State University (LSU)
[2025-12-18T18:57:22.367Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Multiple Levels @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T18:57:23.868Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher - Multiple Levels @ ORG_0aa5052d State University (LSU) (instance #1)
[2025-12-18T18:57:23.868Z] [BOT] 💾 BEFORE ARCHIVING: 454 jobs in database
[2025-12-18T18:57:23.868Z] [BOT] ✅ No jobs to archive (all 454 jobs within 7-day window)
[2025-12-18T18:57:23.873Z] [BOT] 💾 Saved posted_jobs.json: 454 active jobs
[2025-12-18T18:57:23.873Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T18:57:26.873Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-18T18:57:26.873Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher - Survey Science/Time Domain Astronomy" @ ORG_478e100e University
   Category: AI (matched: "machine learning")
[2025-12-18T18:57:26.873Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T18:57:27.162Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Survey Science/Time Domain Astronomy @ ORG_478e100e University in #🤖・ai-jobs
[2025-12-18T18:57:27.162Z] [BOT] ✅ Industry: Postdoctoral Researcher - Survey Science/Time Domain Astronomy @ ORG_478e100e University
[2025-12-18T18:57:29.173Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Survey Science/Time Domain Astronomy @ ORG_478e100e University in #💻・remote-usa
[2025-12-18T18:57:29.173Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T18:57:30.675Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher - Survey Science/Time Domain Astronomy @ ORG_478e100e University (instance #1)
[2025-12-18T18:57:30.675Z] [BOT] 💾 BEFORE ARCHIVING: 455 jobs in database
[2025-12-18T18:57:30.675Z] [BOT] ✅ No jobs to archive (all 455 jobs within 7-day window)
[2025-12-18T18:57:30.680Z] [BOT] 💾 Saved posted_jobs.json: 455 active jobs
[2025-12-18T18:57:30.680Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T18:57:33.680Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-18T18:57:33.680Z] [BOT] ⏭️  Skipping duplicate: JID_c7891044 (posted within 7 days)
[2025-12-18T18:57:33.681Z] [BOT] ⏭️  Skipping duplicate: JID_51ab81b7 (posted within 7 days)
⏭️  Skipping duplicate: JID_c641a1c5 (posted within 7 days)
[2025-12-18T18:57:33.681Z] [BOT] ⏭️  Skipping duplicate: JID_614cec6b (posted within 7 days)
⏭️  Skipping duplicate: JID_c43d4fb3-centific_global-JID_1be6a3c6-engineer_jr101165 (posted within 7 days)
[2025-12-18T18:57:33.681Z] [BOT] ⏭️  Skipping duplicate: JID_c43d4fb3-centific_global-JID_9f108857-_jr103606 (posted within 7 days)
[2025-12-18T18:57:33.681Z] [BOT] ⏭️  Skipping duplicate: JID_9ed05ee2 (posted within 7 days)
[2025-12-18T18:57:33.681Z] [BOT] ⏭️  Skipping duplicate: JID_d4d4eb51-_r00100578 (posted within 7 days)
⏭️  Skipping duplicate: JID_cc707d2b (posted within 7 days)
[2025-12-18T18:57:33.681Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_5c5ee63f-astronomy_req_0000072795-2 (posted within 7 days)
[2025-12-18T18:57:33.685Z] [BOT] ✅ Loaded pending queue: 525 total (505 pending, 20 enriched, 0 posted)
[2025-12-18T18:57:33.692Z] [BOT] ✅ Saved pending queue: 525 total (505 pending, 10 enriched, 10 posted)
[2025-12-18T18:57:33.692Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-18T18:57:33.731Z] [BOT] 📂 Loaded 430 existing routing entries
[2025-12-18T18:57:33.772Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2025-12-18T18:57:33.772Z] [BOT] Total entries: 440
   Timestamp: 2025-12-18T18:57:33.770Z
[2025-12-18T18:57:33.773Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
[2025-12-18T18:57:33.773Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-18T18:57:33.773Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-18T18:57:33.773Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
[2025-12-18T18:57:33.774Z] [BOT] 1. #💻・remote-usa: 7 posts
     2. #📈・JID_fb739488: 5 posts
     3. #🗽・new-york: 2 posts
     4. #💻・tech-jobs: 2 posts
[2025-12-18T18:57:33.774Z] [BOT] 5. #📣・marketing-jobs: 1 posts
[2025-12-18T18:57:33.774Z] [BOT] [STATS] Channel stats saved
[2025-12-18T18:57:35.786Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2524) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*