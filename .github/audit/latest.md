# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T05:40:09.514Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T05:39:19.791Z] ========================================
[2025-12-16T05:39:19.793Z] Discord Bot Execution Log
[2025-12-16T05:39:19.793Z] Environment: GitHub Actions
[2025-12-16T05:39:19.793Z] Node Version: v20.19.6
[2025-12-16T05:39:19.793Z] ========================================
[2025-12-16T05:39:19.793Z] Environment Variables Check:
[2025-12-16T05:39:19.793Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T05:39:19.793Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T05:39:19.793Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T05:39:19.794Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T05:39:19.794Z] 
Multi-Channel Configuration:
[2025-12-16T05:39:19.794Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T05:39:19.794Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T05:39:19.794Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T05:39:19.794Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T05:39:19.794Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T05:39:19.794Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T05:39:19.794Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T05:39:19.794Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T05:39:19.794Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T05:39:19.794Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T05:39:19.795Z] 
Data Files Check:
[2025-12-16T05:39:19.795Z] .github/data/new_jobs.json: ✅ Exists (10 items, 53059 bytes)
[2025-12-16T05:39:19.796Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 172620 bytes)
[2025-12-16T05:39:19.796Z] 
========================================
[2025-12-16T05:39:19.796Z] Starting Enhanced Discord Bot...
[2025-12-16T05:39:19.797Z] ========================================
[2025-12-16T05:39:20.311Z] [BOT] ✅ Loaded V2 database: 275 jobs
[2025-12-16T05:39:21.028Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T05:39:21.028Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T05:39:21.029Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T05:39:21.032Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T05:39:21.087Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T05:39:21.157Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T05:39:21.159Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T05:39:21.159Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T05:39:21.160Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T05:39:21.160Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T05:39:21.161Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T05:39:21.163Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-16T05:39:21.164Z] [BOT] 📍 [ROUTING] "Research Scientist – PhD New College Grad - Generative AI for Physical AI" @ ORG_0890f456
[2025-12-16T05:39:21.164Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T05:39:21.181Z] [BOT ERROR] (node:3419) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T05:39:21.363Z] [BOT] ✅ Created forum post: 🏢 Research Scientist – PhD New College Grad - Generative AI for Physical AI @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Research Scientist – PhD New College Grad - Generative AI for Physical AI @ ORG_0890f456
[2025-12-16T05:39:23.051Z] [BOT] ✅ Created forum post: 🏢 Research Scientist – PhD New College Grad - Generative AI for Physical AI @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T05:39:24.551Z] [BOT] 💾 Marked as posted: Research Scientist – PhD New College Grad - Generative AI for Physical AI @ ORG_0890f456 (instance #1)
[2025-12-16T05:39:24.552Z] [BOT] 💾 BEFORE ARCHIVING: 276 jobs in database
[2025-12-16T05:39:24.552Z] [BOT] ✅ No jobs to archive (all 276 jobs within 7-day window)
[2025-12-16T05:39:24.558Z] [BOT] 💾 Saved posted_jobs.json: 276 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:39:24.559Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow - Computational Biology / Machine Learning - Sterne-Weiler Lab" @ ORG_9554f9b4
   Category: AI (matched: "machine learning")
[2025-12-16T05:39:24.559Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T05:39:24.752Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - Computational Biology / Machine Learning - Sterne-Weiler Lab @ ORG_9554f9b4 in #🤖・ai-jobs
[2025-12-16T05:39:24.752Z] [BOT] ✅ Industry: Postdoctoral Fellow - Computational Biology / Machine Learning - Sterne-Weiler Lab @ ORG_9554f9b4
[2025-12-16T05:39:26.703Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - Computational Biology / Machine Learning - Sterne-Weiler Lab @ ORG_9554f9b4 in #🏙️・san-bruno
  ✅ Location: 🏙️・san-bruno
[2025-12-16T05:39:28.204Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow - Computational Biology / Machine Learning - Sterne-Weiler Lab @ ORG_9554f9b4 (instance #1)
[2025-12-16T05:39:28.204Z] [BOT] 💾 BEFORE ARCHIVING: 277 jobs in database
[2025-12-16T05:39:28.205Z] [BOT] ✅ No jobs to archive (all 277 jobs within 7-day window)
[2025-12-16T05:39:28.211Z] [BOT] 💾 Saved posted_jobs.json: 277 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:39:31.212Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2025-12-16T05:39:31.213Z] [BOT] 📍 [ROUTING] "On-Site Application Engineer - I-Park" @ ORG_e13d59a1 Group
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:39:31.612Z] [BOT] ✅ Created forum post: 🏢 On-Site Application Engineer - I-Park @ ORG_e13d59a1 Group in #💻・tech-jobs
  ✅ Industry: On-Site Application Engineer - I-Park @ ORG_e13d59a1 Group
[2025-12-16T05:39:33.683Z] [BOT] ✅ Created forum post: 🏢 On-Site Application Engineer - I-Park @ ORG_e13d59a1 Group in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T05:39:35.183Z] [BOT] 💾 Marked as posted: On-Site Application Engineer - I-Park @ ORG_e13d59a1 Group (instance #1)
[2025-12-16T05:39:35.183Z] [BOT] 💾 BEFORE ARCHIVING: 278 jobs in database
[2025-12-16T05:39:35.184Z] [BOT] ✅ No jobs to archive (all 278 jobs within 7-day window)
[2025-12-16T05:39:35.187Z] [BOT] 💾 Saved posted_jobs.json: 278 active jobs
[2025-12-16T05:39:35.187Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T05:39:35.187Z] [BOT] 📍 [ROUTING] "Quantitative Engineer Analyst" @ ORG_676c471b of America
[2025-12-16T05:39:35.188Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:39:35.576Z] [BOT] ✅ Created forum post: 🏢 Quantitative Engineer Analyst @ ORG_676c471b of America in #💻・tech-jobs
  ✅ Industry: Quantitative Engineer Analyst @ ORG_676c471b of America
[2025-12-16T05:39:37.411Z] [BOT] ✅ Created forum post: 🏢 Quantitative Engineer Analyst @ ORG_676c471b of America in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-16T05:39:38.912Z] [BOT] 💾 Marked as posted: Quantitative Engineer Analyst @ ORG_676c471b of America (instance #1)
[2025-12-16T05:39:38.912Z] [BOT] 💾 BEFORE ARCHIVING: 279 jobs in database
[2025-12-16T05:39:38.912Z] [BOT] ✅ No jobs to archive (all 279 jobs within 7-day window)
[2025-12-16T05:39:38.916Z] [BOT] 💾 Saved posted_jobs.json: 279 active jobs
[2025-12-16T05:39:38.916Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T05:39:38.916Z] [BOT] 📍 [ROUTING] "Software Developer" @ Auto-Owners Insurance
   Category: TECH (matched: "software")
[2025-12-16T05:39:38.916Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:39:39.107Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ Auto-Owners Insurance in #💻・tech-jobs
  ✅ Industry: Software Developer @ Auto-Owners Insurance
[2025-12-16T05:39:41.020Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ Auto-Owners Insurance in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T05:39:42.521Z] [BOT] 💾 Marked as posted: Software Developer @ Auto-Owners Insurance (instance #1)
[2025-12-16T05:39:42.522Z] [BOT] 💾 BEFORE ARCHIVING: 280 jobs in database
[2025-12-16T05:39:42.522Z] [BOT] ✅ No jobs to archive (all 280 jobs within 7-day window)
[2025-12-16T05:39:42.526Z] [BOT] 💾 Saved posted_jobs.json: 280 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:39:42.526Z] [BOT] 📍 [ROUTING] "Software Engineer/Principal Software Engineer - Aht" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:39:42.822Z] [BOT] ✅ Created forum post: 🏢 Software Engineer/Principal Software Engineer - Aht @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2025-12-16T05:39:42.823Z] [BOT] ✅ Industry: Software Engineer/Principal Software Engineer - Aht @ ORG_f3f2248d Grumman
[2025-12-16T05:39:44.561Z] [BOT] ✅ Created forum post: 🏢 Software Engineer/Principal Software Engineer - Aht @ ORG_f3f2248d Grumman in #💻・remote-usa
[2025-12-16T05:39:44.562Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T05:39:46.063Z] [BOT] 💾 Marked as posted: Software Engineer/Principal Software Engineer - Aht @ ORG_f3f2248d Grumman (instance #1)
[2025-12-16T05:39:46.063Z] [BOT] 💾 BEFORE ARCHIVING: 281 jobs in database
[2025-12-16T05:39:46.064Z] [BOT] ✅ No jobs to archive (all 281 jobs within 7-day window)
[2025-12-16T05:39:46.067Z] [BOT] 💾 Saved posted_jobs.json: 281 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:39:46.067Z] [BOT] 📍 [ROUTING] "Application Engineer 1" @ ORG_a0a5b7ba Rexnord
[2025-12-16T05:39:46.067Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:39:46.259Z] [BOT] ✅ Created forum post: 🏢 Application Engineer 1 @ ORG_a0a5b7ba Rexnord in #💻・tech-jobs
[2025-12-16T05:39:46.259Z] [BOT] ✅ Industry: Application Engineer 1 @ ORG_a0a5b7ba Rexnord
[2025-12-16T05:39:47.978Z] [BOT] ✅ Created forum post: 🏢 Application Engineer 1 @ ORG_a0a5b7ba Rexnord in #💻・remote-usa
[2025-12-16T05:39:47.978Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T05:39:49.479Z] [BOT] 💾 Marked as posted: Application Engineer 1 @ ORG_a0a5b7ba Rexnord (instance #1)
[2025-12-16T05:39:49.479Z] [BOT] 💾 BEFORE ARCHIVING: 282 jobs in database
[2025-12-16T05:39:49.480Z] [BOT] ✅ No jobs to archive (all 282 jobs within 7-day window)
[2025-12-16T05:39:49.483Z] [BOT] 💾 Saved posted_jobs.json: 282 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:39:49.484Z] [BOT] 📍 [ROUTING] "Software Engineer - .NET/React" @ ORG_c08daf0b Tool
[2025-12-16T05:39:49.484Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:39:49.818Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - .NET/React @ ORG_c08daf0b Tool in #💻・tech-jobs
[2025-12-16T05:39:49.818Z] [BOT] ✅ Industry: Software Engineer - .NET/React @ ORG_c08daf0b Tool
[2025-12-16T05:39:51.550Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - .NET/React @ ORG_c08daf0b Tool in #💻・remote-usa
[2025-12-16T05:39:51.551Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T05:39:53.051Z] [BOT] 💾 Marked as posted: Software Engineer - .NET/React @ ORG_c08daf0b Tool (instance #1)
[2025-12-16T05:39:53.051Z] [BOT] 💾 BEFORE ARCHIVING: 283 jobs in database
[2025-12-16T05:39:53.052Z] [BOT] ✅ No jobs to archive (all 283 jobs within 7-day window)
[2025-12-16T05:39:53.056Z] [BOT] 💾 Saved posted_jobs.json: 283 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:39:53.056Z] [BOT] 📍 [ROUTING] "Engineer 2 - Product" @ ORG_230fe79b Technology
[2025-12-16T05:39:53.056Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:39:53.295Z] [BOT] ✅ Created forum post: 🏢 Engineer 2 - Product @ ORG_230fe79b Technology in #💻・tech-jobs
  ✅ Industry: Engineer 2 - Product @ ORG_230fe79b Technology
[2025-12-16T05:39:55.096Z] [BOT] ✅ Created forum post: 🏢 Engineer 2 - Product @ ORG_230fe79b Technology in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T05:39:56.597Z] [BOT] 💾 Marked as posted: Engineer 2 - Product @ ORG_230fe79b Technology (instance #1)
[2025-12-16T05:39:56.597Z] [BOT] 💾 BEFORE ARCHIVING: 284 jobs in database
[2025-12-16T05:39:56.597Z] [BOT] ✅ No jobs to archive (all 284 jobs within 7-day window)
[2025-12-16T05:39:56.601Z] [BOT] 💾 Saved posted_jobs.json: 284 active jobs
[2025-12-16T05:39:56.601Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T05:39:59.602Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-16T05:39:59.602Z] [BOT] 📍 [ROUTING] "Business Intelligence & Systems Analyst" @ ORG_13e70b27
[2025-12-16T05:39:59.602Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T05:39:59.851Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence & Systems Analyst @ ORG_13e70b27 in #📈・JID_fb739488
  ✅ Industry: Business Intelligence & Systems Analyst @ ORG_13e70b27
[2025-12-16T05:40:01.612Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence & Systems Analyst @ ORG_13e70b27 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T05:40:03.113Z] [BOT] 💾 Marked as posted: Business Intelligence & Systems Analyst @ ORG_13e70b27 (instance #1)
[2025-12-16T05:40:03.114Z] [BOT] 💾 BEFORE ARCHIVING: 285 jobs in database
[2025-12-16T05:40:03.114Z] [BOT] ✅ No jobs to archive (all 285 jobs within 7-day window)
[2025-12-16T05:40:03.117Z] [BOT] 💾 Saved posted_jobs.json: 285 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:40:06.118Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T05:40:06.118Z] [BOT] ⏭️  Skipping duplicate: JID_41f79ce5-2025_jr2005875 (posted within 7 days)
[2025-12-16T05:40:06.118Z] [BOT] ⏭️  Skipping duplicate: JID_a825cb18-park_r_00091560 (posted within 7 days)
[2025-12-16T05:40:06.119Z] [BOT] ⏭️  Skipping duplicate: JID_6f712ee7-analyst_25043236 (posted within 7 days)
⏭️  Skipping duplicate: JID_e95d7073-developer_r_1017 (posted within 7 days)
[2025-12-16T05:40:06.119Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_01106abd-_r10211293 (posted within 7 days)
[2025-12-16T05:40:06.119Z] [BOT] ⏭️  Skipping duplicate: JID_2304cdc1-i_r25_03408 (posted within 7 days)
[2025-12-16T05:40:06.119Z] [BOT] ⏭️  Skipping duplicate: JID_fb804feb-lab_202505-110867 (posted within 7 days)
[2025-12-16T05:40:06.119Z] [BOT] ⏭️  Skipping duplicate: JID_d78b920e-analyst_r00337316 (posted within 7 days)
[2025-12-16T05:40:06.119Z] [BOT] ⏭️  Skipping duplicate: JID_19242784-_r68242 (posted within 7 days)
[2025-12-16T05:40:06.119Z] [BOT] ⏭️  Skipping duplicate: JID_4a793790-product_r1840-25 (posted within 7 days)
[2025-12-16T05:40:06.124Z] [BOT] ✅ Loaded pending queue: 603 total (583 pending, 20 enriched, 0 posted)
[2025-12-16T05:40:06.133Z] [BOT] ✅ Saved pending queue: 603 total (583 pending, 10 enriched, 10 posted)
[2025-12-16T05:40:06.133Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T05:40:06.170Z] [BOT] 📂 Loaded 268 existing routing entries
[2025-12-16T05:40:06.209Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 278
[2025-12-16T05:40:06.209Z] [BOT] Timestamp: 2025-12-16T05:40:06.207Z
[2025-12-16T05:40:06.209Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T05:40:08.221Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3419) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*