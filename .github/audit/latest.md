# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T07:41:21.087Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T07:41:06.906Z] ========================================
[2026-01-09T07:41:06.908Z] Discord Bot Execution Log
[2026-01-09T07:41:06.908Z] Environment: GitHub Actions
[2026-01-09T07:41:06.908Z] Node Version: v20.19.6
[2026-01-09T07:41:06.908Z] ========================================
[2026-01-09T07:41:06.908Z] Environment Variables Check:
[2026-01-09T07:41:06.908Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T07:41:06.909Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T07:41:06.909Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T07:41:06.909Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T07:41:06.909Z] 
Multi-Channel Configuration:
[2026-01-09T07:41:06.909Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T07:41:06.909Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T07:41:06.909Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T07:41:06.909Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T07:41:06.909Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T07:41:06.909Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T07:41:06.909Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T07:41:06.909Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T07:41:06.909Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T07:41:06.910Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T07:41:06.910Z] 
Data Files Check:
[2026-01-09T07:41:06.911Z] .github/data/new_jobs.json: ✅ Exists (10 items, 106396 bytes)
[2026-01-09T07:41:06.917Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 772256 bytes)
[2026-01-09T07:41:06.917Z] 
========================================
[2026-01-09T07:41:06.917Z] Starting Enhanced Discord Bot...
[2026-01-09T07:41:06.917Z] ========================================
[2026-01-09T07:41:07.469Z] [BOT] ✅ Loaded V2 database: 1501 jobs
[2026-01-09T07:41:08.082Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T07:41:08.083Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T07:41:08.083Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T07:41:08.094Z] [BOT] ✅ Loaded pending queue: 212 total (192 pending, 20 enriched, 0 posted)
[2026-01-09T07:41:08.094Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Associate Data Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T07:41:08.096Z] [BOT] ⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
[2026-01-09T07:41:08.096Z] [BOT] ⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
[2026-01-09T07:41:08.096Z] [BOT] ⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
[2026-01-09T07:41:08.096Z] [BOT] ⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
[2026-01-09T07:41:08.096Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T07:41:08.097Z] [BOT] ⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
[2026-01-09T07:41:08.097Z] [BOT] ⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T07:41:08.097Z] [BOT] ⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T07:41:08.097Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1a650767 at General Dynamics Information Technology
[2026-01-09T07:41:08.097Z] [BOT] ⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
⏭️ Skipping already posted: Corporate Counsel, M&A at anthropic
⏭️  Skipping duplicate: JID_8d58a7c2-ft_r197676 (posted within 7 days)
⏭️ Skipping already posted: ROLE_f7ffdd20 at Advocate Health Care
[2026-01-09T07:41:08.097Z] [BOT] ⏭️  Skipping duplicate: JID_5280a14a-scientist_r2517664 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d69b468e at Applied Materials
[2026-01-09T07:41:08.098Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378366-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-09T07:41:08.098Z] [BOT] ⏭️  Skipping duplicate: JID_7b17b840-entry_j00173791 (posted within 7 days)
⏭️ Skipping already posted: Data Processing Specialist - Entry at Equifax
[2026-01-09T07:41:08.098Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-09T07:41:08.098Z] [BOT] ⏭️  Skipping duplicate: JID_22bbcb93 (posted within 7 days)
⏭️ Skipping already posted: Manager, Account Executive - Enterprise Sales  at anthropic
[2026-01-09T07:41:08.098Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23270 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
[2026-01-09T07:41:08.098Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_be96d47c-preferred_rq212564-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d1a2e1c0 at General Dynamics Information Technology
📬 Found 2 new jobs (18 already posted)...
[2026-01-09T07:41:08.098Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-09T07:41:08.098Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-09T07:41:08.099Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-09T07:41:08.099Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T07:41:08.100Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-09T07:41:08.101Z] [BOT] 📍 [ROUTING] "Associate Data Engineer - Direct College Hire" @ ORG_89135357 Airlines
[2026-01-09T07:41:08.102Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-09T07:41:08.107Z] [BOT ERROR] (node:3288) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T07:41:08.331Z] [BOT] ✅ Created forum post: 🏢 Associate Data Engineer - Direct College Hire @ ORG_89135357 Airlines in #🤖・ai-jobs
  ✅ Industry: Associate Data Engineer - Direct College Hire @ ORG_89135357 Airlines
[2026-01-09T07:41:10.231Z] [BOT] ✅ Created forum post: 🏢 Associate Data Engineer - Direct College Hire @ ORG_89135357 Airlines in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-09T07:41:11.732Z] [BOT] 💾 Marked as posted: Associate Data Engineer - Direct College Hire @ ORG_89135357 Airlines (instance #1)
[2026-01-09T07:41:11.732Z] [BOT] 💾 BEFORE ARCHIVING: 1502 jobs in database
[2026-01-09T07:41:11.734Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T07:41:11.739Z] [BOT] 📦 Archived 4 jobs to 2026-01.json (4 total in archive)
✅ Archiving complete: 4 archived, 1498 active
[2026-01-09T07:41:11.750Z] [BOT] 💾 Saved posted_jobs.json: 1498 active jobs
[2026-01-09T07:41:11.750Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T07:41:11.751Z] [BOT] 📍 [ROUTING] "Engineer Software 1" @ ORG_81f16575ington Ingalls Industries
[2026-01-09T07:41:11.751Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-09T07:41:11.927Z] [BOT] ✅ Created forum post: 🏢 Engineer Software 1 @ ORG_81f16575ington Ingalls Industries in #🤖・ai-jobs
  ✅ Industry: Engineer Software 1 @ ORG_81f16575ington Ingalls Industries
[2026-01-09T07:41:13.649Z] [BOT] ✅ Created forum post: 🏢 Engineer Software 1 @ ORG_81f16575ington Ingalls Industries in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-09T07:41:15.151Z] [BOT] 💾 Marked as posted: Engineer Software 1 @ ORG_81f16575ington Ingalls Industries (instance #1)
[2026-01-09T07:41:15.151Z] [BOT] 💾 BEFORE ARCHIVING: 1499 jobs in database
[2026-01-09T07:41:15.152Z] [BOT] ✅ No jobs to archive (all 1499 jobs within 7-day window)
[2026-01-09T07:41:15.162Z] [BOT] 💾 Saved posted_jobs.json: 1499 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T07:41:18.163Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-09T07:41:18.164Z] [BOT] ⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
[2026-01-09T07:41:18.164Z] [BOT] ⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
[2026-01-09T07:41:18.175Z] [BOT] ✅ Loaded pending queue: 212 total (192 pending, 20 enriched, 0 posted)
[2026-01-09T07:41:18.191Z] [BOT] ✅ Saved pending queue: 212 total (192 pending, 18 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-01-09T07:41:18.191Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T07:41:18.250Z] [BOT] 📂 Loaded 2484 existing routing entries
[2026-01-09T07:41:18.312Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 2486
[2026-01-09T07:41:18.312Z] [BOT] Timestamp: 2026-01-09T07:41:18.301Z
[2026-01-09T07:41:18.313Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
   Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-09T07:41:18.313Z] [BOT] Total posts: 4
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 2 posts
     2. #🤠・austin: 1 posts
     3. #💻・remote-usa: 1 posts
[2026-01-09T07:41:18.313Z] [BOT] [STATS] Channel stats saved
[2026-01-09T07:41:20.327Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3288) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*