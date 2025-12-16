# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T05:25:07.560Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T05:24:09.913Z] ========================================
[2025-12-16T05:24:09.915Z] Discord Bot Execution Log
[2025-12-16T05:24:09.915Z] Environment: GitHub Actions
[2025-12-16T05:24:09.915Z] Node Version: v20.19.6
[2025-12-16T05:24:09.915Z] ========================================
[2025-12-16T05:24:09.915Z] Environment Variables Check:
[2025-12-16T05:24:09.915Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T05:24:09.915Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T05:24:09.915Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T05:24:09.916Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T05:24:09.916Z] 
Multi-Channel Configuration:
[2025-12-16T05:24:09.916Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T05:24:09.916Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T05:24:09.916Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T05:24:09.916Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T05:24:09.916Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T05:24:09.916Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T05:24:09.916Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T05:24:09.916Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T05:24:09.916Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T05:24:09.916Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T05:24:09.916Z] 
Data Files Check:
[2025-12-16T05:24:09.917Z] .github/data/new_jobs.json: ✅ Exists (10 items, 48446 bytes)
[2025-12-16T05:24:09.918Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 166315 bytes)
[2025-12-16T05:24:09.918Z] 
========================================
[2025-12-16T05:24:09.918Z] Starting Enhanced Discord Bot...
[2025-12-16T05:24:09.918Z] ========================================
[2025-12-16T05:24:10.417Z] [BOT] ✅ Loaded V2 database: 265 jobs
[2025-12-16T05:24:17.061Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T05:24:17.062Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T05:24:17.062Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T05:24:17.062Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T05:24:17.119Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T05:24:17.184Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T05:24:17.186Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T05:24:17.186Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T05:24:17.186Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T05:24:17.187Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T05:24:17.187Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T05:24:17.192Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2025-12-16T05:24:17.192Z] [BOT] 📍 [ROUTING] "Associate Project Engineer - Acton MA" @ ORG_7a38ef37 Corporation
[2025-12-16T05:24:17.193Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:24:17.212Z] [BOT ERROR] (node:3263) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T05:24:17.396Z] [BOT] ✅ Created forum post: 🏢 Associate Project Engineer - Acton MA @ ORG_7a38ef37 Corporation in #💻・tech-jobs
[2025-12-16T05:24:17.396Z] [BOT] ✅ Industry: Associate Project Engineer - Acton MA @ ORG_7a38ef37 Corporation
[2025-12-16T05:24:19.153Z] [BOT] ✅ Created forum post: 🏢 Associate Project Engineer - Acton MA @ ORG_7a38ef37 Corporation in #🚌・boston
[2025-12-16T05:24:19.153Z] [BOT] ✅ Location: 🚌・boston
[2025-12-16T05:24:20.654Z] [BOT] 💾 Marked as posted: Associate Project Engineer - Acton MA @ ORG_7a38ef37 Corporation (instance #1)
[2025-12-16T05:24:20.654Z] [BOT] 💾 BEFORE ARCHIVING: 266 jobs in database
[2025-12-16T05:24:20.655Z] [BOT] ✅ No jobs to archive (all 266 jobs within 7-day window)
[2025-12-16T05:24:20.661Z] [BOT] 💾 Saved posted_jobs.json: 266 active jobs
[2025-12-16T05:24:20.661Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T05:24:20.662Z] [BOT] 📍 [ROUTING] "Junior Web Developer" @ ORG_726232d3
[2025-12-16T05:24:20.662Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:24:20.845Z] [BOT] ✅ Created forum post: 🏢 Junior Web Developer @ ORG_726232d3 in #💻・tech-jobs
[2025-12-16T05:24:20.845Z] [BOT] ✅ Industry: Junior Web Developer @ ORG_726232d3
[2025-12-16T05:24:22.695Z] [BOT] ✅ Created forum post: 🏢 Junior Web Developer @ ORG_726232d3 in #🗽・new-york
[2025-12-16T05:24:22.695Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-16T05:24:24.196Z] [BOT] 💾 Marked as posted: Junior Web Developer @ ORG_726232d3 (instance #1)
[2025-12-16T05:24:24.196Z] [BOT] 💾 BEFORE ARCHIVING: 267 jobs in database
[2025-12-16T05:24:24.197Z] [BOT] ✅ No jobs to archive (all 267 jobs within 7-day window)
[2025-12-16T05:24:24.199Z] [BOT] 💾 Saved posted_jobs.json: 267 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:24:24.200Z] [BOT] 📍 [ROUTING] "React Developer" @ ORG_726232d3
[2025-12-16T05:24:24.200Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:24:24.444Z] [BOT] ✅ Created forum post: 🏢 React Developer @ ORG_726232d3 in #💻・tech-jobs
[2025-12-16T05:24:24.444Z] [BOT] ✅ Industry: React Developer @ ORG_726232d3
[2025-12-16T05:24:26.146Z] [BOT] ✅ Created forum post: 🏢 React Developer @ ORG_726232d3 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-16T05:24:27.647Z] [BOT] 💾 Marked as posted: React Developer @ ORG_726232d3 (instance #1)
[2025-12-16T05:24:27.647Z] [BOT] 💾 BEFORE ARCHIVING: 268 jobs in database
[2025-12-16T05:24:27.647Z] [BOT] ✅ No jobs to archive (all 268 jobs within 7-day window)
[2025-12-16T05:24:27.650Z] [BOT] 💾 Saved posted_jobs.json: 268 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:24:27.651Z] [BOT] 📍 [ROUTING] "Junior React Developer" @ ORG_726232d3
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:24:27.866Z] [BOT] ✅ Created forum post: 🏢 Junior React Developer @ ORG_726232d3 in #💻・tech-jobs
[2025-12-16T05:24:27.867Z] [BOT] ✅ Industry: Junior React Developer @ ORG_726232d3
[2025-12-16T05:24:29.781Z] [BOT] ✅ Created forum post: 🏢 Junior React Developer @ ORG_726232d3 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-16T05:24:31.282Z] [BOT] 💾 Marked as posted: Junior React Developer @ ORG_726232d3 (instance #1)
[2025-12-16T05:24:31.282Z] [BOT] 💾 BEFORE ARCHIVING: 269 jobs in database
[2025-12-16T05:24:31.282Z] [BOT] ✅ No jobs to archive (all 269 jobs within 7-day window)
[2025-12-16T05:24:31.285Z] [BOT] 💾 Saved posted_jobs.json: 269 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:24:31.286Z] [BOT] 📍 [ROUTING] "Associate Engineer - Podcasts" @ ORG_b344d80e Atlantic
[2025-12-16T05:24:31.286Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:24:31.496Z] [BOT] ✅ Created forum post: 🏢 Associate Engineer - Podcasts @ ORG_b344d80e Atlantic in #💻・tech-jobs
  ✅ Industry: Associate Engineer - Podcasts @ ORG_b344d80e Atlantic
