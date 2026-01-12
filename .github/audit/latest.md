# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T07:54:25.783Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T07:54:15.262Z] ========================================
[2026-01-12T07:54:15.264Z] Discord Bot Execution Log
[2026-01-12T07:54:15.264Z] Environment: GitHub Actions
[2026-01-12T07:54:15.264Z] Node Version: v20.19.6
[2026-01-12T07:54:15.264Z] ========================================
[2026-01-12T07:54:15.264Z] Environment Variables Check:
[2026-01-12T07:54:15.264Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T07:54:15.264Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T07:54:15.264Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T07:54:15.265Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T07:54:15.265Z] 
Multi-Channel Configuration:
[2026-01-12T07:54:15.265Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T07:54:15.265Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T07:54:15.265Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T07:54:15.265Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T07:54:15.265Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T07:54:15.265Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T07:54:15.265Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T07:54:15.265Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T07:54:15.265Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T07:54:15.266Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T07:54:15.266Z] 
Data Files Check:
[2026-01-12T07:54:15.266Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59952 bytes)
[2026-01-12T07:54:15.268Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 224186 bytes)
[2026-01-12T07:54:15.268Z] 
========================================
[2026-01-12T07:54:15.268Z] Starting Enhanced Discord Bot...
[2026-01-12T07:54:15.268Z] ========================================
[2026-01-12T07:54:15.795Z] [BOT] ✅ Loaded V2 database: 394 jobs
[2026-01-12T07:54:16.250Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T07:54:16.250Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T07:54:16.250Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T07:54:16.263Z] [BOT] ✅ Loaded pending queue: 263 total (243 pending, 20 enriched, 0 posted)
[2026-01-12T07:54:16.263Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Scientist - Foundation Model - Vision and Language at ByteDance
[2026-01-12T07:54:16.264Z] [BOT] ⏭️  Skipping duplicate: JID_a44e73ca-6078916_13942102 (posted within 7 days)
[2026-01-12T07:54:16.265Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_385c8ffa-6078908_13942096-1 (posted within 7 days)
[2026-01-12T07:54:16.265Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_60f42868-i_1199912-1 (posted within 7 days)
[2026-01-12T07:54:16.265Z] [BOT] ⏭️ Skipping already posted: Systems/Software Engineer 1 at Hewlett Packard Enterprise
⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 1: ROLE_e67deec4 at Oscar Health
[2026-01-12T07:54:16.265Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_530e45ae-ut_r10218884 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer / Software Engineer at Northrop Grumman
[2026-01-12T07:54:16.265Z] [BOT] ⏭️  Skipping duplicate: JID_bc80fdc0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
⏭️  Skipping duplicate: JID_160d6d87 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
⏭️  Skipping duplicate: JID_cee4f149-_r58467 (posted within 7 days)
[2026-01-12T07:54:16.266Z] [BOT] ⏭️ Skipping already posted: Software Development Engineer 1 - Early Career at Blue Origin
⏭️  Skipping duplicate: JID_1fec24fe-1_r016047 (posted within 7 days)
⏭️ Skipping already posted: Financial Crimes Data Analyst 1 at Hancock Whitney
[2026-01-12T07:54:16.266Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_8f908b75-scientist_r160656 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
[2026-01-12T07:54:16.266Z] [BOT] ⏭️  Skipping duplicate: JID_b87a4832 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Graduate at Distyl AI
⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
⏭️ Skipping already posted: Applied Safety Research Engineer, Safeguards at anthropic
[2026-01-12T07:54:16.266Z] [BOT] ⏭️  Skipping duplicate: JID_33d25482 (posted within 7 days)
⏭️ Skipping already posted: Configuration Analyst 1 at Huntington Ingalls Industries
[2026-01-12T07:54:16.266Z] [BOT] ⏭️  Skipping duplicate: JID_3a61670d (posted within 7 days)
[2026-01-12T07:54:16.266Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Microsoft
⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
[2026-01-12T07:54:16.266Z] [BOT] ⏭️ Skipping already posted: Software Engineer - AI Video Agent at OpusClip
⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
[2026-01-12T07:54:16.266Z] [BOT] ⏭️ Skipping already posted: Technical Program Manager, Claude Experiences at anthropic
⏭️  Skipping duplicate: JID_cdd1fa58 (posted within 7 days)
[2026-01-12T07:54:16.266Z] [BOT] ⏭️ Skipping already posted: Technical Program Manager, Launches at anthropic
⏭️  Skipping duplicate: JID_a44e73ca-6078923_13942107 (posted within 7 days)
[2026-01-12T07:54:16.266Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_b52ff88b (posted within 7 days)
[2026-01-12T07:54:16.267Z] [BOT] ⏭️ Skipping already posted: Customer Success Manager, Digital Native Business at anthropic
📬 Found 1 new jobs (19 already posted)...
[2026-01-12T07:54:16.267Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-12T07:54:16.267Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T07:54:16.270Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-12T07:54:16.271Z] [BOT] 📍 [ROUTING] "Research Scientist - Foundation Model - Vision and Language" @ ORG_08c9a13c
[2026-01-12T07:54:16.271Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T07:54:16.288Z] [BOT ERROR] (node:3143) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T07:54:16.555Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Foundation Model - Vision and Language @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Research Scientist - Foundation Model - Vision and Language @ ORG_08c9a13c
[2026-01-12T07:54:18.342Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - Foundation Model - Vision and Language @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T07:54:19.843Z] [BOT] 💾 Marked as posted: Research Scientist - Foundation Model - Vision and Language @ ORG_08c9a13c (instance #1)
[2026-01-12T07:54:19.844Z] [BOT] 💾 BEFORE ARCHIVING: 395 jobs in database
[2026-01-12T07:54:19.845Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T07:54:19.851Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-12T07:54:19.851Z] [BOT] ✅ Archiving complete: 3 archived, 392 active
[2026-01-12T07:54:19.855Z] [BOT] 💾 Saved posted_jobs.json: 392 active jobs
[2026-01-12T07:54:19.855Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T07:54:22.855Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-12T07:54:22.856Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_f968c32f-detail (posted within 7 days)
[2026-01-12T07:54:22.866Z] [BOT] ✅ Loaded pending queue: 263 total (243 pending, 20 enriched, 0 posted)
[2026-01-12T07:54:22.884Z] [BOT] ✅ Saved pending queue: 263 total (243 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-12T07:54:22.884Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T07:54:22.936Z] [BOT] 📂 Loaded 2556 existing routing entries
[2026-01-12T07:54:22.994Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-12T07:54:22.994Z] [BOT] Total entries: 2557
   Timestamp: 2026-01-12T07:54:22.980Z
[2026-01-12T07:54:22.995Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T07:54:22.995Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-12T07:54:22.995Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-12T07:54:22.995Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-12T07:54:22.996Z] [BOT] [STATS] Channel stats saved
[2026-01-12T07:54:25.011Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3143) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*