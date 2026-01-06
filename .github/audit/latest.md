# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T20:25:57.483Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T20:25:46.041Z] ========================================
[2026-01-06T20:25:46.043Z] Discord Bot Execution Log
[2026-01-06T20:25:46.043Z] Environment: GitHub Actions
[2026-01-06T20:25:46.043Z] Node Version: v20.19.6
[2026-01-06T20:25:46.043Z] ========================================
[2026-01-06T20:25:46.043Z] Environment Variables Check:
[2026-01-06T20:25:46.043Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T20:25:46.043Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T20:25:46.043Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T20:25:46.043Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T20:25:46.043Z] 
Multi-Channel Configuration:
[2026-01-06T20:25:46.044Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T20:25:46.044Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T20:25:46.044Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T20:25:46.044Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T20:25:46.044Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T20:25:46.044Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T20:25:46.044Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T20:25:46.044Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T20:25:46.044Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T20:25:46.044Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T20:25:46.044Z] 
Data Files Check:
[2026-01-06T20:25:46.046Z] .github/data/new_jobs.json: ✅ Exists (10 items, 163723 bytes)
[2026-01-06T20:25:46.051Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 704361 bytes)
[2026-01-06T20:25:46.051Z] 
========================================
[2026-01-06T20:25:46.051Z] Starting Enhanced Discord Bot...
[2026-01-06T20:25:46.052Z] ========================================
[2026-01-06T20:25:46.586Z] [BOT] ✅ Loaded V2 database: 1378 jobs
[2026-01-06T20:25:47.240Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T20:25:47.241Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T20:25:47.241Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T20:25:47.243Z] [BOT] ✅ Loaded pending queue: 55 total (35 pending, 20 enriched, 0 posted)
[2026-01-06T20:25:47.243Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T20:25:47.243Z] [BOT] [BOT] 🔍 Sample enriched job: Product Designer, Claude Developer Platform at anthropic
[2026-01-06T20:25:47.244Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
[2026-01-06T20:25:47.244Z] [BOT] ⏭️ Skipping already posted: Director of UI Engineering, Claude Consumer Products at anthropic
[2026-01-06T20:25:47.245Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-06T20:25:47.245Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
[2026-01-06T20:25:47.245Z] [BOT] ⏭️ Skipping already posted: ROLE_a7374bfe at datadog
⏭️  Skipping duplicate: JID_f82e6a29 (posted within 7 days)
[2026-01-06T20:25:47.245Z] [BOT] ⏭️ Skipping already posted: ROLE_58385d7a at anthropic
⏭️  Skipping duplicate: JID_f7d9cbb1 (posted within 7 days)
[2026-01-06T20:25:47.245Z] [BOT] ⏭️ Skipping already posted: ROLE_e42d6991 at figma
[2026-01-06T20:25:47.245Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-06T20:25:47.245Z] [BOT] ⏭️  Skipping duplicate: JID_b7f472ec (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager II - Personalization at spotify
⏭️  Skipping duplicate: JID_c3c61d5c (posted within 7 days)
[2026-01-06T20:25:47.246Z] [BOT] ⏭️ Skipping already posted: Staff Software Engineer, Storage at reddit
⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-06T20:25:47.246Z] [BOT] ⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-06T20:25:47.246Z] [BOT] ⏭️  Skipping duplicate: JID_655cfbb9-specialist_r-00172970 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0ebc6431 at Leidos
[2026-01-06T20:25:47.246Z] [BOT] ⏭️  Skipping duplicate: JID_fb69dbe6-icfexternal_career_site-JID_8dbb479e-researcher_r2600017 (posted within 7 days)
⏭️ Skipping already posted: ROLE_13d2701c at ICF International
[2026-01-06T20:25:47.246Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-06T20:25:47.246Z] [BOT] ⏭️  Skipping duplicate: JID_42b8d223 (posted within 7 days)
⏭️ Skipping already posted: AI Machine Learning Engineer 2 at Cisco
[2026-01-06T20:25:47.246Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
[2026-01-06T20:25:47.247Z] [BOT] ⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
⏭️ Skipping already posted: Senior Staff Machine Learning Engineer - Home at spotify
[2026-01-06T20:25:47.247Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T20:25:47.247Z] [BOT] ⏭️  Skipping duplicate: JID_0455e001 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T20:25:47.247Z] [BOT] ⏭️  Skipping duplicate: JID_3847d9eb (posted within 7 days)
⏭️ Skipping already posted: Director of Trust & Safety Engineering at vercel
📬 Found 1 new jobs (19 already posted)...
[2026-01-06T20:25:47.247Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-06T20:25:47.247Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-06T20:25:47.248Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-06T20:25:47.248Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T20:25:47.248Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-06T20:25:47.250Z] [BOT] 📍 [ROUTING] "Product Designer, Claude Developer Platform" @ anthropic
[2026-01-06T20:25:47.250Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-06T20:25:47.254Z] [BOT ERROR] (node:2775) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T20:25:47.593Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Claude Developer Platform @ anthropic in #🤖・ai-jobs
[2026-01-06T20:25:47.593Z] [BOT] ✅ Industry: Product Designer, Claude Developer Platform @ anthropic
[2026-01-06T20:25:49.453Z] [BOT] ✅ Created forum post: 🏢 Product Designer, Claude Developer Platform @ anthropic in #🌉・san-francisco
[2026-01-06T20:25:49.453Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-06T20:25:50.953Z] [BOT] 💾 Marked as posted: Product Designer, Claude Developer Platform @ anthropic (instance #1)
[2026-01-06T20:25:50.953Z] [BOT] 💾 BEFORE ARCHIVING: 1379 jobs in database
[2026-01-06T20:25:50.954Z] [BOT] ✅ No jobs to archive (all 1379 jobs within 7-day window)
[2026-01-06T20:25:50.969Z] [BOT] 💾 Saved posted_jobs.json: 1379 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T20:25:53.969Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-06T20:25:53.970Z] [BOT] ⏭️  Skipping duplicate: JID_65cdf179 (posted within 7 days)
[2026-01-06T20:25:53.972Z] [BOT] ✅ Loaded pending queue: 55 total (35 pending, 20 enriched, 0 posted)
[2026-01-06T20:25:53.976Z] [BOT] ✅ Saved pending queue: 55 total (35 pending, 19 enriched, 1 posted)
[2026-01-06T20:25:53.976Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T20:25:54.028Z] [BOT] 📂 Loaded 2307 existing routing entries
[2026-01-06T20:25:54.088Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-06T20:25:54.089Z] [BOT] Total entries: 2308
   Timestamp: 2026-01-06T20:25:54.075Z
[2026-01-06T20:25:54.089Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T20:25:54.089Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-06T20:25:54.089Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2026-01-06T20:25:54.090Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-06T20:25:54.090Z] [BOT] [STATS] Channel stats saved
[2026-01-06T20:25:56.100Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2775) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*