# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T12:48:24.304Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T12:48:15.578Z] ========================================
[2026-01-09T12:48:15.580Z] Discord Bot Execution Log
[2026-01-09T12:48:15.580Z] Environment: GitHub Actions
[2026-01-09T12:48:15.580Z] Node Version: v20.19.6
[2026-01-09T12:48:15.580Z] ========================================
[2026-01-09T12:48:15.580Z] Environment Variables Check:
[2026-01-09T12:48:15.580Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T12:48:15.580Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T12:48:15.580Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T12:48:15.580Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T12:48:15.580Z] 
Multi-Channel Configuration:
[2026-01-09T12:48:15.580Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T12:48:15.580Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T12:48:15.580Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T12:48:15.581Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T12:48:15.581Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T12:48:15.581Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T12:48:15.581Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T12:48:15.581Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T12:48:15.581Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T12:48:15.581Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T12:48:15.581Z] 
Data Files Check:
[2026-01-09T12:48:15.582Z] .github/data/new_jobs.json: ✅ Exists (10 items, 101107 bytes)
[2026-01-09T12:48:15.588Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 775477 bytes)
[2026-01-09T12:48:15.588Z] 
========================================
[2026-01-09T12:48:15.588Z] Starting Enhanced Discord Bot...
[2026-01-09T12:48:15.588Z] ========================================
[2026-01-09T12:48:16.055Z] [BOT] ✅ Loaded V2 database: 1506 jobs
[2026-01-09T12:48:16.512Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T12:48:16.512Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T12:48:16.513Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T12:48:16.522Z] [BOT] ✅ Loaded pending queue: 221 total (201 pending, 20 enriched, 0 posted)
[2026-01-09T12:48:16.523Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Manager - BDR at gohighlevel
[2026-01-09T12:48:16.524Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
[2026-01-09T12:48:16.524Z] [BOT] ⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T12:48:16.524Z] [BOT] ⏭️  Skipping duplicate: JID_9e59648a-level_r0113909-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ce65518c at USAA
[2026-01-09T12:48:16.524Z] [BOT] ⏭️  Skipping duplicate: JID_7fb73b9e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T12:48:16.525Z] [BOT] ⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
[2026-01-09T12:48:16.525Z] [BOT] ⏭️ Skipping already posted: Associate Data Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62537 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62493 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_66109d1a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T12:48:16.525Z] [BOT] ⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
⏭️ Skipping already posted: Engineer Software 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
[2026-01-09T12:48:16.525Z] [BOT] ⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
[2026-01-09T12:48:16.525Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
[2026-01-09T12:48:16.526Z] [BOT] ⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
[2026-01-09T12:48:16.526Z] [BOT] ⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T12:48:16.526Z] [BOT] ⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T12:48:16.526Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1a650767 at General Dynamics Information Technology
⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
⏭️ Skipping already posted: Corporate Counsel, M&A at anthropic
[2026-01-09T12:48:16.526Z] [BOT] ⏭️  Skipping duplicate: JID_8d58a7c2-ft_r197676 (posted within 7 days)
⏭️ Skipping already posted: ROLE_f7ffdd20 at Advocate Health Care
📬 Found 1 new jobs (19 already posted)...
[2026-01-09T12:48:16.526Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T12:48:16.527Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T12:48:16.527Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T12:48:16.527Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-09T12:48:16.529Z] [BOT] 📍 [ROUTING] "Manager - BDR" @ gohighlevel
   Category: AI (matched: "artificial intelligence")
[2026-01-09T12:48:16.529Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-09T12:48:16.546Z] [BOT ERROR] (node:3120) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T12:48:16.846Z] [BOT] ✅ Created forum post: 🏢 Manager - BDR @ gohighlevel in #🤖・ai-jobs
  ✅ Industry: Manager - BDR @ gohighlevel
[2026-01-09T12:48:18.348Z] [BOT] 💾 Marked as posted: Manager - BDR @ gohighlevel (instance #1)
[2026-01-09T12:48:18.348Z] [BOT] 💾 BEFORE ARCHIVING: 1507 jobs in database
[2026-01-09T12:48:18.349Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T12:48:18.353Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
✅ Archiving complete: 5 archived, 1502 active
[2026-01-09T12:48:18.364Z] [BOT] 💾 Saved posted_jobs.json: 1502 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T12:48:21.366Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T12:48:21.366Z] [BOT] ⏭️  Skipping duplicate: JID_fda7b910 (posted within 7 days)
[2026-01-09T12:48:21.375Z] [BOT] ✅ Loaded pending queue: 221 total (201 pending, 20 enriched, 0 posted)
[2026-01-09T12:48:21.391Z] [BOT] ✅ Saved pending queue: 221 total (201 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-09T12:48:21.447Z] [BOT] 📂 Loaded 2494 existing routing entries
[2026-01-09T12:48:21.506Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2495
   Timestamp: 2026-01-09T12:48:21.493Z
[2026-01-09T12:48:21.506Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
   Total attempts: 20
[2026-01-09T12:48:21.506Z] [BOT] Successful: 1
   Failed: 0
   Skipped: 19
[2026-01-09T12:48:21.506Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-09T12:48:21.507Z] [BOT] Total posts: 1
   Channels used: 1
   Top channels:
     1. #🤖・ai-jobs: 1 posts
[2026-01-09T12:48:21.507Z] [BOT] [STATS] Channel stats saved
[2026-01-09T12:48:23.520Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3120) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*