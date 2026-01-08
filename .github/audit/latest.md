# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T02:41:21.176Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 17
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T02:41:00.350Z] ========================================
[2026-01-08T02:41:00.352Z] Discord Bot Execution Log
[2026-01-08T02:41:00.352Z] Environment: GitHub Actions
[2026-01-08T02:41:00.352Z] Node Version: v20.19.6
[2026-01-08T02:41:00.352Z] ========================================
[2026-01-08T02:41:00.352Z] Environment Variables Check:
[2026-01-08T02:41:00.352Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T02:41:00.353Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T02:41:00.353Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T02:41:00.353Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T02:41:00.353Z] 
Multi-Channel Configuration:
[2026-01-08T02:41:00.353Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T02:41:00.353Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T02:41:00.353Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T02:41:00.353Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T02:41:00.353Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T02:41:00.353Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T02:41:00.354Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T02:41:00.354Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T02:41:00.354Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T02:41:00.354Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T02:41:00.354Z] 
Data Files Check:
[2026-01-08T02:41:00.355Z] .github/data/new_jobs.json: ✅ Exists (10 items, 82091 bytes)
[2026-01-08T02:41:00.360Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 756055 bytes)
[2026-01-08T02:41:00.360Z] 
========================================
[2026-01-08T02:41:00.360Z] Starting Enhanced Discord Bot...
[2026-01-08T02:41:00.361Z] ========================================
[2026-01-08T02:41:00.915Z] [BOT] ✅ Loaded V2 database: 1467 jobs
[2026-01-08T02:41:01.637Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T02:41:01.637Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T02:41:01.637Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T02:41:01.642Z] [BOT] ✅ Loaded pending queue: 144 total (124 pending, 20 enriched, 0 posted)
[2026-01-08T02:41:01.642Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Security GRC Specialist, Customer Trust Lead at anthropic
[2026-01-08T02:41:01.644Z] [BOT] ⏭️  Skipping duplicate: JID_049d09e3-pnw_req451478 (posted within 7 days)
[2026-01-08T02:41:01.644Z] [BOT] ⏭️ Skipping already posted: Research Analyst - Pnw at Jones Lang LaSalle (JLL)
[2026-01-08T02:41:01.644Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_54c2d808-_r10218502 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Level - Space Systems at Northrop Grumman
[2026-01-08T02:41:01.645Z] [BOT] ⏭️  Skipping duplicate: JID_1d09d870-sre_r-233208 (posted within 7 days)
[2026-01-08T02:41:01.645Z] [BOT] ⏭️ Skipping already posted: ROLE_06bb8f8e at Amgen
[2026-01-08T02:41:01.645Z] [BOT] ⏭️  Skipping duplicate: JID_1980d06d-external_careers-JID_ff8193b5-engineer_r50546 (posted within 7 days)
⏭️ Skipping already posted: C++ Software Engineer at Cadence Design Systems
⏭️  Skipping duplicate: JID_805eae31 (posted within 7 days)
⏭️ Skipping already posted: Early Career Talent - Data Engineer at Western Digital
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_9d76ad12-quality_r10218213 (posted within 7 days)
[2026-01-08T02:41:01.645Z] [BOT] ⏭️ Skipping already posted: Quality Engineer - Principal Quality Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_6a6f08a0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_e06b3b02 at Accenture
[2026-01-08T02:41:01.645Z] [BOT] ⏭️  Skipping duplicate: JID_fb1c39ec (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder Frameworks at Twitch
[2026-01-08T02:41:01.646Z] [BOT] ⏭️  Skipping duplicate: JID_c08a3b17 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Integrations at Pinwheel
[2026-01-08T02:41:01.646Z] [BOT] ⏭️  Skipping duplicate: JID_8bbaf901 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ed4792d at Critical Mass
[2026-01-08T02:41:01.646Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23248 (posted within 7 days)
[2026-01-08T02:41:01.646Z] [BOT] ⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
[2026-01-08T02:41:01.646Z] [BOT] ⏭️  Skipping duplicate: JID_3255e497-i_r-48234 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BCBST
[2026-01-08T02:41:01.646Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ed66d9b6-intelligence_jr2025489368 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Artificial Intelligence at The Boeing Company
[2026-01-08T02:41:01.646Z] [BOT] ⏭️  Skipping duplicate: JID_6730b1ec (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Yext
[2026-01-08T02:41:01.646Z] [BOT] ⏭️  Skipping duplicate: JID_960dfdf4-technology_r2521966 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6422b763 at Medline
[2026-01-08T02:41:01.647Z] [BOT] ⏭️  Skipping duplicate: JID_b1904fca-_r-48456 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Aws at The Travelers Companies
⏭️  Skipping duplicate: JID_b6bd5678 (posted within 7 days)
[2026-01-08T02:41:01.647Z] [BOT] ⏭️ Skipping already posted: Software Engineer – Entry Level at General Dynamics Mission Systems
📬 Found 3 new jobs (17 already posted)...
[2026-01-08T02:41:01.647Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2026-01-08T02:41:01.647Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-08T02:41:01.648Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-08T02:41:01.648Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T02:41:01.648Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-08T02:41:01.650Z] [BOT] 📍 [ROUTING] "Security GRC Specialist, Customer Trust Lead" @ anthropic
[2026-01-08T02:41:01.650Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-08T02:41:01.651Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-08T02:41:01.655Z] [BOT ERROR] (node:3520) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T02:41:01.917Z] [BOT] ✅ Created forum post: 🏢 Security GRC Specialist, Customer Trust Lead @ anthropic in #🤖・ai-jobs
[2026-01-08T02:41:01.917Z] [BOT] ✅ Industry: Security GRC Specialist, Customer Trust Lead @ anthropic
[2026-01-08T02:41:03.938Z] [BOT] ✅ Created forum post: 🏢 Security GRC Specialist, Customer Trust Lead @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-08T02:41:05.439Z] [BOT] 💾 Marked as posted: Security GRC Specialist, Customer Trust Lead @ anthropic (instance #1)
[2026-01-08T02:41:05.439Z] [BOT] 💾 BEFORE ARCHIVING: 1468 jobs in database
[2026-01-08T02:41:05.441Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T02:41:05.445Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
✅ Archiving complete: 1 archived, 1467 active
[2026-01-08T02:41:05.456Z] [BOT] 💾 Saved posted_jobs.json: 1467 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T02:41:05.456Z] [BOT] 📍 [ROUTING] "Associate Machine Learning Engineer" @ T-Mobile
[2026-01-08T02:41:05.457Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-08T02:41:05.715Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ T-Mobile in #🤖・ai-jobs
[2026-01-08T02:41:05.715Z] [BOT] ✅ Industry: Associate Machine Learning Engineer @ T-Mobile
[2026-01-08T02:41:07.371Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ T-Mobile in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-08T02:41:08.872Z] [BOT] 💾 Marked as posted: Associate Machine Learning Engineer @ T-Mobile (instance #1)
[2026-01-08T02:41:08.873Z] [BOT] 💾 BEFORE ARCHIVING: 1468 jobs in database
[2026-01-08T02:41:08.874Z] [BOT] ✅ No jobs to archive (all 1468 jobs within 7-day window)
[2026-01-08T02:41:08.886Z] [BOT] 💾 Saved posted_jobs.json: 1468 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T02:41:11.887Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-08T02:41:11.889Z] [BOT] 📍 [ROUTING] "Data and Integrations Analyst" @ ORG_bbc2f785
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-08T02:41:11.889Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-08T02:41:11.889Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-08T02:41:12.208Z] [BOT] ✅ Created forum post: 🏢 Data and Integrations Analyst @ ORG_bbc2f785 in #📈・JID_fb739488
  ✅ Industry: Data and Integrations Analyst @ ORG_bbc2f785
[2026-01-08T02:41:13.896Z] [BOT] ✅ Created forum post: 🏢 Data and Integrations Analyst @ ORG_bbc2f785 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-08T02:41:15.397Z] [BOT] 💾 Marked as posted: Data and Integrations Analyst @ ORG_bbc2f785 (instance #1)
[2026-01-08T02:41:15.397Z] [BOT] 💾 BEFORE ARCHIVING: 1469 jobs in database
[2026-01-08T02:41:15.398Z] [BOT] ✅ No jobs to archive (all 1469 jobs within 7-day window)
[2026-01-08T02:41:15.410Z] [BOT] 💾 Saved posted_jobs.json: 1469 active jobs
[2026-01-08T02:41:15.410Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T02:41:18.411Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-08T02:41:18.411Z] [BOT] ⏭️  Skipping duplicate: JID_eef78c7a (posted within 7 days)
[2026-01-08T02:41:18.411Z] [BOT] ⏭️  Skipping duplicate: JID_62d2699c-engineer_req329855-1 (posted within 7 days)
[2026-01-08T02:41:18.411Z] [BOT] ⏭️  Skipping duplicate: JID_fce86b06 (posted within 7 days)
[2026-01-08T02:41:18.419Z] [BOT] ✅ Loaded pending queue: 144 total (124 pending, 20 enriched, 0 posted)
[2026-01-08T02:41:18.429Z] [BOT] ✅ Saved pending queue: 144 total (124 pending, 17 enriched, 3 posted)
[2026-01-08T02:41:18.429Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T02:41:18.494Z] [BOT] 📂 Loaded 2408 existing routing entries
[2026-01-08T02:41:18.549Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-01-08T02:41:18.549Z] [BOT] Total entries: 2411
   Timestamp: 2026-01-08T02:41:18.538Z
[2026-01-08T02:41:18.550Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
   Total attempts: 23
   Successful: 6
[2026-01-08T02:41:18.550Z] [BOT] Failed: 0
   Skipped: 17
[2026-01-08T02:41:18.550Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-08T02:41:18.550Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 5
   Top channels:
     1. #🤖・ai-jobs: 2 posts
[2026-01-08T02:41:18.550Z] [BOT] 2. #🌉・san-francisco: 1 posts
     3. #🌧️・seattle: 1 posts
     4. #📈・JID_fb739488: 1 posts
     5. #💻・remote-usa: 1 posts
[2026-01-08T02:41:18.550Z] [BOT] [STATS] Channel stats saved
[2026-01-08T02:41:20.564Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3520) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*