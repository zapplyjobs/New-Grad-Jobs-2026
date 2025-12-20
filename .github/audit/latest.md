# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T19:23:05.656Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T19:22:22.572Z] ========================================
[2025-12-20T19:22:22.574Z] Discord Bot Execution Log
[2025-12-20T19:22:22.574Z] Environment: GitHub Actions
[2025-12-20T19:22:22.574Z] Node Version: v20.19.6
[2025-12-20T19:22:22.574Z] ========================================
[2025-12-20T19:22:22.575Z] Environment Variables Check:
[2025-12-20T19:22:22.575Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T19:22:22.575Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T19:22:22.575Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T19:22:22.575Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T19:22:22.575Z] 
Multi-Channel Configuration:
[2025-12-20T19:22:22.575Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T19:22:22.575Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T19:22:22.575Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T19:22:22.575Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T19:22:22.575Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T19:22:22.575Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T19:22:22.575Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T19:22:22.576Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T19:22:22.576Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T19:22:22.576Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T19:22:22.576Z] 
Data Files Check:
[2025-12-20T19:22:22.576Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7127 bytes)
[2025-12-20T19:22:22.579Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 381254 bytes)
[2025-12-20T19:22:22.579Z] 
========================================
[2025-12-20T19:22:22.579Z] Starting Enhanced Discord Bot...
[2025-12-20T19:22:22.579Z] ========================================
[2025-12-20T19:22:23.100Z] [BOT] ✅ Loaded V2 database: 647 jobs
[2025-12-20T19:22:23.797Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T19:22:23.797Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T19:22:23.798Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T19:22:23.798Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T19:22:23.845Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-20T19:22:23.890Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 47
[2025-12-20T19:22:23.892Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T19:22:23.893Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T19:22:23.893Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T19:22:23.893Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-20T19:22:23.894Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T19:22:23.899Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2025-12-20T19:22:23.900Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start" @ ORG_1bb6fcfb
[2025-12-20T19:22:23.900Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:22:23.917Z] [BOT ERROR] (node:2308) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T19:22:24.122Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T19:22:24.122Z] [BOT] ✅ Industry: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ ORG_1bb6fcfb
[2025-12-20T19:22:25.959Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-20T19:22:25.960Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T19:22:27.459Z] [BOT] 💾 Marked as posted: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:22:27.460Z] [BOT] 💾 BEFORE ARCHIVING: 648 jobs in database
[2025-12-20T19:22:27.461Z] [BOT] ✅ No jobs to archive (all 648 jobs within 7-day window)
[2025-12-20T19:22:27.476Z] [BOT] 💾 Saved posted_jobs.json: 648 active jobs
[2025-12-20T19:22:27.476Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:22:27.476Z] [BOT] 💾 Marked as posted: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - San Jose @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:22:27.476Z] [BOT] 💾 BEFORE ARCHIVING: 649 jobs in database
[2025-12-20T19:22:27.477Z] [BOT] ✅ No jobs to archive (all 649 jobs within 7-day window)
[2025-12-20T19:22:27.484Z] [BOT] 💾 Saved posted_jobs.json: 649 active jobs
[2025-12-20T19:22:27.484Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:22:27.485Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Multiple Teams" @ ORG_1bb6fcfb
[2025-12-20T19:22:27.485Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:22:27.697Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T19:22:27.697Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb
[2025-12-20T19:22:29.625Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T19:22:31.126Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:22:31.127Z] [BOT] 💾 BEFORE ARCHIVING: 650 jobs in database
[2025-12-20T19:22:31.127Z] [BOT] ✅ No jobs to archive (all 650 jobs within 7-day window)
[2025-12-20T19:22:31.133Z] [BOT] 💾 Saved posted_jobs.json: 650 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T19:22:31.133Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Scientist - Global E-commerce Content Recommendation" @ ORG_1bb6fcfb
[2025-12-20T19:22:31.134Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T19:22:31.134Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:22:31.485Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T19:22:31.485Z] [BOT] ✅ Industry: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb
[2025-12-20T19:22:33.428Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #🌧️・seattle
[2025-12-20T19:22:33.428Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-20T19:22:34.929Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:22:34.929Z] [BOT] 💾 BEFORE ARCHIVING: 651 jobs in database
[2025-12-20T19:22:34.930Z] [BOT] ✅ No jobs to archive (all 651 jobs within 7-day window)
[2025-12-20T19:22:34.936Z] [BOT] 💾 Saved posted_jobs.json: 651 active jobs
[2025-12-20T19:22:34.936Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:22:34.938Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD" @ ORG_1bb6fcfb
[2025-12-20T19:22:34.938Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:22:35.151Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T19:22:35.152Z] [BOT] ✅ Industry: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ ORG_1bb6fcfb
[2025-12-20T19:22:37.021Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ ORG_1bb6fcfb in #🌧️・seattle
[2025-12-20T19:22:37.021Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-20T19:22:38.522Z] [BOT] 💾 Marked as posted: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start - PhD @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:22:38.522Z] [BOT] 💾 BEFORE ARCHIVING: 652 jobs in database
[2025-12-20T19:22:38.523Z] [BOT] ✅ No jobs to archive (all 652 jobs within 7-day window)
[2025-12-20T19:22:38.529Z] [BOT] 💾 Saved posted_jobs.json: 652 active jobs
[2025-12-20T19:22:38.529Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:22:38.530Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Monetization Technology - GenAI" @ ORG_1bb6fcfb
[2025-12-20T19:22:38.530Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:22:38.746Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Monetization Technology - GenAI @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Monetization Technology - GenAI @ ORG_1bb6fcfb
[2025-12-20T19:22:40.619Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Monetization Technology - GenAI @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T19:22:42.119Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Monetization Technology - GenAI @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:22:42.120Z] [BOT] 💾 BEFORE ARCHIVING: 653 jobs in database
[2025-12-20T19:22:42.120Z] [BOT] ✅ No jobs to archive (all 653 jobs within 7-day window)
[2025-12-20T19:22:42.126Z] [BOT] 💾 Saved posted_jobs.json: 653 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T19:22:42.126Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2025-12-20T19:22:42.126Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:22:42.451Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb
[2025-12-20T19:22:44.166Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T19:22:45.666Z] [BOT] 💾 Marked as posted: Graduate Engineer - Machine Learning - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:22:45.667Z] [BOT] 💾 BEFORE ARCHIVING: 654 jobs in database
[2025-12-20T19:22:45.667Z] [BOT] ✅ No jobs to archive (all 654 jobs within 7-day window)
[2025-12-20T19:22:45.679Z] [BOT] 💾 Saved posted_jobs.json: 654 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T19:22:48.680Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-20T19:22:48.681Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Multiple Teams" @ ORG_1bb6fcfb
   Category: TECH (default)
[2025-12-20T19:22:48.681Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T19:22:48.969Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Multiple Teams @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-20T19:22:48.969Z] [BOT] ✅ Industry: Graduate Research Scientist - Multiple Teams @ ORG_1bb6fcfb
[2025-12-20T19:22:50.677Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Multiple Teams @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T19:22:52.178Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Multiple Teams @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:22:52.179Z] [BOT] 💾 BEFORE ARCHIVING: 655 jobs in database
[2025-12-20T19:22:52.179Z] [BOT] ✅ No jobs to archive (all 655 jobs within 7-day window)
[2025-12-20T19:22:52.186Z] [BOT] 💾 Saved posted_jobs.json: 655 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T19:22:52.186Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist Graphics Engine" @ ORG_1bb6fcfb
   Category: TECH (default)
[2025-12-20T19:22:52.186Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T19:22:52.376Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist Graphics Engine @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Graduate Research Scientist Graphics Engine @ ORG_1bb6fcfb
[2025-12-20T19:22:54.109Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist Graphics Engine @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-20T19:22:54.109Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T19:22:55.610Z] [BOT] 💾 Marked as posted: Graduate Research Scientist Graphics Engine @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:22:55.610Z] [BOT] 💾 BEFORE ARCHIVING: 656 jobs in database
[2025-12-20T19:22:55.611Z] [BOT] ✅ No jobs to archive (all 656 jobs within 7-day window)
[2025-12-20T19:22:55.618Z] [BOT] 💾 Saved posted_jobs.json: 656 active jobs
[2025-12-20T19:22:55.618Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:22:55.619Z] [BOT] 📍 [ROUTING] "General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD" @ ORG_1bb6fcfb
[2025-12-20T19:22:55.619Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T19:22:55.907Z] [BOT] ✅ Created forum post: 🏢 General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD  in #💻・tech-jobs
[2025-12-20T19:22:55.907Z] [BOT] ✅ Industry: General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD @ ORG_1bb6fcfb
[2025-12-20T19:22:57.815Z] [BOT] ✅ Created forum post: 🏢 General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD  in #🌉・san-francisco
[2025-12-20T19:22:57.816Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T19:22:59.316Z] [BOT] 💾 Marked as posted: General Hire – Research Scientist Graduate - Tiktok Recommendation-Next Gen Recommendation - PhD @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:22:59.316Z] [BOT] 💾 BEFORE ARCHIVING: 657 jobs in database
[2025-12-20T19:22:59.317Z] [BOT] ✅ No jobs to archive (all 657 jobs within 7-day window)
[2025-12-20T19:22:59.326Z] [BOT] 💾 Saved posted_jobs.json: 657 active jobs
[2025-12-20T19:22:59.326Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:23:02.327Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-20T19:23:02.327Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_eb27688f (posted within 7 days)
[2025-12-20T19:23:02.327Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a1cbb331 (posted within 7 days)
[2025-12-20T19:23:02.327Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_1c0a49b5 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_e6896b47 (posted within 7 days)
[2025-12-20T19:23:02.327Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_850f3060 (posted within 7 days)
[2025-12-20T19:23:02.327Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_e19e810b (posted within 7 days)
[2025-12-20T19:23:02.328Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_c70b6a26 (posted within 7 days)
[2025-12-20T19:23:02.328Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_1e0a24cf (posted within 7 days)
[2025-12-20T19:23:02.328Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_3e9658ab (posted within 7 days)
[2025-12-20T19:23:02.330Z] [BOT] ✅ Loaded pending queue: 293 total (273 pending, 20 enriched, 0 posted)
[2025-12-20T19:23:02.334Z] [BOT] ✅ Saved pending queue: 293 total (273 pending, 11 enriched, 9 posted)
[2025-12-20T19:23:02.334Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T19:23:02.376Z] [BOT] 📂 Loaded 726 existing routing entries
[2025-12-20T19:23:02.420Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2025-12-20T19:23:02.421Z] [BOT] Total entries: 735
   Timestamp: 2025-12-20T19:23:02.416Z
[2025-12-20T19:23:02.421Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
   Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2025-12-20T19:23:02.421Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-20T19:23:02.422Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 4
   Top channels:
     1. #🌉・san-francisco: 7 posts
     2. #🤖・ai-jobs: 6 posts
[2025-12-20T19:23:02.422Z] [BOT] 3. #💻・tech-jobs: 3 posts
     4. #🌧️・seattle: 2 posts
[2025-12-20T19:23:02.422Z] [BOT] [STATS] Channel stats saved
[2025-12-20T19:23:04.434Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2308) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*