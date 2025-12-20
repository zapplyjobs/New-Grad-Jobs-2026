# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T19:04:06.446Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T19:03:27.796Z] ========================================
[2025-12-20T19:03:27.798Z] Discord Bot Execution Log
[2025-12-20T19:03:27.798Z] Environment: GitHub Actions
[2025-12-20T19:03:27.798Z] Node Version: v20.19.6
[2025-12-20T19:03:27.798Z] ========================================
[2025-12-20T19:03:27.798Z] Environment Variables Check:
[2025-12-20T19:03:27.798Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T19:03:27.798Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T19:03:27.798Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T19:03:27.798Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T19:03:27.798Z] 
Multi-Channel Configuration:
[2025-12-20T19:03:27.799Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T19:03:27.799Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T19:03:27.799Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T19:03:27.799Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T19:03:27.799Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T19:03:27.799Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T19:03:27.799Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T19:03:27.799Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T19:03:27.799Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T19:03:27.799Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T19:03:27.799Z] 
Data Files Check:
[2025-12-20T19:03:27.800Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7053 bytes)
[2025-12-20T19:03:27.802Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 376205 bytes)
[2025-12-20T19:03:27.802Z] 
========================================
[2025-12-20T19:03:27.802Z] Starting Enhanced Discord Bot...
[2025-12-20T19:03:27.802Z] ========================================
[2025-12-20T19:03:28.329Z] [BOT] ✅ Loaded V2 database: 637 jobs
[2025-12-20T19:03:28.796Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T19:03:28.797Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T19:03:28.797Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T19:03:28.797Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T19:03:28.842Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-20T19:03:28.886Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 47
[2025-12-20T19:03:28.889Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T19:03:28.889Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T19:03:28.889Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T19:03:28.890Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-20T19:03:28.890Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Engineer Graduate: - Machine Learning Engineer - Local Services Search @ TikTok: seattle, san jose
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T19:03:28.891Z] [BOT] 📌 Posting 9 jobs to #🤖・ai-jobs
[2025-12-20T19:03:28.893Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - CV/NLP/Multimodal LLM - Trust and Safety" @ ORG_1bb6fcfb
[2025-12-20T19:03:28.893Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T19:03:28.893Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:03:28.910Z] [BOT ERROR] (node:2308) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T19:03:29.356Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - CV/NLP/Multimodal LLM - Trust and Safety @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T19:03:29.356Z] [BOT] ✅ Industry: Research Scientist Graduate - CV/NLP/Multimodal LLM - Trust and Safety @ ORG_1bb6fcfb
[2025-12-20T19:03:31.052Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - CV/NLP/Multimodal LLM - Trust and Safety @ ORG_1bb6fcfb in #🌧️・seattle
[2025-12-20T19:03:31.052Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-20T19:03:32.552Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - CV/NLP/Multimodal LLM - Trust and Safety @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:03:32.552Z] [BOT] 💾 BEFORE ARCHIVING: 638 jobs in database
[2025-12-20T19:03:32.553Z] [BOT] ✅ No jobs to archive (all 638 jobs within 7-day window)
[2025-12-20T19:03:32.569Z] [BOT] 💾 Saved posted_jobs.json: 638 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T19:03:32.571Z] [BOT] 📍 [ROUTING] "LLM Research Scientist Graduate" @ ORG_1bb6fcfb
[2025-12-20T19:03:32.571Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T19:03:32.798Z] [BOT] ✅ Created forum post: 🏢 LLM Research Scientist Graduate @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T19:03:32.798Z] [BOT] ✅ Industry: LLM Research Scientist Graduate @ ORG_1bb6fcfb
[2025-12-20T19:03:34.549Z] [BOT] ✅ Created forum post: 🏢 LLM Research Scientist Graduate @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T19:03:36.049Z] [BOT] 💾 Marked as posted: LLM Research Scientist Graduate @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:03:36.049Z] [BOT] 💾 BEFORE ARCHIVING: 639 jobs in database
[2025-12-20T19:03:36.050Z] [BOT] ✅ No jobs to archive (all 639 jobs within 7-day window)
[2025-12-20T19:03:36.055Z] [BOT] 💾 Saved posted_jobs.json: 639 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T19:03:36.055Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - E-Commerce Risk Control" @ ORG_1bb6fcfb
[2025-12-20T19:03:36.055Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:03:36.386Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - E-Commerce Risk Control @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer - E-Commerce Risk Control @ ORG_1bb6fcfb
[2025-12-20T19:03:38.068Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - E-Commerce Risk Control @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T19:03:39.568Z] [BOT] 💾 Marked as posted: Machine Learning Engineer - E-Commerce Risk Control @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:03:39.569Z] [BOT] 💾 BEFORE ARCHIVING: 640 jobs in database
[2025-12-20T19:03:39.569Z] [BOT] ✅ No jobs to archive (all 640 jobs within 7-day window)
[2025-12-20T19:03:39.576Z] [BOT] 💾 Saved posted_jobs.json: 640 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T19:03:39.577Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP" @ ORG_1bb6fcfb
[2025-12-20T19:03:39.577Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:03:39.872Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T19:03:39.872Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_1bb6fcfb
[2025-12-20T19:03:41.533Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-20T19:03:41.533Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T19:03:43.034Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:03:43.034Z] [BOT] 💾 BEFORE ARCHIVING: 641 jobs in database
[2025-12-20T19:03:43.035Z] [BOT] ✅ No jobs to archive (all 641 jobs within 7-day window)
[2025-12-20T19:03:43.040Z] [BOT] 💾 Saved posted_jobs.json: 641 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T19:03:43.041Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Multiple Teams" @ ORG_1bb6fcfb
[2025-12-20T19:03:43.041Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:03:43.378Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb
[2025-12-20T19:03:45.109Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb in #🌧️・seattle
[2025-12-20T19:03:45.109Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-20T19:03:46.609Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:03:46.609Z] [BOT] 💾 BEFORE ARCHIVING: 642 jobs in database
[2025-12-20T19:03:46.610Z] [BOT] ✅ No jobs to archive (all 642 jobs within 7-day window)
[2025-12-20T19:03:46.616Z] [BOT] 💾 Saved posted_jobs.json: 642 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T19:03:46.617Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2025 Start" @ ORG_1bb6fcfb
[2025-12-20T19:03:46.617Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T19:03:46.617Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:03:46.781Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2025 Start @ ORG_57052271 in #🤖・ai-jobs
[2025-12-20T19:03:46.781Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2025 Start @ ORG_1bb6fcfb
[2025-12-20T19:03:48.445Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2025 Start @ ORG_57052271 in #🌉・san-francisco
[2025-12-20T19:03:48.446Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T19:03:49.946Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2025 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:03:49.946Z] [BOT] 💾 BEFORE ARCHIVING: 643 jobs in database
[2025-12-20T19:03:49.946Z] [BOT] ✅ No jobs to archive (all 643 jobs within 7-day window)
[2025-12-20T19:03:49.953Z] [BOT] 💾 Saved posted_jobs.json: 643 active jobs
[2025-12-20T19:03:49.954Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:03:49.954Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - App Ads and Gaming - 2025 Start','BS/MS" @ ORG_1bb6fcfb
[2025-12-20T19:03:49.954Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:03:50.254Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - App Ads and Gaming - 2025 Start','BS/MS @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T19:03:50.254Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - App Ads and Gaming - 2025 Start','BS/MS @ ORG_1bb6fcfb
[2025-12-20T19:03:51.931Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - App Ads and Gaming - 2025 Start','BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-20T19:03:51.931Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T19:03:53.432Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - App Ads and Gaming - 2025 Start','BS/MS @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:03:53.432Z] [BOT] 💾 BEFORE ARCHIVING: 644 jobs in database
[2025-12-20T19:03:53.432Z] [BOT] ✅ No jobs to archive (all 644 jobs within 7-day window)
[2025-12-20T19:03:53.438Z] [BOT] 💾 Saved posted_jobs.json: 644 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T19:03:53.438Z] [BOT] 📍 [ROUTING] "Engineer Graduate: - Machine Learning Engineer - Local Services Search" @ ORG_1bb6fcfb
[2025-12-20T19:03:53.439Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:03:53.664Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T19:03:53.664Z] [BOT] ✅ Industry: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb
[2025-12-20T19:03:55.465Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-20T19:03:56.966Z] [BOT] 💾 Marked as posted: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:03:56.966Z] [BOT] 💾 BEFORE ARCHIVING: 645 jobs in database
[2025-12-20T19:03:56.966Z] [BOT] ✅ No jobs to archive (all 645 jobs within 7-day window)
[2025-12-20T19:03:56.972Z] [BOT] 💾 Saved posted_jobs.json: 645 active jobs
[2025-12-20T19:03:56.972Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:03:56.973Z] [BOT] 💾 Marked as posted: Engineer Graduate - Machine Learning Engineer - Data Search TikTok @ ORG_1bb6fcfb (instance #1)
💾 BEFORE ARCHIVING: 646 jobs in database
[2025-12-20T19:03:56.973Z] [BOT] ✅ No jobs to archive (all 646 jobs within 7-day window)
[2025-12-20T19:03:56.978Z] [BOT] 💾 Saved posted_jobs.json: 646 active jobs
[2025-12-20T19:03:56.978Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:03:56.979Z] [BOT] 📍 [ROUTING] "General Hire – Machine Learning Engineer Graduate - PhD" @ ORG_1bb6fcfb
[2025-12-20T19:03:56.979Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:03:57.191Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Engineer Graduate - PhD @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T19:03:57.191Z] [BOT] ✅ Industry: General Hire – Machine Learning Engineer Graduate - PhD @ ORG_1bb6fcfb
[2025-12-20T19:03:59.090Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Engineer Graduate - PhD @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-20T19:03:59.091Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T19:04:00.591Z] [BOT] 💾 Marked as posted: General Hire – Machine Learning Engineer Graduate - PhD @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:04:00.591Z] [BOT] 💾 BEFORE ARCHIVING: 647 jobs in database
[2025-12-20T19:04:00.591Z] [BOT] ✅ No jobs to archive (all 647 jobs within 7-day window)
[2025-12-20T19:04:00.598Z] [BOT] 💾 Saved posted_jobs.json: 647 active jobs
[2025-12-20T19:04:00.598Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:04:03.599Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-20T19:04:03.600Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_05b4883e (posted within 7 days)
[2025-12-20T19:04:03.600Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_99ae2b65 (posted within 7 days)
[2025-12-20T19:04:03.600Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_6fff0d4a (posted within 7 days)
[2025-12-20T19:04:03.600Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_1c1269c7 (posted within 7 days)
[2025-12-20T19:04:03.600Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_8b14cabf (posted within 7 days)
[2025-12-20T19:04:03.600Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_0505e070 (posted within 7 days)
[2025-12-20T19:04:03.600Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_520ee819 (posted within 7 days)
[2025-12-20T19:04:03.600Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_18a98c1f (posted within 7 days)
[2025-12-20T19:04:03.600Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a2d30400 (posted within 7 days)
[2025-12-20T19:04:03.602Z] [BOT] ✅ Loaded pending queue: 303 total (283 pending, 20 enriched, 0 posted)
[2025-12-20T19:04:03.607Z] [BOT] ✅ Saved pending queue: 303 total (283 pending, 11 enriched, 9 posted)
[2025-12-20T19:04:03.607Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T19:04:03.648Z] [BOT] 📂 Loaded 717 existing routing entries
[2025-12-20T19:04:03.692Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 726
   Timestamp: 2025-12-20T19:04:03.688Z
[2025-12-20T19:04:03.692Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
   Total attempts: 18
[2025-12-20T19:04:03.692Z] [BOT] Successful: 18
   Failed: 0
   Skipped: 0
[2025-12-20T19:04:03.693Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 9 posts
     2. #🌉・san-francisco: 6 posts
     3. #🌧️・seattle: 3 posts
[2025-12-20T19:04:03.693Z] [BOT] [STATS] Channel stats saved
[2025-12-20T19:04:05.704Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2308) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*