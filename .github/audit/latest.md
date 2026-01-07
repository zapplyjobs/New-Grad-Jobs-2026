# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T03:57:20.345Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T03:57:08.886Z] ========================================
[2026-01-07T03:57:08.888Z] Discord Bot Execution Log
[2026-01-07T03:57:08.888Z] Environment: GitHub Actions
[2026-01-07T03:57:08.888Z] Node Version: v20.19.6
[2026-01-07T03:57:08.888Z] ========================================
[2026-01-07T03:57:08.888Z] Environment Variables Check:
[2026-01-07T03:57:08.888Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T03:57:08.888Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T03:57:08.888Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T03:57:08.888Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T03:57:08.888Z] 
Multi-Channel Configuration:
[2026-01-07T03:57:08.888Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T03:57:08.889Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T03:57:08.889Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T03:57:08.889Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T03:57:08.889Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T03:57:08.889Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T03:57:08.889Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T03:57:08.889Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T03:57:08.889Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T03:57:08.889Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T03:57:08.889Z] 
Data Files Check:
[2026-01-07T03:57:08.890Z] .github/data/new_jobs.json: ✅ Exists (10 items, 124372 bytes)
[2026-01-07T03:57:08.896Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 723510 bytes)
[2026-01-07T03:57:08.896Z] 
========================================
[2026-01-07T03:57:08.896Z] Starting Enhanced Discord Bot...
[2026-01-07T03:57:08.896Z] ========================================
[2026-01-07T03:57:09.427Z] [BOT] ✅ Loaded V2 database: 1412 jobs
[2026-01-07T03:57:10.248Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T03:57:10.248Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T03:57:10.249Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T03:57:10.252Z] [BOT] ✅ Loaded pending queue: 92 total (72 pending, 20 enriched, 0 posted)
[2026-01-07T03:57:10.253Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Analyst - Enterprise Asset Management - Eam at KCI Technologies
[2026-01-07T03:57:10.254Z] [BOT] ⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
[2026-01-07T03:57:10.254Z] [BOT] ⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
[2026-01-07T03:57:10.254Z] [BOT] ⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
[2026-01-07T03:57:10.254Z] [BOT] ⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
⏭️  Skipping duplicate: JID_16172401 (posted within 7 days)
[2026-01-07T03:57:10.255Z] [BOT] ⏭️ Skipping already posted: ROLE_e2d947d7 at duolingo
⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Enterprise  at anthropic
⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
[2026-01-07T03:57:10.255Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
⏭️ Skipping already posted: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
[2026-01-07T03:57:10.256Z] [BOT] ⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
[2026-01-07T03:57:10.256Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-07T03:57:10.256Z] [BOT] ⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
⏭️ Skipping already posted: Associate Systems Analyst-IT Sales & Trade Portfolio at Conagra Brands
⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
⏭️ Skipping already posted: Staff Product Manager, Payments at discord
[2026-01-07T03:57:10.256Z] [BOT] ⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-engineer_r0151272 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6389278a at Amentum
[2026-01-07T03:57:10.256Z] [BOT] ⏭️  Skipping duplicate: JID_82dee7be (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at AMERICAN SYSTEMS
[2026-01-07T03:57:10.256Z] [BOT] ⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
⏭️ Skipping already posted: Strategic Account Executive, Industries at anthropic
[2026-01-07T03:57:10.256Z] [BOT] ⏭️  Skipping duplicate: JID_72cf4298-2026_r0055623 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Starting Summer 2026 at Empower
[2026-01-07T03:57:10.257Z] [BOT] ⏭️  Skipping duplicate: JID_23521099 (posted within 7 days)
⏭️ Skipping already posted: Sales Analytics Engineer 1 - IV at Cincinnati Financial
[2026-01-07T03:57:10.257Z] [BOT] ⏭️  Skipping duplicate: JID_a6dd5e11-cx_1-job-3748 (posted within 7 days)
⏭️ Skipping already posted: ROLE_384edd5c at Hillsborough County
📬 Found 1 new jobs (19 already posted)...
[2026-01-07T03:57:10.257Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-07T03:57:10.257Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-07T03:57:10.257Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-07T03:57:10.258Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T03:57:10.260Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-07T03:57:10.261Z] [BOT] 📍 [ROUTING] "Solutions Analyst - Enterprise Asset Management - Eam" @ ORG_4db4f14a Technologies
[2026-01-07T03:57:10.261Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-07T03:57:10.279Z] [BOT ERROR] (node:3080) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T03:57:10.613Z] [BOT] ✅ Created forum post: 🏢 Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies in #📣・marketing-jobs
[2026-01-07T03:57:10.613Z] [BOT] ✅ Industry: Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies
[2026-01-07T03:57:12.374Z] [BOT] ✅ Created forum post: 🏢 Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies in #💻・remote-usa
[2026-01-07T03:57:12.375Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-07T03:57:13.874Z] [BOT] 💾 Marked as posted: Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies (instance #1)
[2026-01-07T03:57:13.875Z] [BOT] 💾 BEFORE ARCHIVING: 1413 jobs in database
[2026-01-07T03:57:13.876Z] [BOT] ✅ No jobs to archive (all 1413 jobs within 7-day window)
[2026-01-07T03:57:13.890Z] [BOT] 💾 Saved posted_jobs.json: 1413 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T03:57:16.892Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-07T03:57:16.892Z] [BOT] ⏭️  Skipping duplicate: JID_df4c2a4c (posted within 7 days)
[2026-01-07T03:57:16.896Z] [BOT] ✅ Loaded pending queue: 92 total (72 pending, 20 enriched, 0 posted)
[2026-01-07T03:57:16.902Z] [BOT] ✅ Saved pending queue: 92 total (72 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-07T03:57:16.902Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-07T03:57:16.954Z] [BOT] 📂 Loaded 2343 existing routing entries
[2026-01-07T03:57:17.014Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2344
[2026-01-07T03:57:17.014Z] [BOT] Timestamp: 2026-01-07T03:57:17.004Z
[2026-01-07T03:57:17.015Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
[2026-01-07T03:57:17.015Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-07T03:57:17.015Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-07T03:57:17.015Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-07T03:57:17.015Z] [BOT] 1. #📣・marketing-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-07T03:57:17.015Z] [BOT] [STATS] Channel stats saved
[2026-01-07T03:57:19.027Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3080) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*