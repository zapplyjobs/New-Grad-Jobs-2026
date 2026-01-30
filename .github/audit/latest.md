# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T03:41:49.306Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T03:41:18.314Z] ========================================
[2026-01-30T03:41:18.316Z] Discord Bot Execution Log
[2026-01-30T03:41:18.316Z] Environment: GitHub Actions
[2026-01-30T03:41:18.316Z] Node Version: v20.20.0
[2026-01-30T03:41:18.316Z] ========================================
[2026-01-30T03:41:18.316Z] Environment Variables Check:
[2026-01-30T03:41:18.316Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T03:41:18.317Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T03:41:18.317Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T03:41:18.317Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T03:41:18.317Z] 
Multi-Channel Configuration:
[2026-01-30T03:41:18.317Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T03:41:18.317Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T03:41:18.317Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T03:41:18.317Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T03:41:18.317Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T03:41:18.317Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T03:41:18.317Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T03:41:18.318Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T03:41:18.318Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T03:41:18.318Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T03:41:18.318Z] 
Data Files Check:
[2026-01-30T03:41:18.319Z] .github/data/new_jobs.json: ✅ Exists (10 items, 181497 bytes)
[2026-01-30T03:41:18.328Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1301599 bytes)
[2026-01-30T03:41:18.328Z] 
========================================
[2026-01-30T03:41:18.328Z] Starting Enhanced Discord Bot...
[2026-01-30T03:41:18.328Z] ========================================
[2026-01-30T03:41:18.860Z] [BOT] ✅ Loaded V2 database: 219 jobs
[2026-01-30T03:41:19.161Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T03:41:19.161Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T03:41:19.161Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T03:41:19.292Z] [BOT] ✅ Loaded pending queue: 2920 total (2680 pending, 50 enriched, 190 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Content Designer, Enterprise Growth at anthropic
[2026-01-30T03:41:19.293Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T03:41:19.294Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T03:41:19.296Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T03:41:19.296Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T03:41:19.297Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-01-30T03:41:19.297Z] [BOT] 🚫 Skipping blacklisted job: Manager, Account Executive - Enterprise Sales (Industries) at anthropic
[2026-01-30T03:41:19.298Z] [BOT] 🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager, Growth Account Executive at anthropic
🚫 Skipping blacklisted job: Manager, IT Support & Operations at anthropic
🚫 Skipping blacklisted job: Manager of Associate Solutions Architecture, Applied AI  at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Industries) at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
[2026-01-30T03:41:19.298Z] [BOT] 🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Manager, Strategic Account Executive - Digital Native Sales at anthropic
[2026-01-30T03:41:19.405Z] [BOT] ✅ Loaded pending queue: 2920 total (2680 pending, 50 enriched, 190 posted)
[2026-01-30T03:41:19.578Z] [BOT] ✅ Saved pending queue: 2911 total (2680 pending, 41 enriched, 190 posted)
🗑️ Removed 9 blacklisted jobs from pending queue
[2026-01-30T03:41:19.578Z] [BOT] 📋 After blacklist filter: 39 jobs (9 blacklisted)
📋 After data quality filter: 39 jobs (0 invalid)
[2026-01-30T03:41:19.579Z] [BOT] 📋 After multi-location grouping: 39 unique jobs to post
[2026-01-30T03:41:19.579Z] [BOT] ⏸️ Limiting to 10 jobs this run, 38 deferred for next run
[2026-01-30T03:41:19.579Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T03:41:19.583Z] [BOT] 📌 Posting 3 jobs to #💰・finance-jobs
[2026-01-30T03:41:19.584Z] [BOT] 📍 [ROUTING] "Content Designer, Enterprise Growth" @ anthropic
[2026-01-30T03:41:19.584Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T03:41:19.601Z] [BOT ERROR] (node:2584) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T03:41:19.770Z] [BOT] ✅ Posted message: Content Designer, Enterprise Growth @ anthropic in #💰・finance-jobs
[2026-01-30T03:41:19.771Z] [BOT] ✅ Industry: Content Designer, Enterprise Growth @ anthropic
[2026-01-30T03:41:19.771Z] [BOT] 💾 Added channel posting: Content Designer, Enterprise Growth @ anthropic → category channel (1 total channels)
[2026-01-30T03:41:19.772Z] [BOT] 💾 BEFORE MERGE: 220 jobs in memory (cached)
[2026-01-30T03:41:19.777Z] [BOT] ✅ Loaded V2 database: 219 jobs
💾 DISK STATE: 219 jobs on disk
[2026-01-30T03:41:19.777Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=220
[2026-01-30T03:41:19.778Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T03:41:19.778Z] [BOT] 💾 AFTER MERGE: 220 jobs (merged disk + memory)
[2026-01-30T03:41:19.778Z] [BOT] ✅ No jobs to archive (all 220 jobs within 7-day window)
[2026-01-30T03:41:19.797Z] [BOT] 💾 Saved posted_jobs.json: 220 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T03:41:21.298Z] [BOT] 📍 [ROUTING] "Corporate Finance & Strategy, Planning & Reporting" @ anthropic
[2026-01-30T03:41:21.299Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T03:41:21.444Z] [BOT] ✅ Posted message: Corporate Finance & Strategy, Planning & Reporting @ anthropic in #💰・finance-jobs
[2026-01-30T03:41:21.445Z] [BOT] ✅ Industry: Corporate Finance & Strategy, Planning & Reporting @ anthropic
[2026-01-30T03:41:21.445Z] [BOT] 💾 Added channel posting: Corporate Finance & Strategy, Planning & Reporting @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 221 jobs in memory (cached)
[2026-01-30T03:41:21.450Z] [BOT] ✅ Loaded V2 database: 220 jobs
[2026-01-30T03:41:21.451Z] [BOT] 💾 DISK STATE: 220 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=221
[2026-01-30T03:41:21.451Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T03:41:21.451Z] [BOT] 💾 AFTER MERGE: 221 jobs (merged disk + memory)
[2026-01-30T03:41:21.451Z] [BOT] ✅ No jobs to archive (all 221 jobs within 7-day window)
[2026-01-30T03:41:21.466Z] [BOT] 💾 Saved posted_jobs.json: 221 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T03:41:22.967Z] [BOT] 📍 [ROUTING] "Corporate Legal Specialist" @ anthropic
   Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T03:41:23.248Z] [BOT] ✅ Posted message: Corporate Legal Specialist @ anthropic in #💰・finance-jobs
