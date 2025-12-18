# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T20:45:38.556Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T20:44:49.191Z] ========================================
[2025-12-18T20:44:49.193Z] Discord Bot Execution Log
[2025-12-18T20:44:49.193Z] Environment: GitHub Actions
[2025-12-18T20:44:49.193Z] Node Version: v20.19.6
[2025-12-18T20:44:49.193Z] ========================================
[2025-12-18T20:44:49.193Z] Environment Variables Check:
[2025-12-18T20:44:49.193Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T20:44:49.193Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T20:44:49.193Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T20:44:49.194Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T20:44:49.194Z] 
Multi-Channel Configuration:
[2025-12-18T20:44:49.194Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T20:44:49.194Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T20:44:49.194Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T20:44:49.194Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T20:44:49.194Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T20:44:49.194Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T20:44:49.194Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T20:44:49.194Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T20:44:49.194Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T20:44:49.194Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T20:44:49.195Z] 
Data Files Check:
[2025-12-18T20:44:49.195Z] .github/data/new_jobs.json: ✅ Exists (10 items, 45514 bytes)
[2025-12-18T20:44:49.198Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 320635 bytes)
[2025-12-18T20:44:49.198Z] 
========================================
[2025-12-18T20:44:49.198Z] Starting Enhanced Discord Bot...
[2025-12-18T20:44:49.198Z] ========================================
[2025-12-18T20:44:49.725Z] [BOT] ✅ Loaded V2 database: 525 jobs
[2025-12-18T20:44:50.494Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T20:44:50.494Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T20:44:50.494Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T20:44:50.497Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T20:44:50.544Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T20:44:50.602Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 100
[2025-12-18T20:44:50.605Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T20:44:50.605Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T20:44:50.605Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T20:44:50.606Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-18T20:44:50.606Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T20:44:50.611Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-18T20:44:50.612Z] [BOT] 📍 [ROUTING] "AI Deployment Analyst" @ ORG_aa834d14 Health
[2025-12-18T20:44:50.612Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-18T20:44:50.629Z] [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T20:44:50.886Z] [BOT] ✅ Created forum post: 🏢 AI Deployment Analyst @ ORG_aa834d14 Health in #🤖・ai-jobs
  ✅ Industry: AI Deployment Analyst @ ORG_aa834d14 Health
[2025-12-18T20:44:52.910Z] [BOT] ✅ Created forum post: 🏢 AI Deployment Analyst @ ORG_aa834d14 Health in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-18T20:44:54.411Z] [BOT] 💾 Marked as posted: AI Deployment Analyst @ ORG_aa834d14 Health (instance #1)
[2025-12-18T20:44:54.411Z] [BOT] 💾 BEFORE ARCHIVING: 526 jobs in database
[2025-12-18T20:44:54.412Z] [BOT] ✅ No jobs to archive (all 526 jobs within 7-day window)
[2025-12-18T20:44:54.421Z] [BOT] 💾 Saved posted_jobs.json: 526 active jobs
[2025-12-18T20:44:54.421Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:44:54.422Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grads: Fall 2025/Spring 2026" @ ORG_2e5592d2 Technologies
[2025-12-18T20:44:54.422Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T20:44:54.612Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grads: Fall 2025/Spring 2026 @ ORG_2e5592d2 Technologies in #🤖・ai-jobs
[2025-12-18T20:44:54.612Z] [BOT] ✅ Industry: Software Engineer – New Grads: Fall 2025/Spring 2026 @ ORG_2e5592d2 Technologies
[2025-12-18T20:44:56.400Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grads: Fall 2025/Spring 2026 @ ORG_2e5592d2 Technologies in #🦢・los-angeles
[2025-12-18T20:44:56.400Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-18T20:44:57.901Z] [BOT] 💾 Marked as posted: Software Engineer – New Grads: Fall 2025/Spring 2026 @ ORG_2e5592d2 Technologies (instance #1)
[2025-12-18T20:44:57.901Z] [BOT] 💾 BEFORE ARCHIVING: 527 jobs in database
[2025-12-18T20:44:57.901Z] [BOT] ✅ No jobs to archive (all 527 jobs within 7-day window)
[2025-12-18T20:44:57.905Z] [BOT] 💾 Saved posted_jobs.json: 527 active jobs
[2025-12-18T20:44:57.905Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:45:00.906Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-18T20:45:00.907Z] [BOT] 📍 [ROUTING] "Product Security Engineers" @ ORG_b344d80e Boeing Company
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-18T20:45:00.908Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T20:45:01.261Z] [BOT] ✅ Created forum post: 🏢 Product Security Engineers @ ORG_b344d80e Boeing Company in #📈・JID_fb739488
  ✅ Industry: Product Security Engineers @ ORG_b344d80e Boeing Company
[2025-12-18T20:45:03.023Z] [BOT] ✅ Created forum post: 🏢 Product Security Engineers @ ORG_b344d80e Boeing Company in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T20:45:04.525Z] [BOT] 💾 Marked as posted: Product Security Engineers @ ORG_b344d80e Boeing Company (instance #1)
[2025-12-18T20:45:04.525Z] [BOT] 💾 BEFORE ARCHIVING: 528 jobs in database
[2025-12-18T20:45:04.525Z] [BOT] ✅ No jobs to archive (all 528 jobs within 7-day window)
[2025-12-18T20:45:04.531Z] [BOT] 💾 Saved posted_jobs.json: 528 active jobs
[2025-12-18T20:45:04.531Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:45:04.531Z] [BOT] 📍 [ROUTING] "Scientific Data Engineer" @ ORG_6a1ef406
   Category: DATA-SCIENCE (matched: "data engineering")
[2025-12-18T20:45:04.531Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T20:45:04.902Z] [BOT] ✅ Created forum post: 🏢 Scientific Data Engineer @ ORG_6a1ef406 in #📈・JID_fb739488
  ✅ Industry: Scientific Data Engineer @ ORG_6a1ef406
[2025-12-18T20:45:06.999Z] [BOT] ✅ Created forum post: 🏢 Scientific Data Engineer @ ORG_6a1ef406 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T20:45:08.501Z] [BOT] 💾 Marked as posted: Scientific Data Engineer @ ORG_6a1ef406 (instance #1)
[2025-12-18T20:45:08.501Z] [BOT] 💾 BEFORE ARCHIVING: 529 jobs in database
[2025-12-18T20:45:08.501Z] [BOT] ✅ No jobs to archive (all 529 jobs within 7-day window)
[2025-12-18T20:45:08.507Z] [BOT] 💾 Saved posted_jobs.json: 529 active jobs
[2025-12-18T20:45:08.507Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:45:11.508Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-12-18T20:45:11.508Z] [BOT] 📍 [ROUTING] "Application Software Engineer" @ ORG_afd623b1
[2025-12-18T20:45:11.508Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:45:11.793Z] [BOT] ✅ Created forum post: 🚀 Application Software Engineer @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Application Software Engineer @ ORG_afd623b1
[2025-12-18T20:45:13.724Z] [BOT] ✅ Created forum post: 🚀 Application Software Engineer @ ORG_afd623b1 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-18T20:45:15.226Z] [BOT] 💾 Marked as posted: Application Software Engineer @ ORG_afd623b1 (instance #1)
[2025-12-18T20:45:15.226Z] [BOT] 💾 BEFORE ARCHIVING: 530 jobs in database
[2025-12-18T20:45:15.227Z] [BOT] ✅ No jobs to archive (all 530 jobs within 7-day window)
[2025-12-18T20:45:15.232Z] [BOT] 💾 Saved posted_jobs.json: 530 active jobs
[2025-12-18T20:45:15.232Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:45:15.233Z] [BOT] 📍 [ROUTING] "Software Engineer - Kernels" @ ORG_cdec6f53
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:45:15.465Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Kernels @ ORG_cdec6f53 in #💻・tech-jobs
[2025-12-18T20:45:15.465Z] [BOT] ✅ Industry: Software Engineer - Kernels @ ORG_cdec6f53
[2025-12-18T20:45:17.201Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Kernels @ ORG_cdec6f53 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-18T20:45:18.702Z] [BOT] 💾 Marked as posted: Software Engineer - Kernels @ ORG_cdec6f53 (instance #1)
[2025-12-18T20:45:18.702Z] [BOT] 💾 BEFORE ARCHIVING: 531 jobs in database
[2025-12-18T20:45:18.703Z] [BOT] ✅ No jobs to archive (all 531 jobs within 7-day window)
[2025-12-18T20:45:18.708Z] [BOT] 💾 Saved posted_jobs.json: 531 active jobs
[2025-12-18T20:45:18.708Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:45:18.708Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_02281b3b Stanley
[2025-12-18T20:45:18.708Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:45:18.942Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_02281b3b Stanley
[2025-12-18T20:45:20.655Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_02281b3b Stanley in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-18T20:45:22.155Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_02281b3b Stanley (instance #1)
[2025-12-18T20:45:22.155Z] [BOT] 💾 BEFORE ARCHIVING: 532 jobs in database
[2025-12-18T20:45:22.156Z] [BOT] ✅ No jobs to archive (all 532 jobs within 7-day window)
[2025-12-18T20:45:22.161Z] [BOT] 💾 Saved posted_jobs.json: 532 active jobs
[2025-12-18T20:45:22.161Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:45:22.163Z] [BOT] 📍 [ROUTING] "Software Engineer - Hardware Test & Automation - Optical Payloads" @ ORG_afd623b1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:45:22.359Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Hardware Test & Automation - Optical Payloads @ ORG_afd623b1 in #💻・tech-jobs
[2025-12-18T20:45:22.359Z] [BOT] ✅ Industry: Software Engineer - Hardware Test & Automation - Optical Payloads @ ORG_afd623b1
[2025-12-18T20:45:24.078Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Hardware Test & Automation - Optical Payloads @ ORG_afd623b1 in #🖥️・redmond
  ✅ Location: 🖥️・redmond
[2025-12-18T20:45:25.578Z] [BOT] 💾 Marked as posted: Software Engineer - Hardware Test & Automation - Optical Payloads @ ORG_afd623b1 (instance #1)
[2025-12-18T20:45:25.579Z] [BOT] 💾 BEFORE ARCHIVING: 533 jobs in database
[2025-12-18T20:45:25.579Z] [BOT] ✅ No jobs to archive (all 533 jobs within 7-day window)
[2025-12-18T20:45:25.585Z] [BOT] 💾 Saved posted_jobs.json: 533 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:45:25.585Z] [BOT] 📍 [ROUTING] "Research Specialist" @ ORG_90ad5d03
[2025-12-18T20:45:25.586Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:45:25.891Z] [BOT] ✅ Created forum post: 🏢 Research Specialist @ ORG_90ad5d03 in #💻・tech-jobs
[2025-12-18T20:45:25.892Z] [BOT] ✅ Industry: Research Specialist @ ORG_90ad5d03
[2025-12-18T20:45:27.618Z] [BOT] ✅ Created forum post: 🏢 Research Specialist @ ORG_90ad5d03 in #🗽・new-york
[2025-12-18T20:45:27.618Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-18T20:45:29.119Z] [BOT] 💾 Marked as posted: Research Specialist @ ORG_90ad5d03 (instance #1)
[2025-12-18T20:45:29.120Z] [BOT] 💾 BEFORE ARCHIVING: 534 jobs in database
[2025-12-18T20:45:29.120Z] [BOT] ✅ No jobs to archive (all 534 jobs within 7-day window)
[2025-12-18T20:45:29.126Z] [BOT] 💾 Saved posted_jobs.json: 534 active jobs
[2025-12-18T20:45:29.126Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:45:29.126Z] [BOT] 📍 [ROUTING] "Software Engineer for Chemistry Applications" @ ORG_6a1ef406
[2025-12-18T20:45:29.126Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:45:29.425Z] [BOT] ✅ Created forum post: 🏢 Software Engineer for Chemistry Applications @ ORG_6a1ef406 in #💻・tech-jobs
  ✅ Industry: Software Engineer for Chemistry Applications @ ORG_6a1ef406
[2025-12-18T20:45:31.133Z] [BOT] ✅ Created forum post: 🏢 Software Engineer for Chemistry Applications @ ORG_6a1ef406 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T20:45:32.635Z] [BOT] 💾 Marked as posted: Software Engineer for Chemistry Applications @ ORG_6a1ef406 (instance #1)
[2025-12-18T20:45:32.635Z] [BOT] 💾 BEFORE ARCHIVING: 535 jobs in database
[2025-12-18T20:45:32.635Z] [BOT] ✅ No jobs to archive (all 535 jobs within 7-day window)
[2025-12-18T20:45:32.641Z] [BOT] 💾 Saved posted_jobs.json: 535 active jobs
[2025-12-18T20:45:32.641Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:45:35.642Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-18T20:45:35.642Z] [BOT] ⏭️  Skipping duplicate: JID_5aba4137 (posted within 7 days)
[2025-12-18T20:45:35.642Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_35799bb5-engineers_jr2025478888 (posted within 7 days)
[2025-12-18T20:45:35.642Z] [BOT] ⏭️  Skipping duplicate: JID_4d1ad586 (posted within 7 days)
[2025-12-18T20:45:35.643Z] [BOT] ⏭️  Skipping duplicate: JID_74032a0e (posted within 7 days)
[2025-12-18T20:45:35.643Z] [BOT] ⏭️  Skipping duplicate: JID_cbfee1f8-engineer_pt-jr021580 (posted within 7 days)
⏭️  Skipping duplicate: JID_fafdd972 (posted within 7 days)
[2025-12-18T20:45:35.643Z] [BOT] ⏭️  Skipping duplicate: JID_8ee30c28 (posted within 7 days)
[2025-12-18T20:45:35.643Z] [BOT] ⏭️  Skipping duplicate: JID_6a05cb50 (posted within 7 days)
[2025-12-18T20:45:35.644Z] [BOT] ⏭️  Skipping duplicate: JID_95be2b89 (posted within 7 days)
⏭️  Skipping duplicate: JID_625785e1 (posted within 7 days)
[2025-12-18T20:45:35.646Z] [BOT] ✅ Loaded pending queue: 447 total (427 pending, 20 enriched, 0 posted)
[2025-12-18T20:45:35.653Z] [BOT] ✅ Saved pending queue: 447 total (427 pending, 10 enriched, 10 posted)
[2025-12-18T20:45:35.653Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-18T20:45:35.694Z] [BOT] 📂 Loaded 509 existing routing entries
[2025-12-18T20:45:35.736Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2025-12-18T20:45:35.737Z] [BOT] Total entries: 519
   Timestamp: 2025-12-18T20:45:35.734Z
[2025-12-18T20:45:35.737Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
[2025-12-18T20:45:35.737Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-18T20:45:35.737Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-18T20:45:35.738Z] [BOT] Total posts: 20
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🗽・new-york: 3 posts
     3. #🌉・san-francisco: 3 posts
[2025-12-18T20:45:35.738Z] [BOT] 4. #🤖・ai-jobs: 2 posts
     5. #🦢・los-angeles: 2 posts
[2025-12-18T20:45:35.738Z] [BOT] [STATS] Channel stats saved
[2025-12-18T20:45:37.750Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*