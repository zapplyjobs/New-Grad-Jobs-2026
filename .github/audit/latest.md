# Discord Bot Execution Audit
**Timestamp:** 2026-02-06T10:42:10.898Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-06T10:42:05.555Z] ========================================
[2026-02-06T10:42:05.557Z] Discord Bot Execution Log
[2026-02-06T10:42:05.557Z] Environment: GitHub Actions
[2026-02-06T10:42:05.557Z] Node Version: v20.20.0
[2026-02-06T10:42:05.557Z] ========================================
[2026-02-06T10:42:05.557Z] Environment Variables Check:
[2026-02-06T10:42:05.558Z] DISCORD_TOKEN: ✅ Set
[2026-02-06T10:42:05.558Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-06T10:42:05.558Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-06T10:42:05.558Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-06T10:42:05.558Z] 
Multi-Channel Configuration:
[2026-02-06T10:42:05.558Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-06T10:42:05.558Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-06T10:42:05.558Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-06T10:42:05.558Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-06T10:42:05.558Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-06T10:42:05.558Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-06T10:42:05.559Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-06T10:42:05.559Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-06T10:42:05.559Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-06T10:42:05.559Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-06T10:42:05.559Z] 
Data Files Check:
[2026-02-06T10:42:05.560Z] .github/data/new_jobs.json: ✅ Exists (10 items, 174011 bytes)
[2026-02-06T10:42:05.615Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10102876 bytes)
[2026-02-06T10:42:05.615Z] 
========================================
[2026-02-06T10:42:05.615Z] Starting Enhanced Discord Bot...
[2026-02-06T10:42:05.615Z] ========================================
[2026-02-06T10:42:06.172Z] [BOT] ✅ Loaded V2 database: 2069 jobs
[2026-02-06T10:42:07.935Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-06T10:42:07.936Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-06T10:42:07.936Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-06T10:42:07.950Z] [BOT] ✅ Loaded pending queue: 226 total (176 pending, 50 enriched, 0 posted)
[2026-02-06T10:42:07.950Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Key Accounts Executive at datadog
[2026-02-06T10:42:07.951Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-06T10:42:07.951Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-06T10:42:07.952Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-06T10:42:07.952Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-06T10:42:07.953Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-06T10:42:07.953Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
⏭️ Skipping already posted:  Enterprise Sales Executive (SLED) at datadog
[2026-02-06T10:42:07.969Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-06T10:42:07.970Z] [BOT] 🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
[2026-02-06T10:42:07.970Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
[2026-02-06T10:42:07.970Z] [BOT] 🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
[2026-02-06T10:42:07.970Z] [BOT] 🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-06T10:42:07.970Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
[2026-02-06T10:42:07.970Z] [BOT] 🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
[2026-02-06T10:42:07.971Z] [BOT] 🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Director, Finance Strategic Initiatives at anthropic
[2026-02-06T10:42:07.971Z] [BOT] 🚫 Skipping blacklisted job: Director of Strategic Finance, Product at vercel
🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Senior Partner Solutions Engineer at vercel
[2026-02-06T10:42:07.971Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
[2026-02-06T10:42:07.971Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Site Defense at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Segment Marketing Manager, Commercial at anthropic
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
[2026-02-06T10:42:07.971Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Endpoint Administrator - Enterprise IT Operations at datadog
[2026-02-06T10:42:07.971Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Engineering - Alerting Platform at datadog
🚫 Skipping blacklisted job: Director, Channels - Global Systems Integrators at datadog
[2026-02-06T10:42:07.971Z] [BOT] 🚫 Skipping blacklisted job: Talent Relations Manager - The Ringer at spotify
🚫 Skipping blacklisted job: Communications Manager at verkada
[2026-02-06T10:42:07.971Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Midwest at verkada
[2026-02-06T10:42:07.972Z] [BOT] 🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market, Austin at verkada
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Northeast (Remote) at verkada
[2026-02-06T10:42:07.972Z] [BOT] 🚫 Skipping blacklisted job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
🚫 Skipping blacklisted job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-02-06T10:42:07.972Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T10:42:07.972Z] [BOT] 🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
[2026-02-06T10:42:07.987Z] [BOT] ✅ Loaded pending queue: 226 total (176 pending, 50 enriched, 0 posted)
[2026-02-06T10:42:08.008Z] [BOT] ✅ Saved pending queue: 180 total (176 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
[2026-02-06T10:42:08.008Z] [BOT] 📋 After blacklist filter: 0 jobs (46 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-06T10:42:08.009Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-02-06T10:42:08.009Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a66b2f6c.jsonl
[2026-02-06T10:42:08.009Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-06T10:42:08.009Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2026-02-06T10:42:08.009Z] [BOT] Channels used: 0
[2026-02-06T10:42:08.009Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-06T10:42:08.010Z] [BOT] 💾 BEFORE MERGE: 2069 jobs in memory (cached)
[2026-02-06T10:42:08.049Z] [BOT] ✅ Loaded V2 database: 2069 jobs
💾 DISK STATE: 2069 jobs on disk
[2026-02-06T10:42:08.049Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2069
[2026-02-06T10:42:08.054Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-06T10:42:08.054Z] [BOT] 💾 AFTER MERGE: 2069 jobs (merged disk + memory)
[2026-02-06T10:42:08.055Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-06T10:42:08.061Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-06T10:42:08.061Z] [BOT] ✅ Archiving complete: 10 archived, 2059 active
[2026-02-06T10:42:08.173Z] [BOT] 💾 Saved posted_jobs.json: 2059 active jobs
[2026-02-06T10:42:08.173Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-06T10:42:08.174Z] [BOT] ✅ Database saved successfully
[2026-02-06T10:42:08.174Z] [BOT ERROR] (node:2718) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-06T10:42:10.197Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2718) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*