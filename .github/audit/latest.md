# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T08:08:45.436Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T08:07:55.246Z] ========================================
[2026-01-15T08:07:55.247Z] Discord Bot Execution Log
[2026-01-15T08:07:55.247Z] Environment: GitHub Actions
[2026-01-15T08:07:55.247Z] Node Version: v20.19.6
[2026-01-15T08:07:55.247Z] ========================================
[2026-01-15T08:07:55.248Z] Environment Variables Check:
[2026-01-15T08:07:55.248Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T08:07:55.248Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T08:07:55.248Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T08:07:55.248Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T08:07:55.248Z] 
Multi-Channel Configuration:
[2026-01-15T08:07:55.248Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T08:07:55.248Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T08:07:55.248Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T08:07:55.248Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T08:07:55.248Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T08:07:55.248Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T08:07:55.248Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T08:07:55.248Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T08:07:55.249Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T08:07:55.249Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T08:07:55.249Z] 
Data Files Check:
[2026-01-15T08:07:55.249Z] .github/data/new_jobs.json: ✅ Exists (10 items, 13507 bytes)
[2026-01-15T08:07:55.256Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 914834 bytes)
[2026-01-15T08:07:55.256Z] 
========================================
[2026-01-15T08:07:55.256Z] Starting Enhanced Discord Bot...
[2026-01-15T08:07:55.256Z] ========================================
[2026-01-15T08:07:55.711Z] [BOT] ✅ Loaded V2 database: 1709 jobs
[2026-01-15T08:07:56.487Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T08:07:56.488Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T08:07:56.488Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T08:07:56.639Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: General Hire - Machine Learning Engineer - Data-Search at TikTok
[2026-01-15T08:07:56.641Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T08:07:56.641Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T08:07:56.642Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T08:07:56.642Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
   (3 grouped as same job with different locations)
[2026-01-15T08:07:56.643Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer Graduate - Ads Interface and Platform - BS/MS @ TikTok: seattle, san jose
   - Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T08:07:56.647Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-15T08:07:56.648Z] [BOT] 📍 [ROUTING] "General Hire - Machine Learning Engineer - Data-Search" @ ORG_1bb6fcfb
[2026-01-15T08:07:56.648Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:07:56.664Z] [BOT ERROR] (node:2414) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T08:07:57.004Z] [BOT] ✅ Created forum post: 🏢 General Hire - Machine Learning Engineer - Data-Search @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-15T08:07:57.005Z] [BOT] ✅ Industry: General Hire - Machine Learning Engineer - Data-Search @ ORG_1bb6fcfb
[2026-01-15T08:07:58.758Z] [BOT] ✅ Created forum post: 🏢 General Hire - Machine Learning Engineer - Data-Search @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:08:00.258Z] [BOT] 💾 Marked as posted: General Hire - Machine Learning Engineer - Data-Search @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:08:00.258Z] [BOT] 💾 BEFORE ARCHIVING: 1710 jobs in database
[2026-01-15T08:08:00.260Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T08:08:00.264Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-15T08:08:00.264Z] [BOT] ✅ Archiving complete: 1 archived, 1709 active
[2026-01-15T08:08:00.276Z] [BOT] 💾 Saved posted_jobs.json: 1709 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:08:00.277Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Multimodal Large Language Model - Phd" @ ORG_08c9a13c
[2026-01-15T08:08:00.277Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T08:08:00.524Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Multimodal Large Language Model - Phd @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-15T08:08:00.524Z] [BOT] ✅ Industry: Research Scientist Graduate - Multimodal Large Language Model - Phd @ ORG_08c9a13c
[2026-01-15T08:08:02.321Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Multimodal Large Language Model - Phd @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:08:03.822Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Multimodal Large Language Model - Phd @ ORG_08c9a13c (instance #1)
[2026-01-15T08:08:03.822Z] [BOT] 💾 BEFORE ARCHIVING: 1710 jobs in database
[2026-01-15T08:08:03.824Z] [BOT] ✅ No jobs to archive (all 1710 jobs within 7-day window)
[2026-01-15T08:08:03.834Z] [BOT] 💾 Saved posted_jobs.json: 1710 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:08:03.834Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Multiple Teams" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-15T08:08:03.834Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:08:04.164Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c
[2026-01-15T08:08:05.852Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:08:07.353Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c (instance #1)
[2026-01-15T08:08:07.354Z] [BOT] 💾 BEFORE ARCHIVING: 1711 jobs in database
[2026-01-15T08:08:07.355Z] [BOT] ✅ No jobs to archive (all 1711 jobs within 7-day window)
[2026-01-15T08:08:07.368Z] [BOT] 💾 Saved posted_jobs.json: 1711 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:08:07.369Z] [BOT] 📍 [ROUTING] "AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
[2026-01-15T08:08:07.369Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:08:07.670Z] [BOT] ✅ Created forum post: 🏢 AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_75e8f5ac in #🤖・ai-jobs
  ✅ Industry: AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_08c9a13c
[2026-01-15T08:08:09.682Z] [BOT] ✅ Created forum post: 🏢 AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_75e8f5ac in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T08:08:11.184Z] [BOT] 💾 Marked as posted: AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_08c9a13c (instance #1)
[2026-01-15T08:08:11.184Z] [BOT] 💾 BEFORE ARCHIVING: 1712 jobs in database
[2026-01-15T08:08:11.185Z] [BOT] ✅ No jobs to archive (all 1712 jobs within 7-day window)
[2026-01-15T08:08:11.197Z] [BOT] 💾 Saved posted_jobs.json: 1712 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:08:11.198Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-15T08:08:11.198Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:08:11.496Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c
[2026-01-15T08:08:13.232Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:08:14.733Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c (instance #1)
[2026-01-15T08:08:14.733Z] [BOT] 💾 BEFORE ARCHIVING: 1713 jobs in database
[2026-01-15T08:08:14.735Z] [BOT] ✅ No jobs to archive (all 1713 jobs within 7-day window)
[2026-01-15T08:08:14.746Z] [BOT] 💾 Saved posted_jobs.json: 1713 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:08:17.747Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-15T08:08:17.748Z] [BOT] 📍 [ROUTING] "Research Scientist - Reinforcement Learning" @ ORG_08c9a13c
[2026-01-15T08:08:17.748Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T08:08:17.977Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Reinforcement Learning @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Research Scientist - Reinforcement Learning @ ORG_08c9a13c
[2026-01-15T08:08:19.646Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Reinforcement Learning @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:08:21.146Z] [BOT] 💾 Marked as posted: Research Scientist - Reinforcement Learning @ ORG_08c9a13c (instance #1)
💾 BEFORE ARCHIVING: 1714 jobs in database
[2026-01-15T08:08:21.147Z] [BOT] ✅ No jobs to archive (all 1714 jobs within 7-day window)
[2026-01-15T08:08:21.158Z] [BOT] 💾 Saved posted_jobs.json: 1714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:08:21.158Z] [BOT] 💾 Marked as posted: Research Scientist - Seed Infra Machine Learning Systems @ ORG_08c9a13c (instance #1)
[2026-01-15T08:08:21.158Z] [BOT] 💾 BEFORE ARCHIVING: 1715 jobs in database
[2026-01-15T08:08:21.159Z] [BOT] ✅ No jobs to archive (all 1715 jobs within 7-day window)
[2026-01-15T08:08:21.170Z] [BOT] 💾 Saved posted_jobs.json: 1715 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:08:21.171Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Ads Interface and Platform - BS/MS" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T08:08:21.548Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-15T08:08:21.548Z] [BOT] ✅ Industry: Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb
[2026-01-15T08:08:23.313Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T08:08:24.814Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:08:24.814Z] [BOT] 💾 BEFORE ARCHIVING: 1716 jobs in database
[2026-01-15T08:08:24.815Z] [BOT] ✅ No jobs to archive (all 1716 jobs within 7-day window)
[2026-01-15T08:08:24.825Z] [BOT] 💾 Saved posted_jobs.json: 1716 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:08:24.826Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Ads Interface and Platform - 2026 Start @ ORG_1bb6fcfb (instance #1)
💾 BEFORE ARCHIVING: 1717 jobs in database
[2026-01-15T08:08:24.827Z] [BOT] ✅ No jobs to archive (all 1717 jobs within 7-day window)
[2026-01-15T08:08:24.837Z] [BOT] 💾 Saved posted_jobs.json: 1717 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:08:24.837Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Data Architect - AI/ML Infrastructure" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-15T08:08:24.837Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T08:08:25.346Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Data Architect - AI/ML Infrastructure @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-15T08:08:25.346Z] [BOT] ✅ Industry: Graduate Software Engineer - Data Architect - AI/ML Infrastructure @ ORG_1bb6fcfb
[2026-01-15T08:08:27.047Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Data Architect - AI/ML Infrastructure @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-15T08:08:27.047Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T08:08:28.548Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Data Architect - AI/ML Infrastructure @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:08:28.548Z] [BOT] 💾 BEFORE ARCHIVING: 1718 jobs in database
[2026-01-15T08:08:28.549Z] [BOT] ✅ No jobs to archive (all 1718 jobs within 7-day window)
[2026-01-15T08:08:28.560Z] [BOT] 💾 Saved posted_jobs.json: 1718 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:08:28.560Z] [BOT] 📍 [ROUTING] "Frontend Software Engineer Graduate - Ads Interface and Platform" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T08:08:28.789Z] [BOT] ✅ Created forum post: 🏢 Frontend Software Engineer Graduate - Ads Interface and Platform @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Frontend Software Engineer Graduate - Ads Interface and Platform @ ORG_1bb6fcfb
[2026-01-15T08:08:30.651Z] [BOT] ✅ Created forum post: 🏢 Frontend Software Engineer Graduate - Ads Interface and Platform @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:08:32.152Z] [BOT] 💾 Marked as posted: Frontend Software Engineer Graduate - Ads Interface and Platform @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:08:32.152Z] [BOT] 💾 BEFORE ARCHIVING: 1719 jobs in database
[2026-01-15T08:08:32.153Z] [BOT] ✅ No jobs to archive (all 1719 jobs within 7-day window)
[2026-01-15T08:08:32.163Z] [BOT] 💾 Saved posted_jobs.json: 1719 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:08:35.165Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-15T08:08:35.166Z] [BOT] 📍 [ROUTING] "Apx – New Grad" @ ORG_d5eef8ad
   Category: HEALTHCARE (matched: "medical")
[2026-01-15T08:08:35.166Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-15T08:08:35.622Z] [BOT] ✅ Created forum post: 🏢 Apx – New Grad @ ORG_d5eef8ad in #🩺・healthcare-jobs
  ✅ Industry: Apx – New Grad @ ORG_d5eef8ad
[2026-01-15T08:08:37.353Z] [BOT] ✅ Created forum post: 🏢 Apx – New Grad @ ORG_d5eef8ad in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:08:38.854Z] [BOT] 💾 Marked as posted: Apx – New Grad @ ORG_d5eef8ad (instance #1)
💾 BEFORE ARCHIVING: 1720 jobs in database
[2026-01-15T08:08:38.855Z] [BOT] ✅ No jobs to archive (all 1720 jobs within 7-day window)
[2026-01-15T08:08:38.866Z] [BOT] 💾 Saved posted_jobs.json: 1720 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:08:41.867Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T08:08:41.867Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_1295ec4f (posted within 7 days)
[2026-01-15T08:08:41.868Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_e65b7bf9-detail (posted within 7 days)
[2026-01-15T08:08:41.868Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_306ee084-detail (posted within 7 days)
[2026-01-15T08:08:41.868Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_3f3a2552-detail (posted within 7 days)
[2026-01-15T08:08:41.868Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_51d5c405 (posted within 7 days)
[2026-01-15T08:08:41.868Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_a72e555b-detail (posted within 7 days)
[2026-01-15T08:08:41.868Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_2fbe5c6f-detail (posted within 7 days)
[2026-01-15T08:08:41.868Z] [BOT] ⏭️  Skipping duplicate: JID_17d54577 (posted within 7 days)
[2026-01-15T08:08:41.868Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_12ecb01d (posted within 7 days)
[2026-01-15T08:08:41.869Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_7f933fd7 (posted within 7 days)
[2026-01-15T08:08:42.020Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[2026-01-15T08:08:42.193Z] [BOT] ✅ Saved pending queue: 2725 total (2705 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-15T08:08:42.194Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-15T08:08:42.254Z] [BOT] 📂 Loaded 3885 existing routing entries
[2026-01-15T08:08:42.314Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3895
[2026-01-15T08:08:42.314Z] [BOT] Timestamp: 2026-01-15T08:08:42.301Z
[2026-01-15T08:08:42.315Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 20
[2026-01-15T08:08:42.315Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-15T08:08:42.315Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
[2026-01-15T08:08:42.315Z] [BOT] Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 8 posts
     2. #🤖・ai-jobs: 5 posts
     3. #💻・tech-jobs: 4 posts
[2026-01-15T08:08:42.315Z] [BOT] 4. #🌧️・seattle: 2 posts
     5. #🩺・healthcare-jobs: 1 posts
[2026-01-15T08:08:42.315Z] [BOT] [STATS] Channel stats saved
[2026-01-15T08:08:44.334Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2414) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*