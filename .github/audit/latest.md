# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T22:41:00.439Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T22:40:48.959Z] ========================================
[2026-01-06T22:40:48.961Z] Discord Bot Execution Log
[2026-01-06T22:40:48.961Z] Environment: GitHub Actions
[2026-01-06T22:40:48.961Z] Node Version: v20.19.6
[2026-01-06T22:40:48.961Z] ========================================
[2026-01-06T22:40:48.961Z] Environment Variables Check:
[2026-01-06T22:40:48.962Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T22:40:48.962Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T22:40:48.962Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T22:40:48.962Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T22:40:48.962Z] 
Multi-Channel Configuration:
[2026-01-06T22:40:48.962Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T22:40:48.962Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T22:40:48.962Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T22:40:48.962Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T22:40:48.962Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T22:40:48.962Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T22:40:48.963Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T22:40:48.963Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T22:40:48.963Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T22:40:48.963Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T22:40:48.963Z] 
Data Files Check:
[2026-01-06T22:40:48.964Z] .github/data/new_jobs.json: ✅ Exists (10 items, 176095 bytes)
[2026-01-06T22:40:48.969Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 706350 bytes)
[2026-01-06T22:40:48.969Z] 
========================================
[2026-01-06T22:40:48.970Z] Starting Enhanced Discord Bot...
[2026-01-06T22:40:48.970Z] ========================================
[2026-01-06T22:40:49.490Z] [BOT] ✅ Loaded V2 database: 1382 jobs
[2026-01-06T22:40:50.294Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T22:40:50.294Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T22:40:50.294Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T22:40:50.296Z] [BOT] ✅ Loaded pending queue: 58 total (38 pending, 20 enriched, 0 posted)
[2026-01-06T22:40:50.296Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T22:40:50.297Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer - Claude Code at anthropic
[2026-01-06T22:40:50.298Z] [BOT] ⏭️  Skipping duplicate: JID_78c05d9c (posted within 7 days)
[2026-01-06T22:40:50.298Z] [BOT] ⏭️ Skipping already posted: ROLE_fe88b457 at anthropic
⏭️  Skipping duplicate: JID_617408df (posted within 7 days)
⏭️ Skipping already posted: Enterprise Education Specialist (Contract) at anthropic
[2026-01-06T22:40:50.299Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
⏭️  Skipping duplicate: JID_65cdf179 (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Claude Developer Platform at anthropic
⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
⏭️ Skipping already posted: Director of UI Engineering, Claude Consumer Products at anthropic
[2026-01-06T22:40:50.299Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-06T22:40:50.299Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
⏭️  Skipping duplicate: JID_f82e6a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_58385d7a at anthropic
[2026-01-06T22:40:50.299Z] [BOT] ⏭️  Skipping duplicate: JID_f7d9cbb1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_e42d6991 at figma
[2026-01-06T22:40:50.300Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
⏭️  Skipping duplicate: JID_b7f472ec (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager II - Personalization at spotify
⏭️  Skipping duplicate: JID_c3c61d5c (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Storage at reddit
[2026-01-06T22:40:50.300Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-06T22:40:50.300Z] [BOT] ⏭️  Skipping duplicate: JID_655cfbb9-specialist_r-00172970 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0ebc6431 at Leidos
⏭️  Skipping duplicate: JID_fb69dbe6-icfexternal_career_site-JID_8dbb479e-researcher_r2600017 (posted within 7 days)
⏭️ Skipping already posted: ROLE_13d2701c at ICF International
[2026-01-06T22:40:50.300Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-06T22:40:50.300Z] [BOT] ⏭️  Skipping duplicate: JID_42b8d223 (posted within 7 days)
[2026-01-06T22:40:50.300Z] [BOT] ⏭️ Skipping already posted: AI Machine Learning Engineer 2 at Cisco
[2026-01-06T22:40:50.300Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-06T22:40:50.301Z] [BOT] ⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
[2026-01-06T22:40:50.301Z] [BOT] 📬 Found 1 new jobs (19 already posted)...
[2026-01-06T22:40:50.301Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-06T22:40:50.301Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-06T22:40:50.301Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-06T22:40:50.301Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T22:40:50.302Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-06T22:40:50.304Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer - Claude Code" @ anthropic
[2026-01-06T22:40:50.304Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-06T22:40:50.310Z] [BOT ERROR] (node:2684) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T22:40:50.722Z] [BOT] ✅ Created forum post: 🏢 Developer Campaign Marketer - Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer - Claude Code @ anthropic
[2026-01-06T22:40:52.548Z] [BOT] ✅ Created forum post: 🏢 Developer Campaign Marketer - Claude Code @ anthropic in #🌉・san-francisco
[2026-01-06T22:40:52.548Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-06T22:40:54.049Z] [BOT] 💾 Marked as posted: Developer Campaign Marketer - Claude Code @ anthropic (instance #1)
[2026-01-06T22:40:54.049Z] [BOT] 💾 BEFORE ARCHIVING: 1383 jobs in database
[2026-01-06T22:40:54.050Z] [BOT] ✅ No jobs to archive (all 1383 jobs within 7-day window)
[2026-01-06T22:40:54.064Z] [BOT] 💾 Saved posted_jobs.json: 1383 active jobs
[2026-01-06T22:40:54.064Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T22:40:57.064Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-06T22:40:57.064Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-06T22:40:57.066Z] [BOT] ✅ Loaded pending queue: 58 total (38 pending, 20 enriched, 0 posted)
[2026-01-06T22:40:57.070Z] [BOT] ✅ Saved pending queue: 58 total (38 pending, 19 enriched, 1 posted)
[2026-01-06T22:40:57.070Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T22:40:57.124Z] [BOT] 📂 Loaded 2311 existing routing entries
[2026-01-06T22:40:57.182Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-06T22:40:57.182Z] [BOT] Total entries: 2312
   Timestamp: 2026-01-06T22:40:57.168Z
[2026-01-06T22:40:57.183Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
   Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-06T22:40:57.183Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-06T22:40:57.183Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
[2026-01-06T22:40:57.183Z] [BOT] 2. #🌉・san-francisco: 1 posts
[2026-01-06T22:40:57.183Z] [BOT] [STATS] Channel stats saved
[2026-01-06T22:40:59.193Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2684) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*