# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T09:25:09.002Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T09:24:50.332Z] ========================================
[2026-02-07T09:24:50.334Z] Discord Bot Execution Log
[2026-02-07T09:24:50.334Z] Environment: GitHub Actions
[2026-02-07T09:24:50.334Z] Node Version: v20.20.0
[2026-02-07T09:24:50.335Z] ========================================
[2026-02-07T09:24:50.335Z] Environment Variables Check:
[2026-02-07T09:24:50.335Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T09:24:50.335Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T09:24:50.335Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T09:24:50.335Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T09:24:50.335Z] 
Multi-Channel Configuration:
[2026-02-07T09:24:50.335Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T09:24:50.335Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:24:50.335Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:24:50.335Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T09:24:50.335Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:24:50.336Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:24:50.336Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:24:50.336Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:24:50.336Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:24:50.336Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T09:24:50.336Z] 
Data Files Check:
[2026-02-07T09:24:50.337Z] .github/data/new_jobs.json: ✅ Exists (10 items, 129460 bytes)
[2026-02-07T09:24:50.371Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7089055 bytes)
[2026-02-07T09:24:50.371Z] 
========================================
[2026-02-07T09:24:50.371Z] Starting Enhanced Discord Bot...
[2026-02-07T09:24:50.371Z] ========================================
[2026-02-07T09:24:50.928Z] [BOT] ✅ Loaded V2 database: 1560 jobs
[2026-02-07T09:24:51.617Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T09:24:51.618Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T09:24:51.618Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T09:24:51.635Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-07T09:24:51.636Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T09:24:51.637Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T09:24:51.637Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T09:24:51.637Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T09:24:51.637Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T09:24:51.649Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T09:24:51.649Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Analytics - GTM Ads at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
[2026-02-07T09:24:51.650Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
[2026-02-07T09:24:51.650Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
[2026-02-07T09:24:51.650Z] [BOT] 🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
[2026-02-07T09:24:51.650Z] [BOT] 🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
[2026-02-07T09:24:51.650Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
[2026-02-07T09:24:51.650Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
[2026-02-07T09:24:51.650Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
[2026-02-07T09:24:51.650Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
[2026-02-07T09:24:51.650Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Multi Cloud at discord
[2026-02-07T09:24:51.650Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
[2026-02-07T09:24:51.651Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Product  at brex
🚫 Skipping blacklisted job: Product Manager II - Bits Chat & Agent Interface at datadog
🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
[2026-02-07T09:24:51.651Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
[2026-02-07T09:24:51.651Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
[2026-02-07T09:24:51.651Z] [BOT] 🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-07T09:24:51.651Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
[2026-02-07T09:24:51.651Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
[2026-02-07T09:24:51.651Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Manager, Product Design at figma
[2026-02-07T09:24:51.664Z] [BOT] ✅ Loaded pending queue: 219 total (169 pending, 50 enriched, 0 posted)
[2026-02-07T09:24:51.686Z] [BOT] ✅ Saved pending queue: 173 total (169 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
[2026-02-07T09:24:51.687Z] [BOT] 📋 After blacklist filter: 2 jobs (46 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-07T09:24:51.687Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-07T09:24:51.687Z] [BOT] ⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-07T09:24:51.689Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-07T09:24:51.691Z] [BOT] 📍 [ROUTING] " People Systems Engineer, Airtable Specialist" @ airtable
   Category: AI (matched: "AI/ML")
[2026-02-07T09:24:51.691Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-07T09:24:51.708Z] [BOT ERROR] (node:2550) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T09:24:52.098Z] [BOT] ✅ Posted message:  People Systems Engineer, Airtable Specialist @ airtable in #🤖・ai-jobs
[2026-02-07T09:24:52.098Z] [BOT] ✅ Industry:  People Systems Engineer, Airtable Specialist @ airtable
[2026-02-07T09:24:52.099Z] [BOT] 💾 Added channel posting:  People Systems Engineer, Airtable Specialist @ airtable → category channel (1 total channels)
[2026-02-07T09:24:52.099Z] [BOT] 💾 BEFORE MERGE: 1561 jobs in memory (cached)
[2026-02-07T09:24:52.124Z] [BOT] ✅ Loaded V2 database: 1560 jobs
💾 DISK STATE: 1560 jobs on disk
[2026-02-07T09:24:52.125Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1561
[2026-02-07T09:24:52.128Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T09:24:52.128Z] [BOT] 💾 AFTER MERGE: 1561 jobs (merged disk + memory)
[2026-02-07T09:24:52.130Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T09:24:52.135Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T09:24:52.135Z] [BOT] ✅ Archiving complete: 10 archived, 1551 active
[2026-02-07T09:24:52.210Z] [BOT] 💾 Saved posted_jobs.json: 1551 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T09:24:54.000Z] [BOT] ✅ Posted message:  People Systems Engineer, Airtable Specialist @ airtable in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-07T09:24:54.001Z] [BOT] 💾 Added channel posting:  People Systems Engineer, Airtable Specialist @ airtable → location channel (2 total channels)
[2026-02-07T09:24:54.001Z] [BOT] 💾 BEFORE MERGE: 1551 jobs in memory (cached)
[2026-02-07T09:24:54.023Z] [BOT] ✅ Loaded V2 database: 1551 jobs
💾 DISK STATE: 1551 jobs on disk
[2026-02-07T09:24:54.024Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1551
[2026-02-07T09:24:54.027Z] [BOT] 🔀 Deep merged:  People Systems Engineer, Airtable Specialist @ airtable (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T09:24:54.027Z] [BOT] 💾 AFTER MERGE: 1551 jobs (merged disk + memory)
[2026-02-07T09:24:54.028Z] [BOT] ✅ No jobs to archive (all 1551 jobs within 7-day window)
[2026-02-07T09:24:54.092Z] [BOT] 💾 Saved posted_jobs.json: 1551 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T09:24:58.594Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-07T09:24:58.596Z] [BOT] 📍 [ROUTING] "Community Support Specialist" @ figma
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T09:24:58.884Z] [BOT] ✅ Posted message: Community Support Specialist @ figma in #💻・tech-jobs
[2026-02-07T09:24:58.884Z] [BOT] ✅ Industry: Community Support Specialist @ figma
[2026-02-07T09:24:58.884Z] [BOT] 💾 Added channel posting: Community Support Specialist @ figma → category channel (1 total channels)
[2026-02-07T09:24:58.884Z] [BOT] 💾 BEFORE MERGE: 1552 jobs in memory (cached)
[2026-02-07T09:24:58.906Z] [BOT] ✅ Loaded V2 database: 1551 jobs
💾 DISK STATE: 1551 jobs on disk
[2026-02-07T09:24:58.907Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1552
[2026-02-07T09:24:58.910Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T09:24:58.910Z] [BOT] 💾 AFTER MERGE: 1552 jobs (merged disk + memory)
[2026-02-07T09:24:58.911Z] [BOT] ✅ No jobs to archive (all 1552 jobs within 7-day window)
[2026-02-07T09:24:58.977Z] [BOT] 💾 Saved posted_jobs.json: 1552 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T09:25:00.961Z] [BOT] ✅ Posted message: Community Support Specialist @ figma in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-07T09:25:00.961Z] [BOT] 💾 Added channel posting: Community Support Specialist @ figma → location channel (2 total channels)
[2026-02-07T09:25:00.962Z] [BOT] 💾 BEFORE MERGE: 1552 jobs in memory (cached)
[2026-02-07T09:25:00.984Z] [BOT] ✅ Loaded V2 database: 1552 jobs
💾 DISK STATE: 1552 jobs on disk
[2026-02-07T09:25:00.984Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1552
[2026-02-07T09:25:00.987Z] [BOT] 🔀 Deep merged: Community Support Specialist @ figma (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T09:25:00.987Z] [BOT] 💾 AFTER MERGE: 1552 jobs (merged disk + memory)
[2026-02-07T09:25:00.988Z] [BOT] ✅ No jobs to archive (all 1552 jobs within 7-day window)
[2026-02-07T09:25:01.066Z] [BOT] 💾 Saved posted_jobs.json: 1552 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T09:25:05.565Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-07T09:25:05.567Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "1f6ee511bbfd1973"
[2026-02-07T09:25:05.567Z] [BOT] ⏭️  Skipping duplicate: JID_ba7988a5 (posted within 7 days)
[2026-02-07T09:25:05.567Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_429311a8..." not found, but found as SHA256 "08ddb222c02dbd17"
⏭️  Skipping duplicate: JID_342592d0 (posted within 7 days)
[2026-02-07T09:25:05.577Z] [BOT] ✅ Loaded pending queue: 173 total (169 pending, 4 enriched, 0 posted)
[2026-02-07T09:25:05.594Z] [BOT] ✅ Saved pending queue: 173 total (169 pending, 2 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-07T09:25:05.705Z] [BOT] 📂 Loaded 12620 existing routing entries
[2026-02-07T09:25:05.824Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 12622
[2026-02-07T09:25:05.824Z] [BOT] Timestamp: 2026-02-07T09:25:05.773Z
[2026-02-07T09:25:05.824Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T09:25:05.824Z] [BOT] Total attempts: 52
   Successful: 4
[2026-02-07T09:25:05.825Z] [BOT] Failed: 0
   Skipped: 48
[2026-02-07T09:25:05.825Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #🌉・JID_739bbc0b: 2 posts
     2. #🤖・ai-jobs: 1 posts
     3. #💻・tech-jobs: 1 posts
[2026-02-07T09:25:05.825Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T09:25:05.825Z] [BOT] 💾 BEFORE MERGE: 1552 jobs in memory (cached)
[2026-02-07T09:25:05.847Z] [BOT] ✅ Loaded V2 database: 1552 jobs
💾 DISK STATE: 1552 jobs on disk
[2026-02-07T09:25:05.848Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1552
[2026-02-07T09:25:05.851Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T09:25:05.851Z] [BOT] 💾 AFTER MERGE: 1552 jobs (merged disk + memory)
[2026-02-07T09:25:05.852Z] [BOT] ✅ No jobs to archive (all 1552 jobs within 7-day window)
[2026-02-07T09:25:05.927Z] [BOT] 💾 Saved posted_jobs.json: 1552 active jobs
[2026-02-07T09:25:05.927Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-07T09:25:07.946Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2550) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*