[2025-12-16T05:24:33.213Z] [BOT] ✅ Created forum post: 🏢 Associate Engineer - Podcasts @ ORG_b344d80e Atlantic in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T05:24:34.714Z] [BOT] 💾 Marked as posted: Associate Engineer - Podcasts @ ORG_b344d80e Atlantic (instance #1)
[2025-12-16T05:24:34.714Z] [BOT] 💾 BEFORE ARCHIVING: 270 jobs in database
[2025-12-16T05:24:34.714Z] [BOT] ✅ No jobs to archive (all 270 jobs within 7-day window)
[2025-12-16T05:24:34.717Z] [BOT] 💾 Saved posted_jobs.json: 270 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:24:34.718Z] [BOT] 📍 [ROUTING] "Post-Doctoral Fellow" @ ORG_f19d0512 Polytechnic Institute
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:24:34.942Z] [BOT] ✅ Created forum post: 🏢 Post-Doctoral Fellow @ ORG_f19d0512 Polytechnic Institute in #💻・tech-jobs
[2025-12-16T05:24:34.942Z] [BOT] ✅ Industry: Post-Doctoral Fellow @ ORG_f19d0512 Polytechnic Institute
[2025-12-16T05:24:36.665Z] [BOT] ✅ Created forum post: 🏢 Post-Doctoral Fellow @ ORG_f19d0512 Polytechnic Institute in #🚌・boston
[2025-12-16T05:24:36.665Z] [BOT] ✅ Location: 🚌・boston
[2025-12-16T05:24:38.167Z] [BOT] 💾 Marked as posted: Post-Doctoral Fellow @ ORG_f19d0512 Polytechnic Institute (instance #1)
[2025-12-16T05:24:38.167Z] [BOT] 💾 BEFORE ARCHIVING: 271 jobs in database
[2025-12-16T05:24:38.167Z] [BOT] ✅ No jobs to archive (all 271 jobs within 7-day window)
[2025-12-16T05:24:38.170Z] [BOT] 💾 Saved posted_jobs.json: 271 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:24:38.170Z] [BOT] 📍 [ROUTING] "Software Developer - TS/SCI Polygraph" @ ORG_c910d474 Dynamics Information Technology
[2025-12-16T05:24:38.170Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:24:38.403Z] [BOT] ✅ Created forum post: 🏢 Software Developer - TS/SCI Polygraph @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
  ✅ Industry: Software Developer - TS/SCI Polygraph @ ORG_c910d474 Dynamics Information Technology
