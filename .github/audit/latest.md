# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T11:39:15.425Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T11:39:05.390Z] ========================================
[2026-01-12T11:39:05.392Z] Discord Bot Execution Log
[2026-01-12T11:39:05.392Z] Environment: GitHub Actions
[2026-01-12T11:39:05.392Z] Node Version: v20.19.6
[2026-01-12T11:39:05.392Z] ========================================
[2026-01-12T11:39:05.392Z] Environment Variables Check:
[2026-01-12T11:39:05.393Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T11:39:05.393Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T11:39:05.393Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T11:39:05.393Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T11:39:05.393Z] 
Multi-Channel Configuration:
[2026-01-12T11:39:05.393Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T11:39:05.393Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T11:39:05.393Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T11:39:05.393Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T11:39:05.393Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T11:39:05.393Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T11:39:05.393Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T11:39:05.394Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T11:39:05.394Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T11:39:05.394Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T11:39:05.394Z] 
Data Files Check:
[2026-01-12T11:39:05.394Z] .github/data/new_jobs.json: ✅ Exists (10 items, 60841 bytes)
[2026-01-12T11:39:05.396Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 223283 bytes)
[2026-01-12T11:39:05.396Z] 
========================================
[2026-01-12T11:39:05.396Z] Starting Enhanced Discord Bot...
[2026-01-12T11:39:05.396Z] ========================================
[2026-01-12T11:39:05.916Z] [BOT] ✅ Loaded V2 database: 392 jobs
[2026-01-12T11:39:06.270Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T11:39:06.271Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T11:39:06.271Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T11:39:06.283Z] [BOT] ✅ Loaded pending queue: 259 total (239 pending, 20 enriched, 0 posted)
[2026-01-12T11:39:06.284Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Application Support - Java skills - Associate at HEXAWARE
[2026-01-12T11:39:06.285Z] [BOT] ⏭️  Skipping duplicate: JID_a44e73ca-6078916_13942102 (posted within 7 days)
[2026-01-12T11:39:06.285Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
[2026-01-12T11:39:06.285Z] [BOT] ⏭️  Skipping duplicate: JID_385c8ffa-6078908_13942096-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
[2026-01-12T11:39:06.285Z] [BOT] ⏭️  Skipping duplicate: JID_60f42868-i_1199912-1 (posted within 7 days)
⏭️ Skipping already posted: Systems/Software Engineer 1 at Hewlett Packard Enterprise
⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
[2026-01-12T11:39:06.285Z] [BOT] ⏭️ Skipping already posted: Data Scientist 1: ROLE_e67deec4 at Oscar Health
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_530e45ae-ut_r10218884 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer / Software Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_bc80fdc0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
[2026-01-12T11:39:06.286Z] [BOT] ⏭️  Skipping duplicate: JID_160d6d87 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
⏭️  Skipping duplicate: JID_cee4f149-_r58467 (posted within 7 days)
⏭️ Skipping already posted: Software Development Engineer 1 - Early Career at Blue Origin
⏭️  Skipping duplicate: JID_1fec24fe-1_r016047 (posted within 7 days)
⏭️ Skipping already posted: Financial Crimes Data Analyst 1 at Hancock Whitney
[2026-01-12T11:39:06.286Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_8f908b75-scientist_r160656 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
[2026-01-12T11:39:06.286Z] [BOT] ⏭️  Skipping duplicate: JID_b87a4832 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Graduate at Distyl AI
[2026-01-12T11:39:06.286Z] [BOT] ⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
⏭️ Skipping already posted: Applied Safety Research Engineer, Safeguards at anthropic
⏭️  Skipping duplicate: JID_33d25482 (posted within 7 days)
⏭️ Skipping already posted: Configuration Analyst 1 at Huntington Ingalls Industries
[2026-01-12T11:39:06.286Z] [BOT] ⏭️  Skipping duplicate: JID_3a61670d (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Microsoft
[2026-01-12T11:39:06.286Z] [BOT] ⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - AI Video Agent at OpusClip
[2026-01-12T11:39:06.286Z] [BOT] ⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Claude Experiences at anthropic
[2026-01-12T11:39:06.286Z] [BOT] ⏭️  Skipping duplicate: JID_cdd1fa58 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Launches at anthropic
⏭️  Skipping duplicate: JID_a44e73ca-6078923_13942107 (posted within 7 days)
[2026-01-12T11:39:06.286Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_b52ff88b (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Business at anthropic
[2026-01-12T11:39:06.287Z] [BOT] 📬 Found 1 new jobs (19 already posted)...
[2026-01-12T11:39:06.287Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-12T11:39:06.287Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-12T11:39:06.287Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-12T11:39:06.287Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T11:39:06.289Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-12T11:39:06.290Z] [BOT] 📍 [ROUTING] "Application Support - Java skills - Associate" @ ORG_cb204781
[2026-01-12T11:39:06.290Z] [BOT] Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T11:39:06.295Z] [BOT ERROR] (node:3247) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T11:39:06.450Z] [BOT] ✅ Created forum post: 🏢 Application Support - Java skills - Associate @ ORG_cb204781 in #💻・tech-jobs
  ✅ Industry: Application Support - Java skills - Associate @ ORG_cb204781
[2026-01-12T11:39:08.115Z] [BOT] ✅ Created forum post: 🏢 Application Support - Java skills - Associate @ ORG_cb204781 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-12T11:39:09.617Z] [BOT] 💾 Marked as posted: Application Support - Java skills - Associate @ ORG_cb204781 (instance #1)
[2026-01-12T11:39:09.617Z] [BOT] 💾 BEFORE ARCHIVING: 393 jobs in database
[2026-01-12T11:39:09.618Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T11:39:09.623Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-12T11:39:09.623Z] [BOT] ✅ Archiving complete: 2 archived, 391 active
[2026-01-12T11:39:09.627Z] [BOT] 💾 Saved posted_jobs.json: 391 active jobs
[2026-01-12T11:39:09.627Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T11:39:12.627Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-12T11:39:12.628Z] [BOT] ⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-589735 (posted within 7 days)
[2026-01-12T11:39:12.637Z] [BOT] ✅ Loaded pending queue: 259 total (239 pending, 20 enriched, 0 posted)
[2026-01-12T11:39:12.655Z] [BOT] ✅ Saved pending queue: 259 total (239 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-12T11:39:12.655Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T11:39:12.708Z] [BOT] 📂 Loaded 2557 existing routing entries
[2026-01-12T11:39:12.767Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2558
[2026-01-12T11:39:12.767Z] [BOT] Timestamp: 2026-01-12T11:39:12.753Z
[2026-01-12T11:39:12.767Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T11:39:12.767Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-12T11:39:12.768Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-12T11:39:12.768Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🤠・austin: 1 posts
[2026-01-12T11:39:12.768Z] [BOT] [STATS] Channel stats saved
[2026-01-12T11:39:14.782Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3247) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*