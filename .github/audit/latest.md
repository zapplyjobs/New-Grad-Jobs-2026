# Discord Bot Execution Audit
**Timestamp:** 2026-02-04T04:31:53.735Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-04T04:31:49.347Z] ========================================
[2026-02-04T04:31:49.349Z] Discord Bot Execution Log
[2026-02-04T04:31:49.349Z] Environment: GitHub Actions
[2026-02-04T04:31:49.349Z] Node Version: v20.20.0
[2026-02-04T04:31:49.349Z] ========================================
[2026-02-04T04:31:49.349Z] Environment Variables Check:
[2026-02-04T04:31:49.349Z] DISCORD_TOKEN: ✅ Set
[2026-02-04T04:31:49.349Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-04T04:31:49.349Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-04T04:31:49.350Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-04T04:31:49.350Z] 
Multi-Channel Configuration:
[2026-02-04T04:31:49.350Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-04T04:31:49.350Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-04T04:31:49.350Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-04T04:31:49.350Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-04T04:31:49.350Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-04T04:31:49.350Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-04T04:31:49.350Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-04T04:31:49.350Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-04T04:31:49.350Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-04T04:31:49.350Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-04T04:31:49.350Z] 
Data Files Check:
[2026-02-04T04:31:49.352Z] .github/data/new_jobs.json: ✅ Exists (10 items, 152918 bytes)
[2026-02-04T04:31:49.409Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11471726 bytes)
[2026-02-04T04:31:49.410Z] 
========================================
[2026-02-04T04:31:49.410Z] Starting Enhanced Discord Bot...
[2026-02-04T04:31:49.410Z] ========================================
[2026-02-04T04:31:49.984Z] [BOT] ✅ Loaded V2 database: 2265 jobs
[2026-02-04T04:31:50.455Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-04T04:31:50.455Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-04T04:31:50.455Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-04T04:31:50.476Z] [BOT] ✅ Loaded pending queue: 312 total (262 pending, 50 enriched, 0 posted)
[2026-02-04T04:31:50.476Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T04:31:50.477Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-04T04:31:50.477Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-04T04:31:50.478Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-04T04:31:50.478Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-04T04:31:50.478Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-04T04:31:50.497Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-04T04:31:50.497Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-02-04T04:31:50.497Z] [BOT] 🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Program Manager, Responsible Scaling Policy at anthropic
[2026-02-04T04:31:50.498Z] [BOT] 🚫 Skipping blacklisted job: Research Operations & Strategy Lead, Coding & Cybersecurity Data at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
[2026-02-04T04:31:50.498Z] [BOT] 🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
[2026-02-04T04:31:50.498Z] [BOT] 🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
[2026-02-04T04:31:50.498Z] [BOT] 🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
[2026-02-04T04:31:50.498Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
[2026-02-04T04:31:50.498Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
[2026-02-04T04:31:50.498Z] [BOT] 🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
[2026-02-04T04:31:50.498Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
[2026-02-04T04:31:50.498Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
🚫 Skipping blacklisted job: Staff + Senior Software Engineer, Cloud Inference at anthropic
🚫 Skipping blacklisted job: Manager, Sales Development - Boston at datadog
🚫 Skipping blacklisted job: Director of Data and Analytics Engineering at discord
🚫 Skipping blacklisted job: Director of Engineering, Security Operations at discord
[2026-02-04T04:31:50.499Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Staff Data Engineer, Ads at discord
🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
🚫 Skipping blacklisted job: Senior Software Engineer, Connected Workflows at samsara
[2026-02-04T04:31:50.499Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-04T04:31:50.499Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Math at duolingo
🚫 Skipping blacklisted job: Senior Android Engineer at duolingo
🚫 Skipping blacklisted job: Senior iOS Software Engineer at duolingo
🚫 Skipping blacklisted job: Senior Scaling Operations Program Manager at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Forecasting in Monetization at duolingo
[2026-02-04T04:31:50.499Z] [BOT] 🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
🚫 Skipping blacklisted job: Product Strategy & Operations, Lead  at anthropic
🚫 Skipping blacklisted job: Manager, Software Engineering - Design Systems Management  at figma
🚫 Skipping blacklisted job: Product Lead, Healthcare at anthropic
[2026-02-04T04:31:50.528Z] [BOT] ✅ Loaded pending queue: 312 total (262 pending, 50 enriched, 0 posted)
[2026-02-04T04:31:50.561Z] [BOT] ✅ Saved pending queue: 264 total (262 pending, 2 enriched, 0 posted)
🗑️ Removed 48 blacklisted jobs from pending queue
[2026-02-04T04:31:50.561Z] [BOT] 📋 After blacklist filter: 0 jobs (48 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 48 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-04T04:31:50.562Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-04T04:31:50.562Z] [BOT] ℹ️ No routing entries to save
[2026-02-04T04:31:50.563Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_46933226.jsonl
[2026-02-04T04:31:50.563Z] [BOT] Total attempts: 50
   Successful: 0
   Failed: 0
   Skipped: 50
[2026-02-04T04:31:50.563Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-04T04:31:50.563Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-04T04:31:50.564Z] [BOT] 💾 BEFORE MERGE: 2265 jobs in memory (cached)
[2026-02-04T04:31:50.606Z] [BOT] ✅ Loaded V2 database: 2265 jobs
💾 DISK STATE: 2265 jobs on disk
[2026-02-04T04:31:50.607Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2265
[2026-02-04T04:31:50.612Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-04T04:31:50.612Z] [BOT] 💾 AFTER MERGE: 2265 jobs (merged disk + memory)
[2026-02-04T04:31:50.613Z] [BOT] ✅ No jobs to archive (all 2265 jobs within 7-day window)
[2026-02-04T04:31:50.750Z] [BOT] 💾 Saved posted_jobs.json: 2265 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-04T04:31:50.750Z] [BOT] ✅ Database saved successfully
[2026-02-04T04:31:50.750Z] [BOT ERROR] (node:2534) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-04T04:31:52.774Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2534) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*