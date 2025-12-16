# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T07:38:11.595Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T07:37:27.660Z] ========================================
[2025-12-16T07:37:27.662Z] Discord Bot Execution Log
[2025-12-16T07:37:27.662Z] Environment: GitHub Actions
[2025-12-16T07:37:27.662Z] Node Version: v20.19.6
[2025-12-16T07:37:27.662Z] ========================================
[2025-12-16T07:37:27.662Z] Environment Variables Check:
[2025-12-16T07:37:27.662Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T07:37:27.662Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T07:37:27.662Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T07:37:27.662Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T07:37:27.663Z] 
Multi-Channel Configuration:
[2025-12-16T07:37:27.663Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T07:37:27.663Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T07:37:27.663Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T07:37:27.663Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T07:37:27.663Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T07:37:27.663Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T07:37:27.663Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T07:37:27.663Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T07:37:27.663Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T07:37:27.663Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T07:37:27.663Z] 
Data Files Check:
[2025-12-16T07:37:27.664Z] .github/data/new_jobs.json: ✅ Exists (10 items, 12463 bytes)
[2025-12-16T07:37:27.665Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 222215 bytes)
[2025-12-16T07:37:27.665Z] 
========================================
[2025-12-16T07:37:27.665Z] Starting Enhanced Discord Bot...
[2025-12-16T07:37:27.665Z] ========================================
[2025-12-16T07:37:28.181Z] [BOT] ✅ Loaded V2 database: 355 jobs
[2025-12-16T07:37:28.740Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T07:37:28.740Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T07:37:28.740Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T07:37:28.740Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T07:37:28.799Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T07:37:28.866Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T07:37:28.868Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T07:37:28.868Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T07:37:28.868Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T07:37:28.869Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T07:37:28.869Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T07:37:28.873Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2025-12-16T07:37:28.874Z] [BOT] 📍 [ROUTING] "University Graduate - Research Scientist/Engineer" @ ORG_72fd3ae0
[2025-12-16T07:37:28.874Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:37:28.891Z] [BOT ERROR] (node:2486) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T07:37:29.106Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0
[2025-12-16T07:37:30.751Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:37:32.251Z] [BOT] 💾 Marked as posted: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 (instance #1)
[2025-12-16T07:37:32.251Z] [BOT] 💾 BEFORE ARCHIVING: 356 jobs in database
[2025-12-16T07:37:32.252Z] [BOT] ✅ No jobs to archive (all 356 jobs within 7-day window)
[2025-12-16T07:37:32.259Z] [BOT] 💾 Saved posted_jobs.json: 356 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:37:32.259Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - E-Commerce Governance" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2025-12-16T07:37:32.259Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:37:32.405Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - E-Commerce Governance @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-16T07:37:32.405Z] [BOT] ✅ Industry: Machine Learning Engineer - E-Commerce Governance @ ORG_1bb6fcfb
[2025-12-16T07:37:34.039Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - E-Commerce Governance @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-16T07:37:34.039Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T07:37:35.539Z] [BOT] 💾 Marked as posted: Machine Learning Engineer - E-Commerce Governance @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:37:35.539Z] [BOT] 💾 BEFORE ARCHIVING: 357 jobs in database
[2025-12-16T07:37:35.539Z] [BOT] ✅ No jobs to archive (all 357 jobs within 7-day window)
[2025-12-16T07:37:35.543Z] [BOT] 💾 Saved posted_jobs.json: 357 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:37:35.543Z] [BOT] 📍 [ROUTING] "Research Scientist in Generative AI for Science - Bytedance Seed - 2026 Start" @ ORG_08c9a13c
[2025-12-16T07:37:35.543Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:37:35.752Z] [BOT] ✅ Created forum post: 🏢 Research Scientist in Generative AI for Science - Bytedance Seed - 2026 Start @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-16T07:37:35.752Z] [BOT] ✅ Industry: Research Scientist in Generative AI for Science - Bytedance Seed - 2026 Start @ ORG_08c9a13c
[2025-12-16T07:37:37.380Z] [BOT] ✅ Created forum post: 🏢 Research Scientist in Generative AI for Science - Bytedance Seed - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:37:38.881Z] [BOT] 💾 Marked as posted: Research Scientist in Generative AI for Science - Bytedance Seed - 2026 Start @ ORG_08c9a13c (instance #1)
[2025-12-16T07:37:38.881Z] [BOT] 💾 BEFORE ARCHIVING: 358 jobs in database
[2025-12-16T07:37:38.881Z] [BOT] ✅ No jobs to archive (all 358 jobs within 7-day window)
[2025-12-16T07:37:38.886Z] [BOT] 💾 Saved posted_jobs.json: 358 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:37:38.886Z] [BOT] 📍 [ROUTING] "Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems" @ ORG_08c9a13c
[2025-12-16T07:37:38.886Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:37:39.053Z] [BOT] ✅ Created forum post: 🏢 Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-16T07:37:39.054Z] [BOT] ✅ Industry: Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c
[2025-12-16T07:37:40.680Z] [BOT] ✅ Created forum post: 🏢 Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-16T07:37:40.680Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T07:37:42.181Z] [BOT] 💾 Marked as posted: Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c (instance #1)
[2025-12-16T07:37:42.181Z] [BOT] 💾 BEFORE ARCHIVING: 359 jobs in database
[2025-12-16T07:37:42.181Z] [BOT] ✅ No jobs to archive (all 359 jobs within 7-day window)
[2025-12-16T07:37:42.185Z] [BOT] 💾 Saved posted_jobs.json: 359 active jobs
[2025-12-16T07:37:42.186Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:37:42.186Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:37:42.356Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-16T07:37:42.356Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c
[2025-12-16T07:37:44.002Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-16T07:37:44.002Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T07:37:45.502Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c (instance #1)
[2025-12-16T07:37:45.502Z] [BOT] 💾 BEFORE ARCHIVING: 360 jobs in database
[2025-12-16T07:37:45.503Z] [BOT] ✅ No jobs to archive (all 360 jobs within 7-day window)
[2025-12-16T07:37:45.507Z] [BOT] 💾 Saved posted_jobs.json: 360 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:37:45.507Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T07:37:45.508Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:37:45.724Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb
[2025-12-16T07:37:47.567Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:37:49.068Z] [BOT] 💾 Marked as posted: Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:37:49.069Z] [BOT] 💾 BEFORE ARCHIVING: 361 jobs in database
[2025-12-16T07:37:49.069Z] [BOT] ✅ No jobs to archive (all 361 jobs within 7-day window)
[2025-12-16T07:37:49.073Z] [BOT] 💾 Saved posted_jobs.json: 361 active jobs
[2025-12-16T07:37:49.074Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:37:52.075Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-16T07:37:52.075Z] [BOT] 📍 [ROUTING] "Research Scientist" @ ORG_36f25eb7 Labs
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:37:52.301Z] [BOT] ✅ Created forum post: 🏢 Research Scientist @ ORG_36f25eb7 Labs in #💻・tech-jobs
  ✅ Industry: Research Scientist @ ORG_36f25eb7 Labs
[2025-12-16T07:37:53.947Z] [BOT] ✅ Created forum post: 🏢 Research Scientist @ ORG_36f25eb7 Labs in #🗽・new-york
[2025-12-16T07:37:53.948Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-16T07:37:55.449Z] [BOT] 💾 Marked as posted: Research Scientist @ ORG_36f25eb7 Labs (instance #1)
[2025-12-16T07:37:55.449Z] [BOT] 💾 BEFORE ARCHIVING: 362 jobs in database
[2025-12-16T07:37:55.449Z] [BOT] ✅ No jobs to archive (all 362 jobs within 7-day window)
[2025-12-16T07:37:55.453Z] [BOT] 💾 Saved posted_jobs.json: 362 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:37:55.453Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Algorithm Engineering" @ ORG_1bb6fcfb
[2025-12-16T07:37:55.453Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:37:55.737Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Algorithm Engineering @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Graduate Engineer - Algorithm Engineering @ ORG_1bb6fcfb
[2025-12-16T07:37:57.418Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Algorithm Engineering @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:37:58.918Z] [BOT] 💾 Marked as posted: Graduate Engineer - Algorithm Engineering @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:37:58.918Z] [BOT] 💾 BEFORE ARCHIVING: 363 jobs in database
[2025-12-16T07:37:58.918Z] [BOT] ✅ No jobs to archive (all 363 jobs within 7-day window)
[2025-12-16T07:37:58.922Z] [BOT] 💾 Saved posted_jobs.json: 363 active jobs
[2025-12-16T07:37:58.922Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:37:58.922Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - 3D Avatar" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:37:59.384Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - 3D Avatar @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Research Scientist Graduate - 3D Avatar @ ORG_08c9a13c
[2025-12-16T07:38:01.044Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - 3D Avatar @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:38:02.544Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - 3D Avatar @ ORG_08c9a13c (instance #1)
[2025-12-16T07:38:02.545Z] [BOT] 💾 BEFORE ARCHIVING: 364 jobs in database
[2025-12-16T07:38:02.545Z] [BOT] ✅ No jobs to archive (all 364 jobs within 7-day window)
[2025-12-16T07:38:02.550Z] [BOT] 💾 Saved posted_jobs.json: 364 active jobs
[2025-12-16T07:38:02.550Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:38:02.550Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Data Arch - E-commerce" @ ORG_1bb6fcfb
[2025-12-16T07:38:02.550Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:38:02.697Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Data Arch - E-commerce @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer - Data Arch - E-commerce @ ORG_1bb6fcfb
[2025-12-16T07:38:04.381Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Data Arch - E-commerce @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:38:05.882Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Data Arch - E-commerce @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:38:05.883Z] [BOT] 💾 BEFORE ARCHIVING: 365 jobs in database
[2025-12-16T07:38:05.883Z] [BOT] ✅ No jobs to archive (all 365 jobs within 7-day window)
[2025-12-16T07:38:05.887Z] [BOT] 💾 Saved posted_jobs.json: 365 active jobs
[2025-12-16T07:38:05.887Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:38:08.887Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T07:38:08.887Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r160690 (posted within 7 days)
[2025-12-16T07:38:08.887Z] [BOT] ⏭️  Skipping duplicate: JID_d9dbef08 (posted within 7 days)
[2025-12-16T07:38:08.888Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_2ea2e67a (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_34b2cf6e (posted within 7 days)
[2025-12-16T07:38:08.888Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_a0f2fa61-detail (posted within 7 days)
[2025-12-16T07:38:08.888Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_0f14ea99-detail (posted within 7 days)
[2025-12-16T07:38:08.888Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_5d75fef3-detail (posted within 7 days)
[2025-12-16T07:38:08.888Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_60bfff58-detail (posted within 7 days)
[2025-12-16T07:38:08.888Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_db738cdb (posted within 7 days)
[2025-12-16T07:38:08.888Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f3f3de34 (posted within 7 days)
[2025-12-16T07:38:08.891Z] [BOT] ✅ Loaded pending queue: 525 total (505 pending, 20 enriched, 0 posted)
[2025-12-16T07:38:08.898Z] [BOT] ✅ Saved pending queue: 525 total (505 pending, 10 enriched, 10 posted)
[2025-12-16T07:38:08.898Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T07:38:08.939Z] [BOT] 📂 Loaded 343 existing routing entries
[2025-12-16T07:38:08.978Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 353
   Timestamp: 2025-12-16T07:38:08.977Z
[2025-12-16T07:38:08.979Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
   Total attempts: 20
[2025-12-16T07:38:08.979Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T07:38:10.991Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2486) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*