# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T04:46:07.738Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T04:45:33.905Z] ========================================
[2026-01-03T04:45:33.907Z] Discord Bot Execution Log
[2026-01-03T04:45:33.907Z] Environment: GitHub Actions
[2026-01-03T04:45:33.907Z] Node Version: v20.19.6
[2026-01-03T04:45:33.907Z] ========================================
[2026-01-03T04:45:33.907Z] Environment Variables Check:
[2026-01-03T04:45:33.907Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T04:45:33.908Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T04:45:33.908Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T04:45:33.908Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T04:45:33.908Z] 
Multi-Channel Configuration:
[2026-01-03T04:45:33.908Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T04:45:33.908Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T04:45:33.908Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T04:45:33.908Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T04:45:33.908Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T04:45:33.908Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T04:45:33.909Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T04:45:33.909Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T04:45:33.909Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T04:45:33.909Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T04:45:33.909Z] 
Data Files Check:
[2026-01-03T04:45:33.910Z] .github/data/new_jobs.json: ✅ Exists (10 items, 146178 bytes)
[2026-01-03T04:45:33.911Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 89601 bytes)
[2026-01-03T04:45:33.911Z] 
========================================
[2026-01-03T04:45:33.911Z] Starting Enhanced Discord Bot...
[2026-01-03T04:45:33.911Z] ========================================
[2026-01-03T04:45:34.435Z] [BOT] ✅ Loaded V2 database: 146 jobs
[2026-01-03T04:45:34.904Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T04:45:34.905Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T04:45:34.905Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T04:45:34.906Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T04:45:35.003Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 65
[2026-01-03T04:45:35.004Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T04:45:35.005Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T04:45:35.005Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T04:45:35.005Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-01-03T04:45:35.006Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-03T04:45:35.006Z] [BOT] - Technical Consultant @ brex: san francisco, california, united states, seattle, washington, united states, new york, new york, united states, salt lake city, utah, united states
   - Associate Technical Consultant @ brex: salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 5 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T04:45:35.010Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-03T04:45:35.011Z] [BOT] 📍 [ROUTING] "Financial Crimes Investigator" @ brex
[2026-01-03T04:45:35.011Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-03T04:45:35.016Z] [BOT ERROR] (node:2347) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T04:45:35.210Z] [BOT] ✅ Created forum post: 🏢 Financial Crimes Investigator @ brex in #📁・JID_e938df7b
  ✅ Industry: Financial Crimes Investigator @ brex