[2026-01-30T03:41:23.248Z] [BOT] ✅ Industry: Corporate Legal Specialist @ anthropic
💾 Added channel posting: Corporate Legal Specialist @ anthropic → category channel (1 total channels)
[2026-01-30T03:41:23.248Z] [BOT] 💾 BEFORE MERGE: 222 jobs in memory (cached)
[2026-01-30T03:41:23.253Z] [BOT] ✅ Loaded V2 database: 221 jobs
💾 DISK STATE: 221 jobs on disk
[2026-01-30T03:41:23.253Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=222
[2026-01-30T03:41:23.254Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 222 jobs (merged disk + memory)
[2026-01-30T03:41:23.254Z] [BOT] ✅ No jobs to archive (all 222 jobs within 7-day window)
[2026-01-30T03:41:23.269Z] [BOT] 💾 Saved posted_jobs.json: 222 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T03:41:27.771Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-30T03:41:27.771Z] [BOT] 📍 [ROUTING] "Corporate Counsel, M&A" @ anthropic
[2026-01-30T03:41:27.771Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T03:41:28.038Z] [BOT] ✅ Posted message: Corporate Counsel, M&A @ anthropic in #🤖・ai-jobs
[2026-01-30T03:41:28.038Z] [BOT] ✅ Industry: Corporate Counsel, M&A @ anthropic
💾 Added channel posting: Corporate Counsel, M&A @ anthropic → category channel (1 total channels)
[2026-01-30T03:41:28.039Z] [BOT] 💾 BEFORE MERGE: 223 jobs in memory (cached)
[2026-01-30T03:41:28.047Z] [BOT] ✅ Loaded V2 database: 222 jobs
💾 DISK STATE: 222 jobs on disk
[2026-01-30T03:41:28.047Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=223
[2026-01-30T03:41:28.048Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T03:41:28.048Z] [BOT] 💾 AFTER MERGE: 223 jobs (merged disk + memory)
[2026-01-30T03:41:28.048Z] [BOT] ✅ No jobs to archive (all 223 jobs within 7-day window)
[2026-01-30T03:41:28.068Z] [BOT] 💾 Saved posted_jobs.json: 223 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T03:41:29.570Z] [BOT] 📍 [ROUTING] "Developer Relations, MCP" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-30T03:41:29.570Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T03:41:29.956Z] [BOT] ✅ Posted message: Developer Relations, MCP @ anthropic in #🤖・ai-jobs
[2026-01-30T03:41:29.956Z] [BOT] ✅ Industry: Developer Relations, MCP @ anthropic
[2026-01-30T03:41:29.957Z] [BOT] 💾 Added channel posting: Developer Relations, MCP @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 224 jobs in memory (cached)
[2026-01-30T03:41:29.962Z] [BOT] ✅ Loaded V2 database: 223 jobs
[2026-01-30T03:41:29.962Z] [BOT] 💾 DISK STATE: 223 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=224
[2026-01-30T03:41:29.963Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T03:41:29.963Z] [BOT] 💾 AFTER MERGE: 224 jobs (merged disk + memory)
[2026-01-30T03:41:29.963Z] [BOT] ✅ No jobs to archive (all 224 jobs within 7-day window)
[2026-01-30T03:41:29.982Z] [BOT] 💾 Saved posted_jobs.json: 224 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T03:41:34.485Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-30T03:41:34.485Z] [BOT] 📍 [ROUTING] "Emerging Account Executive- Startups" @ anthropic
[2026-01-30T03:41:34.485Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T03:41:34.675Z] [BOT] ✅ Posted message: Emerging Account Executive- Startups @ anthropic in #💻・tech-jobs
[2026-01-30T03:41:34.676Z] [BOT] ✅ Industry: Emerging Account Executive- Startups @ anthropic
[2026-01-30T03:41:34.676Z] [BOT] 💾 Added channel posting: Emerging Account Executive- Startups @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 225 jobs in memory (cached)
[2026-01-30T03:41:34.681Z] [BOT] ✅ Loaded V2 database: 224 jobs
[2026-01-30T03:41:34.681Z] [BOT] 💾 DISK STATE: 224 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=225
[2026-01-30T03:41:34.682Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T03:41:34.682Z] [BOT] 💾 AFTER MERGE: 225 jobs (merged disk + memory)
[2026-01-30T03:41:34.682Z] [BOT] ✅ No jobs to archive (all 225 jobs within 7-day window)
[2026-01-30T03:41:34.700Z] [BOT] 💾 Saved posted_jobs.json: 225 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T03:41:36.201Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Digital Native Business" @ anthropic
[2026-01-30T03:41:36.202Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T03:41:36.358Z] [BOT] ✅ Posted message: Enterprise Account Executive, Digital Native Business @ anthropic in #💻・tech-jobs
[2026-01-30T03:41:36.358Z] [BOT] ✅ Industry: Enterprise Account Executive, Digital Native Business @ anthropic
[2026-01-30T03:41:36.358Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, Digital Native Business @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 226 jobs in memory (cached)
[2026-01-30T03:41:36.363Z] [BOT] ✅ Loaded V2 database: 225 jobs
[2026-01-30T03:41:36.363Z] [BOT] 💾 DISK STATE: 225 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=226
[2026-01-30T03:41:36.364Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T03:41:36.364Z] [BOT] 💾 AFTER MERGE: 226 jobs (merged disk + memory)
[2026-01-30T03:41:36.364Z] [BOT] ✅ No jobs to archive (all 226 jobs within 7-day window)
[2026-01-30T03:41:36.379Z] [BOT] 💾 Saved posted_jobs.json: 226 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T03:41:37.881Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, DOD/IC" @ anthropic
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T03:41:38.077Z] [BOT] ✅ Posted message: Enterprise Account Executive, DOD/IC @ anthropic in #💻・tech-jobs
  ✅ Industry: Enterprise Account Executive, DOD/IC @ anthropic
