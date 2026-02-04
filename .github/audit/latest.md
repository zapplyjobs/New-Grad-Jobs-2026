# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T23:49:40.477Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T23:49:36.260Z] ========================================
[2026-02-04T23:49:36.262Z] Discord Bot Execution Log
[2026-02-04T23:49:36.262Z] Environment: GitHub Actions
[2026-02-04T23:49:36.262Z] Node Version: v20.20.0
[2026-02-04T23:49:36.262Z] ========================================
[2026-02-04T23:49:36.262Z] Environment Variables Check:
[2026-02-04T23:49:36.262Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T23:49:36.262Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T23:49:36.262Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T23:49:36.263Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T23:49:36.263Z] 
Multi-Channel Configuration:
[2026-02-04T23:49:36.263Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T23:49:36.263Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:49:36.263Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:49:36.263Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T23:49:36.263Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:49:36.263Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:49:36.263Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:49:36.263Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:49:36.263Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T23:49:36.263Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T23:49:36.263Z] 
Data Files Check:
[2026-02-04T23:49:36.265Z] .github/data/new_jobs.json: ✅ Exists (10 items, 168489 bytes)
[2026-02-04T23:49:36.326Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11495862 bytes)
[2026-02-04T23:49:36.326Z] 
========================================
[2026-02-04T23:49:36.326Z] Starting Enhanced Discord Bot...
[2026-02-04T23:49:36.326Z] ========================================
[2026-02-04T23:49:36.906Z] [BOT] ✅ Loaded V2 database: 2265 jobs
[2026-02-04T23:49:37.457Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-04T23:49:37.457Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T23:49:37.458Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T23:49:37.481Z] [BOT] ✅ Loaded pending queue: 324 total (274 pending, 50 enriched, 0 posted)
[2026-02-04T23:49:37.481Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T23:49:37.482Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T23:49:37.483Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T23:49:37.483Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T23:49:37.483Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T23:49:37.483Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T23:49:37.484Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-04T23:49:37.484Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-04T23:49:37.484Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-04T23:49:37.485Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-04T23:49:37.502Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-04T23:49:37.503Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
[2026-02-04T23:49:37.503Z] [BOT] 🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer - Web Platform at discord
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
[2026-02-04T23:49:37.503Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
[2026-02-04T23:49:37.503Z] [BOT] 🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
[2026-02-04T23:49:37.503Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
[2026-02-04T23:49:37.504Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
[2026-02-04T23:49:37.504Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Strategic Sourcing Manager at discord
🚫 Skipping blacklisted job: Workplace Operations Program Manager at discord
🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
[2026-02-04T23:49:37.504Z] [BOT] 🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
🚫 Skipping blacklisted job: Campus Security Manager at anthropic
🚫 Skipping blacklisted job: Manager, Startup Account Executive at anthropic
🚫 Skipping blacklisted job: Engineering Manager at reddit
🚫 Skipping blacklisted job: Director of Product Design at duolingo
[2026-02-04T23:49:37.504Z] [BOT] 🚫 Skipping blacklisted job: Director, Engineering Operations at datadog
🚫 Skipping blacklisted job: Senior / Staff+ Software Engineer - Autonomous Agent Infrastructure at anthropic
[2026-02-04T23:49:37.504Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Build Systems at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
[2026-02-04T23:49:37.504Z] [BOT] 🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
[2026-02-04T23:49:37.504Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
[2026-02-04T23:49:37.505Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
[2026-02-04T23:49:37.505Z] [BOT] 🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
[2026-02-04T23:49:37.505Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
[2026-02-04T23:49:37.505Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
[2026-02-04T23:49:37.536Z] [BOT] ✅ Loaded pending queue: 324 total (274 pending, 50 enriched, 0 posted)
[2026-02-04T23:49:37.571Z] [BOT] ✅ Saved pending queue: 278 total (274 pending, 4 enriched, 0 posted)
🗑️ Removed 46 blacklisted jobs from pending queue
[2026-02-04T23:49:37.571Z] [BOT] 📋 After blacklist filter: 0 jobs (46 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 46 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T23:49:37.572Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T23:49:37.572Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T23:49:37.573Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T23:49:37.573Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T23:49:37.573Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T23:49:37.573Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T23:49:37.573Z] [BOT] 💾 BEFORE MERGE: 2265 jobs in memory (cached)
[2026-02-04T23:49:37.620Z] [BOT] ✅ Loaded V2 database: 2265 jobs
💾 DISK STATE: 2265 jobs on disk
[2026-02-04T23:49:37.621Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2265
[2026-02-04T23:49:37.626Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T23:49:37.626Z] [BOT] 💾 AFTER MERGE: 2265 jobs (merged disk + memory)
[2026-02-04T23:49:37.628Z] [BOT] ✅ No jobs to archive (all 2265 jobs within 7-day window)
[2026-02-04T23:49:37.766Z] [BOT] 💾 Saved posted_jobs.json: 2265 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-04T23:49:37.767Z] [BOT ERROR] (node:2500) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T23:49:39.790Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2500) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*