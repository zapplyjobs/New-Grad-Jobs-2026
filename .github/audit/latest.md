# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T06:45:31.500Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T06:44:47.472Z] ========================================
[2025-12-16T06:44:47.474Z] Discord Bot Execution Log
[2025-12-16T06:44:47.474Z] Environment: GitHub Actions
[2025-12-16T06:44:47.474Z] Node Version: v20.19.6
[2025-12-16T06:44:47.474Z] ========================================
[2025-12-16T06:44:47.474Z] Environment Variables Check:
[2025-12-16T06:44:47.475Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T06:44:47.475Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T06:44:47.475Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T06:44:47.475Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T06:44:47.475Z] 
Multi-Channel Configuration:
[2025-12-16T06:44:47.475Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T06:44:47.475Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T06:44:47.475Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T06:44:47.475Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T06:44:47.475Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T06:44:47.475Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T06:44:47.476Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T06:44:47.476Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T06:44:47.476Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T06:44:47.476Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T06:44:47.476Z] 
Data Files Check:
[2025-12-16T06:44:47.476Z] .github/data/new_jobs.json: ✅ Exists (10 items, 8225 bytes)
[2025-12-16T06:44:47.478Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 200670 bytes)
[2025-12-16T06:44:47.478Z] 
========================================
[2025-12-16T06:44:47.478Z] Starting Enhanced Discord Bot...
[2025-12-16T06:44:47.478Z] ========================================
[2025-12-16T06:44:47.994Z] [BOT] ✅ Loaded V2 database: 315 jobs
[2025-12-16T06:44:48.496Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T06:44:48.497Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T06:44:48.497Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T06:44:48.497Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T06:44:48.555Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T06:44:48.620Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T06:44:48.622Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T06:44:48.623Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T06:44:48.623Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T06:44:48.623Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T06:44:48.624Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T06:44:48.628Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2025-12-16T06:44:48.629Z] [BOT] 📍 [ROUTING] "Backend Software Engineer Graduate" @ ORG_08c9a13c
[2025-12-16T06:44:48.629Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:44:48.646Z] [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T06:44:48.756Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Backend Software Engineer Graduate @ ORG_08c9a13c
[2025-12-16T06:44:50.415Z] [BOT] ✅ Created forum post: 🏢 Backend Software Engineer Graduate @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T06:44:51.915Z] [BOT] 💾 Marked as posted: Backend Software Engineer Graduate @ ORG_08c9a13c (instance #1)
[2025-12-16T06:44:51.916Z] [BOT] 💾 BEFORE ARCHIVING: 316 jobs in database
[2025-12-16T06:44:51.916Z] [BOT] ✅ No jobs to archive (all 316 jobs within 7-day window)
[2025-12-16T06:44:51.924Z] [BOT] 💾 Saved posted_jobs.json: 316 active jobs
[2025-12-16T06:44:51.924Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Graduate Software Engineer - Ads Identity and Attribution Technology" @ ORG_1bb6fcfb
[2025-12-16T06:44:51.924Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:44:52.066Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Ads Identity and Attribution Technology @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-16T06:44:52.066Z] [BOT] ✅ Industry: Graduate Software Engineer - Ads Identity and Attribution Technology @ ORG_1bb6fcfb
[2025-12-16T06:44:53.737Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Ads Identity and Attribution Technology @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T06:44:55.237Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Ads Identity and Attribution Technology @ ORG_1bb6fcfb (instance #1)
[2025-12-16T06:44:55.237Z] [BOT] 💾 BEFORE ARCHIVING: 317 jobs in database
✅ No jobs to archive (all 317 jobs within 7-day window)
[2025-12-16T06:44:55.241Z] [BOT] 💾 Saved posted_jobs.json: 317 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T06:44:55.241Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Computational Imaging-Pico - 2026 Start" @ ORG_08c9a13c
[2025-12-16T06:44:55.241Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:44:55.444Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Computational Imaging-Pico - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Research Scientist Graduate - Computational Imaging-Pico - 2026 Start @ ORG_08c9a13c
[2025-12-16T06:44:57.179Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Computational Imaging-Pico - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T06:44:58.680Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Computational Imaging-Pico - 2026 Start @ ORG_08c9a13c (instance #1)
[2025-12-16T06:44:58.680Z] [BOT] 💾 BEFORE ARCHIVING: 318 jobs in database
[2025-12-16T06:44:58.680Z] [BOT] ✅ No jobs to archive (all 318 jobs within 7-day window)
[2025-12-16T06:44:58.684Z] [BOT] 💾 Saved posted_jobs.json: 318 active jobs
[2025-12-16T06:44:58.684Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:44:58.685Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Data Arch - E-commerce" @ ORG_1bb6fcfb
[2025-12-16T06:44:58.685Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:44:58.828Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Data Arch - E-commerce @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-16T06:44:58.829Z] [BOT] ✅ Industry: Software Engineer Graduate - Data Arch - E-commerce @ ORG_1bb6fcfb
[2025-12-16T06:45:00.452Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Data Arch - E-commerce @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-16T06:45:00.452Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T06:45:01.953Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Data Arch - E-commerce @ ORG_1bb6fcfb (instance #1)
[2025-12-16T06:45:01.953Z] [BOT] 💾 BEFORE ARCHIVING: 319 jobs in database
[2025-12-16T06:45:01.954Z] [BOT] ✅ No jobs to archive (all 319 jobs within 7-day window)
[2025-12-16T06:45:01.957Z] [BOT] 💾 Saved posted_jobs.json: 319 active jobs
[2025-12-16T06:45:01.958Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:45:01.958Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Ecommerce Recommendation - PhD" @ ORG_08c9a13c
[2025-12-16T06:45:01.958Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:45:02.108Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c in #💻・tech-jobs
[2025-12-16T06:45:02.109Z] [BOT] ✅ Industry: Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c
[2025-12-16T06:45:03.803Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-16T06:45:03.804Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T06:45:05.304Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c (instance #1)
[2025-12-16T06:45:05.304Z] [BOT] 💾 BEFORE ARCHIVING: 320 jobs in database
[2025-12-16T06:45:05.305Z] [BOT] ✅ No jobs to archive (all 320 jobs within 7-day window)
[2025-12-16T06:45:05.309Z] [BOT] 💾 Saved posted_jobs.json: 320 active jobs
[2025-12-16T06:45:05.309Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:45:05.309Z] [BOT] 📍 [ROUTING] "Cyber Security Specialist - Data Analysis" @ ORG_f4398599
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:45:05.864Z] [BOT] ✅ Created forum post: 🏢 Cyber Security Specialist - Data Analysis @ ORG_f4398599 in #💻・tech-jobs
  ✅ Industry: Cyber Security Specialist - Data Analysis @ ORG_f4398599
[2025-12-16T06:45:07.731Z] [BOT] ✅ Created forum post: 🏢 Cyber Security Specialist - Data Analysis @ ORG_f4398599 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T06:45:09.231Z] [BOT] 💾 Marked as posted: Cyber Security Specialist - Data Analysis @ ORG_f4398599 (instance #1)
[2025-12-16T06:45:09.231Z] [BOT] 💾 BEFORE ARCHIVING: 321 jobs in database
[2025-12-16T06:45:09.231Z] [BOT] ✅ No jobs to archive (all 321 jobs within 7-day window)
[2025-12-16T06:45:09.235Z] [BOT] 💾 Saved posted_jobs.json: 321 active jobs
[2025-12-16T06:45:09.235Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:45:09.235Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Database Technologies" @ ORG_dc7620eb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:45:09.376Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Database Technologies @ ORG_dc7620eb in #💻・tech-jobs
[2025-12-16T06:45:09.376Z] [BOT] ✅ Industry: Undergrad Software Engineer - Database Technologies @ ORG_dc7620eb
[2025-12-16T06:45:11.069Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Database Technologies @ ORG_dc7620eb in #🌉・san-francisco
[2025-12-16T06:45:11.069Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T06:45:12.570Z] [BOT] 💾 Marked as posted: Undergrad Software Engineer - Database Technologies @ ORG_dc7620eb (instance #1)
[2025-12-16T06:45:12.571Z] [BOT] 💾 BEFORE ARCHIVING: 322 jobs in database
[2025-12-16T06:45:12.572Z] [BOT] ✅ No jobs to archive (all 322 jobs within 7-day window)
[2025-12-16T06:45:12.575Z] [BOT] 💾 Saved posted_jobs.json: 322 active jobs
[2025-12-16T06:45:12.575Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:45:15.576Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-16T06:45:15.577Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T06:45:15.770Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb
[2025-12-16T06:45:17.477Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T06:45:18.977Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb (instance #1)
[2025-12-16T06:45:18.977Z] [BOT] 💾 BEFORE ARCHIVING: 323 jobs in database
[2025-12-16T06:45:18.978Z] [BOT] ✅ No jobs to archive (all 323 jobs within 7-day window)
[2025-12-16T06:45:18.982Z] [BOT] 💾 Saved posted_jobs.json: 323 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T06:45:18.982Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T06:45:19.148Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_75e8f5ac in #🤖・ai-jobs
[2025-12-16T06:45:19.148Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_08c9a13c
[2025-12-16T06:45:20.822Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_75e8f5ac in #🌧️・seattle
[2025-12-16T06:45:20.822Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-16T06:45:22.321Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_08c9a13c (instance #1)
[2025-12-16T06:45:22.321Z] [BOT] 💾 BEFORE ARCHIVING: 324 jobs in database
[2025-12-16T06:45:22.322Z] [BOT] ✅ No jobs to archive (all 324 jobs within 7-day window)
[2025-12-16T06:45:22.325Z] [BOT] 💾 Saved posted_jobs.json: 324 active jobs
[2025-12-16T06:45:22.326Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:45:22.326Z] [BOT] 📍 [ROUTING] "Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems" @ ORG_08c9a13c
[2025-12-16T06:45:22.326Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T06:45:22.492Z] [BOT] ✅ Created forum post: 🏢 Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-16T06:45:22.492Z] [BOT] ✅ Industry: Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c
[2025-12-16T06:45:24.303Z] [BOT] ✅ Created forum post: 🏢 Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T06:45:25.804Z] [BOT] 💾 Marked as posted: Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c (instance #1)
[2025-12-16T06:45:25.805Z] [BOT] 💾 BEFORE ARCHIVING: 325 jobs in database
[2025-12-16T06:45:25.805Z] [BOT] ✅ No jobs to archive (all 325 jobs within 7-day window)
[2025-12-16T06:45:25.809Z] [BOT] 💾 Saved posted_jobs.json: 325 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T06:45:28.809Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T06:45:28.809Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_c7570dd0-detail (posted within 7 days)
[2025-12-16T06:45:28.809Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a09627a9 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_465e7f86 (posted within 7 days)
[2025-12-16T06:45:28.809Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_cd9c7613-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_c16dfb5c (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_3f602652-detail (posted within 7 days)
[2025-12-16T06:45:28.809Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_858b23ef-detail (posted within 7 days)
[2025-12-16T06:45:28.810Z] [BOT] ⏭️  Skipping duplicate: JID_90a61d75-cx_1-job-29720 (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_3e33cebe-detail (posted within 7 days)
[2025-12-16T06:45:28.810Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-305298 (posted within 7 days)
[2025-12-16T06:45:28.813Z] [BOT] ✅ Loaded pending queue: 563 total (543 pending, 20 enriched, 0 posted)
[2025-12-16T06:45:28.821Z] [BOT] ✅ Saved pending queue: 563 total (543 pending, 10 enriched, 10 posted)
[2025-12-16T06:45:28.821Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T06:45:28.860Z] [BOT] 📂 Loaded 304 existing routing entries
[2025-12-16T06:45:28.899Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 314
[2025-12-16T06:45:28.899Z] [BOT] Timestamp: 2025-12-16T06:45:28.897Z
[2025-12-16T06:45:28.899Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
   Total attempts: 20
   Successful: 20
[2025-12-16T06:45:28.899Z] [BOT] Failed: 0
   Skipped: 0
[2025-12-16T06:45:30.910Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*