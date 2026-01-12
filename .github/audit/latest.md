# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T16:45:32.063Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T16:45:20.600Z] ========================================
[2026-01-12T16:45:20.602Z] Discord Bot Execution Log
[2026-01-12T16:45:20.602Z] Environment: GitHub Actions
[2026-01-12T16:45:20.602Z] Node Version: v20.19.6
[2026-01-12T16:45:20.602Z] ========================================
[2026-01-12T16:45:20.602Z] Environment Variables Check:
[2026-01-12T16:45:20.602Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T16:45:20.603Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T16:45:20.603Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T16:45:20.603Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T16:45:20.603Z] 
Multi-Channel Configuration:
[2026-01-12T16:45:20.603Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T16:45:20.603Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T16:45:20.603Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T16:45:20.603Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T16:45:20.603Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T16:45:20.603Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T16:45:20.603Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T16:45:20.603Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T16:45:20.604Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T16:45:20.604Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T16:45:20.604Z] 
Data Files Check:
[2026-01-12T16:45:20.605Z] .github/data/new_jobs.json: ✅ Exists (10 items, 158953 bytes)
[2026-01-12T16:45:20.607Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 228468 bytes)
[2026-01-12T16:45:20.607Z] 
========================================
[2026-01-12T16:45:20.607Z] Starting Enhanced Discord Bot...
[2026-01-12T16:45:20.607Z] ========================================
[2026-01-12T16:45:21.137Z] [BOT] ✅ Loaded V2 database: 402 jobs
[2026-01-12T16:45:21.916Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T16:45:21.917Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T16:45:21.917Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T16:45:21.929Z] [BOT] ✅ Loaded pending queue: 271 total (251 pending, 20 enriched, 0 posted)
[2026-01-12T16:45:21.930Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at RELX
[2026-01-12T16:45:21.931Z] [BOT] ⏭️  Skipping duplicate: JID_61e5c655 (posted within 7 days)
[2026-01-12T16:45:21.931Z] [BOT] ⏭️ Skipping already posted: Expansion Account Executive, Enterprise at brex
[2026-01-12T16:45:21.931Z] [BOT] ⏭️  Skipping duplicate: JID_eebc56d7 (posted within 7 days)
⏭️ Skipping already posted: Expansion Account Executive, Enterprise at brex
[2026-01-12T16:45:21.931Z] [BOT] ⏭️  Skipping duplicate: JID_6143f1ff (posted within 7 days)
⏭️ Skipping already posted: Expansion Account Executive, Enterprise at brex
⏭️  Skipping duplicate: JID_e8716d5a (posted within 7 days)
⏭️ Skipping already posted: Manager, Commercial Sales Engineering (AMER - East) at datadog
[2026-01-12T16:45:21.931Z] [BOT] ⏭️  Skipping duplicate: JID_d85041c5 (posted within 7 days)
⏭️ Skipping already posted: Internal Communications Senior Manager (Global Sales) at reddit
⏭️  Skipping duplicate: JID_1f192e6d (posted within 7 days)
⏭️ Skipping already posted: Associate Manager, Compliance at coinbase
[2026-01-12T16:45:21.932Z] [BOT] ⏭️  Skipping duplicate: JID_8fc10dad (posted within 7 days)
⏭️ Skipping already posted: Director, Channels - Global Systems Integrators (AMER) at datadog
⏭️  Skipping duplicate: JID_4e8b8312 (posted within 7 days)
⏭️ Skipping already posted: Product Solutions Architect 3 - Synthetics at datadog
⏭️  Skipping duplicate: JID_e13e860d (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Boston) at datadog
[2026-01-12T16:45:21.932Z] [BOT] ⏭️  Skipping duplicate: JID_cc075897 (posted within 7 days)
⏭️ Skipping already posted: Senior Director, Product Design at datadog
[2026-01-12T16:45:21.932Z] [BOT] ⏭️  Skipping duplicate: JID_b1499239-i_jr107155 (posted within 7 days)
⏭️ Skipping already posted: Web/Digital Specialist 1 at Sabre
[2026-01-12T16:45:21.932Z] [BOT] ⏭️  Skipping duplicate: JID_08b95b67-i_r18423 (posted within 7 days)
⏭️ Skipping already posted: Workday Extend Developer 1 at Iowa State University
[2026-01-12T16:45:21.932Z] [BOT] ⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-589735 (posted within 7 days)
⏭️ Skipping already posted: Application Support - Java skills - Associate at HEXAWARE
[2026-01-12T16:45:21.932Z] [BOT] ⏭️  Skipping duplicate: JID_a44e73ca-6078916_13942102 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_385c8ffa-6078908_13942096-1 (posted within 7 days)
[2026-01-12T16:45:21.932Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_60f42868-i_1199912-1 (posted within 7 days)
⏭️ Skipping already posted: Systems/Software Engineer 1 at Hewlett Packard Enterprise
[2026-01-12T16:45:21.932Z] [BOT] ⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 1: ROLE_e67deec4 at Oscar Health
[2026-01-12T16:45:21.932Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_530e45ae-ut_r10218884 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer / Software Engineer at Northrop Grumman
[2026-01-12T16:45:21.933Z] [BOT] ⏭️  Skipping duplicate: JID_bc80fdc0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
📬 Found 1 new jobs (19 already posted)...
[2026-01-12T16:45:21.933Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-12T16:45:21.933Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-12T16:45:21.933Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T16:45:21.934Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-12T16:45:21.935Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_692aa04a
[2026-01-12T16:45:21.936Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-12T16:45:21.940Z] [BOT ERROR] (node:3040) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T16:45:22.209Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_692aa04a in #📈・JID_fb739488
[2026-01-12T16:45:22.209Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_692aa04a
[2026-01-12T16:45:24.158Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_692aa04a in #💻・remote-usa
[2026-01-12T16:45:24.159Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-12T16:45:25.659Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_692aa04a (instance #1)
[2026-01-12T16:45:25.659Z] [BOT] 💾 BEFORE ARCHIVING: 403 jobs in database
[2026-01-12T16:45:25.660Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T16:45:25.665Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-12T16:45:25.665Z] [BOT] ✅ Archiving complete: 3 archived, 400 active
[2026-01-12T16:45:25.670Z] [BOT] 💾 Saved posted_jobs.json: 400 active jobs
[2026-01-12T16:45:25.670Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T16:45:28.671Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-12T16:45:28.671Z] [BOT] ⏭️  Skipping duplicate: JID_13d998db-i_r106463-1 (posted within 7 days)
[2026-01-12T16:45:28.682Z] [BOT] ✅ Loaded pending queue: 271 total (251 pending, 20 enriched, 0 posted)
[2026-01-12T16:45:28.700Z] [BOT] ✅ Saved pending queue: 271 total (251 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-12T16:45:28.700Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T16:45:28.754Z] [BOT] 📂 Loaded 2570 existing routing entries
[2026-01-12T16:45:28.812Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-12T16:45:28.812Z] [BOT] Total entries: 2571
   Timestamp: 2026-01-12T16:45:28.798Z
[2026-01-12T16:45:28.812Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T16:45:28.812Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-12T16:45:28.813Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-12T16:45:28.813Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #📈・JID_fb739488: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-12T16:45:28.813Z] [BOT] [STATS] Channel stats saved
[2026-01-12T16:45:30.828Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3040) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*