# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T11:25:59.442Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T11:25:48.922Z] ========================================
[2026-01-08T11:25:48.924Z] Discord Bot Execution Log
[2026-01-08T11:25:48.924Z] Environment: GitHub Actions
[2026-01-08T11:25:48.924Z] Node Version: v20.19.6
[2026-01-08T11:25:48.925Z] ========================================
[2026-01-08T11:25:48.925Z] Environment Variables Check:
[2026-01-08T11:25:48.925Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T11:25:48.925Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T11:25:48.925Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T11:25:48.925Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T11:25:48.925Z] 
Multi-Channel Configuration:
[2026-01-08T11:25:48.925Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T11:25:48.925Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T11:25:48.925Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T11:25:48.926Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T11:25:48.926Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T11:25:48.926Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T11:25:48.926Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T11:25:48.926Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T11:25:48.926Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T11:25:48.926Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T11:25:48.926Z] 
Data Files Check:
[2026-01-08T11:25:48.927Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66268 bytes)
[2026-01-08T11:25:48.933Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 758611 bytes)
[2026-01-08T11:25:48.933Z] 
========================================
[2026-01-08T11:25:48.933Z] Starting Enhanced Discord Bot...
[2026-01-08T11:25:48.933Z] ========================================
[2026-01-08T11:25:49.466Z] [BOT] ✅ Loaded V2 database: 1471 jobs
[2026-01-08T11:25:49.939Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T11:25:49.939Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T11:25:49.940Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T11:25:49.949Z] [BOT] ✅ Loaded pending queue: 150 total (130 pending, 20 enriched, 0 posted)
[2026-01-08T11:25:49.949Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-08T11:25:49.949Z] [BOT] [BOT] 🔍 Sample enriched job: Data Analyst at Buxton
[2026-01-08T11:25:49.950Z] [BOT] ⏭️  Skipping duplicate: JID_01e0d84a-engineer_r2356 (posted within 7 days)
[2026-01-08T11:25:49.950Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Marigold
[2026-01-08T11:25:49.951Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a207b67e (posted within 7 days)
⏭️ Skipping already posted: Data Scientist Graduate - Product Analytics at TikTok
[2026-01-08T11:25:49.951Z] [BOT] ⏭️  Skipping duplicate: JID_0f879d42-analyst_req20170647-1 (posted within 7 days)
[2026-01-08T11:25:49.951Z] [BOT] ⏭️ Skipping already posted: ROLE_293d5dbd at University of Southern California
⏭️  Skipping duplicate: JID_eef78c7a (posted within 7 days)
⏭️ Skipping already posted: ROLE_6617ee94 at anthropic
[2026-01-08T11:25:49.951Z] [BOT] ⏭️  Skipping duplicate: JID_ef4d2400-i_1021666 (posted within 7 days)
⏭️ Skipping already posted: Research Data Analyst 1 at Children's Hospital of Philadelphia
[2026-01-08T11:25:49.951Z] [BOT] ⏭️  Skipping duplicate: JID_62d2699c-engineer_req329855-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at T-Mobile
[2026-01-08T11:25:49.951Z] [BOT] ⏭️  Skipping duplicate: JID_fce86b06 (posted within 7 days)
⏭️ Skipping already posted: ROLE_da6ab17d at Wyld
[2026-01-08T11:25:49.951Z] [BOT] ⏭️  Skipping duplicate: JID_049d09e3-pnw_req451478 (posted within 7 days)
⏭️ Skipping already posted: Research Analyst - Pnw at Jones Lang LaSalle (JLL)
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_54c2d808-_r10218502 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Level - Space Systems at Northrop Grumman
[2026-01-08T11:25:49.952Z] [BOT] ⏭️  Skipping duplicate: JID_1d09d870-sre_r-233208 (posted within 7 days)
⏭️ Skipping already posted: ROLE_06bb8f8e at Amgen
⏭️  Skipping duplicate: JID_1980d06d-external_careers-JID_ff8193b5-engineer_r50546 (posted within 7 days)
[2026-01-08T11:25:49.952Z] [BOT] ⏭️ Skipping already posted: C++ Software Engineer at Cadence Design Systems
⏭️  Skipping duplicate: JID_805eae31 (posted within 7 days)
⏭️ Skipping already posted: Early Career Talent - Data Engineer at Western Digital
[2026-01-08T11:25:49.952Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_9d76ad12-quality_r10218213 (posted within 7 days)
⏭️ Skipping already posted: Quality Engineer - Principal Quality Engineer at Northrop Grumman
[2026-01-08T11:25:49.952Z] [BOT] ⏭️  Skipping duplicate: JID_6a6f08a0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_e06b3b02 at Accenture
[2026-01-08T11:25:49.952Z] [BOT] ⏭️  Skipping duplicate: JID_fb1c39ec (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder Frameworks at Twitch
[2026-01-08T11:25:49.952Z] [BOT] ⏭️  Skipping duplicate: JID_c08a3b17 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Integrations at Pinwheel
[2026-01-08T11:25:49.952Z] [BOT] ⏭️  Skipping duplicate: JID_8bbaf901 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ed4792d at Critical Mass
⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23248 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
⏭️  Skipping duplicate: JID_3255e497-i_r-48234 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BCBST
[2026-01-08T11:25:49.953Z] [BOT] 📬 Found 1 new jobs (19 already posted)...
[2026-01-08T11:25:49.953Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-08T11:25:49.953Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-08T11:25:49.953Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T11:25:49.953Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T11:25:49.954Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-08T11:25:49.956Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_f02f7547
[2026-01-08T11:25:49.956Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-08T11:25:49.961Z] [BOT ERROR] (node:3436) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T11:25:50.306Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_f02f7547  in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_f02f7547
[2026-01-08T11:25:51.979Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_f02f7547  in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-08T11:25:53.480Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_f02f7547  (instance #1)
[2026-01-08T11:25:53.481Z] [BOT] 💾 BEFORE ARCHIVING: 1472 jobs in database
[2026-01-08T11:25:53.482Z] [BOT] ✅ No jobs to archive (all 1472 jobs within 7-day window)
[2026-01-08T11:25:53.496Z] [BOT] 💾 Saved posted_jobs.json: 1472 active jobs
[2026-01-08T11:25:53.496Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T11:25:56.497Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T11:25:56.498Z] [BOT] ⏭️  Skipping duplicate: JID_fbb095bf (posted within 7 days)
[2026-01-08T11:25:56.505Z] [BOT] ✅ Loaded pending queue: 150 total (130 pending, 20 enriched, 0 posted)
[2026-01-08T11:25:56.514Z] [BOT] ✅ Saved pending queue: 150 total (130 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T11:25:56.566Z] [BOT] 📂 Loaded 2416 existing routing entries
[2026-01-08T11:25:56.627Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2417
   Timestamp: 2026-01-08T11:25:56.617Z
[2026-01-08T11:25:56.628Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
   Total attempts: 21
[2026-01-08T11:25:56.628Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-08T11:25:56.628Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-08T11:25:56.629Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #📈・JID_fb739488: 1 posts
[2026-01-08T11:25:56.629Z] [BOT] 2. #🤠・austin: 1 posts
[2026-01-08T11:25:56.629Z] [BOT] [STATS] Channel stats saved
[2026-01-08T11:25:58.640Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3436) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*