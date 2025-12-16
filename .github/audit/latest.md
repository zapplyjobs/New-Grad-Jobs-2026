# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T07:50:01.570Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T07:49:18.246Z] ========================================
[2025-12-16T07:49:18.248Z] Discord Bot Execution Log
[2025-12-16T07:49:18.248Z] Environment: GitHub Actions
[2025-12-16T07:49:18.248Z] Node Version: v20.19.6
[2025-12-16T07:49:18.248Z] ========================================
[2025-12-16T07:49:18.248Z] Environment Variables Check:
[2025-12-16T07:49:18.249Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T07:49:18.249Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T07:49:18.249Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T07:49:18.249Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T07:49:18.249Z] 
Multi-Channel Configuration:
[2025-12-16T07:49:18.249Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T07:49:18.249Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T07:49:18.249Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T07:49:18.249Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T07:49:18.249Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T07:49:18.249Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T07:49:18.249Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T07:49:18.250Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T07:49:18.250Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T07:49:18.250Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T07:49:18.250Z] 
Data Files Check:
[2025-12-16T07:49:18.250Z] .github/data/new_jobs.json: ✅ Exists (10 items, 8794 bytes)
[2025-12-16T07:49:18.252Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 227680 bytes)
[2025-12-16T07:49:18.252Z] 
========================================
[2025-12-16T07:49:18.252Z] Starting Enhanced Discord Bot...
[2025-12-16T07:49:18.252Z] ========================================
[2025-12-16T07:49:18.778Z] [BOT] ✅ Loaded V2 database: 365 jobs
[2025-12-16T07:49:19.250Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T07:49:19.251Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T07:49:19.251Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T07:49:19.251Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T07:49:19.305Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T07:49:19.374Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T07:49:19.376Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T07:49:19.376Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T07:49:19.377Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T07:49:19.377Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-16T07:49:19.377Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T07:49:19.381Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-16T07:49:19.382Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Multiple Teams" @ ORG_08c9a13c
[2025-12-16T07:49:19.382Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:49:19.399Z] [BOT ERROR] (node:2311) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T07:49:19.576Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Multiple Teams @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - Multiple Teams @ ORG_08c9a13c
[2025-12-16T07:49:21.216Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Multiple Teams @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:49:22.717Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Multiple Teams @ ORG_08c9a13c (instance #1)
[2025-12-16T07:49:22.717Z] [BOT] 💾 BEFORE ARCHIVING: 366 jobs in database
[2025-12-16T07:49:22.718Z] [BOT] ✅ No jobs to archive (all 366 jobs within 7-day window)
[2025-12-16T07:49:22.725Z] [BOT] 💾 Saved posted_jobs.json: 366 active jobs
[2025-12-16T07:49:22.725Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:49:22.726Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics" @ ORG_08c9a13c
[2025-12-16T07:49:22.726Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:49:22.972Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-16T07:49:22.972Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c
[2025-12-16T07:49:24.613Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c in #🌧️・seattle
[2025-12-16T07:49:24.613Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-16T07:49:26.114Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c (instance #1)
[2025-12-16T07:49:26.114Z] [BOT] 💾 BEFORE ARCHIVING: 367 jobs in database
[2025-12-16T07:49:26.115Z] [BOT] ✅ No jobs to archive (all 367 jobs within 7-day window)
[2025-12-16T07:49:26.118Z] [BOT] 💾 Saved posted_jobs.json: 367 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:49:26.119Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer – Graduate - CV/NLP/Multimodal/LLM - E-Commerce Governance" @ ORG_1bb6fcfb
[2025-12-16T07:49:26.119Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:49:26.264Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer – Graduate - CV/NLP/Multimodal/LLM - E-Commerce Governance @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer – Graduate - CV/NLP/Multimodal/LLM - E-Commerce Governance @ ORG_1bb6fcfb
[2025-12-16T07:49:28.117Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer – Graduate - CV/NLP/Multimodal/LLM - E-Commerce Governance @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T07:49:29.618Z] [BOT] 💾 Marked as posted: Machine Learning Engineer – Graduate - CV/NLP/Multimodal/LLM - E-Commerce Governance @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:49:29.618Z] [BOT] 💾 BEFORE ARCHIVING: 368 jobs in database
[2025-12-16T07:49:29.618Z] [BOT] ✅ No jobs to archive (all 368 jobs within 7-day window)
[2025-12-16T07:49:29.624Z] [BOT] 💾 Saved posted_jobs.json: 368 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:49:32.625Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-16T07:49:32.626Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Ads Infrastructure" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:49:32.848Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Ads Infrastructure @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-16T07:49:32.848Z] [BOT] ✅ Industry: Software Engineer Graduate - Ads Infrastructure @ ORG_1bb6fcfb
[2025-12-16T07:49:34.573Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Ads Infrastructure @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:49:36.074Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Ads Infrastructure @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:49:36.074Z] [BOT] 💾 BEFORE ARCHIVING: 369 jobs in database
[2025-12-16T07:49:36.074Z] [BOT] ✅ No jobs to archive (all 369 jobs within 7-day window)
[2025-12-16T07:49:36.079Z] [BOT] 💾 Saved posted_jobs.json: 369 active jobs
[2025-12-16T07:49:36.079Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:49:36.079Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:49:36.079Z] [BOT] 💾 BEFORE ARCHIVING: 370 jobs in database
[2025-12-16T07:49:36.080Z] [BOT] ✅ No jobs to archive (all 370 jobs within 7-day window)
[2025-12-16T07:49:36.083Z] [BOT] 💾 Saved posted_jobs.json: 370 active jobs
[2025-12-16T07:49:36.083Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:49:36.085Z] [BOT] 📍 [ROUTING] "Graduate Algorithm Engineer - Intelligent Multimedia Streaming Strategy - Bachelor of Science/Master of Science" @ ORG_1bb6fcfb
[2025-12-16T07:49:36.085Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:49:36.390Z] [BOT] ✅ Created forum post: 🏢 Graduate Algorithm Engineer - Intelligent Multimedia Streaming Strategy - Bachelor of Science/Mas in #💻・tech-jobs
[2025-12-16T07:49:36.390Z] [BOT] ✅ Industry: Graduate Algorithm Engineer - Intelligent Multimedia Streaming Strategy - Bachelor of Science/Master of Science @ ORG_1bb6fcfb
[2025-12-16T07:49:38.018Z] [BOT] ✅ Created forum post: 🏢 Graduate Algorithm Engineer - Intelligent Multimedia Streaming Strategy - Bachelor of Science/Mas in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:49:39.519Z] [BOT] 💾 Marked as posted: Graduate Algorithm Engineer - Intelligent Multimedia Streaming Strategy - Bachelor of Science/Master of Science @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:49:39.519Z] [BOT] 💾 BEFORE ARCHIVING: 371 jobs in database
[2025-12-16T07:49:39.519Z] [BOT] ✅ No jobs to archive (all 371 jobs within 7-day window)
[2025-12-16T07:49:39.524Z] [BOT] 💾 Saved posted_jobs.json: 371 active jobs
[2025-12-16T07:49:39.524Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:49:39.525Z] [BOT] 📍 [ROUTING] "Analyst – Media & Sports" @ ORG_af48338f
[2025-12-16T07:49:39.525Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:49:39.653Z] [BOT] ✅ Created forum post: 🏢 Analyst – Media & Sports @ ORG_af48338f in #💻・tech-jobs
[2025-12-16T07:49:39.653Z] [BOT] ✅ Industry: Analyst – Media & Sports @ ORG_af48338f
[2025-12-16T07:49:41.323Z] [BOT] ✅ Created forum post: 🏢 Analyst – Media & Sports @ ORG_af48338f in #🌉・san-francisco
[2025-12-16T07:49:41.324Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T07:49:42.824Z] [BOT] 💾 Marked as posted: Analyst – Media & Sports @ ORG_af48338f (instance #1)
[2025-12-16T07:49:42.824Z] [BOT] 💾 BEFORE ARCHIVING: 372 jobs in database
[2025-12-16T07:49:42.824Z] [BOT] ✅ No jobs to archive (all 372 jobs within 7-day window)
[2025-12-16T07:49:42.829Z] [BOT] 💾 Saved posted_jobs.json: 372 active jobs
[2025-12-16T07:49:42.829Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:49:42.829Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Recommendation Infrastructure" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:49:43.014Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Recommendation Infrastructure @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-16T07:49:43.014Z] [BOT] ✅ Industry: Graduate Software Engineer - Recommendation Infrastructure @ ORG_1bb6fcfb
[2025-12-16T07:49:44.769Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Recommendation Infrastructure @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-16T07:49:44.769Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T07:49:46.269Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Recommendation Infrastructure @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:49:46.269Z] [BOT] 💾 BEFORE ARCHIVING: 373 jobs in database
[2025-12-16T07:49:46.270Z] [BOT] ✅ No jobs to archive (all 373 jobs within 7-day window)
[2025-12-16T07:49:46.274Z] [BOT] 💾 Saved posted_jobs.json: 373 active jobs
[2025-12-16T07:49:46.274Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:49:46.274Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Global CRM - 2026 Start','BS/MS" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:49:46.400Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Global CRM - 2026 Start','BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-16T07:49:46.400Z] [BOT] ✅ Industry: Software Engineer Graduate - Global CRM - 2026 Start','BS/MS @ ORG_1bb6fcfb
[2025-12-16T07:49:48.048Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Global CRM - 2026 Start','BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-16T07:49:48.049Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T07:49:49.549Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Global CRM - 2026 Start','BS/MS @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:49:49.549Z] [BOT] 💾 BEFORE ARCHIVING: 374 jobs in database
[2025-12-16T07:49:49.549Z] [BOT] ✅ No jobs to archive (all 374 jobs within 7-day window)
[2025-12-16T07:49:49.554Z] [BOT] 💾 Saved posted_jobs.json: 374 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:49:52.554Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-16T07:49:52.555Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_9b9b6e44
   Category: DATA-SCIENCE (matched: "data science")
[2025-12-16T07:49:52.555Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T07:49:52.685Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_9b9b6e44 in #📈・JID_fb739488
[2025-12-16T07:49:52.685Z] [BOT] ✅ Industry: Data Scientist @ ORG_9b9b6e44
[2025-12-16T07:49:54.308Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_9b9b6e44 in #💻・remote-usa
[2025-12-16T07:49:54.308Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T07:49:55.809Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_9b9b6e44 (instance #1)
[2025-12-16T07:49:55.809Z] [BOT] 💾 BEFORE ARCHIVING: 375 jobs in database
[2025-12-16T07:49:55.810Z] [BOT] ✅ No jobs to archive (all 375 jobs within 7-day window)
[2025-12-16T07:49:55.815Z] [BOT] 💾 Saved posted_jobs.json: 375 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:49:58.816Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-16T07:49:58.816Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_e4fe2110-detail (posted within 7 days)
[2025-12-16T07:49:58.816Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_9f3fa3cd-detail (posted within 7 days)
[2025-12-16T07:49:58.816Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_05de1f41 (posted within 7 days)
[2025-12-16T07:49:58.816Z] [BOT] ⏭️  Skipping duplicate: JID_1dc6c858 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_93ff76fa (posted within 7 days)
[2025-12-16T07:49:58.816Z] [BOT] ⏭️  Skipping duplicate: JID_83037c20 (posted within 7 days)
[2025-12-16T07:49:58.817Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_4c00abbb (posted within 7 days)
[2025-12-16T07:49:58.817Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_6c5a2bc5 (posted within 7 days)
[2025-12-16T07:49:58.817Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_1ed64dba (posted within 7 days)
[2025-12-16T07:49:58.820Z] [BOT] ✅ Loaded pending queue: 515 total (495 pending, 20 enriched, 0 posted)
[2025-12-16T07:49:58.827Z] [BOT] ✅ Saved pending queue: 515 total (495 pending, 11 enriched, 9 posted)
[2025-12-16T07:49:58.827Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T07:49:58.866Z] [BOT] 📂 Loaded 353 existing routing entries
[2025-12-16T07:49:58.905Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2025-12-16T07:49:58.905Z] [BOT] Total entries: 362
   Timestamp: 2025-12-16T07:49:58.903Z
[2025-12-16T07:49:58.906Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T07:49:58.906Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2025-12-16T07:50:00.918Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2311) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*