[2026-01-03T04:45:36.924Z] [BOT] ✅ Created forum post: 🏢 Financial Crimes Investigator @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T04:45:38.425Z] [BOT] 💾 Marked as posted: Financial Crimes Investigator @ brex (instance #1)
[2026-01-03T04:45:38.425Z] [BOT] 💾 BEFORE ARCHIVING: 147 jobs in database
[2026-01-03T04:45:38.425Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-03T04:45:38.430Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2026-01-03T04:45:38.431Z] [BOT] ✅ Archiving complete: 1 archived, 146 active
[2026-01-03T04:45:38.434Z] [BOT] 💾 Saved posted_jobs.json: 146 active jobs
[2026-01-03T04:45:38.434Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T04:45:41.435Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-03T04:45:41.435Z] [BOT] 📍 [ROUTING] "Technical Consultant" @ brex
   Category: FINANCE (matched: "finance")
[2026-01-03T04:45:41.435Z] [BOT] Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T04:45:41.635Z] [BOT] ✅ Created forum post: 🏢 Technical Consultant @ brex in #💰・finance-jobs
[2026-01-03T04:45:41.635Z] [BOT] ✅ Industry: Technical Consultant @ brex
[2026-01-03T04:45:43.303Z] [BOT] ✅ Created forum post: 🏢 Technical Consultant @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T04:45:44.804Z] [BOT] 💾 Marked as posted: Technical Consultant @ brex (instance #1)
[2026-01-03T04:45:44.804Z] [BOT] 💾 BEFORE ARCHIVING: 147 jobs in database
✅ No jobs to archive (all 147 jobs within 7-day window)
[2026-01-03T04:45:44.807Z] [BOT] 💾 Saved posted_jobs.json: 147 active jobs
[2026-01-03T04:45:44.807Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T04:45:44.807Z] [BOT] 💾 Marked as posted: Technical Consultant @ brex (instance #1)
💾 BEFORE ARCHIVING: 148 jobs in database
[2026-01-03T04:45:44.807Z] [BOT] ✅ No jobs to archive (all 148 jobs within 7-day window)
[2026-01-03T04:45:44.809Z] [BOT] 💾 Saved posted_jobs.json: 148 active jobs
[2026-01-03T04:45:44.809Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Technical Consultant @ brex (instance #1)
💾 BEFORE ARCHIVING: 149 jobs in database
[2026-01-03T04:45:44.809Z] [BOT] ✅ No jobs to archive (all 149 jobs within 7-day window)
[2026-01-03T04:45:44.812Z] [BOT] 💾 Saved posted_jobs.json: 149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T04:45:44.812Z] [BOT] 💾 Marked as posted: Technical Consultant @ brex (instance #1)
💾 BEFORE ARCHIVING: 150 jobs in database
[2026-01-03T04:45:44.812Z] [BOT] ✅ No jobs to archive (all 150 jobs within 7-day window)
[2026-01-03T04:45:44.814Z] [BOT] 💾 Saved posted_jobs.json: 150 active jobs
[2026-01-03T04:45:44.814Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T04:45:44.815Z] [BOT] 📍 [ROUTING] "Associate Technical Consultant" @ brex
[2026-01-03T04:45:44.815Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-03T04:45:44.999Z] [BOT] ✅ Created forum post: 🏢 Associate Technical Consultant @ brex in #💰・finance-jobs
  ✅ Industry: Associate Technical Consultant @ brex
[2026-01-03T04:45:46.793Z] [BOT] ✅ Created forum post: 🏢 Associate Technical Consultant @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T04:45:48.294Z] [BOT] 💾 Marked as posted: Associate Technical Consultant @ brex (instance #1)
[2026-01-03T04:45:48.294Z] [BOT] 💾 BEFORE ARCHIVING: 151 jobs in database
✅ No jobs to archive (all 151 jobs within 7-day window)
[2026-01-03T04:45:48.296Z] [BOT] 💾 Saved posted_jobs.json: 151 active jobs
[2026-01-03T04:45:48.296Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Associate Technical Consultant @ brex (instance #1)
[2026-01-03T04:45:48.296Z] [BOT] 💾 BEFORE ARCHIVING: 152 jobs in database
[2026-01-03T04:45:48.296Z] [BOT] ✅ No jobs to archive (all 152 jobs within 7-day window)
[2026-01-03T04:45:48.299Z] [BOT] 💾 Saved posted_jobs.json: 152 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T04:45:48.299Z] [BOT] 💾 Marked as posted: Associate Technical Consultant @ brex (instance #1)
💾 BEFORE ARCHIVING: 153 jobs in database
[2026-01-03T04:45:48.299Z] [BOT] ✅ No jobs to archive (all 153 jobs within 7-day window)
[2026-01-03T04:45:48.301Z] [BOT] 💾 Saved posted_jobs.json: 153 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T04:45:51.302Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T04:45:51.303Z] [BOT] 📍 [ROUTING] "Business Partner, Global Revenue Strategy & Operations " @ reddit
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T04:45:51.303Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-03T04:45:51.523Z] [BOT] ✅ Created forum post: 🏢 Business Partner, Global Revenue Strategy & Operations  @ reddit in #🤖・ai-jobs
  ✅ Industry: Business Partner, Global Revenue Strategy & Operations  @ reddit
[2026-01-03T04:45:53.604Z] [BOT] ✅ Created forum post: 🏢 Business Partner, Global Revenue Strategy & Operations  @ reddit in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T04:45:55.104Z] [BOT] 💾 Marked as posted: Business Partner, Global Revenue Strategy & Operations  @ reddit (instance #1)
[2026-01-03T04:45:55.105Z] [BOT] 💾 BEFORE ARCHIVING: 154 jobs in database
✅ No jobs to archive (all 154 jobs within 7-day window)
[2026-01-03T04:45:55.107Z] [BOT] 💾 Saved posted_jobs.json: 154 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T04:45:58.108Z] [BOT] 📌 Posting 1 jobs to #📦・product-jobs
[2026-01-03T04:45:58.109Z] [BOT] 📍 [ROUTING] "Product Manager, Claude Code (Enterprise)" @ anthropic
[2026-01-03T04:45:58.109Z] [BOT] Category: PRODUCT (matched: "product")
   Channel: 📦・product-jobs (1391...8889)
[2026-01-03T04:45:58.317Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Claude Code (Enterprise) @ anthropic in #📦・product-jobs
  ✅ Industry: Product Manager, Claude Code (Enterprise) @ anthropic
[2026-01-03T04:46:00.174Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Claude Code (Enterprise) @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T04:46:01.674Z] [BOT] 💾 Marked as posted: Product Manager, Claude Code (Enterprise) @ anthropic (instance #1)
[2026-01-03T04:46:01.675Z] [BOT] 💾 BEFORE ARCHIVING: 155 jobs in database
✅ No jobs to archive (all 155 jobs within 7-day window)
[2026-01-03T04:46:01.677Z] [BOT] 💾 Saved posted_jobs.json: 155 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T04:46:04.677Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-01-03T04:46:04.677Z] [BOT] ⏭️  Skipping duplicate: JID_b8727a6a (posted within 7 days)
[2026-01-03T04:46:04.678Z] [BOT] ⏭️  Skipping duplicate: JID_027996fc (posted within 7 days)
⏭️  Skipping duplicate: JID_b2d91260 (posted within 7 days)
[2026-01-03T04:46:04.678Z] [BOT] ⏭️  Skipping duplicate: JID_fa49d8be (posted within 7 days)
⏭️  Skipping duplicate: JID_35c57ace (posted within 7 days)
[2026-01-03T04:46:04.778Z] [BOT] ✅ Loaded pending queue: 1094 total (1074 pending, 20 enriched, 0 posted)
[2026-01-03T04:46:04.913Z] [BOT] ✅ Saved pending queue: 1094 total (1074 pending, 15 enriched, 5 posted)
[2026-01-03T04:46:04.913Z] [BOT] 📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T04:46:04.957Z] [BOT] 📂 Loaded 1225 existing routing entries
[2026-01-03T04:46:05.001Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-01-03T04:46:05.001Z] [BOT] Total entries: 1230
   Timestamp: 2026-01-03T04:46:04.996Z
[2026-01-03T04:46:05.002Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 10
[2026-01-03T04:46:05.002Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-03T04:46:05.002Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T04:46:05.002Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 7
   Top channels:
[2026-01-03T04:46:05.002Z] [BOT] 1. #💻・remote-usa: 2 posts
     2. #💰・finance-jobs: 2 posts
     3. #🌉・san-francisco: 2 posts
     4. #📁・JID_e938df7b: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-03T04:46:05.002Z] [BOT] [STATS] Channel stats saved
[2026-01-03T04:46:07.023Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2347) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*