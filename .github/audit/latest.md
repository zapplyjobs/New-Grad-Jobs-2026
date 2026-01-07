# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T01:15:33.523Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 15
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T01:15:06.070Z] ========================================
[2026-01-07T01:15:06.072Z] Discord Bot Execution Log
[2026-01-07T01:15:06.072Z] Environment: GitHub Actions
[2026-01-07T01:15:06.072Z] Node Version: v20.19.6
[2026-01-07T01:15:06.072Z] ========================================
[2026-01-07T01:15:06.072Z] Environment Variables Check:
[2026-01-07T01:15:06.072Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T01:15:06.072Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T01:15:06.073Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T01:15:06.073Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T01:15:06.073Z] 
Multi-Channel Configuration:
[2026-01-07T01:15:06.073Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T01:15:06.073Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T01:15:06.073Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T01:15:06.073Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T01:15:06.073Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T01:15:06.073Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T01:15:06.073Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T01:15:06.073Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T01:15:06.073Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T01:15:06.074Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T01:15:06.074Z] 
Data Files Check:
[2026-01-07T01:15:06.075Z] .github/data/new_jobs.json: ✅ Exists (10 items, 111785 bytes)
[2026-01-07T01:15:06.080Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 719290 bytes)
[2026-01-07T01:15:06.080Z] 
========================================
[2026-01-07T01:15:06.080Z] Starting Enhanced Discord Bot...
[2026-01-07T01:15:06.080Z] ========================================
[2026-01-07T01:15:06.605Z] [BOT] ✅ Loaded V2 database: 1405 jobs
[2026-01-07T01:15:07.227Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T01:15:07.228Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T01:15:07.228Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T01:15:07.235Z] [BOT] ✅ Loaded pending queue: 90 total (70 pending, 20 enriched, 0 posted)
[2026-01-07T01:15:07.235Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Vie – Research Associate - m/f/d at Airgas
[2026-01-07T01:15:07.237Z] [BOT] ⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
[2026-01-07T01:15:07.237Z] [BOT] ⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T01:15:07.237Z] [BOT] ⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
[2026-01-07T01:15:07.237Z] [BOT] ⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T01:15:07.237Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T01:15:07.238Z] [BOT] ⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
[2026-01-07T01:15:07.238Z] [BOT] ⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-07T01:15:07.238Z] [BOT] ⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
⏭️ Skipping already posted: Associate Systems Analyst-IT Sales & Trade Portfolio at Conagra Brands
[2026-01-07T01:15:07.238Z] [BOT] ⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
⏭️ Skipping already posted: Staff Product Manager, Payments at discord
[2026-01-07T01:15:07.238Z] [BOT] ⏭️  Skipping duplicate: JID_82dee7be (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at AMERICAN SYSTEMS
[2026-01-07T01:15:07.239Z] [BOT] ⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
⏭️ Skipping already posted: Strategic Account Executive, Industries at anthropic
⏭️  Skipping duplicate: JID_72cf4298-2026_r0055623 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Starting Summer 2026 at Empower
⏭️  Skipping duplicate: JID_23521099 (posted within 7 days)
⏭️ Skipping already posted: Sales Analytics Engineer 1 - IV at Cincinnati Financial
[2026-01-07T01:15:07.239Z] [BOT] ⏭️  Skipping duplicate: JID_a6dd5e11-cx_1-job-3748 (posted within 7 days)
⏭️ Skipping already posted: ROLE_384edd5c at Hillsborough County
⏭️  Skipping duplicate: JID_5858d9d4 (posted within 7 days)
[2026-01-07T01:15:07.239Z] [BOT] ⏭️ Skipping already posted: ROLE_a89ec93f at Rivian
⏭️  Skipping duplicate: JID_10f890da-neurology_jr91941-1 (posted within 7 days)
⏭️ Skipping already posted: Neuroimaging Engineer - Neurology at Wash U
[2026-01-07T01:15:07.239Z] [BOT] 📬 Found 5 new jobs (15 already posted)...
[2026-01-07T01:15:07.239Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2026-01-07T01:15:07.239Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-01-07T01:15:07.240Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-01-07T01:15:07.240Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T01:15:07.244Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-07T01:15:07.245Z] [BOT] 📍 [ROUTING] "Vie – Research Associate - m/f/d" @ ORG_29dc8914
[2026-01-07T01:15:07.245Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T01:15:07.249Z] [BOT ERROR] (node:3430) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T01:15:07.550Z] [BOT] ✅ Created forum post: 🏢 Vie – Research Associate - m/f/d @ ORG_29dc8914 in #💻・tech-jobs
[2026-01-07T01:15:07.551Z] [BOT] ✅ Industry: Vie – Research Associate - m/f/d @ ORG_29dc8914
[2026-01-07T01:15:09.362Z] [BOT] ✅ Created forum post: 🏢 Vie – Research Associate - m/f/d @ ORG_29dc8914 in #🗽・new-york
[2026-01-07T01:15:09.362Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-07T01:15:10.862Z] [BOT] 💾 Marked as posted: Vie – Research Associate - m/f/d @ ORG_29dc8914 (instance #1)
[2026-01-07T01:15:10.862Z] [BOT] 💾 BEFORE ARCHIVING: 1406 jobs in database
[2026-01-07T01:15:10.863Z] [BOT] ✅ No jobs to archive (all 1406 jobs within 7-day window)
[2026-01-07T01:15:10.876Z] [BOT] 💾 Saved posted_jobs.json: 1406 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T01:15:10.877Z] [BOT] 📍 [ROUTING] "Senior Android Engineer" @ duolingo
   Category: TECH (matched: "engineer/engineering")
