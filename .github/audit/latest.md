# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T23:38:03.945Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T23:37:53.487Z] ========================================
[2026-01-09T23:37:53.489Z] Discord Bot Execution Log
[2026-01-09T23:37:53.489Z] Environment: GitHub Actions
[2026-01-09T23:37:53.489Z] Node Version: v20.19.6
[2026-01-09T23:37:53.489Z] ========================================
[2026-01-09T23:37:53.489Z] Environment Variables Check:
[2026-01-09T23:37:53.489Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T23:37:53.489Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T23:37:53.489Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T23:37:53.490Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T23:37:53.490Z] 
Multi-Channel Configuration:
[2026-01-09T23:37:53.490Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T23:37:53.490Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T23:37:53.490Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T23:37:53.490Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T23:37:53.490Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T23:37:53.490Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T23:37:53.490Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T23:37:53.490Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T23:37:53.490Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T23:37:53.490Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T23:37:53.491Z] 
Data Files Check:
[2026-01-09T23:37:53.492Z] .github/data/new_jobs.json: ✅ Exists (10 items, 148938 bytes)
[2026-01-09T23:37:53.498Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 769379 bytes)
[2026-01-09T23:37:53.498Z] 
========================================
[2026-01-09T23:37:53.498Z] Starting Enhanced Discord Bot...
[2026-01-09T23:37:53.498Z] ========================================
[2026-01-09T23:37:54.029Z] [BOT] ✅ Loaded V2 database: 1501 jobs
[2026-01-09T23:37:54.504Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T23:37:54.505Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T23:37:54.505Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T23:37:54.516Z] [BOT] ✅ Loaded pending queue: 227 total (207 pending, 20 enriched, 0 posted)
[2026-01-09T23:37:54.517Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Real Estate Project Manager at anthropic
[2026-01-09T23:37:54.517Z] [BOT] ⏭️  Skipping duplicate: JID_e4f7b470 (posted within 7 days)
[2026-01-09T23:37:54.518Z] [BOT] ⏭️ Skipping already posted: ROLE_40d95d81 at anthropic
[2026-01-09T23:37:54.518Z] [BOT] ⏭️  Skipping duplicate: JID_39398126 (posted within 7 days)
[2026-01-09T23:37:54.519Z] [BOT] ⏭️ Skipping already posted: Software Engineer, Cybersecurity Products at anthropic
⏭️  Skipping duplicate: JID_ce1f556b (posted within 7 days)
[2026-01-09T23:37:54.519Z] [BOT] ⏭️ Skipping already posted: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-01-09T23:37:54.519Z] [BOT] ⏭️  Skipping duplicate: JID_9a274ef8 (posted within 7 days)
⏭️ Skipping already posted: Channel Development Representative, West (Phoenix)  at verkada
⏭️  Skipping duplicate: JID_e8212de3 (posted within 7 days)
⏭️ Skipping already posted: Senior Sales Engineer - Key Accounts (West) at datadog
[2026-01-09T23:37:54.519Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer, Universes at anthropic
[2026-01-09T23:37:54.519Z] [BOT] ⏭️  Skipping duplicate: JID_89b9b14b (posted within 7 days)
⏭️ Skipping already posted: ROLE_4bbc4a01  at anthropic
[2026-01-09T23:37:54.520Z] [BOT] ⏭️  Skipping duplicate: JID_0f96adef (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Businesses  at anthropic
[2026-01-09T23:37:54.520Z] [BOT] ⏭️  Skipping duplicate: JID_e3295d17 (posted within 7 days)
⏭️ Skipping already posted: Senior Software Engineer - SEO at discord
[2026-01-09T23:37:54.520Z] [BOT] ⏭️  Skipping duplicate: JID_78f01a5a (posted within 7 days)
[2026-01-09T23:37:54.520Z] [BOT] ⏭️ Skipping already posted: ROLE_076e9ead at vercel
[2026-01-09T23:37:54.520Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-09T23:37:54.520Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-09T23:37:54.520Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-09T23:37:54.520Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T23:37:54.521Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-09T23:37:54.521Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-09T23:37:54.521Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-09T23:37:54.521Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
[2026-01-09T23:37:54.521Z] [BOT] ⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
📬 Found 1 new jobs (19 already posted)...
[2026-01-09T23:37:54.521Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-09T23:37:54.521Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T23:37:54.522Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T23:37:54.522Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T23:37:54.523Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-09T23:37:54.524Z] [BOT] 📍 [ROUTING] "Full Stack Developer" @ ORG_81f16575ington Bancshares
[2026-01-09T23:37:54.524Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T23:37:54.528Z] [BOT ERROR] (node:2456) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T23:37:54.964Z] [BOT] ✅ Created forum post: 🏢 Full Stack Developer @ ORG_81f16575ington Bancshares in #💻・tech-jobs
[2026-01-09T23:37:54.964Z] [BOT] ✅ Industry: Full Stack Developer @ ORG_81f16575ington Bancshares
[2026-01-09T23:37:56.609Z] [BOT] ✅ Created forum post: 🏢 Full Stack Developer @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2026-01-09T23:37:56.609Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-09T23:37:58.111Z] [BOT] 💾 Marked as posted: Full Stack Developer @ ORG_81f16575ington Bancshares (instance #1)
[2026-01-09T23:37:58.111Z] [BOT] 💾 BEFORE ARCHIVING: 1502 jobs in database
[2026-01-09T23:37:58.112Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T23:37:58.118Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-09T23:37:58.119Z] [BOT] ✅ Archiving complete: 2 archived, 1500 active
[2026-01-09T23:37:58.130Z] [BOT] 💾 Saved posted_jobs.json: 1500 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T23:38:01.131Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T23:38:01.131Z] [BOT] ⏭️  Skipping duplicate: JID_44a3ab36-developer_r0068238 (posted within 7 days)
[2026-01-09T23:38:01.140Z] [BOT] ✅ Loaded pending queue: 227 total (207 pending, 20 enriched, 0 posted)
[2026-01-09T23:38:01.156Z] [BOT] ✅ Saved pending queue: 227 total (207 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-09T23:38:01.156Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T23:38:01.208Z] [BOT] 📂 Loaded 2514 existing routing entries
[2026-01-09T23:38:01.268Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-09T23:38:01.268Z] [BOT] Total entries: 2515
   Timestamp: 2026-01-09T23:38:01.254Z
[2026-01-09T23:38:01.269Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
[2026-01-09T23:38:01.269Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-09T23:38:01.269Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
[2026-01-09T23:38:01.269Z] [BOT] Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-09T23:38:01.269Z] [BOT] [STATS] Channel stats saved
[2026-01-09T23:38:03.284Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2456) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*