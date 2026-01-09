# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T17:26:18.200Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T17:26:04.051Z] ========================================
[2026-01-09T17:26:04.053Z] Discord Bot Execution Log
[2026-01-09T17:26:04.053Z] Environment: GitHub Actions
[2026-01-09T17:26:04.053Z] Node Version: v20.19.6
[2026-01-09T17:26:04.053Z] ========================================
[2026-01-09T17:26:04.053Z] Environment Variables Check:
[2026-01-09T17:26:04.053Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T17:26:04.053Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T17:26:04.053Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T17:26:04.054Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T17:26:04.054Z] 
Multi-Channel Configuration:
[2026-01-09T17:26:04.054Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T17:26:04.054Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T17:26:04.054Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T17:26:04.054Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T17:26:04.054Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T17:26:04.054Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T17:26:04.054Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T17:26:04.054Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T17:26:04.054Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T17:26:04.054Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T17:26:04.054Z] 
Data Files Check:
[2026-01-09T17:26:04.056Z] .github/data/new_jobs.json: ✅ Exists (10 items, 191545 bytes)
[2026-01-09T17:26:04.062Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 767161 bytes)
[2026-01-09T17:26:04.062Z] 
========================================
[2026-01-09T17:26:04.062Z] Starting Enhanced Discord Bot...
[2026-01-09T17:26:04.062Z] ========================================
[2026-01-09T17:26:04.596Z] [BOT] ✅ Loaded V2 database: 1494 jobs
[2026-01-09T17:26:05.358Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T17:26:05.358Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T17:26:05.358Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T17:26:05.369Z] [BOT] ✅ Loaded pending queue: 230 total (210 pending, 20 enriched, 0 posted)
[2026-01-09T17:26:05.369Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: FP&A Manager,  GTM at vercel
[2026-01-09T17:26:05.371Z] [BOT] ⏭️  Skipping duplicate: JID_d964c21b (posted within 7 days)
[2026-01-09T17:26:05.371Z] [BOT] ⏭️ Skipping already posted: Meteorologist - NASA Ballon Program at Peraton
[2026-01-09T17:26:05.371Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer, Universes at anthropic
[2026-01-09T17:26:05.371Z] [BOT] ⏭️  Skipping duplicate: JID_bab53bb3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f7570db at samsara
[2026-01-09T17:26:05.372Z] [BOT] ⏭️  Skipping duplicate: JID_633791af (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Front End Web at Intuit
[2026-01-09T17:26:05.372Z] [BOT] ⏭️  Skipping duplicate: JID_648a0f2e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Tax Preparation Data Management at Intuit
⏭️  Skipping duplicate: JID_7ec53afc (posted within 7 days)
⏭️ Skipping already posted: Strategic Account Executive, Asset & Wealth Management at anthropic
[2026-01-09T17:26:05.372Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T17:26:05.372Z] [BOT] ⏭️  Skipping duplicate: JID_9e59648a-level_r0113909-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ce65518c at USAA
[2026-01-09T17:26:05.372Z] [BOT] ⏭️  Skipping duplicate: JID_7fb73b9e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T17:26:05.373Z] [BOT] ⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
⏭️ Skipping already posted: Associate Data Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62537 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62493 (posted within 7 days)
[2026-01-09T17:26:05.373Z] [BOT] ⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_66109d1a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T17:26:05.373Z] [BOT] ⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
⏭️ Skipping already posted: Engineer Software 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
[2026-01-09T17:26:05.373Z] [BOT] ⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
📬 Found 2 new jobs (18 already posted)...
[2026-01-09T17:26:05.373Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-09T17:26:05.373Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-09T17:26:05.374Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-09T17:26:05.374Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T17:26:05.377Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-09T17:26:05.378Z] [BOT] 📍 [ROUTING] "FP&A Manager,  GTM" @ vercel
[2026-01-09T17:26:05.378Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-09T17:26:05.383Z] [BOT ERROR] (node:2725) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T17:26:05.570Z] [BOT] ✅ Created forum post: 🏢 FP&A Manager,  GTM @ vercel in #💲・sales-jobs
  ✅ Industry: FP&A Manager,  GTM @ vercel
[2026-01-09T17:26:07.407Z] [BOT] ✅ Created forum post: 🏢 FP&A Manager,  GTM @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-09T17:26:08.909Z] [BOT] 💾 Marked as posted: FP&A Manager,  GTM @ vercel (instance #1)
[2026-01-09T17:26:08.909Z] [BOT] 💾 BEFORE ARCHIVING: 1495 jobs in database
[2026-01-09T17:26:08.911Z] [BOT] ✅ No jobs to archive (all 1495 jobs within 7-day window)
[2026-01-09T17:26:08.924Z] [BOT] 💾 Saved posted_jobs.json: 1495 active jobs
[2026-01-09T17:26:08.924Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T17:26:08.924Z] [BOT] 📍 [ROUTING] " Strategy and Messaging Communications Lead, Narrative" @ anthropic
[2026-01-09T17:26:08.924Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-09T17:26:09.101Z] [BOT] ✅ Created forum post: 🏢  Strategy and Messaging Communications Lead, Narrative @ anthropic in #💲・sales-jobs
  ✅ Industry:  Strategy and Messaging Communications Lead, Narrative @ anthropic
[2026-01-09T17:26:10.879Z] [BOT] ✅ Created forum post: 🏢  Strategy and Messaging Communications Lead, Narrative @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-09T17:26:12.380Z] [BOT] 💾 Marked as posted:  Strategy and Messaging Communications Lead, Narrative @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 1496 jobs in database
[2026-01-09T17:26:12.381Z] [BOT] ✅ No jobs to archive (all 1496 jobs within 7-day window)
[2026-01-09T17:26:12.391Z] [BOT] 💾 Saved posted_jobs.json: 1496 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T17:26:15.393Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-09T17:26:15.393Z] [BOT] ⏭️  Skipping duplicate: JID_e942e20e (posted within 7 days)
[2026-01-09T17:26:15.393Z] [BOT] ⏭️  Skipping duplicate: JID_08a687ec (posted within 7 days)
[2026-01-09T17:26:15.404Z] [BOT] ✅ Loaded pending queue: 230 total (210 pending, 20 enriched, 0 posted)
[2026-01-09T17:26:15.421Z] [BOT] ✅ Saved pending queue: 230 total (210 pending, 18 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-01-09T17:26:15.421Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T17:26:15.482Z] [BOT] 📂 Loaded 2502 existing routing entries
[2026-01-09T17:26:15.539Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 2504
[2026-01-09T17:26:15.539Z] [BOT] Timestamp: 2026-01-09T17:26:15.528Z
[2026-01-09T17:26:15.540Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
[2026-01-09T17:26:15.540Z] [BOT] Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
[2026-01-09T17:26:15.540Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-09T17:26:15.540Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 2
   Top channels:
     1. #💲・sales-jobs: 2 posts
[2026-01-09T17:26:15.540Z] [BOT] 2. #🌉・san-francisco: 2 posts
[2026-01-09T17:26:15.540Z] [BOT] [STATS] Channel stats saved
[2026-01-09T17:26:17.554Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2725) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*