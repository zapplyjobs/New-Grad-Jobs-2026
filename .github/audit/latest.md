# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T11:51:24.785Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T11:51:15.841Z] ========================================
[2026-01-09T11:51:15.842Z] Discord Bot Execution Log
[2026-01-09T11:51:15.843Z] Environment: GitHub Actions
[2026-01-09T11:51:15.843Z] Node Version: v20.19.6
[2026-01-09T11:51:15.843Z] ========================================
[2026-01-09T11:51:15.843Z] Environment Variables Check:
[2026-01-09T11:51:15.843Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T11:51:15.843Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T11:51:15.843Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T11:51:15.843Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T11:51:15.843Z] 
Multi-Channel Configuration:
[2026-01-09T11:51:15.843Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T11:51:15.844Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T11:51:15.844Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T11:51:15.844Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T11:51:15.844Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T11:51:15.844Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T11:51:15.844Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T11:51:15.844Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T11:51:15.844Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T11:51:15.844Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T11:51:15.844Z] 
Data Files Check:
[2026-01-09T11:51:15.845Z] .github/data/new_jobs.json: ✅ Exists (10 items, 92912 bytes)
[2026-01-09T11:51:15.851Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 774904 bytes)
[2026-01-09T11:51:15.851Z] 
========================================
[2026-01-09T11:51:15.851Z] Starting Enhanced Discord Bot...
[2026-01-09T11:51:15.852Z] ========================================
[2026-01-09T11:51:16.393Z] [BOT] ✅ Loaded V2 database: 1505 jobs
[2026-01-09T11:51:16.882Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T11:51:16.883Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T11:51:16.883Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T11:51:16.894Z] [BOT] ✅ Loaded pending queue: 221 total (201 pending, 20 enriched, 0 posted)
[2026-01-09T11:51:16.894Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Development Engineer - Amazon Leo - US at Amazon
[2026-01-09T11:51:16.896Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
[2026-01-09T11:51:16.896Z] [BOT] ⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T11:51:16.896Z] [BOT] ⏭️  Skipping duplicate: JID_9e59648a-level_r0113909-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ce65518c at USAA
[2026-01-09T11:51:16.896Z] [BOT] ⏭️  Skipping duplicate: JID_7fb73b9e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T11:51:16.896Z] [BOT] ⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
[2026-01-09T11:51:16.897Z] [BOT] ⏭️ Skipping already posted: Associate Data Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62537 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T11:51:16.897Z] [BOT] ⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62493 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_66109d1a (posted within 7 days)
[2026-01-09T11:51:16.897Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T11:51:16.897Z] [BOT] ⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
⏭️ Skipping already posted: Engineer Software 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
[2026-01-09T11:51:16.897Z] [BOT] ⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
[2026-01-09T11:51:16.897Z] [BOT] ⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T11:51:16.897Z] [BOT] ⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
[2026-01-09T11:51:16.897Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
[2026-01-09T11:51:16.898Z] [BOT] ⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
[2026-01-09T11:51:16.898Z] [BOT] ⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T11:51:16.898Z] [BOT] ⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T11:51:16.898Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1a650767 at General Dynamics Information Technology
⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
⏭️ Skipping already posted: Corporate Counsel, M&A at anthropic
⏭️  Skipping duplicate: JID_8d58a7c2-ft_r197676 (posted within 7 days)
[2026-01-09T11:51:16.898Z] [BOT] ⏭️ Skipping already posted: ROLE_f7ffdd20 at Advocate Health Care
📬 Found 1 new jobs (19 already posted)...
[2026-01-09T11:51:16.898Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-09T11:51:16.898Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T11:51:16.899Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T11:51:16.899Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T11:51:16.900Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-09T11:51:16.901Z] [BOT] 📍 [ROUTING] "Software Development Engineer - Amazon Leo - US" @ ORG_49d2dc07
[2026-01-09T11:51:16.901Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T11:51:16.906Z] [BOT ERROR] (node:2950) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T11:51:17.309Z] [BOT] ✅ Created forum post: 📦 Software Development Engineer - Amazon Leo - US @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer - Amazon Leo - US @ ORG_49d2dc07
[2026-01-09T11:51:18.811Z] [BOT] 💾 Marked as posted: Software Development Engineer - Amazon Leo - US @ ORG_49d2dc07 (instance #1)
[2026-01-09T11:51:18.811Z] [BOT] 💾 BEFORE ARCHIVING: 1506 jobs in database
[2026-01-09T11:51:18.813Z] [BOT] ✅ No jobs to archive (all 1506 jobs within 7-day window)
[2026-01-09T11:51:18.829Z] [BOT] 💾 Saved posted_jobs.json: 1506 active jobs
[2026-01-09T11:51:18.829Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T11:51:21.830Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T11:51:21.831Z] [BOT] ⏭️  Skipping duplicate: JID_2e680245 (posted within 7 days)
[2026-01-09T11:51:21.838Z] [BOT] ✅ Loaded pending queue: 221 total (201 pending, 20 enriched, 0 posted)
[2026-01-09T11:51:21.855Z] [BOT] ✅ Saved pending queue: 221 total (201 pending, 19 enriched, 1 posted)
[2026-01-09T11:51:21.855Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-09T11:51:21.909Z] [BOT] 📂 Loaded 2493 existing routing entries
[2026-01-09T11:51:21.965Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-09T11:51:21.965Z] [BOT] Total entries: 2494
   Timestamp: 2026-01-09T11:51:21.955Z
[2026-01-09T11:51:21.966Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
   Total attempts: 20
   Successful: 1
   Failed: 0
   Skipped: 19
[2026-01-09T11:51:21.966Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 1
   Channels used: 1
[2026-01-09T11:51:21.966Z] [BOT] Top channels:
     1. #💻・tech-jobs: 1 posts
[2026-01-09T11:51:21.967Z] [BOT] [STATS] Channel stats saved
[2026-01-09T11:51:23.982Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2950) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*