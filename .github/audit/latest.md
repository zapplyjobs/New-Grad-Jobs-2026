# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T16:45:12.331Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T16:44:55.036Z] ========================================
[2026-01-09T16:44:55.038Z] Discord Bot Execution Log
[2026-01-09T16:44:55.038Z] Environment: GitHub Actions
[2026-01-09T16:44:55.038Z] Node Version: v20.19.6
[2026-01-09T16:44:55.038Z] ========================================
[2026-01-09T16:44:55.038Z] Environment Variables Check:
[2026-01-09T16:44:55.038Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T16:44:55.038Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T16:44:55.038Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T16:44:55.038Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T16:44:55.038Z] 
Multi-Channel Configuration:
[2026-01-09T16:44:55.038Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T16:44:55.039Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T16:44:55.039Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T16:44:55.039Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T16:44:55.039Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T16:44:55.039Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T16:44:55.039Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T16:44:55.039Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T16:44:55.039Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T16:44:55.039Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T16:44:55.039Z] 
Data Files Check:
[2026-01-09T16:44:55.040Z] .github/data/new_jobs.json: ✅ Exists (10 items, 147213 bytes)
[2026-01-09T16:44:55.046Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 768814 bytes)
[2026-01-09T16:44:55.046Z] 
========================================
[2026-01-09T16:44:55.046Z] Starting Enhanced Discord Bot...
[2026-01-09T16:44:55.046Z] ========================================
[2026-01-09T16:44:55.591Z] [BOT] ✅ Loaded V2 database: 1496 jobs
[2026-01-09T16:44:56.292Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T16:44:56.293Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T16:44:56.293Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T16:44:56.306Z] [BOT] ✅ Loaded pending queue: 225 total (205 pending, 20 enriched, 0 posted)
[2026-01-09T16:44:56.306Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer, Universes at anthropic
[2026-01-09T16:44:56.307Z] [BOT] ⏭️  Skipping duplicate: JID_7ec53afc (posted within 7 days)
[2026-01-09T16:44:56.308Z] [BOT] ⏭️ Skipping already posted: Strategic Account Executive, Asset & Wealth Management at anthropic
[2026-01-09T16:44:56.308Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
[2026-01-09T16:44:56.308Z] [BOT] ⏭️ Skipping already posted: Manager, Workplace Operations at samsara
⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
[2026-01-09T16:44:56.308Z] [BOT] ⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T16:44:56.308Z] [BOT] ⏭️  Skipping duplicate: JID_9e59648a-level_r0113909-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ce65518c at USAA
⏭️  Skipping duplicate: JID_7fb73b9e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T16:44:56.309Z] [BOT] ⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
⏭️ Skipping already posted: Associate Data Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T16:44:56.309Z] [BOT] ⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62537 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T16:44:56.309Z] [BOT] ⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62493 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T16:44:56.309Z] [BOT] ⏭️  Skipping duplicate: JID_66109d1a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T16:44:56.309Z] [BOT] ⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
⏭️ Skipping already posted: Engineer Software 1 at Huntington Ingalls Industries
[2026-01-09T16:44:56.309Z] [BOT] ⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
[2026-01-09T16:44:56.309Z] [BOT] ⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
[2026-01-09T16:44:56.309Z] [BOT] ⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
[2026-01-09T16:44:56.310Z] [BOT] ⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T16:44:56.310Z] [BOT] ⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T16:44:56.310Z] [BOT] ⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
[2026-01-09T16:44:56.310Z] [BOT] ⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
[2026-01-09T16:44:56.310Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Amazon
📬 Found 2 new jobs (18 already posted)...
[2026-01-09T16:44:56.310Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-09T16:44:56.311Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-09T16:44:56.311Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-09T16:44:56.311Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T16:44:56.313Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-09T16:44:56.315Z] [BOT] 📍 [ROUTING] "Research Engineer, Universes" @ anthropic
[2026-01-09T16:44:56.315Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-09T16:44:56.319Z] [BOT ERROR] (node:2714) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T16:44:56.495Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Universes @ anthropic in #🤖・ai-jobs
[2026-01-09T16:44:56.495Z] [BOT] ✅ Industry: Research Engineer, Universes @ anthropic
[2026-01-09T16:44:58.490Z] [BOT] ✅ Created forum post: 🏢 Research Engineer, Universes @ anthropic in #🌉・san-francisco
[2026-01-09T16:44:58.491Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-09T16:44:59.991Z] [BOT] 💾 Marked as posted: Research Engineer, Universes @ anthropic (instance #1)
[2026-01-09T16:44:59.992Z] [BOT] 💾 BEFORE ARCHIVING: 1497 jobs in database
[2026-01-09T16:44:59.993Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T16:44:59.998Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-09T16:44:59.998Z] [BOT] ✅ Archiving complete: 6 archived, 1491 active
[2026-01-09T16:45:00.008Z] [BOT] 💾 Saved posted_jobs.json: 1491 active jobs
[2026-01-09T16:45:00.009Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T16:45:03.010Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-09T16:45:03.011Z] [BOT] 📍 [ROUTING] "Sr Enterprise Renewals Account Executive" @ samsara
[2026-01-09T16:45:03.011Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-09T16:45:03.246Z] [BOT] ✅ Created forum post: 🏢 Sr Enterprise Renewals Account Executive @ samsara in #💲・sales-jobs
  ✅ Industry: Sr Enterprise Renewals Account Executive @ samsara
[2026-01-09T16:45:04.933Z] [BOT] ✅ Created forum post: 🏢 Sr Enterprise Renewals Account Executive @ samsara in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-09T16:45:06.435Z] [BOT] 💾 Marked as posted: Sr Enterprise Renewals Account Executive @ samsara (instance #1)
[2026-01-09T16:45:06.435Z] [BOT] 💾 BEFORE ARCHIVING: 1492 jobs in database
[2026-01-09T16:45:06.436Z] [BOT] ✅ No jobs to archive (all 1492 jobs within 7-day window)
[2026-01-09T16:45:06.446Z] [BOT] 💾 Saved posted_jobs.json: 1492 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T16:45:09.448Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-09T16:45:09.448Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
[2026-01-09T16:45:09.448Z] [BOT] ⏭️  Skipping duplicate: JID_bab53bb3 (posted within 7 days)
[2026-01-09T16:45:09.458Z] [BOT] ✅ Loaded pending queue: 225 total (205 pending, 20 enriched, 0 posted)
[2026-01-09T16:45:09.478Z] [BOT] ✅ Saved pending queue: 225 total (205 pending, 18 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-01-09T16:45:09.478Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T16:45:09.531Z] [BOT] 📂 Loaded 2498 existing routing entries
[2026-01-09T16:45:09.591Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 2500
   Timestamp: 2026-01-09T16:45:09.580Z
[2026-01-09T16:45:09.592Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
[2026-01-09T16:45:09.592Z] [BOT] Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
[2026-01-09T16:45:09.592Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #🌉・san-francisco: 2 posts
     2. #🤖・ai-jobs: 1 posts
[2026-01-09T16:45:09.592Z] [BOT] 3. #💲・sales-jobs: 1 posts
[2026-01-09T16:45:09.593Z] [BOT] [STATS] Channel stats saved
[2026-01-09T16:45:11.607Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2714) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*