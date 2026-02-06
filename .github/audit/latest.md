# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T01:01:04.821Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 6
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T01:00:52.487Z] ========================================
[2026-02-06T01:00:52.489Z] Discord Bot Execution Log
[2026-02-06T01:00:52.489Z] Environment: GitHub Actions
[2026-02-06T01:00:52.489Z] Node Version: v20.20.0
[2026-02-06T01:00:52.489Z] ========================================
[2026-02-06T01:00:52.489Z] Environment Variables Check:
[2026-02-06T01:00:52.489Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T01:00:52.489Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T01:00:52.489Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T01:00:52.490Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T01:00:52.490Z] 
Multi-Channel Configuration:
[2026-02-06T01:00:52.490Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T01:00:52.490Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T01:00:52.490Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T01:00:52.490Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T01:00:52.490Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T01:00:52.490Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T01:00:52.490Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T01:00:52.490Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T01:00:52.490Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T01:00:52.490Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T01:00:52.490Z] 
Data Files Check:
[2026-02-06T01:00:52.492Z] .github/data/new_jobs.json: ✅ Exists (10 items, 148333 bytes)
[2026-02-06T01:00:52.566Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11304898 bytes)
[2026-02-06T01:00:52.566Z] 
========================================
[2026-02-06T01:00:52.566Z] Starting Enhanced Discord Bot...
[2026-02-06T01:00:52.566Z] ========================================
[2026-02-06T01:00:53.106Z] [BOT] ✅ Loaded V2 database: 2235 jobs
[2026-02-06T01:00:53.983Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T01:00:53.984Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T01:00:53.984Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T01:00:54.003Z] [BOT] ✅ Loaded pending queue: 222 total (172 pending, 50 enriched, 0 posted)
[2026-02-06T01:00:54.004Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T01:00:54.005Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-06T01:00:54.005Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-06T01:00:54.005Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T01:00:54.006Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T01:00:54.006Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T01:00:54.006Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T01:00:54.007Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T01:00:54.007Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-06T01:00:54.007Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T01:00:54.007Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
[2026-02-06T01:00:54.007Z] [BOT] ⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-06T01:00:54.008Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
[2026-02-06T01:00:54.008Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T01:00:54.019Z] [BOT] 📬 Found 44 new jobs (6 already posted)...
[2026-02-06T01:00:54.020Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Analyst at discord
[2026-02-06T01:00:54.020Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
[2026-02-06T01:00:54.020Z] [BOT] 🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
[2026-02-06T01:00:54.020Z] [BOT] 🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
[2026-02-06T01:00:54.020Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
[2026-02-06T01:00:54.020Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
[2026-02-06T01:00:54.020Z] [BOT] 🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
[2026-02-06T01:00:54.020Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
[2026-02-06T01:00:54.020Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
[2026-02-06T01:00:54.020Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
[2026-02-06T01:00:54.021Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
[2026-02-06T01:00:54.021Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-06T01:00:54.021Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
[2026-02-06T01:00:54.021Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
[2026-02-06T01:00:54.021Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
[2026-02-06T01:00:54.021Z] [BOT] 🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
[2026-02-06T01:00:54.021Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-06T01:00:54.021Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
[2026-02-06T01:00:54.021Z] [BOT] 🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
[2026-02-06T01:00:54.041Z] [BOT] ✅ Loaded pending queue: 222 total (172 pending, 50 enriched, 0 posted)
[2026-02-06T01:00:54.063Z] [BOT] ✅ Saved pending queue: 179 total (172 pending, 7 enriched, 0 posted)
🗑️ Removed 43 blacklisted jobs from pending queue
[2026-02-06T01:00:54.063Z] [BOT] 📋 After blacklist filter: 1 jobs (43 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-06T01:00:54.064Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 43 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-06T01:00:54.064Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-06T01:00:54.066Z] [BOT] 📍 [ROUTING] "Summer 2026 Intern - Software Engineer" @ Salesforce, Inc.
   Category: AI (matched: "artificial intelligence")
[2026-02-06T01:00:54.066Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-06T01:00:54.082Z] [BOT ERROR] (node:2531) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T01:00:54.451Z] [BOT] ✅ Posted message: Summer 2026 Intern - Software Engineer @ Salesforce, Inc. in #🤖・ai-jobs
[2026-02-06T01:00:54.451Z] [BOT] ✅ Industry: Summer 2026 Intern - Software Engineer @ Salesforce, Inc.
[2026-02-06T01:00:54.453Z] [BOT] 💾 Added channel posting: Summer 2026 Intern - Software Engineer @ Salesforce, Inc. → category channel (1 total channels)
[2026-02-06T01:00:54.453Z] [BOT] 💾 BEFORE MERGE: 2236 jobs in memory (cached)
[2026-02-06T01:00:54.514Z] [BOT] ✅ Loaded V2 database: 2235 jobs
💾 DISK STATE: 2235 jobs on disk
[2026-02-06T01:00:54.514Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2236
[2026-02-06T01:00:54.519Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T01:00:54.520Z] [BOT] 💾 AFTER MERGE: 2236 jobs (merged disk + memory)
[2026-02-06T01:00:54.522Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T01:00:54.526Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T01:00:54.526Z] [BOT] ✅ Archiving complete: 10 archived, 2226 active
[2026-02-06T01:00:54.656Z] [BOT] 💾 Saved posted_jobs.json: 2226 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T01:00:56.413Z] [BOT] ✅ Posted message: Summer 2026 Intern - Software Engineer @ Salesforce, Inc. in #🗽・JID_98d4f0de
[2026-02-06T01:00:56.413Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-06T01:00:56.413Z] [BOT] 💾 Added channel posting: Summer 2026 Intern - Software Engineer @ Salesforce, Inc. → location channel (2 total channels)
[2026-02-06T01:00:56.414Z] [BOT] 💾 BEFORE MERGE: 2226 jobs in memory (cached)
[2026-02-06T01:00:56.467Z] [BOT] ✅ Loaded V2 database: 2226 jobs
💾 DISK STATE: 2226 jobs on disk
[2026-02-06T01:00:56.467Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2226
[2026-02-06T01:00:56.472Z] [BOT] 🔀 Deep merged: Summer 2026 Intern - Software Engineer @ Salesforce, Inc. (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-06T01:00:56.472Z] [BOT] 💾 AFTER MERGE: 2226 jobs (merged disk + memory)
[2026-02-06T01:00:56.474Z] [BOT] ✅ No jobs to archive (all 2226 jobs within 7-day window)
[2026-02-06T01:00:56.597Z] [BOT] 💾 Saved posted_jobs.json: 2226 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T01:01:01.099Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-06T01:01:01.100Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_63d3da77-..." not found, but found as SHA256 "ddabf5324d358ccd"
⏭️  Skipping duplicate: JID_9e49d5fe (posted within 7 days)
[2026-02-06T01:01:01.115Z] [BOT] ✅ Loaded pending queue: 179 total (172 pending, 7 enriched, 0 posted)
[2026-02-06T01:01:01.137Z] [BOT] ✅ Saved pending queue: 179 total (172 pending, 6 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-06T01:01:01.243Z] [BOT] 📂 Loaded 12486 existing routing entries
[2026-02-06T01:01:01.382Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12487
   Timestamp: 2026-02-06T01:01:01.335Z
[2026-02-06T01:01:01.382Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
   Total attempts: 51
[2026-02-06T01:01:01.382Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 49
[2026-02-06T01:01:01.382Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🗽・JID_98d4f0de: 1 posts
[2026-02-06T01:01:01.383Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T01:01:01.383Z] [BOT] 💾 BEFORE MERGE: 2226 jobs in memory (cached)
[2026-02-06T01:01:01.452Z] [BOT] ✅ Loaded V2 database: 2226 jobs
💾 DISK STATE: 2226 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2226
[2026-02-06T01:01:01.463Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T01:01:01.463Z] [BOT] 💾 AFTER MERGE: 2226 jobs (merged disk + memory)
[2026-02-06T01:01:01.465Z] [BOT] ✅ No jobs to archive (all 2226 jobs within 7-day window)
[2026-02-06T01:01:01.591Z] [BOT] 💾 Saved posted_jobs.json: 2226 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T01:01:01.591Z] [BOT] ✅ Database saved successfully
[2026-02-06T01:01:03.609Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2531) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*