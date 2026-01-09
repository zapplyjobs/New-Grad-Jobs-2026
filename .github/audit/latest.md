# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T23:25:17.726Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T23:25:07.563Z] ========================================
[2026-01-09T23:25:07.565Z] Discord Bot Execution Log
[2026-01-09T23:25:07.565Z] Environment: GitHub Actions
[2026-01-09T23:25:07.565Z] Node Version: v20.19.6
[2026-01-09T23:25:07.565Z] ========================================
[2026-01-09T23:25:07.565Z] Environment Variables Check:
[2026-01-09T23:25:07.565Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T23:25:07.565Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T23:25:07.565Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T23:25:07.566Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T23:25:07.566Z] 
Multi-Channel Configuration:
[2026-01-09T23:25:07.566Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T23:25:07.566Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T23:25:07.566Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T23:25:07.566Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T23:25:07.566Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T23:25:07.566Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T23:25:07.566Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T23:25:07.566Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T23:25:07.566Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T23:25:07.566Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T23:25:07.567Z] 
Data Files Check:
[2026-01-09T23:25:07.568Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157732 bytes)
[2026-01-09T23:25:07.573Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 768885 bytes)
[2026-01-09T23:25:07.573Z] 
========================================
[2026-01-09T23:25:07.574Z] Starting Enhanced Discord Bot...
[2026-01-09T23:25:07.574Z] ========================================
[2026-01-09T23:25:08.113Z] [BOT] ✅ Loaded V2 database: 1500 jobs
[2026-01-09T23:25:08.533Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T23:25:08.534Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T23:25:08.534Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T23:25:08.545Z] [BOT] ✅ Loaded pending queue: 226 total (206 pending, 20 enriched, 0 posted)
[2026-01-09T23:25:08.545Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Real Estate Project Manager at anthropic
[2026-01-09T23:25:08.546Z] [BOT] ⏭️  Skipping duplicate: JID_39398126 (posted within 7 days)
[2026-01-09T23:25:08.546Z] [BOT] ⏭️ Skipping already posted: Software Engineer, Cybersecurity Products at anthropic
[2026-01-09T23:25:08.547Z] [BOT] ⏭️  Skipping duplicate: JID_ce1f556b (posted within 7 days)
⏭️ Skipping already posted: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-01-09T23:25:08.547Z] [BOT] ⏭️  Skipping duplicate: JID_9a274ef8 (posted within 7 days)
[2026-01-09T23:25:08.547Z] [BOT] ⏭️ Skipping already posted: Channel Development Representative, West (Phoenix)  at verkada
[2026-01-09T23:25:08.547Z] [BOT] ⏭️  Skipping duplicate: JID_e8212de3 (posted within 7 days)
⏭️ Skipping already posted: Senior Sales Engineer - Key Accounts (West) at datadog
[2026-01-09T23:25:08.547Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer, Universes at anthropic
[2026-01-09T23:25:08.547Z] [BOT] ⏭️  Skipping duplicate: JID_89b9b14b (posted within 7 days)
⏭️ Skipping already posted: ROLE_4bbc4a01  at anthropic
[2026-01-09T23:25:08.547Z] [BOT] ⏭️  Skipping duplicate: JID_0f96adef (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Businesses  at anthropic
[2026-01-09T23:25:08.548Z] [BOT] ⏭️  Skipping duplicate: JID_e3295d17 (posted within 7 days)
⏭️ Skipping already posted: Senior Software Engineer - SEO at discord
[2026-01-09T23:25:08.548Z] [BOT] ⏭️  Skipping duplicate: JID_78f01a5a (posted within 7 days)
⏭️ Skipping already posted: ROLE_076e9ead at vercel
[2026-01-09T23:25:08.548Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-09T23:25:08.548Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-09T23:25:08.548Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-09T23:25:08.548Z] [BOT] ⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-09T23:25:08.548Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T23:25:08.548Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-09T23:25:08.549Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-09T23:25:08.549Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-09T23:25:08.549Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-09T23:25:08.549Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-09T23:25:08.549Z] [BOT] ⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
📬 Found 1 new jobs (19 already posted)...
[2026-01-09T23:25:08.549Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-09T23:25:08.549Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T23:25:08.550Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T23:25:08.550Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T23:25:08.552Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-09T23:25:08.553Z] [BOT] 📍 [ROUTING] "Real Estate Project Manager" @ anthropic
[2026-01-09T23:25:08.553Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-09T23:25:08.558Z] [BOT ERROR] (node:2332) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T23:25:08.699Z] [BOT] ✅ Created forum post: 🏢 Real Estate Project Manager @ anthropic in #📊・JID_9910249a
[2026-01-09T23:25:08.699Z] [BOT] ✅ Industry: Real Estate Project Manager @ anthropic
[2026-01-09T23:25:10.471Z] [BOT] ✅ Created forum post: 🏢 Real Estate Project Manager @ anthropic in #🌉・san-francisco
[2026-01-09T23:25:10.471Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-09T23:25:11.971Z] [BOT] 💾 Marked as posted: Real Estate Project Manager @ anthropic (instance #1)
[2026-01-09T23:25:11.972Z] [BOT] 💾 BEFORE ARCHIVING: 1501 jobs in database
[2026-01-09T23:25:11.973Z] [BOT] ✅ No jobs to archive (all 1501 jobs within 7-day window)
[2026-01-09T23:25:11.983Z] [BOT] 💾 Saved posted_jobs.json: 1501 active jobs
[2026-01-09T23:25:11.983Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T23:25:14.984Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T23:25:14.985Z] [BOT] ⏭️  Skipping duplicate: JID_e4f7b470 (posted within 7 days)
[2026-01-09T23:25:14.993Z] [BOT] ✅ Loaded pending queue: 226 total (206 pending, 20 enriched, 0 posted)
[2026-01-09T23:25:15.009Z] [BOT] ✅ Saved pending queue: 226 total (206 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-09T23:25:15.009Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T23:25:15.059Z] [BOT] 📂 Loaded 2513 existing routing entries
[2026-01-09T23:25:15.117Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-09T23:25:15.117Z] [BOT] Total entries: 2514
   Timestamp: 2026-01-09T23:25:15.103Z
[2026-01-09T23:25:15.117Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
[2026-01-09T23:25:15.117Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-09T23:25:15.118Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-09T23:25:15.118Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-09T23:25:15.118Z] [BOT] 1. #📊・JID_9910249a: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-09T23:25:15.118Z] [BOT] [STATS] Channel stats saved
[2026-01-09T23:25:17.132Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2332) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*