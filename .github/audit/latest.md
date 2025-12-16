# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T09:06:56.353Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T09:06:08.481Z] ========================================
[2025-12-16T09:06:08.482Z] Discord Bot Execution Log
[2025-12-16T09:06:08.483Z] Environment: GitHub Actions
[2025-12-16T09:06:08.483Z] Node Version: v20.19.6
[2025-12-16T09:06:08.483Z] ========================================
[2025-12-16T09:06:08.483Z] Environment Variables Check:
[2025-12-16T09:06:08.483Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T09:06:08.483Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T09:06:08.483Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T09:06:08.483Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T09:06:08.483Z] 
Multi-Channel Configuration:
[2025-12-16T09:06:08.483Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T09:06:08.484Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T09:06:08.484Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T09:06:08.484Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T09:06:08.484Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T09:06:08.484Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T09:06:08.484Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T09:06:08.484Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T09:06:08.484Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T09:06:08.484Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T09:06:08.484Z] 
Data Files Check:
[2025-12-16T09:06:08.485Z] .github/data/new_jobs.json: ✅ Exists (10 items, 32982 bytes)
[2025-12-16T09:06:08.486Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 256243 bytes)
[2025-12-16T09:06:08.486Z] 
========================================
[2025-12-16T09:06:08.486Z] Starting Enhanced Discord Bot...
[2025-12-16T09:06:08.486Z] ========================================
[2025-12-16T09:06:08.997Z] [BOT] ✅ Loaded V2 database: 415 jobs
[2025-12-16T09:06:09.578Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T09:06:09.578Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T09:06:09.579Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T09:06:09.579Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T09:06:09.633Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T09:06:09.700Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 197
[2025-12-16T09:06:09.701Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T09:06:09.701Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T09:06:09.702Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T09:06:09.702Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T09:06:09.702Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T09:06:09.706Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-16T09:06:09.707Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow in Water Systems" @ ORG_9d38443e of Texas - Austin
[2025-12-16T09:06:09.707Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-16T09:06:09.724Z] [BOT ERROR] (node:3207) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T09:06:09.919Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow in Water Systems @ ORG_9d38443e of Texas - Austin in #📁・JID_e938df7b
  ✅ Industry: Postdoctoral Fellow in Water Systems @ ORG_9d38443e of Texas - Austin
[2025-12-16T09:06:11.587Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow in Water Systems @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-16T09:06:13.088Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow in Water Systems @ ORG_9d38443e of Texas - Austin (instance #1)
[2025-12-16T09:06:13.088Z] [BOT] 💾 BEFORE ARCHIVING: 416 jobs in database
[2025-12-16T09:06:13.089Z] [BOT] ✅ No jobs to archive (all 416 jobs within 7-day window)
[2025-12-16T09:06:13.097Z] [BOT] 💾 Saved posted_jobs.json: 416 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T09:06:16.098Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2025-12-16T09:06:16.099Z] [BOT] 📍 [ROUTING] "DOPS Graduate Software Developer - Federal Work Study - Remote Optional" @ ORG_9d38443e of Virginia
[2025-12-16T09:06:16.099Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T09:06:16.298Z] [BOT] ✅ Created forum post: 🏢 DOPS Graduate Software Developer - Federal Work Study - Remote Optional @ ORG_9d38443e of Virginia in #💻・tech-jobs
  ✅ Industry: DOPS Graduate Software Developer - Federal Work Study - Remote Optional @ ORG_9d38443e of Virginia
[2025-12-16T09:06:17.962Z] [BOT] ✅ Created forum post: 🏢 DOPS Graduate Software Developer - Federal Work Study - Remote Optional @ ORG_9d38443e of Virginia in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T09:06:19.463Z] [BOT] 💾 Marked as posted: DOPS Graduate Software Developer - Federal Work Study - Remote Optional @ ORG_9d38443e of Virginia (instance #1)
[2025-12-16T09:06:19.464Z] [BOT] 💾 BEFORE ARCHIVING: 417 jobs in database
[2025-12-16T09:06:19.464Z] [BOT] ✅ No jobs to archive (all 417 jobs within 7-day window)
[2025-12-16T09:06:19.468Z] [BOT] 💾 Saved posted_jobs.json: 417 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T09:06:19.469Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Fusion" @ ORG_dc7620eb
[2025-12-16T09:06:19.469Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T09:06:19.680Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Fusion @ ORG_dc7620eb in #💻・tech-jobs
[2025-12-16T09:06:19.680Z] [BOT] ✅ Industry: Undergrad Software Engineer - Fusion @ ORG_dc7620eb
[2025-12-16T09:06:21.410Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Fusion @ ORG_dc7620eb in #🦢・los-angeles
[2025-12-16T09:06:21.410Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-16T09:06:22.911Z] [BOT] 💾 Marked as posted: Undergrad Software Engineer - Fusion @ ORG_dc7620eb (instance #1)
[2025-12-16T09:06:22.911Z] [BOT] 💾 BEFORE ARCHIVING: 418 jobs in database
[2025-12-16T09:06:22.912Z] [BOT] ✅ No jobs to archive (all 418 jobs within 7-day window)
[2025-12-16T09:06:22.916Z] [BOT] 💾 Saved posted_jobs.json: 418 active jobs
[2025-12-16T09:06:22.916Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:06:22.916Z] [BOT] 📍 [ROUTING] "Undergraduate Software Engineer - Oracle Cloud Infrastructure - OCI" @ ORG_dc7620eb
[2025-12-16T09:06:22.917Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T09:06:23.080Z] [BOT] ✅ Created forum post: 🔴 Undergraduate Software Engineer - Oracle Cloud Infrastructure - OCI @ ORG_dc7620eb in #💻・tech-jobs
[2025-12-16T09:06:23.081Z] [BOT] ✅ Industry: Undergraduate Software Engineer - Oracle Cloud Infrastructure - OCI @ ORG_dc7620eb
[2025-12-16T09:06:24.801Z] [BOT] ✅ Created forum post: 🔴 Undergraduate Software Engineer - Oracle Cloud Infrastructure - OCI @ ORG_dc7620eb in #🌉・san-francisco
[2025-12-16T09:06:24.801Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T09:06:26.303Z] [BOT] 💾 Marked as posted: Undergraduate Software Engineer - Oracle Cloud Infrastructure - OCI @ ORG_dc7620eb (instance #1)
[2025-12-16T09:06:26.303Z] [BOT] 💾 BEFORE ARCHIVING: 419 jobs in database
[2025-12-16T09:06:26.303Z] [BOT] ✅ No jobs to archive (all 419 jobs within 7-day window)
[2025-12-16T09:06:26.308Z] [BOT] 💾 Saved posted_jobs.json: 419 active jobs
[2025-12-16T09:06:26.308Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:06:26.308Z] [BOT] 📍 [ROUTING] "Software Engineer 2/3" @ ORG_f3f2248d Grumman
[2025-12-16T09:06:26.308Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T09:06:26.474Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2/3 @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Software Engineer 2/3 @ ORG_f3f2248d Grumman
[2025-12-16T09:06:28.188Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2/3 @ ORG_f3f2248d Grumman in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-16T09:06:29.689Z] [BOT] 💾 Marked as posted: Software Engineer 2/3 @ ORG_f3f2248d Grumman (instance #1)
[2025-12-16T09:06:29.690Z] [BOT] 💾 BEFORE ARCHIVING: 420 jobs in database
[2025-12-16T09:06:29.690Z] [BOT] ✅ No jobs to archive (all 420 jobs within 7-day window)
[2025-12-16T09:06:29.694Z] [BOT] 💾 Saved posted_jobs.json: 420 active jobs
[2025-12-16T09:06:29.694Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:06:29.695Z] [BOT] 📍 [ROUTING] "Backend Engineer" @ ORG_b6502dec
[2025-12-16T09:06:29.695Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T09:06:30.239Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer @ ORG_b6502dec in #💻・tech-jobs
[2025-12-16T09:06:30.239Z] [BOT] ✅ Industry: Backend Engineer @ ORG_b6502dec
[2025-12-16T09:06:31.959Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer @ ORG_b6502dec in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T09:06:33.461Z] [BOT] 💾 Marked as posted: Backend Engineer @ ORG_b6502dec (instance #1)
[2025-12-16T09:06:33.461Z] [BOT] 💾 BEFORE ARCHIVING: 421 jobs in database
[2025-12-16T09:06:33.462Z] [BOT] ✅ No jobs to archive (all 421 jobs within 7-day window)
[2025-12-16T09:06:33.466Z] [BOT] 💾 Saved posted_jobs.json: 421 active jobs
[2025-12-16T09:06:33.466Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:06:33.466Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_931a39c9
[2025-12-16T09:06:33.466Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T09:06:33.611Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_931a39c9 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad @ ORG_931a39c9
[2025-12-16T09:06:35.347Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_931a39c9 in #🌉・san-francisco
[2025-12-16T09:06:35.347Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T09:06:36.849Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_931a39c9 (instance #1)
[2025-12-16T09:06:36.849Z] [BOT] 💾 BEFORE ARCHIVING: 422 jobs in database
[2025-12-16T09:06:36.849Z] [BOT] ✅ No jobs to archive (all 422 jobs within 7-day window)
[2025-12-16T09:06:36.854Z] [BOT] 💾 Saved posted_jobs.json: 422 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T09:06:36.854Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Search Ads Technology" @ ORG_1bb6fcfb
[2025-12-16T09:06:36.854Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T09:06:37.088Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Search Ads Technology @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-16T09:06:37.088Z] [BOT] ✅ Industry: Software Engineer Graduate - Search Ads Technology @ ORG_1bb6fcfb
[2025-12-16T09:06:38.918Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Search Ads Technology @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-16T09:06:38.919Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T09:06:40.420Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Search Ads Technology @ ORG_1bb6fcfb (instance #1)
[2025-12-16T09:06:40.420Z] [BOT] 💾 BEFORE ARCHIVING: 423 jobs in database
[2025-12-16T09:06:40.420Z] [BOT] ✅ No jobs to archive (all 423 jobs within 7-day window)
[2025-12-16T09:06:40.425Z] [BOT] 💾 Saved posted_jobs.json: 423 active jobs
[2025-12-16T09:06:40.425Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:06:43.426Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-16T09:06:43.426Z] [BOT] 📍 [ROUTING] "CAS-Chemistry-Computational" @ ORG_9d38443e of Miami
[2025-12-16T09:06:43.427Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T09:06:43.666Z] [BOT] ✅ Created forum post: 🏢 CAS-Chemistry-Computational @ ORG_9d38443e of Miami in #🤖・ai-jobs
[2025-12-16T09:06:43.667Z] [BOT] ✅ Industry: CAS-Chemistry-Computational @ ORG_9d38443e of Miami
[2025-12-16T09:06:45.598Z] [BOT] ✅ Created forum post: 🏢 CAS-Chemistry-Computational @ ORG_9d38443e of Miami in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T09:06:47.098Z] [BOT] 💾 Marked as posted: CAS-Chemistry-Computational @ ORG_9d38443e of Miami (instance #1)
[2025-12-16T09:06:47.099Z] [BOT] 💾 BEFORE ARCHIVING: 424 jobs in database
[2025-12-16T09:06:47.099Z] [BOT] ✅ No jobs to archive (all 424 jobs within 7-day window)
[2025-12-16T09:06:47.105Z] [BOT] 💾 Saved posted_jobs.json: 424 active jobs
[2025-12-16T09:06:47.105Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:06:47.105Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Applied Machine Learning - ML System" @ ORG_08c9a13c
[2025-12-16T09:06:47.106Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T09:06:47.458Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Applied Machine Learning - ML System @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-16T09:06:47.458Z] [BOT] ✅ Industry: Graduate Research Scientist - Applied Machine Learning - ML System @ ORG_08c9a13c
[2025-12-16T09:06:49.174Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Applied Machine Learning - ML System @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-16T09:06:49.174Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T09:06:50.675Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Applied Machine Learning - ML System @ ORG_08c9a13c (instance #1)
[2025-12-16T09:06:50.675Z] [BOT] 💾 BEFORE ARCHIVING: 425 jobs in database
[2025-12-16T09:06:50.675Z] [BOT] ✅ No jobs to archive (all 425 jobs within 7-day window)
[2025-12-16T09:06:50.680Z] [BOT] 💾 Saved posted_jobs.json: 425 active jobs
[2025-12-16T09:06:50.680Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T09:06:53.681Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T09:06:53.681Z] [BOT] ⏭️  Skipping duplicate: JID_c2cd900e-systems_r_00041179 (posted within 7 days)
⏭️  Skipping duplicate: JID_dc564ec0-optional_r0076751 (posted within 7 days)
[2025-12-16T09:06:53.682Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-305904 (posted within 7 days)
[2025-12-16T09:06:53.682Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-312200 (posted within 7 days)
⏭️  Skipping duplicate: JID_b07dd2fa-professor_r100091730 (posted within 7 days)
[2025-12-16T09:06:53.682Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_79baa5e1-3_r10206037 (posted within 7 days)
[2025-12-16T09:06:53.682Z] [BOT] ⏭️  Skipping duplicate: JID_be76da08 (posted within 7 days)
[2025-12-16T09:06:53.682Z] [BOT] ⏭️  Skipping duplicate: JID_8352e833 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_ca6a6c77 (posted within 7 days)
[2025-12-16T09:06:53.682Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_9cf09146-detail (posted within 7 days)
[2025-12-16T09:06:53.686Z] [BOT] ✅ Loaded pending queue: 468 total (448 pending, 20 enriched, 0 posted)
[2025-12-16T09:06:53.693Z] [BOT] ✅ Saved pending queue: 468 total (448 pending, 10 enriched, 10 posted)
[2025-12-16T09:06:53.693Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T09:06:53.733Z] [BOT] 📂 Loaded 400 existing routing entries
[2025-12-16T09:06:53.772Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 410
   Timestamp: 2025-12-16T09:06:53.770Z
[2025-12-16T09:06:53.773Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
   Total attempts: 20
[2025-12-16T09:06:53.773Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T09:06:55.783Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3207) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*