[2025-12-16T05:24:40.128Z] [BOT] ✅ Created forum post: 🏢 Software Developer - TS/SCI Polygraph @ ORG_c910d474 Dynamics Information Technology in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T05:24:41.628Z] [BOT] 💾 Marked as posted: Software Developer - TS/SCI Polygraph @ ORG_c910d474 Dynamics Information Technology (instance #1)
[2025-12-16T05:24:41.629Z] [BOT] 💾 BEFORE ARCHIVING: 272 jobs in database
[2025-12-16T05:24:41.629Z] [BOT] ✅ No jobs to archive (all 272 jobs within 7-day window)
[2025-12-16T05:24:41.632Z] [BOT] 💾 Saved posted_jobs.json: 272 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:24:44.632Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-16T05:24:44.633Z] [BOT] 📍 [ROUTING] "Engineer 1 - Automation and Custom Applications" @ ORG_f8b04bf3
[2025-12-16T05:24:44.633Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T05:24:44.964Z] [BOT] ✅ Created forum post: 🏢 Engineer 1 - Automation and Custom Applications @ ORG_f8b04bf3 in #🤖・ai-jobs
  ✅ Industry: Engineer 1 - Automation and Custom Applications @ ORG_f8b04bf3
[2025-12-16T05:24:46.683Z] [BOT] ✅ Created forum post: 🏢 Engineer 1 - Automation and Custom Applications @ ORG_f8b04bf3 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-16T05:24:48.184Z] [BOT] 💾 Marked as posted: Engineer 1 - Automation and Custom Applications @ ORG_f8b04bf3 (instance #1)
[2025-12-16T05:24:48.184Z] [BOT] 💾 BEFORE ARCHIVING: 273 jobs in database
[2025-12-16T05:24:48.184Z] [BOT] ✅ No jobs to archive (all 273 jobs within 7-day window)
[2025-12-16T05:24:48.188Z] [BOT] 💾 Saved posted_jobs.json: 273 active jobs
[2025-12-16T05:24:48.188Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T05:24:51.189Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-16T05:24:51.189Z] [BOT] 📍 [ROUTING] "Special Executions Group Analyst / Data Analytics Analyst" @ ORG_e97ba691 Technology Partners
[2025-12-16T05:24:51.189Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T05:24:51.500Z] [BOT] ✅ Created forum post: 🏢 Special Executions Group Analyst / Data Analytics Analyst @ ORG_e97ba691 Technology Partners in #📈・JID_fb739488
  ✅ Industry: Special Executions Group Analyst / Data Analytics Analyst @ ORG_e97ba691 Technology Partners
[2025-12-16T05:24:53.302Z] [BOT] ✅ Created forum post: 🏢 Special Executions Group Analyst / Data Analytics Analyst @ ORG_e97ba691 Technology Partners in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T05:24:54.803Z] [BOT] 💾 Marked as posted: Special Executions Group Analyst / Data Analytics Analyst @ ORG_e97ba691 Technology Partners (instance #1)
[2025-12-16T05:24:54.803Z] [BOT] 💾 BEFORE ARCHIVING: 274 jobs in database
[2025-12-16T05:24:54.803Z] [BOT] ✅ No jobs to archive (all 274 jobs within 7-day window)
[2025-12-16T05:24:54.807Z] [BOT] 💾 Saved posted_jobs.json: 274 active jobs
[2025-12-16T05:24:54.807Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T05:24:57.807Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2025-12-16T05:24:57.807Z] [BOT] 📍 [ROUTING] "Junior Image Scientist" @ ORG_fee50aac
[2025-12-16T05:24:57.808Z] [BOT] Category: SUPPLY-CHAIN (matched: "logistics")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2025-12-16T05:24:57.998Z] [BOT] ✅ Created forum post: 🏢 Junior Image Scientist @ ORG_fee50aac in #🏗️・JID_b7c6683f
[2025-12-16T05:24:57.998Z] [BOT] ✅ Industry: Junior Image Scientist @ ORG_fee50aac
[2025-12-16T05:24:59.761Z] [BOT] ✅ Created forum post: 🏢 Junior Image Scientist @ ORG_fee50aac in #💻・remote-usa
[2025-12-16T05:24:59.761Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T05:25:01.262Z] [BOT] 💾 Marked as posted: Junior Image Scientist @ ORG_fee50aac (instance #1)
[2025-12-16T05:25:01.262Z] [BOT] 💾 BEFORE ARCHIVING: 275 jobs in database
[2025-12-16T05:25:01.262Z] [BOT] ✅ No jobs to archive (all 275 jobs within 7-day window)
[2025-12-16T05:25:01.266Z] [BOT] 💾 Saved posted_jobs.json: 275 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:25:04.266Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T05:25:04.267Z] [BOT] ⏭️  Skipping duplicate: JID_87f101c2-_req-2025-13447 (posted within 7 days)
[2025-12-16T05:25:04.267Z] [BOT] ⏭️  Skipping duplicate: JID_9738cbdc-applications_r-01139 (posted within 7 days)
[2025-12-16T05:25:04.267Z] [BOT] ⏭️  Skipping duplicate: JID_f199842a (posted within 7 days)
⏭️  Skipping duplicate: JID_16958348 (posted within 7 days)
[2025-12-16T05:25:04.267Z] [BOT] ⏭️  Skipping duplicate: JID_6de9817d (posted within 7 days)
⏭️  Skipping duplicate: JID_7a9ea97e (posted within 7 days)
[2025-12-16T05:25:04.267Z] [BOT] ⏭️  Skipping duplicate: JID_555d3ad9-podcasts_r618-1 (posted within 7 days)
[2025-12-16T05:25:04.267Z] [BOT] ⏭️  Skipping duplicate: JID_681daa8d-wpi_external_career_site-JID_7585a7ee-fellow_r0003237 (posted within 7 days)
[2025-12-16T05:25:04.267Z] [BOT] ⏭️  Skipping duplicate: JID_3b6de877-kbr_careers-JID_0d3a11ce-scientist_r2098927 (posted within 7 days)
[2025-12-16T05:25:04.267Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_4fdd0ddb-polygraph_rq207428 (posted within 7 days)
[2025-12-16T05:25:04.271Z] [BOT] ✅ Loaded pending queue: 613 total (593 pending, 20 enriched, 0 posted)
[2025-12-16T05:25:04.281Z] [BOT] ✅ Saved pending queue: 613 total (593 pending, 10 enriched, 10 posted)
[2025-12-16T05:25:04.281Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T05:25:04.319Z] [BOT] 📂 Loaded 258 existing routing entries
[2025-12-16T05:25:04.356Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 268
[2025-12-16T05:25:04.357Z] [BOT] Timestamp: 2025-12-16T05:25:04.355Z
[2025-12-16T05:25:04.357Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T05:25:04.357Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T05:25:06.368Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3263) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*