# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T22:06:52.324Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T22:06:41.893Z] ========================================
[2026-01-06T22:06:41.895Z] Discord Bot Execution Log
[2026-01-06T22:06:41.895Z] Environment: GitHub Actions
[2026-01-06T22:06:41.895Z] Node Version: v20.19.6
[2026-01-06T22:06:41.895Z] ========================================
[2026-01-06T22:06:41.895Z] Environment Variables Check:
[2026-01-06T22:06:41.895Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T22:06:41.896Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T22:06:41.896Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T22:06:41.896Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T22:06:41.896Z] 
Multi-Channel Configuration:
[2026-01-06T22:06:41.896Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T22:06:41.896Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T22:06:41.896Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T22:06:41.896Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T22:06:41.896Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T22:06:41.896Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T22:06:41.896Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T22:06:41.896Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T22:06:41.896Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T22:06:41.896Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T22:06:41.897Z] 
Data Files Check:
[2026-01-06T22:06:41.898Z] .github/data/new_jobs.json: ✅ Exists (10 items, 172732 bytes)
[2026-01-06T22:06:41.904Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 705860 bytes)
[2026-01-06T22:06:41.904Z] 
========================================
[2026-01-06T22:06:41.904Z] Starting Enhanced Discord Bot...
[2026-01-06T22:06:41.904Z] ========================================
[2026-01-06T22:06:42.425Z] [BOT] ✅ Loaded V2 database: 1381 jobs
[2026-01-06T22:06:43.013Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T22:06:43.014Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T22:06:43.014Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T22:06:43.016Z] [BOT] ✅ Loaded pending queue: 58 total (38 pending, 20 enriched, 0 posted)
[2026-01-06T22:06:43.016Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T22:06:43.016Z] [BOT] [BOT] 🔍 Sample enriched job: Security GRC Specialist at anthropic
[2026-01-06T22:06:43.017Z] [BOT] ⏭️  Skipping duplicate: JID_617408df (posted within 7 days)
[2026-01-06T22:06:43.017Z] [BOT] ⏭️ Skipping already posted: Enterprise Education Specialist (Contract) at anthropic
[2026-01-06T22:06:43.018Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-06T22:06:43.018Z] [BOT] ⏭️  Skipping duplicate: JID_65cdf179 (posted within 7 days)
[2026-01-06T22:06:43.018Z] [BOT] ⏭️ Skipping already posted: Product Designer, Claude Developer Platform at anthropic
⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
[2026-01-06T22:06:43.018Z] [BOT] ⏭️ Skipping already posted: Director of UI Engineering, Claude Consumer Products at anthropic
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
[2026-01-06T22:06:43.018Z] [BOT] ⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-06T22:06:43.018Z] [BOT] ⏭️  Skipping duplicate: JID_f82e6a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_58385d7a at anthropic
[2026-01-06T22:06:43.018Z] [BOT] ⏭️  Skipping duplicate: JID_f7d9cbb1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_e42d6991 at figma
⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-06T22:06:43.018Z] [BOT] ⏭️  Skipping duplicate: JID_b7f472ec (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager II - Personalization at spotify
[2026-01-06T22:06:43.019Z] [BOT] ⏭️  Skipping duplicate: JID_c3c61d5c (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Storage at reddit
[2026-01-06T22:06:43.019Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-06T22:06:43.019Z] [BOT] ⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-06T22:06:43.019Z] [BOT] ⏭️  Skipping duplicate: JID_655cfbb9-specialist_r-00172970 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0ebc6431 at Leidos
[2026-01-06T22:06:43.019Z] [BOT] ⏭️  Skipping duplicate: JID_fb69dbe6-icfexternal_career_site-JID_8dbb479e-researcher_r2600017 (posted within 7 days)
⏭️ Skipping already posted: ROLE_13d2701c at ICF International
[2026-01-06T22:06:43.019Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
⏭️  Skipping duplicate: JID_42b8d223 (posted within 7 days)
⏭️ Skipping already posted: AI Machine Learning Engineer 2 at Cisco
[2026-01-06T22:06:43.019Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-06T22:06:43.019Z] [BOT] ⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
[2026-01-06T22:06:43.019Z] [BOT] ⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
⏭️ Skipping already posted: Senior Staff Machine Learning Engineer - Home at spotify
[2026-01-06T22:06:43.019Z] [BOT] 📬 Found 1 new jobs (19 already posted)...
[2026-01-06T22:06:43.019Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-06T22:06:43.020Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-06T22:06:43.020Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T22:06:43.020Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-06T22:06:43.022Z] [BOT] 📍 [ROUTING] "Security GRC Specialist" @ anthropic
[2026-01-06T22:06:43.023Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-06T22:06:43.027Z] [BOT ERROR] (node:2757) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T22:06:43.289Z] [BOT] ✅ Created forum post: 🏢 Security GRC Specialist @ anthropic in #🤖・ai-jobs
  ✅ Industry: Security GRC Specialist @ anthropic
[2026-01-06T22:06:45.052Z] [BOT] ✅ Created forum post: 🏢 Security GRC Specialist @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-06T22:06:46.554Z] [BOT] 💾 Marked as posted: Security GRC Specialist @ anthropic (instance #1)
[2026-01-06T22:06:46.554Z] [BOT] 💾 BEFORE ARCHIVING: 1382 jobs in database
[2026-01-06T22:06:46.555Z] [BOT] ✅ No jobs to archive (all 1382 jobs within 7-day window)
[2026-01-06T22:06:46.569Z] [BOT] 💾 Saved posted_jobs.json: 1382 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T22:06:49.570Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-06T22:06:49.570Z] [BOT] ⏭️  Skipping duplicate: JID_78c05d9c (posted within 7 days)
[2026-01-06T22:06:49.572Z] [BOT] ✅ Loaded pending queue: 58 total (38 pending, 20 enriched, 0 posted)
[2026-01-06T22:06:49.576Z] [BOT] ✅ Saved pending queue: 58 total (38 pending, 19 enriched, 1 posted)
[2026-01-06T22:06:49.576Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T22:06:49.636Z] [BOT] 📂 Loaded 2310 existing routing entries
[2026-01-06T22:06:49.699Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2311
[2026-01-06T22:06:49.700Z] [BOT] Timestamp: 2026-01-06T22:06:49.687Z
[2026-01-06T22:06:49.700Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T22:06:49.700Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-06T22:06:49.700Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-06T22:06:49.700Z] [BOT] [STATS] Channel stats saved
[2026-01-06T22:06:51.712Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2757) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*