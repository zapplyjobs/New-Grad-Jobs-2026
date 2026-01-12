# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T14:45:43.500Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T14:45:32.822Z] ========================================
[2026-01-12T14:45:32.824Z] Discord Bot Execution Log
[2026-01-12T14:45:32.824Z] Environment: GitHub Actions
[2026-01-12T14:45:32.824Z] Node Version: v20.19.6
[2026-01-12T14:45:32.824Z] ========================================
[2026-01-12T14:45:32.824Z] Environment Variables Check:
[2026-01-12T14:45:32.824Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T14:45:32.824Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T14:45:32.824Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T14:45:32.825Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T14:45:32.825Z] 
Multi-Channel Configuration:
[2026-01-12T14:45:32.825Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T14:45:32.825Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T14:45:32.825Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T14:45:32.825Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T14:45:32.825Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T14:45:32.825Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T14:45:32.825Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T14:45:32.825Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T14:45:32.825Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T14:45:32.825Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T14:45:32.826Z] 
Data Files Check:
[2026-01-12T14:45:32.826Z] .github/data/new_jobs.json: ✅ Exists (10 items, 65511 bytes)
[2026-01-12T14:45:32.828Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 224220 bytes)
[2026-01-12T14:45:32.829Z] 
========================================
[2026-01-12T14:45:32.829Z] Starting Enhanced Discord Bot...
[2026-01-12T14:45:32.829Z] ========================================
[2026-01-12T14:45:33.388Z] [BOT] ✅ Loaded V2 database: 393 jobs
[2026-01-12T14:45:33.857Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T14:45:33.857Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T14:45:33.858Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T14:45:33.871Z] [BOT] ✅ Loaded pending queue: 262 total (242 pending, 20 enriched, 0 posted)
[2026-01-12T14:45:33.871Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Director, Product Design at datadog
[2026-01-12T14:45:33.872Z] [BOT] ⏭️  Skipping duplicate: JID_b1499239-i_jr107155 (posted within 7 days)
[2026-01-12T14:45:33.872Z] [BOT] ⏭️ Skipping already posted: Web/Digital Specialist 1 at Sabre
[2026-01-12T14:45:33.873Z] [BOT] ⏭️  Skipping duplicate: JID_08b95b67-i_r18423 (posted within 7 days)
⏭️ Skipping already posted: Workday Extend Developer 1 at Iowa State University
[2026-01-12T14:45:33.873Z] [BOT] ⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-589735 (posted within 7 days)
⏭️ Skipping already posted: Application Support - Java skills - Associate at HEXAWARE
[2026-01-12T14:45:33.873Z] [BOT] ⏭️  Skipping duplicate: JID_a44e73ca-6078916_13942102 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
[2026-01-12T14:45:33.873Z] [BOT] ⏭️  Skipping duplicate: JID_385c8ffa-6078908_13942096-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_60f42868-i_1199912-1 (posted within 7 days)
⏭️ Skipping already posted: Systems/Software Engineer 1 at Hewlett Packard Enterprise
⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 1: ROLE_e67deec4 at Oscar Health
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_530e45ae-ut_r10218884 (posted within 7 days)
[2026-01-12T14:45:33.873Z] [BOT] ⏭️ Skipping already posted: Associate Software Engineer / Software Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_bc80fdc0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
[2026-01-12T14:45:33.874Z] [BOT] ⏭️  Skipping duplicate: JID_160d6d87 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
⏭️  Skipping duplicate: JID_cee4f149-_r58467 (posted within 7 days)
⏭️ Skipping already posted: Software Development Engineer 1 - Early Career at Blue Origin
⏭️  Skipping duplicate: JID_1fec24fe-1_r016047 (posted within 7 days)
⏭️ Skipping already posted: Financial Crimes Data Analyst 1 at Hancock Whitney
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_8f908b75-scientist_r160656 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
[2026-01-12T14:45:33.874Z] [BOT] ⏭️  Skipping duplicate: JID_b87a4832 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Graduate at Distyl AI
⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
⏭️ Skipping already posted: Applied Safety Research Engineer, Safeguards at anthropic
⏭️  Skipping duplicate: JID_33d25482 (posted within 7 days)
⏭️ Skipping already posted: Configuration Analyst 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_3a61670d (posted within 7 days)
[2026-01-12T14:45:33.874Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Microsoft
⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - AI Video Agent at OpusClip
[2026-01-12T14:45:33.874Z] [BOT] ⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Claude Experiences at anthropic
📬 Found 1 new jobs (19 already posted)...
[2026-01-12T14:45:33.874Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-12T14:45:33.874Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-12T14:45:33.875Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-12T14:45:33.875Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T14:45:33.879Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-12T14:45:33.880Z] [BOT] 📍 [ROUTING] "Senior Director, Product Design" @ datadog
[2026-01-12T14:45:33.880Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T14:45:33.887Z] [BOT ERROR] (node:3248) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T14:45:34.060Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Product Design @ datadog in #📣・marketing-jobs
  ✅ Industry: Senior Director, Product Design @ datadog
[2026-01-12T14:45:35.990Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Product Design @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T14:45:37.491Z] [BOT] 💾 Marked as posted: Senior Director, Product Design @ datadog (instance #1)
[2026-01-12T14:45:37.491Z] [BOT] 💾 BEFORE ARCHIVING: 394 jobs in database
[2026-01-12T14:45:37.491Z] [BOT] ✅ No jobs to archive (all 394 jobs within 7-day window)
[2026-01-12T14:45:37.495Z] [BOT] 💾 Saved posted_jobs.json: 394 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T14:45:40.497Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-12T14:45:40.497Z] [BOT] ⏭️  Skipping duplicate: JID_cc075897 (posted within 7 days)
[2026-01-12T14:45:40.507Z] [BOT] ✅ Loaded pending queue: 262 total (242 pending, 20 enriched, 0 posted)
[2026-01-12T14:45:40.527Z] [BOT] ✅ Saved pending queue: 262 total (242 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T14:45:40.581Z] [BOT] 📂 Loaded 2562 existing routing entries
[2026-01-12T14:45:40.643Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-12T14:45:40.643Z] [BOT] Total entries: 2563
   Timestamp: 2026-01-12T14:45:40.629Z
[2026-01-12T14:45:40.644Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-12T14:45:40.644Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T14:45:40.644Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #📣・marketing-jobs: 1 posts
[2026-01-12T14:45:40.644Z] [BOT] 2. #🗽・new-york: 1 posts
[2026-01-12T14:45:40.644Z] [BOT] [STATS] Channel stats saved
[2026-01-12T14:45:42.661Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3248) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*