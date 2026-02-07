# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T05:05:11.788Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T05:05:07.613Z] ========================================
[2026-02-07T05:05:07.614Z] Discord Bot Execution Log
[2026-02-07T05:05:07.615Z] Environment: GitHub Actions
[2026-02-07T05:05:07.615Z] Node Version: v20.20.0
[2026-02-07T05:05:07.615Z] ========================================
[2026-02-07T05:05:07.615Z] Environment Variables Check:
[2026-02-07T05:05:07.615Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T05:05:07.615Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T05:05:07.615Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T05:05:07.615Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T05:05:07.615Z] 
Multi-Channel Configuration:
[2026-02-07T05:05:07.615Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T05:05:07.615Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:05:07.615Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:05:07.615Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T05:05:07.615Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:05:07.616Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:05:07.616Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:05:07.616Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:05:07.616Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T05:05:07.616Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T05:05:07.616Z] 
Data Files Check:
[2026-02-07T05:05:07.617Z] .github/data/new_jobs.json: ✅ Exists (10 items, 131787 bytes)
[2026-02-07T05:05:07.664Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7746542 bytes)
[2026-02-07T05:05:07.664Z] 
========================================
[2026-02-07T05:05:07.664Z] Starting Enhanced Discord Bot...
[2026-02-07T05:05:07.664Z] ========================================
[2026-02-07T05:05:08.177Z] [BOT] ✅ Loaded V2 database: 1698 jobs
[2026-02-07T05:05:08.730Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T05:05:08.730Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T05:05:08.731Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T05:05:08.755Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T05:05:08.755Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T05:05:08.756Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T05:05:08.756Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-07T05:05:08.756Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T05:05:08.757Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T05:05:08.757Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T05:05:08.767Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T05:05:08.768Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
[2026-02-07T05:05:08.768Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
[2026-02-07T05:05:08.768Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
[2026-02-07T05:05:08.768Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-07T05:05:08.768Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
[2026-02-07T05:05:08.768Z] [BOT] 🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Communications Manager, Enterprise  at anthropic
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
[2026-02-07T05:05:08.768Z] [BOT] 🚫 Skipping blacklisted job: Client Account Manager, Mid-Market (Agency Acquisitions) at reddit
🚫 Skipping blacklisted job: Senior Product Manager - Product Analytics at datadog
🚫 Skipping blacklisted job: Senior Manager, Ads, Revenue & Commerce Policy at discord
🚫 Skipping blacklisted job: Program Manager, Real Estate & Facilities  at figma
🚫 Skipping blacklisted job: Global Partner Sales Manager - Systems Integrators at anthropic
🚫 Skipping blacklisted job: Engineering Manager, UI Platform at anthropic
[2026-02-07T05:05:08.768Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Manager, Banking Specialists at brex
🚫 Skipping blacklisted job: Technical Program Manager, Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior Product Manager - Custom Metrics at datadog
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-02-07T05:05:08.769Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
[2026-02-07T05:05:08.769Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-07T05:05:08.769Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
[2026-02-07T05:05:08.786Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T05:05:08.808Z] [BOT] ✅ Saved pending queue: 170 total (168 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-07T05:05:08.808Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T05:05:08.809Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T05:05:08.809Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T05:05:08.809Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T05:05:08.809Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T05:05:08.810Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T05:05:08.810Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T05:05:08.810Z] [BOT] 💾 BEFORE MERGE: 1698 jobs in memory (cached)
[2026-02-07T05:05:08.861Z] [BOT] ✅ Loaded V2 database: 1698 jobs
💾 DISK STATE: 1698 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1698
[2026-02-07T05:05:08.866Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1698 jobs (merged disk + memory)
[2026-02-07T05:05:08.868Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T05:05:08.872Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 1688 active
[2026-02-07T05:05:08.973Z] [BOT] 💾 Saved posted_jobs.json: 1688 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T05:05:08.973Z] [BOT] ✅ Database saved successfully
[2026-02-07T05:05:08.973Z] [BOT ERROR] (node:2554) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T05:05:10.987Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2554) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*