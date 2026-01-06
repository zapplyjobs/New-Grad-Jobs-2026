# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T20:52:13.936Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T20:52:05.085Z] ========================================
[2026-01-06T20:52:05.087Z] Discord Bot Execution Log
[2026-01-06T20:52:05.087Z] Environment: GitHub Actions
[2026-01-06T20:52:05.087Z] Node Version: v20.19.6
[2026-01-06T20:52:05.087Z] ========================================
[2026-01-06T20:52:05.087Z] Environment Variables Check:
[2026-01-06T20:52:05.087Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T20:52:05.087Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T20:52:05.087Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T20:52:05.087Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T20:52:05.087Z] 
Multi-Channel Configuration:
[2026-01-06T20:52:05.087Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T20:52:05.088Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T20:52:05.088Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T20:52:05.088Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T20:52:05.088Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T20:52:05.088Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T20:52:05.088Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T20:52:05.088Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T20:52:05.088Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T20:52:05.088Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T20:52:05.088Z] 
Data Files Check:
[2026-01-06T20:52:05.089Z] .github/data/new_jobs.json: ✅ Exists (10 items, 164143 bytes)
[2026-01-06T20:52:05.095Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 704871 bytes)
[2026-01-06T20:52:05.095Z] 
========================================
[2026-01-06T20:52:05.095Z] Starting Enhanced Discord Bot...
[2026-01-06T20:52:05.095Z] ========================================
[2026-01-06T20:52:05.625Z] [BOT] ✅ Loaded V2 database: 1379 jobs
[2026-01-06T20:52:06.183Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T20:52:06.183Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T20:52:06.183Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T20:52:06.185Z] [BOT] ✅ Loaded pending queue: 56 total (36 pending, 20 enriched, 0 posted)
[2026-01-06T20:52:06.185Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T20:52:06.186Z] [BOT] [BOT] 🔍 Sample enriched job: Sales Development Representative (Denver) at datadog
[2026-01-06T20:52:06.187Z] [BOT] ⏭️  Skipping duplicate: JID_65cdf179 (posted within 7 days)
[2026-01-06T20:52:06.187Z] [BOT] ⏭️ Skipping already posted: Product Designer, Claude Developer Platform at anthropic
[2026-01-06T20:52:06.187Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
⏭️ Skipping already posted: Director of UI Engineering, Claude Consumer Products at anthropic
[2026-01-06T20:52:06.187Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
[2026-01-06T20:52:06.188Z] [BOT] ⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-06T20:52:06.188Z] [BOT] ⏭️  Skipping duplicate: JID_f82e6a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_58385d7a at anthropic
⏭️  Skipping duplicate: JID_f7d9cbb1 (posted within 7 days)
[2026-01-06T20:52:06.188Z] [BOT] ⏭️ Skipping already posted: ROLE_e42d6991 at figma
[2026-01-06T20:52:06.188Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-06T20:52:06.188Z] [BOT] ⏭️  Skipping duplicate: JID_b7f472ec (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager II - Personalization at spotify
⏭️  Skipping duplicate: JID_c3c61d5c (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Storage at reddit
[2026-01-06T20:52:06.188Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-06T20:52:06.189Z] [BOT] ⏭️  Skipping duplicate: JID_655cfbb9-specialist_r-00172970 (posted within 7 days)
[2026-01-06T20:52:06.189Z] [BOT] ⏭️ Skipping already posted: ROLE_0ebc6431 at Leidos
[2026-01-06T20:52:06.189Z] [BOT] ⏭️  Skipping duplicate: JID_fb69dbe6-icfexternal_career_site-JID_8dbb479e-researcher_r2600017 (posted within 7 days)
⏭️ Skipping already posted: ROLE_13d2701c at ICF International
[2026-01-06T20:52:06.189Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-06T20:52:06.189Z] [BOT] ⏭️  Skipping duplicate: JID_42b8d223 (posted within 7 days)
⏭️ Skipping already posted: AI Machine Learning Engineer 2 at Cisco
[2026-01-06T20:52:06.189Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
[2026-01-06T20:52:06.189Z] [BOT] ⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
⏭️ Skipping already posted: Senior Staff Machine Learning Engineer - Home at spotify
[2026-01-06T20:52:06.189Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
[2026-01-06T20:52:06.189Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T20:52:06.190Z] [BOT] ⏭️  Skipping duplicate: JID_0455e001 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
📬 Found 1 new jobs (19 already posted)...
[2026-01-06T20:52:06.190Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-06T20:52:06.190Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-06T20:52:06.190Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T20:52:06.193Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-06T20:52:06.194Z] [BOT] 📍 [ROUTING] "Sales Development Representative (Denver)" @ datadog
[2026-01-06T20:52:06.194Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-06T20:52:06.199Z] [BOT ERROR] (node:2729) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T20:52:06.451Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative (Denver) @ datadog in #💲・sales-jobs
[2026-01-06T20:52:06.451Z] [BOT] ✅ Industry: Sales Development Representative (Denver) @ datadog
[2026-01-06T20:52:07.954Z] [BOT] 💾 Marked as posted: Sales Development Representative (Denver) @ datadog (instance #1)
[2026-01-06T20:52:07.954Z] [BOT] 💾 BEFORE ARCHIVING: 1380 jobs in database
[2026-01-06T20:52:07.955Z] [BOT] ✅ No jobs to archive (all 1380 jobs within 7-day window)
[2026-01-06T20:52:07.971Z] [BOT] 💾 Saved posted_jobs.json: 1380 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T20:52:10.972Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-06T20:52:10.972Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
[2026-01-06T20:52:10.974Z] [BOT] ✅ Loaded pending queue: 56 total (36 pending, 20 enriched, 0 posted)
[2026-01-06T20:52:10.978Z] [BOT] ✅ Saved pending queue: 56 total (36 pending, 19 enriched, 1 posted)
[2026-01-06T20:52:10.978Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T20:52:11.033Z] [BOT] 📂 Loaded 2308 existing routing entries
[2026-01-06T20:52:11.094Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-06T20:52:11.094Z] [BOT] Total entries: 2309
   Timestamp: 2026-01-06T20:52:11.080Z
[2026-01-06T20:52:11.095Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T20:52:11.095Z] [BOT] Total attempts: 20
   Successful: 1
   Failed: 0
   Skipped: 19
[2026-01-06T20:52:11.095Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-06T20:52:11.095Z] [BOT] Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
     1. #💲・sales-jobs: 1 posts
[2026-01-06T20:52:11.095Z] [BOT] [STATS] Channel stats saved
[2026-01-06T20:52:13.111Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2729) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*