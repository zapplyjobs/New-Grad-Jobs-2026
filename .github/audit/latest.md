# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T11:52:25.367Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T11:52:08.029Z] ========================================
[2026-01-08T11:52:08.031Z] Discord Bot Execution Log
[2026-01-08T11:52:08.031Z] Environment: GitHub Actions
[2026-01-08T11:52:08.031Z] Node Version: v20.19.6
[2026-01-08T11:52:08.031Z] ========================================
[2026-01-08T11:52:08.031Z] Environment Variables Check:
[2026-01-08T11:52:08.031Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T11:52:08.031Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T11:52:08.031Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T11:52:08.031Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T11:52:08.031Z] 
Multi-Channel Configuration:
[2026-01-08T11:52:08.031Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T11:52:08.031Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T11:52:08.031Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T11:52:08.031Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T11:52:08.031Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T11:52:08.031Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T11:52:08.031Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T11:52:08.031Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T11:52:08.031Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T11:52:08.031Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T11:52:08.031Z] 
Data Files Check:
[2026-01-08T11:52:08.032Z] .github/data/new_jobs.json: ✅ Exists (10 items, 76179 bytes)
[2026-01-08T11:52:08.038Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 759159 bytes)
[2026-01-08T11:52:08.039Z] 
========================================
[2026-01-08T11:52:08.039Z] Starting Enhanced Discord Bot...
[2026-01-08T11:52:08.039Z] ========================================
[2026-01-08T11:52:08.501Z] [BOT] ✅ Loaded V2 database: 1472 jobs
[2026-01-08T11:52:09.216Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T11:52:09.216Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T11:52:09.216Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T11:52:09.222Z] [BOT] ✅ Loaded pending queue: 152 total (132 pending, 20 enriched, 0 posted)
[2026-01-08T11:52:09.223Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Associate in Theoretical and Computational Condensed Matter Physics at Brookhaven Lab
[2026-01-08T11:52:09.224Z] [BOT] ⏭️  Skipping duplicate: JID_01e0d84a-engineer_r2356 (posted within 7 days)
[2026-01-08T11:52:09.224Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Marigold
[2026-01-08T11:52:09.225Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a207b67e (posted within 7 days)
⏭️ Skipping already posted: Data Scientist Graduate - Product Analytics at TikTok
[2026-01-08T11:52:09.225Z] [BOT] ⏭️  Skipping duplicate: JID_0f879d42-analyst_req20170647-1 (posted within 7 days)
[2026-01-08T11:52:09.225Z] [BOT] ⏭️ Skipping already posted: ROLE_293d5dbd at University of Southern California
[2026-01-08T11:52:09.225Z] [BOT] ⏭️  Skipping duplicate: JID_eef78c7a (posted within 7 days)
⏭️ Skipping already posted: ROLE_6617ee94 at anthropic
⏭️  Skipping duplicate: JID_ef4d2400-i_1021666 (posted within 7 days)
⏭️ Skipping already posted: Research Data Analyst 1 at Children's Hospital of Philadelphia
[2026-01-08T11:52:09.225Z] [BOT] ⏭️  Skipping duplicate: JID_62d2699c-engineer_req329855-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at T-Mobile
⏭️  Skipping duplicate: JID_fce86b06 (posted within 7 days)
⏭️ Skipping already posted: ROLE_da6ab17d at Wyld
[2026-01-08T11:52:09.225Z] [BOT] ⏭️  Skipping duplicate: JID_049d09e3-pnw_req451478 (posted within 7 days)
⏭️ Skipping already posted: Research Analyst - Pnw at Jones Lang LaSalle (JLL)
[2026-01-08T11:52:09.226Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_54c2d808-_r10218502 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Level - Space Systems at Northrop Grumman
[2026-01-08T11:52:09.226Z] [BOT] ⏭️  Skipping duplicate: JID_1d09d870-sre_r-233208 (posted within 7 days)
⏭️ Skipping already posted: ROLE_06bb8f8e at Amgen
[2026-01-08T11:52:09.226Z] [BOT] ⏭️  Skipping duplicate: JID_1980d06d-external_careers-JID_ff8193b5-engineer_r50546 (posted within 7 days)
[2026-01-08T11:52:09.226Z] [BOT] ⏭️ Skipping already posted: C++ Software Engineer at Cadence Design Systems
[2026-01-08T11:52:09.226Z] [BOT] ⏭️  Skipping duplicate: JID_805eae31 (posted within 7 days)
⏭️ Skipping already posted: Early Career Talent - Data Engineer at Western Digital
[2026-01-08T11:52:09.226Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_9d76ad12-quality_r10218213 (posted within 7 days)
[2026-01-08T11:52:09.226Z] [BOT] ⏭️ Skipping already posted: Quality Engineer - Principal Quality Engineer at Northrop Grumman
[2026-01-08T11:52:09.226Z] [BOT] ⏭️  Skipping duplicate: JID_6a6f08a0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_e06b3b02 at Accenture
[2026-01-08T11:52:09.226Z] [BOT] ⏭️  Skipping duplicate: JID_fb1c39ec (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder Frameworks at Twitch
⏭️  Skipping duplicate: JID_c08a3b17 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Integrations at Pinwheel
[2026-01-08T11:52:09.226Z] [BOT] ⏭️  Skipping duplicate: JID_8bbaf901 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ed4792d at Critical Mass
[2026-01-08T11:52:09.227Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23248 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
📬 Found 2 new jobs (18 already posted)...
[2026-01-08T11:52:09.227Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-08T11:52:09.227Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-08T11:52:09.227Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-08T11:52:09.227Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T11:52:09.229Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-08T11:52:09.231Z] [BOT] 📍 [ROUTING] "Research Associate in Theoretical and Computational Condensed Matter Physics" @ ORG_13e36faa Lab
   Category: AI (matched: "machine learning")
[2026-01-08T11:52:09.231Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-08T11:52:09.248Z] [BOT ERROR] (node:3471) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T11:52:09.461Z] [BOT] ✅ Created forum post: 🏢 Research Associate in Theoretical and Computational Condensed Matter Physics @ ORG_13e36faa Lab in #🤖・ai-jobs
  ✅ Industry: Research Associate in Theoretical and Computational Condensed Matter Physics @ ORG_13e36faa Lab
[2026-01-08T11:52:11.156Z] [BOT] ✅ Created forum post: 🏢 Research Associate in Theoretical and Computational Condensed Matter Physics @ ORG_13e36faa Lab in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-08T11:52:12.658Z] [BOT] 💾 Marked as posted: Research Associate in Theoretical and Computational Condensed Matter Physics @ ORG_13e36faa Lab (instance #1)
[2026-01-08T11:52:12.658Z] [BOT] 💾 BEFORE ARCHIVING: 1473 jobs in database
[2026-01-08T11:52:12.660Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T11:52:12.663Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
✅ Archiving complete: 1 archived, 1472 active
[2026-01-08T11:52:12.673Z] [BOT] 💾 Saved posted_jobs.json: 1472 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T11:52:15.674Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-08T11:52:15.675Z] [BOT] 📍 [ROUTING] "Medical Assistant" @ ORG_68fe6a36 Brook Medicine University Physicians
   Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-08T11:52:16.159Z] [BOT] ✅ Created forum post: 🏢 Medical Assistant @ ORG_68fe6a36 Brook Medicine University Physicians in #🩺・healthcare-jobs
  ✅ Industry: Medical Assistant @ ORG_68fe6a36 Brook Medicine University Physicians
[2026-01-08T11:52:17.980Z] [BOT] ✅ Created forum post: 🏢 Medical Assistant @ ORG_68fe6a36 Brook Medicine University Physicians in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-08T11:52:19.481Z] [BOT] 💾 Marked as posted: Medical Assistant @ ORG_68fe6a36 Brook Medicine University Physicians (instance #1)
💾 BEFORE ARCHIVING: 1473 jobs in database
[2026-01-08T11:52:19.482Z] [BOT] ✅ No jobs to archive (all 1473 jobs within 7-day window)
[2026-01-08T11:52:19.492Z] [BOT] 💾 Saved posted_jobs.json: 1473 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T11:52:22.494Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-08T11:52:22.494Z] [BOT] ⏭️  Skipping duplicate: JID_d941c973-physics_jr102043 (posted within 7 days)
[2026-01-08T11:52:22.494Z] [BOT] ⏭️  Skipping duplicate: JID_896ab95e (posted within 7 days)
[2026-01-08T11:52:22.502Z] [BOT] ✅ Loaded pending queue: 152 total (132 pending, 20 enriched, 0 posted)
[2026-01-08T11:52:22.511Z] [BOT] ✅ Saved pending queue: 152 total (132 pending, 18 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-01-08T11:52:22.511Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-08T11:52:22.575Z] [BOT] 📂 Loaded 2417 existing routing entries
[2026-01-08T11:52:22.633Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-08T11:52:22.633Z] [BOT] Total entries: 2419
   Timestamp: 2026-01-08T11:52:22.624Z
[2026-01-08T11:52:22.634Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
   Total attempts: 22
[2026-01-08T11:52:22.634Z] [BOT] Successful: 4
   Failed: 0
   Skipped: 18
[2026-01-08T11:52:22.634Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-08T11:52:22.634Z] [BOT] Total posts: 4
   Channels used: 3
   Top channels:
[2026-01-08T11:52:22.634Z] [BOT] 1. #🗽・new-york: 2 posts
     2. #🤖・ai-jobs: 1 posts
     3. #🩺・healthcare-jobs: 1 posts
[2026-01-08T11:52:22.634Z] [BOT] [STATS] Channel stats saved
[2026-01-08T11:52:24.646Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3471) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*