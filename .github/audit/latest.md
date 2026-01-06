# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T23:05:51.127Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T23:05:40.148Z] ========================================
[2026-01-06T23:05:40.150Z] Discord Bot Execution Log
[2026-01-06T23:05:40.150Z] Environment: GitHub Actions
[2026-01-06T23:05:40.150Z] Node Version: v20.19.6
[2026-01-06T23:05:40.150Z] ========================================
[2026-01-06T23:05:40.150Z] Environment Variables Check:
[2026-01-06T23:05:40.150Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T23:05:40.150Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T23:05:40.150Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T23:05:40.150Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T23:05:40.150Z] 
Multi-Channel Configuration:
[2026-01-06T23:05:40.150Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T23:05:40.151Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T23:05:40.151Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T23:05:40.151Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T23:05:40.151Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T23:05:40.151Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T23:05:40.151Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T23:05:40.151Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T23:05:40.151Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T23:05:40.151Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T23:05:40.151Z] 
Data Files Check:
[2026-01-06T23:05:40.152Z] .github/data/new_jobs.json: ✅ Exists (10 items, 167766 bytes)
[2026-01-06T23:05:40.158Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 708314 bytes)
[2026-01-06T23:05:40.158Z] 
========================================
[2026-01-06T23:05:40.158Z] Starting Enhanced Discord Bot...
[2026-01-06T23:05:40.158Z] ========================================
[2026-01-06T23:05:40.679Z] [BOT] ✅ Loaded V2 database: 1386 jobs
[2026-01-06T23:05:41.307Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T23:05:41.307Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T23:05:41.307Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T23:05:41.309Z] [BOT] ✅ Loaded pending queue: 62 total (42 pending, 20 enriched, 0 posted)
[2026-01-06T23:05:41.310Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T23:05:41.310Z] [BOT] [BOT] 🔍 Sample enriched job: Head of North America Partnerships at anthropic
[2026-01-06T23:05:41.311Z] [BOT] ⏭️  Skipping duplicate: JID_b8474f61 (posted within 7 days)
[2026-01-06T23:05:41.311Z] [BOT] ⏭️ Skipping already posted: Senior Data Scientist, Analytics - Growth/SEO at discord
[2026-01-06T23:05:41.311Z] [BOT] ⏭️  Skipping duplicate: JID_220d5816 (posted within 7 days)
⏭️ Skipping already posted: ROLE_08ee845d at dropbox
[2026-01-06T23:05:41.311Z] [BOT] ⏭️  Skipping duplicate: JID_4f5bc67c (posted within 7 days)
[2026-01-06T23:05:41.312Z] [BOT] ⏭️ Skipping already posted: Client Account Manager, Mid-Market (B2B Services) at reddit
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer - Claude Code at anthropic
[2026-01-06T23:05:41.312Z] [BOT] ⏭️  Skipping duplicate: JID_78c05d9c (posted within 7 days)
⏭️ Skipping already posted: ROLE_fe88b457 at anthropic
[2026-01-06T23:05:41.312Z] [BOT] ⏭️  Skipping duplicate: JID_617408df (posted within 7 days)
⏭️ Skipping already posted: Enterprise Education Specialist (Contract) at anthropic
[2026-01-06T23:05:41.312Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-06T23:05:41.312Z] [BOT] ⏭️  Skipping duplicate: JID_65cdf179 (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Claude Developer Platform at anthropic
[2026-01-06T23:05:41.312Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
⏭️ Skipping already posted: Director of UI Engineering, Claude Consumer Products at anthropic
[2026-01-06T23:05:41.312Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-06T23:05:41.313Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-06T23:05:41.313Z] [BOT] ⏭️  Skipping duplicate: JID_f82e6a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_58385d7a at anthropic
⏭️  Skipping duplicate: JID_f7d9cbb1 (posted within 7 days)
[2026-01-06T23:05:41.313Z] [BOT] ⏭️ Skipping already posted: ROLE_e42d6991 at figma
⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
[2026-01-06T23:05:41.313Z] [BOT] ⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
⏭️  Skipping duplicate: JID_b7f472ec (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager II - Personalization at spotify
[2026-01-06T23:05:41.313Z] [BOT] ⏭️  Skipping duplicate: JID_c3c61d5c (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Storage at reddit
⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-06T23:05:41.313Z] [BOT] ⏭️  Skipping duplicate: JID_655cfbb9-specialist_r-00172970 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0ebc6431 at Leidos
[2026-01-06T23:05:41.314Z] [BOT] ⏭️  Skipping duplicate: JID_fb69dbe6-icfexternal_career_site-JID_8dbb479e-researcher_r2600017 (posted within 7 days)
⏭️ Skipping already posted: ROLE_13d2701c at ICF International
📬 Found 1 new jobs (19 already posted)...
[2026-01-06T23:05:41.314Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-06T23:05:41.314Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-06T23:05:41.314Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-06T23:05:41.314Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T23:05:41.317Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-06T23:05:41.318Z] [BOT] 📍 [ROUTING] "Head of North America Partnerships" @ anthropic
[2026-01-06T23:05:41.318Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-06T23:05:41.323Z] [BOT ERROR] (node:2624) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T23:05:41.523Z] [BOT] ✅ Created forum post: 🏢 Head of North America Partnerships @ anthropic in #💲・sales-jobs
[2026-01-06T23:05:41.524Z] [BOT] ✅ Industry: Head of North America Partnerships @ anthropic
[2026-01-06T23:05:43.355Z] [BOT] ✅ Created forum post: 🏢 Head of North America Partnerships @ anthropic in #🌉・san-francisco
[2026-01-06T23:05:43.355Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-06T23:05:44.857Z] [BOT] 💾 Marked as posted: Head of North America Partnerships @ anthropic (instance #1)
[2026-01-06T23:05:44.857Z] [BOT] 💾 BEFORE ARCHIVING: 1387 jobs in database
[2026-01-06T23:05:44.858Z] [BOT] ✅ No jobs to archive (all 1387 jobs within 7-day window)
[2026-01-06T23:05:44.872Z] [BOT] 💾 Saved posted_jobs.json: 1387 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T23:05:47.872Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-06T23:05:47.873Z] [BOT] ⏭️  Skipping duplicate: JID_7ed7fe99 (posted within 7 days)
[2026-01-06T23:05:47.875Z] [BOT] ✅ Loaded pending queue: 62 total (42 pending, 20 enriched, 0 posted)
[2026-01-06T23:05:47.880Z] [BOT] ✅ Saved pending queue: 62 total (42 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-06T23:05:47.880Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-06T23:05:47.931Z] [BOT] 📂 Loaded 2315 existing routing entries
[2026-01-06T23:05:47.989Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-06T23:05:47.990Z] [BOT] Total entries: 2316
   Timestamp: 2026-01-06T23:05:47.976Z
[2026-01-06T23:05:47.990Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
   Total attempts: 21
[2026-01-06T23:05:47.990Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-06T23:05:47.990Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-06T23:05:47.990Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-06T23:05:47.990Z] [BOT] 1. #💲・sales-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-06T23:05:47.991Z] [BOT] [STATS] Channel stats saved
[2026-01-06T23:05:50.001Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2624) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*