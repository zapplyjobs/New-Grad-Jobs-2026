# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T05:11:48.822Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 6
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T05:11:44.592Z] ========================================
[2026-02-06T05:11:44.594Z] Discord Bot Execution Log
[2026-02-06T05:11:44.594Z] Environment: GitHub Actions
[2026-02-06T05:11:44.594Z] Node Version: v20.20.0
[2026-02-06T05:11:44.594Z] ========================================
[2026-02-06T05:11:44.594Z] Environment Variables Check:
[2026-02-06T05:11:44.594Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T05:11:44.595Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T05:11:44.595Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T05:11:44.595Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T05:11:44.595Z] 
Multi-Channel Configuration:
[2026-02-06T05:11:44.595Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T05:11:44.595Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T05:11:44.595Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T05:11:44.595Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T05:11:44.595Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T05:11:44.595Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T05:11:44.595Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T05:11:44.595Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T05:11:44.596Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T05:11:44.596Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T05:11:44.596Z] 
Data Files Check:
[2026-02-06T05:11:44.597Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157726 bytes)
[2026-02-06T05:11:44.654Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10972044 bytes)
[2026-02-06T05:11:44.654Z] 
========================================
[2026-02-06T05:11:44.654Z] Starting Enhanced Discord Bot...
[2026-02-06T05:11:44.654Z] ========================================
[2026-02-06T05:11:45.218Z] [BOT] ✅ Loaded V2 database: 2192 jobs
[2026-02-06T05:11:45.719Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T05:11:45.720Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T05:11:45.720Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T05:11:45.734Z] [BOT] ✅ Loaded pending queue: 226 total (176 pending, 50 enriched, 0 posted)
[2026-02-06T05:11:45.734Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T05:11:45.735Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-06T05:11:45.735Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-06T05:11:45.736Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T05:11:45.736Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T05:11:45.737Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T05:11:45.738Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
⏭️ Skipping already posted: ROLE_00d35241 at anthropic
[2026-02-06T05:11:45.738Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T05:11:45.754Z] [BOT] 📬 Found 44 new jobs (6 already posted)...
[2026-02-06T05:11:45.754Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
[2026-02-06T05:11:45.754Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Security GRC Manager at discord
[2026-02-06T05:11:45.755Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
[2026-02-06T05:11:45.755Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
[2026-02-06T05:11:45.755Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
[2026-02-06T05:11:45.755Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
[2026-02-06T05:11:45.755Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
[2026-02-06T05:11:45.755Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
[2026-02-06T05:11:45.755Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-06T05:11:45.756Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
[2026-02-06T05:11:45.756Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
[2026-02-06T05:11:45.756Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
[2026-02-06T05:11:45.756Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
[2026-02-06T05:11:45.756Z] [BOT] 🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
[2026-02-06T05:11:45.756Z] [BOT] 🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Senior Product Manager, In-App Purchases at duolingo
[2026-02-06T05:11:45.756Z] [BOT] 🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager, Machine Learning at reddit
[2026-02-06T05:11:45.756Z] [BOT] 🚫 Skipping blacklisted job: Data Science Manager at reddit
[2026-02-06T05:11:45.772Z] [BOT] ✅ Loaded pending queue: 226 total (176 pending, 50 enriched, 0 posted)
[2026-02-06T05:11:45.796Z] [BOT] ✅ Saved pending queue: 182 total (176 pending, 6 enriched, 0 posted)
🗑️ Removed 44 blacklisted jobs from pending queue
[2026-02-06T05:11:45.796Z] [BOT] 📋 After blacklist filter: 0 jobs (44 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 44 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-06T05:11:45.796Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-06T05:11:45.796Z] [BOT] ℹ️ No routing entries to save
[2026-02-06T05:11:45.797Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T05:11:45.797Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-06T05:11:45.797Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-06T05:11:45.797Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T05:11:45.798Z] [BOT] 💾 BEFORE MERGE: 2192 jobs in memory (cached)
[2026-02-06T05:11:45.840Z] [BOT] ✅ Loaded V2 database: 2192 jobs
💾 DISK STATE: 2192 jobs on disk
[2026-02-06T05:11:45.840Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2192
[2026-02-06T05:11:45.845Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T05:11:45.845Z] [BOT] 💾 AFTER MERGE: 2192 jobs (merged disk + memory)
[2026-02-06T05:11:45.847Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T05:11:45.853Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T05:11:45.853Z] [BOT] ✅ Archiving complete: 10 archived, 2182 active
[2026-02-06T05:11:45.970Z] [BOT] 💾 Saved posted_jobs.json: 2182 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-06T05:11:45.971Z] [BOT] ✅ Database saved successfully
[2026-02-06T05:11:45.971Z] [BOT ERROR] (node:2645) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T05:11:47.994Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2645) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*