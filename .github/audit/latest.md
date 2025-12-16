# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T04:27:00.514Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T04:26:09.828Z] ========================================
[2025-12-16T04:26:09.830Z] Discord Bot Execution Log
[2025-12-16T04:26:09.830Z] Environment: GitHub Actions
[2025-12-16T04:26:09.830Z] Node Version: v20.19.6
[2025-12-16T04:26:09.830Z] ========================================
[2025-12-16T04:26:09.830Z] Environment Variables Check:
[2025-12-16T04:26:09.831Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T04:26:09.831Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T04:26:09.831Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T04:26:09.831Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T04:26:09.831Z] 
Multi-Channel Configuration:
[2025-12-16T04:26:09.831Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T04:26:09.831Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T04:26:09.831Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T04:26:09.831Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T04:26:09.831Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T04:26:09.832Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T04:26:09.832Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T04:26:09.832Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T04:26:09.832Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T04:26:09.832Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T04:26:09.832Z] 
Data Files Check:
[2025-12-16T04:26:09.832Z] .github/data/new_jobs.json: ✅ Exists (10 items, 36572 bytes)
[2025-12-16T04:26:09.834Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 142107 bytes)
[2025-12-16T04:26:09.834Z] 
========================================
[2025-12-16T04:26:09.834Z] Starting Enhanced Discord Bot...
[2025-12-16T04:26:09.834Z] ========================================
[2025-12-16T04:26:10.363Z] [BOT] ✅ Loaded V2 database: 225 jobs
[2025-12-16T04:26:11.363Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T04:26:11.363Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T04:26:11.363Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T04:26:11.366Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T04:26:11.420Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T04:26:11.492Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T04:26:11.493Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T04:26:11.493Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T04:26:11.494Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T04:26:11.494Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T04:26:11.495Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T04:26:11.499Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-16T04:26:11.500Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_3495e757 Cap Supply Holdings
[2025-12-16T04:26:11.500Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-16T04:26:11.517Z] [BOT ERROR] (node:2794) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T04:26:11.699Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_3495e757 Cap Supply Holdings in #🤖・ai-jobs
[2025-12-16T04:26:11.699Z] [BOT] ✅ Industry: Data Scientist @ ORG_3495e757 Cap Supply Holdings
[2025-12-16T04:26:13.450Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_3495e757 Cap Supply Holdings in #💻・remote-usa
[2025-12-16T04:26:13.450Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T04:26:14.950Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_3495e757 Cap Supply Holdings (instance #1)
[2025-12-16T04:26:14.950Z] [BOT] 💾 BEFORE ARCHIVING: 226 jobs in database
[2025-12-16T04:26:14.950Z] [BOT] ✅ No jobs to archive (all 226 jobs within 7-day window)
[2025-12-16T04:26:14.957Z] [BOT] 💾 Saved posted_jobs.json: 226 active jobs
[2025-12-16T04:26:14.957Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:26:14.957Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_002a9a91
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T04:26:14.957Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-16T04:26:15.146Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_002a9a91 in #🤖・ai-jobs
[2025-12-16T04:26:15.146Z] [BOT] ✅ Industry: Data Analyst @ ORG_002a9a91
[2025-12-16T04:26:16.856Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_002a9a91 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T04:26:18.357Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_002a9a91 (instance #1)
[2025-12-16T04:26:18.358Z] [BOT] 💾 BEFORE ARCHIVING: 227 jobs in database
[2025-12-16T04:26:18.358Z] [BOT] ✅ No jobs to archive (all 227 jobs within 7-day window)
[2025-12-16T04:26:18.360Z] [BOT] 💾 Saved posted_jobs.json: 227 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:26:18.361Z] [BOT] 📍 [ROUTING] "Research Scientist in Large Language Model - Doubao-PhD Graduates-2025 Start" @ ORG_08c9a13c
[2025-12-16T04:26:18.361Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T04:26:18.561Z] [BOT] ✅ Created forum post: 🏢 Research Scientist in Large Language Model - Doubao-PhD Graduates-2025 Start @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-16T04:26:18.562Z] [BOT] ✅ Industry: Research Scientist in Large Language Model - Doubao-PhD Graduates-2025 Start @ ORG_08c9a13c
[2025-12-16T04:26:20.352Z] [BOT] ✅ Created forum post: 🏢 Research Scientist in Large Language Model - Doubao-PhD Graduates-2025 Start @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T04:26:21.854Z] [BOT] 💾 Marked as posted: Research Scientist in Large Language Model - Doubao-PhD Graduates-2025 Start @ ORG_08c9a13c (instance #1)
[2025-12-16T04:26:21.854Z] [BOT] 💾 BEFORE ARCHIVING: 228 jobs in database
[2025-12-16T04:26:21.854Z] [BOT] ✅ No jobs to archive (all 228 jobs within 7-day window)
[2025-12-16T04:26:21.857Z] [BOT] 💾 Saved posted_jobs.json: 228 active jobs
[2025-12-16T04:26:21.857Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:26:24.858Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-16T04:26:24.859Z] [BOT] 📍 [ROUTING] "Hybrid – Research Data Management Librarian - Downtown Library" @ ORG_41a6741e Virginia University
[2025-12-16T04:26:24.859Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:26:25.068Z] [BOT] ✅ Created forum post: 🏢 Hybrid – Research Data Management Librarian - Downtown Library @ ORG_41a6741e Virginia University in #💻・tech-jobs
  ✅ Industry: Hybrid – Research Data Management Librarian - Downtown Library @ ORG_41a6741e Virginia University
[2025-12-16T04:26:26.853Z] [BOT] ✅ Created forum post: 🏢 Hybrid – Research Data Management Librarian - Downtown Library @ ORG_41a6741e Virginia University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T04:26:28.353Z] [BOT] 💾 Marked as posted: Hybrid – Research Data Management Librarian - Downtown Library @ ORG_41a6741e Virginia University (instance #1)
[2025-12-16T04:26:28.353Z] [BOT] 💾 BEFORE ARCHIVING: 229 jobs in database
[2025-12-16T04:26:28.353Z] [BOT] ✅ No jobs to archive (all 229 jobs within 7-day window)
[2025-12-16T04:26:28.357Z] [BOT] 💾 Saved posted_jobs.json: 229 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:26:28.357Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_a11413b0
[2025-12-16T04:26:28.357Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:26:29.811Z] [BOT] ✅ Created forum post: 🔧 Associate Software Engineer @ ORG_a11413b0 in #💻・tech-jobs
[2025-12-16T04:26:29.812Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_a11413b0
[2025-12-16T04:26:31.709Z] [BOT] ✅ Created forum post: 🔧 Associate Software Engineer @ ORG_a11413b0 in #🚌・boston
[2025-12-16T04:26:31.709Z] [BOT] ✅ Location: 🚌・boston
[2025-12-16T04:26:33.211Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_a11413b0 (instance #1)
[2025-12-16T04:26:33.211Z] [BOT] 💾 BEFORE ARCHIVING: 230 jobs in database
[2025-12-16T04:26:33.211Z] [BOT] ✅ No jobs to archive (all 230 jobs within 7-day window)
[2025-12-16T04:26:33.214Z] [BOT] 💾 Saved posted_jobs.json: 230 active jobs
[2025-12-16T04:26:33.214Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:26:33.214Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer - Security - Starlink" @ ORG_afd623b1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:26:33.491Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Security - Starlink @ ORG_afd623b1 in #💻・tech-jobs
[2025-12-16T04:26:33.492Z] [BOT] ✅ Industry: Full Stack Software Engineer - Security - Starlink @ ORG_afd623b1
[2025-12-16T04:26:35.323Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Security - Starlink @ ORG_afd623b1 in #☀️・sunnyvale
[2025-12-16T04:26:35.324Z] [BOT] ✅ Location: ☀️・sunnyvale
[2025-12-16T04:26:36.824Z] [BOT] 💾 Marked as posted: Full Stack Software Engineer - Security - Starlink @ ORG_afd623b1 (instance #1)
[2025-12-16T04:26:36.824Z] [BOT] 💾 BEFORE ARCHIVING: 231 jobs in database
[2025-12-16T04:26:36.825Z] [BOT] ✅ No jobs to archive (all 231 jobs within 7-day window)
[2025-12-16T04:26:36.828Z] [BOT] 💾 Saved posted_jobs.json: 231 active jobs
[2025-12-16T04:26:36.828Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:26:36.829Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - 3D/4D Reconstruction/Generation/Relighting" @ ORG_08c9a13c
[2025-12-16T04:26:36.829Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:26:37.047Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - 3D/4D Reconstruction/Generation/Relighting @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Graduate Research Scientist - 3D/4D Reconstruction/Generation/Relighting @ ORG_08c9a13c
[2025-12-16T04:26:38.927Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - 3D/4D Reconstruction/Generation/Relighting @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T04:26:40.428Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - 3D/4D Reconstruction/Generation/Relighting @ ORG_08c9a13c (instance #1)
[2025-12-16T04:26:40.428Z] [BOT] 💾 BEFORE ARCHIVING: 232 jobs in database
[2025-12-16T04:26:40.429Z] [BOT] ✅ No jobs to archive (all 232 jobs within 7-day window)
[2025-12-16T04:26:40.432Z] [BOT] 💾 Saved posted_jobs.json: 232 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:26:40.433Z] [BOT] 📍 [ROUTING] "Graduate Engineer" @ ORG_65eedb45
[2025-12-16T04:26:40.433Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:26:40.902Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer @ ORG_65eedb45 in #💻・tech-jobs
  ✅ Industry: Graduate Engineer @ ORG_65eedb45
[2025-12-16T04:26:42.588Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer @ ORG_65eedb45 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-16T04:26:44.090Z] [BOT] 💾 Marked as posted: Graduate Engineer @ ORG_65eedb45 (instance #1)
[2025-12-16T04:26:44.090Z] [BOT] 💾 BEFORE ARCHIVING: 233 jobs in database
[2025-12-16T04:26:44.090Z] [BOT] ✅ No jobs to archive (all 233 jobs within 7-day window)
[2025-12-16T04:26:44.093Z] [BOT] 💾 Saved posted_jobs.json: 233 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:26:47.094Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-16T04:26:47.094Z] [BOT] 📍 [ROUTING] "Data Science - Analyst" @ ORG_9d38443e of Chicago
   Category: DATA-SCIENCE (matched: "data science")
[2025-12-16T04:26:47.094Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T04:26:47.380Z] [BOT] ✅ Created forum post: 🏢 Data Science - Analyst @ ORG_9d38443e of Chicago in #📈・JID_fb739488
  ✅ Industry: Data Science - Analyst @ ORG_9d38443e of Chicago
[2025-12-16T04:26:49.121Z] [BOT] ✅ Created forum post: 🏢 Data Science - Analyst @ ORG_9d38443e of Chicago in #🌆・chicago
[2025-12-16T04:26:49.121Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-16T04:26:50.622Z] [BOT] 💾 Marked as posted: Data Science - Analyst @ ORG_9d38443e of Chicago (instance #1)
[2025-12-16T04:26:50.623Z] [BOT] 💾 BEFORE ARCHIVING: 234 jobs in database
[2025-12-16T04:26:50.623Z] [BOT] ✅ No jobs to archive (all 234 jobs within 7-day window)
[2025-12-16T04:26:50.626Z] [BOT] 💾 Saved posted_jobs.json: 234 active jobs
[2025-12-16T04:26:50.626Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:26:50.626Z] [BOT] 📍 [ROUTING] "PhD Student" @ ORG_6adce842
[2025-12-16T04:26:50.626Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-16T04:26:50.868Z] [BOT] ✅ Created forum post: 🏢 PhD Student @ ORG_6adce842 in #📈・JID_fb739488
  ✅ Industry: PhD Student @ ORG_6adce842
[2025-12-16T04:26:52.662Z] [BOT] ✅ Created forum post: 🏢 PhD Student @ ORG_6adce842 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-16T04:26:54.163Z] [BOT] 💾 Marked as posted: PhD Student @ ORG_6adce842 (instance #1)
💾 BEFORE ARCHIVING: 235 jobs in database
[2025-12-16T04:26:54.164Z] [BOT] ✅ No jobs to archive (all 235 jobs within 7-day window)
[2025-12-16T04:26:54.167Z] [BOT] 💾 Saved posted_jobs.json: 235 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:26:57.168Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T04:26:57.168Z] [BOT] ⏭️  Skipping duplicate: JID_ec17fa96-atlanta_30360-data-scientist_wcjr-028517 (posted within 7 days)
⏭️  Skipping duplicate: JID_8f44508d (posted within 7 days)
[2025-12-16T04:26:57.169Z] [BOT] ⏭️  Skipping duplicate: JID_3d9d80cb (posted within 7 days)
⏭️  Skipping duplicate: JID_ba8eb395 (posted within 7 days)
[2025-12-16T04:26:57.169Z] [BOT] ⏭️  Skipping duplicate: JID_0f19144d (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_62c14f0e-detail (posted within 7 days)
[2025-12-16T04:26:57.169Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_540a906f-detail (posted within 7 days)
[2025-12-16T04:26:57.169Z] [BOT] ⏭️  Skipping duplicate: JID_2e32a8fc (posted within 7 days)
[2025-12-16T04:26:57.169Z] [BOT] ⏭️  Skipping duplicate: JID_81c3a1fa-analyst_jr31922-1 (posted within 7 days)
[2025-12-16T04:26:57.169Z] [BOT] ⏭️  Skipping duplicate: JID_1260679d (posted within 7 days)
[2025-12-16T04:26:57.174Z] [BOT] ✅ Loaded pending queue: 653 total (633 pending, 20 enriched, 0 posted)
[2025-12-16T04:26:57.184Z] [BOT] ✅ Saved pending queue: 653 total (633 pending, 10 enriched, 10 posted)
[2025-12-16T04:26:57.184Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T04:26:57.222Z] [BOT] 📂 Loaded 218 existing routing entries
[2025-12-16T04:26:57.260Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-16T04:26:57.260Z] [BOT] New entries: 10
   Total entries: 228
   Timestamp: 2025-12-16T04:26:57.259Z
[2025-12-16T04:26:57.260Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T04:26:57.261Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T04:26:59.273Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2794) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*