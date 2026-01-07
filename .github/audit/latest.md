# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T10:49:40.864Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T10:49:31.379Z] ========================================
[2026-01-07T10:49:31.381Z] Discord Bot Execution Log
[2026-01-07T10:49:31.381Z] Environment: GitHub Actions
[2026-01-07T10:49:31.381Z] Node Version: v20.19.6
[2026-01-07T10:49:31.382Z] ========================================
[2026-01-07T10:49:31.382Z] Environment Variables Check:
[2026-01-07T10:49:31.382Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T10:49:31.382Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T10:49:31.382Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T10:49:31.382Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T10:49:31.382Z] 
Multi-Channel Configuration:
[2026-01-07T10:49:31.382Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T10:49:31.382Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T10:49:31.382Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T10:49:31.382Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T10:49:31.383Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T10:49:31.383Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T10:49:31.383Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T10:49:31.383Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T10:49:31.383Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T10:49:31.383Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T10:49:31.383Z] 
Data Files Check:
[2026-01-07T10:49:31.384Z] .github/data/new_jobs.json: ✅ Exists (10 items, 133438 bytes)
[2026-01-07T10:49:31.389Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 724475 bytes)
[2026-01-07T10:49:31.390Z] 
========================================
[2026-01-07T10:49:31.390Z] Starting Enhanced Discord Bot...
[2026-01-07T10:49:31.390Z] ========================================
[2026-01-07T10:49:31.919Z] [BOT] ✅ Loaded V2 database: 1414 jobs
[2026-01-07T10:49:32.543Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T10:49:32.543Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T10:49:32.543Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T10:49:32.553Z] [BOT] ✅ Loaded pending queue: 90 total (70 pending, 20 enriched, 0 posted)
[2026-01-07T10:49:32.554Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Certified Nursing Assistant / Aide CNA at Magnolia Manor Greenville
[2026-01-07T10:49:32.555Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
[2026-01-07T10:49:32.555Z] [BOT] ⏭️ Skipping already posted: Manager, Workplace Operations at samsara
[2026-01-07T10:49:32.556Z] [BOT] ⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder at Amazon
⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-01-07T10:49:32.556Z] [BOT] ⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Enterprise  at anthropic
⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T10:49:32.556Z] [BOT] ⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
[2026-01-07T10:49:32.557Z] [BOT] ⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T10:49:32.557Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T10:49:32.557Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
⏭️ Skipping already posted: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
[2026-01-07T10:49:32.557Z] [BOT] ⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-07T10:49:32.557Z] [BOT] ⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
⏭️ Skipping already posted: Associate Systems Analyst-IT Sales & Trade Portfolio at Conagra Brands
⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
⏭️ Skipping already posted: Staff Product Manager, Payments at discord
[2026-01-07T10:49:32.557Z] [BOT] ⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-engineer_r0151272 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6389278a at Amentum
⏭️  Skipping duplicate: JID_82dee7be (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at AMERICAN SYSTEMS
[2026-01-07T10:49:32.558Z] [BOT] ⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
⏭️ Skipping already posted: Strategic Account Executive, Industries at anthropic
[2026-01-07T10:49:32.558Z] [BOT] ⏭️  Skipping duplicate: JID_72cf4298-2026_r0055623 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Starting Summer 2026 at Empower
⏭️  Skipping duplicate: JID_23521099 (posted within 7 days)
⏭️ Skipping already posted: Sales Analytics Engineer 1 - IV at Cincinnati Financial
📬 Found 1 new jobs (19 already posted)...
📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-07T10:49:32.558Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-07T10:49:32.559Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T10:49:32.562Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-07T10:49:32.564Z] [BOT] 📍 [ROUTING] "Certified Nursing Assistant / Aide CNA" @ ORG_8b14c820 Manor Greenville
[2026-01-07T10:49:32.564Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-07T10:49:32.582Z] [BOT ERROR] (node:3405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T10:49:32.828Z] [BOT] ✅ Created forum post: 🏢 Certified Nursing Assistant / Aide CNA @ ORG_8b14c820 Manor Greenville in #🩺・healthcare-jobs
  ✅ Industry: Certified Nursing Assistant / Aide CNA @ ORG_8b14c820 Manor Greenville
[2026-01-07T10:49:34.331Z] [BOT] 💾 Marked as posted: Certified Nursing Assistant / Aide CNA @ ORG_8b14c820 Manor Greenville (instance #1)
[2026-01-07T10:49:34.331Z] [BOT] 💾 BEFORE ARCHIVING: 1415 jobs in database
[2026-01-07T10:49:34.332Z] [BOT] ✅ No jobs to archive (all 1415 jobs within 7-day window)
[2026-01-07T10:49:34.345Z] [BOT] 💾 Saved posted_jobs.json: 1415 active jobs
[2026-01-07T10:49:34.346Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-07T10:49:37.346Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-07T10:49:37.346Z] [BOT] ⏭️  Skipping duplicate: JID_c176b780 (posted within 7 days)
[2026-01-07T10:49:37.350Z] [BOT] ✅ Loaded pending queue: 90 total (70 pending, 20 enriched, 0 posted)
[2026-01-07T10:49:37.356Z] [BOT] ✅ Saved pending queue: 90 total (70 pending, 19 enriched, 1 posted)
[2026-01-07T10:49:37.356Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-07T10:49:37.408Z] [BOT] 📂 Loaded 2346 existing routing entries
[2026-01-07T10:49:37.466Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-07T10:49:37.466Z] [BOT] Total entries: 2347
   Timestamp: 2026-01-07T10:49:37.452Z
[2026-01-07T10:49:37.466Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
[2026-01-07T10:49:37.467Z] [BOT] Total attempts: 20
   Successful: 1
   Failed: 0
   Skipped: 19
[2026-01-07T10:49:37.467Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-07T10:49:37.467Z] [BOT] Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
     1. #🩺・healthcare-jobs: 1 posts
[2026-01-07T10:49:37.467Z] [BOT] [STATS] Channel stats saved
[2026-01-07T10:49:39.483Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*