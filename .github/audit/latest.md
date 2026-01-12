# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T15:08:57.891Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T15:08:46.472Z] ========================================
[2026-01-12T15:08:46.474Z] Discord Bot Execution Log
[2026-01-12T15:08:46.474Z] Environment: GitHub Actions
[2026-01-12T15:08:46.474Z] Node Version: v20.19.6
[2026-01-12T15:08:46.475Z] ========================================
[2026-01-12T15:08:46.475Z] Environment Variables Check:
[2026-01-12T15:08:46.475Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T15:08:46.475Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T15:08:46.475Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T15:08:46.475Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T15:08:46.475Z] 
Multi-Channel Configuration:
[2026-01-12T15:08:46.475Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T15:08:46.475Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T15:08:46.476Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T15:08:46.476Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T15:08:46.476Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T15:08:46.476Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T15:08:46.476Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T15:08:46.476Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T15:08:46.476Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T15:08:46.476Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T15:08:46.476Z] 
Data Files Check:
[2026-01-12T15:08:46.477Z] .github/data/new_jobs.json: ✅ Exists (10 items, 88881 bytes)
[2026-01-12T15:08:46.478Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 225143 bytes)
[2026-01-12T15:08:46.478Z] 
========================================
[2026-01-12T15:08:46.478Z] Starting Enhanced Discord Bot...
[2026-01-12T15:08:46.478Z] ========================================
[2026-01-12T15:08:47.019Z] [BOT] ✅ Loaded V2 database: 395 jobs
[2026-01-12T15:08:47.738Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T15:08:47.738Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T15:08:47.738Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T15:08:47.751Z] [BOT] ✅ Loaded pending queue: 264 total (244 pending, 20 enriched, 0 posted)
[2026-01-12T15:08:47.752Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Product Solutions Architect 3 - Synthetics at datadog
[2026-01-12T15:08:47.753Z] [BOT] ⏭️  Skipping duplicate: JID_e13e860d (posted within 7 days)
[2026-01-12T15:08:47.753Z] [BOT] ⏭️ Skipping already posted: Sales Development Representative (Boston) at datadog
[2026-01-12T15:08:47.753Z] [BOT] ⏭️  Skipping duplicate: JID_cc075897 (posted within 7 days)
⏭️ Skipping already posted: Senior Director, Product Design at datadog
⏭️  Skipping duplicate: JID_b1499239-i_jr107155 (posted within 7 days)
[2026-01-12T15:08:47.753Z] [BOT] ⏭️ Skipping already posted: Web/Digital Specialist 1 at Sabre
⏭️  Skipping duplicate: JID_08b95b67-i_r18423 (posted within 7 days)
⏭️ Skipping already posted: Workday Extend Developer 1 at Iowa State University
[2026-01-12T15:08:47.753Z] [BOT] ⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-589735 (posted within 7 days)
⏭️ Skipping already posted: Application Support - Java skills - Associate at HEXAWARE
⏭️  Skipping duplicate: JID_a44e73ca-6078916_13942102 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
[2026-01-12T15:08:47.754Z] [BOT] ⏭️  Skipping duplicate: JID_385c8ffa-6078908_13942096-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_60f42868-i_1199912-1 (posted within 7 days)
⏭️ Skipping already posted: Systems/Software Engineer 1 at Hewlett Packard Enterprise
⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 1: ROLE_e67deec4 at Oscar Health
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_530e45ae-ut_r10218884 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer / Software Engineer at Northrop Grumman
[2026-01-12T15:08:47.754Z] [BOT] ⏭️  Skipping duplicate: JID_bc80fdc0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
⏭️  Skipping duplicate: JID_160d6d87 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
[2026-01-12T15:08:47.754Z] [BOT] ⏭️  Skipping duplicate: JID_cee4f149-_r58467 (posted within 7 days)
⏭️ Skipping already posted: Software Development Engineer 1 - Early Career at Blue Origin
[2026-01-12T15:08:47.754Z] [BOT] ⏭️  Skipping duplicate: JID_1fec24fe-1_r016047 (posted within 7 days)
⏭️ Skipping already posted: Financial Crimes Data Analyst 1 at Hancock Whitney
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_8f908b75-scientist_r160656 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
⏭️  Skipping duplicate: JID_b87a4832 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Graduate at Distyl AI
[2026-01-12T15:08:47.755Z] [BOT] ⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
⏭️ Skipping already posted: Applied Safety Research Engineer, Safeguards at anthropic
⏭️  Skipping duplicate: JID_33d25482 (posted within 7 days)
⏭️ Skipping already posted: Configuration Analyst 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_3a61670d (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Microsoft
📬 Found 1 new jobs (19 already posted)...
[2026-01-12T15:08:47.755Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-12T15:08:47.755Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-12T15:08:47.755Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-12T15:08:47.756Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T15:08:47.758Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-12T15:08:47.759Z] [BOT] 📍 [ROUTING] "Product Solutions Architect 3 - Synthetics" @ datadog
[2026-01-12T15:08:47.759Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T15:08:47.764Z] [BOT ERROR] (node:3268) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T15:08:48.046Z] [BOT] ✅ Created forum post: 🏢 Product Solutions Architect 3 - Synthetics @ datadog in #💲・sales-jobs
[2026-01-12T15:08:48.046Z] [BOT] ✅ Industry: Product Solutions Architect 3 - Synthetics @ datadog
[2026-01-12T15:08:49.854Z] [BOT] ✅ Created forum post: 🏢 Product Solutions Architect 3 - Synthetics @ datadog in #🗽・new-york
[2026-01-12T15:08:49.854Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T15:08:51.354Z] [BOT] 💾 Marked as posted: Product Solutions Architect 3 - Synthetics @ datadog (instance #1)
[2026-01-12T15:08:51.354Z] [BOT] 💾 BEFORE ARCHIVING: 396 jobs in database
[2026-01-12T15:08:51.355Z] [BOT] ✅ No jobs to archive (all 396 jobs within 7-day window)
[2026-01-12T15:08:51.363Z] [BOT] 💾 Saved posted_jobs.json: 396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T15:08:54.363Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-12T15:08:54.363Z] [BOT] ⏭️  Skipping duplicate: JID_4e8b8312 (posted within 7 days)
[2026-01-12T15:08:54.375Z] [BOT] ✅ Loaded pending queue: 264 total (244 pending, 20 enriched, 0 posted)
[2026-01-12T15:08:54.393Z] [BOT] ✅ Saved pending queue: 264 total (244 pending, 19 enriched, 1 posted)
[2026-01-12T15:08:54.394Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T15:08:54.446Z] [BOT] 📂 Loaded 2564 existing routing entries
[2026-01-12T15:08:54.506Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-12T15:08:54.507Z] [BOT] Total entries: 2565
   Timestamp: 2026-01-12T15:08:54.492Z
[2026-01-12T15:08:54.507Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-12T15:08:54.507Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2026-01-12T15:08:54.507Z] [BOT] Top channels:
     1. #💲・sales-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-12T15:08:54.508Z] [BOT] [STATS] Channel stats saved
[2026-01-12T15:08:56.522Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3268) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*