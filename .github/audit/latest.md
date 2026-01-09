# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T19:08:24.478Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T19:08:13.924Z] ========================================
[2026-01-09T19:08:13.926Z] Discord Bot Execution Log
[2026-01-09T19:08:13.926Z] Environment: GitHub Actions
[2026-01-09T19:08:13.926Z] Node Version: v20.19.6
[2026-01-09T19:08:13.926Z] ========================================
[2026-01-09T19:08:13.926Z] Environment Variables Check:
[2026-01-09T19:08:13.927Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T19:08:13.927Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T19:08:13.927Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T19:08:13.927Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T19:08:13.927Z] 
Multi-Channel Configuration:
[2026-01-09T19:08:13.927Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T19:08:13.927Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T19:08:13.927Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T19:08:13.927Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T19:08:13.927Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T19:08:13.928Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T19:08:13.928Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T19:08:13.928Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T19:08:13.928Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T19:08:13.928Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T19:08:13.928Z] 
Data Files Check:
[2026-01-09T19:08:13.929Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157500 bytes)
[2026-01-09T19:08:13.935Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 766112 bytes)
[2026-01-09T19:08:13.935Z] 
========================================
[2026-01-09T19:08:13.935Z] Starting Enhanced Discord Bot...
[2026-01-09T19:08:13.935Z] ========================================
[2026-01-09T19:08:14.465Z] [BOT] ✅ Loaded V2 database: 1494 jobs
[2026-01-09T19:08:14.968Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T19:08:14.968Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T19:08:14.969Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T19:08:14.976Z] [BOT] ✅ Loaded pending queue: 228 total (208 pending, 20 enriched, 0 posted)
[2026-01-09T19:08:14.976Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Partner Manager - Channels (Public Sector) at datadog
[2026-01-09T19:08:14.978Z] [BOT] ⏭️  Skipping duplicate: JID_78f01a5a (posted within 7 days)
[2026-01-09T19:08:14.978Z] [BOT] ⏭️ Skipping already posted: ROLE_076e9ead at vercel
[2026-01-09T19:08:14.978Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
[2026-01-09T19:08:14.978Z] [BOT] ⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
[2026-01-09T19:08:14.978Z] [BOT] ⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-09T19:08:14.979Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
[2026-01-09T19:08:14.979Z] [BOT] ⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-09T19:08:14.979Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-09T19:08:14.979Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-09T19:08:14.979Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-09T19:08:14.979Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-09T19:08:14.980Z] [BOT] ⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
[2026-01-09T19:08:14.980Z] [BOT] ⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-09T19:08:14.980Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-09T19:08:14.980Z] [BOT] ⏭️  Skipping duplicate: JID_305cb5c2 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Direct To Cell at SpaceX
[2026-01-09T19:08:14.980Z] [BOT] ⏭️  Skipping duplicate: JID_e942e20e (posted within 7 days)
⏭️ Skipping already posted: FP&A Manager,  GTM at vercel
[2026-01-09T19:08:14.980Z] [BOT] ⏭️  Skipping duplicate: JID_08a687ec (posted within 7 days)
⏭️ Skipping already posted:  Strategy and Messaging Communications Lead, Narrative at anthropic
[2026-01-09T19:08:14.980Z] [BOT] ⏭️  Skipping duplicate: JID_d964c21b (posted within 7 days)
⏭️ Skipping already posted: Meteorologist - NASA Ballon Program at Peraton
⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer, Universes at anthropic
📬 Found 1 new jobs (19 already posted)...
[2026-01-09T19:08:14.981Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-09T19:08:14.981Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T19:08:14.981Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T19:08:14.981Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T19:08:14.985Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-09T19:08:14.986Z] [BOT] 📍 [ROUTING] "Senior Partner Manager - Channels (Public Sector)" @ datadog
[2026-01-09T19:08:14.986Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-09T19:08:14.991Z] [BOT ERROR] (node:2375) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T19:08:15.162Z] [BOT] ✅ Created forum post: 🏢 Senior Partner Manager - Channels (Public Sector) @ datadog in #💲・sales-jobs
  ✅ Industry: Senior Partner Manager - Channels (Public Sector) @ datadog
[2026-01-09T19:08:16.959Z] [BOT] ✅ Created forum post: 🏢 Senior Partner Manager - Channels (Public Sector) @ datadog in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-09T19:08:18.460Z] [BOT] 💾 Marked as posted: Senior Partner Manager - Channels (Public Sector) @ datadog (instance #1)
[2026-01-09T19:08:18.461Z] [BOT] 💾 BEFORE ARCHIVING: 1495 jobs in database
[2026-01-09T19:08:18.462Z] [BOT] ✅ No jobs to archive (all 1495 jobs within 7-day window)
[2026-01-09T19:08:18.478Z] [BOT] 💾 Saved posted_jobs.json: 1495 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T19:08:21.479Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T19:08:21.479Z] [BOT] ⏭️  Skipping duplicate: JID_93d2930f (posted within 7 days)
[2026-01-09T19:08:21.487Z] [BOT] ✅ Loaded pending queue: 228 total (208 pending, 20 enriched, 0 posted)
[2026-01-09T19:08:21.502Z] [BOT] ✅ Saved pending queue: 228 total (208 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-09T19:08:21.502Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T19:08:21.555Z] [BOT] 📂 Loaded 2506 existing routing entries
[2026-01-09T19:08:21.615Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2507
[2026-01-09T19:08:21.615Z] [BOT] Timestamp: 2026-01-09T19:08:21.601Z
[2026-01-09T19:08:21.616Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
   Total attempts: 21
[2026-01-09T19:08:21.616Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-09T19:08:21.616Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-09T19:08:21.616Z] [BOT] 1. #💲・sales-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-09T19:08:21.616Z] [BOT] [STATS] Channel stats saved
[2026-01-09T19:08:23.630Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2375) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*