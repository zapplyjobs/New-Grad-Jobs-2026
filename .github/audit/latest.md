# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T06:58:38.879Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T06:57:52.040Z] ========================================
[2025-12-16T06:57:52.041Z] Discord Bot Execution Log
[2025-12-16T06:57:52.042Z] Environment: GitHub Actions
[2025-12-16T06:57:52.042Z] Node Version: v20.19.6
[2025-12-16T06:57:52.042Z] ========================================
[2025-12-16T06:57:52.042Z] Environment Variables Check:
[2025-12-16T06:57:52.042Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T06:57:52.042Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T06:57:52.042Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T06:57:52.042Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T06:57:52.042Z] 
Multi-Channel Configuration:
[2025-12-16T06:57:52.042Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T06:57:52.042Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T06:57:52.043Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T06:57:52.043Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T06:57:52.043Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T06:57:52.043Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T06:57:52.043Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T06:57:52.043Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T06:57:52.043Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T06:57:52.043Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T06:57:52.043Z] 
Data Files Check:
[2025-12-16T06:57:52.043Z] .github/data/new_jobs.json: ✅ Exists (10 items, 12838 bytes)
[2025-12-16T06:57:52.045Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 206192 bytes)
[2025-12-16T06:57:52.045Z] 
========================================
[2025-12-16T06:57:52.045Z] Starting Enhanced Discord Bot...
[2025-12-16T06:57:52.045Z] ========================================
[2025-12-16T06:57:52.581Z] [BOT] ✅ Loaded V2 database: 325 jobs
[2025-12-16T06:57:53.003Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T06:57:53.003Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T06:57:53.003Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T06:57:53.003Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T06:57:53.060Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T06:57:53.125Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T06:57:53.127Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T06:57:53.127Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T06:57:53.128Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T06:57:53.128Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T06:57:53.129Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T06:57:53.133Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2025-12-16T06:57:53.134Z] [BOT] 📍 [ROUTING] "General Hire - Machine Learning Engineer - Data-Search" @ ORG_1bb6fcfb
[2025-12-16T06:57:53.134Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T06:57:53.151Z] [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T06:57:53.307Z] [BOT] ✅ Created forum post: 🏢 General Hire - Machine Learning Engineer - Data-Search @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-16T06:57:53.307Z] [BOT] ✅ Industry: General Hire - Machine Learning Engineer - Data-Search @ ORG_1bb6fcfb
[2025-12-16T06:57:55.260Z] [BOT] ✅ Created forum post: 🏢 General Hire - Machine Learning Engineer - Data-Search @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-16T06:57:55.260Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T06:57:56.759Z] [BOT] 💾 Marked as posted: General Hire - Machine Learning Engineer - Data-Search @ ORG_1bb6fcfb (instance #1)
[2025-12-16T06:57:56.760Z] [BOT] 💾 BEFORE ARCHIVING: 326 jobs in database
[2025-12-16T06:57:56.760Z] [BOT] ✅ No jobs to archive (all 326 jobs within 7-day window)
[2025-12-16T06:57:56.768Z] [BOT] 💾 Saved posted_jobs.json: 326 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T06:57:56.769Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Multimodal Large Language Model - Phd" @ ORG_08c9a13c
[2025-12-16T06:57:56.769Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T06:57:56.954Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Multimodal Large Language Model - Phd @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-16T06:57:56.954Z] [BOT] ✅ Industry: Research Scientist Graduate - Multimodal Large Language Model - Phd @ ORG_08c9a13c
[2025-12-16T06:57:58.630Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Multimodal Large Language Model - Phd @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T06:58:00.130Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Multimodal Large Language Model - Phd @ ORG_08c9a13c (instance #1)
[2025-12-16T06:58:00.130Z] [BOT] 💾 BEFORE ARCHIVING: 327 jobs in database
[2025-12-16T06:58:00.131Z] [BOT] ✅ No jobs to archive (all 327 jobs within 7-day window)
[2025-12-16T06:58:00.136Z] [BOT] 💾 Saved posted_jobs.json: 327 active jobs
[2025-12-16T06:58:00.136Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:58:00.136Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Multiple Teams" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T06:58:00.136Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T06:58:00.468Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c
[2025-12-16T06:58:02.105Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-16T06:58:02.106Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T06:58:03.607Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c (instance #1)
[2025-12-16T06:58:03.607Z] [BOT] 💾 BEFORE ARCHIVING: 328 jobs in database
[2025-12-16T06:58:03.608Z] [BOT] ✅ No jobs to archive (all 328 jobs within 7-day window)
[2025-12-16T06:58:03.613Z] [BOT] 💾 Saved posted_jobs.json: 328 active jobs
[2025-12-16T06:58:03.613Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:58:03.614Z] [BOT] 📍 [ROUTING] "AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD" @ ORG_08c9a13c
[2025-12-16T06:58:03.614Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T06:58:03.763Z] [BOT] ✅ Created forum post: 🏢 AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_75e8f5ac in #🤖・ai-jobs
[2025-12-16T06:58:03.764Z] [BOT] ✅ Industry: AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_08c9a13c
[2025-12-16T06:58:05.375Z] [BOT] ✅ Created forum post: 🏢 AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_75e8f5ac in #🌧️・seattle
[2025-12-16T06:58:05.376Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-16T06:58:06.876Z] [BOT] 💾 Marked as posted: AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_08c9a13c (instance #1)
[2025-12-16T06:58:06.877Z] [BOT] 💾 BEFORE ARCHIVING: 329 jobs in database
[2025-12-16T06:58:06.877Z] [BOT] ✅ No jobs to archive (all 329 jobs within 7-day window)
[2025-12-16T06:58:06.880Z] [BOT] 💾 Saved posted_jobs.json: 329 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T06:58:06.881Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2025-12-16T06:58:06.881Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T06:58:07.015Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c
[2025-12-16T06:58:08.635Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-16T06:58:08.635Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T06:58:10.135Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c (instance #1)
[2025-12-16T06:58:10.135Z] [BOT] 💾 BEFORE ARCHIVING: 330 jobs in database
[2025-12-16T06:58:10.136Z] [BOT] ✅ No jobs to archive (all 330 jobs within 7-day window)
[2025-12-16T06:58:10.141Z] [BOT] 💾 Saved posted_jobs.json: 330 active jobs
[2025-12-16T06:58:10.141Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:58:13.142Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-16T06:58:13.143Z] [BOT] 📍 [ROUTING] "Research Scientist - Reinforcement Learning" @ ORG_08c9a13c
   Category: TECH (default)
[2025-12-16T06:58:13.143Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:58:13.318Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Reinforcement Learning @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Research Scientist - Reinforcement Learning @ ORG_08c9a13c
[2025-12-16T06:58:14.988Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Reinforcement Learning @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T06:58:16.489Z] [BOT] 💾 Marked as posted: Research Scientist - Reinforcement Learning @ ORG_08c9a13c (instance #1)
[2025-12-16T06:58:16.490Z] [BOT] 💾 BEFORE ARCHIVING: 331 jobs in database
[2025-12-16T06:58:16.490Z] [BOT] ✅ No jobs to archive (all 331 jobs within 7-day window)
[2025-12-16T06:58:16.495Z] [BOT] 💾 Saved posted_jobs.json: 331 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T06:58:16.495Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Ads Interface and Platform - BS/MS" @ ORG_1bb6fcfb
[2025-12-16T06:58:16.495Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:58:16.703Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb
[2025-12-16T06:58:18.344Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T06:58:19.844Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb (instance #1)
[2025-12-16T06:58:19.844Z] [BOT] 💾 BEFORE ARCHIVING: 332 jobs in database
[2025-12-16T06:58:19.845Z] [BOT] ✅ No jobs to archive (all 332 jobs within 7-day window)
[2025-12-16T06:58:19.848Z] [BOT] 💾 Saved posted_jobs.json: 332 active jobs
[2025-12-16T06:58:19.848Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer Graduate" @ ORG_1bb6fcfb
[2025-12-16T06:58:19.848Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:58:20.016Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate @ ORG_1bb6fcfb
[2025-12-16T06:58:21.853Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T06:58:23.352Z] [BOT] 💾 Marked as posted: Software Engineer Graduate @ ORG_1bb6fcfb (instance #1)
[2025-12-16T06:58:23.353Z] [BOT] 💾 BEFORE ARCHIVING: 333 jobs in database
[2025-12-16T06:58:23.353Z] [BOT] ✅ No jobs to archive (all 333 jobs within 7-day window)
[2025-12-16T06:58:23.358Z] [BOT] 💾 Saved posted_jobs.json: 333 active jobs
[2025-12-16T06:58:23.358Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Graduate Software Engineer - Data Architect - AI/ML Infrastructure" @ ORG_1bb6fcfb
[2025-12-16T06:58:23.358Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:58:23.545Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Data Architect - AI/ML Infrastructure @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer - Data Architect - AI/ML Infrastructure @ ORG_1bb6fcfb
[2025-12-16T06:58:25.233Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Data Architect - AI/ML Infrastructure @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T06:58:26.734Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Data Architect - AI/ML Infrastructure @ ORG_1bb6fcfb (instance #1)
[2025-12-16T06:58:26.734Z] [BOT] 💾 BEFORE ARCHIVING: 334 jobs in database
[2025-12-16T06:58:26.735Z] [BOT] ✅ No jobs to archive (all 334 jobs within 7-day window)
[2025-12-16T06:58:26.739Z] [BOT] 💾 Saved posted_jobs.json: 334 active jobs
[2025-12-16T06:58:26.739Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:58:29.740Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-16T06:58:29.741Z] [BOT] 📍 [ROUTING] "Apx – New Grad" @ ORG_d5eef8ad
   Category: HEALTHCARE (matched: "medical")
[2025-12-16T06:58:29.742Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-16T06:58:29.927Z] [BOT] ✅ Created forum post: 🏢 Apx – New Grad @ ORG_d5eef8ad in #🩺・healthcare-jobs
  ✅ Industry: Apx – New Grad @ ORG_d5eef8ad
[2025-12-16T06:58:31.634Z] [BOT] ✅ Created forum post: 🏢 Apx – New Grad @ ORG_d5eef8ad in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T06:58:33.136Z] [BOT] 💾 Marked as posted: Apx – New Grad @ ORG_d5eef8ad (instance #1)
[2025-12-16T06:58:33.136Z] [BOT] 💾 BEFORE ARCHIVING: 335 jobs in database
[2025-12-16T06:58:33.137Z] [BOT] ✅ No jobs to archive (all 335 jobs within 7-day window)
[2025-12-16T06:58:33.140Z] [BOT] 💾 Saved posted_jobs.json: 335 active jobs
[2025-12-16T06:58:33.140Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:58:36.141Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T06:58:36.142Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_1295ec4f (posted within 7 days)
[2025-12-16T06:58:36.142Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_e65b7bf9-detail (posted within 7 days)
[2025-12-16T06:58:36.142Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_306ee084-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_3f3a2552-detail (posted within 7 days)
[2025-12-16T06:58:36.142Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_51d5c405 (posted within 7 days)
[2025-12-16T06:58:36.142Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_a72e555b-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_2fbe5c6f-detail (posted within 7 days)
[2025-12-16T06:58:36.142Z] [BOT] ⏭️  Skipping duplicate: JID_17d54577 (posted within 7 days)
[2025-12-16T06:58:36.142Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_d6ee5132 (posted within 7 days)
[2025-12-16T06:58:36.142Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_12ecb01d (posted within 7 days)
[2025-12-16T06:58:36.146Z] [BOT] ✅ Loaded pending queue: 553 total (533 pending, 20 enriched, 0 posted)
[2025-12-16T06:58:36.154Z] [BOT] ✅ Saved pending queue: 553 total (533 pending, 10 enriched, 10 posted)
[2025-12-16T06:58:36.154Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T06:58:36.194Z] [BOT] 📂 Loaded 314 existing routing entries
[2025-12-16T06:58:36.232Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 324
[2025-12-16T06:58:36.232Z] [BOT] Timestamp: 2025-12-16T06:58:36.230Z
[2025-12-16T06:58:36.232Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
   Total attempts: 20
   Successful: 20
[2025-12-16T06:58:36.233Z] [BOT] Failed: 0
   Skipped: 0
[2025-12-16T06:58:38.245Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*