[2026-01-30T03:41:38.077Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, DOD/IC @ anthropic → category channel (1 total channels)
[2026-01-30T03:41:38.077Z] [BOT] 💾 BEFORE MERGE: 227 jobs in memory (cached)
[2026-01-30T03:41:38.085Z] [BOT] ✅ Loaded V2 database: 226 jobs
💾 DISK STATE: 226 jobs on disk
[2026-01-30T03:41:38.085Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=227
[2026-01-30T03:41:38.086Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 227 jobs (merged disk + memory)
[2026-01-30T03:41:38.086Z] [BOT] ✅ No jobs to archive (all 227 jobs within 7-day window)
[2026-01-30T03:41:38.105Z] [BOT] 💾 Saved posted_jobs.json: 227 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T03:41:39.606Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Federal Civilian Sales" @ anthropic
   Category: TECH (default)
[2026-01-30T03:41:39.607Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T03:41:39.801Z] [BOT] ✅ Posted message: Enterprise Account Executive, Federal Civilian Sales @ anthropic in #💻・tech-jobs
  ✅ Industry: Enterprise Account Executive, Federal Civilian Sales @ anthropic
[2026-01-30T03:41:39.801Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, Federal Civilian Sales @ anthropic → category channel (1 total channels)
[2026-01-30T03:41:39.801Z] [BOT] 💾 BEFORE MERGE: 228 jobs in memory (cached)
[2026-01-30T03:41:39.807Z] [BOT] ✅ Loaded V2 database: 227 jobs
💾 DISK STATE: 227 jobs on disk
[2026-01-30T03:41:39.808Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=228
[2026-01-30T03:41:39.808Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T03:41:39.808Z] [BOT] 💾 AFTER MERGE: 228 jobs (merged disk + memory)
[2026-01-30T03:41:39.809Z] [BOT] ✅ No jobs to archive (all 228 jobs within 7-day window)
[2026-01-30T03:41:39.825Z] [BOT] 💾 Saved posted_jobs.json: 228 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T03:41:41.326Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive, Federal Partners Sales" @ anthropic
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T03:41:41.514Z] [BOT] ✅ Posted message: Enterprise Account Executive, Federal Partners Sales @ anthropic in #💻・tech-jobs
  ✅ Industry: Enterprise Account Executive, Federal Partners Sales @ anthropic
[2026-01-30T03:41:41.514Z] [BOT] 💾 Added channel posting: Enterprise Account Executive, Federal Partners Sales @ anthropic → category channel (1 total channels)
[2026-01-30T03:41:41.514Z] [BOT] 💾 BEFORE MERGE: 229 jobs in memory (cached)
[2026-01-30T03:41:41.519Z] [BOT] ✅ Loaded V2 database: 228 jobs
💾 DISK STATE: 228 jobs on disk
[2026-01-30T03:41:41.519Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=229
[2026-01-30T03:41:41.520Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 229 jobs (merged disk + memory)
[2026-01-30T03:41:41.520Z] [BOT] ✅ No jobs to archive (all 229 jobs within 7-day window)
[2026-01-30T03:41:41.535Z] [BOT] 💾 Saved posted_jobs.json: 229 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T03:41:46.036Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T03:41:46.037Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "f3f4e08a716e5941"
⏭️  Skipping duplicate: JID_54a7760c (posted within 7 days)
[2026-01-30T03:41:46.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "eddec7bc3624b924"
⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
[2026-01-30T03:41:46.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "fdc243d2412e97e6"
⏭️  Skipping duplicate: JID_68a4047b (posted within 7 days)
[2026-01-30T03:41:46.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "3b56aea296550a21"
⏭️  Skipping duplicate: JID_98983d06 (posted within 7 days)
[2026-01-30T03:41:46.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1b389f5f142fbf5a"
⏭️  Skipping duplicate: JID_e9d8a165 (posted within 7 days)
[2026-01-30T03:41:46.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "9ca703cd44eb9639"
⏭️  Skipping duplicate: JID_90742fad (posted within 7 days)
[2026-01-30T03:41:46.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "6b1e51779733727b"
⏭️  Skipping duplicate: JID_7b5ee9ef (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "2bd83299b1930fc6"
⏭️  Skipping duplicate: JID_19d4825d (posted within 7 days)
[2026-01-30T03:41:46.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "a14617c82897de1c"
⏭️  Skipping duplicate: JID_c9c7ac06 (posted within 7 days)
[2026-01-30T03:41:46.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5b6fa6fbbc34f534"
⏭️  Skipping duplicate: JID_436eda90 (posted within 7 days)
[2026-01-30T03:41:46.154Z] [BOT] ✅ Loaded pending queue: 2911 total (2680 pending, 41 enriched, 190 posted)
[2026-01-30T03:41:46.344Z] [BOT] ✅ Saved pending queue: 2911 total (2680 pending, 31 enriched, 200 posted)
[2026-01-30T03:41:46.345Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T03:41:46.429Z] [BOT] 📂 Loaded 10281 existing routing entries
[2026-01-30T03:41:46.540Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T03:41:46.541Z] [BOT] New entries: 10
   Total entries: 10291
   Timestamp: 2026-01-30T03:41:46.495Z
[2026-01-30T03:41:46.541Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T03:41:46.541Z] [BOT] Total attempts: 21
   Successful: 10
   Failed: 0
   Skipped: 11
[2026-01-30T03:41:46.541Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T03:41:46.542Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-30T03:41:46.542Z] [BOT] 2. #💰・finance-jobs: 3 posts
     3. #🤖・ai-jobs: 2 posts
[2026-01-30T03:41:46.542Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-30T03:41:46.542Z] [BOT] 💾 BEFORE MERGE: 229 jobs in memory (cached)
[2026-01-30T03:41:46.549Z] [BOT] ✅ Loaded V2 database: 229 jobs
[2026-01-30T03:41:46.549Z] [BOT] 💾 DISK STATE: 229 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=229
[2026-01-30T03:41:46.549Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T03:41:46.550Z] [BOT] 💾 AFTER MERGE: 229 jobs (merged disk + memory)
[2026-01-30T03:41:46.550Z] [BOT] ✅ No jobs to archive (all 229 jobs within 7-day window)
[2026-01-30T03:41:46.564Z] [BOT] 💾 Saved posted_jobs.json: 229 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T03:41:46.564Z] [BOT] ✅ Database saved successfully
[2026-01-30T03:41:48.598Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2584) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*