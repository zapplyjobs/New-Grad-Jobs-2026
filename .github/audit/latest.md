# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T04:12:52.614Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 13
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T04:12:20.517Z] ========================================
[2026-01-12T04:12:20.519Z] Discord Bot Execution Log
[2026-01-12T04:12:20.519Z] Environment: GitHub Actions
[2026-01-12T04:12:20.519Z] Node Version: v20.19.6
[2026-01-12T04:12:20.519Z] ========================================
[2026-01-12T04:12:20.520Z] Environment Variables Check:
[2026-01-12T04:12:20.520Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T04:12:20.520Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T04:12:20.520Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T04:12:20.520Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T04:12:20.520Z] 
Multi-Channel Configuration:
[2026-01-12T04:12:20.520Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T04:12:20.520Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T04:12:20.520Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T04:12:20.520Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T04:12:20.520Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T04:12:20.521Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T04:12:20.521Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T04:12:20.521Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T04:12:20.521Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T04:12:20.521Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T04:12:20.521Z] 
Data Files Check:
[2026-01-12T04:12:20.522Z] .github/data/new_jobs.json: ✅ Exists (10 items, 63515 bytes)
[2026-01-12T04:12:20.524Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 220463 bytes)
[2026-01-12T04:12:20.524Z] 
========================================
[2026-01-12T04:12:20.524Z] Starting Enhanced Discord Bot...
[2026-01-12T04:12:20.524Z] ========================================
[2026-01-12T04:12:21.054Z] [BOT] ✅ Loaded V2 database: 388 jobs
[2026-01-12T04:12:22.122Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T04:12:22.122Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T04:12:22.122Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T04:12:22.135Z] [BOT] ✅ Loaded pending queue: 270 total (250 pending, 20 enriched, 0 posted)
[2026-01-12T04:12:22.135Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Behavior Technician at Autism Spectrum Therapies
[2026-01-12T04:12:22.136Z] [BOT] ⏭️  Skipping duplicate: JID_60f42868-i_1199912-1 (posted within 7 days)
[2026-01-12T04:12:22.136Z] [BOT] ⏭️ Skipping already posted: Systems/Software Engineer 1 at Hewlett Packard Enterprise
[2026-01-12T04:12:22.137Z] [BOT] ⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 1: ROLE_e67deec4 at Oscar Health
[2026-01-12T04:12:22.137Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_530e45ae-ut_r10218884 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer / Software Engineer at Northrop Grumman
[2026-01-12T04:12:22.137Z] [BOT] ⏭️  Skipping duplicate: JID_cee4f149-_r58467 (posted within 7 days)
⏭️ Skipping already posted: Software Development Engineer 1 - Early Career at Blue Origin
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_8f908b75-scientist_r160656 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
⏭️  Skipping duplicate: JID_b87a4832 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Graduate at Distyl AI
⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
⏭️ Skipping already posted: Applied Safety Research Engineer, Safeguards at anthropic
⏭️  Skipping duplicate: JID_33d25482 (posted within 7 days)
[2026-01-12T04:12:22.138Z] [BOT] ⏭️ Skipping already posted: Configuration Analyst 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_3a61670d (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Microsoft
⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - AI Video Agent at OpusClip
⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Claude Experiences at anthropic
[2026-01-12T04:12:22.138Z] [BOT] ⏭️  Skipping duplicate: JID_cdd1fa58 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Launches at anthropic
⏭️  Skipping duplicate: JID_a44e73ca-6078923_13942107 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
📬 Found 7 new jobs (13 already posted)...
[2026-01-12T04:12:22.138Z] [BOT] 📋 After blacklist filter: 7 jobs (0 blacklisted)
[2026-01-12T04:12:22.138Z] [BOT] 📋 After data quality filter: 7 jobs (0 invalid)
[2026-01-12T04:12:22.139Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-01-12T04:12:22.139Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer @ Accenture: mountain view, sf
   - Associate Machine Learning Engineer @ PitchBook: nyc, seattle
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
[2026-01-12T04:12:22.139Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T04:12:22.144Z] [BOT] 📌 Posting 2 jobs to #🩺・healthcare-jobs
[2026-01-12T04:12:22.144Z] [BOT] 📍 [ROUTING] "Behavior Technician" @ ORG_ae93f25d Spectrum Therapies
[2026-01-12T04:12:22.145Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-12T04:12:22.162Z] [BOT ERROR] (node:3251) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T04:12:22.380Z] [BOT] ✅ Created forum post: 🏢 Behavior Technician @ ORG_ae93f25d Spectrum Therapies in #🩺・healthcare-jobs
[2026-01-12T04:12:22.380Z] [BOT] ✅ Industry: Behavior Technician @ ORG_ae93f25d Spectrum Therapies
[2026-01-12T04:12:24.274Z] [BOT] ✅ Created forum post: 🏢 Behavior Technician @ ORG_ae93f25d Spectrum Therapies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-12T04:12:25.775Z] [BOT] 💾 Marked as posted: Behavior Technician @ ORG_ae93f25d Spectrum Therapies (instance #1)
[2026-01-12T04:12:25.775Z] [BOT] 💾 BEFORE ARCHIVING: 389 jobs in database
[2026-01-12T04:12:25.776Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T04:12:25.777Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-12T04:12:25.777Z] [BOT] ✅ Archiving complete: 2 archived, 387 active
[2026-01-12T04:12:25.781Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T04:12:25.781Z] [BOT] 📍 [ROUTING] "Licensed Practical Nurse - LPN" @ ORG_0b38b24a
[2026-01-12T04:12:25.781Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-12T04:12:26.158Z] [BOT] ✅ Created forum post: 🏢 Licensed Practical Nurse - LPN @ ORG_0b38b24a in #🩺・healthcare-jobs
[2026-01-12T04:12:26.158Z] [BOT] ✅ Industry: Licensed Practical Nurse - LPN @ ORG_0b38b24a
[2026-01-12T04:12:27.862Z] [BOT] ✅ Created forum post: 🏢 Licensed Practical Nurse - LPN @ ORG_0b38b24a in #💻・remote-usa
[2026-01-12T04:12:27.862Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-12T04:12:29.362Z] [BOT] 💾 Marked as posted: Licensed Practical Nurse - LPN @ ORG_0b38b24a (instance #1)
[2026-01-12T04:12:29.363Z] [BOT] 💾 BEFORE ARCHIVING: 388 jobs in database
[2026-01-12T04:12:29.363Z] [BOT] ✅ No jobs to archive (all 388 jobs within 7-day window)
[2026-01-12T04:12:29.366Z] [BOT] 💾 Saved posted_jobs.json: 388 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T04:12:32.367Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-12T04:12:32.368Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_6cd9e83c
[2026-01-12T04:12:32.368Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T04:12:32.599Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_6cd9e83c in #🤖・ai-jobs
[2026-01-12T04:12:32.600Z] [BOT] ✅ Industry: Software Engineer @ ORG_6cd9e83c
[2026-01-12T04:12:34.319Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_6cd9e83c in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-12T04:12:35.820Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_6cd9e83c (instance #1)
[2026-01-12T04:12:35.820Z] [BOT] 💾 BEFORE ARCHIVING: 389 jobs in database
[2026-01-12T04:12:35.821Z] [BOT] ✅ No jobs to archive (all 389 jobs within 7-day window)
[2026-01-12T04:12:35.824Z] [BOT] 💾 Saved posted_jobs.json: 389 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T04:12:35.825Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_6cd9e83c (instance #1)
[2026-01-12T04:12:35.825Z] [BOT] 💾 BEFORE ARCHIVING: 390 jobs in database
[2026-01-12T04:12:35.825Z] [BOT] ✅ No jobs to archive (all 390 jobs within 7-day window)
[2026-01-12T04:12:35.828Z] [BOT] 💾 Saved posted_jobs.json: 390 active jobs
[2026-01-12T04:12:35.829Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T04:12:35.829Z] [BOT] 📍 [ROUTING] "Associate Machine Learning Engineer" @ ORG_7a291dc3
[2026-01-12T04:12:35.830Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-12T04:12:36.135Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_7a291dc3 in #🤖・ai-jobs
  ✅ Industry: Associate Machine Learning Engineer @ ORG_7a291dc3
[2026-01-12T04:12:37.873Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_7a291dc3 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T04:12:39.374Z] [BOT] 💾 Marked as posted: Associate Machine Learning Engineer @ ORG_7a291dc3 (instance #1)
[2026-01-12T04:12:39.375Z] [BOT] 💾 BEFORE ARCHIVING: 391 jobs in database
[2026-01-12T04:12:39.375Z] [BOT] ✅ No jobs to archive (all 391 jobs within 7-day window)
[2026-01-12T04:12:39.379Z] [BOT] 💾 Saved posted_jobs.json: 391 active jobs
[2026-01-12T04:12:39.379Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Associate Machine Learning Engineer @ ORG_7a291dc3 (instance #1)
[2026-01-12T04:12:39.379Z] [BOT] 💾 BEFORE ARCHIVING: 392 jobs in database
[2026-01-12T04:12:39.380Z] [BOT] ✅ No jobs to archive (all 392 jobs within 7-day window)
[2026-01-12T04:12:39.383Z] [BOT] 💾 Saved posted_jobs.json: 392 active jobs
[2026-01-12T04:12:39.383Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T04:12:42.384Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-12T04:12:42.385Z] [BOT] 📍 [ROUTING] "Financial Crimes Data Analyst 1" @ ORG_dca96eca Whitney
[2026-01-12T04:12:42.385Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-12T04:12:42.848Z] [BOT] ✅ Created forum post: 🏢 Financial Crimes Data Analyst 1 @ ORG_dca96eca Whitney in #📈・JID_fb739488
[2026-01-12T04:12:42.848Z] [BOT] ✅ Industry: Financial Crimes Data Analyst 1 @ ORG_dca96eca Whitney
[2026-01-12T04:12:44.655Z] [BOT] ✅ Created forum post: 🏢 Financial Crimes Data Analyst 1 @ ORG_dca96eca Whitney in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-12T04:12:46.157Z] [BOT] 💾 Marked as posted: Financial Crimes Data Analyst 1 @ ORG_dca96eca Whitney (instance #1)
[2026-01-12T04:12:46.157Z] [BOT] 💾 BEFORE ARCHIVING: 393 jobs in database
[2026-01-12T04:12:46.157Z] [BOT] ✅ No jobs to archive (all 393 jobs within 7-day window)
[2026-01-12T04:12:46.162Z] [BOT] 💾 Saved posted_jobs.json: 393 active jobs
[2026-01-12T04:12:46.162Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T04:12:49.163Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-01-12T04:12:49.163Z] [BOT] ⏭️  Skipping duplicate: JID_a4f51df1 (posted within 7 days)
[2026-01-12T04:12:49.163Z] [BOT] ⏭️  Skipping duplicate: JID_fb576dac (posted within 7 days)
⏭️  Skipping duplicate: JID_a44e73ca-6078916_13942102 (posted within 7 days)
[2026-01-12T04:12:49.163Z] [BOT] ⏭️  Skipping duplicate: JID_bc80fdc0 (posted within 7 days)
[2026-01-12T04:12:49.163Z] [BOT] ⏭️  Skipping duplicate: JID_1fec24fe-1_r016047 (posted within 7 days)
[2026-01-12T04:12:49.177Z] [BOT] ✅ Loaded pending queue: 270 total (250 pending, 20 enriched, 0 posted)
[2026-01-12T04:12:49.199Z] [BOT] ✅ Saved pending queue: 270 total (250 pending, 15 enriched, 5 posted)
[2026-01-12T04:12:49.203Z] [BOT] 📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T04:12:49.253Z] [BOT] 📂 Loaded 2550 existing routing entries
[2026-01-12T04:12:49.315Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-01-12T04:12:49.316Z] [BOT] Total entries: 2555
   Timestamp: 2026-01-12T04:12:49.304Z
[2026-01-12T04:12:49.316Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 23
   Successful: 10
   Failed: 0
   Skipped: 13
[2026-01-12T04:12:49.317Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-12T04:12:49.317Z] [BOT] Total posts: 10
   Channels used: 6
   Top channels:
     1. #💻・remote-usa: 3 posts
     2. #🩺・healthcare-jobs: 2 posts
[2026-01-12T04:12:49.317Z] [BOT] 3. #🤖・ai-jobs: 2 posts
     4. #🌄・mountain-view: 1 posts
     5. #🗽・new-york: 1 posts
[2026-01-12T04:12:49.317Z] [BOT] [STATS] Channel stats saved
[2026-01-12T04:12:51.329Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3251) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*