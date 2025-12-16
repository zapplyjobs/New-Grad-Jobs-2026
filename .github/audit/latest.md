# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T08:25:15.188Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T08:24:32.249Z] ========================================
[2025-12-16T08:24:32.251Z] Discord Bot Execution Log
[2025-12-16T08:24:32.251Z] Environment: GitHub Actions
[2025-12-16T08:24:32.252Z] Node Version: v20.19.6
[2025-12-16T08:24:32.252Z] ========================================
[2025-12-16T08:24:32.252Z] Environment Variables Check:
[2025-12-16T08:24:32.252Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T08:24:32.252Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T08:24:32.252Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T08:24:32.252Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T08:24:32.252Z] 
Multi-Channel Configuration:
[2025-12-16T08:24:32.252Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T08:24:32.252Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T08:24:32.253Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T08:24:32.253Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T08:24:32.253Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T08:24:32.253Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T08:24:32.253Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T08:24:32.253Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T08:24:32.253Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T08:24:32.253Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T08:24:32.253Z] 
Data Files Check:
[2025-12-16T08:24:32.254Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7359 bytes)
[2025-12-16T08:24:32.255Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 238012 bytes)
[2025-12-16T08:24:32.255Z] 
========================================
[2025-12-16T08:24:32.255Z] Starting Enhanced Discord Bot...
[2025-12-16T08:24:32.255Z] ========================================
[2025-12-16T08:24:32.789Z] [BOT] ✅ Loaded V2 database: 385 jobs
[2025-12-16T08:24:33.480Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T08:24:33.480Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T08:24:33.480Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T08:24:33.481Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T08:24:33.535Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T08:24:33.605Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 197
[2025-12-16T08:24:33.607Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T08:24:33.607Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T08:24:33.607Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T08:24:33.608Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-16T08:24:33.608Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T08:24:33.613Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2025-12-16T08:24:33.614Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Conversational AI" @ ORG_08c9a13c
[2025-12-16T08:24:33.614Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T08:24:33.631Z] [BOT ERROR] (node:2680) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T08:24:33.836Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c
[2025-12-16T08:24:35.493Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T08:24:36.994Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c (instance #1)
[2025-12-16T08:24:36.994Z] [BOT] 💾 BEFORE ARCHIVING: 386 jobs in database
[2025-12-16T08:24:36.994Z] [BOT] ✅ No jobs to archive (all 386 jobs within 7-day window)
[2025-12-16T08:24:37.002Z] [BOT] 💾 Saved posted_jobs.json: 386 active jobs
[2025-12-16T08:24:37.002Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:24:37.003Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Multiple Teams" @ ORG_08c9a13c
[2025-12-16T08:24:37.003Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T08:24:37.169Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-16T08:24:37.169Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c
[2025-12-16T08:24:38.836Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c in #🌧️・seattle
[2025-12-16T08:24:38.836Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-16T08:24:40.336Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c (instance #1)
[2025-12-16T08:24:40.337Z] [BOT] 💾 BEFORE ARCHIVING: 387 jobs in database
[2025-12-16T08:24:40.337Z] [BOT] ✅ No jobs to archive (all 387 jobs within 7-day window)
[2025-12-16T08:24:40.341Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T08:24:40.341Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS" @ ORG_08c9a13c
[2025-12-16T08:24:40.341Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T08:24:40.341Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T08:24:40.604Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-16T08:24:40.604Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ORG_08c9a13c
[2025-12-16T08:24:44.039Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T08:24:45.539Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ORG_08c9a13c (instance #1)
[2025-12-16T08:24:45.540Z] [BOT] 💾 BEFORE ARCHIVING: 388 jobs in database
[2025-12-16T08:24:45.540Z] [BOT] ✅ No jobs to archive (all 388 jobs within 7-day window)
[2025-12-16T08:24:45.545Z] [BOT] 💾 Saved posted_jobs.json: 388 active jobs
[2025-12-16T08:24:45.545Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:24:45.545Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ORG_08c9a13c (instance #1)
[2025-12-16T08:24:45.545Z] [BOT] 💾 BEFORE ARCHIVING: 389 jobs in database
[2025-12-16T08:24:45.545Z] [BOT] ✅ No jobs to archive (all 389 jobs within 7-day window)
[2025-12-16T08:24:45.549Z] [BOT] 💾 Saved posted_jobs.json: 389 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T08:24:45.550Z] [BOT] 📍 [ROUTING] "Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start" @ ORG_08c9a13c
[2025-12-16T08:24:45.550Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T08:24:45.755Z] [BOT] ✅ Created forum post: 🏢 Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start @ ORG_08c9a13c
[2025-12-16T08:24:47.393Z] [BOT] ✅ Created forum post: 🏢 Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T08:24:48.894Z] [BOT] 💾 Marked as posted: Research Scientist in Generative AI Graduate - Intelligent Creation - 2026 Start @ ORG_08c9a13c (instance #1)
[2025-12-16T08:24:48.894Z] [BOT] 💾 BEFORE ARCHIVING: 390 jobs in database
[2025-12-16T08:24:48.894Z] [BOT] ✅ No jobs to archive (all 390 jobs within 7-day window)
[2025-12-16T08:24:48.898Z] [BOT] 💾 Saved posted_jobs.json: 390 active jobs
[2025-12-16T08:24:48.898Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:24:51.898Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-16T08:24:51.899Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Ecommerce Recommendation - PhD" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:24:52.060Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c
[2025-12-16T08:24:53.816Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T08:24:55.318Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c (instance #1)
[2025-12-16T08:24:55.318Z] [BOT] 💾 BEFORE ARCHIVING: 391 jobs in database
[2025-12-16T08:24:55.318Z] [BOT] ✅ No jobs to archive (all 391 jobs within 7-day window)
[2025-12-16T08:24:55.323Z] [BOT] 💾 Saved posted_jobs.json: 391 active jobs
[2025-12-16T08:24:55.323Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:24:55.324Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD）" @ ORG_08c9a13c
[2025-12-16T08:24:55.324Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:24:55.534Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD） @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD） @ ORG_08c9a13c
[2025-12-16T08:24:57.547Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD） @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T08:24:59.049Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Foundation Model-Multimodal - 2026 Start（PhD） @ ORG_08c9a13c (instance #1)
[2025-12-16T08:24:59.049Z] [BOT] 💾 BEFORE ARCHIVING: 392 jobs in database
[2025-12-16T08:24:59.049Z] [BOT] ✅ No jobs to archive (all 392 jobs within 7-day window)
[2025-12-16T08:24:59.054Z] [BOT] 💾 Saved posted_jobs.json: 392 active jobs
[2025-12-16T08:24:59.054Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Development Engineer Graduate - SDN Traffic Intelligence & Control" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2025-12-16T08:24:59.054Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:24:59.277Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer Graduate - SDN Traffic Intelligence & Control @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Development Engineer Graduate - SDN Traffic Intelligence & Control @ ORG_08c9a13c
[2025-12-16T08:25:01.027Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer Graduate - SDN Traffic Intelligence & Control @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T08:25:02.529Z] [BOT] 💾 Marked as posted: Software Development Engineer Graduate - SDN Traffic Intelligence & Control @ ORG_08c9a13c (instance #1)
[2025-12-16T08:25:02.529Z] [BOT] 💾 BEFORE ARCHIVING: 393 jobs in database
[2025-12-16T08:25:02.529Z] [BOT] ✅ No jobs to archive (all 393 jobs within 7-day window)
[2025-12-16T08:25:02.533Z] [BOT] 💾 Saved posted_jobs.json: 393 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T08:25:02.534Z] [BOT] 📍 [ROUTING] "Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:25:02.669Z] [BOT] ✅ Created forum post: 🏢 Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS @ ORG_08c9a13c in #💻・tech-jobs
[2025-12-16T08:25:02.669Z] [BOT] ✅ Industry: Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS @ ORG_08c9a13c
[2025-12-16T08:25:04.632Z] [BOT] ✅ Created forum post: 🏢 Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS @ ORG_08c9a13c in #🌧️・seattle
[2025-12-16T08:25:04.632Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-16T08:25:06.133Z] [BOT] 💾 Marked as posted: Frontend Software Engineer Graduate - Global E-commerce - 2026 Start - BS/MS @ ORG_08c9a13c (instance #1)
[2025-12-16T08:25:06.133Z] [BOT] 💾 BEFORE ARCHIVING: 394 jobs in database
[2025-12-16T08:25:06.133Z] [BOT] ✅ No jobs to archive (all 394 jobs within 7-day window)
[2025-12-16T08:25:06.138Z] [BOT] 💾 Saved posted_jobs.json: 394 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T08:25:06.138Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start" @ ORG_08c9a13c
[2025-12-16T08:25:06.138Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:25:06.282Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c
[2025-12-16T08:25:08.004Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-16T08:25:09.505Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c (instance #1)
[2025-12-16T08:25:09.506Z] [BOT] 💾 BEFORE ARCHIVING: 395 jobs in database
[2025-12-16T08:25:09.506Z] [BOT] ✅ No jobs to archive (all 395 jobs within 7-day window)
[2025-12-16T08:25:09.510Z] [BOT] 💾 Saved posted_jobs.json: 395 active jobs
[2025-12-16T08:25:09.510Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:25:12.511Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-16T08:25:12.511Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_ed332800-detail (posted within 7 days)
[2025-12-16T08:25:12.511Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_fc928a70-detail (posted within 7 days)
[2025-12-16T08:25:12.511Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_54578dbe-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_939e32e4-detail (posted within 7 days)
[2025-12-16T08:25:12.512Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_05246c05-detail (posted within 7 days)
[2025-12-16T08:25:12.512Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_6d5dc855-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_b81708ef-detail (posted within 7 days)
[2025-12-16T08:25:12.512Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_a9aa0f74-detail (posted within 7 days)
[2025-12-16T08:25:12.513Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_9b71f9e2-detail (posted within 7 days)
[2025-12-16T08:25:12.515Z] [BOT] ✅ Loaded pending queue: 498 total (478 pending, 20 enriched, 0 posted)
[2025-12-16T08:25:12.521Z] [BOT] ✅ Saved pending queue: 498 total (478 pending, 11 enriched, 9 posted)
[2025-12-16T08:25:12.521Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T08:25:12.560Z] [BOT] 📂 Loaded 372 existing routing entries
[2025-12-16T08:25:12.599Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2025-12-16T08:25:12.600Z] [BOT] Total entries: 381
   Timestamp: 2025-12-16T08:25:12.598Z
[2025-12-16T08:25:12.600Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T08:25:12.600Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2025-12-16T08:25:14.611Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2680) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*