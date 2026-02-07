# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T07:01:17.541Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T07:01:13.596Z] ========================================
[2026-02-07T07:01:13.598Z] Discord Bot Execution Log
[2026-02-07T07:01:13.598Z] Environment: GitHub Actions
[2026-02-07T07:01:13.598Z] Node Version: v20.20.0
[2026-02-07T07:01:13.598Z] ========================================
[2026-02-07T07:01:13.598Z] Environment Variables Check:
[2026-02-07T07:01:13.598Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T07:01:13.599Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T07:01:13.599Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T07:01:13.599Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T07:01:13.599Z] 
Multi-Channel Configuration:
[2026-02-07T07:01:13.599Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T07:01:13.599Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:01:13.599Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:01:13.599Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T07:01:13.599Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:01:13.599Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:01:13.599Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:01:13.599Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:01:13.599Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T07:01:13.599Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T07:01:13.600Z] 
Data Files Check:
[2026-02-07T07:01:13.601Z] .github/data/new_jobs.json: ✅ Exists (10 items, 131793 bytes)
[2026-02-07T07:01:13.638Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7476304 bytes)
[2026-02-07T07:01:13.638Z] 
========================================
[2026-02-07T07:01:13.639Z] Starting Enhanced Discord Bot...
[2026-02-07T07:01:13.639Z] ========================================
[2026-02-07T07:01:14.199Z] [BOT] ✅ Loaded V2 database: 1649 jobs
[2026-02-07T07:01:14.601Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T07:01:14.601Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T07:01:14.602Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T07:01:14.619Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T07:01:14.619Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T07:01:14.620Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T07:01:14.620Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T07:01:14.621Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T07:01:14.621Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T07:01:14.633Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T07:01:14.634Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
[2026-02-07T07:01:14.634Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
[2026-02-07T07:01:14.634Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
[2026-02-07T07:01:14.634Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
[2026-02-07T07:01:14.634Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
[2026-02-07T07:01:14.634Z] [BOT] 🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Policy Manager, Chemical Weapons and High Yield Explosives at anthropic
[2026-02-07T07:01:14.635Z] [BOT] 🚫 Skipping blacklisted job: Solutions Marketing Lead, Beneficial Deployments  at anthropic
🚫 Skipping blacklisted job: Solutions Marketing Lead, Public Sector at anthropic
🚫 Skipping blacklisted job: Senior Channel Marketing Manager, Southeast (Remote) at verkada
[2026-02-07T07:01:14.635Z] [BOT] 🚫 Skipping blacklisted job: Senior Web Producer Manager at airtable
🚫 Skipping blacklisted job: Campaign Marketing Manager, Claude Code at anthropic
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
[2026-02-07T07:01:14.635Z] [BOT] 🚫 Skipping blacklisted job: Staff Brand Designer at brex
🚫 Skipping blacklisted job: Senior Brand Designer at brex
🚫 Skipping blacklisted job: Startups Partner Manager, Y Combinator at brex
[2026-02-07T07:01:14.635Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Internal Tools at figma
🚫 Skipping blacklisted job: Engineering Manager, Inference Developer Productivity at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Targeting & Brand Safety at spotify
[2026-02-07T07:01:14.635Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
🚫 Skipping blacklisted job: Senior Marketing Events Manager, Partners at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager, Monetization at spotify
[2026-02-07T07:01:14.635Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Measurement at spotify
🚫 Skipping blacklisted job: Product Manager, Safeguards (Beneficial Deployments) at anthropic
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Senior Project Engineer, Global Services at verkada
🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
[2026-02-07T07:01:14.635Z] [BOT] 🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
[2026-02-07T07:01:14.647Z] [BOT] ✅ Loaded pending queue: 217 total (167 pending, 50 enriched, 0 posted)
[2026-02-07T07:01:14.670Z] [BOT] ✅ Saved pending queue: 169 total (167 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-07T07:01:14.670Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T07:01:14.671Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T07:01:14.671Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T07:01:14.672Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T07:01:14.672Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T07:01:14.672Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T07:01:14.672Z] [BOT] [STATS] Channel stats saved
[2026-02-07T07:01:14.672Z] [BOT] 💾 Saving posted jobs database...
[2026-02-07T07:01:14.672Z] [BOT] 💾 BEFORE MERGE: 1649 jobs in memory (cached)
[2026-02-07T07:01:14.713Z] [BOT] ✅ Loaded V2 database: 1649 jobs
💾 DISK STATE: 1649 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1649
[2026-02-07T07:01:14.716Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T07:01:14.716Z] [BOT] 💾 AFTER MERGE: 1649 jobs (merged disk + memory)
[2026-02-07T07:01:14.717Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T07:01:14.723Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T07:01:14.723Z] [BOT] ✅ Archiving complete: 10 archived, 1639 active
[2026-02-07T07:01:14.821Z] [BOT] 💾 Saved posted_jobs.json: 1639 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T07:01:14.821Z] [BOT] ✅ Database saved successfully
[2026-02-07T07:01:14.822Z] [BOT ERROR] (node:2849) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T07:01:16.840Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2849) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*