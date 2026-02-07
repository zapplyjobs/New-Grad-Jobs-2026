# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T09:39:36.112Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T09:39:31.544Z] ========================================
[2026-02-07T09:39:31.546Z] Discord Bot Execution Log
[2026-02-07T09:39:31.546Z] Environment: GitHub Actions
[2026-02-07T09:39:31.546Z] Node Version: v20.20.0
[2026-02-07T09:39:31.547Z] ========================================
[2026-02-07T09:39:31.547Z] Environment Variables Check:
[2026-02-07T09:39:31.547Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T09:39:31.547Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T09:39:31.547Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T09:39:31.547Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T09:39:31.547Z] 
Multi-Channel Configuration:
[2026-02-07T09:39:31.547Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T09:39:31.547Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:39:31.547Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:39:31.548Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T09:39:31.548Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:39:31.548Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:39:31.548Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:39:31.548Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:39:31.548Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T09:39:31.548Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T09:39:31.548Z] 
Data Files Check:
[2026-02-07T09:39:31.549Z] .github/data/new_jobs.json: ✅ Exists (10 items, 154798 bytes)
[2026-02-07T09:39:31.582Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7063612 bytes)
[2026-02-07T09:39:31.582Z] 
========================================
[2026-02-07T09:39:31.582Z] Starting Enhanced Discord Bot...
[2026-02-07T09:39:31.582Z] ========================================
[2026-02-07T09:39:32.132Z] [BOT] ✅ Loaded V2 database: 1552 jobs
[2026-02-07T09:39:32.747Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T09:39:32.747Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T09:39:32.748Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T09:39:32.761Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-07T09:39:32.761Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T09:39:32.762Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T09:39:32.763Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T09:39:32.763Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T09:39:32.763Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T09:39:32.778Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T09:39:32.778Z] [BOT] 🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
[2026-02-07T09:39:32.778Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
[2026-02-07T09:39:32.778Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
[2026-02-07T09:39:32.779Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-02-07T09:39:32.779Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
[2026-02-07T09:39:32.779Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
[2026-02-07T09:39:32.779Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
[2026-02-07T09:39:32.779Z] [BOT] 🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-07T09:39:32.779Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
[2026-02-07T09:39:32.779Z] [BOT] 🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
[2026-02-07T09:39:32.779Z] [BOT] 🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Policy Communications Manager at anthropic
[2026-02-07T09:39:32.780Z] [BOT] 🚫 Skipping blacklisted job: Copy of Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
[2026-02-07T09:39:32.780Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Enterprise Customer Success at brex
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: TPM Manager, Compute & Infrastructure at anthropic
[2026-02-07T09:39:32.780Z] [BOT] 🚫 Skipping blacklisted job: Manager II, Engineering - AI Platform Training, Serving and Storage (NorAm) at datadog
🚫 Skipping blacklisted job: Senior Product Manager - AAA/Telemetry Optimization at datadog
🚫 Skipping blacklisted job: Senior Hardware Systems Engineer at samsara
[2026-02-07T09:39:32.780Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Compliance Specialist (DoD) at cloudflare
🚫 Skipping blacklisted job: Marketing Events Content Manager at anthropic
[2026-02-07T09:39:32.780Z] [BOT] 🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Manager, Product Design - Engagement at discord
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
[2026-02-07T09:39:32.780Z] [BOT] 🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
🚫 Skipping blacklisted job: Director, Sales - Figma Weave (New York, United States) at figma
🚫 Skipping blacklisted job: Technical Program Manager, Marketing Technology at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Reliability Engineering at anthropic
[2026-02-07T09:39:32.780Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager  at supabase
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
[2026-02-07T09:39:32.792Z] [BOT] ✅ Loaded pending queue: 216 total (166 pending, 50 enriched, 0 posted)
[2026-02-07T09:39:32.814Z] [BOT] ✅ Saved pending queue: 168 total (166 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-07T09:39:32.814Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T09:39:32.815Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T09:39:32.815Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T09:39:32.815Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
   Total attempts: 50
[2026-02-07T09:39:32.816Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T09:39:32.816Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[STATS] Channel stats saved
[2026-02-07T09:39:32.816Z] [BOT] 💾 Saving posted jobs database...
[2026-02-07T09:39:32.816Z] [BOT] 💾 BEFORE MERGE: 1552 jobs in memory (cached)
[2026-02-07T09:39:32.843Z] [BOT] ✅ Loaded V2 database: 1552 jobs
💾 DISK STATE: 1552 jobs on disk
[2026-02-07T09:39:32.843Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1552
[2026-02-07T09:39:32.847Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T09:39:32.847Z] [BOT] 💾 AFTER MERGE: 1552 jobs (merged disk + memory)
[2026-02-07T09:39:32.848Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T09:39:32.854Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T09:39:32.854Z] [BOT] ✅ Archiving complete: 10 archived, 1542 active
[2026-02-07T09:39:32.939Z] [BOT] 💾 Saved posted_jobs.json: 1542 active jobs
[2026-02-07T09:39:32.939Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-07T09:39:32.939Z] [BOT] ✅ Database saved successfully
[2026-02-07T09:39:32.940Z] [BOT ERROR] (node:2604) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T09:39:34.959Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2604) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*