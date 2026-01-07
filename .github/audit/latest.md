# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T07:41:54.368Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T07:41:43.195Z] ========================================
[2026-01-07T07:41:43.197Z] Discord Bot Execution Log
[2026-01-07T07:41:43.197Z] Environment: GitHub Actions
[2026-01-07T07:41:43.197Z] Node Version: v20.19.6
[2026-01-07T07:41:43.197Z] ========================================
[2026-01-07T07:41:43.197Z] Environment Variables Check:
[2026-01-07T07:41:43.197Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T07:41:43.197Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T07:41:43.198Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T07:41:43.198Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T07:41:43.198Z] 
Multi-Channel Configuration:
[2026-01-07T07:41:43.198Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T07:41:43.198Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T07:41:43.198Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T07:41:43.198Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T07:41:43.198Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T07:41:43.198Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T07:41:43.198Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T07:41:43.198Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T07:41:43.198Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T07:41:43.198Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T07:41:43.199Z] 
Data Files Check:
[2026-01-07T07:41:43.200Z] .github/data/new_jobs.json: ✅ Exists (10 items, 119933 bytes)
[2026-01-07T07:41:43.205Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 724023 bytes)
[2026-01-07T07:41:43.205Z] 
========================================
[2026-01-07T07:41:43.205Z] Starting Enhanced Discord Bot...
[2026-01-07T07:41:43.205Z] ========================================
[2026-01-07T07:41:43.729Z] [BOT] ✅ Loaded V2 database: 1413 jobs
[2026-01-07T07:41:44.455Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T07:41:44.456Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T07:41:44.456Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T07:41:44.460Z] [BOT] ✅ Loaded pending queue: 91 total (71 pending, 20 enriched, 0 posted)
[2026-01-07T07:41:44.460Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-07T07:41:44.460Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer 1 - Builder at Amazon
[2026-01-07T07:41:44.462Z] [BOT] ⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
[2026-01-07T07:41:44.462Z] [BOT] ⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
[2026-01-07T07:41:44.462Z] [BOT] ⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-01-07T07:41:44.462Z] [BOT] ⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
[2026-01-07T07:41:44.462Z] [BOT] ⏭️ Skipping already posted: Product Designer, Enterprise  at anthropic
⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T07:41:44.463Z] [BOT] ⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T07:41:44.463Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T07:41:44.463Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
⏭️ Skipping already posted: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
[2026-01-07T07:41:44.463Z] [BOT] ⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
[2026-01-07T07:41:44.463Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
[2026-01-07T07:41:44.463Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-07T07:41:44.463Z] [BOT] ⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
⏭️ Skipping already posted: Associate Systems Analyst-IT Sales & Trade Portfolio at Conagra Brands
[2026-01-07T07:41:44.463Z] [BOT] ⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
⏭️ Skipping already posted: Staff Product Manager, Payments at discord
[2026-01-07T07:41:44.463Z] [BOT] ⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-engineer_r0151272 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6389278a at Amentum
[2026-01-07T07:41:44.464Z] [BOT] ⏭️  Skipping duplicate: JID_82dee7be (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at AMERICAN SYSTEMS
⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
[2026-01-07T07:41:44.464Z] [BOT] ⏭️ Skipping already posted: Strategic Account Executive, Industries at anthropic
⏭️  Skipping duplicate: JID_72cf4298-2026_r0055623 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Starting Summer 2026 at Empower
⏭️  Skipping duplicate: JID_23521099 (posted within 7 days)
⏭️ Skipping already posted: Sales Analytics Engineer 1 - IV at Cincinnati Financial
[2026-01-07T07:41:44.467Z] [BOT] ⏭️  Skipping duplicate: JID_a6dd5e11-cx_1-job-3748 (posted within 7 days)
[2026-01-07T07:41:44.467Z] [BOT] ⏭️ Skipping already posted: ROLE_384edd5c at Hillsborough County
⏭️  Skipping duplicate: JID_5858d9d4 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a89ec93f at Rivian
📬 Found 1 new jobs (19 already posted)...
[2026-01-07T07:41:44.468Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-07T07:41:44.468Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-07T07:41:44.468Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T07:41:44.469Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-07T07:41:44.471Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Builder" @ ORG_49d2dc07
[2026-01-07T07:41:44.471Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T07:41:44.475Z] [BOT ERROR] (node:3400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T07:41:44.678Z] [BOT] ✅ Created forum post: 📦 Software Engineer 1 - Builder @ ORG_49d2dc07 in #💻・tech-jobs
[2026-01-07T07:41:44.678Z] [BOT] ✅ Industry: Software Engineer 1 - Builder @ ORG_49d2dc07
[2026-01-07T07:41:46.419Z] [BOT] ✅ Created forum post: 📦 Software Engineer 1 - Builder @ ORG_49d2dc07 in #🌉・san-francisco
[2026-01-07T07:41:46.419Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-07T07:41:47.919Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Builder @ ORG_49d2dc07 (instance #1)
[2026-01-07T07:41:47.919Z] [BOT] 💾 BEFORE ARCHIVING: 1414 jobs in database
[2026-01-07T07:41:47.920Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-07T07:41:47.925Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2026-01-07T07:41:47.926Z] [BOT] ✅ Archiving complete: 1 archived, 1413 active
[2026-01-07T07:41:47.935Z] [BOT] 💾 Saved posted_jobs.json: 1413 active jobs
[2026-01-07T07:41:47.935Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-07T07:41:50.936Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-07T07:41:50.937Z] [BOT] ⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
[2026-01-07T07:41:50.940Z] [BOT] ✅ Loaded pending queue: 91 total (71 pending, 20 enriched, 0 posted)
[2026-01-07T07:41:50.946Z] [BOT] ✅ Saved pending queue: 91 total (71 pending, 19 enriched, 1 posted)
[2026-01-07T07:41:50.946Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-07T07:41:50.998Z] [BOT] 📂 Loaded 2344 existing routing entries
[2026-01-07T07:41:51.057Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-07T07:41:51.057Z] [BOT] Total entries: 2345
   Timestamp: 2026-01-07T07:41:51.043Z
[2026-01-07T07:41:51.057Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
   Total attempts: 21
[2026-01-07T07:41:51.058Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-07T07:41:51.058Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-07T07:41:51.058Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2026-01-07T07:41:51.058Z] [BOT] 2. #🌉・san-francisco: 1 posts
[2026-01-07T07:41:51.058Z] [BOT] [STATS] Channel stats saved
[2026-01-07T07:41:53.069Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*