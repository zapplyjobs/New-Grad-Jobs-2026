# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T11:25:32.580Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T11:25:22.491Z] ========================================
[2026-01-07T11:25:22.493Z] Discord Bot Execution Log
[2026-01-07T11:25:22.493Z] Environment: GitHub Actions
[2026-01-07T11:25:22.493Z] Node Version: v20.19.6
[2026-01-07T11:25:22.493Z] ========================================
[2026-01-07T11:25:22.493Z] Environment Variables Check:
[2026-01-07T11:25:22.493Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T11:25:22.493Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T11:25:22.493Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T11:25:22.494Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T11:25:22.494Z] 
Multi-Channel Configuration:
[2026-01-07T11:25:22.494Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T11:25:22.494Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T11:25:22.494Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T11:25:22.494Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T11:25:22.494Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T11:25:22.494Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T11:25:22.494Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T11:25:22.494Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T11:25:22.494Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T11:25:22.494Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T11:25:22.494Z] 
Data Files Check:
[2026-01-07T11:25:22.496Z] .github/data/new_jobs.json: ✅ Exists (10 items, 134281 bytes)
[2026-01-07T11:25:22.501Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 725066 bytes)
[2026-01-07T11:25:22.501Z] 
========================================
[2026-01-07T11:25:22.501Z] Starting Enhanced Discord Bot...
[2026-01-07T11:25:22.501Z] ========================================
[2026-01-07T11:25:23.024Z] [BOT] ✅ Loaded V2 database: 1415 jobs
[2026-01-07T11:25:23.493Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T11:25:23.493Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T11:25:23.494Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T11:25:23.500Z] [BOT] ✅ Loaded pending queue: 89 total (69 pending, 20 enriched, 0 posted)
[2026-01-07T11:25:23.501Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Associate Azure Data Engineer at General Dynamics
[2026-01-07T11:25:23.502Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
[2026-01-07T11:25:23.502Z] [BOT] ⏭️ Skipping already posted: Manager, Workplace Operations at samsara
[2026-01-07T11:25:23.503Z] [BOT] ⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder at Amazon
⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-01-07T11:25:23.503Z] [BOT] ⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Enterprise  at anthropic
⏭️  Skipping duplicate: JID_da410659 (posted within 7 days)
⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_634a9e21 (posted within 7 days)
[2026-01-07T11:25:23.503Z] [BOT] ⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
[2026-01-07T11:25:23.503Z] [BOT] ⏭️ Skipping already posted: ROLE_919bfb3a at brex
⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T11:25:23.503Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_177fd1b8-engineer_r10218297 (posted within 7 days)
⏭️ Skipping already posted: Space Payload 1&T – Engineer/Principal Engineer at Northrop Grumman
[2026-01-07T11:25:23.503Z] [BOT] ⏭️  Skipping duplicate: JID_867977c2-external_career_site-JID_0824c164-_jreq196038 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Grad - Materia at Thomson Reuters
[2026-01-07T11:25:23.503Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671483 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-07T11:25:23.504Z] [BOT] ⏭️  Skipping duplicate: JID_03d8b037-careers_us-JID_2679c10b-portfolio_req-035736-1 (posted within 7 days)
⏭️ Skipping already posted: Associate Systems Analyst-IT Sales & Trade Portfolio at Conagra Brands
⏭️  Skipping duplicate: JID_dd1f3981 (posted within 7 days)
[2026-01-07T11:25:23.504Z] [BOT] ⏭️ Skipping already posted: Staff Product Manager, Payments at discord
[2026-01-07T11:25:23.504Z] [BOT] ⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-engineer_r0151272 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6389278a at Amentum
[2026-01-07T11:25:23.504Z] [BOT] ⏭️  Skipping duplicate: JID_82dee7be (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at AMERICAN SYSTEMS
[2026-01-07T11:25:23.504Z] [BOT] ⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
⏭️ Skipping already posted: Strategic Account Executive, Industries at anthropic
[2026-01-07T11:25:23.504Z] [BOT] ⏭️  Skipping duplicate: JID_23521099 (posted within 7 days)
⏭️ Skipping already posted: Sales Analytics Engineer 1 - IV at Cincinnati Financial
[2026-01-07T11:25:23.504Z] [BOT] ⏭️  Skipping duplicate: JID_a6dd5e11-cx_1-job-3748 (posted within 7 days)
[2026-01-07T11:25:23.504Z] [BOT] ⏭️ Skipping already posted: ROLE_384edd5c at Hillsborough County
📬 Found 1 new jobs (19 already posted)...
[2026-01-07T11:25:23.505Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-07T11:25:23.505Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-07T11:25:23.505Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-07T11:25:23.505Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T11:25:23.506Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-07T11:25:23.507Z] [BOT] 📍 [ROUTING] "Associate Azure Data Engineer" @ ORG_c910d474 Dynamics
[2026-01-07T11:25:23.507Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-07T11:25:23.512Z] [BOT ERROR] (node:2977) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T11:25:23.647Z] [BOT] ✅ Created forum post: 🏢 Associate Azure Data Engineer @ ORG_c910d474 Dynamics in #📈・JID_fb739488
[2026-01-07T11:25:23.647Z] [BOT] ✅ Industry: Associate Azure Data Engineer @ ORG_c910d474 Dynamics
[2026-01-07T11:25:25.331Z] [BOT] ✅ Created forum post: 🏢 Associate Azure Data Engineer @ ORG_c910d474 Dynamics in #💻・remote-usa
[2026-01-07T11:25:25.331Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-07T11:25:26.832Z] [BOT] 💾 Marked as posted: Associate Azure Data Engineer @ ORG_c910d474 Dynamics (instance #1)
[2026-01-07T11:25:26.832Z] [BOT] 💾 BEFORE ARCHIVING: 1416 jobs in database
[2026-01-07T11:25:26.834Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-07T11:25:26.839Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2026-01-07T11:25:26.839Z] [BOT] ✅ Archiving complete: 1 archived, 1415 active
[2026-01-07T11:25:26.848Z] [BOT] 💾 Saved posted_jobs.json: 1415 active jobs
[2026-01-07T11:25:26.848Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-07T11:25:29.850Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-07T11:25:29.850Z] [BOT] ⏭️  Skipping duplicate: JID_873e9a01 (posted within 7 days)
[2026-01-07T11:25:29.854Z] [BOT] ✅ Loaded pending queue: 89 total (69 pending, 20 enriched, 0 posted)
[2026-01-07T11:25:29.859Z] [BOT] ✅ Saved pending queue: 89 total (69 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-07T11:25:29.859Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-07T11:25:29.912Z] [BOT] 📂 Loaded 2347 existing routing entries
[2026-01-07T11:25:29.971Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-07T11:25:29.972Z] [BOT] Total entries: 2348
   Timestamp: 2026-01-07T11:25:29.961Z
[2026-01-07T11:25:29.972Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
[2026-01-07T11:25:29.972Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-07T11:25:29.973Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #📈・JID_fb739488: 1 posts
     2. #💻・remote-usa: 1 posts
[STATS] Channel stats saved
[2026-01-07T11:25:31.983Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2977) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*