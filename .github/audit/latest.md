# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T04:34:50.088Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T04:34:45.363Z] ========================================
[2026-02-05T04:34:45.365Z] Discord Bot Execution Log
[2026-02-05T04:34:45.365Z] Environment: GitHub Actions
[2026-02-05T04:34:45.365Z] Node Version: v20.20.0
[2026-02-05T04:34:45.365Z] ========================================
[2026-02-05T04:34:45.365Z] Environment Variables Check:
[2026-02-05T04:34:45.365Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T04:34:45.365Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T04:34:45.365Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T04:34:45.366Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T04:34:45.366Z] 
Multi-Channel Configuration:
[2026-02-05T04:34:45.366Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T04:34:45.366Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T04:34:45.366Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T04:34:45.366Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T04:34:45.366Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T04:34:45.366Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T04:34:45.366Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T04:34:45.366Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T04:34:45.366Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T04:34:45.366Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T04:34:45.366Z] 
Data Files Check:
[2026-02-05T04:34:45.368Z] .github/data/new_jobs.json: ✅ Exists (10 items, 163022 bytes)
[2026-02-05T04:34:45.442Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11514248 bytes)
[2026-02-05T04:34:45.442Z] 
========================================
[2026-02-05T04:34:45.442Z] Starting Enhanced Discord Bot...
[2026-02-05T04:34:45.442Z] ========================================
[2026-02-05T04:34:45.964Z] [BOT] ✅ Loaded V2 database: 2267 jobs
[2026-02-05T04:34:46.675Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T04:34:46.675Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T04:34:46.675Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T04:34:46.705Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-05T04:34:46.706Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T04:34:46.707Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T04:34:46.707Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-05T04:34:46.707Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T04:34:46.708Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-05T04:34:46.708Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T04:34:46.709Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T04:34:46.709Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T04:34:46.709Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T04:34:46.722Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-05T04:34:46.722Z] [BOT] 🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
[2026-02-05T04:34:46.722Z] [BOT] 🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
[2026-02-05T04:34:46.723Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
[2026-02-05T04:34:46.723Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
[2026-02-05T04:34:46.723Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
[2026-02-05T04:34:46.723Z] [BOT] 🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager at reddit
[2026-02-05T04:34:46.723Z] [BOT] 🚫 Skipping blacklisted job: Director of Product Design at duolingo
🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
[2026-02-05T04:34:46.723Z] [BOT] 🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
[2026-02-05T04:34:46.723Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
[2026-02-05T04:34:46.723Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
[2026-02-05T04:34:46.723Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
🚫 Skipping blacklisted job: Marketing Events Lead, Enterprise at anthropic
🚫 Skipping blacklisted job: Senior Accounts Payable Specialist at anthropic
[2026-02-05T04:34:46.759Z] [BOT] ✅ Loaded pending queue: 320 total (270 pending, 50 enriched, 0 posted)
[2026-02-05T04:34:46.792Z] [BOT] ✅ Saved pending queue: 274 total (270 pending, 4 enriched, 0 posted)
[2026-02-05T04:34:46.792Z] [BOT] 🗑️ Removed 46 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (46 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-05T04:34:46.792Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-05T04:34:46.792Z] [BOT] ℹ️ No routing entries to save
[2026-02-05T04:34:46.793Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T04:34:46.793Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-05T04:34:46.793Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-05T04:34:46.793Z] [BOT] [STATS] Channel stats saved
[2026-02-05T04:34:46.793Z] [BOT] 💾 Saving posted jobs database...
[2026-02-05T04:34:46.794Z] [BOT] 💾 BEFORE MERGE: 2267 jobs in memory (cached)
[2026-02-05T04:34:46.854Z] [BOT] ✅ Loaded V2 database: 2267 jobs
💾 DISK STATE: 2267 jobs on disk
[2026-02-05T04:34:46.855Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2267
[2026-02-05T04:34:46.860Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T04:34:46.861Z] [BOT] 💾 AFTER MERGE: 2267 jobs (merged disk + memory)
[2026-02-05T04:34:46.862Z] [BOT] ✅ No jobs to archive (all 2267 jobs within 7-day window)
[2026-02-05T04:34:47.011Z] [BOT] 💾 Saved posted_jobs.json: 2267 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T04:34:47.011Z] [BOT] ✅ Database saved successfully
[2026-02-05T04:34:47.012Z] [BOT ERROR] (node:2573) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T04:34:49.029Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2573) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*