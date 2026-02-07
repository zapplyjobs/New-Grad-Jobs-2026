# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T14:10:48.888Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T14:10:44.103Z] ========================================
[2026-02-07T14:10:44.105Z] Discord Bot Execution Log
[2026-02-07T14:10:44.105Z] Environment: GitHub Actions
[2026-02-07T14:10:44.105Z] Node Version: v20.20.0
[2026-02-07T14:10:44.105Z] ========================================
[2026-02-07T14:10:44.105Z] Environment Variables Check:
[2026-02-07T14:10:44.105Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T14:10:44.105Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T14:10:44.105Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T14:10:44.105Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T14:10:44.105Z] 
Multi-Channel Configuration:
[2026-02-07T14:10:44.106Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T14:10:44.106Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:10:44.106Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:10:44.106Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T14:10:44.106Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:10:44.106Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:10:44.106Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:10:44.106Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:10:44.106Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T14:10:44.106Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T14:10:44.106Z] 
Data Files Check:
[2026-02-07T14:10:44.107Z] .github/data/new_jobs.json: ✅ Exists (10 items, 131787 bytes)
[2026-02-07T14:10:44.138Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6159041 bytes)
[2026-02-07T14:10:44.138Z] 
========================================
[2026-02-07T14:10:44.138Z] Starting Enhanced Discord Bot...
[2026-02-07T14:10:44.138Z] ========================================
[2026-02-07T14:10:44.687Z] [BOT] ✅ Loaded V2 database: 1397 jobs
[2026-02-07T14:10:45.373Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-07T14:10:45.374Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T14:10:45.374Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T14:10:45.402Z] [BOT] ✅ Loaded pending queue: 407 total (357 pending, 50 enriched, 0 posted)
[2026-02-07T14:10:45.402Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T14:10:45.403Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T14:10:45.403Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T14:10:45.403Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T14:10:45.404Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T14:10:45.415Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T14:10:45.416Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
[2026-02-07T14:10:45.416Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
[2026-02-07T14:10:45.416Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
[2026-02-07T14:10:45.416Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
[2026-02-07T14:10:45.416Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
[2026-02-07T14:10:45.416Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
[2026-02-07T14:10:45.416Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
[2026-02-07T14:10:45.416Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-07T14:10:45.417Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
[2026-02-07T14:10:45.417Z] [BOT] 🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
[2026-02-07T14:10:45.417Z] [BOT] 🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Senior Software Engineer, Multi Cloud at discord
[2026-02-07T14:10:45.417Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Software Engineer, Product  at brex
🚫 Skipping blacklisted job: Product Manager II - Bits Chat & Agent Interface at datadog
[2026-02-07T14:10:45.417Z] [BOT] 🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
[2026-02-07T14:10:45.417Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
[2026-02-07T14:10:45.417Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
[2026-02-07T14:10:45.417Z] [BOT] 🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-07T14:10:45.418Z] [BOT] 🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Sr. Tradeshow and Event Marketing Manager at verkada
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
[2026-02-07T14:10:45.418Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
[2026-02-07T14:10:45.418Z] [BOT] 🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Director, Enterprise Sales (SLED West) at datadog
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
[2026-02-07T14:10:45.463Z] [BOT] ✅ Loaded pending queue: 407 total (357 pending, 50 enriched, 0 posted)
[2026-02-07T14:10:45.497Z] [BOT] ✅ Saved pending queue: 359 total (357 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-07T14:10:45.497Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T14:10:45.498Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T14:10:45.498Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T14:10:45.498Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T14:10:45.499Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T14:10:45.499Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-07T14:10:45.499Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-07T14:10:45.499Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T14:10:45.499Z] [BOT] 💾 BEFORE MERGE: 1397 jobs in memory (cached)
[2026-02-07T14:10:45.523Z] [BOT] ✅ Loaded V2 database: 1397 jobs
💾 DISK STATE: 1397 jobs on disk
[2026-02-07T14:10:45.523Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1397
[2026-02-07T14:10:45.527Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T14:10:45.527Z] [BOT] 💾 AFTER MERGE: 1397 jobs (merged disk + memory)
[2026-02-07T14:10:45.528Z] [BOT] ✅ No jobs to archive (all 1397 jobs within 7-day window)
[2026-02-07T14:10:45.593Z] [BOT] 💾 Saved posted_jobs.json: 1397 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T14:10:45.593Z] [BOT] ✅ Database saved successfully
[2026-02-07T14:10:45.594Z] [BOT ERROR] (node:2577) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T14:10:47.613Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2577) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*