# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T20:24:14.642Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T20:23:26.076Z] ========================================
[2025-12-20T20:23:26.078Z] Discord Bot Execution Log
[2025-12-20T20:23:26.078Z] Environment: GitHub Actions
[2025-12-20T20:23:26.078Z] Node Version: v20.19.6
[2025-12-20T20:23:26.078Z] ========================================
[2025-12-20T20:23:26.078Z] Environment Variables Check:
[2025-12-20T20:23:26.078Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T20:23:26.078Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T20:23:26.078Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T20:23:26.078Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T20:23:26.078Z] 
Multi-Channel Configuration:
[2025-12-20T20:23:26.079Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T20:23:26.079Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T20:23:26.079Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T20:23:26.079Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T20:23:26.079Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T20:23:26.079Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T20:23:26.079Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T20:23:26.079Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T20:23:26.079Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T20:23:26.079Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T20:23:26.079Z] 
Data Files Check:
[2025-12-20T20:23:26.080Z] .github/data/new_jobs.json: ✅ Exists (10 items, 11303 bytes)
[2025-12-20T20:23:26.083Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 401405 bytes)
[2025-12-20T20:23:26.083Z] 
========================================
[2025-12-20T20:23:26.083Z] Starting Enhanced Discord Bot...
[2025-12-20T20:23:26.083Z] ========================================
[2025-12-20T20:23:26.595Z] [BOT] ✅ Loaded V2 database: 687 jobs
[2025-12-20T20:23:27.293Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T20:23:27.293Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T20:23:27.293Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T20:23:27.294Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T20:23:27.335Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-20T20:23:27.379Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 47
[2025-12-20T20:23:27.381Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T20:23:27.382Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T20:23:27.382Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T20:23:27.382Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-20T20:23:27.383Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T20:23:27.386Z] [BOT] 📌 Posting 8 jobs to #🤖・ai-jobs
[2025-12-20T20:23:27.387Z] [BOT] 📍 [ROUTING] "Graduate Engineer - 2026 Start" @ ORG_1bb6fcfb
[2025-12-20T20:23:27.387Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:23:27.404Z] [BOT ERROR] (node:2689) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T20:23:27.557Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - 2026 Start @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Engineer - 2026 Start @ ORG_1bb6fcfb
[2025-12-20T20:23:29.263Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - 2026 Start @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T20:23:30.764Z] [BOT] 💾 Marked as posted: Graduate Engineer - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:23:30.764Z] [BOT] 💾 BEFORE ARCHIVING: 688 jobs in database
[2025-12-20T20:23:30.765Z] [BOT] ✅ No jobs to archive (all 688 jobs within 7-day window)
[2025-12-20T20:23:30.775Z] [BOT] 💾 Saved posted_jobs.json: 688 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T20:23:30.775Z] [BOT] 📍 [ROUTING] "General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD" @ ORG_1bb6fcfb
[2025-12-20T20:23:30.776Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:23:30.939Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD @ ORG_e632b709in #🤖・ai-jobs
[2025-12-20T20:23:30.939Z] [BOT] ✅ Industry: General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD @ ORG_1bb6fcfb
[2025-12-20T20:23:32.750Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD @ ORG_e632b709in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T20:23:34.251Z] [BOT] 💾 Marked as posted: General Hire – Machine Learning Scientist Graduate - Tiktok Recommendation - 2026 Start','PhD @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:23:34.251Z] [BOT] 💾 BEFORE ARCHIVING: 689 jobs in database
[2025-12-20T20:23:34.252Z] [BOT] ✅ No jobs to archive (all 689 jobs within 7-day window)
[2025-12-20T20:23:34.257Z] [BOT] 💾 Saved posted_jobs.json: 689 active jobs
[2025-12-20T20:23:34.258Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:23:34.258Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T20:23:34.258Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:23:34.534Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS @ ORG_1bb6fcfb
[2025-12-20T20:23:36.245Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T20:23:37.746Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Trust and Safety - Usds','2025 Start','MS @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:23:37.746Z] [BOT] 💾 BEFORE ARCHIVING: 690 jobs in database
[2025-12-20T20:23:37.747Z] [BOT] ✅ No jobs to archive (all 690 jobs within 7-day window)
[2025-12-20T20:23:37.754Z] [BOT] 💾 Saved posted_jobs.json: 690 active jobs
[2025-12-20T20:23:37.754Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:23:37.755Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety" @ ORG_1bb6fcfb
[2025-12-20T20:23:37.755Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:23:37.924Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T20:23:37.924Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb
[2025-12-20T20:23:39.639Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb in #🌧️・seattle
[2025-12-20T20:23:39.639Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-20T20:23:41.140Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:23:41.140Z] [BOT] 💾 BEFORE ARCHIVING: 691 jobs in database
[2025-12-20T20:23:41.141Z] [BOT] ✅ No jobs to archive (all 691 jobs within 7-day window)
[2025-12-20T20:23:41.146Z] [BOT] 💾 Saved posted_jobs.json: 691 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T20:23:41.147Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM" @ ORG_1bb6fcfb
[2025-12-20T20:23:41.147Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:23:41.356Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T20:23:41.357Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM @ ORG_1bb6fcfb
[2025-12-20T20:23:43.325Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-20T20:23:43.325Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T20:23:44.826Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - CV/NLP/Multimodal LLM @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:23:44.827Z] [BOT] 💾 BEFORE ARCHIVING: 692 jobs in database
[2025-12-20T20:23:44.827Z] [BOT] ✅ No jobs to archive (all 692 jobs within 7-day window)
[2025-12-20T20:23:44.833Z] [BOT] 💾 Saved posted_jobs.json: 692 active jobs
[2025-12-20T20:23:44.833Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:23:44.834Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate Short Video Content Ecology - 2026 Start - PhD" @ ORG_1bb6fcfb
[2025-12-20T20:23:44.834Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:23:45.261Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate Short Video Content Ecology - 2026 Start - PhD @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T20:23:45.261Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate Short Video Content Ecology - 2026 Start - PhD @ ORG_1bb6fcfb
[2025-12-20T20:23:47.245Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate Short Video Content Ecology - 2026 Start - PhD @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-20T20:23:47.245Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T20:23:48.746Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate Short Video Content Ecology - 2026 Start - PhD @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:23:48.747Z] [BOT] 💾 BEFORE ARCHIVING: 693 jobs in database
[2025-12-20T20:23:48.747Z] [BOT] ✅ No jobs to archive (all 693 jobs within 7-day window)
[2025-12-20T20:23:48.753Z] [BOT] 💾 Saved posted_jobs.json: 693 active jobs
[2025-12-20T20:23:48.754Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:23:48.754Z] [BOT] 📍 [ROUTING] "Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2025-12-20T20:23:48.754Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:23:48.941Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_08c9a13c
[2025-12-20T20:23:50.696Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-20T20:23:52.196Z] [BOT] 💾 Marked as posted: Engineer Graduate: - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_08c9a13c (instance #1)
[2025-12-20T20:23:52.197Z] [BOT] 💾 BEFORE ARCHIVING: 694 jobs in database
[2025-12-20T20:23:52.197Z] [BOT] ✅ No jobs to archive (all 694 jobs within 7-day window)
[2025-12-20T20:23:52.204Z] [BOT] 💾 Saved posted_jobs.json: 694 active jobs
[2025-12-20T20:23:52.204Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:23:52.204Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow in Water Systems - Ml" @ ORG_9d38443e of Texas - Austin
[2025-12-20T20:23:52.204Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:23:52.387Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow in Water Systems - Ml @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Fellow in Water Systems - Ml @ ORG_9d38443e of Texas - Austin
[2025-12-20T20:23:54.116Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow in Water Systems - Ml @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-20T20:23:55.616Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow in Water Systems - Ml @ ORG_9d38443e of Texas - Austin (instance #1)
[2025-12-20T20:23:55.617Z] [BOT] 💾 BEFORE ARCHIVING: 695 jobs in database
[2025-12-20T20:23:55.617Z] [BOT] ✅ No jobs to archive (all 695 jobs within 7-day window)
[2025-12-20T20:23:55.624Z] [BOT] 💾 Saved posted_jobs.json: 695 active jobs
[2025-12-20T20:23:55.624Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:23:58.624Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-20T20:23:58.625Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start" @ ORG_1bb6fcfb
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T20:23:58.933Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start @ ORG_1bb6fcfb
[2025-12-20T20:24:00.765Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T20:24:02.266Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Global E-commerce Content Recommendation - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:24:02.266Z] [BOT] 💾 BEFORE ARCHIVING: 696 jobs in database
[2025-12-20T20:24:02.267Z] [BOT] ✅ No jobs to archive (all 696 jobs within 7-day window)
[2025-12-20T20:24:02.275Z] [BOT] 💾 Saved posted_jobs.json: 696 active jobs
[2025-12-20T20:24:02.275Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:24:05.276Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-20T20:24:05.276Z] [BOT] 📍 [ROUTING] "Data Science Graduate - Advertisement Team - BS/MS" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-20T20:24:05.532Z] [BOT] ✅ Created forum post: 🏢 Data Science Graduate - Advertisement Team - BS/MS @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Science Graduate - Advertisement Team - BS/MS @ ORG_1bb6fcfb
[2025-12-20T20:24:07.253Z] [BOT] ✅ Created forum post: 🏢 Data Science Graduate - Advertisement Team - BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T20:24:08.753Z] [BOT] 💾 Marked as posted: Data Science Graduate - Advertisement Team - BS/MS @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:24:08.753Z] [BOT] 💾 BEFORE ARCHIVING: 697 jobs in database
[2025-12-20T20:24:08.754Z] [BOT] ✅ No jobs to archive (all 697 jobs within 7-day window)
[2025-12-20T20:24:08.760Z] [BOT] 💾 Saved posted_jobs.json: 697 active jobs
[2025-12-20T20:24:08.760Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:24:11.760Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-20T20:24:11.760Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_910d9ce8 (posted within 7 days)
[2025-12-20T20:24:11.760Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f53d6e78 (posted within 7 days)
[2025-12-20T20:24:11.760Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_4edc014c (posted within 7 days)
[2025-12-20T20:24:11.761Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_05d72209 (posted within 7 days)
[2025-12-20T20:24:11.761Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_3e50c48f (posted within 7 days)
[2025-12-20T20:24:11.761Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_c5f835f9 (posted within 7 days)
[2025-12-20T20:24:11.761Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a0cb7d9e (posted within 7 days)
[2025-12-20T20:24:11.761Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_198b83ec (posted within 7 days)
[2025-12-20T20:24:11.761Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_eae81305-detail (posted within 7 days)
[2025-12-20T20:24:11.761Z] [BOT] ⏭️  Skipping duplicate: JID_9735a76a-_r_00041178-1 (posted within 7 days)
[2025-12-20T20:24:11.763Z] [BOT] ✅ Loaded pending queue: 253 total (233 pending, 20 enriched, 0 posted)
[2025-12-20T20:24:11.767Z] [BOT] ✅ Saved pending queue: 253 total (233 pending, 10 enriched, 10 posted)
[2025-12-20T20:24:11.767Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T20:24:11.808Z] [BOT] 📂 Loaded 762 existing routing entries
[2025-12-20T20:24:11.856Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 772
   Timestamp: 2025-12-20T20:24:11.849Z
[2025-12-20T20:24:11.856Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
[2025-12-20T20:24:11.856Z] [BOT] Total attempts: 20
[2025-12-20T20:24:11.856Z] [BOT] Successful: 20
[2025-12-20T20:24:11.858Z] [BOT] Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
     1. #🤖・ai-jobs: 8 posts
     2. #🌉・san-francisco: 7 posts
     3. #🌧️・seattle: 2 posts
     4. #🤠・austin: 1 posts
     5. #💻・tech-jobs: 1 posts
[STATS] Channel stats saved
[2025-12-20T20:24:13.869Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2689) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*