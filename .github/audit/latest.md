# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T07:53:51.687Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T07:53:05.391Z] ========================================
[2026-01-15T07:53:05.393Z] Discord Bot Execution Log
[2026-01-15T07:53:05.393Z] Environment: GitHub Actions
[2026-01-15T07:53:05.393Z] Node Version: v20.19.6
[2026-01-15T07:53:05.393Z] ========================================
[2026-01-15T07:53:05.393Z] Environment Variables Check:
[2026-01-15T07:53:05.393Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T07:53:05.393Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T07:53:05.393Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T07:53:05.393Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T07:53:05.393Z] 
Multi-Channel Configuration:
[2026-01-15T07:53:05.393Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T07:53:05.393Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T07:53:05.394Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T07:53:05.394Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T07:53:05.394Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T07:53:05.394Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T07:53:05.394Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T07:53:05.394Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T07:53:05.394Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T07:53:05.394Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T07:53:05.394Z] 
Data Files Check:
[2026-01-15T07:53:05.395Z] .github/data/new_jobs.json: ✅ Exists (10 items, 8763 bytes)
[2026-01-15T07:53:05.401Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 909377 bytes)
[2026-01-15T07:53:05.401Z] 
========================================
[2026-01-15T07:53:05.401Z] Starting Enhanced Discord Bot...
[2026-01-15T07:53:05.401Z] ========================================
[2026-01-15T07:53:05.931Z] [BOT] ✅ Loaded V2 database: 1699 jobs
[2026-01-15T07:53:06.457Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T07:53:06.458Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T07:53:06.458Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T07:53:06.574Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Backend Software Engineer Graduate at ByteDance
[2026-01-15T07:53:06.576Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T07:53:06.577Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T07:53:06.577Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T07:53:06.578Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T07:53:06.578Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-15T07:53:06.578Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T07:53:06.583Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-15T07:53:06.583Z] [BOT] 📍 [ROUTING] "Backend Software Engineer Graduate" @ ORG_08c9a13c
[2026-01-15T07:53:06.583Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:53:06.603Z] [BOT ERROR] (node:2398) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T07:53:06.762Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-15T07:53:06.762Z] [BOT] ✅ Industry: Backend Software Engineer Graduate @ ORG_08c9a13c
[2026-01-15T07:53:08.491Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate @ ORG_08c9a13c in #🌧️・seattle
[2026-01-15T07:53:08.491Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-15T07:53:09.992Z] [BOT] 💾 Marked as posted: Backend Software Engineer Graduate @ ORG_08c9a13c (instance #1)
[2026-01-15T07:53:09.992Z] [BOT] 💾 BEFORE ARCHIVING: 1700 jobs in database
[2026-01-15T07:53:09.994Z] [BOT] ✅ No jobs to archive (all 1700 jobs within 7-day window)
[2026-01-15T07:53:10.009Z] [BOT] 💾 Saved posted_jobs.json: 1700 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:53:10.010Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Ads Identity and Attribution Technology" @ ORG_1bb6fcfb
[2026-01-15T07:53:10.010Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:53:10.195Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Ads Identity and Attribution Technology @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-15T07:53:10.195Z] [BOT] ✅ Industry: Graduate Software Engineer - Ads Identity and Attribution Technology @ ORG_1bb6fcfb
[2026-01-15T07:53:12.060Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Ads Identity and Attribution Technology @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T07:53:13.560Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Ads Identity and Attribution Technology @ ORG_1bb6fcfb (instance #1)
[2026-01-15T07:53:13.561Z] [BOT] 💾 BEFORE ARCHIVING: 1701 jobs in database
[2026-01-15T07:53:13.562Z] [BOT] ✅ No jobs to archive (all 1701 jobs within 7-day window)
[2026-01-15T07:53:13.572Z] [BOT] 💾 Saved posted_jobs.json: 1701 active jobs
[2026-01-15T07:53:13.572Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:53:13.572Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Computational Imaging-Pico - 2026 Start" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:53:15.100Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Computational Imaging-Pico - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-15T07:53:15.100Z] [BOT] ✅ Industry: Research Scientist Graduate - Computational Imaging-Pico - 2026 Start @ ORG_08c9a13c
[2026-01-15T07:53:16.780Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Computational Imaging-Pico - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-15T07:53:16.780Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T07:53:18.281Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Computational Imaging-Pico - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-15T07:53:18.281Z] [BOT] 💾 BEFORE ARCHIVING: 1702 jobs in database
[2026-01-15T07:53:18.283Z] [BOT] ✅ No jobs to archive (all 1702 jobs within 7-day window)
[2026-01-15T07:53:18.295Z] [BOT] 💾 Saved posted_jobs.json: 1702 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:53:18.296Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Data Arch - E-commerce" @ ORG_1bb6fcfb
[2026-01-15T07:53:18.296Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:53:18.424Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Data Arch - E-commerce @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-15T07:53:18.424Z] [BOT] ✅ Industry: Software Engineer Graduate - Data Arch - E-commerce @ ORG_1bb6fcfb
[2026-01-15T07:53:20.098Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Data Arch - E-commerce @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T07:53:21.600Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Data Arch - E-commerce @ ORG_1bb6fcfb (instance #1)
[2026-01-15T07:53:21.600Z] [BOT] 💾 BEFORE ARCHIVING: 1703 jobs in database
[2026-01-15T07:53:21.602Z] [BOT] ✅ No jobs to archive (all 1703 jobs within 7-day window)
[2026-01-15T07:53:21.614Z] [BOT] 💾 Saved posted_jobs.json: 1703 active jobs
[2026-01-15T07:53:21.614Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:53:21.615Z] [BOT] 📍 [ROUTING] "Mobile Software Engineer Graduate - Product Infrastructure - 2026 Start" @ ORG_1bb6fcfb
[2026-01-15T07:53:21.615Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:53:21.842Z] [BOT] ✅ Created forum post: 🏢 Mobile Software Engineer Graduate - Product Infrastructure - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Mobile Software Engineer Graduate - Product Infrastructure - 2026 Start @ ORG_1bb6fcfb
[2026-01-15T07:53:23.638Z] [BOT] ✅ Created forum post: 🏢 Mobile Software Engineer Graduate - Product Infrastructure - 2026 Start @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T07:53:25.139Z] [BOT] 💾 Marked as posted: Mobile Software Engineer Graduate - Product Infrastructure - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2026-01-15T07:53:25.140Z] [BOT] 💾 BEFORE ARCHIVING: 1704 jobs in database
[2026-01-15T07:53:25.141Z] [BOT] ✅ No jobs to archive (all 1704 jobs within 7-day window)
[2026-01-15T07:53:25.153Z] [BOT] 💾 Saved posted_jobs.json: 1704 active jobs
[2026-01-15T07:53:25.153Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:53:25.153Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Ecommerce Recommendation - PhD" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:53:25.791Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-15T07:53:25.791Z] [BOT] ✅ Industry: Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c
[2026-01-15T07:53:27.479Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-15T07:53:27.479Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T07:53:28.980Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c (instance #1)
[2026-01-15T07:53:28.980Z] [BOT] 💾 BEFORE ARCHIVING: 1705 jobs in database
[2026-01-15T07:53:28.981Z] [BOT] ✅ No jobs to archive (all 1705 jobs within 7-day window)
[2026-01-15T07:53:28.992Z] [BOT] 💾 Saved posted_jobs.json: 1705 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:53:28.993Z] [BOT] 📍 [ROUTING] "Cyber Security Specialist - Data Analysis" @ ORG_f4398599
[2026-01-15T07:53:28.993Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:53:29.143Z] [BOT] ✅ Created forum post: 🏢 Cyber Security Specialist - Data Analysis @ ORG_f4398599 in #💻・tech-jobs
[2026-01-15T07:53:29.143Z] [BOT] ✅ Industry: Cyber Security Specialist - Data Analysis @ ORG_f4398599
[2026-01-15T07:53:30.764Z] [BOT] ✅ Created forum post: 🏢 Cyber Security Specialist - Data Analysis @ ORG_f4398599 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T07:53:32.264Z] [BOT] 💾 Marked as posted: Cyber Security Specialist - Data Analysis @ ORG_f4398599 (instance #1)
[2026-01-15T07:53:32.265Z] [BOT] 💾 BEFORE ARCHIVING: 1706 jobs in database
[2026-01-15T07:53:32.266Z] [BOT] ✅ No jobs to archive (all 1706 jobs within 7-day window)
[2026-01-15T07:53:32.277Z] [BOT] 💾 Saved posted_jobs.json: 1706 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:53:32.277Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Database Technologies" @ ORG_dc7620eb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:53:32.454Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Database Technologies @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Undergrad Software Engineer - Database Technologies @ ORG_dc7620eb
[2026-01-15T07:53:34.222Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Database Technologies @ ORG_dc7620eb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T07:53:35.723Z] [BOT] 💾 Marked as posted: Undergrad Software Engineer - Database Technologies @ ORG_dc7620eb (instance #1)
[2026-01-15T07:53:35.723Z] [BOT] 💾 BEFORE ARCHIVING: 1707 jobs in database
[2026-01-15T07:53:35.724Z] [BOT] ✅ No jobs to archive (all 1707 jobs within 7-day window)
[2026-01-15T07:53:35.734Z] [BOT] 💾 Saved posted_jobs.json: 1707 active jobs
[2026-01-15T07:53:35.734Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:53:38.735Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-15T07:53:38.735Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T07:53:38.983Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-15T07:53:38.983Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb
[2026-01-15T07:53:40.813Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-15T07:53:40.813Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T07:53:42.314Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb (instance #1)
[2026-01-15T07:53:42.314Z] [BOT] 💾 BEFORE ARCHIVING: 1708 jobs in database
[2026-01-15T07:53:42.315Z] [BOT] ✅ No jobs to archive (all 1708 jobs within 7-day window)
[2026-01-15T07:53:42.325Z] [BOT] 💾 Saved posted_jobs.json: 1708 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:53:42.326Z] [BOT] 📍 [ROUTING] "Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems" @ ORG_08c9a13c
[2026-01-15T07:53:42.326Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T07:53:42.482Z] [BOT] ✅ Created forum post: 🏢 Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-15T07:53:42.482Z] [BOT] ✅ Industry: Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c
[2026-01-15T07:53:44.116Z] [BOT] ✅ Created forum post: 🏢 Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c in #🌧️・seattle
[2026-01-15T07:53:44.117Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-15T07:53:45.618Z] [BOT] 💾 Marked as posted: Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c (instance #1)
[2026-01-15T07:53:45.618Z] [BOT] 💾 BEFORE ARCHIVING: 1709 jobs in database
[2026-01-15T07:53:45.619Z] [BOT] ✅ No jobs to archive (all 1709 jobs within 7-day window)
[2026-01-15T07:53:45.632Z] [BOT] 💾 Saved posted_jobs.json: 1709 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:53:48.633Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T07:53:48.634Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_c7570dd0-detail (posted within 7 days)
[2026-01-15T07:53:48.634Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a09627a9 (posted within 7 days)
[2026-01-15T07:53:48.634Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_465e7f86 (posted within 7 days)
[2026-01-15T07:53:48.634Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_cd9c7613-detail (posted within 7 days)
[2026-01-15T07:53:48.634Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_c16dfb5c (posted within 7 days)
[2026-01-15T07:53:48.635Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f5d2e34c (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_858b23ef-detail (posted within 7 days)
[2026-01-15T07:53:48.635Z] [BOT] ⏭️  Skipping duplicate: JID_90a61d75-cx_1-job-29720 (posted within 7 days)
[2026-01-15T07:53:48.635Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_3e33cebe-detail (posted within 7 days)
[2026-01-15T07:53:48.635Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-305298 (posted within 7 days)
[2026-01-15T07:53:48.750Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[2026-01-15T07:53:48.914Z] [BOT] ✅ Saved pending queue: 2725 total (2705 pending, 10 enriched, 10 posted)
[2026-01-15T07:53:48.914Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T07:53:48.970Z] [BOT] 📂 Loaded 3875 existing routing entries
[2026-01-15T07:53:49.032Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3885
[2026-01-15T07:53:49.032Z] [BOT] Timestamp: 2026-01-15T07:53:49.016Z
[2026-01-15T07:53:49.033Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T07:53:49.033Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-15T07:53:49.033Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 5
   Top channels:
[2026-01-15T07:53:49.033Z] [BOT] 1. #💻・tech-jobs: 8 posts
     2. #🌉・san-francisco: 7 posts
     3. #🌧️・seattle: 2 posts
     4. #🤖・ai-jobs: 2 posts
[2026-01-15T07:53:49.033Z] [BOT] 5. #💻・remote-usa: 1 posts
[2026-01-15T07:53:49.033Z] [BOT] [STATS] Channel stats saved
[2026-01-15T07:53:51.059Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2398) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*