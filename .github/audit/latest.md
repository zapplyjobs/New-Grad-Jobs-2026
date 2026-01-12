# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T16:08:59.973Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T16:08:49.413Z] ========================================
[2026-01-12T16:08:49.415Z] Discord Bot Execution Log
[2026-01-12T16:08:49.415Z] Environment: GitHub Actions
[2026-01-12T16:08:49.415Z] Node Version: v20.19.6
[2026-01-12T16:08:49.415Z] ========================================
[2026-01-12T16:08:49.415Z] Environment Variables Check:
[2026-01-12T16:08:49.415Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T16:08:49.415Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T16:08:49.415Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T16:08:49.415Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T16:08:49.415Z] 
Multi-Channel Configuration:
[2026-01-12T16:08:49.415Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T16:08:49.415Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T16:08:49.415Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T16:08:49.415Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T16:08:49.416Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T16:08:49.416Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T16:08:49.416Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T16:08:49.416Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T16:08:49.416Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T16:08:49.416Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T16:08:49.416Z] 
Data Files Check:
[2026-01-12T16:08:49.417Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132629 bytes)
[2026-01-12T16:08:49.419Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 227102 bytes)
[2026-01-12T16:08:49.420Z] 
========================================
[2026-01-12T16:08:49.420Z] Starting Enhanced Discord Bot...
[2026-01-12T16:08:49.420Z] ========================================
[2026-01-12T16:08:49.904Z] [BOT] ✅ Loaded V2 database: 399 jobs
[2026-01-12T16:08:50.455Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T16:08:50.456Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T16:08:50.456Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T16:08:50.470Z] [BOT] ✅ Loaded pending queue: 267 total (247 pending, 20 enriched, 0 posted)
[2026-01-12T16:08:50.470Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Manager, Commercial Sales Engineering (AMER - East) at datadog
[2026-01-12T16:08:50.471Z] [BOT] ⏭️  Skipping duplicate: JID_d85041c5 (posted within 7 days)
⏭️ Skipping already posted: Internal Communications Senior Manager (Global Sales) at reddit
[2026-01-12T16:08:50.472Z] [BOT] ⏭️  Skipping duplicate: JID_1f192e6d (posted within 7 days)
⏭️ Skipping already posted: Associate Manager, Compliance at coinbase
[2026-01-12T16:08:50.472Z] [BOT] ⏭️  Skipping duplicate: JID_8fc10dad (posted within 7 days)
⏭️ Skipping already posted: Director, Channels - Global Systems Integrators (AMER) at datadog
[2026-01-12T16:08:50.472Z] [BOT] ⏭️  Skipping duplicate: JID_4e8b8312 (posted within 7 days)
⏭️ Skipping already posted: Product Solutions Architect 3 - Synthetics at datadog
⏭️  Skipping duplicate: JID_e13e860d (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Boston) at datadog
[2026-01-12T16:08:50.473Z] [BOT] ⏭️  Skipping duplicate: JID_cc075897 (posted within 7 days)
⏭️ Skipping already posted: Senior Director, Product Design at datadog
⏭️  Skipping duplicate: JID_b1499239-i_jr107155 (posted within 7 days)
⏭️ Skipping already posted: Web/Digital Specialist 1 at Sabre
⏭️  Skipping duplicate: JID_08b95b67-i_r18423 (posted within 7 days)
⏭️ Skipping already posted: Workday Extend Developer 1 at Iowa State University
⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-589735 (posted within 7 days)
⏭️ Skipping already posted: Application Support - Java skills - Associate at HEXAWARE
⏭️  Skipping duplicate: JID_a44e73ca-6078916_13942102 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_385c8ffa-6078908_13942096-1 (posted within 7 days)
[2026-01-12T16:08:50.473Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_60f42868-i_1199912-1 (posted within 7 days)
⏭️ Skipping already posted: Systems/Software Engineer 1 at Hewlett Packard Enterprise
⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 1: ROLE_e67deec4 at Oscar Health
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_530e45ae-ut_r10218884 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer / Software Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_bc80fdc0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
⏭️  Skipping duplicate: JID_160d6d87 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
⏭️  Skipping duplicate: JID_cee4f149-_r58467 (posted within 7 days)
⏭️ Skipping already posted: Software Development Engineer 1 - Early Career at Blue Origin
⏭️  Skipping duplicate: JID_1fec24fe-1_r016047 (posted within 7 days)
⏭️ Skipping already posted: Financial Crimes Data Analyst 1 at Hancock Whitney
[2026-01-12T16:08:50.473Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_8f908b75-scientist_r160656 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
📬 Found 1 new jobs (19 already posted)...
📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-12T16:08:50.474Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-12T16:08:50.474Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T16:08:50.478Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-12T16:08:50.480Z] [BOT] 📍 [ROUTING] "Manager, Commercial Sales Engineering (AMER - East)" @ datadog
[2026-01-12T16:08:50.480Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T16:08:50.485Z] [BOT ERROR] (node:3295) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T16:08:50.685Z] [BOT] ✅ Created forum post: 🏢 Manager, Commercial Sales Engineering (AMER - East) @ datadog in #💲・sales-jobs
  ✅ Industry: Manager, Commercial Sales Engineering (AMER - East) @ datadog
[2026-01-12T16:08:52.464Z] [BOT] ✅ Created forum post: 🏢 Manager, Commercial Sales Engineering (AMER - East) @ datadog in #🗽・new-york
[2026-01-12T16:08:52.464Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T16:08:53.966Z] [BOT] 💾 Marked as posted: Manager, Commercial Sales Engineering (AMER - East) @ datadog (instance #1)
[2026-01-12T16:08:53.966Z] [BOT] 💾 BEFORE ARCHIVING: 400 jobs in database
[2026-01-12T16:08:53.967Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T16:08:53.972Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-12T16:08:53.972Z] [BOT] ✅ Archiving complete: 1 archived, 399 active
[2026-01-12T16:08:53.976Z] [BOT] 💾 Saved posted_jobs.json: 399 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T16:08:56.977Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-12T16:08:56.977Z] [BOT] ⏭️  Skipping duplicate: JID_e8716d5a (posted within 7 days)
[2026-01-12T16:08:56.993Z] [BOT] ✅ Loaded pending queue: 267 total (247 pending, 20 enriched, 0 posted)
[2026-01-12T16:08:57.011Z] [BOT] ✅ Saved pending queue: 267 total (247 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T16:08:57.073Z] [BOT] 📂 Loaded 2568 existing routing entries
[2026-01-12T16:08:57.138Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2569
   Timestamp: 2026-01-12T16:08:57.128Z
[2026-01-12T16:08:57.139Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 21
[2026-01-12T16:08:57.139Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-12T16:08:57.139Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-12T16:08:57.139Z] [BOT] 1. #💲・sales-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-12T16:08:57.140Z] [BOT] [STATS] Channel stats saved
[2026-01-12T16:08:59.155Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3295) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*