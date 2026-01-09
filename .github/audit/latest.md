# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T17:11:28.909Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 17
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T17:11:11.009Z] ========================================
[2026-01-09T17:11:11.010Z] Discord Bot Execution Log
[2026-01-09T17:11:11.011Z] Environment: GitHub Actions
[2026-01-09T17:11:11.011Z] Node Version: v20.19.6
[2026-01-09T17:11:11.011Z] ========================================
[2026-01-09T17:11:11.011Z] Environment Variables Check:
[2026-01-09T17:11:11.011Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T17:11:11.011Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T17:11:11.011Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T17:11:11.011Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T17:11:11.011Z] 
Multi-Channel Configuration:
[2026-01-09T17:11:11.011Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T17:11:11.011Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T17:11:11.012Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T17:11:11.012Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T17:11:11.012Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T17:11:11.012Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T17:11:11.012Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T17:11:11.012Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T17:11:11.012Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T17:11:11.012Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T17:11:11.012Z] 
Data Files Check:
[2026-01-09T17:11:11.013Z] .github/data/new_jobs.json: ✅ Exists (10 items, 174923 bytes)
[2026-01-09T17:11:11.019Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 765908 bytes)
[2026-01-09T17:11:11.019Z] 
========================================
[2026-01-09T17:11:11.019Z] Starting Enhanced Discord Bot...
[2026-01-09T17:11:11.019Z] ========================================
[2026-01-09T17:11:11.551Z] [BOT] ✅ Loaded V2 database: 1492 jobs
[2026-01-09T17:11:12.711Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T17:11:12.711Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T17:11:12.711Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T17:11:12.722Z] [BOT] ✅ Loaded pending queue: 228 total (208 pending, 20 enriched, 0 posted)
[2026-01-09T17:11:12.723Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Meteorologist - NASA Ballon Program at Peraton
[2026-01-09T17:11:12.724Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
[2026-01-09T17:11:12.724Z] [BOT] ⏭️ Skipping already posted: Research Engineer, Universes at anthropic
[2026-01-09T17:11:12.724Z] [BOT] ⏭️  Skipping duplicate: JID_bab53bb3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f7570db at samsara
[2026-01-09T17:11:12.725Z] [BOT] ⏭️  Skipping duplicate: JID_7ec53afc (posted within 7 days)
[2026-01-09T17:11:12.725Z] [BOT] ⏭️ Skipping already posted: Strategic Account Executive, Asset & Wealth Management at anthropic
[2026-01-09T17:11:12.725Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T17:11:12.726Z] [BOT] ⏭️  Skipping duplicate: JID_9e59648a-level_r0113909-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ce65518c at USAA
⏭️  Skipping duplicate: JID_7fb73b9e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T17:11:12.726Z] [BOT] ⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
⏭️ Skipping already posted: Associate Data Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T17:11:12.726Z] [BOT] ⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62537 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T17:11:12.726Z] [BOT] ⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62493 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T17:11:12.726Z] [BOT] ⏭️  Skipping duplicate: JID_66109d1a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T17:11:12.726Z] [BOT] ⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
⏭️ Skipping already posted: Engineer Software 1 at Huntington Ingalls Industries
[2026-01-09T17:11:12.727Z] [BOT] ⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
[2026-01-09T17:11:12.727Z] [BOT] ⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
[2026-01-09T17:11:12.727Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
[2026-01-09T17:11:12.727Z] [BOT] ⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
📬 Found 3 new jobs (17 already posted)...
[2026-01-09T17:11:12.727Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2026-01-09T17:11:12.727Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-09T17:11:12.728Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-09T17:11:12.728Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer 1 - Front End Web @ Intuit: mountain view, san diego
[2026-01-09T17:11:12.728Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T17:11:12.731Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-09T17:11:12.732Z] [BOT] 📍 [ROUTING] "Meteorologist - NASA Ballon Program" @ ORG_d6d2009d
[2026-01-09T17:11:12.732Z] [BOT] Category: MARKETING (matched: "sem")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-09T17:11:12.737Z] [BOT ERROR] (node:2864) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T17:11:13.059Z] [BOT] ✅ Created forum post: 🏢 Meteorologist - NASA Ballon Program @ ORG_d6d2009d in #📣・marketing-jobs
[2026-01-09T17:11:13.060Z] [BOT] ✅ Industry: Meteorologist - NASA Ballon Program @ ORG_d6d2009d
[2026-01-09T17:11:14.844Z] [BOT] ✅ Created forum post: 🏢 Meteorologist - NASA Ballon Program @ ORG_d6d2009d in #🤠・austin
[2026-01-09T17:11:14.844Z] [BOT] ✅ Location: 🤠・austin
[2026-01-09T17:11:16.345Z] [BOT] 💾 Marked as posted: Meteorologist - NASA Ballon Program @ ORG_d6d2009d (instance #1)
[2026-01-09T17:11:16.345Z] [BOT] 💾 BEFORE ARCHIVING: 1493 jobs in database
[2026-01-09T17:11:16.347Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T17:11:16.352Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-09T17:11:16.352Z] [BOT] ✅ Archiving complete: 1 archived, 1492 active
[2026-01-09T17:11:16.363Z] [BOT] 💾 Saved posted_jobs.json: 1492 active jobs
[2026-01-09T17:11:16.363Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T17:11:19.364Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-09T17:11:19.365Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Front End Web" @ ORG_0bbe3cb1
[2026-01-09T17:11:19.365Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T17:11:19.657Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Front End Web @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-09T17:11:19.657Z] [BOT] ✅ Industry: Software Engineer 1 - Front End Web @ ORG_0bbe3cb1
[2026-01-09T17:11:21.322Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Front End Web @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-09T17:11:22.822Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Front End Web @ ORG_0bbe3cb1 (instance #1)
[2026-01-09T17:11:22.822Z] [BOT] 💾 BEFORE ARCHIVING: 1493 jobs in database
[2026-01-09T17:11:22.823Z] [BOT] ✅ No jobs to archive (all 1493 jobs within 7-day window)
[2026-01-09T17:11:22.833Z] [BOT] 💾 Saved posted_jobs.json: 1493 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T17:11:22.834Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Tax Preparation Data Management @ ORG_0bbe3cb1 (instance #1)
[2026-01-09T17:11:22.834Z] [BOT] 💾 BEFORE ARCHIVING: 1494 jobs in database
[2026-01-09T17:11:22.835Z] [BOT] ✅ No jobs to archive (all 1494 jobs within 7-day window)
[2026-01-09T17:11:22.847Z] [BOT] 💾 Saved posted_jobs.json: 1494 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T17:11:25.847Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-09T17:11:25.847Z] [BOT] ⏭️  Skipping duplicate: JID_d964c21b (posted within 7 days)
[2026-01-09T17:11:25.847Z] [BOT] ⏭️  Skipping duplicate: JID_633791af (posted within 7 days)
[2026-01-09T17:11:25.854Z] [BOT] ✅ Loaded pending queue: 228 total (208 pending, 20 enriched, 0 posted)
[2026-01-09T17:11:25.867Z] [BOT] ✅ Saved pending queue: 228 total (208 pending, 18 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-09T17:11:25.921Z] [BOT] 📂 Loaded 2500 existing routing entries
[2026-01-09T17:11:25.977Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 2502
   Timestamp: 2026-01-09T17:11:25.966Z
[2026-01-09T17:11:25.977Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
   Total attempts: 21
[2026-01-09T17:11:25.977Z] [BOT] Successful: 4
   Failed: 0
   Skipped: 17
[2026-01-09T17:11:25.978Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #📣・marketing-jobs: 1 posts
     2. #🤠・austin: 1 posts
     3. #💻・tech-jobs: 1 posts
     4. #🌄・mountain-view: 1 posts
[2026-01-09T17:11:25.978Z] [BOT] [STATS] Channel stats saved
[2026-01-09T17:11:27.992Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2864) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*