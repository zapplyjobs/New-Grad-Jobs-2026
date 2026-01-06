# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T21:25:44.660Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T21:25:34.440Z] ========================================
[2026-01-06T21:25:34.442Z] Discord Bot Execution Log
[2026-01-06T21:25:34.442Z] Environment: GitHub Actions
[2026-01-06T21:25:34.442Z] Node Version: v20.19.6
[2026-01-06T21:25:34.442Z] ========================================
[2026-01-06T21:25:34.442Z] Environment Variables Check:
[2026-01-06T21:25:34.442Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T21:25:34.443Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T21:25:34.443Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T21:25:34.443Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T21:25:34.443Z] 
Multi-Channel Configuration:
[2026-01-06T21:25:34.443Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T21:25:34.443Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T21:25:34.443Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T21:25:34.443Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T21:25:34.443Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T21:25:34.443Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T21:25:34.443Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T21:25:34.443Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T21:25:34.444Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T21:25:34.444Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T21:25:34.444Z] 
Data Files Check:
[2026-01-06T21:25:34.445Z] .github/data/new_jobs.json: ✅ Exists (10 items, 163053 bytes)
[2026-01-06T21:25:34.450Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 705351 bytes)
[2026-01-06T21:25:34.450Z] 
========================================
[2026-01-06T21:25:34.450Z] Starting Enhanced Discord Bot...
[2026-01-06T21:25:34.450Z] ========================================
[2026-01-06T21:25:34.975Z] [BOT] ✅ Loaded V2 database: 1380 jobs
[2026-01-06T21:25:35.455Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T21:25:35.455Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T21:25:35.455Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T21:25:35.457Z] [BOT] ✅ Loaded pending queue: 57 total (37 pending, 20 enriched, 0 posted)
[2026-01-06T21:25:35.457Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T21:25:35.458Z] [BOT] [BOT] 🔍 Sample enriched job: Enterprise Education Specialist (Contract) at anthropic
[2026-01-06T21:25:35.458Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
[2026-01-06T21:25:35.459Z] [BOT] ⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-06T21:25:35.459Z] [BOT] ⏭️  Skipping duplicate: JID_65cdf179 (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Claude Developer Platform at anthropic
[2026-01-06T21:25:35.459Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
[2026-01-06T21:25:35.459Z] [BOT] ⏭️ Skipping already posted: Director of UI Engineering, Claude Consumer Products at anthropic
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
[2026-01-06T21:25:35.459Z] [BOT] ⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-06T21:25:35.460Z] [BOT] ⏭️  Skipping duplicate: JID_f82e6a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_58385d7a at anthropic
[2026-01-06T21:25:35.460Z] [BOT] ⏭️  Skipping duplicate: JID_f7d9cbb1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_e42d6991 at figma
[2026-01-06T21:25:35.460Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
⏭️  Skipping duplicate: JID_b7f472ec (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager II - Personalization at spotify
[2026-01-06T21:25:35.460Z] [BOT] ⏭️  Skipping duplicate: JID_c3c61d5c (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Storage at reddit
[2026-01-06T21:25:35.460Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-06T21:25:35.460Z] [BOT] ⏭️  Skipping duplicate: JID_655cfbb9-specialist_r-00172970 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0ebc6431 at Leidos
[2026-01-06T21:25:35.460Z] [BOT] ⏭️  Skipping duplicate: JID_fb69dbe6-icfexternal_career_site-JID_8dbb479e-researcher_r2600017 (posted within 7 days)
⏭️ Skipping already posted: ROLE_13d2701c at ICF International
[2026-01-06T21:25:35.461Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-06T21:25:35.461Z] [BOT] ⏭️  Skipping duplicate: JID_42b8d223 (posted within 7 days)
⏭️ Skipping already posted: AI Machine Learning Engineer 2 at Cisco
⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-06T21:25:35.461Z] [BOT] ⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
⏭️ Skipping already posted: Senior Staff Machine Learning Engineer - Home at spotify
⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
📬 Found 1 new jobs (19 already posted)...
[2026-01-06T21:25:35.461Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-06T21:25:35.462Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-06T21:25:35.462Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-06T21:25:35.462Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T21:25:35.465Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-06T21:25:35.466Z] [BOT] 📍 [ROUTING] "Enterprise Education Specialist (Contract)" @ anthropic
[2026-01-06T21:25:35.466Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-06T21:25:35.470Z] [BOT ERROR] (node:2764) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T21:25:35.746Z] [BOT] ✅ Created forum post: 🏢 Enterprise Education Specialist (Contract) @ anthropic in #📣・marketing-jobs
[2026-01-06T21:25:35.746Z] [BOT] ✅ Industry: Enterprise Education Specialist (Contract) @ anthropic
[2026-01-06T21:25:37.393Z] [BOT] ✅ Created forum post: 🏢 Enterprise Education Specialist (Contract) @ anthropic in #🌉・san-francisco
[2026-01-06T21:25:37.393Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-06T21:25:38.895Z] [BOT] 💾 Marked as posted: Enterprise Education Specialist (Contract) @ anthropic (instance #1)
[2026-01-06T21:25:38.895Z] [BOT] 💾 BEFORE ARCHIVING: 1381 jobs in database
[2026-01-06T21:25:38.897Z] [BOT] ✅ No jobs to archive (all 1381 jobs within 7-day window)
[2026-01-06T21:25:38.912Z] [BOT] 💾 Saved posted_jobs.json: 1381 active jobs
[2026-01-06T21:25:38.912Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T21:25:41.911Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-06T21:25:41.912Z] [BOT] ⏭️  Skipping duplicate: JID_617408df (posted within 7 days)
[2026-01-06T21:25:41.914Z] [BOT] ✅ Loaded pending queue: 57 total (37 pending, 20 enriched, 0 posted)
[2026-01-06T21:25:41.917Z] [BOT] ✅ Saved pending queue: 57 total (37 pending, 19 enriched, 1 posted)
[2026-01-06T21:25:41.917Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T21:25:41.972Z] [BOT] 📂 Loaded 2309 existing routing entries
[2026-01-06T21:25:42.032Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-06T21:25:42.032Z] [BOT] Total entries: 2310
   Timestamp: 2026-01-06T21:25:42.017Z
[2026-01-06T21:25:42.032Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T21:25:42.032Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-06T21:25:42.033Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-06T21:25:42.033Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #📣・marketing-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-06T21:25:42.033Z] [BOT] [STATS] Channel stats saved
[2026-01-06T21:25:44.045Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2764) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*