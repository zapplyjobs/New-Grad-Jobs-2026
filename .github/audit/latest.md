# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T08:16:51.797Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T08:16:47.933Z] ========================================
[2026-02-07T08:16:47.936Z] Discord Bot Execution Log
[2026-02-07T08:16:47.936Z] Environment: GitHub Actions
[2026-02-07T08:16:47.936Z] Node Version: v20.20.0
[2026-02-07T08:16:47.936Z] ========================================
[2026-02-07T08:16:47.936Z] Environment Variables Check:
[2026-02-07T08:16:47.936Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T08:16:47.936Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T08:16:47.936Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T08:16:47.936Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T08:16:47.936Z] 
Multi-Channel Configuration:
[2026-02-07T08:16:47.937Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T08:16:47.937Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T08:16:47.937Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T08:16:47.937Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T08:16:47.937Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T08:16:47.937Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T08:16:47.937Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T08:16:47.937Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T08:16:47.937Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T08:16:47.937Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T08:16:47.937Z] 
Data Files Check:
[2026-02-07T08:16:47.938Z] .github/data/new_jobs.json: ✅ Exists (10 items, 137677 bytes)
[2026-02-07T08:16:47.973Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7246535 bytes)
[2026-02-07T08:16:47.973Z] 
========================================
[2026-02-07T08:16:47.973Z] Starting Enhanced Discord Bot...
[2026-02-07T08:16:47.973Z] ========================================
[2026-02-07T08:16:48.531Z] [BOT] ✅ Loaded V2 database: 1600 jobs
[2026-02-07T08:16:48.945Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T08:16:48.945Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T08:16:48.945Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T08:16:48.977Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T08:16:48.978Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T08:16:48.979Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T08:16:48.979Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T08:16:48.979Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T08:16:48.980Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T08:16:48.992Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T08:16:48.993Z] [BOT] 🚫 Skipping blacklisted job: Product Manager II - Semantic & Agentic Search AI at datadog
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
[2026-02-07T08:16:48.993Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
[2026-02-07T08:16:48.993Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
[2026-02-07T08:16:48.993Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
[2026-02-07T08:16:48.993Z] [BOT] 🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
🚫 Skipping blacklisted job: Senior Engineer, AI - Brex Assistant at brex
[2026-02-07T08:16:48.994Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Lead, Startups at brex
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Public Sector at datadog
🚫 Skipping blacklisted job: Real Estate Portfolio Manager at anthropic
[2026-02-07T08:16:48.994Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Senior Software Engineer, Multi Cloud at discord
[2026-02-07T08:16:48.994Z] [BOT] 🚫 Skipping blacklisted job: Senior Client Account Manager, Mid-Market (Goods) at reddit
🚫 Skipping blacklisted job: Lead Compliance Analyst at coinbase
🚫 Skipping blacklisted job: Senior Software Engineer, Product  at brex
🚫 Skipping blacklisted job: Product Manager II - Bits Chat & Agent Interface at datadog
[2026-02-07T08:16:48.994Z] [BOT] 🚫 Skipping blacklisted job: Senior Systems EPM at samsara
🚫 Skipping blacklisted job: Data Center Energy Lead at anthropic
[2026-02-07T08:16:48.994Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer - Key Accounts at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Inference at anthropic
🚫 Skipping blacklisted job: Manager, Forward Deployed Engineering at anthropic
[2026-02-07T08:16:48.994Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Creative Illustrator at discord
🚫 Skipping blacklisted job: Principal Partner Manager - Channels (Public Sector) at datadog
[2026-02-07T08:16:48.994Z] [BOT] 🚫 Skipping blacklisted job: Senior People Analyst at datadog
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Finance Systems, PMO Lead at anthropic
🚫 Skipping blacklisted job: Principal Partner - Cloud Alliances (GCP) at datadog
[2026-02-07T08:16:48.994Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Safeguards – Infrastructure & Evals at anthropic
🚫 Skipping blacklisted job: Product Marketing Manager (Network Monitoring) at datadog
🚫 Skipping blacklisted job: Product Marketing Manager (Cloud Integrations) at datadog
🚫 Skipping blacklisted job: Group Manager, Product Marketing (Cloud & Ecosystem) at datadog
🚫 Skipping blacklisted job: Senior Technical Curriculum Developer - Cloud Infrastructure at datadog
🚫 Skipping blacklisted job: Manager, Product Design at figma
[2026-02-07T08:16:48.994Z] [BOT] 🚫 Skipping blacklisted job: GRC Automation Lead  at anthropic
🚫 Skipping blacklisted job: Senior Manager, Tax Operations, Provision, and Compliance at anthropic
[2026-02-07T08:16:49.007Z] [BOT] ✅ Loaded pending queue: 218 total (168 pending, 50 enriched, 0 posted)
[2026-02-07T08:16:49.030Z] [BOT] ✅ Saved pending queue: 170 total (168 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (48 blacklisted)
[2026-02-07T08:16:49.030Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-07T08:16:49.030Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-07T08:16:49.030Z] [BOT] ℹ️ No routing entries to save
[2026-02-07T08:16:49.031Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
   Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-07T08:16:49.031Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-07T08:16:49.031Z] [BOT] Total posts: 0
   Channels used: 0
[2026-02-07T08:16:49.032Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T08:16:49.032Z] [BOT] 💾 BEFORE MERGE: 1600 jobs in memory (cached)
[2026-02-07T08:16:49.072Z] [BOT] ✅ Loaded V2 database: 1600 jobs
💾 DISK STATE: 1600 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1600
[2026-02-07T08:16:49.075Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T08:16:49.075Z] [BOT] 💾 AFTER MERGE: 1600 jobs (merged disk + memory)
[2026-02-07T08:16:49.077Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T08:16:49.083Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T08:16:49.083Z] [BOT] ✅ Archiving complete: 10 archived, 1590 active
[2026-02-07T08:16:49.159Z] [BOT] 💾 Saved posted_jobs.json: 1590 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T08:16:49.159Z] [BOT] ✅ Database saved successfully
[2026-02-07T08:16:49.159Z] [BOT ERROR] (node:2585) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T08:16:51.178Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2585) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*