[2026-01-07T01:15:10.877Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T01:15:11.077Z] [BOT] ✅ Created forum post: 🏢 Senior Android Engineer @ duolingo in #💻・tech-jobs
[2026-01-07T01:15:11.078Z] [BOT] ✅ Industry: Senior Android Engineer @ duolingo
[2026-01-07T01:15:12.745Z] [BOT] ✅ Created forum post: 🏢 Senior Android Engineer @ duolingo in #🌧️・seattle
[2026-01-07T01:15:12.745Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-07T01:15:14.247Z] [BOT] 💾 Marked as posted: Senior Android Engineer @ duolingo (instance #1)
💾 BEFORE ARCHIVING: 1407 jobs in database
[2026-01-07T01:15:14.248Z] [BOT] ✅ No jobs to archive (all 1407 jobs within 7-day window)
[2026-01-07T01:15:14.257Z] [BOT] 💾 Saved posted_jobs.json: 1407 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T01:15:14.258Z] [BOT] 📍 [ROUTING] "Space Payload 1&T – Engineer/Principal Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T01:15:14.409Z] [BOT] ✅ Created forum post: 🏢 Space Payload 1&T – Engineer/Principal Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Space Payload 1&T – Engineer/Principal Engineer @ ORG_f3f2248d Grumman
[2026-01-07T01:15:16.103Z] [BOT] ✅ Created forum post: 🏢 Space Payload 1&T – Engineer/Principal Engineer @ ORG_f3f2248d Grumman in #💻・remote-usa
[2026-01-07T01:15:16.103Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-07T01:15:17.603Z] [BOT] 💾 Marked as posted: Space Payload 1&T – Engineer/Principal Engineer @ ORG_f3f2248d Grumman (instance #1)
[2026-01-07T01:15:17.604Z] [BOT] 💾 BEFORE ARCHIVING: 1408 jobs in database
[2026-01-07T01:15:17.605Z] [BOT] ✅ No jobs to archive (all 1408 jobs within 7-day window)
[2026-01-07T01:15:17.614Z] [BOT] 💾 Saved posted_jobs.json: 1408 active jobs
[2026-01-07T01:15:17.614Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-07T01:15:17.615Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_f7a2cae4
[2026-01-07T01:15:17.616Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T01:15:17.807Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_f7a2cae4
[2026-01-07T01:15:19.490Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-07T01:15:20.992Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_f7a2cae4 (instance #1)
[2026-01-07T01:15:20.992Z] [BOT] 💾 BEFORE ARCHIVING: 1409 jobs in database
[2026-01-07T01:15:20.993Z] [BOT] ✅ No jobs to archive (all 1409 jobs within 7-day window)
[2026-01-07T01:15:21.002Z] [BOT] 💾 Saved posted_jobs.json: 1409 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T01:15:24.003Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-07T01:15:24.004Z] [BOT] 📍 [ROUTING] "Product Designer, Enterprise " @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-07T01:15:24.234Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Enterprise  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Product Designer, Enterprise  @ anthropic
[2026-01-07T01:15:26.021Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Enterprise  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-07T01:15:27.523Z] [BOT] 💾 Marked as posted: Product Designer, Enterprise  @ anthropic (instance #1)
[2026-01-07T01:15:27.523Z] [BOT] 💾 BEFORE ARCHIVING: 1410 jobs in database
[2026-01-07T01:15:27.524Z] [BOT] ✅ No jobs to archive (all 1410 jobs within 7-day window)
[2026-01-07T01:15:27.533Z] [BOT] 💾 Saved posted_jobs.json: 1410 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T01:15:30.534Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-01-07T01:15:30.535Z] [BOT] ⏭️  Skipping duplicate: JID_0c1f72ff-_r10082121 (posted within 7 days)
[2026-01-07T01:15:30.535Z] [BOT] ⏭️  Skipping duplicate: JID_16172401 (posted within 7 days)
[2026-01-07T01:15:30.535Z] [BOT] ⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
[2026-01-07T01:15:30.535Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
[2026-01-07T01:15:30.535Z] [BOT] ⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-engineer_r0151272 (posted within 7 days)
[2026-01-07T01:15:30.542Z] [BOT] ✅ Loaded pending queue: 90 total (70 pending, 20 enriched, 0 posted)
[2026-01-07T01:15:30.548Z] [BOT] ✅ Saved pending queue: 90 total (70 pending, 15 enriched, 5 posted)
[2026-01-07T01:15:30.548Z] [BOT] 📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-07T01:15:30.611Z] [BOT] 📂 Loaded 2336 existing routing entries
[2026-01-07T01:15:30.666Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-01-07T01:15:30.666Z] [BOT] Total entries: 2341
   Timestamp: 2026-01-07T01:15:30.654Z
[2026-01-07T01:15:30.666Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
   Total attempts: 25
   Successful: 10
   Failed: 0
[2026-01-07T01:15:30.667Z] [BOT] Skipped: 15
[2026-01-07T01:15:30.667Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-07T01:15:30.667Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 6
   Top channels:
[2026-01-07T01:15:30.667Z] [BOT] 1. #💻・tech-jobs: 4 posts
     2. #💻・remote-usa: 2 posts
     3. #🗽・new-york: 1 posts
[2026-01-07T01:15:30.667Z] [BOT] 4. #🌧️・seattle: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-07T01:15:30.667Z] [BOT] [STATS] Channel stats saved
[2026-01-07T01:15:32.680Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3430) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*