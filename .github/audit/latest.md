# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T11:53:53.367Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T11:53:35.284Z] ========================================
[2026-02-06T11:53:35.286Z] Discord Bot Execution Log
[2026-02-06T11:53:35.286Z] Environment: GitHub Actions
[2026-02-06T11:53:35.287Z] Node Version: v20.20.0
[2026-02-06T11:53:35.287Z] ========================================
[2026-02-06T11:53:35.287Z] Environment Variables Check:
[2026-02-06T11:53:35.287Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T11:53:35.287Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T11:53:35.287Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T11:53:35.287Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T11:53:35.287Z] 
Multi-Channel Configuration:
[2026-02-06T11:53:35.287Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T11:53:35.287Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:53:35.287Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:53:35.288Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T11:53:35.288Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:53:35.288Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:53:35.288Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:53:35.288Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:53:35.288Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T11:53:35.288Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T11:53:35.288Z] 
Data Files Check:
[2026-02-06T11:53:35.289Z] .github/data/new_jobs.json: ✅ Exists (10 items, 140626 bytes)
[2026-02-06T11:53:35.344Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9920805 bytes)
[2026-02-06T11:53:35.345Z] 
========================================
[2026-02-06T11:53:35.345Z] Starting Enhanced Discord Bot...
[2026-02-06T11:53:35.345Z] ========================================
[2026-02-06T11:53:35.917Z] [BOT] ✅ Loaded V2 database: 2047 jobs
[2026-02-06T11:53:36.455Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-06T11:53:36.455Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T11:53:36.455Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T11:53:36.469Z] [BOT] ✅ Loaded pending queue: 228 total (178 pending, 50 enriched, 0 posted)
[2026-02-06T11:53:36.470Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Key Accounts Executive at datadog
[2026-02-06T11:53:36.471Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T11:53:36.471Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-06T11:53:36.471Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T11:53:36.472Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T11:53:36.472Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T11:53:36.473Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T11:53:36.489Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-06T11:53:36.489Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
[2026-02-06T11:53:36.489Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
[2026-02-06T11:53:36.490Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-06T11:53:36.490Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
[2026-02-06T11:53:36.490Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
[2026-02-06T11:53:36.490Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
[2026-02-06T11:53:36.490Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
[2026-02-06T11:53:36.490Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
[2026-02-06T11:53:36.490Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
[2026-02-06T11:53:36.491Z] [BOT] 🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
🚫 Skipping blacklisted job: Data Science Manager at reddit
[2026-02-06T11:53:36.491Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
[2026-02-06T11:53:36.491Z] [BOT] 🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
[2026-02-06T11:53:36.491Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
[2026-02-06T11:53:36.491Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
[2026-02-06T11:53:36.507Z] [BOT] ✅ Loaded pending queue: 228 total (178 pending, 50 enriched, 0 posted)
[2026-02-06T11:53:36.530Z] [BOT] ✅ Saved pending queue: 184 total (178 pending, 6 enriched, 0 posted)
[2026-02-06T11:53:36.530Z] [BOT] 🗑️ Removed 44 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (44 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-06T11:53:36.531Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-06T11:53:36.531Z] [BOT] ⏸️ Limiting to 10 jobs this run, 44 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T11:53:36.533Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-06T11:53:36.534Z] [BOT] 📍 [ROUTING] "Software Engineer Intern" @ ORG_fd996658 IVS Inc
[2026-02-06T11:53:36.534Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-06T11:53:36.551Z] [BOT ERROR] (node:2773) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T11:53:36.844Z] [BOT] ✅ Posted message: Software Engineer Intern @ ORG_fd996658 IVS Inc in #💻・tech-jobs
[2026-02-06T11:53:36.844Z] [BOT] ✅ Industry: Software Engineer Intern @ ORG_fd996658 IVS Inc
[2026-02-06T11:53:36.846Z] [BOT] 💾 Added channel posting: Software Engineer Intern @ ORG_fd996658 IVS Inc → category channel (1 total channels)
[2026-02-06T11:53:36.846Z] [BOT] 💾 BEFORE MERGE: 2048 jobs in memory (cached)
[2026-02-06T11:53:36.885Z] [BOT] ✅ Loaded V2 database: 2047 jobs
💾 DISK STATE: 2047 jobs on disk
[2026-02-06T11:53:36.886Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2048
[2026-02-06T11:53:36.890Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T11:53:36.890Z] [BOT] 💾 AFTER MERGE: 2048 jobs (merged disk + memory)
[2026-02-06T11:53:36.892Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T11:53:36.897Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T11:53:36.898Z] [BOT] ✅ Archiving complete: 10 archived, 2038 active
[2026-02-06T11:53:37.008Z] [BOT] 💾 Saved posted_jobs.json: 2038 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:53:38.728Z] [BOT] ✅ Posted message: Software Engineer Intern @ ORG_fd996658 IVS Inc in #📍・JID_6daed763
[2026-02-06T11:53:38.728Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-06T11:53:38.729Z] [BOT] 💾 Added channel posting: Software Engineer Intern @ ORG_fd996658 IVS Inc → location channel (2 total channels)
[2026-02-06T11:53:38.729Z] [BOT] 💾 BEFORE MERGE: 2038 jobs in memory (cached)
[2026-02-06T11:53:38.769Z] [BOT] ✅ Loaded V2 database: 2038 jobs
💾 DISK STATE: 2038 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2038
[2026-02-06T11:53:38.776Z] [BOT] 🔀 Deep merged: Software Engineer Intern @ ORG_fd996658 IVS Inc (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T11:53:38.776Z] [BOT] 💾 AFTER MERGE: 2038 jobs (merged disk + memory)
[2026-02-06T11:53:38.777Z] [BOT] ✅ No jobs to archive (all 2038 jobs within 7-day window)
[2026-02-06T11:53:38.882Z] [BOT] 💾 Saved posted_jobs.json: 2038 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:53:43.382Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-06T11:53:43.384Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-06T11:53:43.572Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #💰・finance-jobs
  ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-02-06T11:53:43.573Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
[2026-02-06T11:53:43.573Z] [BOT] 💾 BEFORE MERGE: 2039 jobs in memory (cached)
[2026-02-06T11:53:43.605Z] [BOT] ✅ Loaded V2 database: 2038 jobs
💾 DISK STATE: 2038 jobs on disk
[2026-02-06T11:53:43.606Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2039
[2026-02-06T11:53:43.610Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T11:53:43.610Z] [BOT] 💾 AFTER MERGE: 2039 jobs (merged disk + memory)
[2026-02-06T11:53:43.612Z] [BOT] ✅ No jobs to archive (all 2039 jobs within 7-day window)
[2026-02-06T11:53:43.722Z] [BOT] 💾 Saved posted_jobs.json: 2039 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:53:45.596Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-06T11:53:45.596Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → location channel (2 total channels)
[2026-02-06T11:53:45.597Z] [BOT] 💾 BEFORE MERGE: 2039 jobs in memory (cached)
[2026-02-06T11:53:45.630Z] [BOT] ✅ Loaded V2 database: 2039 jobs
💾 DISK STATE: 2039 jobs on disk
[2026-02-06T11:53:45.631Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2039
[2026-02-06T11:53:45.635Z] [BOT] 🔀 Deep merged: Account Executive, Territory (Mid-Market) @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T11:53:45.635Z] [BOT] 💾 AFTER MERGE: 2039 jobs (merged disk + memory)
[2026-02-06T11:53:45.636Z] [BOT] ✅ No jobs to archive (all 2039 jobs within 7-day window)
[2026-02-06T11:53:45.746Z] [BOT] 💾 Saved posted_jobs.json: 2039 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T11:53:50.247Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-06T11:53:50.249Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_422a0689-..." not found, but found as SHA256 "e37cc2ce81869c6c"
[2026-02-06T11:53:50.249Z] [BOT] ⏭️  Skipping duplicate: JID_8c0b5deb (posted within 7 days)
[2026-02-06T11:53:50.249Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "710f958fe13dd501"
[2026-02-06T11:53:50.250Z] [BOT] ⏭️  Skipping duplicate: JID_26eca0ce (posted within 7 days)
[2026-02-06T11:53:50.259Z] [BOT] ✅ Loaded pending queue: 184 total (178 pending, 6 enriched, 0 posted)
[2026-02-06T11:53:50.277Z] [BOT] ✅ Saved pending queue: 184 total (178 pending, 4 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T11:53:50.389Z] [BOT] 📂 Loaded 12528 existing routing entries
[2026-02-06T11:53:50.510Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-02-06T11:53:50.510Z] [BOT] Total entries: 12530
   Timestamp: 2026-02-06T11:53:50.457Z
[2026-02-06T11:53:50.510Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T11:53:50.510Z] [BOT] Total attempts: 52
   Successful: 4
   Failed: 0
   Skipped: 48
[2026-02-06T11:53:50.511Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
[2026-02-06T11:53:50.511Z] [BOT] Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #📍・JID_6daed763: 1 posts
     3. #💰・finance-jobs: 1 posts
[2026-02-06T11:53:50.511Z] [BOT] 4. #🗽・JID_98d4f0de: 1 posts
[2026-02-06T11:53:50.511Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T11:53:50.511Z] [BOT] 💾 BEFORE MERGE: 2039 jobs in memory (cached)
[2026-02-06T11:53:50.563Z] [BOT] ✅ Loaded V2 database: 2039 jobs
💾 DISK STATE: 2039 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2039
[2026-02-06T11:53:50.566Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T11:53:50.566Z] [BOT] 💾 AFTER MERGE: 2039 jobs (merged disk + memory)
[2026-02-06T11:53:50.568Z] [BOT] ✅ No jobs to archive (all 2039 jobs within 7-day window)
[2026-02-06T11:53:50.685Z] [BOT] 💾 Saved posted_jobs.json: 2039 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-06T11:53:52.704Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2773) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*