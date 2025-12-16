# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T06:25:48.492Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T06:24:57.725Z] ========================================
[2025-12-16T06:24:57.727Z] Discord Bot Execution Log
[2025-12-16T06:24:57.727Z] Environment: GitHub Actions
[2025-12-16T06:24:57.727Z] Node Version: v20.19.6
[2025-12-16T06:24:57.728Z] ========================================
[2025-12-16T06:24:57.728Z] Environment Variables Check:
[2025-12-16T06:24:57.728Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T06:24:57.728Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T06:24:57.728Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T06:24:57.728Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T06:24:57.728Z] 
Multi-Channel Configuration:
[2025-12-16T06:24:57.728Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T06:24:57.728Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T06:24:57.728Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T06:24:57.728Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T06:24:57.729Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T06:24:57.729Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T06:24:57.729Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T06:24:57.729Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T06:24:57.729Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T06:24:57.729Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T06:24:57.729Z] 
Data Files Check:
[2025-12-16T06:24:57.730Z] .github/data/new_jobs.json: ✅ Exists (10 items, 32208 bytes)
[2025-12-16T06:24:57.731Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 194597 bytes)
[2025-12-16T06:24:57.731Z] 
========================================
[2025-12-16T06:24:57.731Z] Starting Enhanced Discord Bot...
[2025-12-16T06:24:57.731Z] ========================================
[2025-12-16T06:24:58.235Z] [BOT] ✅ Loaded V2 database: 305 jobs
[2025-12-16T06:24:59.055Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T06:24:59.055Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T06:24:59.055Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T06:24:59.056Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T06:24:59.120Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T06:24:59.186Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T06:24:59.188Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T06:24:59.188Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T06:24:59.189Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T06:24:59.189Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T06:24:59.190Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T06:24:59.194Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-16T06:24:59.195Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar - Experimental Ultrahigh Energy Neutrino - PUEO Experiment" @ ORG_478e100e University
[2025-12-16T06:24:59.195Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-16T06:24:59.212Z] [BOT ERROR] (node:2339) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T06:24:59.410Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Experimental Ultrahigh Energy Neutrino - PUEO Experiment @ ORG_478e100e Unive in #📁・JID_e938df7b
  ✅ Industry: Postdoctoral Scholar - Experimental Ultrahigh Energy Neutrino - PUEO Experiment @ ORG_478e100e University
[2025-12-16T06:25:01.544Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Experimental Ultrahigh Energy Neutrino - PUEO Experiment @ ORG_478e100e Unive in #🌆・chicago
[2025-12-16T06:25:01.544Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-16T06:25:03.044Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar - Experimental Ultrahigh Energy Neutrino - PUEO Experiment @ ORG_478e100e University (instance #1)
[2025-12-16T06:25:03.045Z] [BOT] 💾 BEFORE ARCHIVING: 306 jobs in database
[2025-12-16T06:25:03.045Z] [BOT] ✅ No jobs to archive (all 306 jobs within 7-day window)
[2025-12-16T06:25:03.052Z] [BOT] 💾 Saved posted_jobs.json: 306 active jobs
[2025-12-16T06:25:03.052Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:25:06.053Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-16T06:25:06.054Z] [BOT] 📍 [ROUTING] "GNC Simulation Engineer 1" @ ORG_68339b13 Space
[2025-12-16T06:25:06.054Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:25:06.276Z] [BOT] ✅ Created forum post: 🏢 GNC Simulation Engineer 1 @ ORG_68339b13 Space in #💻・tech-jobs
[2025-12-16T06:25:06.276Z] [BOT] ✅ Industry: GNC Simulation Engineer 1 @ ORG_68339b13 Space
[2025-12-16T06:25:07.989Z] [BOT] ✅ Created forum post: 🏢 GNC Simulation Engineer 1 @ ORG_68339b13 Space in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-16T06:25:09.489Z] [BOT] 💾 Marked as posted: GNC Simulation Engineer 1 @ ORG_68339b13 Space (instance #1)
[2025-12-16T06:25:09.490Z] [BOT] 💾 BEFORE ARCHIVING: 307 jobs in database
[2025-12-16T06:25:09.490Z] [BOT] ✅ No jobs to archive (all 307 jobs within 7-day window)
[2025-12-16T06:25:09.495Z] [BOT] 💾 Saved posted_jobs.json: 307 active jobs
[2025-12-16T06:25:09.495Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:25:09.496Z] [BOT] 📍 [ROUTING] "Associate Software Engineer in Test" @ ORG_d0ca1d93 Systems
[2025-12-16T06:25:09.496Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:25:09.832Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer in Test @ ORG_d0ca1d93 Systems in #💻・tech-jobs
[2025-12-16T06:25:09.832Z] [BOT] ✅ Industry: Associate Software Engineer in Test @ ORG_d0ca1d93 Systems
[2025-12-16T06:25:11.633Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer in Test @ ORG_d0ca1d93 Systems in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-16T06:25:13.133Z] [BOT] 💾 Marked as posted: Associate Software Engineer in Test @ ORG_d0ca1d93 Systems (instance #1)
[2025-12-16T06:25:13.133Z] [BOT] 💾 BEFORE ARCHIVING: 308 jobs in database
[2025-12-16T06:25:13.134Z] [BOT] ✅ No jobs to archive (all 308 jobs within 7-day window)
[2025-12-16T06:25:13.138Z] [BOT] 💾 Saved posted_jobs.json: 308 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T06:25:13.138Z] [BOT] 📍 [ROUTING] "Software Engineer & Computer Science – Recent Grad/Full Time" @ ORG_7a23266b
[2025-12-16T06:25:13.138Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:25:13.395Z] [BOT] ✅ Created forum post: 🏢 Software Engineer & Computer Science – Recent Grad/Full Time @ ORG_7a23266b in #💻・tech-jobs
  ✅ Industry: Software Engineer & Computer Science – Recent Grad/Full Time @ ORG_7a23266b
[2025-12-16T06:25:14.896Z] [BOT] 💾 Marked as posted: Software Engineer & Computer Science – Recent Grad/Full Time @ ORG_7a23266b (instance #1)
[2025-12-16T06:25:14.896Z] [BOT] 💾 BEFORE ARCHIVING: 309 jobs in database
[2025-12-16T06:25:14.896Z] [BOT] ✅ No jobs to archive (all 309 jobs within 7-day window)
[2025-12-16T06:25:14.900Z] [BOT] 💾 Saved posted_jobs.json: 309 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T06:25:14.900Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model Speech Multimodal Interactions" @ ORG_08c9a13c
[2025-12-16T06:25:14.900Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:25:15.082Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Foundation Model Speech Multimodal Interactions @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Research Scientist Graduate - Foundation Model Speech Multimodal Interactions @ ORG_08c9a13c
[2025-12-16T06:25:16.884Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Foundation Model Speech Multimodal Interactions @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T06:25:18.386Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Foundation Model Speech Multimodal Interactions @ ORG_08c9a13c (instance #1)
[2025-12-16T06:25:18.386Z] [BOT] 💾 BEFORE ARCHIVING: 310 jobs in database
[2025-12-16T06:25:18.387Z] [BOT] ✅ No jobs to archive (all 310 jobs within 7-day window)
[2025-12-16T06:25:18.391Z] [BOT] 💾 Saved posted_jobs.json: 310 active jobs
[2025-12-16T06:25:18.391Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:25:21.392Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-16T06:25:21.392Z] [BOT] 📍 [ROUTING] "Graduate Leadership Program - AI Strategy - Solutions & Automation Track" @ ORG_b2822ace
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T06:25:21.392Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T06:25:21.632Z] [BOT] ✅ Created forum post: 🏢 Graduate Leadership Program - AI Strategy - Solutions & Automation Track @ ORG_b2822ace in #🤖・ai-jobs
  ✅ Industry: Graduate Leadership Program - AI Strategy - Solutions & Automation Track @ ORG_b2822ace
[2025-12-16T06:25:23.348Z] [BOT] ✅ Created forum post: 🏢 Graduate Leadership Program - AI Strategy - Solutions & Automation Track @ ORG_b2822ace in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-16T06:25:24.849Z] [BOT] 💾 Marked as posted: Graduate Leadership Program - AI Strategy - Solutions & Automation Track @ ORG_b2822ace (instance #1)
[2025-12-16T06:25:24.850Z] [BOT] 💾 BEFORE ARCHIVING: 311 jobs in database
[2025-12-16T06:25:24.850Z] [BOT] ✅ No jobs to archive (all 311 jobs within 7-day window)
[2025-12-16T06:25:24.854Z] [BOT] 💾 Saved posted_jobs.json: 311 active jobs
[2025-12-16T06:25:24.854Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:25:24.854Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T06:25:25.275Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_75e8f5ac in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_08c9a13c
[2025-12-16T06:25:26.975Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_75e8f5ac in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T06:25:28.475Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_08c9a13c (instance #1)
[2025-12-16T06:25:28.475Z] [BOT] 💾 BEFORE ARCHIVING: 312 jobs in database
[2025-12-16T06:25:28.475Z] [BOT] ✅ No jobs to archive (all 312 jobs within 7-day window)
[2025-12-16T06:25:28.479Z] [BOT] 💾 Saved posted_jobs.json: 312 active jobs
[2025-12-16T06:25:28.479Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:25:28.479Z] [BOT] 📍 [ROUTING] "Full Stack Developer" @ ORG_23325912 Global
   Category: AI (matched: "machine learning")
[2025-12-16T06:25:28.479Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T06:25:28.808Z] [BOT] ✅ Created forum post: 🏢 Full Stack Developer @ ORG_23325912 Global in #🤖・ai-jobs
[2025-12-16T06:25:28.808Z] [BOT] ✅ Industry: Full Stack Developer @ ORG_23325912 Global
[2025-12-16T06:25:30.618Z] [BOT] ✅ Created forum post: 🏢 Full Stack Developer @ ORG_23325912 Global in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T06:25:32.120Z] [BOT] 💾 Marked as posted: Full Stack Developer @ ORG_23325912 Global (instance #1)
[2025-12-16T06:25:32.120Z] [BOT] 💾 BEFORE ARCHIVING: 313 jobs in database
[2025-12-16T06:25:32.120Z] [BOT] ✅ No jobs to archive (all 313 jobs within 7-day window)
[2025-12-16T06:25:32.125Z] [BOT] 💾 Saved posted_jobs.json: 313 active jobs
[2025-12-16T06:25:32.125Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:25:35.125Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-16T06:25:35.125Z] [BOT] 📍 [ROUTING] "2026 BNY Analyst Program-Engineering - Data Science" @ ORG_b344d80e Bank of New York Mellon
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T06:25:35.327Z] [BOT] ✅ Created forum post: 🏢 2026 BNY Analyst Program-Engineering - Data Science @ ORG_b344d80e Bank of New York Mellon in #📈・JID_fb739488
  ✅ Industry: 2026 BNY Analyst Program-Engineering - Data Science @ ORG_b344d80e Bank of New York Mellon
[2025-12-16T06:25:37.046Z] [BOT] ✅ Created forum post: 🏢 2026 BNY Analyst Program-Engineering - Data Science @ ORG_b344d80e Bank of New York Mellon in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-16T06:25:38.546Z] [BOT] 💾 Marked as posted: 2026 BNY Analyst Program-Engineering - Data Science @ ORG_b344d80e Bank of New York Mellon (instance #1)
[2025-12-16T06:25:38.546Z] [BOT] 💾 BEFORE ARCHIVING: 314 jobs in database
[2025-12-16T06:25:38.546Z] [BOT] ✅ No jobs to archive (all 314 jobs within 7-day window)
[2025-12-16T06:25:38.550Z] [BOT] 💾 Saved posted_jobs.json: 314 active jobs
[2025-12-16T06:25:38.550Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:25:38.550Z] [BOT] 📍 [ROUTING] "Research and Data Analyst - Strategic - Defense & Shareholder Advisory Team" @ ORG_803260c7
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-16T06:25:38.550Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T06:25:38.862Z] [BOT] ✅ Created forum post: 🏢 Research and Data Analyst - Strategic - Defense & Shareholder Advisory Team @ ORG_803260c7 in #📈・JID_fb739488
[2025-12-16T06:25:38.862Z] [BOT] ✅ Industry: Research and Data Analyst - Strategic - Defense & Shareholder Advisory Team @ ORG_803260c7
[2025-12-16T06:25:40.585Z] [BOT] ✅ Created forum post: 🏢 Research and Data Analyst - Strategic - Defense & Shareholder Advisory Team @ ORG_803260c7 in #🗽・new-york
[2025-12-16T06:25:40.586Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-16T06:25:42.087Z] [BOT] 💾 Marked as posted: Research and Data Analyst - Strategic - Defense & Shareholder Advisory Team @ ORG_803260c7 (instance #1)
[2025-12-16T06:25:42.087Z] [BOT] 💾 BEFORE ARCHIVING: 315 jobs in database
[2025-12-16T06:25:42.088Z] [BOT] ✅ No jobs to archive (all 315 jobs within 7-day window)
[2025-12-16T06:25:42.091Z] [BOT] 💾 Saved posted_jobs.json: 315 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T06:25:45.092Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T06:25:45.093Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_ca1c6dd8-experiment_req_0000043392-2 (posted within 7 days)
[2025-12-16T06:25:45.093Z] [BOT] ⏭️  Skipping duplicate: JID_9861af75 (posted within 7 days)
[2025-12-16T06:25:45.093Z] [BOT] ⏭️  Skipping duplicate: JID_1e36024d (posted within 7 days)
⏭️  Skipping duplicate: JID_38e07217 (posted within 7 days)
[2025-12-16T06:25:45.093Z] [BOT] ⏭️  Skipping duplicate: JID_f7293039 (posted within 7 days)
[2025-12-16T06:25:45.093Z] [BOT] ⏭️  Skipping duplicate: JID_5cc5ba5b (posted within 7 days)
[2025-12-16T06:25:45.093Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_96109f8a-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_0f40ceab (posted within 7 days)
[2025-12-16T06:25:45.093Z] [BOT] ⏭️  Skipping duplicate: JID_40e7d34f (posted within 7 days)
[2025-12-16T06:25:45.093Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_4beb9e59-detail (posted within 7 days)
[2025-12-16T06:25:45.097Z] [BOT] ✅ Loaded pending queue: 573 total (553 pending, 20 enriched, 0 posted)
[2025-12-16T06:25:45.105Z] [BOT] ✅ Saved pending queue: 573 total (553 pending, 10 enriched, 10 posted)
[2025-12-16T06:25:45.105Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T06:25:45.145Z] [BOT] 📂 Loaded 294 existing routing entries
[2025-12-16T06:25:45.183Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 304
[2025-12-16T06:25:45.183Z] [BOT] Timestamp: 2025-12-16T06:25:45.181Z
[2025-12-16T06:25:45.183Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T06:25:45.183Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2025-12-16T06:25:47.195Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2339) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*