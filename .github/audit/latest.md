# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T10:26:27.508Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T10:26:09.125Z] ========================================
[2026-01-09T10:26:09.127Z] Discord Bot Execution Log
[2026-01-09T10:26:09.127Z] Environment: GitHub Actions
[2026-01-09T10:26:09.127Z] Node Version: v20.19.6
[2026-01-09T10:26:09.127Z] ========================================
[2026-01-09T10:26:09.127Z] Environment Variables Check:
[2026-01-09T10:26:09.127Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T10:26:09.127Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T10:26:09.127Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T10:26:09.127Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T10:26:09.127Z] 
Multi-Channel Configuration:
[2026-01-09T10:26:09.127Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T10:26:09.128Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T10:26:09.128Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T10:26:09.128Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T10:26:09.128Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T10:26:09.128Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T10:26:09.128Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T10:26:09.128Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T10:26:09.128Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T10:26:09.128Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T10:26:09.128Z] 
Data Files Check:
[2026-01-09T10:26:09.129Z] .github/data/new_jobs.json: ✅ Exists (10 items, 77602 bytes)
[2026-01-09T10:26:09.135Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 773808 bytes)
[2026-01-09T10:26:09.135Z] 
========================================
[2026-01-09T10:26:09.135Z] Starting Enhanced Discord Bot...
[2026-01-09T10:26:09.135Z] ========================================
[2026-01-09T10:26:09.597Z] [BOT] ✅ Loaded V2 database: 1503 jobs
[2026-01-09T10:26:10.113Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T10:26:10.113Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T10:26:10.113Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T10:26:10.125Z] [BOT] ✅ Loaded pending queue: 220 total (200 pending, 20 enriched, 0 posted)
[2026-01-09T10:26:10.126Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Search Quality Rater - English - Florida at RWS
[2026-01-09T10:26:10.127Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
[2026-01-09T10:26:10.127Z] [BOT] ⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T10:26:10.128Z] [BOT] ⏭️  Skipping duplicate: JID_9e59648a-level_r0113909-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ce65518c at USAA
[2026-01-09T10:26:10.128Z] [BOT] ⏭️  Skipping duplicate: JID_7fb73b9e (posted within 7 days)
[2026-01-09T10:26:10.128Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T10:26:10.128Z] [BOT] ⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
⏭️ Skipping already posted: Associate Data Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62537 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62493 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T10:26:10.128Z] [BOT] ⏭️  Skipping duplicate: JID_66109d1a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T10:26:10.128Z] [BOT] ⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
⏭️ Skipping already posted: Engineer Software 1 at Huntington Ingalls Industries
[2026-01-09T10:26:10.128Z] [BOT] ⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
[2026-01-09T10:26:10.128Z] [BOT] ⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
[2026-01-09T10:26:10.129Z] [BOT] ⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T10:26:10.129Z] [BOT] ⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T10:26:10.129Z] [BOT] ⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
[2026-01-09T10:26:10.129Z] [BOT] ⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
[2026-01-09T10:26:10.129Z] [BOT] ⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
[2026-01-09T10:26:10.129Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T10:26:10.129Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1a650767 at General Dynamics Information Technology
⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
⏭️ Skipping already posted: Corporate Counsel, M&A at anthropic
📬 Found 2 new jobs (18 already posted)...
[2026-01-09T10:26:10.129Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-09T10:26:10.129Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-09T10:26:10.130Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-09T10:26:10.130Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T10:26:10.132Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-09T10:26:10.133Z] [BOT] 📍 [ROUTING] "Search Quality Rater - English - Florida" @ ORG_f3ae3598
   Category: TECH (default)
[2026-01-09T10:26:10.133Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T10:26:10.137Z] [BOT ERROR] (node:2998) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T10:26:11.695Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater - English - Florida @ ORG_f3ae3598 in #💻・tech-jobs
[2026-01-09T10:26:11.695Z] [BOT] ✅ Industry: Search Quality Rater - English - Florida @ ORG_f3ae3598
[2026-01-09T10:26:13.500Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater - English - Florida @ ORG_f3ae3598 in #💻・remote-usa
[2026-01-09T10:26:13.501Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-09T10:26:15.001Z] [BOT] 💾 Marked as posted: Search Quality Rater - English - Florida @ ORG_f3ae3598 (instance #1)
[2026-01-09T10:26:15.002Z] [BOT] 💾 BEFORE ARCHIVING: 1504 jobs in database
[2026-01-09T10:26:15.003Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T10:26:15.007Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-09T10:26:15.007Z] [BOT] ✅ Archiving complete: 1 archived, 1503 active
[2026-01-09T10:26:15.016Z] [BOT] 💾 Saved posted_jobs.json: 1503 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T10:26:18.018Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-09T10:26:18.019Z] [BOT] 📍 [ROUTING] "Software Engineer 3 - Security/Privacy - Google Cloud Security and Privacy" @ ORG_ce770667
   Category: AI (matched: "artificial intelligence")
[2026-01-09T10:26:18.019Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-09T10:26:18.333Z] [BOT] ✅ Created forum post: 🟢 Software Engineer 3 - Security/Privacy - Google Cloud Security and Privacy @ ORG_ce770667 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 3 - Security/Privacy - Google Cloud Security and Privacy @ ORG_ce770667
[2026-01-09T10:26:20.152Z] [BOT] ✅ Created forum post: 🟢 Software Engineer 3 - Security/Privacy - Google Cloud Security and Privacy @ ORG_ce770667 in #🌉・san-francisco
[2026-01-09T10:26:20.152Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-09T10:26:21.653Z] [BOT] 💾 Marked as posted: Software Engineer 3 - Security/Privacy - Google Cloud Security and Privacy @ ORG_ce770667 (instance #1)
[2026-01-09T10:26:21.653Z] [BOT] 💾 BEFORE ARCHIVING: 1504 jobs in database
[2026-01-09T10:26:21.654Z] [BOT] ✅ No jobs to archive (all 1504 jobs within 7-day window)
[2026-01-09T10:26:21.665Z] [BOT] 💾 Saved posted_jobs.json: 1504 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T10:26:24.665Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-09T10:26:24.666Z] [BOT] ⏭️  Skipping duplicate: JID_ea891334 (posted within 7 days)
[2026-01-09T10:26:24.666Z] [BOT] ⏭️  Skipping duplicate: JID_2b60cefa (posted within 7 days)
[2026-01-09T10:26:24.679Z] [BOT] ✅ Loaded pending queue: 220 total (200 pending, 20 enriched, 0 posted)
[2026-01-09T10:26:24.692Z] [BOT] ✅ Saved pending queue: 220 total (200 pending, 18 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-09T10:26:24.758Z] [BOT] 📂 Loaded 2490 existing routing entries
[2026-01-09T10:26:24.810Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 2492
[2026-01-09T10:26:24.810Z] [BOT] Timestamp: 2026-01-09T10:26:24.801Z
[2026-01-09T10:26:24.811Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
   Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
[2026-01-09T10:26:24.811Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-09T10:26:24.811Z] [BOT] Total posts: 4
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
     3. #🤖・ai-jobs: 1 posts
     4. #🌉・san-francisco: 1 posts
[2026-01-09T10:26:24.811Z] [BOT] [STATS] Channel stats saved
[2026-01-09T10:26:26.823Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2998) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*