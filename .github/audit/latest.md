# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T15:42:08.037Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T15:41:57.331Z] ========================================
[2026-01-09T15:41:57.333Z] Discord Bot Execution Log
[2026-01-09T15:41:57.333Z] Environment: GitHub Actions
[2026-01-09T15:41:57.333Z] Node Version: v20.19.6
[2026-01-09T15:41:57.333Z] ========================================
[2026-01-09T15:41:57.333Z] Environment Variables Check:
[2026-01-09T15:41:57.333Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T15:41:57.334Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T15:41:57.334Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T15:41:57.334Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T15:41:57.334Z] 
Multi-Channel Configuration:
[2026-01-09T15:41:57.334Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T15:41:57.334Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T15:41:57.334Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T15:41:57.334Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T15:41:57.334Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T15:41:57.334Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T15:41:57.334Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T15:41:57.334Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T15:41:57.334Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T15:41:57.334Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T15:41:57.335Z] 
Data Files Check:
[2026-01-09T15:41:57.336Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108647 bytes)
[2026-01-09T15:41:57.341Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 769662 bytes)
[2026-01-09T15:41:57.341Z] 
========================================
[2026-01-09T15:41:57.341Z] Starting Enhanced Discord Bot...
[2026-01-09T15:41:57.341Z] ========================================
[2026-01-09T15:41:57.870Z] [BOT] ✅ Loaded V2 database: 1497 jobs
[2026-01-09T15:41:58.480Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T15:41:58.480Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T15:41:58.480Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T15:41:58.491Z] [BOT] ✅ Loaded pending queue: 223 total (203 pending, 20 enriched, 0 posted)
[2026-01-09T15:41:58.491Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist - Podcast at spotify
[2026-01-09T15:41:58.492Z] [BOT] ⏭️  Skipping duplicate: JID_7ec53afc (posted within 7 days)
[2026-01-09T15:41:58.492Z] [BOT] ⏭️ Skipping already posted: Strategic Account Executive, Asset & Wealth Management at anthropic
[2026-01-09T15:41:58.493Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
[2026-01-09T15:41:58.493Z] [BOT] ⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
⏭️  Skipping duplicate: JID_9e59648a-level_r0113909-1 (posted within 7 days)
[2026-01-09T15:41:58.493Z] [BOT] ⏭️ Skipping already posted: ROLE_ce65518c at USAA
⏭️  Skipping duplicate: JID_7fb73b9e (posted within 7 days)
[2026-01-09T15:41:58.493Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
⏭️ Skipping already posted: Associate Data Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62537 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T15:41:58.494Z] [BOT] ⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62493 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_66109d1a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T15:41:58.494Z] [BOT] ⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
[2026-01-09T15:41:58.494Z] [BOT] ⏭️ Skipping already posted: Engineer Software 1 at Huntington Ingalls Industries
[2026-01-09T15:41:58.494Z] [BOT] ⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
[2026-01-09T15:41:58.494Z] [BOT] ⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
[2026-01-09T15:41:58.494Z] [BOT] ⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T15:41:58.495Z] [BOT] ⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
[2026-01-09T15:41:58.495Z] [BOT] ⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
[2026-01-09T15:41:58.495Z] [BOT] ⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
[2026-01-09T15:41:58.495Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T15:41:58.495Z] [BOT] ⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1a650767 at General Dynamics Information Technology
[2026-01-09T15:41:58.495Z] [BOT] 📬 Found 1 new jobs (19 already posted)...
📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-09T15:41:58.495Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T15:41:58.496Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T15:41:58.496Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T15:41:58.496Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-09T15:41:58.498Z] [BOT] 📍 [ROUTING] "Data Scientist - Podcast" @ spotify
[2026-01-09T15:41:58.498Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-09T15:41:58.502Z] [BOT ERROR] (node:3013) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T15:41:58.790Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Podcast @ spotify in #🤖・ai-jobs
  ✅ Industry: Data Scientist - Podcast @ spotify
[2026-01-09T15:42:00.511Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Podcast @ spotify in #🗽・new-york
[2026-01-09T15:42:00.512Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-09T15:42:02.013Z] [BOT] 💾 Marked as posted: Data Scientist - Podcast @ spotify (instance #1)
[2026-01-09T15:42:02.013Z] [BOT] 💾 BEFORE ARCHIVING: 1498 jobs in database
[2026-01-09T15:42:02.015Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T15:42:02.020Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-09T15:42:02.020Z] [BOT] ✅ Archiving complete: 3 archived, 1495 active
[2026-01-09T15:42:02.033Z] [BOT] 💾 Saved posted_jobs.json: 1495 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T15:42:05.033Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T15:42:05.033Z] [BOT] ⏭️  Skipping duplicate: JID_aa5374fc (posted within 7 days)
[2026-01-09T15:42:05.042Z] [BOT] ✅ Loaded pending queue: 223 total (203 pending, 20 enriched, 0 posted)
[2026-01-09T15:42:05.058Z] [BOT] ✅ Saved pending queue: 223 total (203 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-09T15:42:05.058Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T15:42:05.111Z] [BOT] 📂 Loaded 2496 existing routing entries
[2026-01-09T15:42:05.166Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2497
[2026-01-09T15:42:05.166Z] [BOT] Timestamp: 2026-01-09T15:42:05.156Z
[2026-01-09T15:42:05.167Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
   Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-09T15:42:05.167Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-09T15:42:05.167Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-09T15:42:05.168Z] [BOT] [STATS] Channel stats saved
[2026-01-09T15:42:07.183Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3013) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*